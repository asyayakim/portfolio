export default function ContactPage() {
  return (
    <main className="">
      {" "}
      <h1 className="">Contact Me</h1>{" "}
      <p className="mb-4 text-sm">
         Feel free to reach out! This is just a mock form for
        demonstration. {" "}
      </p>
      {" "}
      <form className="space-y-4">
        {" "}
        <div>
          {" "}
          <label className="block text-sm font-medium mb-1">Name</label>       
          {" "}
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {" "}
        </div>
        {" "}
        <div>
        {" "}
          <label className="block text-sm font-medium mb-1">Email</label>       
          {" "}
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {" "}
        </div>
        {" "}
        <div>
          {" "}
          <label className="block text-sm font-medium mb-1">Message</label>     
          {" "}
          <textarea
            rows={4}
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {" "}
        </div>
        {" "}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
           Send Message {" "}
        </button>
        {" "}
      </form>
      {" "}
    </main>
  );
}
