import { esperienze, contatti } from '../content'
import Reveal from './Reveal'
import Flame from './Flame'

export default function Esperienze() {
  return (
    <section id="esperienze" className="relative bg-noir-2 py-28 md:py-36 grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{esperienze.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-cream">{esperienze.title}</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-cream/70 leading-relaxed">{esperienze.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gold/10">
          {esperienze.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="bg-noir-2 p-9 md:p-10">
              <Flame className="w-6 h-6 text-gold mb-6" />
              <h3 className="font-display text-2xl text-cream mb-1">{item.title}</h3>
              <p className="font-display italic text-gold-soft/80 text-sm mb-3">{item.subtitle}</p>
              <p className="text-cream/65 text-sm leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <a href={contatti.bookingUrl} className="btn-gold">
            {esperienze.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
