import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import atmosferaWine from '../assets/images/atmosfera-wine.jpg'
import chefCandle from '../assets/images/chef-candle.jpg'
import { atmosfera } from '../content'
import Reveal from './Reveal'

export default function Atmosfera() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['6%', '-10%'])

  return (
    <section id="atmosfera" ref={ref} className="relative bg-noir-2 py-28 md:py-36 overflow-hidden grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{atmosfera.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-cream">{atmosfera.title}</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-cream/70 leading-relaxed">{atmosfera.body}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div style={{ y: y1 }} className="relative aspect-[3/4] overflow-hidden mt-10 md:mt-16">
            <img src={chefCandle} alt="Candela di Wagyu accesa in sala" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-2/60 to-transparent" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative aspect-[3/4] overflow-hidden">
            <img src={atmosferaWine} alt="Cena romantica alla Braceria de Matteo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-2/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
