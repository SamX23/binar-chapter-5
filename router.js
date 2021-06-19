const express = require("express");
const router = express.Router();

const timeDetector = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeDetector);

// Define home page route
router.get("/", (req, res) => res.render("index"));
router.get("/games", (req, res) => res.render("games"));

module.exports = router;
