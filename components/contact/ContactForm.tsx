'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { trackConversion, trackMetaEvent, CONVERSION_EVENTS } from '@/lib/analytics'

// Quantity bands — the single strongest qualifier on this form. Values are
// ASCII-safe for analytics params; labels are en-dashed for display.
const QUANTITY_BANDS = [
  { value: '1-50', label: '1–50' },
  { value: '51-100', label: '51–100' },
  { value: '101-500', label: '101–500' },
  { value: '501-1000', label: '501–1,000' },
  { value: '1000+', label: '1,000+' },
] as const

const INDUSTRIES = [
  'Tea',
  'Apparel',
  'Coconut',
  'Rubber',
  'Spices/Cinnamon',
  'Seafood',
  'Food & Beverage',
  'Pharmaceutical',
  'Machinery',
  'Logistics/Freight',
  'Other',
] as const

const QUANTITY_VALUES = QUANTITY_BANDS.map((b) => b.value) as unknown as [
  (typeof QUANTITY_BANDS)[number]['value'],
  ...(typeof QUANTITY_BANDS)[number]['value'][],
]

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(6, 'Please enter your phone number')
    .regex(/^[\d+\s\-()]+$/, 'Please enter a valid phone number'),
  palletUse: z.enum(['export', 'storage', 'unsure'], {
    errorMap: () => ({ message: 'Please select a pallet use' }),
  }),
  quantity: z.enum(QUANTITY_VALUES, {
    errorMap: () => ({ message: 'Please select a quantity band' }),
  }),
  industry: z.enum([...INDUSTRIES] as unknown as [string, ...string[]], {
    errorMap: () => ({ message: 'Please select an industry' }),
  }),
  company: z.string().optional(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  location: z.string().optional(),
  message: z.string().optional(),
  website: z.string().max(0).optional(),
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
      trackConversion(CONVERSION_EVENTS.formSubmit, {
        form_location: 'contact',
        pallet_use: data.palletUse,
        quantity_band: data.quantity,
        industry: data.industry,
      })
      trackMetaEvent('Lead', { content_name: 'Quote Request' })
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
    <form onSubmit={handleSubmit(onSubmit)} method="post" noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, tempting for bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      {/* Name + Phone (both required) */}
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
          <label htmlFor="phone" className="form-label">
            Phone / WhatsApp <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+94 7XX XXX XXX"
            className={cn('form-input', errors.phone && 'border-red-400')}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Pallet use + Quantity (both required) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="palletUse" className="form-label">
            Pallet use <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="palletUse"
              className={cn(
                'form-input appearance-none pr-10 cursor-pointer',
                errors.palletUse && 'border-red-400',
              )}
              defaultValue=""
              {...register('palletUse')}
            >
              <option value="" disabled>
                Select use case
              </option>
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
          {errors.palletUse && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.palletUse.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="quantity" className="form-label">
            Quantity <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="quantity"
              className={cn(
                'form-input appearance-none pr-10 cursor-pointer',
                errors.quantity && 'border-red-400',
              )}
              defaultValue=""
              {...register('quantity')}
            >
              <option value="" disabled>
                Select quantity band
              </option>
              {QUANTITY_BANDS.map((band) => (
                <option key={band.value} value={band.value}>
                  {band.label}
                </option>
              ))}
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
          {errors.quantity && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.quantity.message}</p>
          )}
        </div>
      </div>

      {/* Industry (required) */}
      <div>
        <label htmlFor="industry" className="form-label">
          Industry <span className="text-accent">*</span>
        </label>
        <div className="relative">
          <select
            id="industry"
            className={cn(
              'form-input appearance-none pr-10 cursor-pointer',
              errors.industry && 'border-red-400',
            )}
            defaultValue=""
            {...register('industry')}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
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
        {errors.industry && (
          <p className="mt-1 font-body text-xs text-red-500">{errors.industry.message}</p>
        )}
      </div>

      {/* Company + Email (both optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        <div>
          <label htmlFor="email" className="form-label">
            Email{' '}
            <span className="text-charcoal/40 font-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={cn('form-input', errors.email && 'border-red-400')}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Delivery location (optional) */}
      <div>
        <label htmlFor="location" className="form-label">
          Delivery location{' '}
          <span className="text-charcoal/40 font-normal">(optional)</span>
        </label>
        <input
          id="location"
          type="text"
          autoComplete="address-level2"
          placeholder="City or district"
          className="form-input"
          {...register('location')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Message / additional requirements{' '}
          <span className="text-charcoal/40 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Pallet size, treatment type, delivery date, special requirements..."
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
  )
}
