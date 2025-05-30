// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import AnimatedSection from './AnimatedSection';

// const clientLogos = [
//   {
//     src: "/Saudi-Aramco.png",
//     alt: "Client Logo 1",
//   },
//   {
//     src: "/Quarter.png",
//     alt: "Client Logo 2", 
//   },
//   {
//     src: "/Shell.png",
//     alt: "Client Logo 3",
//   },
//   {
//     src: "/ESNAAD.png",
//     alt: "Client Logo 4",
//   },
//   {
//     src: "/Gulf.jpeg",
//     alt: "Client Logo 5",
//   },
//   {
//     src: "/Baker Hughes.jpeg",
//     alt: "Client Logo 6",
//   },
//   {
//     src: "/total.png",
//     alt: "Client Logo 7",
//   },
//   {
//     src: "/Petrobras.jpeg",
//     alt: "Client Logo 8",
//   },
//   {
//     src: "/Qatargas.png",
//     alt: "Client Logo 9",
//   },
//   {
//     src: "/dbp.png",
//     alt: "Client Logo 10",
//   },
//   {
//     src: "/Kuwait.png",
//     alt: "Client Logo 11",
//   },
//   {
//     src: "/Home.jpeg",
//     alt: "Client Logo 12",
//   },
//   {
//     src: "/Polymers.jpeg",
//     alt: "Client Logo 13",
//   },
//   {
//     src: "/Profile.jpeg",
//     alt: "Client Logo 14",
//   },
//   {
//     src: "/Petrofac.jpeg",
//     alt: "Client Logo 15",
//   },
//   {
//     src: "/Oman.png",
//     alt: "Client Logo 16",
//   },
// ];

// const CompanyClients = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [clientsToShow, setClientsToShow] = useState(4);

//   // Responsive slider logic
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setClientsToShow(2);
//       else if (window.innerWidth < 1024) setClientsToShow(3);
//       else setClientsToShow(4);
//     };

//     handleResize(); // Initial call
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prev) => 
//         (prev + 1) % Math.ceil(clientLogos.length / clientsToShow)
//       );
//     }, 5000);

//     return () => clearInterval(slideInterval);
//   }, [clientsToShow]);

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => 
//       prev === 0 ? Math.ceil(clientLogos.length / clientsToShow) - 1 : prev - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => 
//       (prev + 1) % Math.ceil(clientLogos.length / clientsToShow)
//     );
//   };

//   return (
//     <AnimatedSection>
//     <section className="container mx-auto px-8 py-12 flex justify-center items-center">
//       <div className="grid md:grid-cols-10 gap-6 items-center ">
//         <div className="col-span-10">
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold text-gray-800 relative inline-block  flex justify-center items-center ">
//               SOME OF OUR CLIENTS
//               <span className="absolute bottom-[-10px]  w-16 h-1 bg-blue-500 mx-auto justify-center inline-flex"></span>
//             </h2>
//           </div>

//           <div className="relative w-full overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//             >
//               {Array.from({ length: Math.ceil(clientLogos.length / clientsToShow) }).map((_, groupIndex) => (
//                 <div 
//                   key={groupIndex} 
//                   className="grid grid-cols-4 gap-10 flex-shrink-0 max-sm:grid-cols-2 animate-scroll"
//                 >
//                   {clientLogos
//                     .slice(groupIndex * clientsToShow, (groupIndex + 1) * clientsToShow)
//                     .map((logo, index) => (
//                       <a 
//                         href="#" 
//                         key={index} 
//                         // target="_blank" 
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors rounded-lg"
//                       >
//                         <Image
//                           src={logo.src}
//                           alt={logo.alt}
//                           width={150}
//                           height={150}
//                           className="max-h-20 max-w-full object-contain"
//                         />
//                       </a>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           {/* <div className="flex justify-center mt-6 space-x-4">
//             <button 
//               onClick={handlePrevSlide} 
//               className="p-3 bg-gray-900 rounded-full hover:bg-gray-300 transition"
//             >
//               ← Prev
//             </button>
//             <button 
//               onClick={handleNextSlide} 
//               className="p-3 bg-gray-900 rounded-full hover:bg-gray-300 transition"
//             >
//               Next →
//             </button>
//           </div> */}

//           {/* Dot Indicators */}
//           {/* <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: Math.ceil(clientLogos.length / clientsToShow) }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div> */}
//         </div>

//       </div>
//     </section>
//     </AnimatedSection>
//   );
// };

// export default CompanyClients;


"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

const clientLogos = [
  { src: "/Saudi-Aramco.png", alt: "Client Logo 1" },
  { src: "/Quarter.png", alt: "Client Logo 2" },
  { src: "/Shell.png", alt: "Client Logo 3" },
  { src: "/ESNAAD.png", alt: "Client Logo 4" },
  { src: "/Gulf.jpeg", alt: "Client Logo 5" },
  { src: "/Baker Hughes.jpeg", alt: "Client Logo 6" },
  { src: "/total.png", alt: "Client Logo 7" },
  { src: "/Petrobras.jpeg", alt: "Client Logo 8" },
  { src: "/Qatargas.png", alt: "Client Logo 9" },
  { src: "/dbp.png", alt: "Client Logo 10" },
  { src: "/Kuwait.png", alt: "Client Logo 11" },
  { src: "/Home.jpeg", alt: "Client Logo 12" },
  { src: "/Polymers.jpeg", alt: "Client Logo 13" },
  { src: "/Profile.jpeg", alt: "Client Logo 14" },
  { src: "/Petrofac.jpeg", alt: "Client Logo 15" },
  { src: "/Oman.png", alt: "Client Logo 16" },
]

const CompanyClients = () => {
  const [clientsToShow, setClientsToShow] = useState(4)
  const controls = useAnimationControls()
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [logoWidth, setLogoWidth] = useState(0)

  // Create a duplicated array for infinite scrolling effect
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  // Responsive slider logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setClientsToShow(2)
      } else if (window.innerWidth < 1024) {
        setClientsToShow(3)
      } else {
        setClientsToShow(4)
      }

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        // Calculate approximate logo width based on container and gap
        const logoWidth = containerRef.current.offsetWidth / clientsToShow
        setLogoWidth(logoWidth)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [clientsToShow])

  // Set up infinite scroll animation
  useEffect(() => {
    if (logoWidth === 0) return

    const totalWidth = logoWidth * clientLogos.length

    const startAnimation = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: 20, // Adjust speed here - higher number = slower
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    }

    startAnimation()
  }, [controls, logoWidth, clientLogos.length])

  return (
    <AnimatedSection>
      <section className="container mx-auto px-8 py-12 my-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
            SOME OF OUR CLIENTS
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full overflow-hidden">
          <motion.div className="flex" animate={controls} initial={{ x: 0 }}>
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / clientsToShow}%` }}>
                <div className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors rounded-lg h-28">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={150}
                      height={150}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  )
}

export default CompanyClients
