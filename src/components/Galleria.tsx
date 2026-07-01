import slicedRibeye from '../assets/images/sliced-ribeye.jpg'
import ribeye2 from '../assets/images/ribeye-2.jpg'
import tbonePlated from '../assets/images/tbone-plated.jpg'
import chefBlock from '../assets/images/chef-block.jpg'
import chefPortrait from '../assets/images/chef-portrait-bw.jpg'
import macelleria from '../assets/images/macelleria.jpg'
import sevenYears from '../assets/images/seven-years.jpg'
import { galleria } from '../content'
import Reveal from './Reveal'

const shots = [
  { src: tbonePlated, alt: 'Tomahawk servito al tavolo' },
  { src: slicedRibeye, alt: 'Ribeye tagliato sulla brace' },
  { src: chefBlock, alt: 'Chef prepara la carne al ceppo' },
  { src: macelleria, alt: 'Macelleria da Umberto, dal 1979' },
  { src: chefPortrait, alt: 'Ritratto dello chef de Matteo' },
  { src: ribeye2, alt: 'Bistecca alla brace tagliata' },
  { src: sevenYears, alt: '7 anni di De Matteo alla Brace' },
]

export default function Galleria() {
  return (
    <section id="galleria" className="relative bg-noir py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="tracked text-[0.72rem] text-gold-soft/80">{galleria.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-cream">{galleria.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={galleria.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {galleria.cta} · {galleria.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className="relative aspect-square overflow-hidden group">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[0.65rem] tracked text-cream/90">{s.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
