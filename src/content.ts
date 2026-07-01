// Contenuti del sito — testi reali raccolti dal profilo Instagram
// @dematteo_allabrace. Le voci segnate con TODO vanno confermate/sostituite
// dal cliente (indirizzo, telefono, link prenotazioni, menu, eventi).

export const nav = [
  { label: 'La Storia', href: '#storia' },
  { label: 'Riconoscimenti', href: '#riconoscimenti' },
  { label: 'La Materia Prima', href: '#materia-prima' },
  { label: 'Atmosfera', href: '#atmosfera' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
]

export const hero = {
  eyebrow: 'Maddaloni · Caserta',
  tagline: '7 anni di passione, ricerca e dedizione.',
  subline: 'Non è mai solo una bistecca.',
  cta: { primary: 'Prenota un tavolo', secondary: 'Scopri la storia' },
}

export const storia = {
  eyebrow: 'La Storia',
  title: 'Due fratelli, un fuoco, una promessa',
  paragraphs: [
    'La storia della braceria dei fratelli de Matteo a Maddaloni, in provincia di Caserta, è una storia di lotte, conquiste e "bistecche" lanciate contro ogni ostacolo.',
    'Umberto e Daniele de Matteo nascono in una famiglia di macellai: per oltre 70 anni, ogni mattina, qualcuno della famiglia de Matteo ha aperto la serranda di una macelleria. Da quella tradizione è nato il sogno di una steakhouse di livello, in una terra famosa per pizza e mare.',
    'Dopo 7 mesi dall’apertura rischiavamo di chiudere. Oggi siamo tra le migliori 50 Steakhouse d’Italia.',
  ],
  stats: [
    { value: '1979', label: 'Macelleria di famiglia' },
    { value: '7', label: 'Anni di Braceria' },
    { value: 'Top 50', label: 'Steakhouse d’Italia 2026' },
  ],
}

export const riconoscimenti = {
  eyebrow: 'Riconoscimenti',
  title: 'La qualità, certificata',
  items: [
    {
      title: 'Italy’s Top 50 Steak House 2026',
      body: 'De Matteo alla Brace entra nelle 50 migliori bracerie d’Italia secondo Braciamiancora.',
    },
    {
      title: 'Gambero Rosso — Ristoranti d’Italia 2026',
      body: 'Presente nella guida Ristoranti d’Italia 2026 del Gambero Rosso, tra i migliori indirizzi per mangiare e bere.',
    },
    {
      title: 'Meat Japan — Wagyu Selectors since 1953',
      body: 'Selezione diretta di Wagyu giapponese da uno dei più antichi selezionatori al mondo.',
    },
  ],
}

export const materiaPrima = {
  eyebrow: 'La Materia Prima',
  title: 'Il rito della carne',
  intro:
    'Frollature lunghe, tagli scelti uno a uno, wagyu giapponese e italiano: ogni bistecca nasce da una selezione ossessiva della materia prima, e finisce sulla brace viva.',
  features: [
    {
      title: 'Wagyu Giapponese',
      body: 'Marezzatura A5, selezionata da Meat Japan, storico selezionatore di Kobe dal 1953.',
    },
    {
      title: 'Frollatura Lunga',
      body: 'Dry aging in cella dedicata, per una carne più concentrata e profonda nel gusto.',
    },
    {
      title: 'La Candela di Wagyu',
      body: 'Un dettaglio unico della sala: una candela realizzata con grasso di Wagyu, accesa al tavolo.',
    },
  ],
}

export const atmosfera = {
  eyebrow: 'Atmosfera',
  title: 'Il fuoco vivo, la sala, la brace',
  body: 'Mattoni a vista, luce di candela, brace sempre accesa: un ambiente pensato per rallentare il tempo e godersi ogni portata, tra amici o in un’occasione speciale.',
}

export const galleria = {
  eyebrow: 'Galleria',
  title: 'Dalla brace alla tavola',
  cta: 'Seguici su Instagram',
  // TODO: sostituire con foto/video ufficiali ad alta risoluzione forniti dal cliente
  instagramHandle: '@dematteo_allabrace',
  instagramUrl: 'https://www.instagram.com/dematteo_allabrace/',
}

export const contatti = {
  eyebrow: 'Contatti',
  title: 'Vi aspettiamo alla brace',
  address: 'Maddaloni (CE)', // TODO: indirizzo completo da confermare
  hoursLabel: 'Aperti tutti i giorni a cena',
  hoursSub: 'Chiusi a pranzo',
  phone: '+39 000 000 0000', // TODO: numero reale
  email: 'info@dematteoallabrace.it', // TODO: email reale
  bookingUrl: '#', // TODO: link prenotazione (TheFork / WhatsApp)
  instagramUrl: 'https://www.instagram.com/dematteo_allabrace/',
}

export const events = {
  eyebrow: 'Eventi',
  title: 'Serate a tema ed eventi speciali',
  // TODO: elenco eventi reale da inserire (cene a tema, degustazioni wagyu, serate live, ecc.)
  placeholder:
    'Stiamo raccogliendo i dettagli dei prossimi eventi da inserire in questa sezione: cene a tema, degustazioni e serate speciali della Braceria.',
}
