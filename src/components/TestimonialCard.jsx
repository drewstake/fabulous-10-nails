import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, author, rating }) {
  return (
    <article className="h-full rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
      <div className="mb-3 flex">
        {[...Array(rating)].map((_, index) => (
          <Star key={`${author}-${index}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-700 md:text-base">"{quote}"</p>
      <p className="mt-4 text-sm font-semibold text-slate-900">- {author}</p>
    </article>
  );
}
