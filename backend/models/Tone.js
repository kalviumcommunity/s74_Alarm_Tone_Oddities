// models/tones.js
const db = require('../config/db'); // Import the MySQL connection setup

const ToneSchema = {
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
    type: String, // 'String' since it's an ID referencing the 'users' table
    required: true,
  },
};

// Tone Model - Handles database queries for the tones table
class Tone {
  // Fetch all tones created by a specific user
  static async findByUser(userId) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM tones WHERE created_by = ?',
        [userId]
      );
      return rows;
    } catch (err) {
      throw err;
    }
  }

  // Add a new tone to the database
  static async create(toneData) {
    try {
      const { toneName, description, audioFile, createdBy } = toneData;
      const [result] = await db.execute(
        'INSERT INTO tones (toneName, description, audioFile, created_by) VALUES (?, ?, ?, ?)',
        [toneName, description, audioFile, createdBy]
      );
      return result.insertId; // Return the ID of the new tone
    } catch (err) {
      throw err;
    }
  }

  // Get all tones (for testing or admin)
  static async getAll() {
    try {
      const [rows] = await db.execute('SELECT * FROM tones');
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Tone;
