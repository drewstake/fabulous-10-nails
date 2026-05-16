import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { popularServices } from '../data/businessInfo';

const serviceDetails = [
  {
    image: '/images/nail1.png',
    description: 'Long-lasting shine with chip-resistant gel polish.',
  },
  {
    image: '/images/nail6.png',
    description: 'Relaxing soak, exfoliation, massage, and polish.',
  },
  {
    image: '/images/nail4.png',
    description: 'The ultimate pedicure experience with extra care.',
  },
  {
    image: '/images/nail7.png',
    description: 'Strong, lightweight, and natural-looking nails.',
  },
  {
    image: '/images/nail9.png',
    description: 'Durable extensions shaped and customized for you.',
  },
];

export default function PopularServicesSection({
  compact = false,
  sectionTag = true,
  includeContainer = true,
}) {
  const WrapperTag = sectionTag ? 'section' : 'div';
  const contentClasses = includeContainer ? 'section-wrap' : '';

  return (
    <WrapperTag className={compact ? 'page-section bg-white pt-8' : 'page-section bg-white'}>
      <div className={contentClasses}>
        <div className="mb-8 text-center">
          <div>
            <p className="eyebrow">Our Signature Treatments</p>
            <h2 className="text-3xl md:text-4xl">Most-Booked Services</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {popularServices.map((service, index) => (
            <article
              key={service.name}
              className="surface-card relative overflow-hidden p-3 text-center transition hover:-translate-y-1 hover:border-brand-berry/35"
            >
              <img
                src={serviceDetails[index].image}
                alt={`${service.name} example at Fabulous 10 Nails`}
                className="aspect-[1.85/1] w-full rounded-md object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-xl leading-tight">{service.name}</h3>
                <p className="mt-1 text-sm font-bold text-brand-berry">from {service.price.replace('/up', '')}</p>
                <p className="mt-2 text-sm leading-6 text-brand-charcoal/68">
                  {serviceDetails[index].description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link className="btn-primary" to="/services">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </WrapperTag>
  );
}
