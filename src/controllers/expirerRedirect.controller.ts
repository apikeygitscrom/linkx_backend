import { Request, Response } from "express";
import { ExpireLinkModel } from "../model/expireLink.model";
import { FRONTEND_URL } from "../config/app.config";

export const expirerRedirect = async (req: Request, res: Response) => {
  try {
    const expirerLink = req.params.link;
    const originalLink = await ExpireLinkModel.findOne({ expirerLink });

    if (!originalLink) {
      return res.redirect(`${FRONTEND_URL}` + "/notfound");
    }

    if (originalLink.dateAndTime) {
      const now = new Date(new Date().toUTCString());
      const expiresAt = new Date(new Date(originalLink.dateAndTime).toUTCString());

      if (now > expiresAt) {
        return res.redirect(`${FRONTEND_URL}` + "/notfound");
      }
    }

    res.redirect(originalLink.link);
  } catch (error) {
    console.error(error);
    return res.redirect(`${FRONTEND_URL}` + "/someError");
  }
};
