// src/App.jsx

import React from 'react';
// 1. Import BrowserRouter here now
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Digitalbook.css';

// --- Component Imports ---
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import Popularbooks from './components/Popularbooks';

// --- Page Imports ---
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';
import BookmarksPage from './pages/BookmarksPage';

// Component for the Home Page content
function HomePage() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Books />
        <Popularbooks />
      </div>
    </>
  );
}

// This is the main App component
function App() {
  return (
    // 2. Wrap EVERYTHING inside BrowserRouter
    <BrowserRouter>
      <Navbar /> {/* Navbar is now a child of BrowserRouter */}
      <main>
        <Routes> {/* Routes is also a child of BrowserRouter */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;