type LogoProps = {
  className?: string
  light?: boolean
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <span className={`inline-flex flex-col items-center leading-none select-none ${className}`}>
      <span
        className={`font-script text-[2.4em] ${light ? 'text-cream' : 'text-gradient-gold'}`}
        style={{ fontFamily: 'var(--font-script)' }}
      >
        de Matteo
      </span>
      <span className="tracked text-[0.32em] font-sans font-medium text-gold-soft/90 -mt-1">
        ALLA BRACE
      </span>
    </span>
  )
}
