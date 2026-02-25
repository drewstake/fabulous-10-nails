import React from 'react';
import ContactSection from '../components/ContactSection';
import PageMeta from '../components/PageMeta';

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact & Hours | Fabulous 10 Nails Pennsburg, PA"
        description="Visit Fabulous 10 Nails at 436 Pottstown Ave., Pennsburg, PA 18073. Call (215) 679-6470, view hours, and get directions."
      />
      <ContactSection />
    </>
  );
}
