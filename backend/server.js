require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); // Import routes.js

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ Database Connected Successfully!");
}).catch((error) => {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1); // Exit if database connection fails
});

app.use(express.json()); // Middleware to parse JSON

// ✅ Use routes.js for all API endpoints
app.use("/", routes);

// Test Route (optional, for debugging the root route)
app.get("/api", (req, res) => {
    res.send("API is working fine at /api!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
