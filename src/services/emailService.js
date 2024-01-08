import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer";

const smtpEmail = process.env.SMTP_EMAIL;
const smtpPassword= process.env.SMTP_PASSWORD;
console.log({smtpEmail})


export const transporter = nodemailer.createTransport({
   service: "smtp",
   host: "smtp.gmail.com", 
   port: 587, 
   secure: false, 
   auth: {
      user: smtpEmail,
      pass: smtpPassword,
   },
   authMethod: 'PLAIN',
});
