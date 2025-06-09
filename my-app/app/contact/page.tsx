export default function Contact() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>
        Reach us anytime at
        <a href="mailto:info@smallandlocalbeer.co" className="underline ml-1">
          info@smallandlocalbeer.co
        </a>
        .
      </p>
      <form className="space-y-2 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Message"
          className="border p-2 w-full"
          rows={4}
        ></textarea>
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
