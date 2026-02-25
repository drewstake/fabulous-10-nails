import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

function linkClassName({ isActive }) {
  return `rounded-full px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-rose-100 text-rose-700'
      : 'text-slate-700 hover:bg-rose-100 hover:text-rose-700'
  }`;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rose-100 bg-white/95 [transform:translateZ(0)] [will-change:transform] md:backdrop-blur">
      <div className="section-wrap flex h-16 items-center justify-between">
        <Link className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl" to="/">
          Fabulous 10 Nails
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} className={linkClassName} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn-ghost ml-2" href={businessInfo.phoneHref}>
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            className="btn-primary ml-2"
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-rose-50 md:hidden"
          type="button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-rose-100 bg-white md:hidden">
          <nav className="section-wrap space-y-2 py-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} className={linkClassName} to={link.to}>
                {link.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a className="btn-secondary justify-center" href={businessInfo.phoneHref}>
                Call
              </a>
              <a
                className="btn-primary justify-center"
                href={businessInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
