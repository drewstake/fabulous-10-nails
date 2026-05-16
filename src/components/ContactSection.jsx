import React from 'react';
import { CalendarCheck, Clock3, Heart, Leaf, MapPin, Phone, ShieldCheck, User } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import DirectionsButton from './DirectionsButton';

const featureItems = [
  {
    icon: Leaf,
    title: 'Clean & Sanitary',
    text: 'Environment',
  },
  {
    icon: User,
    title: 'Experienced',
    text: 'Technicians',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    text: '& Care',
  },
  {
    icon: Heart,
    title: 'Relaxing',
    text: 'Atmosphere',
  },
];

function ContactDivider() {
  return (
    <div className="my-5 flex items-center justify-center gap-4 text-brand-berry">
      <span className="h-px w-20 bg-brand-berry/70" />
      <Heart className="h-4 w-4 fill-white" />
      <span className="h-px w-20 bg-brand-berry/70" />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="bg-[#fff8f8]">
      <div className="relative overflow-hidden">
        <img
          src="/images/contact-hero.png"
          alt="Pink manicure with soft flowers"
          className="absolute inset-0 h-full w-full object-cover object-[64%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/4" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff8f8] to-transparent" />

        <div className="section-wrap relative flex min-h-[28rem] items-center py-16 md:min-h-[34rem]">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-brand-charcoal sm:text-6xl sm:leading-[0.95] md:text-7xl">
              Visit
              <span className="block text-brand-berry">Fabulous 10 Nails</span>
            </h1>
            <ContactDivider />
          </div>
        </div>
      </div>

      <div className="section-wrap relative -mt-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-brand-nude/70 bg-white/92 p-8 text-center shadow-soft backdrop-blur">
            <span className="mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-blush text-brand-berry">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="text-2xl">Address</h2>
            <span className="mx-auto mt-3 block h-px w-9 bg-brand-berry" />
            <p className="mt-5 text-sm leading-6 text-brand-charcoal/78">
              {businessInfo.street}
              <br />
              {businessInfo.cityStateZip}
            </p>
            <DirectionsButton
              className="mt-5 inline-flex text-sm font-semibold text-brand-berry hover:text-[#d94370]"
            />
          </article>

          <article className="rounded-2xl border border-brand-nude/70 bg-white/92 p-8 text-center shadow-soft backdrop-blur">
            <span className="mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-blush text-brand-berry">
              <Phone className="h-5 w-5" />
            </span>
            <h2 className="text-2xl">Phone</h2>
            <span className="mx-auto mt-3 block h-px w-9 bg-brand-berry" />
            <a
              className="mt-8 inline-flex text-lg font-semibold text-brand-berry hover:text-[#d94370]"
              href={businessInfo.phoneHref}
            >
              {businessInfo.phoneDisplay}
            </a>
            <p className="mx-auto mt-4 max-w-[13rem] text-sm leading-6 text-brand-charcoal/68">
              Fastest way to reach us for same-day availability.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-nude/70 bg-white/92 p-8 text-center shadow-soft backdrop-blur">
            <span className="mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-blush text-brand-berry">
              <Clock3 className="h-5 w-5" />
            </span>
            <h2 className="text-2xl">Hours</h2>
            <span className="mx-auto mt-3 block h-px w-9 bg-brand-berry" />
            <ul className="mx-auto mt-5 max-w-[17rem] space-y-2 text-sm text-brand-charcoal/78">
              {businessInfo.hours.map((hour) => (
                <li key={hour.label} className="flex justify-between gap-3">
                  <span>{hour.label}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <a
          className="mt-8 block overflow-hidden rounded-2xl border border-brand-nude/70 bg-white shadow-soft"
          href={businessInfo.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open directions to Fabulous 10 Nails"
        >
          <img
            src="/images/contact-map.png"
            alt="Map showing Fabulous 10 Nails in Pennsburg, Pennsylvania"
            className="h-[26rem] w-full object-cover md:h-[28.5rem]"
          />
        </a>

        <div className="mt-8 overflow-hidden rounded-2xl border border-brand-nude/70 bg-gradient-to-r from-brand-blush/70 via-white to-brand-blush/70 p-6 shadow-soft md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[10rem_1fr_auto]">
            <img
              src="/images/contact-hero.png"
              alt="Pink manicure detail"
              className="mx-auto h-32 w-32 rounded-full object-cover object-[78%_58%] shadow-soft md:mx-0"
            />
            <div className="text-center md:text-left">
              <ContactDivider />
              <h2 className="text-3xl md:text-4xl">Ready to Pamper Yourself?</h2>
              <p className="mt-3 text-sm leading-6 text-brand-charcoal/76 md:text-base">
                Book your appointment today and let us take care of the rest.
              </p>
            </div>
            <div className="flex justify-center border-brand-rose/80 md:border-l md:pl-12">
              <a
                className="btn-primary rounded-lg normal-case tracking-normal"
                href={businessInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="h-4 w-4" />
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-brand-nude/70 bg-white/86 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 px-6 py-5 ${
                  index === 0 ? '' : 'border-t border-brand-nude/70 sm:border-l sm:border-t-0'
                } ${index === 2 ? 'sm:border-l-0 sm:border-t lg:border-l lg:border-t-0' : ''}`}
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-blush text-brand-berry">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold leading-5 text-brand-charcoal">
                  {item.title}
                  <span className="block font-normal text-brand-charcoal/72">{item.text}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
