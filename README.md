# De Matteo alla Brace — sito web

Sito vetrina per la Braceria & Steakhouse **De Matteo alla Brace** (Maddaloni, Caserta).
Costruito con React + TypeScript + Vite, Tailwind CSS v4 e Framer Motion. Output statico,
pronto per il deploy su Cloudflare Pages.

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
```

I file pronti per il deploy vengono generati in `dist/`.

## Deploy su Cloudflare Pages

**Opzione A — collegare il repository (consigliata)**

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Seleziona questo repository e il branch da pubblicare.
3. Impostazioni build:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Ogni push al branch farà una nuova build automatica.

**Opzione B — deploy manuale da terminale**

```bash
npm run build
npx wrangler pages deploy dist --project-name=dematteo-alla-brace
```

## Struttura contenuti

Tutti i testi (storia, riconoscimenti, orari, contatti, ecc.) sono centralizzati in
`src/content.ts`: per modificare un testo del sito basta cambiarlo lì, senza toccare i componenti.

Le immagini reali del locale sono in `src/assets/images/` (estratte dagli screenshot Instagram
forniti). Sono foto a bassa risoluzione: **vanno sostituite con le foto/video ufficiali ad alta
definizione** del cliente per un risultato definitivo — basta sostituire i file con lo stesso nome
in quella cartella.

### Dati ancora da confermare (segnati con `TODO` in `src/content.ts`)

- Indirizzo completo
- Numero di telefono / WhatsApp
- Email
- Link di prenotazione (es. TheFork, WhatsApp Business)
- Sezione Eventi (attualmente assente dal sito: aggiungere quando saranno disponibili i dettagli)
