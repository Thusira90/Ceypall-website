export function PalletPlaceholder({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`bg-primary/6 border border-warm-gray flex items-center justify-center ${className}`}
    >
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-primary/8 flex items-center justify-center mx-auto mb-3">
          <svg className="w-8 h-8 text-primary/30" viewBox="0 0 32 32" fill="none">
            <rect x="3" y="7" width="26" height="5" rx="1" fill="currentColor" />
            <rect x="3" y="14" width="26" height="5" rx="1" fill="currentColor" opacity="0.6" />
            <rect x="3" y="21" width="26" height="5" rx="1" fill="currentColor" />
            <rect x="5" y="26" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
            <rect x="14" y="26" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
            <rect x="23" y="26" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
        <p className="font-body text-xs text-primary/30 uppercase tracking-widest">{label}</p>
      </div>
    </div>
  )
}
