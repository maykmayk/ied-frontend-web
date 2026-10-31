// Importiamo il componente Card che abbiamo scritto in src/components/Card.tsx.
import Card from './components/Card.tsx'

// App è il componente principale: contiene tutta la pagina.
export default function App() {
  return (
    // min-h-screen: alta almeno quanto lo schermo. bg-gray-50: grigio chiarissimo. p-8: spazio interno.
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Qui c'è la classe Tailwind sul titolo: text-blue-600 lo colora di blu.
          È il controllo finale dell'incontro: se il titolo è blu, Tailwind funziona. */}
      <h1 className="text-3xl font-bold text-blue-600">Lezione 1 · Dalla pagina ai componenti</h1>

      {/* grid: mette gli elementi in una griglia. gap-4: spazio tra gli elementi.
          sm:grid-cols-3: da schermi medi in su, 3 colonne. */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        {/* Lo stesso componente scritto tre volte: è questo il vantaggio dei componenti.
            Per cambiare l'aspetto di tutte le card modifichi un solo file: Card.tsx. */}
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}
