const items = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    label: 'ISPM 15 certified',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'IPPC registered — NPQS Sri Lanka',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    label: 'Island-wide delivery',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    label: 'Custom sizes available',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M3 6h14M3 10h14M3 14h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    label: '20+ years of pallet expertise',
  },
]

export function TrustBar() {
  return (
    <div className="bg-charcoal">
      <div className="container-content py-0">
        <ul className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {items.map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 px-0 lg:px-6 py-4 lg:py-5 flex-1 min-w-[50%] lg:min-w-0 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="text-accent flex-shrink-0">{icon}</span>
              <span className="font-body text-xs font-medium text-cream/80 leading-tight">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
