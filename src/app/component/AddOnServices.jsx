"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Lorem Ipsum',
    image: '/service1.jpg',
    link: '/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Lorem Ipsum',
    image: '/service2.webp',
    link: '/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const data = [
{  id:1,
  content : "GAS PROCESSING PLANT"
},
{  id:2,
  content : "OIL/LIQUID TREATMENT PLANT"
},
{  id:3,
  content : "SEPARATION EQUIPMENT'S"
},
{  id:4,
  content : "PRODUCED WATER TREATMENT UNIT"
},
{  id:5,
  content : "WATER TREATMENT UNIT"
},
]

const AddOnServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % services.length
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? services.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % services.length
    );
  };

return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <AnimatedSection>
          <div className="flex flex-col px-8 py-6 bg-gray-900 rounded-xl shadow-md">
  <h2 className="text-3xl font-bold text-white mb-6">Our Add-On Services</h2>
  <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
    {data.map((dat) => (
      <li key={dat.id}>{dat.content}</li>
    ))}
  </ul>
</div>

          </AnimatedSection>

          {/* Carousel Section */}
          <AnimatedSection>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_self"
                className="relative group"
                title={service.title}
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    objectFit='cover'
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{service.title}</p>
                </div>
              </a>
            ))}
          </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;