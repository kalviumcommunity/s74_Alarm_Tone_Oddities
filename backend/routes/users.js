const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a User model

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Get all users from the database
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
