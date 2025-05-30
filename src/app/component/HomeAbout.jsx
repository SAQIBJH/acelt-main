"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function HomeAbout() {
  const [clientsCount, setClientsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const achievementsRef = useRef(null)
  const aboutRef = useRef(null)
  const industriesRef = useRef(null)

  // Optimized counter animation with easing
  const animateCount = (target, setCount) => {
    const start = 0
    const end = target
    const duration = 2000 // Reduced to 2 seconds for better UX
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      // Use easeOutExpo for a more natural counting effect
      const progress = frame / totalFrames
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeProgress * end)

      setCount(currentCount)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(end) // Ensure we end exactly at the target
      }
    }, frameDuration)
  }

  useEffect(() => {
    // Intersection Observer for achievements section
    const achievementsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          animateCount(1000, setClientsCount)
          animateCount(96, setProjectsCount)
          achievementsObserver.unobserve(entry.target)
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    )

    if (achievementsRef.current) {
      achievementsObserver.observe(achievementsRef.current)
    }

    return () => {
      if (achievementsRef.current) {
        achievementsObserver.unobserve(achievementsRef.current)
      }
    }
  }, [])

  const industries = [
    "Oil & Gas",
    "Power Generation",
    "Petrochemical & Refineries",
    "Marine & Shipbuilding",
    "Construction & Infrastructure",
    "Water Treatment",
    "Fertilizers",
    "Renewable Energy",
  ]

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="mt-20">
      {/* About Section with Video Background */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative h-screen max-h-[800px] overflow-hidden"
      >
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/clip1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl w-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="backdrop-blur-sm bg-gray-900/40 rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-800"
            >
              <div className="flex flex-col items-start">
                <h2 className="inline-block text-sm font-medium tracking-wider text-red-500 uppercase mb-2">
                  Our Company
                </h2>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">About Us</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-6"></div>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                At ACE Energy, we aim to be your partner at strategic crossroads. We exceed customer expectations
                through exceptional service and a commitment to building enduring relationships.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Our global project team of experienced professionals provides end-to-end support for material sourcing,
                project management, and execution. With expertise across various industries, we ensure your success.
              </p>

              <div className="flex items-center">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition-colors"
                >
                  Learn more about our approach
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section
        ref={industriesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-red-700 to-red-600 py-4 mb-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-3">
            <h2 className="text-sm font-medium tracking-wider text-red-200 uppercase mb-2">Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white ">Industries We Serve</h3>
            <div className="w-20 h-1 bg-white/30 mx-auto"></div>
          </div>

          {/* Industries Slider */}
          <div className="relative overflow-hidden py-6">
            <div className="flex gap-6 animate-scroll">
              {industries.concat(industries).map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white font-medium shadow-lg"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gray-900 py-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 border border-red-800/30 backdrop-blur-sm shadow-xl">
                <div className="text-6xl font-bold text-white mb-2">
                  {clientsCount}
                  <span className="text-red-600">+</span>
                </div>
                <p className="text-xl text-gray-300 font-medium tracking-wide">Satisfied Clients</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 border border-red-800/30 backdrop-blur-sm shadow-xl">
                <div className="text-6xl font-bold text-white mb-2">
                  {projectsCount}
                  <span className="text-red-500">+</span>
                </div>
                <p className="text-xl text-gray-300 font-medium tracking-wide">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

