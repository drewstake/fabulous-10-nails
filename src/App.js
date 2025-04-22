import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans text-gray-800 overflow-x-hidden">
      <Header />
      {/* push the page down by the header height (4rem = pt-16) */}
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
