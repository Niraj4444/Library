// src/components/Contact.jsx

import React from 'react';

function Contact() {
  return (
    <div className="section" id="contact">
      <h2>Contact Us</h2>
      <p>Let us help you plan your next trip in Nepal!</p>
      <p className="contact-info"><i className="fas fa-map-marker-alt"></i> Phalasya, Bhaktapur, Nepal</p>
      <p className="contact-info"><i className="fas fa-phone"></i> Phone: +977 9800000000</p>
      <p className="contact-info"><i className="fas fa-envelope"></i> Email: support@DigitalLibrary.com</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="form-input" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="form-input" type="text" placeholder="Email" required name="Email" /></p>
        <p><input className="form-input" type="text" placeholder="Message" required name="Message" /></p>
        <p><button className="btn btn-primary" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
  );
}

export default Contact;