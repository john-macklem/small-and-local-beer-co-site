export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold">Small and Local Beer Co.</h1>
      <p className="text-xl">Ottawa's Neighborhood Brewery</p>
      <div className="flex gap-4">
        <a href="/beers" className="bg-[--color-secondary] text-black px-4 py-2 rounded">Browse Our Beers</a>
        <a href="/taproom" className="border border-[--color-secondary] text-[--color-secondary] px-4 py-2 rounded">Visit Our Taproom</a>
      </div>
    </main>
  );
}
