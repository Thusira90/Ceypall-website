'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { trackLead, CONVERSION_EVENTS } from '@/lib/analytics'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d+\s\-()]*$/, 'Please enter a valid phone number').optional(),
  palletUse: z.enum(['export', 'storage', 'unsure']).optional(),
  quantity: z.string().regex(/^\d*$/, 'Please enter numbers only').optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Failed to send enquiry.')
      }
      setSubmitted(true)
      trackLead(CONVERSION_EVENTS.formSubmit, {
        method: 'contact_form',
        pallet_use: data.palletUse,
        quantity: data.quantity || undefined,
      })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send enquiry. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-10">
        <div className="w-14 h-14 bg-accent flex items-center justify-center">
          <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none">
            <path
              d="M5 14l6 6L23 8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-primary mb-2">
            Enquiry sent — thank you.
          </h3>
          <p className="font-body text-sm text-charcoal/70 leading-relaxed">
            We&apos;ve received your message and will respond within one business day. You can also
            reach us directly at{' '}
            <a
              href="mailto:office@ceypall.com"
              className="text-accent underline underline-offset-2"
            >
              office@ceypall.com
            </a>
            .
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); reset() }}
          className="font-body text-sm text-charcoal/50 hover:text-primary transition-colors underline underline-offset-2"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Prefer to talk? — WhatsApp + phone fallback lifted above the form so
          visitors who won't fill a form can still convert in one tap. */}
      <div className="flex flex-col sm:flex-row gap-3 p-5 bg-warm-gray/40 border border-warm-gray">
        <a
          href="https://wa.me/94714711417?text=Hi%20CeyPall%2C%20I%27d%20like%20a%20quote%20for%20pallets."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-body font-semibold text-sm px-5 py-3 transition-colors flex-1"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
        <a
          href="tel:+94714711417"
          className="inline-flex items-center justify-center gap-2 border border-primary/20 text-primary hover:bg-primary hover:text-cream font-body font-semibold text-sm px-5 py-3 transition-colors flex-1"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 2h3l1.5 3.5-1.75 1a8.5 8.5 0 004.75 4.75l1-1.75L15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          Call +94 71 471 1417
        </a>
      </div>

      <p className="font-body text-xs text-charcoal/50 text-center">— or send an enquiry —</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Name + Email — the only two required fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="form-label">
              Name <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className={cn('form-input', errors.name && 'border-red-400')}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@company.com"
              className={cn('form-input', errors.email && 'border-red-400')}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone + Company — both optional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="form-label">
              Phone / WhatsApp{' '}
              <span className="text-charcoal/40 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+94 7XX XXX XXX"
              className={cn('form-input', errors.phone && 'border-red-400')}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="form-label">
              Company{' '}
              <span className="text-charcoal/40 font-normal">(optional)</span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              placeholder="Your company"
              className="form-input"
              {...register('company')}
            />
          </div>
        </div>

        {/* Pallet use — optional now, was blocking submits before */}
        <div>
          <label htmlFor="palletUse" className="form-label">
            Pallet use{' '}
            <span className="text-charcoal/40 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="palletUse"
              className={cn('form-input appearance-none pr-10 cursor-pointer')}
              defaultValue=""
              {...register('palletUse')}
            >
              <option value="">Not sure / prefer to discuss</option>
              <option value="export">Export</option>
              <option value="storage">Warehouse storage</option>
              <option value="unsure">Not sure</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Message — quantity moved into free-text so short forms convert */}
        <div>
          <label htmlFor="message" className="form-label">
            Message{' '}
            <span className="text-charcoal/40 font-normal">(optional — quantity, size, delivery location)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="e.g. 500 pallets, 1200 × 1000 mm, delivery to Katunayake by end of month..."
            className="form-input resize-none"
            {...register('message')}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto justify-center">
          {isSubmitting ? 'Sending…' : 'Send enquiry →'}
        </Button>

        {submitError && (
          <p className="font-body text-sm text-red-500">{submitError}</p>
        )}

        <p className="font-body text-xs text-charcoal/40">
          We respond within one business day. Your details are only used to respond to your enquiry.
        </p>
      </form>
    </div>
  )
}
