import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: "draft" },
  schema: { type: String, required: true },
  version: { type: Number },
});

export const Form = mongoose.model("Form", FormSchema);
