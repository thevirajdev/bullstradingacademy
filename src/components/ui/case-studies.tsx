import { useEffect, useState } from "react";
import { Monitor, LayoutDashboard, Users } from "lucide-react";
import CountUp from "react-countup";

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim();
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  );
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 };
  }
  const [, prefix, num, suffix] = m;
  const normalized = num.replace(/,/g, "");
  const end = parseFloat(normalized);
  const decimals = (normalized.split(".")[1]?.length ?? 0);
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  };
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
}: {
  value: string;
  label: string;
  sub?: string;
  duration?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { prefix, end, suffix, decimals } = parseMetricValue(value);

  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p
        className="text-2xl font-bold text-gray-900 sm:text-4xl font-disket uppercase"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <CountUp
            end={end}
            decimals={decimals}
            duration={duration}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        )}
        {suffix}
      </p>
      <p className="font-bold text-gray-900 text-left font-disket uppercase text-xs tracking-wider">
        {label}
      </p>
      {sub ? (
        <p className="text-gray-600 text-left font-geist text-xs">{sub}</p>
      ) : null}
    </div>
  );
}

export default function Casestudies() {
  const caseStudies = [
    {
      id: 1,
      quote:
        "With Bulls Trading Academy, my trading journey completely transformed. The strategies are practical, clear, and I achieved profitability 40% faster.",
      name: "Aarav Mehta",
      role: "Full-Time Trader",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      icon: Monitor,
      metrics: [
        { value: "40%", label: "Faster Profitability", sub: "Time to consistent profit" },
        { value: "95%", label: "Confidence Boost", sub: "Based on trade execution" },
      ],
    },
    {
      id: 2,
      quote:
        "Bulls Trading Academy gave me a systematic approach to the markets. I reduced time spent on guessing trends and improved clarity across all my investments.",
      name: "Sophia Patel",
      role: "Swing Trader",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      icon: LayoutDashboard,
      metrics: [
        { value: "3.5x", label: "Portfolio Growth", sub: "Over 12 months" },
        { value: "70%", label: "Reduced Losses", sub: "In daily trading" },
      ],
    },
    {
      id: 3,
      quote:
        "The live mentorship and active community at Bulls Trading Academy changed the way I trade. Everything is more transparent, and learning is seamless.",
      name: "David Liu",
      role: "Options Trader",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      icon: Users,
      metrics: [
        { value: "2x", label: "Faster Learning", sub: "For technical analysis" },
        { value: "88%", label: "Win Rate Boost", sub: "Options strategies" },
      ],
    },
  ];

  return (
    <section
      className="py-12 bg-transparent"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2
            id="case-studies-heading"
            className="text-4xl font-bold md:text-5xl text-gray-900 font-disket uppercase"
          >
            Real results with Bulls Trading Academy
          </h2>
          <p className="text-gray-600 font-geist">
            From basics to advanced technical analysis—we power traders with knowledge, discipline, and consistent strategies.
          </p>
        </div>

        {/* Cases */}
        <div className="mt-20 flex flex-col gap-20">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={study.id}
                className="grid gap-12 lg:grid-cols-3 xl:gap-24 items-center border-b border-gray-200 pb-12"
              >
                {/* Left: Image + Quote */}
                <div
                  className={[
                    "flex flex-col sm:flex-row gap-10 lg:col-span-2 lg:border-r lg:pr-12 xl:pr-16 text-left",
                    reversed
                      ? "lg:order-2 lg:border-r-0 lg:border-l border-gray-200 lg:pl-12 xl:pl-16 lg:pr-0"
                      : "border-gray-200",
                  ].join(" ")}
                >
                  <img
                    src={study.image}
                    alt={`${study.name} portrait`}
                    className="aspect-[29/35] h-auto w-full max-w-60 rounded-2xl object-cover ring-1 ring-gray-200 hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <figure className="flex flex-col justify-between gap-8 text-left">
                    <blockquote className="text-lg sm:text-xl text-gray-900 leading-relaxed text-left">
                      <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 leading-relaxed text-left font-disket uppercase">
                        {idx === 0 ? "Transformative Trading Strategies" : idx === 1 ? "Systematic Approach" : "Live Mentorship"}
                        <span className="block text-gray-500 text-sm sm:text-base lg:text-lg mt-2 font-geist normal-case font-medium italic">
                          "{study.quote}"
                        </span>
                      </h3>
                    </blockquote>
                    <figcaption className="flex items-center gap-6 mt-4 text-left font-disket uppercase">
                      <div className="flex flex-col gap-1">
                        <span className="text-md font-bold text-gray-900">
                          {study.name}
                        </span>
                        <span className="text-[10px] text-gray-600 font-geist normal-case font-medium">
                          {study.role}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Right: Metrics */}
                <div
                  className={[
                    "grid grid-cols-1 gap-10 self-center text-left",
                    reversed ? "lg:order-1" : "",
                  ].join(" ")}
                >
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      label={metric.label}
                      sub={metric.sub}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
