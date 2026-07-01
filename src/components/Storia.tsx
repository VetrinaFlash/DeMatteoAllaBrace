import { motion } from 'framer-motion'
import founders from '../assets/images/founders.jpg'
import { storia } from '../content'
import Reveal from './Reveal'

export default function Storia() {
  return (
    <section id="storia" className="relative bg-noir py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <div className="absolute -inset-3 border border-gold/25" />
            <img
              src={founders}
              alt="Umberto e Daniele de Matteo con il riconoscimento Italy's Top 50 Steak House 2026"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
          </div>
          <div className="hidden lg:block absolute -bottom-10 -right-6 bg-noir-2 border border-gold/20 px-8 py-6 max-w-[240px]">
            <p className="font-display italic text-gold-soft text-lg leading-snug">
              “Non è mai solo una bistecca.”
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{storia.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8 text-cream">
              {storia.title}
            </h2>
          </Reveal>

          <div className="space-y-5">
            {storia.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <p className="text-cream/75 leading-relaxed text-[0.98rem] md:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
            {storia.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.2 + i * 0.1}>
                <div>
                  <p className="font-display text-3xl md:text-4xl text-gradient-gold">{s.value}</p>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                    className="block w-8 h-px bg-gold my-3 origin-left"
                  />
                  <p className="text-[0.68rem] tracked text-cream/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
