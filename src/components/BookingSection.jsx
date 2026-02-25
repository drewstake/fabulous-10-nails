import React from 'react';
import { businessInfo } from '../data/businessInfo';

export default function BookingSection() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 to-amber-50 p-8 text-center md:p-12">
          <h2 className="text-2xl font-extrabold md:text-3xl">Ready for Your Next Appointment?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            Book online in seconds, call us directly, or open directions and visit today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              className="btn-primary"
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Online
            </a>
            <a className="btn-secondary" href={businessInfo.phoneHref}>
              Call {businessInfo.phoneDisplay}
            </a>
            <a
              className="btn-secondary"
              href={businessInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
