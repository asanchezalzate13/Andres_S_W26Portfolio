export default function CapstoneRequirementsPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project / business requirements</h2>
      <h3>Functional (sample set — align with your SRS)</h3>
      <ul>
        <li>Users can register, authenticate, and maintain a basic profile.</li>
        <li>Owners can create, edit, and retire parking listings with availability metadata.</li>
        <li>Renters can search or browse listings and submit booking requests within rules.</li>
        <li>The system enforces conflict prevention for overlapping bookings where applicable.</li>
        <li>Administrative or support scenarios are stubbed or documented for future terms.</li>
      </ul>
      <h3>Non-functional</h3>
      <ul>
        <li>
          <strong>Security:</strong> Password handling and transport security appropriate to academic
          deployment; secrets not committed to source control.
        </li>
        <li>
          <strong>Maintainability:</strong> Modular routes/controllers; consistent error shape for
          API consumers.
        </li>
        <li>
          <strong>Performance:</strong> Reasonable response times for demo data volumes; notes on
          pagination or indexing if applicable.
        </li>
        <li>
          <strong>Usability:</strong> Mobile-first flows for renter actions; clear feedback on
          failure states.
        </li>
      </ul>
    </article>
  );
}
