import { Request, Response, Router } from "express";
import { shortenLink } from "../controllers/shorten.controller";
import { encryptLink } from "../controllers/encrypter.controller";
import { expireLink } from "../controllers/expirerLink.controller";
import { encrypterRedirect } from "../controllers/encrypterRedirect.controller";

export const MainRouter = Router();

MainRouter.post("/shortenLink", (req, res) => {
  shortenLink(req, res);
});

MainRouter.post("/encryptLink", (req, res) => {
  encryptLink(req, res);
});

MainRouter.post("/expirerLink", (req, res) => {
  expireLink(req, res);
});

MainRouter.post("/passChecker", (req, res) => {
  encrypterRedirect(req, res);
});
