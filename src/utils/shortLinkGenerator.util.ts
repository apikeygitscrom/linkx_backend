import { randomBytes } from "crypto";

export const shortLinkGenerator = () => {
  return randomBytes(2).toString("hex");
};