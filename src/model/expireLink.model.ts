import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    expirerLink: { type: String, required: true },
  },
  { timestamps: true }
);

export const ExpireLinkModel = mongoose.model("ExpireLink", LinkSchema);
