export default function CapstonePlanPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project plan</h2>
      <p>
        A practical academic plan ties scope to weeks. Replace dates and milestones with your
        team&apos;s real schedule; keep artifacts (minutes, boards, or Gantt exports) in{" "}
        <code>public/capstone/</code> if you need static links.
      </p>
      <h3>Phase 1 — Discovery &amp; baseline architecture</h3>
      <ul>
        <li>Confirm personas, primary journeys, and out-of-scope items</li>
        <li>Stand up repository structure, environments, and API skeleton</li>
        <li>Draft initial risk list (integration, data model changes, demo dependencies)</li>
      </ul>
      <h3>Phase 2 — Vertical slice &amp; integration</h3>
      <ul>
        <li>Implement core entities and persistence; seed demo data</li>
        <li>Connect mobile client to happiest-path flows; log defects</li>
        <li>Weekly status: scope, blockers, decisions</li>
      </ul>
      <h3>Phase 3 — Hardening &amp; demonstration</h3>
      <ul>
        <li>Error handling, validation messages, and documentation pass</li>
        <li>Rehearse demo script; capture screenshots for portfolio</li>
        <li>Finalize README, API notes, and known limitations</li>
      </ul>
    </article>
  );
}
