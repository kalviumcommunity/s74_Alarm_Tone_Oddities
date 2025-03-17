require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const toneRoutes = require("./routes/toneRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes

const app = express();
const PORT = process.env.PORT || 5000
;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database Connected Successfully!"))
  .catch((error) => {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.use("/api/tones", toneRoutes);
app.use("/api/users", userRoutes); // Register user routes

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
