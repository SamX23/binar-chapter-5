const express = require("express");
const router = express.Router();
const { HOME, GAME } = require("./endpoint");

const timeDetector = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeDetector);

// Define home page route
router.get(HOME, (req, res) => res.render("index"));
router.get(GAME, (req, res) => res.render("games"));

module.exports = router;
