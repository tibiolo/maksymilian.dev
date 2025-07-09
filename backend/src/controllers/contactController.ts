import { Request, Response } from 'express';
import { contactFormSchema, sanitizeMessage } from '../utils/validateInput.js';
import { sendMail } from '../utils/mailer.js';
import { ZodError } from 'zod';

const handleContactForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = contactFormSchema.parse(req.body);
    const cleanMessage = sanitizeMessage(data.message);
    await sendMail(data.name, data.email, cleanMessage);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ errors: err.errors });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export default handleContactForm;
