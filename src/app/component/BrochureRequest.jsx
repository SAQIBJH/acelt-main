import React from 'react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const BrochureRequest = () => {
  return (
    <section className="container mx-auto px-8 py-12 bg-slate-100 mb-2">
        <AnimatedSection>
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 max-sm:text-center">
              Request A Brochure
            </h2>
            <p className="text-gray-600 text-lg max-sm:text-center">
              Get all our products informations in one place, download our brochure now.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-end max-sm:justify-center">
          <Link 
            href="/brouchre.pdf" 
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-colors text-center inline-block"
          >
            Download Now
          </Link>
        </div>
      </div>
        </AnimatedSection>
    </section>
  );
};

export default BrochureRequest;