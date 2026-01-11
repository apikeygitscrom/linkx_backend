import { z } from "zod";

export const shortenLinkType = z.object({
  link: z.string().url(),
});
