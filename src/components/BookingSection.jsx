import React from 'react';
import { CalendarCheck, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

export default function BookingSection() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="overflow-hidden rounded-[1.75rem] border border-brand-nude bg-brand-charcoal p-8 text-center text-white shadow-soft md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-rose">
            Book With Confidence
          </p>
          <h2 className="text-3xl text-white md:text-5xl">Ready for Your Next Appointment?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/76 md:text-base">
            Book online in seconds, call us directly, or open directions and visit today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              className="btn-primary"
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Online
            </a>
            <a className="btn-secondary" href={businessInfo.phoneHref}>
              <Phone className="h-4 w-4" />
              Call {businessInfo.phoneDisplay}
            </a>
            <DirectionsButton
              className="btn-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
