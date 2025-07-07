import { Request, Response } from 'express';
import { contactFormSchema, sanitizeMessage } from '../utils/validateInput.js';
import { sendMail } from '../utils/mailer.js';

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
    if (err instanceof Error && 'error' in err) {
      res.status(400).json({ errors: (err as any).errors });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export default handleContactForm;
