import React from "react";
import "../styles/enquire.css";

export default function EnquireForm({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Enquire Now</h2>
        <form className="contact-form">
          <div className="name-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
