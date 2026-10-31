# Lezione 1 · Dalla pagina HTML ai componenti

Questo è il progetto com'è **alla fine dell'incontro 1**. Se sei rimasto indietro o il tuo progetto non parte, copia questa cartella e riparti da qui.

## Cosa c'è dentro

Una pagina con un titolo blu e tre card uguali. Le card sono lo **stesso componente** `<Card />` scritto tre volte.

Il progetto usa:

| Strumento | A cosa serve |
| --- | --- |
| **React** | Costruire l'interfaccia a pezzi, i componenti |
| **TypeScript** | JavaScript con i tipi (file `.ts` e `.tsx`). Per ora lo vedrai solo nei nomi dei file |
| **Vite** | Avvia il progetto sul tuo computer e lo compila |
| **Tailwind CSS 4** | Lo stile scritto direttamente nel markup, con classi come `text-blue-600` |
| **React Router** | Più pagine con indirizzi veri. È installato ma lo useremo all'incontro 8 |

## Prima di iniziare

Servono **Node.js** (versione LTS, almeno 22.22) e **VS Code**. Per controllare Node apri il terminale e scrivi:

```bash
node -v
```

Deve rispondere con un numero uguale o maggiore di `v22.22.0`. Se risponde `command not found` o un numero più basso, installa Node.js LTS da https://nodejs.org e riapri il terminale.

## Avviare questa cartella

Dal terminale, dentro la cartella `lezione-01`:

```bash
npm install
npm run dev
```

- `npm install` legge `package.json` e scarica nella cartella `node_modules` tutti i pacchetti elencati. Si fa **una volta sola** (e di nuovo quando cambia `package.json`). Alla fine dice qualcosa come `found 0 vulnerabilities`.
- `npm run dev` avvia il server di sviluppo di Vite. Lascialo acceso mentre lavori. Deve scrivere:

```text
  VITE v8.3.5  ready in 145 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Apri l'indirizzo dopo `Local:` nel browser. Per spegnere il server premi `Ctrl + C` nel terminale.

> Il numero della versione e i millisecondi possono essere diversi: non è un problema.

### ✓ Controllo finale

Vedi la pagina con il titolo **blu** e tre card. Se il titolo è blu, Tailwind funziona. Prova: apri `src/App.tsx`, cambia `text-blue-600` in `text-red-600` e salva. La pagina si aggiorna da sola, senza ricaricare.

## Come è fatto il progetto

```text
lezione-01/
├── index.html            La pagina HTML, quasi vuota: ha solo <div id="root">
├── package.json          L'elenco dei pacchetti e dei comandi (npm run dev, ...)
├── vite.config.ts        La configurazione di Vite (con i plugin React e Tailwind)
├── tsconfig*.json        La configurazione di TypeScript (per ora non si tocca)
├── public/
│   └── favicon.svg       L'icona della scheda del browser
└── src/
    ├── main.tsx          Il punto di ingresso: collega React alla pagina
    ├── index.css         Una riga che carica Tailwind
    ├── App.tsx           Il componente principale: titolo + tre card
    └── components/
        └── Card.tsx      Il componente Card
```

## Cosa succede quando apri la pagina

1. Il browser apre `index.html`. Dentro c'è un `<div id="root"></div>` vuoto e uno `<script>` che carica `src/main.tsx`.
2. `main.tsx` dice a React: «disegna il componente `App` dentro il div `root`».
3. `App.tsx` restituisce il titolo e tre volte `<Card />`.
4. `Card.tsx` restituisce l'HTML di una singola card.
5. `index.css` ha attivato Tailwind, quindi le classi come `text-blue-600` diventano colori veri.

## Leggere il codice riga per riga

Ogni file ha dei **commenti** che spiegano quasi ogni riga. Leggili nell'ordine in cui il browser li usa:

1. [`index.html`](index.html)
2. [`src/main.tsx`](src/main.tsx)
3. [`src/App.tsx`](src/App.tsx)
4. [`src/components/Card.tsx`](src/components/Card.tsx)
5. [`src/index.css`](src/index.css)
6. [`vite.config.ts`](vite.config.ts)

I commenti in JavaScript e TypeScript iniziano con `//` (una riga) oppure stanno tra `/* ... */`. Dentro il JSX, cioè dentro il `return`, si scrivono così: `{/* commento */}`.

### Le quattro parole nuove

- **Componente**: una funzione che restituisce un pezzo di interfaccia. Il nome inizia con la maiuscola.
- **JSX**: la sintassi che sembra HTML dentro il JavaScript. Differenze da HTML: `className` invece di `class`, e ogni tag va chiuso (`<Card />`).
- **`import` / `export`**: un file mette a disposizione una cosa con `export`, un altro la usa con `import`. Così i componenti stanno in file separati.
- **Classe utility (Tailwind)**: una classe che fa una cosa sola. `p-4` aggiunge spazio interno, `font-bold` rende il testo grassetto, `text-blue-600` lo colora di blu. Si combinano scrivendole una dopo l'altra.

## Come è stato creato (per rifarlo da zero)

Questi sono i comandi usati per creare la cartella. Li rifai nell'incontro 1, tutti insieme.

```bash
# 1. Crea il progetto con Vite, template React + TypeScript
npm create vite@latest lezione-01 -- --template react-ts

# 2. Entra nella cartella
cd lezione-01

# 3. Scarica i pacchetti del template
npm install

# 4. Aggiungi Tailwind CSS 4 (con il suo plugin per Vite) e React Router
npm install tailwindcss @tailwindcss/vite react-router
```

Poi due modifiche a mano:

1. In `vite.config.ts`: importa `tailwindcss from '@tailwindcss/vite'` e aggiungi `tailwindcss()` all'elenco `plugins`.
2. In `src/index.css`: cancella tutto e scrivi solo `@import "tailwindcss";`.

Infine `npm run dev`.

## Problemi comuni

| Cosa vedi | Cosa vuol dire | Cosa fare |
| --- | --- | --- |
| `command not found: npm` o `node` | Node.js non è installato, o il terminale è stato aperto prima | Installa Node.js LTS e riapri il terminale |
| `npm error ENOENT ... package.json` | Sei nella cartella sbagliata | `cd lezione-01`, poi riprova |
| Il titolo non è blu | Tailwind non è attivo | Controlla che `index.css` abbia `@import "tailwindcss";` e che `vite.config.ts` abbia `tailwindcss()` |
| `Port 5173 is in use` | C'è già un altro server Vite acceso | Chiudilo con `Ctrl + C` oppure usa l'indirizzo che Vite propone |
| `Cannot find module 'react-router-dom'` | Hai copiato un vecchio tutorial | Il pacchetto si chiama `react-router`. `react-router-dom` non esiste più |
| Cambio un file e non succede nulla | Il file non è salvato, o il server è spento | Salva con `Cmd + S` (Mac) o `Ctrl + S` (Windows). Controlla che `npm run dev` sia ancora acceso |

## Compito per la volta dopo

Rifai in componenti una pagina HTML del primo anno, con **almeno tre componenti**.
