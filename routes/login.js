const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const user = req.query.user || null;
  res.json([
    {
      id: 1,
      user: user,
      email: "me@kalamallah.xyz",
    },
  ]);
});

module.exports = router;
