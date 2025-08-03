// src/components/Contact.jsx

import React from 'react';

function Contact() {
  return (
    // We add an ID here so the navbar link can scroll to it on the contact page
    <div className="section" id="contact">
      <h2>Contact Us</h2>
      <p>Have questions? Please fill out the form below.</p>

      {/* This form doesn't actually send data, it's just for display */}
      <form>
        <p><input className="form-input" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="form-input" type="email" placeholder="Email" required name="Email" /></p>
        <p><textarea className="form-input" placeholder="Message" required name="Message" rows="5"></textarea></p>
        <p><button className="btn btn-primary" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
  );
}

export default Contact;