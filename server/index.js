const express = require("express");

const app = express();
require("dotenv").config();
const cors = require("cors");
const { default: axios } = require("axios");

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Mpesa backend");
});

const paymentRoute = require("./routes/mpesa")
app.use("/mpesa", paymentRoute)


app.listen(5000, () => {
  console.log("server run nicely");
});