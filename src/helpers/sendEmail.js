const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL_PASSWORD, MAIL_APP } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_APP,
    pass: MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_APP };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
