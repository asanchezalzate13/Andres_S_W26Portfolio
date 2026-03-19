import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function ProfessionalPage() {
  return (
    <Prose>
      <PageHeading title="Professional summary" eyebrow="As applicable">
        <p>
          This section complements your resume with samples, entrepreneurship work, community
          involvement, and optional recognition documents. Link to PDFs in{" "}
          <code>web/public/docs/</code> when you have scans.
        </p>
      </PageHeading>

      <h2>Professional work samples</h2>

      <h3>Tatamá — international coffee brand (entrepreneurship)</h3>
      <p>
        Built an international coffee brand end-to-end: brand narrative, visual identity including
        logo design, and Shopify-based e-commerce logistics. Emphasis on cohesive packaging
        presentation, product pages, and operational clarity for fulfillment.
      </p>
      <p>
        <strong>Artifacts to showcase:</strong> storefront link, brand deck PDF, packaging photos,
        or analytics snapshots (replace with real links).
      </p>
      <p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Shopify storefront (replace URL) →
        </a>
      </p>

      <h3>ParkSpot — production-style engineering sample</h3>
      <p>
        Treat the capstone repository as a professional-grade sample: README quality, API
        consistency, and how you managed scope as PM + backend lead. Cross-link:{" "}
        <a href="/capstone">Capstone documentation</a> ·{" "}
        <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
        .
      </p>

      <h3>Additional sample (optional)</h3>
      <p>
        Add a third sample if you have a freelance build, internship contribution, or open-source
        participation worth highlighting.
      </p>

      <h2>Community service / volunteer work</h2>
      <ul>
        <li>
          <strong>[Organization]</strong> — [Role], [dates]. [One sentence of impact].{" "}
          <em>Replace with your experience or remove if not applicable.</em>
        </li>
      </ul>

      <h2>Letters of recommendation</h2>
      <p>
        Upload redacted PDFs if appropriate for the course, or state &ldquo;available upon
        request.&rdquo; Example link pattern once files exist:{" "}
        <code>/docs/recommendation-lastname.pdf</code>
      </p>

      <h2>Awards &amp; recognition</h2>
      <ul>
        <li>
          <strong>[Award]</strong> — [Issuer], [year]. Link certificate scan if desired.
        </li>
      </ul>
    </Prose>
  );
}
