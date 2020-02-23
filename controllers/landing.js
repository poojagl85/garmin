const express = require("express");
const Router = express();

Router.get("/", (req, res) => {
  res.render("index");
});
Router.get("/downloads", (req, res) => {
  res.render("download");
});

module.exports = Router;
