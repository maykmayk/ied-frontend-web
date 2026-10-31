// Un componente React è una funzione che restituisce un pezzo di interfaccia.
// Il nome inizia SEMPRE con la maiuscola: è così che React capisce che è un componente e non un tag HTML.
export default function Card() {
  // Quello che sembra HTML dentro il return si chiama JSX: è JavaScript che descrive l'interfaccia.
  return (
    // "className" al posto di "class", perché "class" è una parola riservata di JavaScript.
    // Le classi sono di Tailwind, ognuna fa una cosa sola:
    //   rounded-xl  angoli arrotondati
    //   border      bordo sottile
    //   border-gray-200  colore del bordo
    //   bg-white    sfondo bianco
    //   p-4         spazio interno (padding)
    //   shadow-sm   ombra leggera
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Titolo della card</h2>
      <p className="mt-1 text-gray-600">Un po' di testo dentro la card.</p>
    </div>
  )
}
