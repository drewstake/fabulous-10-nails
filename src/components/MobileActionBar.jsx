import React from 'react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a className="btn-secondary text-center text-sm" href={businessInfo.phoneHref}>
          Call
        </a>
        <a
          className="btn-primary text-center text-sm"
          href={businessInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book
        </a>
        <DirectionsButton
          className="btn-secondary w-full text-center text-sm"
          containerClassName="w-full"
          label="Directions"
          menuAlign="right"
        />
      </div>
    </div>
  );
}
