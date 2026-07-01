// Contenuti del sito — testi reali raccolti dal profilo Instagram
// @dematteo_allabrace e dall'HTML del sito attuale dematteoallabrace.it
// (fornito dal cliente). Le voci rimaste segnate con TODO vanno
// confermate/sostituite dal cliente (link prenotazioni, eventi, menu).

export const nav = [
  { label: 'La Storia', href: '#storia' },
  { label: 'Riconoscimenti', href: '#riconoscimenti' },
  { label: 'La Materia Prima', href: '#materia-prima' },
  { label: 'Esperienze', href: '#esperienze' },
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

export const mission = {
  quote:
    'Non è mai solo una bistecca è il nostro slogan, uno stile di vita, una missione da compiere.',
  body: 'Divulghiamo la cultura della bistecca alla brace, creando vere e proprie esperienze, selezionando le migliori carni al mondo, offrendo un servizio attento e curato, in un ambiente intimo e raffinato, in cui ogni ospite si sentirà unico e speciale, eccedendo sempre le sue aspettative. Questo è de Matteo alla Brace.',
}

export const storia = {
  eyebrow: 'La Storia',
  title: 'Due fratelli, un fuoco, una promessa',
  paragraphs: [
    'La storia della braceria dei fratelli de Matteo a Maddaloni, in provincia di Caserta, è una storia di lotte, conquiste e "bistecche" lanciate contro ogni ostacolo.',
    'De Matteo alla Brace è l’evoluzione di una famiglia di macellai: Umberto e Daniele rappresentano la quarta generazione, passando per la prima volta dalle macellerie alla brace, alla ristorazione. Per oltre 70 anni, ogni mattina, qualcuno della famiglia de Matteo ha aperto la serranda di una macelleria.',
    'Dopo 7 mesi dall’apertura rischiavamo di chiudere. Oggi siamo tra le migliori 50 Steakhouse d’Italia.',
  ],
  stats: [
    { value: '4ª Gen.', label: 'Famiglia di macellai' },
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

export const esperienze = {
  eyebrow: 'Experience',
  title: 'Percorsi su misura, per ogni occasione',
  intro:
    'Menu degustazione, tagli rari e serate a tema: un percorso sviluppato a 360° sull’impreziosire il palato e creare il ricordo.',
  items: [
    {
      title: 'Filetti Esotici',
      subtitle: 'L’essenza dei sapori',
      body: 'Canguro, coccodrillo e struzzo: tagli rari selezionati per chi vuole andare oltre il classico.',
    },
    {
      title: 'Percorsi Degustazione',
      subtitle: 'Gold · Premium · Luxury',
      body: 'Menu degustazione come "4 Portate" e "Sfumature di Wagyu", per un’esperienza completa a tavola.',
    },
    {
      title: 'Martedì Romantico',
      subtitle: 'L’evento più richiesto in Campania',
      body: 'Una serata a tema pensata per le coppie: uno degli appuntamenti fissi più richiesti della Braceria.',
    },
    {
      title: 'Butter Aged',
      subtitle: 'Frollatura nel burro',
      body: 'Una frollatura particolare nel burro, per profumi e consistenze che vanno oltre il dry aging classico.',
    },
  ],
  cta: 'Scopri le esperienze',
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
  address: 'Via Mastrantuono 48, Maddaloni (CE)',
  hoursLabel: 'Aperti tutti i giorni a cena',
  hoursSub: 'Chiusi a pranzo',
  phone: '+39 0823 436819',
  email: 'info@dematteoallabrace.it',
  bookingUrl: 'tel:+390823436819', // TODO: sostituire con link diretto (TheFork / WhatsApp) se disponibile
  instagramUrl: 'https://www.instagram.com/dematteo_allabrace/',
}

export const events = {
  eyebrow: 'Eventi',
  title: 'Serate a tema ed eventi speciali',
  // TODO: elenco eventi reale da inserire (cene a tema, degustazioni wagyu, serate live, ecc.)
  placeholder:
    'Stiamo raccogliendo i dettagli dei prossimi eventi da inserire in questa sezione: cene a tema, degustazioni e serate speciali della Braceria.',
}
