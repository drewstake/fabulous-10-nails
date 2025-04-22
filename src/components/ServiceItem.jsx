import React from 'react';

const ServiceItem = ({ name, price }) => (
  <div className="flex justify-between items-center py-2 border-b border-pink-100 last:border-b-0">
    <span className="text-gray-700">{name}</span>
    <span className="font-medium text-gray-800">{price}</span>
  </div>
);

export default ServiceItem;
