const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",         // Replace with your database host
  user: "your_username",     // Replace with your database username
  password: "your_password", // Replace with your database password
  database: "your_database", // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
