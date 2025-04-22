import React from 'react';
import SectionTitle from './SectionTitle';
import ServiceCategoryTitle from './ServiceCategoryTitle';
import ServiceItem from './ServiceItem';
import { serviceMenu } from '../data/serviceMenu';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Our Services & Pricing</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceMenu.slice(0, 4).map(category => (
            <div
              key={category.category}
              className="bg-pink-50 p-6 rounded-lg shadow-sm flex flex-col"
            >
              <ServiceCategoryTitle>{category.category}</ServiceCategoryTitle>
              <div className="flex-grow">
                {category.items.map(item => (
                  <ServiceItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
          {serviceMenu.slice(4).map(category => (
            <div
              key={category.category}
              className="bg-pink-50 p-6 rounded-lg shadow-sm flex flex-col w-full"
            >
              <ServiceCategoryTitle>{category.category}</ServiceCategoryTitle>
              <div className="flex-grow">
                {category.items.map(item => (
                  <ServiceItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-sm">
          Note: Prices marked with "/up" may vary based on complexity, length, or specific requests.
          Please consult with your technician.
        </p>
      </div>
    </section>
  );
}
