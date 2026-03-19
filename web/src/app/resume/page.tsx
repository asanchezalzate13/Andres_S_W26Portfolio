import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function ResumePage() {
  return (
    <Prose>
      <PageHeading title="Resume" eyebrow="Personal data">
        <p>
          Condensed résumé content for your portfolio. Replace placeholder links with live GitHub /
          demo URLs before submission.
        </p>
      </PageHeading>

      <h2>{site.name}</h2>
      <p>
        Toronto, ON · {site.languages}
        <br />
        <a href={site.linkedInUrl}>LinkedIn</a> · <a href={site.githubUrl}>GitHub</a>
      </p>

      <h2>Profile</h2>
      <p>
        Project manager and developer building reliable web and mobile experiences. Comfortable
        owning delivery from requirements through implementation, with emphasis on clear
        communication, measurable milestones, and maintainable code.
      </p>

      <h2>Technical skills</h2>
      <ul>
        <li>
          <strong>Frontend / mobile:</strong> React, React Native
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express
        </li>
        <li>
          <strong>Languages:</strong> Kotlin, Java, Swift, Python (data science)
        </li>
        <li>
          <strong>Practices:</strong> REST APIs, modular architecture, documentation, agile-style
          status reporting
        </li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>Advanced College Diploma, Computer Programming and Analysis (T177)</strong>
        <br />
        George Brown College, Toronto
      </p>

      <h2>Selected projects</h2>
      <h3>ParkSpot — Capstone (modular parking rental platform)</h3>
      <p>
        <strong>Role:</strong> Project manager &amp; backend lead.
        <br />
        <strong>Stack:</strong> Node.js, Express, Kotlin (mobile module).
        <br />
        Led scope and milestones for a team delivery; implemented and documented core API flows
        for listings, bookings, and user roles. See the{" "}
        <a href="/capstone">Capstone</a> section for artifacts.
      </p>

      <h3>Tatamá — Entrepreneurship (international coffee brand)</h3>
      <p>
        <strong>Role:</strong> Founder / operator.
        <br />
        Owned brand direction, logo design, and Shopify e-commerce logistics, including product
        presentation, fulfillment considerations, and customer-facing content. More detail under{" "}
        <a href="/professional">Professional</a>.
      </p>

      <h2>Athletic background</h2>
      <p>
        Former elite-level competitive tennis player (through 2023). Highlights: structured
        training cycles, performance analysis, and resilience—directly transferable to delivery
        timelines and continuous improvement in tech.
      </p>
    </Prose>
  );
}
