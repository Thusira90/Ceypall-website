import { Button } from '@/components/ui/Button'

export function QuoteCTA() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Wood grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.012 0.08' numOctaves='4' seed='9' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='600' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

      <div className="container-content relative z-10 py-20 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Ready to order?
            </p>
            <h2 className="font-display text-display-lg text-cream mb-4">
              Need pallets for your next shipment?
            </h2>
            <p className="font-body text-base text-cream/75 leading-relaxed">
              Tell us your size, quantity, and treatment type. We&apos;ll get back to you with pricing
              and lead time — fast.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" variant="primary" size="lg">
              Request a quote →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
