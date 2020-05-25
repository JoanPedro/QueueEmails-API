import nodemailer from 'nodemailer';

module.exports = server => {
  const mailConfig = server.src.config.mail.mailConfig;
  const mailerTransport = nodemailer.createTransport(mailConfig);

  return { mailerTransport }
}