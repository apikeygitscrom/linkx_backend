import { Request, Response } from "express";
import { encryptLinkType } from "../types/encryptLink.type";
import { EncryptLinkModel } from "../model/encryptLink.model";
import { shortLinkGenerator } from "../utils/shortLinkGenerator.util";
import { ERROR_CODES, HttpStatus } from "../types";
import bcrypt from "bcrypt";

export const encryptLink = async (req: Request, res: Response) => {
  try {
    const validateData = encryptLinkType.safeParse(req.body);

    if (!validateData.success) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        error: {
          code: ERROR_CODES.INVALID_INPUT.code,
          message: ERROR_CODES.INVALID_INPUT.message,
        },
      });
    }

    const dataExists = await EncryptLinkModel.findOne({
      link: validateData.data.link,
    });

    if (dataExists) {
      return res.status(HttpStatus.OK).json({
        success: true,
        data: {
          encryptedLink: dataExists.encryptedLink,
        },
      });
    }

    let newEncryptedLink = "e-" + shortLinkGenerator();

    while (await EncryptLinkModel.findOne({ expirerLink: newEncryptedLink })) {
      newEncryptedLink = "e-" + shortLinkGenerator();
    }

    let pass = await bcrypt.hash(validateData.data.password, 10);

    await EncryptLinkModel.create({
      link: validateData.data.link,
      password: pass,
      encryptedLink: newEncryptedLink,
    });

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        encryptedLink: newEncryptedLink,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: {
        code: ERROR_CODES.INTERNAL_SERVER_ERROR.code,
        message: ERROR_CODES.INTERNAL_SERVER_ERROR.message,
      },
    });
  }
};
