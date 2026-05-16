import React from 'react';
import { CalendarCheck, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  return (
    <footer className="border-t border-brand-nude/70 bg-white pt-8">
      <div className="section-wrap">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <div className="mb-3">
              <span className="logo-script block text-4xl leading-none text-[#6ea348]">
                Fabulous 10
              </span>
              <span className="mt-0.5 flex max-w-[11rem] items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand-berry">
                <span className="h-px flex-1 bg-brand-berry/60" />
                Nails & Spa
                <span className="h-px flex-1 bg-brand-berry/60" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
              Luxury nail care in Pennsburg, PA. Clean, soft, friendly techs, and beautiful results every time.
            </p>
          </div>

          <div>
            <h2 className="text-lg">Quick Links</h2>
            <ul className="mt-3 space-y-1 text-sm text-brand-charcoal/70">
              {[
                ['Home', '/'],
                ['Services', '/services'],
                ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link className="hover:text-brand-berry" to={to}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg">Contact Us</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-charcoal/70">
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-berry" />
                <a className="hover:text-brand-berry" href={businessInfo.phoneHref}>
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-berry" />
                <span>
                  {businessInfo.street}
                  <br />
                  {businessInfo.cityStateZip}
                </span>
              </li>
              <li className="flex gap-2">
                <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-berry" />
                <a
                  className="hover:text-brand-berry"
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg">Hours</h2>
            <ul className="mt-3 space-y-1 text-sm text-brand-charcoal/70">
              {businessInfo.hours.map((hour) => (
                <li key={hour.label} className="flex justify-between gap-3">
                  <span>{hour.label}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-brand-nude/70 py-4 text-center text-xs text-brand-charcoal/50">
          &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
