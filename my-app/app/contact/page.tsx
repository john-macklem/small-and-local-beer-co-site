export default function Contact() {
  return (
    <main className="p-8 space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-[--color-primary] text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </main>
  );
}
