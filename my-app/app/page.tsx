import Image from "next/image";

export default function Home() {
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

  return (
    <main>
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=1600&q=80"
          alt="Brewhouse background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="relative z-10 space-y-6 bg-black/50 p-6 rounded">
          <h1 className="text-5xl md:text-7xl font-semibold font-display">Small and Local</h1>
          <p className="text-xl md:text-2xl">Ottawa's Neighborhood Brewery</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/beers" className="bg-[--color-secondary] text-black px-5 py-2 rounded">
              Browse Our Beers
            </a>
            <a
              href="/taproom"
              className="border border-[--color-secondary] text-[--color-secondary] px-5 py-2 rounded"
            >
              Visit Our Taproom
            </a>
          </div>
        </div>
      </section>
      <section className="p-8 text-center space-y-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p>
          Small and Local Beer Co. brews fresh, approachable beers while staying
          rooted in our community. We partner with nearby farmers and suppliers
          to keep things sustainable and truly local.
        </p>
        <p>
          Join us in the taproom or at neighborhood events to share a pint and
          celebrate what makes Ottawa special.
        </p>
      </section>
      <section className="p-8 bg-[--color-secondary]">
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Beers</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {beers.map((beer) => (
            <div key={beer.name} className="bg-white rounded shadow overflow-hidden">
              <img
                src={beer.img}
                alt={beer.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="font-semibold text-lg">{beer.name}</h3>
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
      </section>
    </main>
  );
}
