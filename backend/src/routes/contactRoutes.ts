import express from 'express';
import handleContactForm from '../controllers/contactController.js';
import contactRateLimiter from '../middlewares/rateLimiter.js';

const router = express.Router();

// Contact Route
router.post('/contact', contactRateLimiter, handleContactForm);

export default router;
