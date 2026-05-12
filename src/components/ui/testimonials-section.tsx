"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function TestimonialsSection() {
  return (
    <AnimatedTestimonials
      testimonials={[
        {
          id: 1,
          name: "Vikram Sharma",
          role: "Day Trader",
          company: "Independent",
          content:
            "The price action strategies I learned here completely changed my perspective on the markets. I'm finally trading with confidence and managing my risk properly. Worth every penny!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        },
        {
          id: 2,
          name: "Priya Patel",
          role: "Swing Trader",
          company: "Part-time",
          content:
            "I've taken many trading courses, but this one stands out for its practical approach and attention to detail. The live mentorship is excellent, and the community is super helpful.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        },
        {
          id: 3,
          name: "Rahul Gupta",
          role: "Options Trader",
          company: "Full-time",
          content:
            "Our trading group was able to improve our win rate significantly thanks to this academy. The risk management principles worked right out of the box. Highly recommended!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
        },
      ]}
      trustedCompanies={["Zerodha", "Upstox", "Groww", "AngelOne", "Fyers"]}
    />
  );
}
