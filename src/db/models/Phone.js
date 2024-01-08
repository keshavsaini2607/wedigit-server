import { Schema, model } from "mongoose";

const phoneSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Phone = model("Phone", phoneSchema);

export default Phone;