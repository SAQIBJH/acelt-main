"use client";
import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

// Reusable Slide Component
const MDFMarvelCard = ({ number = "01" }) => {
  return (
    <div className="flex  min-w-[180px] p-1 bg-red-600 ">
      <div className="flex flex-col">
        <h2 className="text-base font-bold leading-tight text-white">
          MDF Marvels
        </h2>
        <p className="mt-2 text-xs md:text-xs text-white max-w-[180px]">
          Explore our range of trendsetting MDF panels, blending style and durability to redefine modern interiors.
        </p>
      </div>
<h2 className="text-6xl font-bold text-transparent text-outline flex justify-items-start ">
{number}
</h2>


    </div>
  );
};

// Slider data with component-based entries
const slider = [
  { id: 1, component: <MDFMarvelCard number="01" /> },
  { id: 2, component: <MDFMarvelCard number="02" /> },
  { id: 3, component: <MDFMarvelCard number="03" /> },
  { id: 4, component: <MDFMarvelCard number="04" /> },
  { id: 5, component: <MDFMarvelCard number="05" /> },
  { id: 6, component: <MDFMarvelCard number="06" /> },
];

export default function InfiniteSlider() {
  const logoListRef = useRef(null);

  useEffect(() => {
    if (logoListRef.current) {
      const scroller = logoListRef.current;
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate each slide to create infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <AnimatedSection>
      <div ref={logoListRef} className="w-full overflow-hidden bg-red-600 p-4">
        <ul className="scroller__inner flex items-center justify-start gap-12 animate-scroll">
          {slider.map((slide, index) => (
            <li key={index} className="flex-shrink-0">
              {slide.component}
            </li>
          ))}
        </ul>
      </div>
      
    </AnimatedSection>
  );
}
