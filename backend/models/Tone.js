// models/tone.js
const mongoose = require("mongoose");

const ToneSchema = new mongoose.Schema({
  toneName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  audioFile: {
    type: String,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
});

module.exports = mongoose.model("Tone", ToneSchema);
