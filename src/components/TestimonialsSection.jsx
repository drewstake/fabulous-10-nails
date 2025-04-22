// src/components/TestimonialsSection.jsx
import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import '../styles/sections/testimonials.css';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  // duplicate array for seamless infinite scroll
  const looped = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonialsSection py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <div className="overflow-hidden">
          <div className="testimonialsSlider flex items-stretch">
            {looped.map((t, idx) => (
              <div key={idx} className="slideItem flex-shrink-0 w-80 mx-4">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
