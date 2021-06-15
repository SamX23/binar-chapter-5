const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// Define home page route
router.get("/", (req, res) => res.send("Home"));
router.get("/about", (req, res) => res.send("About"));

module.exports = router;
