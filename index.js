const express = require("express");
const app = express();

const PORT = 3000;

// Endpoint handler
app.get("/", (req, res) => res.render("/src/pages/index.html"));
app.get("/games", (req, res) => res.render("/src/pages/games.html"));

app.listen(PORT, () =>
  console.log(`This app listening on http://localhost:${PORT}`)
);
