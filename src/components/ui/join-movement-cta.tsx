"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function JoinMovementCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth feel
      },
    },
  };

  const shapeVariants = (delay: number) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.8,
      transition: {
        delay,
        duration: 1,
        ease: "backOut",
      },
    },
  });

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 md:py-48 overflow-hidden bg-transparent mt-12">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left - Green/Teal */}
        <motion.div
          variants={shapeVariants(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-10 left-0 w-16 h-32 md:w-32 md:h-64 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full shadow-2xl"
        />
        <motion.div 
          variants={shapeVariants(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-6 w-16 h-32 md:w-32 md:h-64 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-inner" 
        />

        {/* Top Center-Left - Orange/Red */}
        <motion.div
          variants={shapeVariants(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-4 left-32 md:top-10 md:left-48 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-full rounded-br-full shadow-xl"
        />

        {/* Top Right - Purple */}
        <motion.div
          variants={shapeVariants(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-4 md:right-10 w-16 h-32 md:w-32 md:h-64 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full shadow-2xl"
        />

        {/* Bottom Right - Red/Pink */}
        <motion.div
          variants={shapeVariants(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute bottom-10 right-4 md:right-10 w-20 h-40 md:w-40 md:h-80 bg-gradient-to-t from-red-500 to-pink-600 rounded-full shadow-2xl"
        />
        <motion.div 
          variants={shapeVariants(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 right-12 w-20 h-32 md:w-40 md:h-64 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-inner" 
        />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-gray-400 font-disket uppercase mb-10"
        >
          Bulls Trading Academy
        </motion.span>
        
        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold text-black tracking-tight font-disket uppercase leading-[0.9] mb-12"
        >
          Join the<br />
          <motion.span 
            className="text-blue-600 block sm:inline mt-2 sm:mt-0"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            movement
          </motion.span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button className="h-16 px-14 rounded-full bg-black text-white hover:bg-gray-900 font-disket uppercase text-[10px] tracking-[0.25em] font-bold shadow-2xl transition-all hover:scale-110 active:scale-95 group overflow-hidden relative">
            <span className="relative z-10">Become a Trader</span>
            <motion.div 
              className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
          </Button>
          <Button variant="outline" className="h-16 px-14 rounded-full border-gray-200 bg-white/50 backdrop-blur-sm text-black hover:bg-gray-50 font-disket uppercase text-[10px] tracking-[0.25em] font-bold shadow-sm transition-all hover:scale-110 active:scale-95">
            Discover More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
