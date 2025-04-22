import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-pink-400 transition duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            <Twitter size={24} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Fabulous 10 Nails. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
