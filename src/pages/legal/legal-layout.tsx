import { motion } from 'framer-motion'

export function LegalPage({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 md:space-y-12"
      >
        <div className="space-y-3 md:space-y-4 border-b border-gray-100 pb-8 md:pb-12">
            <h1 className="text-3xl md:text-6xl font-bold font-disket uppercase tracking-tighter text-black leading-tight">
              {title}
            </h1>
            <p className="text-[10px] md:text-sm text-gray-400 font-geist uppercase tracking-widest">
              Last Updated: {lastUpdated}
            </p>
        </div>

        <div className="prose prose-sm md:prose-lg max-w-none prose-headings:font-disket prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-black prose-p:text-gray-600 prose-p:font-geist prose-li:text-gray-600 prose-li:font-geist prose-strong:text-black">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
