import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const POSTS = [
  {
    id: 1,
    title: "Mastering Price Action in Volatile Markets",
    date: "May 10, 2024",
    category: "Technical Analysis",
    excerpt: "Learn how to filter out the noise and find high-probability setups during market turbulence..."
  },
  {
    id: 2,
    title: "The Psychology of a Winning Trader",
    date: "May 08, 2024",
    category: "Mindset",
    excerpt: "Why 90% of trading is mental, and how you can train your brain to follow your plan..."
  },
  {
    id: 3,
    title: "Prop Firm Secrets: How to Pass Your First Challenge",
    date: "May 05, 2024",
    category: "Mentorship",
    excerpt: "A step-by-step guide to passing prop firm evaluations and getting funded with institutional capital..."
  },
  {
    id: 4,
    title: "Understanding Order Blocks and Liquidity",
    date: "May 02, 2024",
    category: "SMC Concepts",
    excerpt: "Dive deep into institutional order flow and learn how big players move the markets..."
  },
  {
    id: 5,
    title: "Risk Management: The ONLY Holy Grail",
    date: "April 28, 2024",
    category: "Fundamentals",
    excerpt: "Without risk management, you are just gambling. Discover our 1% rule and position sizing..."
  },
  {
    id: 6,
    title: "The Future of Crypto Assets in 2025",
    date: "April 25, 2024",
    category: "Crypto",
    excerpt: "An analysis of macro trends and where we see the next big move in the digital asset space..."
  },
  {
    id: 7,
    title: "Day Trading vs Swing Trading: Which fits you?",
    date: "April 20, 2024",
    category: "Strategy",
    excerpt: "Choosing the right trading style depends on your personality and lifestyle. Let's break it down..."
  },
  {
    id: 8,
    title: "How to Build a Professional Trading Plan",
    date: "April 15, 2024",
    category: "Mentorship",
    excerpt: "A look inside the trading journals of our top students and how they structure their day..."
  },
  {
    id: 9,
    title: "Indicators are LIES: Why you should use Naked Charts",
    date: "April 10, 2024",
    category: "Technical Analysis",
    excerpt: "Why RSI, MACD, and Bollinger Bands are lagging, and why price is the only truth..."
  }
]

export function Blog() {
  return (
    <div className="min-h-screen px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto space-y-12 md:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-8xl font-bold font-disket tracking-tighter uppercase text-black leading-tight">
          The Trading Desk
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-geist">Insights, strategies, and market wisdom from our experts.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post, i) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer flex flex-col justify-between p-8 bg-white/40 backdrop-blur-md border border-gray-100 rounded-[32px] hover:border-black hover:bg-white transition-all duration-300 w-full"
            >
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 font-disket px-3 py-1 bg-blue-50 rounded-full inline-block">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold font-geist text-black leading-snug group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-geist leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-8 mt-auto flex items-center justify-between border-t border-gray-50">
                <span className="text-sm text-gray-400 font-geist">{post.date}</span>
                <span className="font-disket font-bold text-xs uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform">Read More →</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
