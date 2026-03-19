export default function CapstoneAnalysisPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Requirements analysis &amp; design</h2>
      <p>
        This section summarizes how requirements became a concrete design. Mirror your course
        deliverables (UML, domain model, sequence diagrams) and embed exported images if desired.
      </p>
      <h3>Domain model (narrative)</h3>
      <p>
        Core concepts typically include <strong>User</strong> (with roles), <strong>Listing</strong>{" "}
        (space metadata and rules), and <strong>Booking</strong> (time bounds and state). Adjust
        names and cardinalities to match your ERD.
      </p>
      <h3>Key sequences</h3>
      <ul>
        <li>
          <strong>Authentication:</strong> credential exchange, token/session strategy, and client
          storage decisions.
        </li>
        <li>
          <strong>Create booking:</strong> validation order, conflict checks, and optimistic vs.
          server-confirmed states.
        </li>
        <li>
          <strong>Owner updates listing:</strong> impact on active bookings; versioning or
          notifications if applicable.
        </li>
      </ul>
      <h3>API design principles</h3>
      <ul>
        <li>Resource-oriented routes with predictable naming</li>
        <li>Consistent error payloads for client handling</li>
        <li>Versioning or compatibility notes if the mobile client lagged the API</li>
      </ul>
    </article>
  );
}
