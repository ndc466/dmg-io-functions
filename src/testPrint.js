const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors({ origin: true }));

app.post("/", async (req, res) => res.send("Hello!"));

exports.testPrint = functions.https.onRequest(app);
