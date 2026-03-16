import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import DietsPage from './pages/Diets';
import LinkTreePage from './pages/LinkTree';
import BookingPage from "./pages/BookingPage";

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
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/diets" element={<DietsPage />} />
          <Route path="/links" element={<LinkTreePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;