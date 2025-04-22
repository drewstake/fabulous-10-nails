// src/components/HeroSection.jsx
import React from 'react';

const bookingUrl =
  "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-[600px] py-24 md:py-32 flex items-center
                 justify-center text-white bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/front.png')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true" />

      {/* CTA button moved slightly downward */}
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-pink-600 text-white text-xl md:text-2xl
                   px-10 py-4 rounded-full hover:bg-pink-700 transition duration-300
                   shadow-lg hover:shadow-xl transform hover:-translate-y-1
                   top-10 md:top-16"   /* pushes the button ~2.5 rem on mobile, ~4 rem on md+ */
      >
        Book Your Appointment
      </a>
    </section>
  );
}
