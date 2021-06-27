const express = require("express");
const users = require("../db/user.json");
const app = express();

app.use(express.Router());

// Get /user
app.get("/v1/user", (req, res, next) => res.json(users));
app.get("/v1/user/:id", (req, res, next) => {
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).send("ID not found");
  }
});

app.use(express.json());

// Post /user
app.post("/v1/user", (req, res, next) => {
  const { name, email, password } = req.body;
  const id = users[users.length - 1].id + 1;
  const newUser = {
    id,
    name,
    email,
    password,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = app;
