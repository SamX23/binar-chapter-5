const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const name = req.query.user || "Player";
  res.render("games", { title: "Try Out The Games", name: name });
});

module.exports = router;
