const { response } = require("express");
const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
require("./database").connect();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/movies",require("./routes/movieRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({message: "ok"})
});
app.listen(port, () =>
  console.log(`Listen is on Port at http://localhost:${port} Ctrl + C to Stop `)
);

const movieRoutes = require("./routes/movieRoutes");

//simple API
app.get("/test", (req, res) => {
  res.status(200).json({ message: "ok" });
});
app.get("/time", (req, res) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  res.status(200).json({ message: `${hours} : ${minutes}` });
});
//complicate API
app.get("/hello", (req, res) => {
  const ID = "";
  res.send({ status: 200, message: "Hello, <ID>" });
});
app.get("/search", (req, res) => {
  console.log(req.query.s);
  if (typeof req.query.s == "undefined" || req.query.s === "") {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  } else {
    res.send({ status: 200, message: "ok", data: search });
  }
});
//basis for CRUD
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rGETating: 6.2 },
];
