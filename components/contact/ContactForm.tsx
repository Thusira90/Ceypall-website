'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d+\s\-()]*$/, 'Please enter a valid phone number').optional(),
  palletUse: z.enum(['export', 'storage', 'unsure'], {
    required_error: 'Please select a pallet use',
  }),
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Company */}
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
          <label htmlFor="company" className="form-label">
            Company name{' '}
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

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="text-accent">*</span>
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

        <div>
          <label htmlFor="phone" className="form-label">
            Phone{' '}
            <span className="text-charcoal/40 font-normal">(optional)</span>
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

      {/* Pallet use + Quantity */}
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
            Quantity{' '}
            <span className="text-charcoal/40 font-normal">(optional)</span>
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            placeholder="e.g. 500"
            className={cn('form-input', errors.quantity && 'border-red-400')}
            {...register('quantity')}
          />
          {errors.quantity && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.quantity.message}</p>
          )}
        </div>
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
          placeholder="Pallet size, treatment type, delivery location, special requirements..."
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
