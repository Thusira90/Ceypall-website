'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// Pallet product pages, grouped under a single "Pallets" dropdown so the top
// bar stays uncluttered while every money page is one click away.
const palletsLinks = [
  { href: '/products', label: 'All Products' },
  { href: '/heat-treated-pallets', label: 'Heat-Treated Pallets' },
  { href: '/euro-pallets-sri-lanka', label: 'Euro Pallets' },
  { href: '/custom-wooden-pallets-sri-lanka', label: 'Custom Wooden Pallets' },
  { href: '/industrial-pallets-sri-lanka', label: 'Industrial Pallets' },
  { href: '/export-pallet-manufacturer-sri-lanka', label: 'Export Pallet Manufacturer' },
]

// Rendered before the Pallets dropdown, as the first item in the bar.
const leadLink = { href: '/about', label: 'About' }

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/clients', label: 'Clients' },
  { href: '/knowledge-centre', label: 'Knowledge Centre' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const palletActive = palletsLinks.some(
    ({ href }) => pathname === href || pathname.startsWith(href + '/'),
  )

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
            {/* About — first item, before the Pallets dropdown */}
            <Link
              href={leadLink.href}
              className={cn(
                'font-body text-sm font-medium transition-colors duration-150 relative pb-0.5',
                pathname === leadLink.href || pathname.startsWith(leadLink.href + '/')
                  ? 'text-primary'
                  : 'text-charcoal/60 hover:text-primary',
              )}
            >
              {leadLink.label}
              {(pathname === leadLink.href || pathname.startsWith(leadLink.href + '/')) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                />
              )}
            </Link>

            {/* Pallets dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={cn(
                  'inline-flex items-center gap-1 font-body text-sm font-medium transition-colors duration-150 relative pb-0.5',
                  palletActive ? 'text-primary' : 'text-charcoal/60 hover:text-primary',
                )}
              >
                Pallets
                <svg
                  className="w-3 h-3 mt-px transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {palletActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-4 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
              </button>

              {/* Dropdown panel — pt-3 keeps the hover bridge over the gap */}
              <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 z-50">
                <div className="bg-cream border border-warm-gray shadow-lg min-w-[248px] py-2">
                  {palletsLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        'block px-5 py-2.5 font-body text-sm transition-colors duration-150',
                        pathname === href || pathname.startsWith(href + '/')
                          ? 'text-accent bg-warm-gray/40'
                          : 'text-charcoal/70 hover:text-primary hover:bg-warm-gray/30',
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
            className="fixed inset-0 z-40 bg-cream pt-[72px] lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-5 pt-8 pb-10 gap-1">
              {/* About — first item */}
              <Link
                href={leadLink.href}
                className={cn(
                  'font-display text-lg py-3 border-b border-warm-gray transition-colors duration-150',
                  pathname === leadLink.href ? 'text-primary' : 'text-charcoal/70 hover:text-primary',
                )}
              >
                {leadLink.label}
              </Link>

              {/* Pallets group */}
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent pt-6 pb-3">
                Pallets
              </p>
              {palletsLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'font-display text-lg py-3 border-b border-warm-gray transition-colors duration-150',
                    pathname === href || pathname.startsWith(href + '/')
                      ? 'text-accent'
                      : 'text-charcoal/70 hover:text-primary',
                  )}
                >
                  {label}
                </Link>
              ))}

              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent pt-6 pb-3">
                More
              </p>
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'font-display text-lg py-3 border-b border-warm-gray transition-colors duration-150',
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
