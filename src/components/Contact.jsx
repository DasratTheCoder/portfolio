import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-black text-white flex items-center justify-center px-6"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-green-500 mb-10 text-center">
          Contact Me
        </h2>

        {submitted && (
          <div className="mb-6 text-center text-green-400 font-semibold">
            Thanks for reaching out! I will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="mb-2 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`bg-gray-900 rounded-md p-3 text-white border ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:border-green-500 transition`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`bg-gray-900 rounded-md p-3 text-white border ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:border-green-500 transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-semibold">Message</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`bg-gray-900 rounded-md p-3 text-white border resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:border-green-500 transition`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </label>

          <button
            type="submit"
            className="self-center px-8 py-3 bg-green-600 rounded-full text-white font-semibold hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
