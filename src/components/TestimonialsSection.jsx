import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

const reviewsLink = 'https://www.google.com/search?q=Fabulous+10+Nails+Pennsburg+PA+reviews';
const leaveReviewLink = 'https://g.page/r/Ce0XwiBU_eTcEAE/review';

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-brand-ivory py-12 md:py-16">
      <div className="section-wrap">
        <div className="mb-8 text-center">
          <p className="eyebrow">Real Reviews</p>
          <h2 className="text-3xl md:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
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
    </section>
  );
}
