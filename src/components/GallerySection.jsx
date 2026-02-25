import React, { useMemo, useState } from 'react';
import GalleryImage from './GalleryImage';
import { galleryImages } from '../data/galleryImages';

const filters = ['All', 'Acrylic', 'Dip', 'Gel', 'Nail Art'];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleImages = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

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

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'border-rose-500 bg-rose-500 text-white'
                    : 'border-rose-200 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50'
                }`}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {visibleImages.map((image) => (
            <GalleryImage key={image.src} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}
