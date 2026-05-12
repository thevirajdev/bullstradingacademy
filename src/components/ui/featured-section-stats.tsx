"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeaturedSectionStats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 85 },
    { name: "May", value: 70 },
    { name: "Jun", value: 140 },
    { name: "Jul", value: 160 },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto text-left py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-12 tracking-tight leading-[1.1] font-disket uppercase">
          Empowering Traders with <span className="text-blue-600">Real-Time Insights.</span>{" "}
          <span className="block mt-4 text-gray-500 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed font-geist normal-case">
            Our advanced trading analytics helps you track performance, manage
            your portfolio, and make data-driven decisions in the live market.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 font-disket">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">+10,000</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider font-geist">Students Trained</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">95%</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider font-geist">Success Rate</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">500+</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider font-geist">Live Sessions</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">0.1s</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider font-geist">Analysis Speed</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-64 sm:h-80 mt-16 bg-white/40 backdrop-blur-sm rounded-3xl p-4 border border-gray-200/50 shadow-sm overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorBlue)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
