// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const User = require('./models/user'); // User model for authentication
const db = require('./config/db'); // MySQL connection
require('dotenv').config();

// Initialize the app
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// MySQL connection setup (assuming you are using MySQL)
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('MySQL connected successfully');
});

// Tone Schema (Using MySQL)
const ToneSchema = {
  toneName: String,
  description: String,
  audioFile: String,
};

// API to fetch tones
app.get("/api/tones", async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM tones');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching tones:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API to create a tone
app.post("/api/tones", async (req, res) => {
  const { toneName, description, audioFile } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO tones (toneName, description, audioFile) VALUES (?, ?, ?)',
      [toneName, description, audioFile]
    );
    res.status(201).json({
      id: result.insertId,
      toneName,
      description,
      audioFile,
    });
  } catch (err) {
    console.error('Error creating tone:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User Routes for Registration and Login
const userRouter = require('./routes/users'); // Import user routes
app.use('/users', userRouter);

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
