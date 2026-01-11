import { Request, Response } from "express";
import { shortLinkGenerator } from "../utils/shortLinkGenerator.util";
import { shortenLinkType } from "../types/shortenLink.type";
import { ShortenLinkModel } from "../model/shortLink.model";
import { ERROR_CODES, HttpStatus } from "../types";

export const shortenLink = async (req: Request, res: Response) => {
  try {
    const validateData = shortenLinkType.safeParse(req.body);

    if (!validateData.success) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        error: {
          code: ERROR_CODES.INVALID_INPUT.code,
          message: ERROR_CODES.INVALID_INPUT.message,
        },
      });
    }

    const dataExists = await ShortenLinkModel.findOne({
      link: validateData.data.link,
    });

    if (dataExists) {
      return res.status(HttpStatus.OK).json({
        success: true,
        data: {
          shortenedLink: dataExists.shortenedLink,
        },
      });
    }

    let newShortLink = "s-" + shortLinkGenerator();

    while (await ShortenLinkModel.findOne({ expirerLink: newShortLink })) {
      newShortLink = "s-" + shortLinkGenerator();
    }

    await ShortenLinkModel.create({ ...req.body, shortenedLink: newShortLink });

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        shortenedLink: newShortLink,
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
