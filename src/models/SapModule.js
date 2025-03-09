import mongoose from "mongoose";

const SapModuleSchema = new mongoose.Schema({
  title: String,
  description: String,
  features: [String],
  pdfLinks: [String],
});

export default mongoose.models.SapModule || mongoose.model("SapModule", SapModuleSchema);
