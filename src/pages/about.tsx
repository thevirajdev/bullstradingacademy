import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="min-h-screen px-4 md:px-6 py-10 md:py-24 max-w-7xl mx-auto space-y-12 md:space-y-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-10 md:space-y-12"
      >
        <div className="space-y-6 md:space-y-8 max-w-4xl text-center md:text-left pt-16 md:pt-0">
          <h1 className="text-4xl md:text-8xl font-bold font-disket tracking-tighter uppercase text-black leading-tight">
            Our Story
          </h1>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-gray-600 font-geist leading-relaxed">
            <p>
              Bulls Trading Academy was born out of frustration with the traditional trading education industry. 
              Too many courses focus on lagging indicators and unrealistic promises, leaving retail traders confused and unprofitable.
            </p>
            <p>
              We set out to change that by teaching pure price action, institutional concepts, and most importantly, 
              the psychological framework required to survive and thrive in the financial markets.
            </p>
            <p>
              Today, we are proud to have helped thousands of students transition from gambling to professional trading.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 md:pt-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-disket uppercase tracking-tight text-black">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-500 font-geist leading-relaxed">
              To democratize institutional trading knowledge and build a community of independent, 
              consistently profitable traders who rely on logic, not luck.
            </p>
            
            <div className="space-y-4 md:space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold font-disket uppercase tracking-tight text-black">Our Core Values</h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Transparency in everything we do",
                  "Focus on risk management first",
                  "Continuous support and mentorship"
                ].map((value, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-lg text-gray-600 font-geist">
                    <div className="size-1.5 md:size-2 bg-black rounded-full" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold font-disket uppercase tracking-tight text-black">The Methodology</h3>
              <p className="text-base md:text-lg text-gray-500 font-geist leading-relaxed">
                We believe in simplicity. Our teaching is built on the pillars of Institutional Order Flow and Naked Price Action. 
                We don't use lagging indicators; we read the tape and follow the footprints of the 'Big Money'.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="font-bold text-black font-disket text-[9px] md:text-[10px] uppercase mb-1">01. SMC</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-geist">Smart Money Concepts and Liquidity hunts.</p>
                </div>
                <div className="p-3 md:p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="font-bold text-black font-disket text-[9px] md:text-[10px] uppercase mb-1">02. Psychology</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-geist">Mastering the mental game of trading.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group mt-8 md:mt-0">
            <div className="absolute -inset-4 bg-black/5 rounded-[40px] blur-2xl group-hover:bg-black/10 transition-all duration-500" />
            <img 
              src="/assets/mentor.png" 
              alt="Mr. Rajat - Mentor" 
              className="relative w-full h-auto rounded-[24px] md:rounded-[32px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold font-disket uppercase text-black">Mr. Rajat</h3>
              <p className="text-sm md:text-gray-500 font-geist font-medium">Lead Mentor & Founder</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-12 md:py-24 text-center space-y-6 md:space-y-8"
      >
        <p className="text-2xl md:text-5xl font-geist italic text-black max-w-5xl mx-auto leading-tight px-4">
          "Trading is not about being right, it's about being profitable. 
          At Bulls Academy, we focus on the psychology and risk management that 99% of traders ignore."
        </p>
        <div className="flex justify-center gap-1.5 md:gap-2">
          {[1, 2, 3].map(i => <div key={i} className="w-8 md:w-12 h-0.5 md:h-1 bg-black" />)}
        </div>
      </motion.div>
    </div>
  )
}
