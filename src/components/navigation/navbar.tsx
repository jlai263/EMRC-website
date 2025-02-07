'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
      setMobileMenuOpen(false)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="mx-4 my-4 md:mx-8">
        <div className="glass border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="relative group flex items-center space-x-2"
            >
              <span className="text-2xl font-bold text-white">
                EMRC
              </span>
            </Link>
            
            <ul className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${pathname === item.href 
                        ? 'text-white glass-dark' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="block md:hidden relative z-50 w-10 h-10 glass-dark rounded-lg border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-5 h-[2px] bg-white absolute"
                  animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                />
                <motion.div
                  className="w-5 h-[2px] bg-white absolute"
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.div
                  className="w-5 h-[2px] bg-white absolute"
                  animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-0 right-0 mx-4 glass border border-white/10 rounded-2xl p-4 backdrop-blur-md md:hidden"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300
                        ${pathname === item.href 
                          ? 'glass-dark text-white' 
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 