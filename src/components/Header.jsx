// src/components/Header.jsx

import React, { useState } from 'react';

function Header() {
  // The logic for state management is perfect. We start with the 'Books' tab.
  const [activeTab, setActiveTab] = useState('Books');

  return (
    <header className="header-content position-relative">
      {/* Ensure this image exists in public/images/Swoyam1.jpg */}
      <img className="hero-image" src="/images/Swoyam1.jpg" alt="A library or a reading scene" />

      <div className="position-absolute-middle">
        <div className="tab-bar">
          {/* 
            UPDATED: Changed icons to be more relevant to a library.
            Using Font Awesome classes: fa-book and fa-book-open.
          */}
          <button 
            className={`tab-link ${activeTab === 'Books' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Books')}>
              <i className="fas fa-book"></i> Books
          </button>
          <button 
            className={`tab-link ${activeTab === 'Novels' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Novels')}>
              <i className="fas fa-book-open"></i> Novels
          </button>
        </div>

        {/* The conditional rendering for tab content is perfect. */}
        {activeTab === 'Books' && (
          <div id="Books" className="tab-content" style={{display: 'block'}}>
            <h3>Search Books</h3>
            <p>Find your next great read.</p>
            <input className="form-input" type="text" placeholder="e.g., React or Game of Thrones" />
            <p><button className="btn btn-primary">Search Books</button></p>
          </div>
        )}

        {activeTab === 'Novels' && (
          <div id="Novels" className="tab-content" style={{display: 'block'}}>
            <h3>Find Novels</h3>
            <p>Dive into captivating stories.</p>
            <input className="form-input" type="text" placeholder="e.g., Hello" />
            <p><button className="btn btn-primary">Search Novels</button></p>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;