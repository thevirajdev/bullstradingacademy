"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NavHashLink } from "react-router-hash-link"

const NAV_ITEMS = [
  { name: "Home", path: "/#" },
  { name: "Courses", path: "/#pricing" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" }
]

const Navbar1 = ({ show }: { show: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  // Shrinking logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const initialWidth = isMobile ? "92%" : "100%"
  const shrunkWidth = isMobile ? "85%" : "75%"
  
  const width = useTransform(scrollY, [0, 100], [initialWidth, shrunkWidth])
  const borderRadius = useTransform(scrollY, [0, 100], [isMobile ? "40px" : "0px", "50px"])
  const top = useTransform(scrollY, [0, 100], [isMobile ? "10px" : "0px", "20px"])
  const height = useTransform(scrollY, [0, 100], [isMobile ? "50px" : "65px", isMobile ? "45px" : "55px"])
  
  // Updated transparency: 60% (0.6) at start to 40% (0.4) when shrunk
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.8)"]
  )

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-[1000] pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
            width, 
            borderRadius, 
            top, 
            height,
            backgroundColor
        }}
        className="flex items-center justify-between px-6 md:px-10 backdrop-blur-md shadow-xl relative pointer-events-auto border-b border-gray-200"
      >
        {/* LOGO */}
        <div className="flex items-center flex-shrink-0">
          <NavHashLink smooth to="/#" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img src="/assets/logo.webp" alt="Logo" className="h-9 md:h-10 w-auto" />
            </motion.div>
          </NavHashLink>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <NavHashLink
                smooth
                to={item.path}
                className="text-xl text-black hover:text-gray-600 transition-colors font-bebas tracking-widest"
              >
                {item.name}
              </NavHashLink>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block flex-shrink-0">
          <NavHashLink
            smooth
            to="/#pricing"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center px-6 py-1.5 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors font-disket font-bold tracking-wider"
          >
            JOIN NOW
          </NavHashLink>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden flex items-center p-2" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-black" />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[1100] pt-32 px-6 md:hidden pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button className="absolute top-8 right-8 p-2" onClick={toggleMenu}>
              <X className="h-8 w-8 text-black" />
            </button>
            <div className="flex flex-col space-y-8 items-start ml-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavHashLink 
                    smooth
                    to={item.path} 
                    className="text-5xl text-black font-bebas tracking-tighter" 
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavHashLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="pt-8"
              >
                <NavHashLink
                  smooth
                  to="/#pricing"
                  onClick={toggleMenu}
                  className="px-8 py-3 bg-black text-white rounded-full font-disket text-lg font-bold"
                >
                  JOIN NOW
                </NavHashLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
