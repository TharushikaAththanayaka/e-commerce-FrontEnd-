import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "",  message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Fill out the form below to get in touch.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone (Optional):</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p><strong>📍 Address:</strong> 123 Serenity Lane, Colombo, Sri Lanka</p>
        <p><strong>📞 Phone:</strong> +94 71 555 6657</p>
        <p><strong>✉️ Email:</strong> support@serenitea.com</p>
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <p>
          <a href="#" target="_blank">Facebook</a> |  
          <a href="#" target="_blank"> Instagram</a> |  
          <a href="#" target="_blank"> Twitter</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
