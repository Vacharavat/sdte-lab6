const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Frame");
});

module.exports = app;
