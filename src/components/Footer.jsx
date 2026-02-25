import React from 'react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white py-10">
      <div className="section-wrap">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{businessInfo.name}</h2>
            <p className="mt-2 text-sm text-slate-700">
              {businessInfo.street}
              <br />
              {businessInfo.cityStateZip}
            </p>
            <a className="mt-2 inline-block text-sm font-semibold text-rose-700" href={businessInfo.phoneHref}>
              {businessInfo.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Hours</h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {businessInfo.hours.map((hour) => (
                <li key={hour.label} className="flex justify-between gap-3">
                  <span>{hour.label}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Serving Nearby Towns</h2>
            <p className="mt-2 text-sm text-slate-700">
              Serving Pennsburg, Red Hill, Green Lane, East Greenville, Pottstown.
            </p>
            <div className="mt-4 flex gap-2">
              <DirectionsButton
                className="btn-secondary text-sm"
              />
              <a
                className="btn-primary text-sm"
                href={businessInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-rose-100 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
