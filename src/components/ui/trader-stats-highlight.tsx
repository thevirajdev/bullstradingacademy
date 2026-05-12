"use client"

export default function TraderStatsHighlight() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
        <div className="flex justify-center items-center p-6 sm:p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 lg:gap-6 xl:gap-8 w-full text-center sm:text-left py-4">
            <div className="space-y-2 sm:space-y-3 font-disket uppercase">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">+1200</div>
              <p className="text-sm sm:text-base text-gray-600 font-medium tracking-wide font-geist normal-case">Active Traders</p>
            </div>
            <div className="space-y-2 sm:space-y-3 font-disket uppercase">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">22M+</div>
              <p className="text-sm sm:text-base text-gray-600 font-medium tracking-wide font-geist normal-case">Trading Volume</p>
            </div>
            <div className="space-y-2 sm:space-y-3 font-disket uppercase">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">50+</div>
              <p className="text-sm sm:text-base text-gray-600 font-medium tracking-wide font-geist normal-case">Pro Strategies</p>
            </div>
          </div>
        </div>
        <div className="relative p-8 sm:p-10 bg-white/40 backdrop-blur-md rounded-3xl border border-gray-200 shadow-sm">
          <blockquote className="border-l-4 border-blue-600 pl-6 sm:pl-8 lg:pl-10 text-gray-700">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium italic font-geist">"Building a trading career is like unlocking a new level of financial freedom. Our proven strategies provide the perfect fusion of simplicity and high probability setups."</p>
            <div className="mt-6 sm:mt-8 space-y-1 font-disket uppercase">
              <cite className="block font-bold text-base sm:text-lg text-gray-900">Mr. Rajat, Founder</cite>
              <div className="text-xs sm:text-sm text-blue-600 font-bold tracking-wider font-geist normal-case">Bulls Trading Academy</div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
