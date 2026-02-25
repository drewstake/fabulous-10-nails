import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularServicesSection from '../components/PopularServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import PageMeta from '../components/PageMeta';
import { businessInfo } from '../data/businessInfo';

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Fabulous 10 Nails in Pennsburg, PA | Book Manicures & Pedicures"
        description="Clean salon, friendly nail techs, and quality results at Fabulous 10 Nails in Pennsburg, PA. Book online, call now, or get directions."
      />
      <HeroSection />

      <section className="page-section bg-white">
        <div className="section-wrap">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
              <h2 className="mb-2 text-xl font-semibold">Clean & Comfortable</h2>
              <p className="text-sm text-slate-700">
                Sanitized stations, fresh tools, and a relaxing salon experience every visit.
              </p>
            </article>
            <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
              <h2 className="mb-2 text-xl font-semibold">Friendly, Skilled Techs</h2>
              <p className="text-sm text-slate-700">
                Experienced technicians focused on detail, comfort, and natural-looking results.
              </p>
            </article>
            <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
              <h2 className="mb-2 text-xl font-semibold">Local & Convenient</h2>
              <p className="text-sm text-slate-700">{businessInfo.servingLine}</p>
            </article>
          </div>
        </div>
      </section>

      <PopularServicesSection compact />
      <TestimonialsSection />
      <BookingSection />
    </>
  );
}
