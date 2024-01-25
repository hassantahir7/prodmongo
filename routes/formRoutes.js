import express from 'express';
import { submitForm } from '../controllers/formController.js';

const router = express.Router();

// Handle form submissions
router.post('/', submitForm);

export default routersda;
