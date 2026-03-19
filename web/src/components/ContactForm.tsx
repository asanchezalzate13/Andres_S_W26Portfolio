import { site } from "@/lib/site";

export function ContactForm() {
  const action = `https://formsubmit.co/${encodeURIComponent(site.contactEmail)}`;

  return (
    <form
      action={action}
      method="POST"
      className="mt-8 space-y-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
    >
      <input type="hidden" name="_subject" value={`Portfolio inquiry — ${site.name}`} />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--foreground)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send message
      </button>

      <p className="text-xs text-[var(--muted)]">
        Delivered via FormSubmit. Set <code>contactEmail</code> in <code>src/lib/site.ts</code> to
        your address and confirm the first submission in your inbox.
      </p>
    </form>
  );
}
