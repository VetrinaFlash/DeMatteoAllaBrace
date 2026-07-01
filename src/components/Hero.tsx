import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { MouseEvent } from 'react'
import heroGrill from '../assets/images/hero-grill.jpg'
import { hero, contatti } from '../content'
import EmberField from './EmberField'
import Logo from './Logo'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = spotlightRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-noir grain"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => spotlightRef.current?.classList.add('is-active')}
      onMouseLeave={() => spotlightRef.current?.classList.remove('is-active')}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img
          src={heroGrill}
          alt="Bistecca sulla brace, De Matteo alla Brace"
          className="w-full h-full object-cover opacity-[0.34]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/55 to-noir" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40" />
      <div ref={spotlightRef} className="spotlight hidden md:block" />

      <EmberField count={22} />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="tracked text-[0.72rem] text-gold-soft/80 mb-6"
        >
          {hero.eyebrow}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="drop-shadow-[0_4px_40px_rgba(217,178,92,0.25)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-8 font-display italic text-2xl md:text-3xl text-cream max-w-xl"
        >
          {hero.headline}
          <br />
          <span className="text-gold-soft text-lg md:text-xl not-italic tracked">{hero.supporting}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href={contatti.bookingUrl} target="_blank" rel="noreferrer" className="btn-gold">
            {hero.cta.primary}
          </a>
          <a href="#storia" className="btn-outline">
            {hero.cta.secondary}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="tracked text-[0.6rem] text-cream/50">scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
