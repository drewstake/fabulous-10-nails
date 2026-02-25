import React from 'react';
import { Link } from 'react-router-dom';
import { popularServices } from '../data/businessInfo';

export default function PopularServicesSection({
  compact = false,
  sectionTag = true,
  includeContainer = true,
}) {
  const WrapperTag = sectionTag ? 'section' : 'div';
  const contentClasses = includeContainer ? 'section-wrap' : '';

  return (
    <WrapperTag className={compact ? 'page-section pt-0' : 'page-section'}>
      <div className={contentClasses}>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-500">
              Most Popular
            </p>
            <h2 className="text-2xl font-extrabold md:text-3xl">Most-Booked Services</h2>
          </div>
          <Link className="btn-ghost hidden sm:inline-flex" to="/services">
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {popularServices.map((service) => (
            <article
              key={service.name}
              className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-2 text-base font-semibold text-slate-900">{service.name}</h3>
              <p className="text-lg font-bold text-rose-600">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </WrapperTag>
  );
}
