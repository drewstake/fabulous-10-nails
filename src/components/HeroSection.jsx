import React from 'react';

const bookingUrl = "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-24 md:py-32 text-center text-gray-800 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/front.png')",
      }}
    >
      {/* Optional overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
          Perfect Nails, Perfect Mood.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
          Indulge in luxurious nail care and stunning designs at Fabulous 10 Nails. Your moment of beauty awaits.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
