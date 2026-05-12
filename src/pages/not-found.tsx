import { Link } from 'react-router-dom'
import { Glitchy404 } from '@/components/ui/glitchy-404-1'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-transparent relative overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 z-[-1] opacity-10 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-12 max-w-4xl w-full"
      >
        <div className="flex justify-center w-full">
          <Glitchy404 width={800} height={232} color="#000" />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold font-disket uppercase tracking-tighter text-black">
            System Failure: Page Not Found
          </h1>
          <p className="text-xl text-gray-500 font-geist max-w-2xl mx-auto leading-relaxed">
            The coordinates you've entered lead to a void in the market.
            The asset you're looking for might have been delisted or moved to a private exchange.
          </p>
        </div>

        <motion.div
          className="pt-12"
          whileHover={{ scale: 1.05 }}
          whileActive={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white rounded-full font-disket font-bold text-sm tracking-[0.2em] shadow-2xl shadow-black/20 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-2 transition-transform" />
            RETURN TO Home page
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Glitch Text */}
      <div className="absolute bottom-12 left-12 font-disket text-[10px] text-gray-300 uppercase tracking-widest animate-pulse">
        ERR_CONNECTION_LOST // 0x404
      </div>
      <div className="absolute top-12 right-12 font-disket text-[10px] text-gray-300 uppercase tracking-widest animate-pulse delay-500">
        BULLS_ACADEMY // STABLE_BUILD_v1.0
      </div>
    </div>
  )
}
