import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Info, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowLeft,
  X,
  ChevronRight
} from 'lucide-react'

// Dummy data for event details
const EVENT_DATA = {
  title: "Sitamarhi Offline Trading Workshop",
  description: "A comprehensive 1-day deep dive into Institutional Price Action and Risk Management. Join Mr. Rajat as he breaks down the secrets of the professional trading floor.",
  details: "This workshop is designed for traders who want to transition from basic retail indicators to institutional order flow concepts. We will cover everything from liquidity hunts to market structure shifts.",
  date: "June 15, 2024",
  time: "10:00 AM - 4:00 PM",
  location: "Academy Headquarters, Sitamarhi, Bihar",
  fee: "₹4,999",
  timeline: [
    { time: "10:00 AM", title: "Introduction & Market Psychology", desc: "Understanding why most traders fail." },
    { time: "11:30 AM", title: "Price Action Mastery", desc: "Naked charts and liquidity concepts." },
    { time: "01:00 PM", title: "Lunch Break & Networking", desc: "Connect with fellow traders." },
    { time: "02:00 PM", title: "Institutional Order Flow", desc: "Following the big money." },
    { time: "03:30 PM", title: "Q&A & Certification", desc: "Personalized strategy review." }
  ],
  guidelines: [
    "Participants must bring their own laptops.",
    "Basic knowledge of candlesticks is recommended.",
    "Mobile phones should be on silent during sessions.",
    "Recording of the session is strictly prohibited."
  ],
  support: {
    phone: "+91 98765 43210",
    email: "support@bullstrading.academy",
    whatsapp: "+91 98765 43210"
  }
}

export function EventDetails() {
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('about')

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-transparent pb-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-geist font-medium group">
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-[10px] font-bold font-disket uppercase tracking-widest">
                OFFLINE WORKSHOP
              </span>
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold font-disket uppercase tracking-widest">
                OPEN
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-disket tracking-tighter uppercase text-black leading-none">
              {EVENT_DATA.title}
            </h1>
            <p className="text-xl text-gray-600 font-geist leading-relaxed max-w-2xl">
              {EVENT_DATA.description}
            </p>
          </motion.div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/50 backdrop-blur-md rounded-[32px] border border-gray-100 shadow-sm">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-disket">Date</p>
              <div className="flex items-center gap-2 text-black font-bold font-geist">
                <Calendar className="size-4" /> {EVENT_DATA.date}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-disket">Time</p>
              <div className="flex items-center gap-2 text-black font-bold font-geist">
                <Clock className="size-4" /> {EVENT_DATA.time}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-disket">Location</p>
              <div className="flex items-center gap-2 text-black font-bold font-geist">
                <MapPin className="size-4" /> Sitamarhi
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-disket">Fee</p>
              <div className="flex items-center gap-2 text-blue-600 font-black font-geist text-xl">
                {EVENT_DATA.fee}
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="space-y-8">
            <div className="flex items-center gap-8 border-b border-gray-100">
              {['about', 'timeline', 'guidelines', 'support'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 text-gray-600 font-geist text-lg leading-relaxed"
                  >
                    <h3 className="text-2xl font-bold text-black font-disket uppercase">About Event</h3>
                    <p>{EVENT_DATA.details}</p>
                    <div className="p-8 bg-gray-50 rounded-[32px] space-y-4">
                      <h4 className="font-bold text-black font-disket uppercase text-sm">What you will learn:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Institutional SMC", "Risk Mitigation", "Psychology Hacks", "Live Analysis"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="size-5 text-blue-600" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold text-black font-disket uppercase">Event Schedule</h3>
                    <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                      {EVENT_DATA.timeline.map((item, i) => (
                        <div key={i} className="relative pl-12 group">
                          <div className="absolute left-0 top-1.5 size-6 rounded-full bg-white border-4 border-black z-10 group-hover:scale-125 transition-transform" />
                          <div className="space-y-2">
                            <span className="text-xs font-black text-blue-600 font-disket tracking-widest">{item.time}</span>
                            <h4 className="text-xl font-bold text-black font-geist uppercase">{item.title}</h4>
                            <p className="text-gray-500 font-geist">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'guidelines' && (
                  <motion.div
                    key="guidelines"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold text-black font-disket uppercase">Important Info</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {EVENT_DATA.guidelines.map((text, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl flex items-start gap-4">
                          <Info className="size-6 text-black flex-shrink-0" />
                          <p className="text-gray-600 font-geist font-medium">{text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'support' && (
                  <motion.div
                    key="support"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold text-black font-disket uppercase">Contact & Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 bg-black rounded-[32px] text-white space-y-6">
                        <h4 className="text-xl font-bold font-disket uppercase">Official Support</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <Phone className="size-5 text-gray-400" />
                            <span className="font-geist">{EVENT_DATA.support.phone}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Mail className="size-5 text-gray-400" />
                            <span className="font-geist">{EVENT_DATA.support.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 bg-white border border-gray-100 rounded-[32px] space-y-6">
                        <h4 className="text-xl font-bold font-disket uppercase text-black">Need Help?</h4>
                        <p className="text-gray-500 font-geist">Our team is available 24/7 to help you with registration queries.</p>
                        <button className="w-full py-4 bg-gray-100 text-black rounded-full font-bold font-disket text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                          WHATSAPP US
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Sidebar - Registration Card */}
        <div className="lg:col-span-1 order-first lg:order-last">
          <div className="lg:sticky top-24 space-y-6">
            <div className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-2xl shadow-black/5 space-y-8">
              <div className="space-y-2 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-disket">Registration Fee</p>
                <h3 className="text-5xl font-black text-black font-geist tracking-tighter">{EVENT_DATA.fee}</h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex items-center justify-between text-sm font-geist text-gray-500">
                  <span>Available Seats</span>
                  <span className="text-black font-bold">12 / 50</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[24%] h-full bg-blue-600 rounded-full" />
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-6 bg-black text-white rounded-full font-disket font-bold text-sm tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/20"
              >
                REGISTER NOW
              </button>

              <div className="flex flex-col gap-4 text-center">
                <p className="text-xs text-gray-400 font-geist">Limited time early bird offer ends in 2 days.</p>
              </div>
            </div>

            {/* Organizers */}
            <div className="p-8 bg-gray-50/50 backdrop-blur-sm rounded-[40px] border border-white space-y-6">
              <h4 className="text-xs font-bold text-black font-disket uppercase tracking-widest">Organized by</h4>
              <div className="flex items-center gap-4">
                <img src="/assets/logo.webp" className="size-12 object-contain" alt="Logo" />
                <div>
                  <p className="font-bold font-disket text-black uppercase text-sm">Bulls Academy</p>
                  <p className="text-xs text-gray-500 font-geist">Sitamarhi, Bihar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="size-6 text-black" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5 h-full min-h-[500px]">
                <div className="md:col-span-2 bg-black p-10 text-white flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold font-disket uppercase leading-none">Register for the Event</h3>
                    <p className="text-gray-400 font-geist text-sm">Secure your spot today and start your journey to elite trading.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="size-5 text-blue-500" />
                      <span className="text-xs font-bold font-disket uppercase tracking-wider">Instant Approval</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="size-5 text-blue-500" />
                      <span className="text-xs font-bold font-disket uppercase tracking-wider">Secure Payment</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-10 space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-disket">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-black outline-none font-geist" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-disket">WhatsApp Number</label>
                      <input type="tel" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-black outline-none font-geist" placeholder="+91 00000 00000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-disket">Trading Experience</label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-black outline-none font-geist appearance-none">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-black text-white rounded-full font-disket font-bold text-xs tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-black/20">
                    CONTINUE TO PAYMENT
                  </button>
                  <p className="text-[10px] text-center text-gray-400 font-geist px-4 uppercase tracking-tighter">By registering, you agree to our terms and conditions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
