const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
const userRoutes = require("./routes/users"); // adjust path if needed
app.use("/api/users", userRoutes);

// Test route
app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
