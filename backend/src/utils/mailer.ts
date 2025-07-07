import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (name: string, email: string, message: string) => {
  await transporter.sendMail({
    from: `"Maksymilian.dev" <${process.env.EMAIL}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
};

export { sendMail };
