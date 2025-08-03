// src/components/Navbar.jsx

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="brand-logo">Digital Library</a>

      <div className="navbar-actions">
        {/* All links are now consistent */}
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/login" className="nav-link">Login</a>

        {/* ADDED: The bookmark icon as a link */}
        <a href="/bookmarks" className="nav-link">
          <i className="fas fa-bookmark"></i>
        </a>

        {/* The href will go to a new signup page */}
        <a href="/signup">
          <button className="btn btn-primary-nav">Sign Up</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;