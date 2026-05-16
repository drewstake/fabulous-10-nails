import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

function linkClassName({ isActive }) {
  return `relative px-4 py-2.5 text-base font-semibold transition after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:origin-center after:rounded-full after:bg-brand-berry after:transition ${
    isActive
      ? 'text-brand-berry after:scale-x-100'
      : 'text-brand-charcoal/80 after:scale-x-0 hover:text-brand-berry'
  }`;
}

function mobileLinkClassName({ isActive }) {
  return `flex min-h-[3.25rem] w-full items-center justify-end rounded-md px-4 py-3.5 text-base font-semibold transition ${
    isActive
      ? 'bg-brand-blush text-brand-berry'
      : 'text-brand-charcoal/82 hover:bg-brand-ivory hover:text-brand-berry'
  }`;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-brand-nude/55 bg-white/95 [transform:translateZ(0)] [will-change:transform] backdrop-blur"
    >
      <div className="section-wrap flex h-16 items-center justify-between gap-6">
        <Link className="group flex min-w-0 items-center text-brand-charcoal" to="/">
          <span className="relative block pr-2">
            <span className="logo-script block whitespace-nowrap text-3xl leading-none text-[#6ea348] sm:text-4xl">
              Fabulous 10
            </span>
            <span className="mt-0.5 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand-berry">
              <span className="h-px w-10 bg-brand-berry/60" />
              Nails & Spa
              <span className="h-px w-10 bg-brand-berry/60" />
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <NavLink key={link.to} className={linkClassName} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-berry" href={businessInfo.phoneHref}>
            <Phone className="h-4 w-4" />
            {businessInfo.phoneDisplay}
          </a>
          <a
            className="btn-primary"
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md text-brand-charcoal hover:bg-brand-blush md:hidden"
          type="button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 top-full md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-end">
          <nav
            className={`pointer-events-auto mt-2 w-44 rounded-lg border border-brand-nude/70 bg-white p-2.5 text-right shadow-soft transition duration-200 ease-out ${
              isMobileMenuOpen
                ? 'translate-y-0 scale-100 opacity-100'
                : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
            }`}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} className={mobileLinkClassName} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
