import dotenv from 'dotenv';
dotenv.config();
import Twilio from "twilio";

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const client = new Twilio(accountSID, authToken);
