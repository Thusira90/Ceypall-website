import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Escape HTML entities so submitted values can't inject markup into the
// notification email body.
function escapeHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Sliding-window rate limit per IP. In-memory — resets on cold start, which is
// fine as a first-line defence against burst spam.
const RATE_WINDOW_MS = 60 * 60 * 1000
const RATE_MAX = 5
const hits = new Map<string, number[]>()

function tooManyRequests(ip: string): boolean {
  const now = Date.now()
  const window = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (window.length >= RATE_MAX) {
    hits.set(ip, window)
    return true
  }
  window.push(now)
  hits.set(ip, window)
  return false
}

const bodySchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).regex(/^[\d+\s\-()]*$/).optional().or(z.literal('')),
  palletUse: z.enum(['export', 'storage', 'unsure']),
  quantity: z.string().trim().max(10).regex(/^\d*$/).optional().or(z.literal('')),
  message: z.string().trim().max(4000).optional().or(z.literal('')),
  // Honeypot — legitimate users leave this empty. Bots that fill every field
  // trip the trap and we drop the request silently.
  website: z.string().max(0).optional().or(z.literal('')),
})

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (tooManyRequests(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  const { name, company, email, phone, palletUse, quantity, message, website } = parsed.data

  // Honeypot filled — pretend success so bots don't retry.
  if (website && website.length > 0) {
    return NextResponse.json({ success: true })
  }

  const palletUseLabel =
    palletUse === 'export' ? 'Export' : palletUse === 'storage' ? 'Warehouse storage' : 'Not sure'

  const safe = {
    name: escapeHtml(name),
    company: escapeHtml(company),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    palletUseLabel: escapeHtml(palletUseLabel),
    quantity: escapeHtml(quantity),
    message: escapeHtml(message),
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"CeyPall Website" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: company ? `Pallet Enquiry — ${company}` : `Pallet Enquiry — ${name}`,
    html: `
      <table style="font-family:Arial,sans-serif;font-size:14px;color:#222;border-collapse:collapse;width:100%;max-width:600px">
        <tr><td colspan="2" style="background:#1a3a2a;color:#fff;padding:20px 24px;font-size:18px;font-weight:bold">New Pallet Enquiry</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee;width:160px">Name</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${safe.name}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Company</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${safe.company || 'Not provided'}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:12px 24px;border-bottom:1px solid #eee"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${safe.phone || 'Not provided'}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Pallet use</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${safe.palletUseLabel}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Quantity</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${safe.quantity || 'Not provided'}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;vertical-align:top">Message</td><td style="padding:12px 24px;white-space:pre-wrap">${safe.message || 'No additional message.'}</td></tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (err) {
    console.error('[contact/route] email error:', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
