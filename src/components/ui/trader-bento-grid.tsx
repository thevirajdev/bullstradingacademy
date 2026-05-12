"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { CardContent } from "@/components/ui/card";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-100 text-blue-700 px-1 py-0.5 rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Rahul Verma",
    designation: "Full-Time Day Trader",
    content: (
      <p>
        <Highlight>Bulls Trading Academy</Highlight> has completely transformed my trading psychology. The advanced strategies are beautifully taught and{" "}
        <Highlight>incredibly easy to apply</Highlight> in live markets.
      </p>
    ),
  },
  {
    id: 1,
    name: "Sneha Patil",
    designation: "Options Trader",
    content: (
      <p>
        The <Highlight>risk management system</Highlight> taught here is both elegant and consistent. From entries to exits, every detail is thoughtfully built with{" "}
        <Highlight>capital protection</Highlight> in mind.
      </p>
    ),
  },
  {
    id: 2,
    name: "David Kim",
    designation: "Swing Trader",
    content: (
      <p>
        After joining <Highlight>Bulls Trading Academy</Highlight>, my portfolio grew 40% faster. The rich community support and{" "}
        <Highlight>live market analysis</Highlight> have made it an essential tool in my journey.
      </p>
    ),
  },
];

const integrations = [
  {
    name: "TradingView",
    desc: "Analyze charts collaboratively in real-time with intuitive tools",
    icon: "📈", 
  },
  {
    name: "Zerodha Kite",
    desc: "Execute your trades seamlessly with lightning speed",
    icon: "🚀", 
  }
];

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: any[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<any[]>(items);

  useEffect(() => {
    const startFlipping = () => {
      interval = setInterval(() => {
        setCards((prevCards: any[]) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
      }, 5000);
    };

    startFlipping();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-64 w-full max-w-md my-4">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-64 w-full rounded-3xl p-6 shadow-xl border border-gray-200 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-gray-700 text-sm sm:text-base leading-relaxed font-geist">
              {card.content}
            </div>
            <div className="mt-4 font-geist">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                {card.name}
              </p>
              <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function TraderBentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-8">
        {/* Left Block */}
        <div className="flex flex-col items-start justify-center border border-gray-200 bg-white/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="relative w-full mb-8 sm:mb-10 mt-6">
            <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white/90 to-transparent z-10 pointer-events-none rounded-b-xl"></div>
            <CardStack items={CARDS} />
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed tracking-tight font-disket uppercase">
            Loved By Our Traders <span className="text-blue-600 font-bold">Bulls Trading Academy</span>{" "}
            <span className="block mt-3 text-gray-600 text-base sm:text-lg lg:text-xl font-geist normal-case font-normal"> Simplify your trading journey with our proven systems that provide actionable setups right out of the box.</span>
          </h3>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-start justify-start border border-gray-200 bg-white/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 leading-relaxed tracking-tight w-full font-disket uppercase">
            Seamless Market Tools <span className="text-blue-600 font-bold">Ecosystem</span>{" "}
            <span className="block mt-3 text-gray-600 text-base sm:text-lg lg:text-xl font-geist normal-case font-normal"> Integrate effortlessly with your favorite brokers and charting tools to eliminate execution delays in seconds.</span>
          </h3>
          <div
            className={cn(
              "group relative mt-auto w-full inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-2xl border-0 bg-white px-4 sm:px-6 lg:px-8 py-2 font-medium text-gray-900 transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "before:absolute before:bottom-[8%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
            )}
          >
            <CardContent className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl z-10 w-full shadow-sm">
              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg sm:text-2xl flex-shrink-0 shadow-sm border border-blue-100/50">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1 font-geist">
                      <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500 line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                  <button className="rounded-full border border-gray-200 p-2 sm:p-2.5 text-xs font-semibold flex-shrink-0 ml-2 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ))}
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  )
}
