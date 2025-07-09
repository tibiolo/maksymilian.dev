import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import sendContactForm from '../../services/sendContactForm';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await sendContactForm(form);
      setSuccess(response.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.response.data.errors[0].message || 'Failed to send');
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container p-10 border border-gray-300 rounded-xl bg-white shadow-md w-[90vw] md:w-[400px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name
          </label>
          <input
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            value={form.message}
            onChange={handleChange}
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 ease-in-out cursor-pointer"
        >
          <div className="flex items-center justify-center gap-1.5 text-lg">
            <FiSend />
            <h3>{loading ? 'Sending...' : 'Send'}</h3>
          </div>
        </button>
        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
