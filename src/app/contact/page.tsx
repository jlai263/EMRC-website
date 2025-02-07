'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      to: 'justin6001@gmail.com'
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

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
          Contact Us
        </motion.h1>

        <motion.p
          className="text-center text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Have questions about joining our running club? Want to learn more about our Saturday runs? Get in touch with us.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass p-6 rounded-2xl space-y-4">
              <h2 className="text-2xl font-semibold text-white">Run Details</h2>
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
                  <span>Erin Mills, Mississauga</span>
                </p>
                <p className="flex items-center space-x-3 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>justin6001@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl space-y-4">
              <h2 className="text-2xl font-semibold text-white">What to Bring</h2>
              <div className="space-y-2 text-white/80">
                <p>• Comfortable running shoes</p>
                <p>• Water bottle</p>
                <p>• Positive attitude</p>
                <p>• Friends are welcome!</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="glass p-6 rounded-2xl space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="What would you like to know about our running club?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors
                ${formStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <motion.p
                className="text-green-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! We'll get back to you soon.
              </motion.p>
            )}

            {formStatus === 'error' && (
              <motion.p
                className="text-red-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Something went wrong. Please try again or email us directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </main>
  )
} 