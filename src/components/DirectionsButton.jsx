import React, { useEffect, useId, useRef, useState } from 'react';
import { businessInfo } from '../data/businessInfo';

const directionOptions = [
  { label: 'Open in Google Maps', href: businessInfo.googleMapsUrl },
  { label: 'Open in Apple Maps', href: businessInfo.appleMapsUrl },
];

export default function DirectionsButton({
  className = 'btn-secondary',
  label = 'Get Directions',
  containerClassName = '',
  menuAlign = 'left',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapperRef.current || wrapperRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const menuAlignmentClass =
    menuAlign === 'right' ? 'right-0' : menuAlign === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0';

  return (
    <div className={`relative inline-flex ${containerClassName}`.trim()} ref={wrapperRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`${className} focus:outline-none focus:ring-2 focus:ring-rose-200`}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        {label}
      </button>

      {isOpen ? (
        <div
          className={`absolute ${menuAlignmentClass} top-full z-50 mt-2 min-w-[190px] rounded-xl border border-rose-100 bg-white p-1.5 shadow-lg`}
          id={menuId}
          role="menu"
        >
          {directionOptions.map((option) => (
            <a
              key={option.label}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-rose-50 hover:text-rose-700"
              href={option.href}
              rel="noopener noreferrer"
              role="menuitem"
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              {option.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
