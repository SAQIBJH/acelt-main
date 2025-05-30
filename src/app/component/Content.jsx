"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Content = () => {
  const materials = [
    {
      title: "Pipes",
      description: `Known for their strength and durability, our seamless pipes are ideal for high-pressure applications.
Available in following material grades: Carbon Steel, Stainless Steel, Alloy Steel,(Super) Duplex, Nickel Alloy`,
      image: "/pipes.png",
      link: "/"
    },
    {
      title: "Pressure Gauges",
      description: `AADTRA offers Process Control & Measuring Instruments & industrial technology solution provider. Our major products range includes Pressure, Temperature, Humidity, Level, Flow, Analyzers, Automation Products, Industrials Valves & Instrumentation Manifolds and Tube fittings and supply of all kinds of process control instruments.`,
      image: "/gauges.jpeg",
      link: "/"
    },
    {
      title: "Pipeline Barred Tees",
      description: `AADTRA Group has a strong expertise in the total project management of pipelines and pipeline materials.

Typical products, such as Barred Tees, Valves, Hot Induction Bends, Isolation Joints (G-Joint) Spectacle Blinds, Pipe Coatings, Clad Pipes, large bore Flanges, Fasteners and Gaskets are all within our scope of supply to complete any project pipeline package.`,
      image: "/product3.png",
      link: "/"
    }
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Redesigned card with premium aesthetic
  const Card = ({ title, description, image, link, index }) => (
    <div 
      className="group relative rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Card background with subtle pattern */}
      <div className="absolute inset-0 bg-white opacity-95 z-0"></div>
      
      {/* Image container with special clip path */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
          <img 
            src={image || "/api/placeholder/600/400"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-4 left-4 bg-red-500 px-3 sm:px-4 py-1 text-xs sm:text-sm text-white font-medium rounded-r-full">
          Premium
        </div>
        
        {/* Title overlapping image and content */}
        <div className="absolute bottom-4 left-0 right-0 z-20 p-4 sm:p-6 translate-y-1/2">
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg border-l-4 border-red-500">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 sm:p-6 pt-12 sm:pt-16 z-10 relative">
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">{description}</p>
        
        <a 
          href="/pages/products"
          className="inline-flex items-center justify-between w-full group/link"
        >
          <span className="text-red-500 font-medium text-sm sm:text-base">Explore Details</span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover/link:scale-110">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </a>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 z-20">
        <div className="absolute top-0 right-0 w-full h-full bg-red-100 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );

  return (
    <AnimatedSection>
    <div className="bg-gradient-to-b from-red-50 to-white my-6 sm:my-6 md:my-8">
      <section className="py-12 sm:py-4 md:py-20 lg:py-4" id="building-materials-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 px-4 sm:px-6 py-1.5 sm:py-2 bg-red-100 text-red-600 rounded-full font-medium text-sm sm:text-base">
              PREMIUM SOLUTIONS
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Our Premium Products
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                At Ace Energy, we provide a wide range of high-quality products designed to meet the specific needs of industries such as Oil & Gas, Petrochemical, Power Generation, Marine, and more.
              </p>
              
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-300 to-red-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {materials.map((material, index) => (
              <Card key={index} {...material} index={index} />
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <a 
              href="/pages/products" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
    </AnimatedSection>
  );
};

export default Content;
