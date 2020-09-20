const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true });
const nodemailer = require("nodemailer");
const Email = require("./models/Email");
const mandrillTransport = require("nodemailer-mandrill-transport");
const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors({ origin: true }));
var smtpTransport = nodemailer.createTransport(
  mandrillTransport({ auth: { apiKey: process.env.API_KEY } })
);

app.post("/", async (req, res) =>
  res.send(Email(req.body, smtpTransport).sendEmail(admin))
);

exports.sendVerificationEmail = functions.https.onRequest(app);
