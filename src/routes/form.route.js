import express from 'express';
import { getForms } from '../controllers/formController.js';

const router = express.Router();

router.get('/', getForms);


export default router;