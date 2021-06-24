const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("games", { title: "Try Out The Games" });
});

module.exports = router;
