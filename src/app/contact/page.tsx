'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Your maessage has been sent..');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-4xl font-bold text-pink-600 text-center mb-4">Contact Us</h2>
      <p className="text-center font-bold text-black hover:text-gray-600 mb-6 ">
        If you have any queries about our Case Mate, feel free to reach out!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block  text-pink-500  mb-2 font-bold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-800 focus:border-pink-800"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-pink-500 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-800 focus:border-pink-800"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-pink-500 font-bold mb-2">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-800 focus:border-pink-800"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-900"
        >
          Send Message
        </button>
      </form>
      {success && (
        <p className="mt-6 text-center text-green-600 font-extrabold ">
          Thank you! Your message has been sent.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
