import React from 'react';
import GallerySection from '../components/GallerySection';
import BookingSection from '../components/BookingSection';
import PageMeta from '../components/PageMeta';

export default function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Nail Gallery | Fabulous 10 Nails Pennsburg, PA"
        description="Browse acrylic, dip, gel, and nail art work from Fabulous 10 Nails in Pennsburg, PA."
      />
      <GallerySection />
      <BookingSection />
    </>
  );
}
