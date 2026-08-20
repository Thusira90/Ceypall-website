'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Entry = 'four-way' | 'two-way'
type Application = 'export' | 'domestic' | 'racking' | 'storage'

interface Recommendation {
  dutyClass: string
  boardThickness: string
  stringer: string
  deckType: string
  treatment: string
  notes: string[]
}

function recommend({
  loadKg,
  entry,
  application,
  length,
  width,
}: {
  loadKg: number
  entry: Entry
  application: Application
  length: number
  width: number
}): Recommendation {
  const notes: string[] = []

  let dutyClass = 'Light duty'
  let boardThickness = '15 mm'
  let stringer = '75 × 75 mm stringers'

  if (loadKg <= 1000) {
    dutyClass = 'Light duty'
    boardThickness = '15 mm deck boards'
    stringer = '75 × 75 mm stringers'
  } else if (loadKg <= 1500) {
    dutyClass = 'Standard duty'
    boardThickness = '18 mm deck boards'
    stringer = '75 × 100 mm stringers'
  } else if (loadKg <= 2000) {
    dutyClass = 'Heavy duty'
    boardThickness = '22 mm deck boards'
    stringer = '100 × 100 mm stringers'
  } else {
    dutyClass = 'Extra heavy duty (custom build)'
    boardThickness = '25 mm+ deck boards'
    stringer = '100 × 125 mm stringers or block framing'
    notes.push('Loads above 2,000 kg are engineered per project — send us the full cargo details.')
  }

  const deckType =
    application === 'racking' || loadKg > 1500
      ? 'Double deck with full bottom boards (racking-ready)'
      : 'Single deck with 3–5 bottom boards'

  if (application === 'racking') {
    notes.push('Tell us your racking type and beam spacing so we can size the deck stiffness to the unsupported span.')
  }

  const treatment =
    application === 'export'
      ? 'ISPM 15 heat treatment (56°C core / 30 min) + IPPC stamp'
      : application === 'storage'
      ? 'VPI (Boron Borax) for multi-year protection'
      : application === 'racking'
      ? 'ISPM 15 or VPI depending on export vs storage use'
      : 'Untreated or HT — depending on hygiene requirement'

  if (entry === 'two-way' && loadKg > 1500) {
    notes.push('Two-way entry with continuous stringers is a good fit for this weight — stiffer under heavy static loads.')
  }
  if (entry === 'four-way') {
    notes.push('Four-way entry gives forklift and pallet-jack handling flexibility on both axes.')
  }

  const footprintArea = (length * width) / 1_000_000
  if (footprintArea > 0 && loadKg / footprintArea > 2000) {
    notes.push('Load-per-area is high — we may recommend tighter top-deck spacing to distribute the point load.')
  }

  return { dutyClass, boardThickness, stringer, deckType, treatment, notes }
}

export function SpecificationCalculator() {
  const [length, setLength] = useState(1200)
  const [width, setWidth] = useState(1000)
  const [loadKg, setLoadKg] = useState(1000)
  const [entry, setEntry] = useState<Entry>('four-way')
  const [application, setApplication] = useState<Application>('export')

  const rec = useMemo(
    () => recommend({ loadKg, entry, application, length, width }),
    [loadKg, entry, application, length, width],
  )

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-cream border border-warm-gray p-6 md:p-8">
        <h3 className="font-display text-lg font-semibold text-primary mb-6">Your requirement</h3>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/60">Length (mm)</span>
              <input
                type="number"
                value={length}
                min={400}
                max={2400}
                step={50}
                onChange={(e) => setLength(Number(e.target.value))}
                className="mt-2 w-full border border-warm-gray bg-white px-3 py-2 font-body text-sm text-charcoal"
              />
            </label>
            <label className="block">
              <span className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/60">Width (mm)</span>
              <input
                type="number"
                value={width}
                min={400}
                max={2400}
                step={50}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="mt-2 w-full border border-warm-gray bg-white px-3 py-2 font-body text-sm text-charcoal"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/60">Maximum load (kg)</span>
            <input
              type="number"
              value={loadKg}
              min={100}
              max={5000}
              step={50}
              onChange={(e) => setLoadKg(Number(e.target.value))}
              className="mt-2 w-full border border-warm-gray bg-white px-3 py-2 font-body text-sm text-charcoal"
            />
          </label>

          <label className="block">
            <span className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/60">Forklift entry</span>
            <select
              value={entry}
              onChange={(e) => setEntry(e.target.value as Entry)}
              className="mt-2 w-full border border-warm-gray bg-white px-3 py-2 font-body text-sm text-charcoal"
            >
              <option value="four-way">Four-way entry</option>
              <option value="two-way">Two-way entry</option>
            </select>
          </label>

          <label className="block">
            <span className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/60">Application</span>
            <select
              value={application}
              onChange={(e) => setApplication(e.target.value as Application)}
              className="mt-2 w-full border border-warm-gray bg-white px-3 py-2 font-body text-sm text-charcoal"
            >
              <option value="export">Export (ISPM 15 required)</option>
              <option value="domestic">Domestic use</option>
              <option value="storage">Long-term warehouse storage</option>
              <option value="racking">Racking</option>
            </select>
          </label>
        </div>
      </div>

      {/* Output */}
      <div className="bg-primary text-cream p-6 md:p-8">
        <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">Recommended specification</p>
        <h3 className="font-display text-2xl text-cream mb-6">{rec.dutyClass}</h3>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-body font-semibold text-cream/60 uppercase tracking-wide text-xs">Deck boards</dt>
            <dd className="font-body text-cream/90 mt-1">{rec.boardThickness}</dd>
          </div>
          <div>
            <dt className="font-body font-semibold text-cream/60 uppercase tracking-wide text-xs">Framing</dt>
            <dd className="font-body text-cream/90 mt-1">{rec.stringer}</dd>
          </div>
          <div>
            <dt className="font-body font-semibold text-cream/60 uppercase tracking-wide text-xs">Deck configuration</dt>
            <dd className="font-body text-cream/90 mt-1">{rec.deckType}</dd>
          </div>
          <div>
            <dt className="font-body font-semibold text-cream/60 uppercase tracking-wide text-xs">Treatment</dt>
            <dd className="font-body text-cream/90 mt-1">{rec.treatment}</dd>
          </div>
        </dl>

        {rec.notes.length > 0 && (
          <div className="mt-6 pt-6 border-t border-cream/20">
            <p className="font-body text-xs font-semibold text-accent mb-2 uppercase tracking-wide">Notes</p>
            <ul className="space-y-2">
              {rec.notes.map((n) => (
                <li key={n} className="font-body text-sm text-cream/80 leading-relaxed">• {n}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-body font-semibold text-sm px-6 py-3 transition-colors duration-200"
          >
            Confirm this spec with CeyPall →
          </Link>
          <p className="font-body text-xs text-cream/50 mt-3">
            Indicative recommendation only. Final specification is confirmed by our engineering team against your exact cargo and handling profile.
          </p>
        </div>
      </div>
    </div>
  )
}
