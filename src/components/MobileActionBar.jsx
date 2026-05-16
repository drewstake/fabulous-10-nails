import React from 'react';
import { CalendarCheck, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-nude bg-brand-ivory/95 p-3 shadow-[0_-8px_24px_rgba(31,31,41,0.10)] [transform:translateZ(0)] [will-change:transform] backdrop-blur xl:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
    >
      <div className="mx-auto grid w-full max-w-[22.5rem] grid-cols-3 gap-2">
        <a className="btn-secondary w-full px-2 text-center text-[0.68rem] tracking-[0.08em]" href={businessInfo.phoneHref}>
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          className="btn-primary w-full px-2 text-center text-[0.68rem] tracking-[0.08em]"
          href={businessInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarCheck className="h-4 w-4" />
          Book
        </a>
        <DirectionsButton
          className="btn-secondary w-full px-2 text-center text-[0.68rem] tracking-[0.08em]"
          containerClassName="w-full"
          label="Directions"
          menuAlign="right"
        />
      </div>
    </div>
  );
}
