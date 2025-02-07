'use client'

import { motion } from 'framer-motion'

const coaches = [
  {
    name: 'Justin Lai',
    role: 'Lead Run Leader',
    specialties: ['Group Runs', 'Pace Setting', 'Community Building'],
    experience: '5+ years running',
    image: '/coaches/justin.jpg',
  },
  {
    name: 'Soyeb Ehsan',
    role: 'Run Leader',
    specialties: ['Distance Running', 'Training Plans', 'Running Form'],
    experience: '5+ years running',
    image: '/coaches/soyeb.jpg',
  }
]

export default function CoachesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 md:px-8">
      <motion.div 
        className="w-full max-w-6xl space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Run Leaders
        </motion.h1>

        <motion.p
          className="text-center text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Meet our dedicated run leaders who help create a welcoming and supportive environment for runners of all levels.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-dark border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20">
                  {coach.name.charAt(0)}
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-white">{coach.name}</h2>
                <p className="text-white/60 font-medium mt-1">{coach.role}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-white/80">Experience: {coach.experience}</p>
                  <div>
                    <p className="text-white/60 text-sm">Specialties:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {coach.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium glass-dark text-white/80 border border-white/10"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="glass p-8 rounded-2xl mt-12 text-center border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-white">Join Us This Saturday</h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Come meet our run leaders in person and join us for our weekly Saturday morning run. 
            All paces welcome!
          </p>
          <div className="mt-6">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg glass-dark hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/10"
            >
              Contact Us
            </a>
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
} 