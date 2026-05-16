import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  Heart,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PopularServicesSection from '../components/PopularServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PageMeta from '../components/PageMeta';
import { businessInfo } from '../data/businessInfo';
import { galleryImages } from '../data/galleryImages';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Clean & Comfortable',
    text: 'Your safety and comfort are our top priorities. We maintain clean tools, stations, and salon spaces.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Skilled Techs',
    text: 'Our experienced nail technicians are patient, detail-focused, and easy to talk to.',
  },
  {
    icon: MapPin,
    title: 'Local & Convenient',
    text: 'Located in the heart of Pennsburg with easy access and parking close by.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Products',
    text: 'We use trusted products for long-lasting, beautiful results you will love.',
  },
];

export default function HomePage() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <>
      <PageMeta
        title="Fabulous 10 Nails in Pennsburg, PA | Book Manicures & Pedicures"
        description="Clean salon, friendly nail techs, and quality results at Fabulous 10 Nails in Pennsburg, PA. Book online, call now, or get directions."
      />
      <HeroSection />

      <section className="bg-brand-ivory py-10">
        <div className="section-wrap">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="surface-card p-7 text-center">
                <span className="icon-bubble mx-auto mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mb-2 text-xl">{title}</h2>
                <p className="text-sm leading-6 text-brand-charcoal/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PopularServicesSection compact />

      <section className="relative overflow-hidden bg-brand-ivory py-12 md:py-16">
        <span className="petal right-8 top-10 hidden rotate-45 md:block" />
        <span className="petal right-20 bottom-16 hidden rotate-12 opacity-50 md:block" />
        <div className="section-wrap">
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.9fr]">
            <img
              src="/images/interior.png"
              alt="Clean and spacious Fabulous 10 Nails salon interior"
              className="h-full max-h-[26rem] min-h-[18rem] w-full rounded-lg object-cover object-center shadow-soft"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="eyebrow">Experience the Fabulous 10 Difference</p>
              <h2 className="mt-1 text-4xl leading-tight md:text-5xl">
                A Clean, Spacious & <span className="italic text-brand-berry">Relaxing</span> Environment
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-brand-charcoal/72 md:text-base">
                Step into our modern and welcoming nail salon, designed with your comfort in
                mind. We take pride in professional service, a calm setting, and polished
                results that fit your style.
              </p>
              <Link className="btn-primary mt-6" to="/gallery">
                Take a Look Around
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-wrap">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 text-2xl">
              Nail Inspiration
              <Heart className="h-4 w-4 fill-brand-rose text-brand-rose" />
            </h2>
            <Link className="btn-ghost" to="/gallery">
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {previewImages.map((image) => (
              <Link key={image.src} className="group block overflow-hidden rounded-lg" to="/gallery">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[1.8/1] w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-4">
        <div className="section-wrap">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="surface-card flex items-center gap-4 p-5">
              <span className="icon-bubble shrink-0">
                <Gem className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl">Walk-ins Welcome</h2>
                <p className="text-sm text-brand-charcoal/68">Appointments are best for busy days.</p>
              </div>
            </article>
            <article className="surface-card flex items-center gap-4 p-5">
              <span className="icon-bubble shrink-0">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl">Detailed Nail Art</h2>
                <p className="text-sm text-brand-charcoal/68">Bring a photo or choose in the salon.</p>
              </div>
            </article>
            <article className="surface-card flex items-center gap-4 p-5">
              <span className="icon-bubble shrink-0">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl">Pennsburg Location</h2>
                <p className="text-sm text-brand-charcoal/68">{businessInfo.servingLine}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
