import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errs.email = "Invalid email address";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-500 mb-4 text-center">
          Let’s Work Together
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Got a project idea or need a developer for your team? Feel free to reach out.
          I’m always open to discussing new opportunities, collaborations, or freelance gigs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-500 text-2xl" />
              <p>dasratkumardeewan@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-500 text-2xl" />
              <p>0314 2344057</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a
                href="https://wa.me/923142344057"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-500 text-2xl" />
              <p>Hyderabad, Sindh, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            {submitted && (
              <div className="mb-6 text-center text-green-400 font-semibold">
                ✅ Thanks for reaching out! I will get back to you soon.
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
                  className={`bg-black rounded-md p-3 text-white border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-green-500 transition`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`bg-black rounded-md p-3 text-white border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-green-500 transition`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-semibold">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`bg-black rounded-md p-3 text-white border resize-none ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-green-500 transition`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </label>

              <button
                type="submit"
                className="self-center px-8 py-3 bg-green-600 rounded-full text-white font-semibold hover:bg-green-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
