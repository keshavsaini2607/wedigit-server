// models/Form.js
import { Schema, model } from "mongoose";

const formSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   email: {
      type: String,
      required: true,
      unique: [true, 'Email already exists. Please check and try again'],
      trim: true,
      lowercase: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
   },
   phoneNumber: {
      type: String,
      required: true,
      validate: {
         validator: function (value) {
            return /^\d{10}$/.test(value);
         },
         message:
            "Invalid phone number format. Use 10 digits without spaces or special characters.",
      },
   },
   dateOfBirth: {
      type: Date,
      required: true,
   },
});

const Form = model("Form", formSchema);

export default Form;
