"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AcademyContactForm() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-12 md:py-16 bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight font-disket uppercase leading-tight mb-4">
          Love to hear from you, <br />
          Get in touch <span className="inline-block animate-bounce-slow">👋</span>
        </h2>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
      >
        {/* Name Field */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-disket">Your name</label>
          <input
            type="text"
            placeholder="Mr. Rajat"
            className="w-full h-14 px-6 bg-gray-50/50 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-geist text-gray-900"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-disket">Your email</label>
          <input
            type="email"
            placeholder="itsexample@gmail.com"
            className="w-full h-14 px-6 bg-gray-50/50 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-geist text-gray-900"
          />
        </div>

        {/* Interest Dropdown */}
        <div className="space-y-3 relative group">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-disket">What you are interested</label>
          <div className="relative">
            <select className="w-full h-14 px-6 bg-gray-50/50 rounded-xl border border-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-geist text-gray-900 cursor-pointer">
              <option>BTC Pro Community</option>
              <option>Advanced Mentorship</option>
              <option>Live Trading Signals</option>
              <option>Partnership Inquiry</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Experience Dropdown */}
        <div className="space-y-3 relative group">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-disket">Trading Experience</label>
          <div className="relative">
            <select className="w-full h-14 px-6 bg-gray-50/50 rounded-xl border border-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-geist text-gray-900 cursor-pointer">
              <option>Beginner (0-1 Years)</option>
              <option>Intermediate (1-3 Years)</option>
              <option>Advanced (3+ Years)</option>
              <option>Pro Full-Time Trader</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Message Field */}
        <div className="md:col-span-2 space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-disket">Message</label>
          <textarea
            rows={4}
            placeholder="Tell us about your trading goals..."
            className="w-full p-6 bg-gray-50/50 rounded-2xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-geist text-gray-900 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="h-16 px-12 bg-black text-white hover:bg-gray-900 rounded-lg flex items-center justify-center gap-3 transition-all font-disket uppercase text-[10px] tracking-[0.2em] font-bold shadow-xl">
              Just Send <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.form>
    </section>
  );
}
