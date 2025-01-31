const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    email: "ubokabasi135@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/basii199/HNG-Tech/",
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
