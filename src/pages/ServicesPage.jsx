import React from 'react';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import PageMeta from '../components/PageMeta';

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Nail Services & Prices | Fabulous 10 Nails Pennsburg, PA"
        description="View acrylic, gel, dip powder, pedicure, waxing, and kids menu prices at Fabulous 10 Nails. Book online or call (215) 679-6470."
      />
      <ServicesSection />
      <BookingSection />
    </>
  );
}
