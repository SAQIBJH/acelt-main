"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/background1.png",
    title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
    subtitle: <div>We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers.</div>
  },
  {
    image: "/background2.jpg",
    title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
    subtitle: <div>We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers.</div>
  },
  {
    image: "/background3.jpg",
    title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
    subtitle: <div>We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers.</div>
  }
];

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Diagonal overlay */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-[#1a1f3c] opacity-50"></div>
        <div className="absolute inset-0">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-1 bg-[#1a1f3c]"
              style={{
                left: `${33 + (i * 33)}%`,
                transform: 'rotate(15deg) scale(2)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "z-10" : "z-0"
          } ${
            index === currentSlide
              ? direction === 'right'
                ? 'slide-right'
                : 'slide-left'
              : index === (currentSlide - 1 + slides.length) % slides.length
              ? 'slide-initial-left'
              : 'slide-initial-right'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === currentSlide}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center flex-col text-white text-center">
        <h1 className={`text-2xl md:text-4xl font-bold mb-4 px-8 ${animating ? 'fade-in' : ''}`}>
          {slides[currentSlide].title}
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl px-8 ${animating ? 'fade-in delay-200' : ''}`}>
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-blue-400 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-blue-400 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}






