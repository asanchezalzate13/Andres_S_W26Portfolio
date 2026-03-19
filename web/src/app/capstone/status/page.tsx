export default function CapstoneStatusPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Status reports</h2>
      <p>
        Below is a concise template for weekly or milestone-based reporting. Paste excerpts from
        your actual capstone status docs, or link to PDFs in <code>public/capstone/</code>.
      </p>

      <h3>Week / milestone [N] — [date range]</h3>
      <ul>
        <li>
          <strong>Completed:</strong> [e.g., booking validation endpoint, listing filters, Kotlin
          screen wiring]
        </li>
        <li>
          <strong>In progress:</strong> [e.g., error UX, admin stubs, deployment checklist]
        </li>
        <li>
          <strong>Blockers:</strong> [devices, credentials, scope disagreements—be specific]
        </li>
        <li>
          <strong>Risks:</strong> [integration drift, demo data quality, time to document]
        </li>
        <li>
          <strong>Decisions:</strong> [API shape changes, role model updates, deferred features]
        </li>
      </ul>

      <h3>Week / milestone [N+1] — [date range]</h3>
      <ul>
        <li>
          <strong>Completed:</strong> [...]
        </li>
        <li>
          <strong>In progress:</strong> [...]
        </li>
        <li>
          <strong>Blockers:</strong> [...]
        </li>
      </ul>
    </article>
  );
}
