// src/components/Destinations.jsx now rename Popularbooks

import React from 'react';

function Popularbooks() {
  return (
    <>
      <div className="section section-margin-top">
        <h3>New Books</h3>
        {/* We can use <p> here, and your h3 + p CSS will style it */}
        <p>Explore all the books you can think of.</p>
      </div>
      <div className="grid">
        {/* Left Column */}
        <div className="grid-half grid-column">
          <div className="book-card">
            <img src="/images/Pokhara.jpg" alt="Pokhara" />
            <span className="position-absolute-bottom-left destination-name">Pokhara</span>
          </div>
        </div>

        {/* Right Column - ADDED flex-column-fill */}
        <div className="grid-half grid-column flex-column-fill">
          <div className="grid">
            <div className="grid-half grid-column">
              <div className="book-card">
                <img src="/images/Kathmandu.jpg" alt="Kathmandu" />
                <span className="position-absolute-bottom-left destination-name">Kathmandu</span>
              </div>
            </div>
            <div className="grid-half grid-column">
              <div className="book-card">
                <img src="/images/Chitwan1.jpg" alt="Chitwan" />
                <span className="position-absolute-bottom-left destination-name">Chitwan</span>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-half grid-column">
              <div className="book-card">
                <img src="/images/Lumbini.jpg" alt="Lumbini" />
                <span className="position-absolute-bottom-left destination-name">Lumbini</span>
              </div>
            </div>
            <div className="grid-half grid-column">
              <div className="book-card">
                <img src="/images/Bhaktapur.jpg" alt="Bhaktapur" />
                <span className="position-absolute-bottom-left destination-name">Bhaktapur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popularbooks;