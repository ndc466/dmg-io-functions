const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const mandrillTransport = require("nodemailer-mandrill-transport");
const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors({ origin: true }));

var smtpTransport = nodemailer.createTransport(
  mandrillTransport({ auth: { apiKey: process.env.API_KEY } })
);

app.post("/", async (req, res) => {
  const { recipient, email } = req.body;
  console.log("executing testEmail ...");
  res.send({ result: `Message: ${writeResult.id} added.` });
  /* const { recipient, email } = req.body;
  let mailOptions = {
    from: "nd.corc@gmail.com",
    to: recipient,
    subject: "This is a test",
    html:
      "Hello,<br>Sending this email using Node and Mandrill with the following message:<br>" +
      email,
  };
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) throw new Error("Error in sending email");
    console.log("Message sent: " + JSON.stringify(response));
  });
  res.send({ result: `Message: ${writeResult.id} added.` }); */
});

exports.testEmail = functions.https.onRequest(app);
