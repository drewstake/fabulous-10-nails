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
  menuPlacement = 'auto',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [resolvedPlacement, setResolvedPlacement] = useState('down');
  const wrapperRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

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

    document.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (menuPlacement === 'up' || menuPlacement === 'down') {
      setResolvedPlacement(menuPlacement);
      return;
    }

    if (!wrapperRef.current) {
      setResolvedPlacement('down');
      return;
    }

    const rect = wrapperRef.current.getBoundingClientRect();
    const estimatedMenuHeight = 112;
    const mobileBarAllowance = 96;
    const availableBelow = window.innerHeight - rect.bottom - mobileBarAllowance;

    setResolvedPlacement(availableBelow < estimatedMenuHeight ? 'up' : 'down');
  }, [isOpen, menuPlacement]);

  const menuAlignmentClass =
    menuAlign === 'right' ? 'right-0' : menuAlign === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0';
  const menuPlacementClass = resolvedPlacement === 'up' ? 'bottom-full mb-2' : 'top-full mt-2';

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
          className={`absolute ${menuAlignmentClass} ${menuPlacementClass} z-[70] min-w-[190px] rounded-xl border border-rose-100 bg-white p-1.5 shadow-lg`}
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
