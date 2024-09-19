import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import About from './About';
import Testimonials from '../components/Testimonials';
import Services from './Services';
import LeadMagnet from '../components/LeadMagnet';
import BlogPreview from '../components/BlogPreview';
import Contact from './Contact';
import TrustIndicators from '../components/TrustIndicators';
import FAQ from '../components/FAQ';

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <Benefits />
      <About />
      <Testimonials />
      <Services />
      <LeadMagnet />
      <BlogPreview />
      <Contact />
      <TrustIndicators />
      <FAQ />
    </div>
  );
}

export default LandingPage;