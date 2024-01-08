import Form from "../db/models/Form.js";
import { transporter } from "../services/emailService.js";

export const getForms = async (_req, res, next) => {
   try {
      const forms = await Form.find();
      if (forms) {
         console.log(forms);
         const responseData = {
            message: "Success",
            forms: forms,
            status: 200,
         };

         res.json(responseData);
         return;
      }
      throw new Error("Something went wrong");
   } catch (error) {
      next(error);
   }
};

export const saveForm = async (req, res, next) => {
   try {
      console.log(req.body);
      const { name, email, phoneNumber, dateOfBirth } = req.body;
      const form = new Form({
         name,
         email,
         phoneNumber,
         dateOfBirth,
      });

      await form.save();

      const mailOptions = {
         from: process.env.SMTP_EMAIL,
         to: email,
         subject: "You are registered",
         text: "Thanks for registering on wedigit your details has been saved",
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            console.error("Error sending email:", error);
         } else {
            console.log("Email sent:", info.response);
         }
      });

      const responseData = {
         message: "Form saved successfully",
         form: form,
         status: 200,
      };

      res.json(responseData);
   } catch (error) {
      next(error);
   }
};
