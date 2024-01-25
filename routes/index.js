import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import formRoutes from './formRoutes.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define main routes
router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../index.html'));
});

// Include form routes
router.use('/submit-form', formRoutes);

export default router;
