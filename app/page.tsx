export default function HomePage() {
  return (
    <main className="min-h-screen px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Diepgravende verhalen. Scherp geschreven.
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          De Standaard brengt verhalen die ertoe doen.
          Ontdek, lees en laat je inspireren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <a
            href="/flamenco"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <img
              src="/flamenco.jpeg"
              alt="Flamenco"
              className="h-48 w-full object-cover object-top rounded-xl mb-4"
            />

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              MODE
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Flamenco-mode in Sevilla
            </h2>

            <p className="text-gray-600 mb-4">
              Traditie, identiteit en mode komen samen tijdens de Feria.
            </p>

            <p className="font-semibold">
              Lees artikel →
            </p>
          </a>

          <a
            href="/valerie"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <img
              src="/valerie.jpeg"
              alt="Valerie Mannaerts"
              className="h-48 w-full object-cover object-center rounded-xl mb-4"
            />

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              CULTUUR
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Valerie Mannaerts Expo
            </h2>

            <p className="text-gray-600 mb-4">
              Een visuele reis door sculpturen, textiel en installaties.
            </p>

            <p className="font-semibold">
              Lees artikel →
            </p>
          </a>

          <a
            href="/zwangerschap"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <img
              src="/zwangerschap.jpeg"
              alt="Zwangerschap"
              className="h-48 w-full object-cover object-top rounded-xl mb-4"
            />

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              BINNENLAND
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Zwangerschap & Stijl
            </h2>

            <p className="text-gray-600 mb-4">
              Comfort, identiteit en mode tijdens de zwangerschap.
            </p>

            <p className="font-semibold">
              Lees artikel →
            </p>
          </a>

        </div>
      </div>
    </main>
  );
}