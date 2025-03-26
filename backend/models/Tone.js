const mongoose = require("mongoose");

const toneSchema = new mongoose.Schema(
  {
    toneName: { type: String, required: true, unique: true }, 
    description: { type: String },
    audioFile: { type: String, required: true }, 
  },
  { timestamps: true }
);

const Tone = mongoose.model("Tone", toneSchema);
module.exports = Tone;
