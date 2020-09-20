/* const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true }); */

const { sendTest, sendVerificationEmail, testPrint } = require("./src");

exports.sendTest = sendTest;
exports.sendVerificationEmail = sendVerificationEmail;
exports.testPrint = testPrint;
