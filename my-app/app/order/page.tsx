export default function Order() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Order</h1>
      <p>
        We partner with a local delivery service so you can enjoy our beers at
        home. Click the link below to visit our online shop and schedule a
        pickup or delivery time.
      </p>
      <a
        href="https://example.com"
        className="inline-block bg-[--color-secondary] text-black px-4 py-2 rounded"
      >
        Start Your Order
      </a>
    </main>
  );
}
