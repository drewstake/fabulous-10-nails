import React from 'react';

const bookingUrl =
  "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-24 md:py-32 text-center text-white bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/front.png')",
        backgroundSize: '90%',
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-30"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Perfect Nails, Perfect Mood.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Indulge in luxurious nail care and stunning designs at Fabulous 10 Nails.
          Your moment of beauty awaits.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white text-xl md:text-2xl px-10 py-4 rounded-full hover:bg-pink-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
