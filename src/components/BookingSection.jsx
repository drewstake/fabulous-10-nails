import React from 'react';

const bookingUrl =
  "https://book.squareup.com/appointments/yvzkpxjnwzqnnb/location/LRZJ8PYM8GKQH";

export default function BookingSection() {
  return (
    <section
      id="book"
      className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Beautiful Nails?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Schedule your appointment today and let us pamper you.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-pink-600 text-xl md:text-2xl px-10 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Book Online Now
        </a>
      </div>
    </section>
  );
}
