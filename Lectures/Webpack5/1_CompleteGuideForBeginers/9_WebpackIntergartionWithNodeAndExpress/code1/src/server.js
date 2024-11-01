const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", function (req, res) {
  /**
   * see use of path.resolve it gets __dirname and then we can append absolute path to it
   * we get an error when we try to only use absolute path
   */
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  //const pathToHtmlFile = path.resolve("../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(3000, function () {
  console.log("Application is running on http://localhost:3000/");
});
