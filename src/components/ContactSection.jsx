import React from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Visit Us</SectionTitle>
        <div className="max-w-4xl mx-auto text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 mb-3 text-pink-500" />
              <h4 className="font-semibold mb-1 text-lg">Address</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=436+Pottstown+Ave.,+Pennsburg,+PA,+18073"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                436 Pottstown Ave.,<br />Pennsburg, PA, 18073
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 mb-3 text-pink-500" />
              <h4 className="font-semibold mb-1 text-lg">Phone</h4>
              <a href="tel:215-679-6470" className="hover:text-pink-600">
                (215)-679-6470
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 mb-3 text-pink-500" />
              <h4 className="font-semibold mb-1 text-lg">Opening Hours</h4>
              <p>Mon - Thurs: 10 AM – 7 PM</p>
              <p>Fri: 9 AM – 7 PM</p>
              <p>Sat: 9 AM – 6 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div className="mt-12 h-64 md:h-80 bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.698655931788!2d-75.4991616846033!3d40.39331897936784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c41a0a9a5a67d7%3A0x5b8a0d9a9a9a9a9a!2s436%20Pottstown%20Ave%2C%20Pennsburg%2C%20PA%2018073!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Fabulous 10 Nails location"
            />
          </div>
          <p className="mt-8 text-lg text-center">We look forward to seeing you!</p>
        </div>
      </div>
    </section>
  );
}
