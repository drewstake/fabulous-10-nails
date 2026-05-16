import React from 'react';

const fallbackImage = '/images/interior.png';

export default function GalleryImage({ src, alt, onClick }) {
  return (
    <button
      type="button"
      className="group block w-full overflow-hidden rounded-xl bg-white text-left shadow-[0_12px_28px_rgba(31,31,41,0.10)] transition focus:outline-none focus:ring-4 focus:ring-brand-berry/25"
      onClick={onClick}
      aria-label={`Open ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-[1.55/1] h-full w-full object-cover transition duration-300 group-hover:scale-105"
        width="600"
        height="390"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />
    </button>
  );
}
