// routes/toneRoutes.js
const express = require("express");
const Tone = require("../models/Tone");
const User = require("../models/user"); // Assuming you have a User model
const router = express.Router();

// Get all tones, optionally filter by created_by
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { created_by: userId } : {};
    const tones = await Tone.find(filter).populate("created_by", "name email");
    res.json(tones);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tones", error });
  }
});

// Get a specific tone by ID
router.get("/:id", async (req, res) => {
  try {
    const tone = await Tone.findById(req.params.id).populate("created_by", "name email");
    if (!tone) return res.status(404).json({ message: "Tone not found" });
    res.json(tone);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tone", error });
  }
});

// Create a new tone
router.post("/", async (req, res) => {
  try {
    const { toneName, description, audioFile, created_by } = req.body;
    if (!toneName || !description || !audioFile || !created_by) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate if user exists
    const userExists = await User.findById(created_by);
    if (!userExists) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const newTone = new Tone({ toneName, description, audioFile, created_by });
    await newTone.save();
    res.status(201).json(newTone);
  } catch (error) {
    res.status(500).json({ message: "Error creating tone", error });
  }
});

// Update a tone
router.put("/:id", async (req, res) => {
  try {
    const { toneName, description, audioFile, created_by } = req.body;
    const updatedTone = await Tone.findByIdAndUpdate(
      req.params.id,
      { toneName, description, audioFile, created_by },
      { new: true }
    );
    if (!updatedTone) return res.status(404).json({ message: "Tone not found" });
    res.json(updatedTone);
  } catch (error) {
    res.status(500).json({ message: "Error updating tone", error });
  }
});

// Delete a tone
router.delete("/:id", async (req, res) => {
  try {
    const deletedTone = await Tone.findByIdAndDelete(req.params.id);
    if (!deletedTone) return res.status(404).json({ message: "Tone not found" });
    res.json({ message: "Tone deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tone", error });
  }
});

module.exports = router;
