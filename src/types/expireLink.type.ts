import { z } from "zod";

export const expireLinkType = z.object({
  link: z.string().url(),
  dateAndTime: z.date()
});
