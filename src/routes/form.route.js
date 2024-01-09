import express from 'express';
import { getForms, saveForm } from '../controllers/formController.js';

const router = express.Router();

router.post('/all', getForms);
router.post('/save', saveForm);

export default router;