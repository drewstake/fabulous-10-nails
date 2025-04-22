import React from 'react';

const GalleryImage = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-md aspect-square">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      onError={e => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x300/f8bbd0/4a044e?text=Nail+Art";
      }}
    />
  </div>
);

export default GalleryImage;
