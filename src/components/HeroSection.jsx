import React from 'react';
import { CalendarCheck, Heart, ListChecks, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <span className="petal left-5 top-8 hidden opacity-60 md:block" />
      <span className="petal left-12 top-28 hidden rotate-12 opacity-45 md:block" />
      <span className="petal right-8 bottom-10 hidden rotate-45 opacity-50 md:block" />
      <div className="absolute inset-y-0 right-0 w-full md:w-[63%] lg:w-[68%] xl:w-[72%]">
        <img
          src="/images/front.png"
          alt="Fabulous 10 Nails storefront in Pennsburg, Pennsylvania"
          className="h-full w-full object-cover object-[58%_50%] brightness-[1.02] contrast-[1.07] saturate-[1.08]"
          width="4096"
          height="2694"
          sizes="100vw"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.89)_0%,rgba(255,255,255,.68)_52%,rgba(255,255,255,.18)_100%)] md:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.72)_42%,rgba(255,255,255,.18)_55%,rgba(255,255,255,0)_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-ivory to-transparent" />

      <div className="section-wrap relative flex min-h-[34rem] items-center py-12 md:min-h-[38rem] lg:min-h-[42rem]">
        <div className="flex max-w-[34rem] flex-col">
          <p className="mb-5 hidden items-center gap-3 font-script text-2xl text-brand-charcoal/82 sm:flex md:text-3xl">
            Pamper Yourself
            <Heart className="h-5 w-5 fill-brand-rose text-brand-rose" />
          </p>
          <h1 className="order-2 mt-6 font-display text-[2.125rem] font-semibold leading-[1.07] text-brand-charcoal sm:order-none sm:mt-0 sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl xl:leading-[1.03]">
            Luxury nail care
            <br />
            <span className="whitespace-nowrap">
              in <span className="italic text-brand-berry">Pennsburg, PA</span>
            </span>
          </h1>
          <div className="order-1 mt-[12.5rem] grid w-full grid-cols-1 gap-3 sm:order-none sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap">
            <a
              className="btn-primary w-full sm:w-auto"
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Now
            </a>
            <Link className="btn-secondary w-full sm:w-auto" to="/services">
              <ListChecks className="h-4 w-4 text-brand-berry" />
              View Services
            </Link>
          </div>

          <a
            className="order-3 mt-6 inline-flex max-w-full items-center gap-3 text-sm font-semibold text-brand-charcoal/72 transition hover:text-brand-berry sm:order-none"
            href={businessInfo.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="h-5 w-5 shrink-0 text-brand-berry" />
            {businessInfo.street} {businessInfo.cityStateZip}
          </a>
        </div>
      </div>

      <div className="section-wrap relative -mt-8 hidden pb-6 sm:block">
        <div className="grid grid-cols-1 gap-3 text-sm text-brand-charcoal/72 sm:grid-cols-3 lg:max-w-4xl">
          {[
            ['Clean luxury', 'Sanitized stations and fresh tools.'],
            ['Natural finishes', 'Classic, soft, and detailed styles.'],
            ['Easy booking', 'Call, book online, or walk in.'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="surface-card flex items-start gap-3 p-4"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-berry" />
              <span>
                <span className="block font-bold text-brand-charcoal">{title}</span>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
