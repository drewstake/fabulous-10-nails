import React from 'react';
import { serviceMenu } from '../data/serviceMenu';
import { servicePriceNote } from '../data/businessInfo';
import PopularServicesSection from './PopularServicesSection';

export default function ServicesSection() {
  const addOns = serviceMenu.find((category) => category.category === 'Additional');
  const coreCategories = serviceMenu.filter((category) => category.category !== 'Additional');

  return (
    <section className="page-section bg-rose-50">
      <div className="section-wrap">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-500">
            Services
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">Nail Services & Pricing</h1>
          <p className="mt-3 text-sm text-slate-700 md:text-base">
            Transparent pricing for acrylics, dip powder, gel, pedicures, waxing, and kids
            services in Pennsburg.
          </p>
        </div>

        <PopularServicesSection sectionTag={false} includeContainer={false} compact />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {coreCategories.map((category) => (
            <article
              key={category.category}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-xl font-bold text-slate-900">{category.category}</h2>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={`${category.category}-${item.name}`}
                    className="flex items-center justify-between gap-4 border-b border-rose-100 pb-3 text-sm last:border-b-0 last:pb-0 md:text-base"
                  >
                    <span className="text-slate-700">{item.name}</span>
                    <span className="font-semibold text-slate-900">{item.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {addOns ? (
          <aside className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">Add-Ons</h2>
            <p className="mb-4 text-sm text-slate-700 md:text-base">
              Customize your service with extra details and finishing touches.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {addOns.items.map((item) => (
                <div
                  key={`addon-${item.name}`}
                  className="flex items-center justify-between rounded-xl border border-amber-200 bg-white p-3 text-sm md:text-base"
                >
                  <span className="text-slate-700">{item.name}</span>
                  <span className="font-semibold text-slate-900">{item.price}</span>
                </div>
              ))}
            </div>
          </aside>
        ) : null}

        <p className="mt-8 text-sm text-slate-600">{servicePriceNote}</p>
      </div>
    </section>
  );
}
