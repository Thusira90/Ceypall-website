'use client'

import { useState, useMemo } from 'react'

type Method = 'wet' | 'dry'

const WOOD_SPECIES = [
  { label: 'Rubber Wood (Hevea)', typicalMc: 12, density: 560 },
  { label: 'Lunumidella (Alstonia)', typicalMc: 14, density: 380 },
  { label: 'Jak (Artocarpus)', typicalMc: 13, density: 590 },
  { label: 'Pine (Radiata)', typicalMc: 12, density: 480 },
  { label: 'Other / Unknown', typicalMc: 0, density: 0 },
] as const

interface RiskLevel {
  label: string
  color: string
  bgColor: string
  message: string
}

function getRiskLevel(mc: number): RiskLevel {
  if (mc <= 12)
    return {
      label: 'Optimal',
      color: 'text-green-700',
      bgColor: 'bg-green-50 border-green-200',
      message: 'Moisture content is within the optimal range for export pallets. Low risk of mould, fungal growth, or cargo damage during transit.',
    }
  if (mc <= 15)
    return {
      label: 'Acceptable',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50 border-emerald-200',
      message: 'Moisture content is acceptable for most export destinations. CeyPall pallets are kiln-dried to below 15% MC before dispatch.',
    }
  if (mc <= 19)
    return {
      label: 'Caution',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50 border-amber-200',
      message: 'Moisture content is above the recommended range for export. Risk of mould growth during ocean transit, especially on voyages exceeding 14 days. Consider kiln drying before use.',
    }
  return {
    label: 'High Risk',
    color: 'text-red-700',
    bgColor: 'bg-red-50 border-red-200',
    message: 'Moisture content is too high for export use. Pallets at this level will likely develop mould or fungal growth during transit. Wood must be properly kiln-dried before use.',
  }
}

function getGaugeRotation(mc: number): number {
  const clamped = Math.min(Math.max(mc, 0), 40)
  return (clamped / 40) * 180 - 90
}

function GaugeMeter({ mc }: { mc: number }) {
  const rotation = getGaugeRotation(mc)
  const risk = getRiskLevel(mc)

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 120" className="w-full max-w-[280px]">
        {/* Background arc segments */}
        <path d="M 20 100 A 80 80 0 0 1 56 37" fill="none" stroke="#dcfce7" strokeWidth="16" strokeLinecap="butt" />
        <path d="M 56 37 A 80 80 0 0 1 100 20" fill="none" stroke="#d1fae5" strokeWidth="16" strokeLinecap="butt" />
        <path d="M 100 20 A 80 80 0 0 1 152 44" fill="none" stroke="#fef3c7" strokeWidth="16" strokeLinecap="butt" />
        <path d="M 152 44 A 80 80 0 0 1 180 100" fill="none" stroke="#fee2e2" strokeWidth="16" strokeLinecap="butt" />

        {/* Labels */}
        <text x="18" y="115" className="fill-charcoal/40" fontSize="8" textAnchor="middle">0%</text>
        <text x="56" y="30" className="fill-charcoal/40" fontSize="8" textAnchor="middle">12%</text>
        <text x="100" y="14" className="fill-charcoal/40" fontSize="8" textAnchor="middle">15%</text>
        <text x="152" y="36" className="fill-charcoal/40" fontSize="8" textAnchor="middle">20%</text>
        <text x="184" y="115" className="fill-charcoal/40" fontSize="8" textAnchor="middle">40%</text>

        {/* Needle */}
        <g transform={`rotate(${rotation} 100 100)`}>
          <line x1="100" y1="100" x2="100" y2="28" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="100" r="5" fill="#1A1A1A" />

        {/* Value display */}
        <text x="100" y="95" className="fill-charcoal" fontSize="20" fontWeight="bold" textAnchor="middle">
          {mc.toFixed(1)}%
        </text>
      </svg>
      <span className={`font-body text-sm font-semibold mt-1 ${risk.color}`}>
        {risk.label}
      </span>
    </div>
  )
}

export function MoistureCalculator() {
  const [method, setMethod] = useState<Method>('wet')
  const [wetWeight, setWetWeight] = useState('')
  const [dryWeight, setDryWeight] = useState('')
  const [meterReading, setMeterReading] = useState('')
  const [speciesIdx, setSpeciesIdx] = useState(0)
  const [mode, setMode] = useState<'calculate' | 'meter'>('calculate')

  const result = useMemo(() => {
    if (mode === 'meter') {
      const reading = parseFloat(meterReading)
      if (isNaN(reading) || reading < 0) return null
      return { mc: reading, method: 'meter' as const }
    }

    const wet = parseFloat(wetWeight)
    const dry = parseFloat(dryWeight)
    if (isNaN(wet) || isNaN(dry) || dry <= 0 || wet <= 0) return null
    if (wet < dry) return null

    if (method === 'wet') {
      const mc = ((wet - dry) / wet) * 100
      return { mc, method: 'wet-basis' as const }
    }
    const mc = ((wet - dry) / dry) * 100
    return { mc, method: 'dry-basis' as const }
  }, [mode, method, wetWeight, dryWeight, meterReading])

  const risk = result ? getRiskLevel(result.mc) : null

  return (
    <div className="bg-white border border-warm-gray">
      {/* Mode tabs */}
      <div className="flex border-b border-warm-gray">
        <button
          onClick={() => setMode('calculate')}
          className={`flex-1 py-3.5 font-body text-sm font-medium transition-colors duration-150 ${
            mode === 'calculate'
              ? 'text-primary border-b-2 border-accent bg-cream/40'
              : 'text-charcoal/50 hover:text-charcoal/70'
          }`}
        >
          Calculate from Weight
        </button>
        <button
          onClick={() => setMode('meter')}
          className={`flex-1 py-3.5 font-body text-sm font-medium transition-colors duration-150 ${
            mode === 'meter'
              ? 'text-primary border-b-2 border-accent bg-cream/40'
              : 'text-charcoal/50 hover:text-charcoal/70'
          }`}
        >
          Enter Meter Reading
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:divide-x divide-warm-gray">
        {/* Inputs */}
        <div className="p-6 lg:p-8 space-y-5">
          {mode === 'calculate' ? (
            <>
              {/* Method selector */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Calculation Method
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setMethod('wet')}
                    className={`flex-1 py-2.5 px-3 border text-sm font-body font-medium transition-all duration-150 ${
                      method === 'wet'
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-warm-gray text-charcoal/60 hover:border-charcoal/30'
                    }`}
                  >
                    Wet Basis
                  </button>
                  <button
                    onClick={() => setMethod('dry')}
                    className={`flex-1 py-2.5 px-3 border text-sm font-body font-medium transition-all duration-150 ${
                      method === 'dry'
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-warm-gray text-charcoal/60 hover:border-charcoal/30'
                    }`}
                  >
                    Dry Basis (Oven-dry)
                  </button>
                </div>
                <p className="font-body text-xs text-charcoal/40 mt-1.5">
                  {method === 'wet'
                    ? 'MC = (Wet Weight − Dry Weight) ÷ Wet Weight × 100'
                    : 'MC = (Wet Weight − Dry Weight) ÷ Dry Weight × 100'}
                </p>
              </div>

              {/* Wet weight */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Wet (Initial) Weight
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={wetWeight}
                    onChange={(e) => setWetWeight(e.target.value)}
                    placeholder="e.g. 850"
                    min="0"
                    step="0.1"
                    className="flex-1 border border-warm-gray px-4 py-2.5 font-body text-sm text-charcoal focus:outline-none focus:border-accent transition-colors"
                  />
                  <span className="border border-l-0 border-warm-gray px-3 py-2.5 font-body text-xs text-charcoal/50 bg-cream/60 flex items-center">
                    grams
                  </span>
                </div>
              </div>

              {/* Dry weight */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Oven-Dry Weight
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={dryWeight}
                    onChange={(e) => setDryWeight(e.target.value)}
                    placeholder="e.g. 750"
                    min="0"
                    step="0.1"
                    className="flex-1 border border-warm-gray px-4 py-2.5 font-body text-sm text-charcoal focus:outline-none focus:border-accent transition-colors"
                  />
                  <span className="border border-l-0 border-warm-gray px-3 py-2.5 font-body text-xs text-charcoal/50 bg-cream/60 flex items-center">
                    grams
                  </span>
                </div>
              </div>

              {/* Wood species */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Wood Species (optional)
                </label>
                <select
                  value={speciesIdx}
                  onChange={(e) => setSpeciesIdx(Number(e.target.value))}
                  className="w-full border border-warm-gray px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-accent transition-colors"
                >
                  {WOOD_SPECIES.map((s, i) => (
                    <option key={s.label} value={i}>
                      {s.label}
                      {s.typicalMc > 0 ? ` — typical MC ~${s.typicalMc}%` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            <>
              {/* Meter reading input */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Moisture Meter Reading
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={meterReading}
                    onChange={(e) => setMeterReading(e.target.value)}
                    placeholder="e.g. 14.5"
                    min="0"
                    max="100"
                    step="0.1"
                    className="flex-1 border border-warm-gray px-4 py-2.5 font-body text-sm text-charcoal focus:outline-none focus:border-accent transition-colors"
                  />
                  <span className="border border-l-0 border-warm-gray px-3 py-2.5 font-body text-xs text-charcoal/50 bg-cream/60 flex items-center">
                    %
                  </span>
                </div>
                <p className="font-body text-xs text-charcoal/40 mt-1.5">
                  Enter the percentage reading from a pin-type or pinless moisture meter.
                </p>
              </div>

              {/* Wood species for meter */}
              <div>
                <label className="block font-body text-xs font-semibold tracking-wide uppercase text-charcoal/60 mb-2">
                  Wood Species (optional)
                </label>
                <select
                  value={speciesIdx}
                  onChange={(e) => setSpeciesIdx(Number(e.target.value))}
                  className="w-full border border-warm-gray px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-accent transition-colors"
                >
                  {WOOD_SPECIES.map((s, i) => (
                    <option key={s.label} value={i}>
                      {s.label}
                      {s.typicalMc > 0 ? ` — typical MC ~${s.typicalMc}%` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-cream/60 border border-warm-gray/60 p-4">
                <p className="font-body text-xs text-charcoal/60 leading-relaxed">
                  <strong className="text-charcoal/80">Tip:</strong> Pin-type meters measure resistance between two electrodes driven into the wood. Pinless (capacitive) meters scan a wider area non-destructively. For pallets, take readings at the centre of the thickest board for the most accurate result.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Results */}
        <div className="p-6 lg:p-8 bg-cream/30">
          {result ? (
            <div className="space-y-6">
              <GaugeMeter mc={result.mc} />

              {/* Risk assessment */}
              {risk && (
                <div className={`border p-4 ${risk.bgColor}`}>
                  <p className={`font-body text-sm font-semibold ${risk.color} mb-1`}>
                    {risk.label}
                  </p>
                  <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                    {risk.message}
                  </p>
                </div>
              )}

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-warm-gray/60">
                  <span className="font-body text-xs text-charcoal/50 uppercase tracking-wide">Moisture Content</span>
                  <span className="font-display text-lg text-primary">{result.mc.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-warm-gray/60">
                  <span className="font-body text-xs text-charcoal/50 uppercase tracking-wide">Method</span>
                  <span className="font-body text-sm text-charcoal/70">
                    {result.method === 'meter' ? 'Meter reading' : result.method === 'wet-basis' ? 'Wet basis' : 'Dry basis (oven-dry)'}
                  </span>
                </div>
                {mode === 'calculate' && wetWeight && dryWeight && (
                  <div className="flex justify-between items-center py-2 border-b border-warm-gray/60">
                    <span className="font-body text-xs text-charcoal/50 uppercase tracking-wide">Water Weight</span>
                    <span className="font-body text-sm text-charcoal/70">
                      {(parseFloat(wetWeight) - parseFloat(dryWeight)).toFixed(1)} g
                    </span>
                  </div>
                )}
                {WOOD_SPECIES[speciesIdx].typicalMc > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-warm-gray/60">
                    <span className="font-body text-xs text-charcoal/50 uppercase tracking-wide">Typical MC ({WOOD_SPECIES[speciesIdx].label.split(' (')[0]})</span>
                    <span className="font-body text-sm text-charcoal/70">~{WOOD_SPECIES[speciesIdx].typicalMc}%</span>
                  </div>
                )}
              </div>

              {/* ISPM 15 note */}
              <div className="bg-primary/5 border border-primary/10 p-4">
                <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                  <strong className="text-primary">ISPM 15 Note:</strong> The ISPM 15 standard does not specify a maximum moisture content, but industry best practice is to keep pallet wood below 15% MC to prevent mould growth during ocean transit. CeyPall kiln-dries all pallets to below 15% MC.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <svg className="w-12 h-12 text-charcoal/20 mb-4" viewBox="0 0 48 48" fill="none">
                <path d="M24 6C24 6 10 22 10 30a14 14 0 0028 0C38 22 24 6 24 6z" stroke="currentColor" strokeWidth="2" />
                <path d="M18 32a6 6 0 006 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-body text-sm text-charcoal/40">
                {mode === 'calculate'
                  ? 'Enter wet and dry weights to calculate moisture content.'
                  : 'Enter your moisture meter reading to see the risk assessment.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
