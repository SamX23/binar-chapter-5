const express = require("express");
const app = express();
const fs = require("fs");
const router = require("./router");
const PORT = 3000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
// app.use(router);

// Internal server error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

// Page not found error handler
app.use((err, req, res, next) => {
  req.status(404).json({
    status: "fail",
    errors: "Sorry, page not found. :)",
  });
});

const GET = (endpoint, headers, body) => {
  app.get(endpoint, (request, response) => {
    response.set(headers);
    response.json(body);
  });
};

const GEThtml = (endpoint, headers, body) => {
  app.get(endpoint, (request, response) => {
    response.set(headers);
    fs.readFile(body, (error, data) => {
      if (!error) {
        response.send(data);
      } else {
        response.send("No Data");
      }
    });
  });
};

let apiHeader = { "Content-Type": "application/json" };
let htmlHeader = { "Content-Type": "text/html" };

GEThtml("/", htmlHeader, "./views/index.html");

app.listen(PORT, () =>
  console.log(`This app listening on http://localhost:${PORT}`)
);
