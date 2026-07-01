import { contatti, nav } from '../content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative bg-noir pt-20 pb-10 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <Logo />
          <p className="mt-6 text-cream/50 text-sm max-w-sm">
            Braceria &amp; Steakhouse a Maddaloni, provincia di Caserta.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 text-center sm:text-left border-t border-gold/10 pt-12">
          <div>
            <p className="tracked text-[0.65rem] text-gold-soft/70 mb-4">Menu</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-cream/60 hover:text-gold text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tracked text-[0.65rem] text-gold-soft/70 mb-4">Contatti</p>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>{contatti.address}</li>
              <li>{contatti.phone}</li>
              <li>{contatti.email}</li>
            </ul>
          </div>

          <div>
            <p className="tracked text-[0.65rem] text-gold-soft/70 mb-4">Social</p>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>
                <a href={contatti.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/35 text-xs">
          <p>© {new Date().getFullYear()} De Matteo alla Brace. Tutti i diritti riservati.</p>
          <p className="tracked">Maddaloni · Caserta</p>
        </div>
      </div>
    </footer>
  )
}
