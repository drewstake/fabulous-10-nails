import React from 'react';

const bookingUrl = "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
  { href: bookingUrl, label: "Book Now", primary: true },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-pink-700">
          Fabulous 10 Nails
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.primary ? "_blank" : "_self"}
              rel={link.primary ? "noopener noreferrer" : ""}
              className={`transition duration-300 ${
                link.primary
                  ? "bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 shadow-sm"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
