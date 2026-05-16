import React from 'react';

const ServiceItem = ({ name, price }) => (
  <div className="flex items-center justify-between border-b border-brand-nude/70 py-2 last:border-b-0">
    <span className="text-brand-charcoal/72">{name}</span>
    <span className="font-medium text-brand-charcoal">{price}</span>
  </div>
);

export default ServiceItem;
