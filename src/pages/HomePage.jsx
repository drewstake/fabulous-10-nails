import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
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
  const [activePreviewIndex, setActivePreviewIndex] = useState(null);
  const [lightboxDirection, setLightboxDirection] = useState('next');
  const lightboxTouchStart = useRef(null);
  const activePreviewImage =
    activePreviewIndex === null ? null : previewImages[activePreviewIndex];

  const closeLightbox = useCallback(() => setActivePreviewIndex(null), []);
  const showPreviousImage = useCallback(() => {
    setLightboxDirection('previous');
    setActivePreviewIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + previewImages.length) % previewImages.length
    );
  }, [previewImages.length]);
  const showNextImage = useCallback(() => {
    setLightboxDirection('next');
    setActivePreviewIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % previewImages.length
    );
  }, [previewImages.length]);
  const handleLightboxTouchStart = useCallback((event) => {
    if (event.touches.length !== 1) {
      return;
    }

    const touch = event.touches[0];
    lightboxTouchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }, []);
  const handleLightboxTouchEnd = useCallback(
    (event) => {
      const start = lightboxTouchStart.current;
      lightboxTouchStart.current = null;

      if (!start || event.changedTouches.length === 0) {
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const isIntentionalVerticalSwipe =
        Math.abs(deltaY) >= 60 && Math.abs(deltaY) > Math.abs(deltaX) * 1.25;

      if (!isIntentionalVerticalSwipe) {
        return;
      }

      if (deltaY < 0) {
        showNextImage();
      } else {
        showPreviousImage();
      }
    },
    [showNextImage, showPreviousImage]
  );

  useEffect(() => {
    if (activePreviewIndex === null) {
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
  }, [activePreviewIndex, closeLightbox, showNextImage, showPreviousImage]);

  return (
    <>
      <PageMeta
        title="Fabulous 10 Nails in Pennsburg, PA | Book Manicures & Pedicures"
        description="Clean salon, friendly nail techs, and quality results at Fabulous 10 Nails in Pennsburg, PA. Book online, call now, or get directions."
      />
      <HeroSection />

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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="group block w-full overflow-hidden rounded-lg text-left transition focus:outline-none focus:ring-4 focus:ring-brand-berry/25"
                onClick={() => {
                  setLightboxDirection('next');
                  setActivePreviewIndex(index);
                }}
                aria-label={`Open larger view of ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/5] w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
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

      {activePreviewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/92 px-4 py-5 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded nail inspiration photo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-brand-charcoal shadow-soft transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/35 md:right-6 md:top-6"
            onClick={closeLightbox}
            aria-label="Close nail inspiration photo"
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
            aria-label="View previous nail inspiration photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="pointer-events-none flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
            <img
              key={`${activePreviewImage.src}-${lightboxDirection}`}
              src={activePreviewImage.src}
              alt={activePreviewImage.alt}
              className={`pointer-events-auto max-h-[78vh] w-auto max-w-full touch-none select-none rounded-lg object-contain shadow-[0_22px_70px_rgba(0,0,0,0.32)] ${
                lightboxDirection === 'previous'
                  ? 'lightbox-image-slide-down'
                  : 'lightbox-image-slide-up'
              }`}
              decoding="async"
              draggable="false"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleLightboxTouchStart}
              onTouchEnd={handleLightboxTouchEnd}
            />
            <div
              className="pointer-events-auto max-w-[min(100%,42rem)] text-center text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-sm font-semibold leading-6">{activePreviewImage.alt}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/72">
                {activePreviewIndex + 1} / {previewImages.length}
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
            aria-label="View next nail inspiration photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
