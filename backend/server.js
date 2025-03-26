const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB connected Successfully"))
    .catch((err)=>console.log(err))


const ToneSchema = new mongoose.Schema({
  toneName: String,
  description: String,
  audioFile: String,
});

const Tone = mongoose.model("Tone", ToneSchema);

app.get("/api/tones", async (req, res) => {
  const tones = await Tone.find();
  res.json(tones);
});

app.post("/api/tones", async (req, res) => {
  const newTone = new Tone(req.body);
  await newTone.save();
  res.status(201).json(newTone);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
