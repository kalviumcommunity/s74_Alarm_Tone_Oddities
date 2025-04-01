// models/user.js
const db = require('../config/db'); // MySQL database connection
const bcrypt = require('bcrypt'); // For password hashing

// Mongoose-like schema with MySQL
class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
  }

  // Create a new user in the MySQL database
  static async create(username, password) {
    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      const [result] = await db.execute(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hashedPassword]
      );
      return new User({ id: result.insertId, username, password: hashedPassword }); // Return new user instance
    } catch (err) {
      throw err;
    }
  }

  // Find a user by their username in MySQL
  static async findByUsername(username) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
      );
      if (rows.length === 0) return null; // No user found
      return new User(rows[0]); // Return user instance
    } catch (err) {
      throw err;
    }
  }

  // Compare the provided password with the hashed password
  static async comparePassword(storedPassword, providedPassword) {
    return await bcrypt.compare(providedPassword, storedPassword);
  }

  // Update user password (if needed)
  static async updatePassword(userId, newPassword) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.execute(
        'UPDATE users SET password = ? WHERE id = ?',
        [hashedPassword, userId]
      );
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;
