import Link from 'next/link'
import { FooterLogo } from './FooterLogo'

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/clients', label: 'Clients' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="wood-texture text-cream">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <FooterLogo />
            </div>
            <p className="font-body text-xs text-cream mb-5 uppercase tracking-widest">
              (Pvt) Ltd
            </p>
            <p className="font-body text-sm text-cream/70 leading-relaxed max-w-xs">
              Sri Lanka&apos;s dedicated ISPM 15-certified wooden pallet manufacturer — supplying export-ready pallets to leading companies island-wide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/heat-treated-pallets"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                >
                  Heat Treated Pallets
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-5">
              Regions served
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/wooden-pallets-colombo"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                >
                  Colombo & Port
                </Link>
              </li>
              <li>
                <Link
                  href="/wooden-pallets-katunayake"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                >
                  Katunayake FTZ
                </Link>
              </li>
              <li>
                <Link
                  href="/wooden-pallets-negombo"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                >
                  Negombo & Wattala
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-5">
              Contact
            </p>
            <address className="not-italic font-body text-sm text-cream/70 space-y-2 leading-relaxed">
              <p>1088, Colombo Road, Daluwakotuwa,<br />Kochchikade, Sri Lanka 11540</p>
              <div className="pt-1 space-y-1">
                <p>
                  <a href="tel:+94714711417" className="hover:text-cream transition-colors duration-150">
                    +94 714 711 417
                  </a>
                </p>
                <p>
                  <a href="tel:+94769494944" className="hover:text-cream transition-colors duration-150">
                    +94 769 494 944
                  </a>
                </p>
                <p>
                  <a href="tel:+94312277752" className="hover:text-cream transition-colors duration-150">
                    +94 312 277 752
                  </a>
                </p>
              </div>
              <p className="pt-1">
                <a
                  href="mailto:office@ceypall.com"
                  className="hover:text-cream transition-colors duration-150"
                >
                  office@ceypall.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} CeyPall (Pvt) Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/40">
            Need kiln drying or timber treatment?{' '}
            <a
              href="https://stxaviertimber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/80 hover:text-accent transition-colors duration-150 underline underline-offset-2"
            >
              Visit stxaviertimber.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
