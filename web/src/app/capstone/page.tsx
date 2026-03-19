export default function CapstoneOverviewPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Overview</h2>
      <p>
        <strong>ParkSpot</strong> is a capstone project that explores a modular approach to
        parking space rental: owners can list availability, renters can discover and book slots, and
        the system keeps critical flows consistent across clients.
      </p>
      <p>
        The implementation deliberately separates concerns—an Express-based API for business rules
        and data access, with a Kotlin-oriented mobile experience for field use cases. Documentation
        in this section mirrors what a stakeholder would expect during delivery: vision, explicit
        requirements, planning artifacts, design views, ongoing status, and implementation notes.
      </p>
      <p>
        Use the pills above to move through each deliverable. Before submission, swap any generic
        text with your team&apos;s final capstone language and add screenshots or PDFs where
        indicated.
      </p>
    </article>
  );
}
