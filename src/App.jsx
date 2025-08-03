// src/App.jsx

import React from 'react';
import './Digitalbook.css'; // Import your global styles

// Import all the components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import Popularbooks from './components/Popularbooks';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* Page content wrapper */}
      <div className="main-content">
        <Books />
        <Popularbooks />
        <Contact />
      </div>
    </>
  );
}

export default App;