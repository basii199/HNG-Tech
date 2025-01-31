const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "ubokabasi135@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/basi199/",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
