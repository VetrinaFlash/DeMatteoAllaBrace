import pressArticle from '../assets/images/press-article.jpg'
import { riconoscimenti } from '../content'
import Reveal from './Reveal'
import Flame from './Flame'

const marqueeItems = [
  'Italy’s Top 50 Steak House 2026',
  'Gambero Rosso — Ristoranti d’Italia 2026',
  'Meat Japan — Wagyu Selectors',
  'Dal 1979, Macelleria di Famiglia',
]

export default function Riconoscimenti() {
  return (
    <section id="riconoscimenti" className="relative bg-noir-2 py-10 grain">
      <div className="border-y border-gold/15 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 mx-6 text-cream/60">
              <Flame className="w-3.5 h-3.5 text-gold" />
              <span className="tracked text-xs">{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{riconoscimenti.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-cream">{riconoscimenti.title}</h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/10">
          {riconoscimenti.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12} className="bg-noir-2 p-9 md:p-10 h-full">
              <Flame className="w-6 h-6 text-gold mb-6" />
              <h3 className="font-display text-2xl text-cream mb-3">{item.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden border border-gold/20">
            <img src={pressArticle} alt="Rassegna stampa De Matteo alla Brace" className="w-full h-auto opacity-90" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
