const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am a EndPoint");
});

app.listen(7777, () => console.log("Listening on Port 7777"));
