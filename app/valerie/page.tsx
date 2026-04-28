export default function ValeriePage() {
  return (
    <main className="min-h-screen px-8 py-12 bg-white">
      <div className="max-w-5xl mx-auto">

        <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
          Media & Cultuur
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Eerste overzichtsexpo voor Valerie Mannaerts
        </h1>

        <p className="mb-4 text-sm text-gray-500">
          12 mei 2025 • Door De Standaard Redactie
        </p>

        <p className="mb-8 text-xl text-gray-700 leading-8">
          Kunst ontstaat waar materiaal, emotie en verbeelding samenkomen.
        </p>

        <img
          src="/valerie.jpeg"
          alt="Valerie Mannaerts Expo"
          className="w-full rounded-2xl mb-10"
        />

        <p className="mb-6 text-lg leading-8 text-gray-700">
          In M Leuven vindt de eerste grote overzichtstentoonstelling plaats
          van kunstenares Valerie Mannaerts.
        </p>

        <blockquote className="border-l-4 pl-6 italic text-xl text-gray-600 my-10">
          “Het besef dat ik mijn eerste kunstwerk had gemaakt,
          was een explosie in mijn kop.”
        </blockquote>

        <p className="text-lg leading-8 text-gray-700">
          Haar werk toont hoe kunst niet alleen bekeken,
          maar ook gevoeld kan worden.
        </p>

      </div>
    </main>
  );
}