import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import DietsPage from './pages/Diets';
import LinkTreePage from './pages/LinkTree';
import BookingPage from './pages/BookingPage';
import BookingSuccess from './pages/BookingSuccess';
import BookingCancel from './pages/BookingCancel';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './components/admin/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes — no Navbar */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Public routes — with Navbar */}
        <Route
          path="/*"
          element={
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
                <Route path="/booking/success" element={<BookingSuccess />} />
                <Route path="/booking/cancel" element={<BookingCancel />} />
              </Routes>
            </div>
          }
        />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;