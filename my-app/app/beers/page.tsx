const beers = [
  {
    name: "Neighborhood Lager",
    style: "Lager",
    abv: "5%",
    img:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Seasonal IPA",
    style: "IPA",
    abv: "6.5%",
    img:
      "https://images.unsplash.com/photo-1515706886581-5ec65bda8063?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Beers() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Beers</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {beers.map((beer) => (
          <div key={beer.name} className="bg-white rounded shadow overflow-hidden">
            <img
              src={beer.img}
              alt={beer.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{beer.name}</h2>
              <p className="text-sm">
                {beer.style} – {beer.abv} ABV
              </p>
              <a href="/order" className="text-[--color-accent] underline">
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
