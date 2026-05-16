import React, { useCallback, useEffect, useState } from 'react';
import {
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Heart,
  Leaf,
  ShieldCheck,
  UserCheck,
  X,
} from 'lucide-react';
import GalleryImage from './GalleryImage';
import { galleryImages } from '../data/galleryImages';
import { businessInfo } from '../data/businessInfo';

const galleryBenefits = [
  { icon: Leaf, label: 'Clean & Sanitary', detail: 'Environment' },
  { icon: UserCheck, label: 'Experienced', detail: 'Technicians' },
  { icon: ShieldCheck, label: 'Quality Products', detail: '& Care' },
  { icon: Flower2, label: 'Relaxing', detail: 'Atmosphere' },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPreviousImage = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);
  const showNextImage = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNextImage, showPreviousImage]);

  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="relative overflow-hidden border-b border-brand-nude/50 bg-white">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-bg.png"
            alt="Fabulous 10 Nails gallery background"
            className="h-full w-full object-cover object-[38%_50%] opacity-100 saturate-[1.08] contrast-[1.04] md:translate-x-[8%] md:scale-[1.12] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent md:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.96)_34%,rgba(255,255,255,.38)_45%,rgba(255,255,255,0)_58%)]" />
        </div>
        <div className="section-wrap relative grid min-h-[23rem] items-center gap-8 py-12 md:grid-cols-[0.92fr_1.08fr] md:py-16">
          <div className="relative z-10 max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-brand-berry">
              Gallery
            </p>
            <h1 className="text-5xl leading-[1.05] md:text-6xl">
              Nail Art.
              <span className="block text-brand-berry">You&rsquo;ll Love</span>
            </h1>
            <div className="mt-6 flex items-center gap-4 text-brand-berry">
              <span className="h-px w-16 bg-brand-berry" />
              <Heart className="h-4 w-4" />
              <span className="h-px w-16 bg-brand-berry" />
            </div>
            <a
              className="btn-primary mt-7 normal-case tracking-normal"
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

      <div className="section-wrap pt-8 md:pt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.src} {...image} onClick={() => setActiveIndex(index)} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-rose/55 bg-gradient-to-r from-brand-blush/70 via-white to-brand-blush/55 px-6 py-6 md:mt-9 md:px-12">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto_1fr]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/60 text-brand-berry md:mx-0">
              <CalendarCheck className="h-10 w-10" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl">Ready to Pamper Yourself?</h2>
              <p className="mt-2 text-sm leading-6 text-brand-charcoal/75">
                Book your appointment today and let us take care of the rest.
              </p>
            </div>
            <div className="hidden h-16 w-px bg-brand-rose md:block" />
            <div className="flex justify-center md:justify-end">
              <a
                className="btn-primary normal-case tracking-normal"
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

        <div className="mt-8 rounded-2xl border border-brand-rose/55 bg-white px-5 py-5 md:px-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-brand-rose/65">
            {galleryBenefits.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-center gap-4 lg:px-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blush/70 text-brand-berry">
                  <Icon className="h-8 w-8" />
                </span>
                <p className="text-sm font-semibold leading-6 text-brand-charcoal">
                  {label}
                  <span className="block font-medium text-brand-charcoal/72">{detail}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/92 px-4 py-5 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded nail gallery photo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-brand-charcoal shadow-soft transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/35 md:right-6 md:top-6"
            onClick={closeLightbox}
            aria-label="Close gallery photo"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-brand-charcoal shadow-soft transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/35 md:left-6"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="View previous gallery photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="pointer-events-none flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="pointer-events-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-[0_22px_70px_rgba(0,0,0,0.32)]"
              width="1200"
              height="780"
              decoding="async"
              onClick={(event) => event.stopPropagation()}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = '/images/interior.png';
              }}
            />
            <div
              className="pointer-events-auto max-w-[min(100%,42rem)] text-center text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-sm font-semibold leading-6">{activeImage.alt}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/72">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-brand-charcoal shadow-soft transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/35 md:right-6"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="View next gallery photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
