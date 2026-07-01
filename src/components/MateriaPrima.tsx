import wagyuBox from '../assets/images/wagyu-box.jpg'
import wagyuHalved from '../assets/images/wagyu-halved.jpg'
import wagyuMarbled from '../assets/images/wagyu-marbled.jpg'
import wagyuHand from '../assets/images/wagyu-hand.jpg'
import { materiaPrima } from '../content'
import Reveal from './Reveal'

const images = [
  { src: wagyuBox, alt: 'Wagyu giapponese Meat Japan, sustainable Wagyu Juku', span: 'row-span-2' },
  { src: wagyuHalved, alt: 'Bistecche frollate de Matteo alla Brace tagliate a metà', span: '' },
  { src: wagyuMarbled, alt: 'Tagli di Wagyu marezzato', span: '' },
  { src: wagyuHand, alt: 'Chef che seleziona una fetta di Wagyu', span: 'col-span-2' },
]

export default function MateriaPrima() {
  return (
    <section id="materia-prima" className="relative bg-noir py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="tracked text-[0.72rem] text-gold-soft/80">{materiaPrima.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-7 text-cream">{materiaPrima.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-cream/75 leading-relaxed mb-10 max-w-lg">{materiaPrima.intro}</p>
          </Reveal>

          <div className="space-y-8">
            {materiaPrima.features.map((f, i) => (
              <Reveal key={f.title} delay={0.2 + i * 0.1} className="flex gap-5">
                <span className="font-display text-2xl text-gold-soft/60 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream mb-1.5">{f.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-3 auto-rows-[160px] md:auto-rows-[190px]">
            {images.map((img, i) => (
              <div key={i} className={`relative overflow-hidden group ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
