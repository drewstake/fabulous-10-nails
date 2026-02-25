import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

const reviewsLink = 'https://www.google.com/search?q=Fabulous+10+Nails+Pennsburg+PA+reviews';
const leaveReviewLink =
  'https://www.google.com/search?q=Fabulous+10+Nails+Pennsburg+PA&hl=en#lrd=0x89c41a0a9a5a67d7:0x5b8a0d9a9a9a9a9a,3';

export default function TestimonialsSection() {
  return (
    <section className="page-section bg-rose-50">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-500">
              Reviews
            </p>
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Trusted by Clients Across the Area
            </h2>
            <p className="mt-3 text-sm text-slate-700 md:text-base">
              Real feedback from clients who visit Fabulous 10 Nails.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              className="btn-secondary"
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews
            </a>
            <a
              className="btn-primary"
              href={leaveReviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
