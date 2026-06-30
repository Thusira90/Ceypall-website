'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const CONTAINERS = [
  { label: "20' Standard", lengthMm: 5898, widthMm: 2352, heightMm: 2393, maxPayloadKg: 21770 },
  { label: "40' Standard", lengthMm: 12032, widthMm: 2352, heightMm: 2393, maxPayloadKg: 26680 },
  { label: "40' High Cube", lengthMm: 12032, widthMm: 2352, heightMm: 2698, maxPayloadKg: 26460 },
] as const

const PALLETS = [
  { label: '1200 x 1000 mm — General Export', lengthMm: 1200, widthMm: 1000 },
  { label: '1200 x 800 mm — Euro Pallet', lengthMm: 1200, widthMm: 800 },
  { label: '1219 x 1016 mm — North American (48" x 40")', lengthMm: 1219, widthMm: 1016 },
  { label: '1100 x 1100 mm — Asia / Pacific', lengthMm: 1100, widthMm: 1100 },
  { label: 'Custom', lengthMm: 0, widthMm: 0 },
] as const

interface FloorResult {
  count: number
  mainCols: number
  mainRows: number
  rotated: boolean
  gapExtra: number
  gapSide: 'right' | 'bottom' | 'none'
  gapCols: number
  gapRows: number
}

function fillStrip(stripL: number, stripW: number, pL: number, pW: number): { count: number; cols: number; rows: number } {
  const a = Math.floor(stripL / pL) * Math.floor(stripW / pW)
  const b = Math.floor(stripL / pW) * Math.floor(stripW / pL)
  if (a >= b) return { count: a, cols: Math.floor(stripL / pL), rows: Math.floor(stripW / pW) }
  return { count: b, cols: Math.floor(stripL / pW), rows: Math.floor(stripW / pL) }
}

function calcFloorFit(
  containerL: number, containerW: number,
  palletL: number, palletW: number,
): FloorResult {
  let best: FloorResult = { count: 0, mainCols: 0, mainRows: 0, rotated: false, gapExtra: 0, gapSide: 'none', gapCols: 0, gapRows: 0 }

  for (const rotated of [false, true]) {
    const pL = rotated ? palletW : palletL
    const pW = rotated ? palletL : palletW

    const cols = Math.floor(containerL / pL)
    const rows = Math.floor(containerW / pW)
    const mainCount = cols * rows

    // Right strip: full container height, remaining width after main columns
    const rightGapL = containerL - cols * pL
    const rightFill = fillStrip(rightGapL, containerW, pL, pW)

    // Bottom strip: full container width (main only), remaining height after main rows
    const bottomGapW = containerW - rows * pW
    const bottomFill = fillStrip(cols * pL, bottomGapW, pL, pW)

    // Pick the better gap fill
    let gapExtra = 0, gapSide: 'right' | 'bottom' | 'none' = 'none', gapCols = 0, gapRows = 0
    if (rightFill.count >= bottomFill.count && rightFill.count > 0) {
      gapExtra = rightFill.count; gapSide = 'right'; gapCols = rightFill.cols; gapRows = rightFill.rows
    } else if (bottomFill.count > 0) {
      gapExtra = bottomFill.count; gapSide = 'bottom'; gapCols = bottomFill.cols; gapRows = bottomFill.rows
    }

    const total = mainCount + gapExtra
    if (total > best.count) {
      best = { count: total, mainCols: cols, mainRows: rows, rotated, gapExtra, gapSide, gapCols, gapRows }
    }
  }

  return best
}

export function ContainerCalculator() {
  const [containerIdx, setContainerIdx] = useState(0)
  const [palletIdx, setPalletIdx] = useState(0)
  const [customL, setCustomL] = useState('')
  const [customW, setCustomW] = useState('')
  const [palletHeightMm, setPalletHeightMm] = useState('150')
  const [cargoHeightMm, setCargoHeightMm] = useState('')

  const container = CONTAINERS[containerIdx]
  const palletPreset = PALLETS[palletIdx]
  const isCustom = palletPreset.label === 'Custom'

  const palletL = isCustom ? (parseInt(customL) || 0) : palletPreset.lengthMm
  const palletW = isCustom ? (parseInt(customW) || 0) : palletPreset.widthMm
  const palletH = parseInt(palletHeightMm) || 150
  const cargoH = parseInt(cargoHeightMm) || 0

  const result = useMemo(() => {
    if (palletL <= 0 || palletW <= 0) return null
    const floor = calcFloorFit(container.lengthMm, container.widthMm, palletL, palletW)
    const stackUnitH = palletH + cargoH
    const stackLayers = cargoH > 0 && stackUnitH > 0 ? Math.floor(container.heightMm / stackUnitH) : 1
    const totalPallets = floor.count * stackLayers
    const pL = floor.rotated ? palletW : palletL
    const pW = floor.rotated ? palletL : palletW

    return { ...floor, stackLayers, totalPallets, stackUnitH, pL, pW }
  }, [palletL, palletW, palletH, cargoH, container])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Input panel */}
      <div className="space-y-8">
        {/* Container */}
        <fieldset>
          <legend className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
            Container type
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CONTAINERS.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setContainerIdx(i)}
                className={`border-2 px-4 py-3 text-left transition-colors duration-150 ${
                  containerIdx === i
                    ? 'border-accent bg-accent/5 text-primary'
                    : 'border-warm-gray text-charcoal/60 hover:border-primary/30'
                }`}
              >
                <span className="font-body text-sm font-semibold block">{c.label}</span>
                <span className="font-body text-xs text-charcoal/50 mt-0.5 block">
                  {(c.lengthMm / 1000).toFixed(1)} x {(c.widthMm / 1000).toFixed(1)} x {(c.heightMm / 1000).toFixed(1)}m
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        {/* Pallet size */}
        <fieldset>
          <legend className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
            Pallet size
          </legend>
          <div className="space-y-2">
            {PALLETS.map((p, i) => (
              <label
                key={p.label}
                className={`flex items-center gap-3 border-2 px-4 py-3 cursor-pointer transition-colors duration-150 ${
                  palletIdx === i
                    ? 'border-accent bg-accent/5'
                    : 'border-warm-gray hover:border-primary/30'
                }`}
              >
                <input
                  type="radio"
                  name="pallet"
                  checked={palletIdx === i}
                  onChange={() => setPalletIdx(i)}
                  className="accent-accent w-4 h-4"
                />
                <span className="font-body text-sm text-primary">{p.label}</span>
              </label>
            ))}
          </div>

          {isCustom && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="font-body text-xs text-charcoal/60 mb-1 block">Length (mm)</label>
                <input
                  type="number"
                  value={customL}
                  onChange={(e) => setCustomL(e.target.value)}
                  placeholder="e.g. 1200"
                  className="w-full border-2 border-warm-gray px-3 py-2.5 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-xs text-charcoal/60 mb-1 block">Width (mm)</label>
                <input
                  type="number"
                  value={customW}
                  onChange={(e) => setCustomW(e.target.value)}
                  placeholder="e.g. 1000"
                  className="w-full border-2 border-warm-gray px-3 py-2.5 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}
        </fieldset>

        {/* Stacking */}
        <fieldset>
          <legend className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
            Stacking (optional)
          </legend>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-body text-xs text-charcoal/60 mb-1 block">Pallet height (mm)</label>
              <input
                type="number"
                value={palletHeightMm}
                onChange={(e) => setPalletHeightMm(e.target.value)}
                placeholder="150"
                className="w-full border-2 border-warm-gray px-3 py-2.5 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs text-charcoal/60 mb-1 block">Cargo height (mm)</label>
              <input
                type="number"
                value={cargoHeightMm}
                onChange={(e) => setCargoHeightMm(e.target.value)}
                placeholder="e.g. 1200"
                className="w-full border-2 border-warm-gray px-3 py-2.5 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          </div>
          <p className="font-body text-xs text-charcoal/40 mt-2">
            Enter cargo height to calculate how many layers can be stacked vertically.
          </p>
        </fieldset>
      </div>

      {/* Results panel */}
      <div>
        {result && result.count > 0 ? (
          <div className="sticky top-24 space-y-6">
            {/* Main result */}
            <div className="bg-primary p-8">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Result
              </p>
              <p className="font-display text-display-xl text-cream">
                {result.totalPallets}
              </p>
              <p className="font-body text-sm text-cream/70 mt-1">
                pallets in a {container.label} container
              </p>
            </div>

            {/* Breakdown */}
            <div className="border-2 border-warm-gray divide-y-2 divide-warm-gray">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-body text-sm text-charcoal/60">Floor layout</span>
                <span className="font-body text-sm font-semibold text-primary">
                  {result.mainCols} x {result.mainRows}{result.gapExtra > 0 ? ` + ${result.gapExtra}` : ''} = {result.count} per layer
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-body text-sm text-charcoal/60">Stackable layers</span>
                <span className="font-body text-sm font-semibold text-primary">
                  {result.stackLayers} {result.stackLayers === 1 ? 'layer' : 'layers'}
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-body text-sm text-charcoal/60">Pallet orientation</span>
                <span className="font-body text-sm font-semibold text-primary">
                  {result.rotated ? 'Rotated 90°' : 'Standard'}
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-body text-sm text-charcoal/60">Pallet dimensions</span>
                <span className="font-body text-sm font-semibold text-primary">
                  {palletL} x {palletW} mm
                </span>
              </div>
              {cargoH > 0 && (
                <div className="px-6 py-4 flex justify-between items-center">
                  <span className="font-body text-sm text-charcoal/60">Stack unit height</span>
                  <span className="font-body text-sm font-semibold text-primary">
                    {result.stackUnitH} mm (pallet + cargo)
                  </span>
                </div>
              )}
            </div>

            {/* Floor plan visual */}
            <div className="border-2 border-warm-gray p-6">
              <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/50 mb-4">
                Floor plan (top view)
              </p>
              <div className="flex justify-center">
                <FloorPlanSvg
                  containerL={container.lengthMm}
                  containerW={container.widthMm}
                  palletL={result.pL}
                  palletW={result.pW}
                  cols={result.mainCols}
                  rows={result.mainRows}
                  gapCols={result.gapCols}
                  gapRows={result.gapRows}
                  gapSide={result.gapSide}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 border-2 border-accent/20 p-6">
              <p className="font-body text-sm text-primary font-semibold mb-1">
                Need pallets for your next shipment?
              </p>
              <p className="font-body text-xs text-charcoal/60 mb-4">
                CeyPall manufactures all standard sizes with ISPM 15 heat treatment and island-wide delivery.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-body font-semibold text-sm px-5 py-2.5 transition-colors duration-200"
              >
                Get a quote →
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-warm-gray/40 border-2 border-warm-gray p-8 text-center">
            <p className="font-body text-sm text-charcoal/50">
              {isCustom ? 'Enter custom pallet dimensions to see results.' : 'Select options to calculate.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function FloorPlanSvg({
  containerL, containerW, palletL, palletW, cols, rows,
  gapCols, gapRows, gapSide,
}: {
  containerL: number; containerW: number
  palletL: number; palletW: number
  cols: number; rows: number
  gapCols: number; gapRows: number
  gapSide: 'right' | 'bottom' | 'none'
}) {
  const maxSvgW = 400
  const scale = maxSvgW / containerL
  const svgW = containerL * scale
  const svgH = containerW * scale
  const pW = palletL * scale
  const pH = palletW * scale

  return (
    <svg
      viewBox={`0 0 ${svgW + 2} ${svgH + 2}`}
      className="w-full max-w-[400px]"
      aria-label={`Floor plan: ${cols} columns x ${rows} rows of pallets in container`}
    >
      <rect x="1" y="1" width={svgW} height={svgH} fill="none" stroke="#1C3A2B" strokeWidth="2" />

      {/* Main pallets */}
      {Array.from({ length: cols }).map((_, c) =>
        Array.from({ length: rows }).map((_, r) => (
          <rect
            key={`m-${c}-${r}`}
            x={1 + c * pW + 1}
            y={1 + r * pH + 1}
            width={pW - 2}
            height={pH - 2}
            fill="#C8861A"
            fillOpacity={0.2}
            stroke="#C8861A"
            strokeWidth="1"
            rx="1"
          />
        )),
      )}

      {/* Gap-fill pallets */}
      {gapSide !== 'none' && (() => {
        const gapPalletW = gapSide === 'right'
          ? (containerL - cols * palletL) / gapCols
          : (cols * palletL) / gapCols
        const gapPalletH = gapSide === 'right'
          ? containerW / gapRows
          : (containerW - rows * palletW) / gapRows
        const offsetX = gapSide === 'right' ? cols * pW : 0
        const offsetY = gapSide === 'bottom' ? rows * pH : 0

        return Array.from({ length: gapCols }).map((_, c) =>
          Array.from({ length: gapRows }).map((_, r) => (
            <rect
              key={`g-${c}-${r}`}
              x={1 + offsetX + c * gapPalletW * scale + 1}
              y={1 + offsetY + r * gapPalletH * scale + 1}
              width={gapPalletW * scale - 2}
              height={gapPalletH * scale - 2}
              fill="#1C3A2B"
              fillOpacity={0.15}
              stroke="#1C3A2B"
              strokeWidth="1"
              rx="1"
            />
          )),
        )
      })()}
    </svg>
  )
}
