const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3000;

// Application level middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route level middleware
app.use(router);

app.get("/games", (req, res) =>
  res.sendFile(path.join(__dirname + "/index.html"))
);

app.listen(PORT, () =>
  console.log(`This app listening on http://localhost:${PORT}`)
);
