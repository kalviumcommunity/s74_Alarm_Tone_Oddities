const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET: Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Create a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and Password are required" });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
