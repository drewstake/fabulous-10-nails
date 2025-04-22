import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, author, rating }) {
  return (
    <div className="testimonialCard bg-pink-50 p-6 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      <p className="testimonialQuote text-gray-700 italic mb-4">"{quote}"</p>
      <p className="testimonialAuthor font-semibold text-pink-700">- {author}</p>
    </div>
  );
}
