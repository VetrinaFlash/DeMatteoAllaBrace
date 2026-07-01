import { useMemo } from 'react'

type Ember = {
  left: string
  size: number
  duration: number
  delay: number
  opacity: number
  dx: number
}

export default function EmberField({ count = 18, className = '' }: { count?: number; className?: string }) {
  const embers = useMemo<Ember[]>(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 4,
      duration: 7 + Math.random() * 9,
      delay: Math.random() * 12,
      opacity: 0.35 + Math.random() * 0.45,
      dx: (Math.random() - 0.5) * 80,
    }))
  }, [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember-particle"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            ['--o' as string]: e.opacity,
            ['--dx' as string]: `${e.dx}px`,
          }}
        />
      ))}
    </div>
  )
}
