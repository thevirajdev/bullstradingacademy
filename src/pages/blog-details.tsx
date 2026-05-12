import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark } from 'lucide-react'

const BLOG_CONTENT = {
  title: "Mastering Price Action in Volatile Markets",
  category: "Technical Analysis",
  date: "May 10, 2024",
  author: "Mr. Rajat",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1611972820507-628d022b3b05?w=1200&q=80",
  content: `
    <p class="text-xl text-gray-600 leading-relaxed font-geist mb-8">
      Volatility is the lifeblood of trading. Without movement, there is no opportunity. However, for most retail traders, 
      high volatility is often synonymous with high risk and blown accounts. In this guide, we break down how to master 
      naked price action when the markets get turbulent.
    </p>

    <h2 class="text-3xl font-bold font-disket uppercase text-black mt-12 mb-6">1. The Myth of Indicators in Volatility</h2>
    <p class="text-gray-600 leading-relaxed font-geist mb-6">
      Standard indicators like RSI or MACD often lag significantly during high-volatility periods. When a market is trending 
      strongly or crashing, these indicators will stay "overbought" or "oversold" for days, leading traders into false reversals. 
      The only thing that moves in real-time is <strong>Price Action</strong>.
    </p>

    <blockquote class="border-l-4 border-black pl-8 py-4 my-10 italic text-2xl font-geist text-black">
      "Price is the only truth in the market. Everything else is just a derivative of it."
    </blockquote>

    <h2 class="text-3xl font-bold font-disket uppercase text-black mt-12 mb-6">2. Identifying Institutional Order Blocks</h2>
    <p class="text-gray-600 leading-relaxed font-geist mb-6">
      During volatile periods, "Big Money" leaves footprints. These footprints are what we call Order Blocks. 
      An Order Block is a specific candle where institutional players have placed massive buy or sell orders. 
      Learning to identify these zones allows you to enter trades with high precision and minimal drawdown.
    </p>

    <div class="my-12 p-8 bg-black rounded-[32px] text-white">
      <h4 class="font-disket font-bold uppercase text-sm mb-4">Pro Tip:</h4>
      <p class="font-geist text-gray-400">
        Always look for a "Market Structure Shift" (MSS) before entering a trade at an order block. 
        Don't just catch a falling knife; wait for the market to prove its new direction.
      </p>
    </div>

    <h2 class="text-3xl font-bold font-disket uppercase text-black mt-12 mb-6">3. Psychology Over Strategy</h2>
    <p class="text-gray-600 leading-relaxed font-geist mb-6">
      You can have the best strategy in the world, but if you cannot control your emotions during a fast-moving market, 
      you will lose. High volatility triggers our 'fight or flight' response. Professional traders counteract this 
      by having a strictly defined plan and never risking more than 1% of their capital per trade.
    </p>
  `
}

export function BlogDetails() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-transparent pb-32">
      {/* Top Nav */}
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-geist font-medium group">
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Share2 className="size-5 text-gray-500" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Bookmark className="size-5 text-gray-500" /></button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Header */}
        <header className="space-y-8">
          <div className="space-y-4">
            <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold font-disket uppercase tracking-widest">
              {BLOG_CONTENT.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-disket tracking-tighter uppercase text-black leading-tight">
              {BLOG_CONTENT.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-bold text-black font-disket uppercase">{BLOG_CONTENT.author}</p>
                <p className="text-xs text-gray-400 font-geist">Lead Mentor</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-geist text-sm">
              <Calendar className="size-4" />
              {BLOG_CONTENT.date}
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-geist text-sm">
              <Clock className="size-4" />
              {BLOG_CONTENT.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
          <img src={BLOG_CONTENT.image} alt="Featured" className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: BLOG_CONTENT.content }}
        />

        {/* Footer / CTA */}
        <footer className="pt-16 border-t border-gray-100">
          <div className="p-12 bg-gray-50 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-disket uppercase text-black">Master your trading</h3>
              <p className="text-gray-500 font-geist max-w-md">Join our elite community and learn institutional strategies directly from the experts.</p>
            </div>
            <Link to="/#pricing" className="px-10 py-5 bg-black text-white rounded-full font-disket font-bold text-xs tracking-widest hover:scale-105 transition-all">
              EXPLORE COURSES
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
