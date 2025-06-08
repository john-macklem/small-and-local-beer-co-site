export default function Beers() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Our Beers</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((num) => (
          <div key={num} className="border rounded p-4 shadow-sm">
            <h2 className="font-semibold text-lg">Beer {num}</h2>
            <p className="text-sm text-gray-600">
              Tasting notes and details will appear here.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
