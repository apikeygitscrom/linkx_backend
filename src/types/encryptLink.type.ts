import { z } from "zod";

export const encryptLinkType = z.object({
  link: z.string().url(),
  password: z.string(),
});
