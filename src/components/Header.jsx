// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const bookingUrl = "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "#services", label: "Services" },
  { to: "#gallery", label: "Gallery" },
  { to: "#contact", label: "Contact" },
  { to: bookingUrl, label: "Book Now", primary: true, external: true },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-700">
          Fabulous 10 Nails
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map(link => {
            const classes = link.primary
              ? "bg-pink-500 text-white text-lg md:text-xl px-6 py-3 rounded-full hover:bg-pink-600 shadow-sm transition duration-300"
              : "text-gray-600 hover:text-pink-600 transition duration-300 px-3 py-1";

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.label} to={link.to} className={classes}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
