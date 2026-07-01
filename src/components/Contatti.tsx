import { contatti } from '../content'
import Reveal from './Reveal'
import Flame from './Flame'
import EmberField from './EmberField'

const mapQuery = encodeURIComponent('De Matteo alla Brace, Maddaloni CE')

export default function Contatti() {
  return (
    <section id="contatti" className="relative bg-noir-2 py-28 md:py-36 grain overflow-hidden">
      <EmberField count={10} className="opacity-60" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{contatti.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-10 text-cream">{contatti.title}</h2>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.15} className="flex gap-5">
              <Flame className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="tracked text-[0.65rem] text-cream/45 mb-1">Dove siamo</p>
                <p className="font-display text-xl text-cream">{contatti.address}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex gap-5">
              <Flame className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="tracked text-[0.65rem] text-cream/45 mb-1">Orari</p>
                <p className="font-display text-xl text-cream">{contatti.hoursLabel}</p>
                <p className="text-cream/55 text-sm">{contatti.hoursSub}</p>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="flex gap-5">
              <Flame className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="tracked text-[0.65rem] text-cream/45 mb-1">Contatti diretti</p>
                <a href={`tel:${contatti.phone.replace(/\s/g, '')}`} className="block font-display text-xl text-cream hover:text-gold transition-colors">
                  {contatti.phone}
                </a>
                <a href={`mailto:${contatti.email}`} className="text-cream/55 text-sm hover:text-gold transition-colors">
                  {contatti.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href={contatti.bookingUrl} className="btn-gold">
              Prenota un tavolo
            </a>
            <a href={contatti.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline">
              Seguici su Instagram
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
            className="relative block h-full min-h-[360px] border border-gold/20 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,178,92,0.12),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
              <Flame className="w-9 h-9 text-gold" />
              <p className="font-display text-2xl text-cream">De Matteo alla Brace</p>
              <p className="tracked text-xs text-cream/50">Apri in Google Maps</p>
            </div>
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
