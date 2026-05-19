import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyCeyPall } from '@/components/home/WhyCeyPall'
import { ProductsOverview } from '@/components/home/ProductsOverview'
import { ClientsStrip } from '@/components/home/ClientsStrip'
import { QuoteCTA } from '@/components/home/QuoteCTA'

export const metadata: Metadata = {
  title: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets, Sri Lanka',
  description:
    'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant. CeyPall (Pvt) Ltd.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyCeyPall />
      <ProductsOverview />
      <ClientsStrip />
      <QuoteCTA />
    </>
  )
}
