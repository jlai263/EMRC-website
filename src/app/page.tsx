'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// Sections content
type Section = {
  title: string;
  subtitle?: string;
  content?: string;
  icon?: string;
}

const sections: Record<string, Section> = {
  home: {
    title: "Erin Mills Run Club",
    subtitle: "Where every stride builds community, every runner belongs",
    icon: "🏠"
  },
  about: {
    title: "About EMRC",
    content: "Join our inclusive running community where we meet every Saturday at 10 AM at John Fraser Secondary School Track, welcoming runners of all levels and paces.",
    icon: "ℹ️"
  },
  schedule: {
    title: "Schedule",
    content: "View our running schedule and upcoming events.",
    icon: "📅"
  },
  coaches: {
    title: "Our Run Leaders",
    content: "Meet our dedicated run leaders who help guide and support your running journey.",
    icon: "👥"
  },
  contact: {
    title: "Contact Us",
    content: "Have questions about joining our running community? Get in touch with us today.",
    icon: "📞"
  }
}

const events = [
  {
    title: 'EMRC Club Run (5km)',
    start: '2025-03-01T10:00:00',
    end: '2025-03-01T11:00:00',
    location: 'John Fraser Secondary School Track',
    description: 'Weekly 5km run - all paces welcome!'
  },
  {
    title: 'EMRC Club Run (5km)',
    start: '2025-03-08T10:00:00',
    end: '2025-03-08T11:00:00',
    location: 'John Fraser Secondary School Track',
    description: 'Weekly 5km run - all paces welcome!'
  },
  {
    title: 'EMRC Club Run (5km)',
    start: '2025-03-15T10:00:00',
    end: '2025-03-15T11:00:00',
    location: 'John Fraser Secondary School Track',
    description: 'Weekly 5km run - all paces welcome!'
  },
  {
    title: 'EMRC Club Run (5km)',
    start: '2025-03-22T10:00:00',
    end: '2025-03-22T11:00:00',
    location: 'John Fraser Secondary School Track',
    description: 'Weekly 5km run - all paces welcome!'
  },
  {
    title: 'EMRC Club Run (5km)',
    start: '2025-03-29T10:00:00',
    end: '2025-03-29T11:00:00',
    location: 'John Fraser Secondary School Track',
    description: 'Weekly 5km run - all paces welcome!'
  }
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Add mounted state for calendar
  const [calendarMounted, setCalendarMounted] = useState(false)

  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)

  // Add modal state
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<{
    date: string;
    time: string;
    location: string;
  } | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    // Check initially
    checkMobile()
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setCalendarMounted(true)
  }, [])

  const handleNavigation = async (section: string) => {
    if (section === currentSection) return
    setCurrentSection(section)
  }

  const handleEventClick = (eventId: string, date: string) => {
    setSelectedEvent({
      date,
      time: "10:00 AM - 11:00 AM",
      location: "John Fraser Secondary School Track"
    })
    setShowModal(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative z-10 w-full max-w-md">
            <div className="glass p-6 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">Club Run Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/90">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{selectedEvent?.date}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-white/90">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{selectedEvent?.time}</span>
                </div>

                <div className="flex items-center space-x-3 text-white/90">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{selectedEvent?.location}</span>
                </div>

                <div className="flex items-center space-x-3 text-white/90">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>All paces welcome!</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg glass-dark hover:bg-white/20 text-white font-medium transition-all duration-200 border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <motion.nav 
        className="fixed left-0 top-0 bottom-0 w-14 sm:w-20 hover:w-64 z-50 transition-all duration-200 group"
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="h-full glass border-r border-white/10 backdrop-blur-md py-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Logo */}
          <motion.div 
            className="px-2 sm:px-3 mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center h-8">
              <div className="w-full flex items-center px-3 sm:px-4">
                <span className="text-xl sm:text-2xl font-bold text-white inline-flex items-center">
                  E<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-[2px]">MRC</span>
                </span>
                <span className="text-xs text-white/50 tracking-wider font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">v1.0</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="space-y-2 px-2 sm:px-3">
            {Object.entries(sections).map(([key, section]) => (
              <motion.button
                key={key}
                onClick={() => handleNavigation(key)}
                onMouseEnter={() => setIsHovered(key)}
                onMouseLeave={() => setIsHovered(null)}
                className={`relative w-full group flex items-center px-3 sm:px-4 py-3 rounded-xl transition-all duration-300
                  ${currentSection === key 
                    ? 'glass-dark text-white' 
                    : 'text-white/60 hover:text-white hover:glass-dark'
                  }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon with glow effect */}
                <span className={`text-base sm:text-xl w-6 sm:w-8 text-center transition-all duration-300 ${isHovered === key ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>
                  {section.icon}
                </span>
                
                {/* Text with glow effect */}
                <span className={`ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 nav-group-hover:opacity-100 transition-all duration-300 
                  ${isHovered === key ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>

                {/* Active indicator */}
                {currentSection === key && (
                  <motion.div
                    className="absolute right-0 top-0 h-full w-1 bg-white rounded-r-full"
                    layoutId="activeIndicator"
                    style={{
                      right: 0
                    }}
                  />
                )}

                {/* Hover effects */}
                {isHovered === key && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/5 -z-10"
                    layoutId="hoverBackground"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-4 left-0 right-0 px-3">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/30"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Content with smooth transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ 
            duration: 0.2,
            ease: "easeOut"
          }}
          className="flex min-h-screen items-center justify-center px-4 pl-20 sm:pl-28 py-16 sm:py-8"
        >
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
            {/* Section content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
                {sections[currentSection as keyof typeof sections].title}
              </h1>
              {currentSection === 'home' ? (
                <p className="text-lg sm:text-xl text-white/80">
                  {sections.home.subtitle}
                </p>
              ) : (
                <p className="text-base sm:text-lg text-white/80">
                  {sections[currentSection as keyof typeof sections].content}
                </p>
              )}
            </motion.div>

            {/* Section-specific content */}
            {currentSection === 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center"
              >
                <button 
                  onClick={() => handleNavigation('about')}
                  className="px-8 py-3 rounded-lg glass-dark hover:bg-white/20 text-white font-medium transition-all duration-200 border border-white/10"
                >
                  Learn More
                </button>
              </motion.div>
            )}

            {/* Schedule section content */}
            {currentSection === 'schedule' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <p className="text-center text-white/80 max-w-2xl mx-auto">
                  Join us every Saturday at 10 AM for our weekly run at John Fraser Secondary School Track.
                </p>

                <div className="glass p-6 rounded-2xl border border-white/10">
                  <div style={{ height: '600px' }}>
                    {calendarMounted && (
                      <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        initialDate="2025-03-01"
                        headerToolbar={{
                          left: 'prev,next today',
                          center: 'title',
                          right: ''
                        }}
                        height="100%"
                        showNonCurrentDates={false}
                        eventContent={(eventInfo) => {
                          return (
                            <button 
                              onClick={(e) => {
                                e.preventDefault()
                                handleEventClick(eventInfo.event.startStr, new Date(eventInfo.event.startStr).toLocaleDateString('en-US', { 
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                }))
                              }}
                              className="w-full h-full px-2 py-1.5 sm:px-2 sm:py-1.5 hover:bg-white/20 rounded transition-all duration-200 flex items-center justify-center"
                            >
                              <span className="text-xs sm:text-sm font-medium">
                                Club Run
                              </span>
                            </button>
                          )
                        }}
                        eventDidMount={(info) => {
                          // Add hover title with full details
                          info.el.title = `${info.event.title}\nTime: 10:00 AM - 11:00 AM\nLocation: ${info.event.extendedProps.location}\n${info.event.extendedProps.description}`
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center border border-white/10">
                  <h2 className="text-2xl font-semibold text-white mb-4">Regular Schedule</h2>
                  <div className="space-y-2 text-white/80">
                    <p>• Every Saturday at 10:00 AM</p>
                    <p>• 5km group run</p>
                    <p>• All paces welcome</p>
                    <p>• Location: John Fraser Secondary School Track</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Coaches section content */}
            {currentSection === 'coaches' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12"
              >
                {/* Justin's Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-6 items-center border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden backdrop-blur-sm bg-black/30 border border-white/20 shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/40">
                      J
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-white/90">Justin Lai</h2>
                    <p className="text-white/70 font-medium mt-1">Lead Run Leader</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-white/80">Experience: 5+ years running</p>
                      <div>
                        <p className="text-white/70 text-sm">Specialties:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['Group Runs', 'Pace Setting', 'Community Building'].map((specialty) => (
                            <span
                              key={specialty}
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Soyeb's Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-6 items-center border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden backdrop-blur-sm bg-black/30 border border-white/20 shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/40">
                      S
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-white/90">Soyeb Ehsan</h2>
                    <p className="text-white/70 font-medium mt-1">Run Leader</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-white/80">Experience: 5+ years running</p>
                      <div>
                        <p className="text-white/70 text-sm">Specialties:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['Distance Running', 'Training Plans', 'Running Form'].map((specialty) => (
                            <span
                              key={specialty}
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Join Us Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl text-center border border-white/20 shadow-lg md:col-span-2 mt-4 sm:mt-6"
                >
                  <h2 className="text-2xl font-semibold text-white/90">Join Us This Saturday</h2>
                  <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                    Come meet our run leaders in person and join us for our weekly Saturday morning run. 
                    All paces welcome!
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => handleNavigation('contact')}
                      className="inline-block px-8 py-3 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-all duration-300 border border-white/20"
                    >
                      Contact Us
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Contact Form Section */}
            {currentSection === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12"
              >
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="backdrop-blur-md bg-white/10 p-4 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 border border-white/20">
                    <h2 className="text-2xl font-semibold text-white/90">Run Details</h2>
                    <div className="space-y-3">
                      <p className="flex items-center space-x-3 text-white/80">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Every Saturday at 10:00 AM</span>
                      </p>
                      <p className="flex items-center space-x-3 text-white/80">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>John Fraser Secondary School Track, Erin Mills, Mississauga</span>
                      </p>
                      <p className="flex items-center space-x-3 text-white/80">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>justin6001@gmail.com</span>
                      </p>
                    </div>
                  </div>

                  <div className="backdrop-blur-md bg-white/10 p-4 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 border border-white/20">
                    <h2 className="text-2xl font-semibold text-white/90">What to Bring</h2>
                    <div className="space-y-2 text-white/80">
                      <p>• Comfortable running shoes</p>
                      <p>• Water bottle</p>
                      <p>• Positive attitude</p>
                      <p>• Friends are welcome!</p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-md bg-white/10 p-4 sm:p-6 rounded-2xl space-y-4 sm:space-y-6 border border-white/20"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name: formData.get('name'),
                          email: formData.get('email'),
                          message: formData.get('message'),
                          to: 'justin6001@gmail.com'
                        }),
                      });
                      if (response.ok) {
                        alert('Message sent successfully!');
                        (e.target as HTMLFormElement).reset();
                      } else {
                        throw new Error('Failed to send message');
                      }
                    } catch (error) {
                      alert('Failed to send message. Please try again or email us directly.');
                    }
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                        placeholder="What would you like to know about our running club?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-all duration-300 border border-white/20"
                  >
                    Send Message
                  </button>
                </motion.form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  )
} 