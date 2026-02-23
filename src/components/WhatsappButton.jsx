import React from "react";
import "../styles/whatsapp.css";

export default function WhatsappButton() {
  const phoneNumber = "+919876543232"; // replace with your number
  const message = "Hello, I would like to inquire about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}
