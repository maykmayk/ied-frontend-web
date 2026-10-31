// Questo file configura Vite, lo strumento che avvia e compila il progetto.

// Il plugin di Vite che permette di usare React (JSX/TSX).
import react from '@vitejs/plugin-react'
// defineConfig serve solo ad avere i suggerimenti dell'editor mentre si scrive la configurazione.
import { defineConfig } from 'vite'
// Il plugin di Vite che fa funzionare Tailwind CSS 4.
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // L'elenco dei plugin attivi. L'ordine qui non è importante.
  plugins: [react(), tailwindcss()],
})
