'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/export-pallet-manufacturer-sri-lanka', label: 'Export Pallets' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/clients', label: 'Clients' },
  { href: '/about', label: 'About' },
  { href: '/knowledge-centre', label: 'Knowledge Centre' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-warm-gray'
            : 'bg-cream border-b border-warm-gray/60',
        )}
        style={{ height: '72px' }}
      >
        <div className="container-content h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CeyPall (Pvt) Ltd"
              width={160}
              height={68}
              className="h-14 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'font-body text-sm font-medium transition-colors duration-150 relative pb-0.5',
                  pathname === href || pathname.startsWith(href + '/')
                    ? 'text-primary'
                    : 'text-charcoal/60 hover:text-primary',
                )}
              >
                {label}
                {(pathname === href || pathname.startsWith(href + '/')) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-white font-body font-semibold text-sm px-5 py-2.5 transition-colors duration-200"
            >
              Get a quote
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-charcoal origin-center"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-charcoal"
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-charcoal origin-center"
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream pt-[72px] lg:hidden"
          >
            <nav className="flex flex-col px-5 pt-8 pb-10 gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'font-display text-2xl py-4 border-b border-warm-gray transition-colors duration-150',
                    pathname === href ? 'text-primary' : 'text-charcoal/70 hover:text-primary',
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-white font-body font-semibold text-sm px-6 py-4 transition-colors duration-200"
              >
                Get a quote →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
