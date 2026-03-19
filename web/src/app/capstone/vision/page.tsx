export default function CapstoneVisionPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project vision</h2>
      <p>
        <strong>Problem:</strong> Parking is often fragmented—informal arrangements are hard to
        trust, and marketplaces can be too heavy for small-scale owners. ParkSpot focuses on a
        lighter, modular rental flow that still respects accountability.
      </p>
      <p>
        <strong>Target users:</strong> Local space owners (driveways, small lots) and drivers who
        need predictable short-term parking near destinations.
      </p>
      <p>
        <strong>Product promise:</strong> Clear availability, explicit booking rules, and a
        technical foundation that can grow (additional payment providers, richer discovery, admin
        tooling) without rewriting the core domain model.
      </p>
      <p>
        <strong>Success signals:</strong> A stable demo that handles primary journeys, measurable
        API reliability in test scenarios, and documentation that allows a new developer to onboard in
        a single sitting.
      </p>
    </article>
  );
}
