// Questo è il punto di ingresso: il primo file JavaScript che il browser esegue.

// StrictMode è un aiuto di React: in sviluppo fa controlli extra e ti avvisa dei problemi.
import { StrictMode } from 'react'
// createRoot collega React alla pagina HTML.
import { createRoot } from 'react-dom/client'
// BrowserRouter permetterà di avere più pagine con indirizzi veri (/post/42).
// Il pacchetto si chiama "react-router". Molti tutorial usano ancora "react-router-dom": non esiste più.
import { BrowserRouter } from 'react-router'
// Importare il CSS qui lo rende attivo in tutta l'applicazione (e con lui Tailwind).
import './index.css'
// Il componente principale della nostra applicazione.
import App from './App.tsx'

// Cerca in index.html l'elemento <div id="root"></div>: React disegnerà tutto lì dentro.
// Il "!" dice a TypeScript: "ti assicuro che questo elemento esiste".
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Per ora il router è solo "montato" attorno all'app: non definiamo ancora pagine.
        Lo useremo davvero all'incontro 8. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
