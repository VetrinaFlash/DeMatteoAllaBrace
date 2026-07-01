import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, contatti } from '../content'
import Flame from './Flame'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-noir/90 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-2 text-cream">
            <Flame className="w-5 h-5 text-gold" />
            <span className="font-script text-2xl" style={{ fontFamily: 'var(--font-script)' }}>
              de Matteo
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.72rem] tracked text-cream/75 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href={contatti.bookingUrl} target="_blank" rel="noreferrer" className="btn-gold hidden lg:inline-flex">
            Prenota
          </a>

          <button
            aria-label="Apri il menu"
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          >
            <span className="block w-7 h-px bg-gold" />
            <span className="block w-5 h-px bg-gold" />
          </button>
        </div>
      </header>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[100] bg-noir grain flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center justify-between h-20 px-6">
                <span className="font-script text-2xl text-gold" style={{ fontFamily: 'var(--font-script)' }}>
                  de Matteo
                </span>
                <button aria-label="Chiudi il menu" onClick={() => setOpen(false)} className="text-cream text-3xl leading-none">
                  &times;
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    className="font-display text-3xl text-cream hover:text-gold transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href={contatti.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * nav.length, duration: 0.5 }}
                  className="btn-gold mt-4"
                  onClick={() => setOpen(false)}
                >
                  Prenota un tavolo
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
