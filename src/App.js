// src/App.js

import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const SignupPage = lazy(() => import('./components/SignupPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}

function PageLoading() {
  return (
    <div
      className="section-wrap flex min-h-[24rem] items-center justify-center py-16 text-center"
      role="status"
      aria-live="polite"
    >
      <div>
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-brand-nude border-t-brand-berry" />
        <p className="font-semibold text-brand-charcoal">Loading page...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-ivory text-brand-charcoal">
      <ScrollToTop />
      <Header />
      <main className="pb-24 pt-16 xl:pb-0">
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
