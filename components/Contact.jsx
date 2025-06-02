// app/components/Contact.jsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-20 bg-white text-center"
    >
      <h2 className="text-3xl font-bold text-navy mb-8">Let’s Talk</h2>
      <p className="mb-2 text-gray-600">
        Tell us below how we can help!
      </p>
      <p className="mb-6 text-gray-600">
        We’ll get back to you within 24hrs.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mx-auto max-w-xl space-y-4"
      >
        {/* Hidden input for Netlify forms (if you later use Netlify) */}
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label className="sr-only" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal focus:ring focus:ring-teal/50"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal focus:ring focus:ring-teal/50"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            placeholder="Message"
            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:border-teal focus:ring focus:ring-teal/50"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-block rounded-md bg-teal px-6 py-3 text-lg font-semibold text-white hover:bg-teal/90 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}