import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Youtube, Twitter, Linkedin, MessageCircle } from 'lucide-react'

const SOCIALS = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: '#E1306C',
    handle: '@tradewithrajat',
    link: 'https://www.instagram.com/tradewithrajat/',
    embed: (link: string) => (
      <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-8 space-y-6">
        <div className="size-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Instagram className="size-10 text-black" />
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold text-xl text-black">@tradewithrajat</p>
          <p className="text-gray-500">Join 50K+ traders on Instagram for daily insights.</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          FOLLOW
        </a>
      </div>
    )
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    color: '#FF0000',
    handle: '@RajatKumarfx',
    link: 'https://www.youtube.com/@RajatKumarfx',
    embed: (link: string) => (
      <div className="w-full h-full bg-black rounded-2xl flex flex-col items-center justify-center p-8 space-y-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="size-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <Youtube className="size-8 text-white fill-current" />
          </div>
          <div className="text-center">
            <p className="font-bold text-xl text-white">@RajatKumarfx</p>
            <p className="text-gray-300">Master Institutional Trading for free.</p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            SUBSCRIBE
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: MessageCircle,
    color: '#25D366',
    handle: '+91 700 40 31783',
    link: 'https://wa.me/917004031783',
    embed: (link: string) => (
      <div className="w-full h-full bg-[#25D366] rounded-2xl flex flex-col items-center justify-center p-8 space-y-6">
        <MessageCircle className="size-20 text-white fill-current" />
        <div className="text-center text-white">
          <p className="font-bold text-xl">+91 700 40 31783</p>
          <p className="opacity-80">Direct support for course enrollment and queries.</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-[#25D366] rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          CHAT NOW
        </a>
      </div>
    )
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    color: '#0077B5',
    handle: 'Rajat Kumar',
    link: 'https://www.linkedin.com/',
    embed: (link: string) => (
      <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-8 space-y-6 border border-gray-100">
        <Linkedin className="size-20 text-[#0077B5] fill-current" />
        <div className="text-center">
          <p className="font-bold text-xl text-black">Connect with Mr. Rajat</p>
          <p className="text-gray-500">Professional updates and institutional insights.</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#0077B5] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          CONNECT
        </a>
      </div>
    )
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    icon: Twitter,
    color: '#000000',
    handle: '@bullstrading',
    link: 'https://x.com/',
    embed: (link: string) => (
      <div className="w-full h-full bg-black rounded-2xl flex flex-col items-center justify-center p-8 space-y-6">
        <Twitter className="size-20 text-white fill-current" />
        <div className="text-center text-white">
          <p className="font-bold text-xl">X / @bullstrading</p>
          <p className="opacity-60 text-sm">Real-time market updates and trend analysis.</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          FOLLOW
        </a>
      </div>
    )
  }
]

export function SocialPresence() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SOCIALS.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-12 lg:py-24">
      {/* Left Side: Map */}
      <div className="space-y-6">
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-[10px] font-bold text-gray-400 font-disket uppercase tracking-widest">Visit Us</h3>
          <h2 className="text-2xl md:text-4xl font-bold font-disket uppercase text-black leading-tight">Our Headquarters</h2>
        </div>
        <div className="w-full h-[500px] sm:h-auto sm:aspect-[4/3] lg:aspect-square bg-gray-100 rounded-[24px] md:rounded-[40px] overflow-hidden border-2 md:border-4 border-white shadow-2xl relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d913324.5505625503!2d85.4905971!3d26.5948337!3m2!1i1024!2i768!4f13.1!2m1!1sbulls%20trading%20academy!5e0!3m2!1sen!2sin!4v1778606950229!5m2!1sen!2sin"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-100 shadow-xl pointer-events-none">
            <p className="font-bold text-black font-disket uppercase text-[10px] md:text-xs mb-1">Sitamarhi, Bihar</p>
            <p className="text-gray-500 font-geist text-[10px] md:text-sm">Bulls Trading Academy, Bihar 843302</p>
          </div>
        </div>
      </div>

      {/* Right Side: Social Embeds */}
      <div className="space-y-8 flex flex-col justify-center h-full">
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-[10px] font-bold text-gray-400 font-disket uppercase tracking-widest">Social Presence</h3>
          <h2 className="text-2xl md:text-4xl font-bold font-disket uppercase text-black leading-tight">Connect With Us</h2>
        </div>

        <div
          className="relative w-full aspect-square max-w-[400px] md:max-w-[500px] mx-auto lg:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={SOCIALS[activeIndex].id}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden shadow-black/5"
            >
              {SOCIALS[activeIndex].embed(SOCIALS[activeIndex].link)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Icons Bar */}
        <div className="flex items-center justify-center lg:justify-start gap-4">
          {SOCIALS.map((social, index) => (
            <button
              key={social.id}
              onMouseEnter={() => {
                setActiveIndex(index)
                setIsHovered(true)
              }}
              onMouseLeave={() => setIsHovered(false)}
              className={`p-4 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'bg-black text-white scale-125'
                  : 'bg-white text-gray-400 hover:text-black hover:bg-gray-100'
                } border border-gray-100 shadow-lg shadow-black/5`}
            >
              <social.icon className="size-6" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
