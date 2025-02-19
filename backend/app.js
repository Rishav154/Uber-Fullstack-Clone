const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./db/database");
const userRoutes = require("./routes/user.routes");
const app = express();

connectToDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);

module.exports = app;
