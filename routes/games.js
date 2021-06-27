const { json } = require("express");
const express = require("express");
const users = require("../db/user.json");
const router = express.Router();

router.get("/", (req, res, next) => {
  const name = req.query.name || "Player";
  const userName = users.find((item) => item.name);
  res.render("games", {
    title: "Try Out The Games",
    name: userName.name,
  });
});

module.exports = router;
