import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import Contact from './pages/Contact';
import LinkTreePage from './pages/LinkTree';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<LinkTreePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;