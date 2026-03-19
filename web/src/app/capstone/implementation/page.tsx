export default function CapstoneImplementationPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>System implementation</h2>
      <p>
        Summarize how ParkSpot was built so a reviewer can map architecture to responsibilities.
        Point to the canonical repository in your README and on the{" "}
        <a href="/work-samples">work samples</a> page.
      </p>
      <h3>Backend (Node.js / Express)</h3>
      <ul>
        <li>Route modules aligned to domain areas (auth, listings, bookings)</li>
        <li>Middleware for authentication and centralized error handling</li>
        <li>Persistence layer and migration or seed strategy used in demos</li>
      </ul>
      <h3>Mobile (Kotlin)</h3>
      <ul>
        <li>Screen map and navigation approach</li>
        <li>Networking layer: base URL configuration, retries, and token attachment</li>
        <li>Notable UI decisions for booking confirmation and failure recovery</li>
      </ul>
      <h3>DevOps &amp; quality</h3>
      <ul>
        <li>How you run locally; environment variables documented</li>
        <li>Tests or manual test scripts exercised before demos</li>
        <li>Known limitations stated honestly for academic transparency</li>
      </ul>
    </article>
  );
}
