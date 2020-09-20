const emailTemplate = require("./email_template");

class Email {
  constructor({ toEmail, toName, url, bundleId, domain }, transport) {
    this.toEmail = toEmail;
    this.toName = toName;
    this.actionCode = {
      url: url,
      handleCodeInApp: true,
      iOS: { bundleId: bundleId },
      dynamicLinkDomain: domain,
    };
    this.transport = transport;
  }

  compose() {
    this.email = this.transport.templateSender(
      {
        subject: "Confirm {{ email }} on DMG.io",
        text:
          "Hello, {{ fullName }}, please confirm {{}} by clicking this link: {{ dynamicLink }}",
        html: emailTemplate,
      },
      { from: process.env.NO_REPLY }
    );
  }

  send() {
    this.result = this.email(
      { to: toEmail },
      {
        email: toEmail,
        fullName: toName,
        dynamicLink: link,
      },
      (err, info) => {
        if (err) throw err;
        else return info;
      }
    );
  }

  async sendEmail(admin) {
    try {
      this.link = await admin
        .auth()
        .generateSignInWithEmailLink(recipient, actionCode);
      this.compose();
      this.send();
      console.log("Verification email sent: " + this.result);
    } catch (e) {
      console.log("error: " + error);
    }
    return this.result;
  }
}
