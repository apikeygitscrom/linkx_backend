import { Request, Response } from "express";
import { EncryptLinkModel } from "../model/encryptLink.model";
import { ERROR_CODES, HttpStatus } from "../types";
import { FRONTEND_URL } from "../config/app.config";
import bcrypt from "bcrypt";

export const encrypterRedirect = async (req: Request, res: Response) => {
  try {
    const { encryptedLink, password } = req.body;
    const originalLink = await EncryptLinkModel.findOne({ encryptedLink });

    if (!originalLink) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        error: {
          code: ERROR_CODES.RESOURCE_NOT_FOUND.code,
          message: ERROR_CODES.RESOURCE_NOT_FOUND.message,
        },
      });
    }

    let checkPassword = await bcrypt.compare(password, originalLink.password);

    if (checkPassword) {
      return res.status(HttpStatus.OK).json({
        success: true,
        data: {
          passwordCheckeredLink: originalLink?.link,
        },
      });
    }

    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      success: false,
      error: {
        code: ERROR_CODES.INCORRECT_PASSWORD.code,
        message: ERROR_CODES.INCORRECT_PASSWORD.message,
      },
    });
  } catch (error) {
    console.error(error);
    return res.redirect(`${FRONTEND_URL}` + "/someError");
  }
};
