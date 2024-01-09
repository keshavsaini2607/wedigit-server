import { client } from "../services/smsService.js";
import Phone from "../db/models/Phone.js";
export const getOtp = async (req, res, next) => {
   try {
      const { phoneNumber } = req.body;
      const generateOTP = () => {
         return Math.floor(100000 + Math.random() * 900000).toString();
      };
      const otp = generateOTP();
      client.messages
         .create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NO,
            to: phoneNumber,
         })
         .then(async () => {
            res.json({ success: true, message: "OTP sent successfully" });
            const otpExists = await Phone.findOne({ phoneNumber: phoneNumber });
            if (otpExists) await Phone.deleteOne({ _id: otpExists._id });
            const otpData = new Phone({
               phoneNumber,
               otp,
            });

            await otpData.save();
         })
         .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Failed to send OTP" });
         });
   } catch (error) {
      next();
   }
};

export const verifyOtp = async (req, res, next) => {
   try {
      const { phoneNumber, otp } = req.body;
      const otpData = await Phone.findOne({ phoneNumber: phoneNumber });
      console.log({otpData});

      if (otpData.otp !== otp) {
         res.json({
            success: false,
            message: "Incorrect Otp",
         });
         return;
      }

      res.json({
         success: true,
         message: "Your are now verified",
      });
      await Phone.deleteOne({ _id: otpData._id });
   } catch (error) {
      next();
   }
};
