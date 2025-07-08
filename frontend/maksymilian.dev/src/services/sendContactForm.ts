import axiosClient from './axiosClient';

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

const sendContactForm = async (data: ContactFormPayload) => {
  const response = await axiosClient.post('/contact', data);
  return response.data;
};

export default sendContactForm;
  