import Link from "next/link";

export default function CapstoneOverviewPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Overview</h2>
      <p>
        <strong>ParkSpot</strong> is a capstone project that explores a modular approach to parking
        space rental: owners can list availability, renters can discover and book slots, and the
        system keeps critical flows consistent across clients.
      </p>
      <p>
        The implementation separates concerns — an Express-based API for business rules and data
        access, with a Kotlin-oriented mobile experience for field use cases. Documentation in this
        section mirrors what a stakeholder would expect during delivery: vision, explicit requirements,
        planning artifacts, design views, ongoing status, and implementation notes.
      </p>
      <p>
        Use the navigation above for each deliverable. Most sections include a short summary and a
        PDF download for the full document.
      </p>
      <h3>Deliverables map</h3>
      <ul>
        <li>
          <Link href="/capstone/summary">Project summary</Link> — scope, outcomes, stakeholder value
        </li>
        <li>
          <Link href="/capstone/vision">Project vision</Link> — problem, users, product promise
        </li>
        <li>
          <Link href="/capstone/requirements">Requirements</Link> — functional and non-functional
          expectations
        </li>
        <li>
          <Link href="/capstone/plan">Project plan</Link> — phases, milestones, schedule
        </li>
        <li>
          <Link href="/capstone/analysis">Analysis &amp; design</Link> — domain model, sequences, API
          principles
        </li>
        <li>
          <Link href="/capstone/wireframes">Wireframes / mockups</Link> — ParkSpot UI flows in Figma
        </li>
        <li>
          <Link href="/capstone/status">Status reports</Link> — progress, risks, decisions across the
          term
        </li>
        <li>
          <Link href="/capstone/implementation">Implementation</Link> — architecture and how the
          system was built
        </li>
      </ul>
    </article>
  );
}
