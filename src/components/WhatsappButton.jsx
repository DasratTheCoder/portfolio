import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "923142344057"; // replace with your WhatsApp number (no + sign, include country code)
  const message = "Hello! I’d like to know more."; // optional prefilled text

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
