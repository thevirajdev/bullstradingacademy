"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FlowButton } from './flow-button';
import { Link } from 'react-router-dom';

const SQRT_5000 = Math.sqrt(5000);

const events = [
  {
    tempId: 0,
    title: "Live Trading Masterclass",
    dateInfo: "June 15, 2026 • Mumbai",
    imgSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80"
  },
  {
    tempId: 1,
    title: "Advanced Options Strategies Workshop",
    dateInfo: "July 10, 2026 • Delhi",
    imgSrc: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&q=80"
  },
  {
    tempId: 2,
    title: "Forex & Commodities Bootcamp",
    dateInfo: "August 05, 2026 • Bangalore",
    imgSrc: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&q=80"
  },
  {
    tempId: 3,
    title: "Algorithmic Trading Summit",
    dateInfo: "September 20, 2026 • Hyderabad",
    imgSrc: "https://images.unsplash.com/photo-1611972820507-628d022b3b05?w=600&q=80"
  },
  {
    tempId: 4,
    title: "Risk Management Deep Dive",
    dateInfo: "October 12, 2026 • Pune",
    imgSrc: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80"
  }
];

interface EventCardProps {
  position: number;
  eventData: typeof events[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  position, 
  eventData, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out flex flex-col justify-between overflow-hidden",
        isCenter 
          ? "bg-white text-gray-900 border-gray-200" 
          : "bg-white/40 backdrop-blur-md text-gray-900 border-gray-200/50 hover:border-gray-400/50"
      )}
      style={{
        zIndex: isCenter ? 50 : 40 - Math.abs(position),
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0,0,0,0.05)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      
      <div className="flex-1 flex flex-col mt-2">
        <img
          src={eventData.imgSrc}
          alt={eventData.title}
          className="mb-4 h-32 w-full bg-gray-100 object-cover object-center rounded-lg shadow-sm"
        />
        <h3 className="text-lg sm:text-xl font-bold leading-tight text-gray-900 mb-1 line-clamp-2 font-disket uppercase">
          {eventData.title}
        </h3>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest font-geist">
          {eventData.dateInfo}
        </p>
      </div>

      <div className="mt-4 pt-4 flex items-center justify-start border-t border-gray-100">
         <FlowButton text="View Details" className="py-2 px-5 text-xs h-10" />
      </div>
    </div>
  );
};

export const StaggerEvents: React.FC = () => {
  const [cardSize, setCardSize] = useState(400);
  const [eventsList, setEventsList] = useState(events);

  const handleMove = (steps: number) => {
    const newList = [...eventsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setEventsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 400 : 330);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden flex flex-col items-center w-full">
      <div className="mb-8 text-center px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 font-disket uppercase">Upcoming Live Events</h2>
        <p className="mt-4 max-w-[600px] text-gray-600 md:text-xl/relaxed mx-auto font-geist">Join our masterclasses and workshops across the country.</p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: 600 }}
      >
        {eventsList.map((event, index) => {
          const position = index - Math.floor(eventsList.length / 2);
          return (
            <EventCard
              key={event.tempId}
              eventData={event}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        
        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors bg-white border border-gray-200 text-gray-900 shadow-sm hover:bg-gray-100"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors bg-white border border-gray-200 text-gray-900 shadow-sm hover:bg-gray-100"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* View All Events Button */}
      <div className="mt-4 relative z-20">
        <Link to="/events">
          <FlowButton text="View All Events" />
        </Link>
      </div>
    </section>
  );
};
