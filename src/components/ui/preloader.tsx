import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressTimer)
          return 90
        }
        return prev + 1
      })
    }, 15)

    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => {
        setLoading(false)
        // Dispatch custom event ONLY after curtain panels have started opening significantly
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('preloader-finished'))
        }, 1500) // Match curtain movement
      }, 800)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(progressTimer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Lock scroll and hide UI during loading
  useEffect(() => {
    if (loading) {
      document.documentElement.classList.add('is-loading')
      document.body.style.overflow = 'hidden'
    } else {
      // Remove class after curtain AND hero animations complete to ensure it appears last
      const timer = setTimeout(() => {
        document.documentElement.classList.remove('is-loading')
        document.body.style.overflow = ''
      }, 4500)
      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={{ pointerEvents: "none" }}
        >
          {/* Background Panels (Curtain Effect) */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.4, ease: [0.87, 0, 0.13, 1], delay: 0.6 }}
            className="absolute inset-y-0 left-0 w-1/2 bg-white z-10 border-r border-gray-100 shadow-[20px_0_40px_rgba(0,0,0,0.05)]"
          />
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.4, ease: [0.87, 0, 0.13, 1], delay: 0.6 }}
            className="absolute inset-y-0 right-0 w-1/2 bg-white z-10 border-l border-gray-100 shadow-[-20px_0_40px_rgba(0,0,0,0.05)]"
          />

          {/* Logo & Progress (Centered) */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="relative mb-16">
              {/* Paper Cut Split Logo Effect */}
              <div className="relative flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ 
                    x: -120, 
                    opacity: 0, 
                    transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] }
                  }}
                  className="relative"
                >
                  <img 
                    src="/assets/logo.webp" 
                    alt="Logo" 
                    className="h-32 md:h-56 w-auto" 
                    style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ 
                    x: 120, 
                    opacity: 0, 
                    transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] }
                  }}
                  className="absolute inset-0"
                >
                  <img 
                    src="/assets/logo.webp" 
                    alt="Logo" 
                    className="h-32 md:h-56 w-auto"
                    style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Loading Line */}
            <div className="w-56 h-[3px] bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-black"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 font-disket text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase"
            >
              Loading Assets {progress}%
            </motion.p>
          </div>

          {/* Blurred Background Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-0" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
