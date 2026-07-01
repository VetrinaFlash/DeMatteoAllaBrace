import { mission } from '../content'
import Reveal from './Reveal'

export default function Mission() {
  return (
    <section className="relative bg-noir py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-display italic text-2xl md:text-3xl text-gold-soft leading-snug">
            “{mission.quote}”
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="hairline block w-24 mx-auto my-8" />
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-cream/65 leading-relaxed">{mission.body}</p>
        </Reveal>
      </div>
    </section>
  )
}
