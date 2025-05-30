"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "../hooks/useMediaQuery"
import AnimatedSection from "./AnimatedSection"

export default function AccordionSlider({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredSlide, setHoveredSlide] = useState(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Reset to first slide when switching between mobile and desktop
  useEffect(() => {
    setActiveSlide(0)
    setHoveredSlide(null)
  }, [isMobile])

  const slideCount = slides.length
  const defaultSlideWidth = 100 / slideCount
  const expandedSlideWidth = 70
  const compressedSlideWidth = (100 - expandedSlideWidth) / (slideCount - 1)

  // Desktop slide styles with improved transition handling
  const getDesktopSlideStyles = (index) => {
    let leftPosition = 0
    let slideWidth

    if (hoveredSlide === null) {
      slideWidth = defaultSlideWidth
      leftPosition = index * defaultSlideWidth
    } else {
      slideWidth = index === hoveredSlide ? expandedSlideWidth : compressedSlideWidth
      for (let i = 0; i < index; i++) {
        leftPosition += i === hoveredSlide ? expandedSlideWidth : compressedSlideWidth
      }
    }

    return {
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)", // Smoother easing
      position: "absolute",
      height: "100%",
      left: `${leftPosition}%`,
      width: `${slideWidth}%`,
      zIndex: hoveredSlide === index ? 20 : index,
      willChange: "width, left", // Hint to browser for optimization
    }
  }

  // Mobile slide styles
  const getMobileSlideStyles = (index) => {
    return {
      transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      opacity: activeSlide === index ? 1 : 0,
      zIndex: activeSlide === index ? 10 : 1,
      pointerEvents: activeSlide === index ? "auto" : "none",
      transform: `translateX(${activeSlide === index ? 0 : activeSlide > index ? "-100%" : "100%"})`,
    }
  }

  // Debounce hover to prevent rapid state changes
  const handleHover = (index) => {
    if (!isMobile) {
      setHoveredSlide(index)
    }
  }

  const handleLeave = () => {
    if (!isMobile) {
      setHoveredSlide(null)
    }
  }

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount)
  }

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }

  return (
    <AnimatedSection>
      <div className="relative w-full" style={{ maxHeight: isMobile ? "500px" : "630px" }}>
        <div
          className="relative w-full overflow-hidden bg-gray-900" // Added background to prevent flash
          style={{
            aspectRatio: isMobile ? "5/5" : "1500/630",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          {/* Mobile navigation buttons */}
          {isMobile && (
            <>
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="Next slide"
              >
                →
              </button>
            </>
          )}

          <ul className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <li
                key={slide.id}
                className="overflow-hidden"
                style={isMobile ? getMobileSlideStyles(index) : getDesktopSlideStyles(index)}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <Link href={slide.link} className="block h-full relative no-underline">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image || "/placeholder.svg?height=630&width=1500"}
                      alt={slide.title}
                      fill
                      className="object-cover transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center">
                    <div
                      className={`bg-black/50 text-white p-4 flex flex-col justify-center ${
                        isMobile ? "w-full h-full" : "h-full"
                      }`}
                      style={
                        !isMobile
                          ? {
                              width: "35%",
                              minWidth: "320px",
                            }
                          : {}
                      }
                    >
                      <div className={isMobile ? "mt-auto" : ""}>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-sm md:text-base">
                          {isMobile && slide.description.length > 100
                            ? `${slide.description.substring(0, 100)}...`
                            : slide.description}
                        </p>

                        {isMobile && (
                          <div className="mt-4 mb-2">
                            <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                              {index + 1} / {slides.length}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {isMobile && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${activeSlide === index ? "bg-white" : "bg-white/40"}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}