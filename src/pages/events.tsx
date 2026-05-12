import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

const EVENTS = [
  {
    id: 1,
    title: "Sitamarhi Offline Trading Workshop",
    date: "June 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Academy Headquarters, Sitamarhi",
    type: "Offline",
    status: "Open"
  },
  {
    id: 2,
    title: "Mastering Institutional Order Flow",
    date: "June 22, 2024",
    time: "8:00 PM - 10:00 PM",
    location: "Zoom Live Stream",
    type: "Online Webinar",
    status: "Limited Seats"
  },
  {
    id: 3,
    title: "Elite Community Meetup & Networking",
    date: "July 05, 2024",
    time: "6:00 PM onwards",
    location: "Patna Business Hub",
    type: "Meetup",
    status: "Registering"
  }
]

export function Events() {
  return (
    <div className="min-h-screen px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto space-y-16 md:space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-8xl font-bold font-disket tracking-tighter uppercase text-black leading-tight">
          Upcoming Events
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-geist max-w-2xl mx-auto leading-relaxed">
          Join our curated workshops and networking sessions to accelerate your trading journey.
        </p>
      </motion.div>

      <div className="space-y-8">
        {EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden bg-white/50 backdrop-blur-xl border border-gray-100 rounded-[40px] p-8 md:p-12 hover:border-black transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1 bg-black text-white rounded-full text-[10px] font-bold font-disket uppercase tracking-widest">
                    {event.type}
                  </span>
                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold font-disket uppercase tracking-widest">
                    {event.status}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-geist text-black tracking-tight">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-500 font-geist">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-black" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-5 text-black" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-black" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link 
                  to={`/events/${event.id}`}
                  className="inline-block px-10 py-5 bg-black text-white rounded-full font-disket font-bold tracking-widest hover:scale-105 transition-transform"
                >
                  BOOK MY SEAT
                </Link>
              </div>
            </div>
            
            {/* Aesthetic accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-black/[0.05] transition-all" />
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-12">
        <p className="text-gray-400 font-geist">Interested in hosting a workshop in your city? <NavHashLink smooth to="/#contact" className="text-black font-bold underline">Contact Us</NavHashLink></p>
      </div>
    </div>
  )
}
