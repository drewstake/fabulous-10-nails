import React from 'react';
import { Clock3, MapPin, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

export default function ContactSection() {
  return (
    <section className="page-section bg-white">
      <div className="section-wrap">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-500">
            Contact
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">Visit Fabulous 10 Nails</h1>
          <p className="mt-3 text-sm text-slate-700 md:text-base">
            Stop in for your next appointment or contact us to book now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
            <MapPin className="mb-3 h-6 w-6 text-rose-600" />
            <h2 className="mb-2 text-lg font-bold">Address</h2>
            <p className="text-sm text-slate-700">
              {businessInfo.street}
              <br />
              {businessInfo.cityStateZip}
            </p>
            <DirectionsButton
              className="mt-4 inline-flex text-sm font-semibold text-rose-700 hover:text-rose-800"
            />
          </article>

          <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
            <Phone className="mb-3 h-6 w-6 text-rose-600" />
            <h2 className="mb-2 text-lg font-bold">Phone</h2>
            <a className="text-sm font-semibold text-slate-900 hover:text-rose-700" href={businessInfo.phoneHref}>
              {businessInfo.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-slate-700">
              Fastest way to reach us for same-day availability.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
            <Clock3 className="mb-3 h-6 w-6 text-rose-600" />
            <h2 className="mb-2 text-lg font-bold">Hours</h2>
            <ul className="space-y-1 text-sm text-slate-700">
              {businessInfo.hours.map((hour) => (
                <li key={hour.label} className="flex justify-between gap-3">
                  <span>{hour.label}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-rose-100 shadow-sm">
          <iframe
            src={businessInfo.mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to Fabulous 10 Nails in Pennsburg, PA"
          />
        </div>
      </div>
    </section>
  );
}
