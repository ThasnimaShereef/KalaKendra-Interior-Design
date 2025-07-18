import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hjgofqu', 'template_nbnmz9u', form.current, 'yQlIVPevroZf7s9mq')
      .then((result) => {
          console.log('Message Sent', result.text);
          alert("Message successfully sent!");
          setFormValues({ name: '', phone: '', email: '', message: '' }); // Clear form after sending
      }, (error) => {
          console.log('Failed to send message', error.text);
          alert("Failed to send the message, please try again.");
      });
  };

  const whatsappNumber = '+919653998631';
  const whatsappMessage = 'Hello, I would like to inquire about your interior design services.';
  const phoneNumber = '+919653998631';
  const googleMapsLink = `https://maps.app.goo.gl/fBSWgVEDR7A1tPBp7`;

  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>

      <div className="image-buttons-wrapper">
        <div className="left-column">
          <h3> CONTACT INFORMATION</h3>
          <p className="contact-intro">
            We are here to help you! Reach out to us via phone, WhatsApp, or visit us at our location for personalized support. 
            Our team is always ready to assist with your inquiries.
          </p>

          <div className="contact-buttons-row">
            <div className="contact-button" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
              <a href={`tel:${phoneNumber}`} className="button-text">
                <FaPhoneAlt className="contact-icon" /> <br />
                Call Us
              </a>
            </div>
            <div className="contact-button" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="button-text">
                <FaWhatsapp className="contact-icon" />  <br />
                WhatsApp Us
              </a>
            </div>
            <div className="contact-button" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="button-text">
                <FaMapMarkerAlt className="contact-icon" /> <br />
                Visit Us
              </a>
            </div>
          </div>
        </div>

        <div className="right-column">
          <img src={`/image/entrance/Entrance02/E3.jpg`} alt="Interior Design Showcase" className="contact-image" />
        </div>
      </div>

      <div className="form-map-wrapper">
        <div className="contact-form" style={{ backgroundImage: `url(/image/logo/texturebeige.jpg)` }}>
          <h2>GET IN TOUCH</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formValues.name} 
                onChange={handleChange} 
                required 
              />
            </label>
            <div className="form-row">
              <label>
                Phone Number:
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Enter your phone number" 
                  value={formValues.phone} 
                  onChange={handleChange} 
                  required 
                  pattern="^\d{10}$" 
                  title="Please enter a valid 10-digit phone number"
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email address" 
                  value={formValues.email} 
                  onChange={handleChange} 
                  required 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address (e.g., example@domain.com)"
                />
              </label>
            </div>
            <label>
              Message:
              <textarea 
                name="message" 
                placeholder="Enter your message" 
                value={formValues.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </label>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>

        <div className="location-section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.34244811119!2d71.4165245!3d25.7592501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39443b93fc824cb5%3A0x720d6dab6c4ef7f3!2sKala%20Kendra%20Interior%20Design%20Studio!5e0!3m2!1sen!2sin!4v1729363028229!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          <h2>OUR LOCATION</h2>

          <div className="social-links">
            <div className="social-icons">
              <h3>FOLLOW US</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="mailto:gunjan.choudhary@kalakendra.co.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/kala.kendraa?igsh=YmoyYjd2aGxkM2cy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
