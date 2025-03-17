const express = require("express");
const router = express.Router();
const Tone = require("../models/Tone");

// GET: Retrieve all alarm tones
router.get("/", async (req, res) => {  // ✅ Add "/all" route
    try {
      const tones = await Tone.find();
      res.json(tones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// GET: Retrieve a single alarm tone by ID
router.get("/:id", async (req, res) => {
  try {
    const tone = await Tone.findById(req.params.id);
    if (!tone) {
      return res.status(404).json({ error: "Tone not found" });
    }
    res.status(200).json(tone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Add a new alarm tone
router.post("/add", async (req, res) => {
  try {
    const { toneName, description, audioFile } = req.body;

    if (!toneName || !audioFile) {
      return res.status(400).json({ error: "Tone name and audio file are required" });
    }

    const newTone = new Tone({ toneName, description, audioFile });
    await newTone.save();
    res.status(201).json({ message: "Alarm tone added successfully!", newTone });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;