import React from 'react';
import {
  Baby,
  Brush,
  CalendarCheck,
  Crown,
  Droplets,
  Gem,
  Hand,
  Heart,
  Leaf,
  Paintbrush2,
  Scissors,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { businessInfo, popularServices, servicePriceNote } from '../data/businessInfo';
import { serviceMenu } from '../data/serviceMenu';

const popularDescriptions = {
  'Gel Manicure': 'Long-lasting shine with a smooth, chip-resistant finish.',
  'Spa Pedicure': 'A refreshing pedicure for polished, comfortable feet.',
  'Deluxe Pedicure': 'Extra pampering for soft skin and a relaxed finish.',
  'Dip Full Set': 'Strong, lightweight color with a natural-looking feel.',
  'Acrylic Full Set': 'Custom length and shape with a clean, sculpted finish.',
};

const categoryMeta = {
  Acrylics: {
    icon: Paintbrush2,
    image: '/images/nail1.png',
    description: 'Shape, length, fills, and pink-and-white sets.',
  },
  'Nail Care': {
    icon: Hand,
    image: '/images/nail3.png',
    description: 'Classic manicures, pedicures, and softening treatments.',
  },
  'Powder Dip': {
    label: 'Dip Powder',
    icon: Gem,
    image: '/images/nail10.png',
    description: 'Durable dip color with a lightweight finish.',
  },
  Gel: {
    icon: Droplets,
    image: '/images/nail12.png',
    description: 'Glossy gel sets, builder gel, and gel refills.',
  },
  "Kid's Menu (Under 10)": {
    label: 'Kids',
    icon: Baby,
    image: '/images/nail2.png',
    description: 'Simple, sweet services for guests under 10.',
  },
  Waxing: {
    icon: Leaf,
    image: '/images/nail8.png',
    description: 'Brows, lip, chin, arms, bikini, and more.',
  },
  Additional: {
    label: 'Add-Ons',
    icon: Brush,
    image: '/images/nail11.png',
    description: 'Designs, polish changes, French tips, and finishing touches.',
  },
};

const trustItems = [
  { icon: Leaf, title: 'Clean & Sanitary', detail: 'Fresh tools and tidy stations' },
  { icon: UserCheck, title: 'Experienced Techs', detail: 'Detailed work with care' },
  { icon: ShieldCheck, title: 'Quality Products', detail: 'Reliable color and finish' },
  { icon: Sparkles, title: 'Relaxing Atmosphere', detail: 'A calm salon visit' },
];

function categoryId(category) {
  return `service-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function formatPrice(price) {
  return price.replace('/up', '+');
}

function getMeta(category) {
  return categoryMeta[category] || {
    icon: Sparkles,
    image: '/images/nail9.png',
    description: 'Fresh nail care with clear pricing.',
  };
}

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden border-b border-brand-nude/60 bg-[#fff7f7]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%]">
          <img
            alt=""
            className="h-full w-full object-cover object-[82%_18%] opacity-100 saturate-[1.08] contrast-[1.04] lg:object-[88%_18%]"
            src="/images/services-bg.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff7f7] via-[#fff7f7]/42 via-[48%] to-[#fff7f7]/5 lg:via-[#fff7f7]/10 lg:via-[36%] lg:to-transparent" />
        </div>
        <div className="section-wrap relative grid items-center gap-8 py-8 sm:py-10 lg:min-h-[310px] lg:grid-cols-[1fr_0.86fr] lg:py-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Services</p>
            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Nail Services & Pricing
            </h1>
            <div className="my-5 flex items-center gap-4 text-brand-berry">
              <span className="h-px w-16 bg-brand-berry" />
              <Heart className="h-5 w-5" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="btn-primary"
                href={businessInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="h-4 w-4" />
                Book an Appointment
              </a>
              <a className="btn-secondary" href="#full-menu">
                View Full Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrap py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="icon-bubble h-9 w-9">
              <Crown className="h-4 w-4" />
            </span>
            <h2 className="text-2xl md:text-3xl">Most-Booked Services</h2>
          </div>
          <a className="hidden text-sm font-semibold text-brand-berry sm:inline-flex" href="#full-menu">
            View Full Menu -&gt;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {popularServices.map((service, index) => {
            const Icon = index % 2 === 0 ? Sparkles : Scissors;
            return (
              <article
                key={service.name}
                className="surface-card flex flex-col p-4 sm:min-h-[190px] sm:p-5"
              >
                <div className="mb-3 flex items-start gap-3 sm:mb-4">
                  <span className="icon-bubble h-10 w-10 shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{service.name}</h3>
                    <p className="mt-1 text-lg font-bold text-brand-berry">
                      {formatPrice(service.price)}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-brand-charcoal/72">
                  {popularDescriptions[service.name]}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div id="full-menu" className="section-wrap scroll-mt-24 pb-16">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {serviceMenu.map((category) => {
            const meta = getMeta(category.category);
            const Icon = meta.icon;
            return (
              <article
                id={categoryId(category.category)}
                key={category.category}
                className="surface-card scroll-mt-24 overflow-hidden p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="icon-bubble shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-2xl">{meta.label || category.category}</h2>
                    <span className="mt-2 block h-px w-12 bg-brand-berry" />
                    <p className="mt-3 text-sm leading-6 text-brand-charcoal/62">
                      {meta.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={`${category.category}-${item.name}`}
                      className="flex items-start justify-between gap-4 text-sm leading-6"
                    >
                      <span className="text-brand-charcoal/78">{item.name}</span>
                      <span className="shrink-0 font-semibold text-brand-charcoal">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-sm leading-6 text-brand-charcoal/58">{servicePriceNote}</p>

        <div className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-brand-nude/70 bg-brand-blush/70 shadow-soft md:grid-cols-[0.65fr_1fr]">
          <div className="hidden min-h-[220px] md:block">
            <img
              alt=""
              className="h-full w-full object-cover"
              src="/images/nail12.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-5 flex items-center gap-4 text-brand-berry">
              <span className="h-px w-14 bg-brand-rose" />
              <Heart className="h-5 w-5" />
              <span className="h-px w-14 bg-brand-rose" />
            </div>
            <h2 className="text-2xl md:text-3xl">Ready to Pamper Yourself?</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-brand-charcoal/70">
              Book your appointment today and let us take care of the rest.
            </p>
            <a
              className="btn-primary mt-6"
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-[1.5rem] border border-brand-nude/70 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-6 ${
                  index > 0 ? 'border-t border-brand-nude/70 sm:border-l sm:border-t-0' : ''
                } ${index === 2 ? 'lg:border-t-0 sm:border-t' : ''}`}
              >
                <span className="icon-bubble shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-brand-charcoal/64">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
