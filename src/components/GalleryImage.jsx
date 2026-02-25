import React from 'react';

const fallbackImage = '/images/interior.png';

export default function GalleryImage({ src, alt }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        className="aspect-square h-full w-full object-cover transition duration-300 group-hover:scale-105"
        width="600"
        height="600"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />
    </figure>
  );
}
