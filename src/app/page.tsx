'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'

// Dynamically import the Three.js component to avoid SSR issues
const HeroBackground = dynamic(() => import('@/components/hero/background'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroBackground />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Erin Mills Run Club
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/80">
                Join our community of passionate runners. Whether you're a beginner
                or an experienced athlete, we're here to support your journey.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/join"
                  className="glass rounded-full px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10"
                >
                  Join Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/about"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 