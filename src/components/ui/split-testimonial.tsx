"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Trading isn't about predicting the market perfectly. It's about having an edge, executing flawlessly, and managing risk.",
    name: "Mr. Rajat",
    role: "Lead Mentor & Founder",
    company: "Bulls Trading Academy",
    image: "/assets/mentor.png",
  },
  {
    id: 2,
    quote: "I've engineered this academy to teach you the exact price action setups that institutions use to trap retail traders.",
    name: "Mr. Rajat",
    role: "Lead Mentor & Founder",
    company: "Bulls Trading Academy",
    image: "/assets/mentor.png",
  },
  {
    id: 3,
    quote: "Master your emotions before you master the charts. Psychology separates the top 1% from the rest.",
    name: "Mr. Rajat",
    role: "Lead Mentor & Founder",
    company: "Bulls Trading Academy",
    image: "/assets/mentor.png",
  },
]

export function TestimonialsSplit() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const active = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto px-6 py-12"
    >
      <div
        className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center cursor-pointer group"
        onClick={nextTestimonial}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left: Quote Content */}
        <div className="space-y-8">
          {/* Company Tag */}
          <AnimatePresence mode="wait">
              <motion.div
                key={active.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-blue-600 font-bold font-disket"
              >
                <span className="w-8 h-px bg-blue-400/50" />
                {active.company}
              </motion.div>
          </AnimatePresence>

          {/* Quote */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl md:text-4xl font-normal leading-[1.3] tracking-tight text-gray-900 font-geist italic"
                >
                  "{active.quote}"
                </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author Info */}
          <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-4 font-disket uppercase"
              >
                <div className="w-10 h-px bg-gray-300" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{active.name}</p>
                  <p className="text-[10px] text-gray-500 font-geist normal-case font-medium">{active.role}</p>
                </div>
              </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Visual Element */}
        <div className="relative w-full max-w-[200px] h-64 mx-auto md:w-48 md:mx-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative cursor-crosshair transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2 origin-bottom group/image hover:shadow-xl">
                <img
                  src={active.image || "/placeholder.svg"}
                  alt={active.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover/image:grayscale-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Click indicator */}
          <motion.div
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500 whitespace-nowrap"
          >
            <span>Next lesson</span>
            <ArrowUpRight className="w-3 h-3" />
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="absolute -bottom-16 left-0 md:left-0 flex items-center gap-3 w-full justify-center md:justify-start">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(index)
              }}
              className="relative p-1 group/dot"
            >
              <span
                className={`
                  block w-2 h-2 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "bg-gray-900 scale-100"
                      : "bg-gray-300 scale-75 hover:bg-gray-400 hover:scale-100"
                  }
                `}
              />
              {index === activeIndex && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute inset-0 border border-gray-400 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
