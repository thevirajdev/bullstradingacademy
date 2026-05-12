import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SectionWithMockup from '@/components/ui/section-with-mockup'
import FeaturesSection from '@/components/ui/features-section'
import { Features } from '@/components/ui/features-5'
import Casestudies from '@/components/ui/case-studies'
import TestimonialsSection from '@/components/ui/testimonials-section'
import { TestimonialsSplit } from '@/components/ui/split-testimonial'
import { StaggerEvents } from '@/components/ui/stagger-events'
import TraderBentoGrid from '@/components/ui/trader-bento-grid'
import TraderStatsHighlight from '@/components/ui/trader-stats-highlight'
import FeaturedSectionStats from '@/components/ui/featured-section-stats'
import { PricingSection } from "@/components/ui/pricing"
import JoinMovementCTA from "@/components/ui/join-movement-cta"
import { RatingInteraction } from "@/components/ui/emoji-rating"
import AcademyContactForm from "@/components/ui/academy-contact-form"
import { SocialPresence } from "@/components/ui/social-presence"

export function Home() {
  const bgTextRef = useRef(null)
  const menRef = useRef(null)
  const wipeContainerRef = useRef(null)
  const joinContainerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    })

    // Step 1: BG TEXT Reveal
    tl.to(bgTextRef.current, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      startAt: { opacity: 0, scale: 1.1, filter: "blur(10px)" }
    })

    // Step 2: Men Reveal
    tl.to(menRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      startAt: { opacity: 0, y: 150 },
      delay: -1.2
    })

    // Step 3: Text Wipe
    tl.to(wipeContainerRef.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 1,
      ease: "power2.inOut",
      delay: -0.4
    })

    // Step 4: Join Button (Coin) - Appears last
    tl.to(joinContainerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.7)",
      startAt: { opacity: 0, scale: 0.1 },
      delay: 0.2 // Explicit delay to ensure it's last
    })

  }, [])

  return (
    <>
      <div className="fixed-overlay">
        <img src="/assets/bg.png" alt="" className="w-full h-full object-cover opacity-100" />
      </div>
      <section className="hero-container !mt-[-64px]">
        {/* Layer 1: Background Text */}
        <div className="layer bg-text" ref={bgTextRef} style={{ opacity: 0 }}>
          <img src="/assets/bgtext.png" alt="" draggable="false" />
        </div>

        {/* Layer 2: Men Silhouette */}
        <div className="layer men" ref={menRef} style={{ opacity: 0 }}>
          <img src="/assets/men.png" alt="" draggable="false" />
        </div>

        {/* Layer 3: Info Content */}
        <div className="info-content">
          <div className="single-wipe-container" ref={wipeContainerRef}>
            <h1 className="welcome-title font-disket">
              WELCOME TO THE BULLS<br />
              TRADING ACADEMY!
            </h1>
            <div className="desc font-geist">
              <p>
                Explore our comprehensive trading courses designed for all levels.
                Join our expert-led programs and gain deep insights into the
                future of digital assets.
              </p>
            </div>
          </div>
        </div>

        {/* Layer 4: Join Coin */}
        <div className="join-container" ref={joinContainerRef} style={{ opacity: 0 }}>
          <a href="#contact" className="join-coin">
            <img src="/assets/joinbutton.png" alt="JOIN" />
          </a>
        </div>
      </section>

      {/* Section – Trading Education */}
      <SectionWithMockup
        title={
          <>
            Master the Markets,<br />
            from Sitamarhi to the World.
          </>
        }
        description={
          <>
            Bulls Trading Academy, based in Sitamarhi, Bihar, offers
            expert-led courses in stock market trading, technical analysis,
            and wealth creation strategies — designed for beginners
            through to seasoned investors. Start your journey to financial freedom today.
          </>
        }
        primaryImageSrc="/assets/featured.png"
        secondaryImageSrc="/assets/featured2.png"
      />

      <Features />
      <FeaturesSection />
      <StaggerEvents />
      <TestimonialsSplit />
      <Casestudies />
      <TraderBentoGrid />
      <TraderStatsHighlight />
      <FeaturedSectionStats />
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection
          plans={[
            {
              name: "BTC Community",
              price: "0",
              yearlyPrice: "0",
              period: "month",
              features: [
                "Basic Price Action",
                "Community Discord Access",
                "Weekly Market Overview",
                "Introductory Webinars",
                "Free Trading Resources"
              ],
              description: "Kickstart your trading journey with the foundational knowledge and community support.",
              buttonText: "Join for Free",
              href: "#",
            },
            {
              name: "BTC Pro",
              price: "499",
              yearlyPrice: "4999",
              period: "month",
              features: [
                "Advanced BTC Pro Strategies",
                "Live Trading Signals",
                "Private Discord Channels",
                "Bi-Weekly Group Mentorship",
                "Portfolio Risk Analysis",
                "Early Access to Tools"
              ],
              description: "The complete package for dedicated traders seeking consistent edges in the market.",
              buttonText: "Upgrade to Pro",
              href: "#",
              isPopular: true,
            },
            {
              name: "Inner Circle",
              price: "1499",
              yearlyPrice: "14999",
              period: "month",
              features: [
                "1-on-1 Mentorship Sessions",
                "Trading Floor Access",
                "Prop Firm Funding Guidance",
                "Direct Access to Mr. Rajat",
                "Lifetime Strategy Updates",
                "Exclusive Offline Meetups"
              ],
              description: "Exclusive access for traders aiming for institutional-level mastery and scale.",
              buttonText: "Get Elite Access",
              href: "#",
            },
          ]}
          title="Master the Market with Bulls Trading Academy"
          description={"Choose the level that fits your trading goals.\nJoin the most elite trading community in India today."}
        />
      </div>
      <div id="contact">
        <AcademyContactForm />
      </div>
      <JoinMovementCTA />

      <div className="max-w-7xl mx-auto px-6">
        <SocialPresence />
      </div>

      <div className="flex flex-col items-center gap-8 pb-20 pt-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 font-disket">
          How was your experience?
        </p>
        <RatingInteraction />
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </>
  )
}
