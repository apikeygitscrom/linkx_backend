import { Request, Response } from "express";
import { encrypterRedirect } from "./encrypterRedirect.controller";
import { shortenRedirect } from "./shortenRedirect.controller";
import { ERROR_CODES, HttpStatus } from "../types";
import { FRONTEND_URL } from "../config/app.config";
import { expireLink } from "./expirerLink.controller";
import { expirerRedirect } from "./expirerRedirect.controller";

export const redirectController = async (req: Request, res: Response) => {
  try {
    const params = req.params.link;
    if (params.split("-")[0] == "e") {
      return res.redirect(`${FRONTEND_URL}`+"/encrypted" + `/${params}`);
    } else if (params.split("-")[0] == "x") {
      await expirerRedirect(req, res);
    } else {
      await shortenRedirect(req, res);
    }
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
