import React from 'react';
import SectionTitle from './SectionTitle';
import GalleryImage from './GalleryImage';

const galleryImages = [
  { src: '/images/nail1.png', alt: 'Nail Design 1' },
  { src: '/images/nail2.png', alt: 'Nail Design 2' },
  { src: '/images/nail3.png', alt: 'Nail Design 3' },
  { src: '/images/nail4.png', alt: 'Nail Design 4' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-pink-100">
      <div className="container mx-auto px-6">
        <SectionTitle>Nail Art Gallery</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <GalleryImage key={idx} {...img} />
          ))}
        </div>
      </div>
    </section>
  );
}
