import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    password: { type: String, required: true },
    encryptedLink: { type: String, required: true },
  },
  { timestamps: true }
);

export const EncryptLinkModel = mongoose.model("EncryptLink", LinkSchema);
