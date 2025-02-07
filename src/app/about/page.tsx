'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 md:px-8">
      <motion.div 
        className="w-full max-w-4xl space-y-8"
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
          About EMRC
        </motion.h1>

        <motion.section 
          className="glass p-8 rounded-2xl space-y-4 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white">Our Community</h2>
          <p className="text-white/80 leading-relaxed">
            Welcome to Erin Mills Run Club, where we believe that running is for everyone. Our community 
            brings together runners of all levels, from beginners taking their first steps to experienced 
            runners looking to achieve new goals. We meet every Saturday at 10 AM for our weekly 5km run, 
            creating an encouraging and supportive environment for all participants.
          </p>
        </motion.section>

        <motion.section 
          className="glass p-8 rounded-2xl space-y-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-dark p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-medium text-white">Pace Groups</h3>
              <p className="text-white/80">
                We organize multiple pace groups to ensure everyone can run comfortably at their own speed, 
                from walkers to speed runners.
              </p>
            </div>
            <div className="glass-dark p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-medium text-white">Weekly Runs</h3>
              <p className="text-white/80">
                Join us every Saturday at 10 AM for our signature 5km run. We start and finish together, 
                supporting each other along the way.
              </p>
            </div>
            <div className="glass-dark p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-medium text-white">Inclusive Environment</h3>
              <p className="text-white/80">
                Whether you're walking, jogging, or running, you'll find your place here. No one runs alone - 
                we make sure everyone feels supported.
              </p>
            </div>
            <div className="glass-dark p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-medium text-white">Community Support</h3>
              <p className="text-white/80">
                Connect with fellow runners, share experiences, and build lasting friendships within our 
                welcoming community.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="glass p-8 rounded-2xl space-y-4 border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white">Join Us This Saturday</h2>
          <p className="text-white/80 leading-relaxed">
            Come experience the joy of running with a supportive community. No registration required - 
            just show up ready to run at your own pace. We'll make sure you feel welcome and supported 
            throughout your running journey.
          </p>
          <div className="pt-6">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg glass-dark hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/10"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
} 