import React from 'react';
import { businessInfo } from '../data/businessInfo';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/front.png"
          alt="Fabulous 10 Nails storefront in Pennsburg, Pennsylvania"
          className="h-full w-full object-cover opacity-35"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/45" />

      <div className="section-wrap relative py-20 md:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-rose-200">
          Local Nail Salon
        </p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">
          Fabulous 10 Nails in Pennsburg, PA
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-100 md:text-lg">
          Clean salon, friendly techs, and beautiful results every time.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <a className="btn-secondary bg-white/95 text-slate-800 hover:bg-white" href={businessInfo.phoneHref}>
            Call {businessInfo.phoneDisplay}
          </a>
          <a
            className="btn-secondary border-white/60 bg-transparent text-white hover:bg-white/10"
            href={businessInfo.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-slate-200">{businessInfo.servingLine}</p>
      </div>
    </section>
  );
}
