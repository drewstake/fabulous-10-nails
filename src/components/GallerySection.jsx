import React from 'react';
import GalleryImage from './GalleryImage';
import { galleryImages } from '../data/galleryImages';

export default function GallerySection() {
  return (
    <section className="page-section bg-white">
      <div className="section-wrap">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-500">
            Gallery
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">Recent Nail Work</h1>
          <p className="mt-3 text-sm text-slate-700 md:text-base">
            Browse acrylic, dip, gel, and nail art styles created by our team.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryImages.map((image) => (
            <GalleryImage key={image.src} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}
