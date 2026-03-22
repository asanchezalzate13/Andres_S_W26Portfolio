import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function ProfessionalPage() {
  return (
    <Prose>
      <PageHeading title="Professional summary" eyebrow="Experience">
        <p>
          This section complements my résumé with professional samples: entrepreneurship (Tatamá) and
          capstone engineering (ParkSpot).
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
        <strong>Live site:</strong>{" "}
        <a href={site.tatamaUrl} target="_blank" rel="noopener noreferrer">
          tatamacolombiancoffee.com
        </a>
      </p>

      <h3>ParkSpot — engineering sample</h3>
      <p>
        Capstone delivery with documentation, consistent API design, and scope ownership as project
        manager and backend lead.{" "}
        <a href="/capstone">Capstone documentation</a> ·{" "}
        <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
        .
      </p>

    </Prose>
  );
}
