import express from 'express';
import { getOtp, verifyOtp } from '../controllers/phoneController.js';

const router = express.Router();

router.post('/get-otp', getOtp);
router.post('/verify-otp', verifyOtp);

export default router;