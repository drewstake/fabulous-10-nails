import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, author, rating }) {
  return (
    <article className="surface-card relative h-full p-6 text-center">
      <span className="absolute left-5 top-4 font-display text-5xl leading-none text-brand-rose/70">"</span>
      <div className="mb-3 flex justify-center">
        {[...Array(rating)].map((_, index) => (
          <Star key={`${author}-${index}`} className="h-4 w-4 fill-brand-berry text-brand-berry" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-brand-charcoal/72 md:text-base">"{quote}"</p>
      <p className="mt-5 text-sm font-semibold text-brand-charcoal">{author}</p>
    </article>
  );
}
