const mongoose = require("mongoose");

const toneSchema = new mongoose.Schema({
  toneName: { type: String, required: true }, // Updated from title to toneName
  description: { type: String },
  audioFile: { type: String, required: true }, // Updated from audioUrl to audioFile
}, { timestamps: true });

const Tone = mongoose.model("Tone", toneSchema);
module.exports = Tone;