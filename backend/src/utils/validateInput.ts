import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must not exceed 50 characters'),
  email: z.string().email('Invalid email format'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(700, 'Message may not exceed 700 characters'),
});

function sanitizeMessage(message: string): string {
  return sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

export { contactFormSchema, sanitizeMessage };
