import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    shortenedLink: { type: String, required: true },
  },
  { timestamps: true }
);

export const ShortenLinkModel = mongoose.model("ShortenLink", LinkSchema);
