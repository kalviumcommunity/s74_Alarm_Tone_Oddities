const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3000;  // Use process.env.PORT for dynamic environments
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Fixed string interpolation
});
