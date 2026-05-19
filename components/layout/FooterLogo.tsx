import Image from 'next/image'

export function FooterLogo() {
  return (
    <div className="inline-block bg-cream px-3 py-2">
      <Image
        src="/logo.png"
        alt="CeyPall (Pvt) Ltd"
        width={130}
        height={56}
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}
