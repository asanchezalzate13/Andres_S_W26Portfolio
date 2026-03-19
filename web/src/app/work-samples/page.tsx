import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

type Sample = {
  title: string;
  course: string;
  summary: string;
  stack: string;
  linkLabel: string;
  href: string;
};

const samples: Sample[] = [
  {
    title: "ParkSpot — capstone backend & integration",
    course: "Capstone / integrative project",
    summary:
      "REST services for listings, bookings, and role-aware flows; coordinates with the Kotlin mobile module. Includes API documentation and test scenarios used in demos.",
    stack: "Node.js, Express, Kotlin (client), JSON, authentication patterns",
    linkLabel: "GitHub profile (link specific repo when ready)",
    href: site.githubUrl,
  },
  {
    title: "Full-stack web application (SPA + API)",
    course: "Web development / full-stack coursework",
    summary:
      "A multi-page client with predictable state management calling a secured API. Emphasizes validation, error handling, and deployment readiness.",
    stack: "React, Node.js, REST, environment configuration",
    linkLabel: "GitHub profile (link specific repo when ready)",
    href: site.githubUrl,
  },
  {
    title: "Mobile experience — native or cross-platform module",
    course: "Mobile development",
    summary:
      "Feature module demonstrating navigation, persistence, and integration with remote data; focuses on UX clarity and lifecycle-safe networking.",
    stack: "Kotlin or React Native (adjust to your artifact)",
    linkLabel: "GitHub profile (link specific repo when ready)",
    href: site.githubUrl,
  },
  {
    title: "Database design & SQL analytics",
    course: "Database systems",
    summary:
      "Normalized schema, constraints, and reporting queries for a realistic domain. Includes ERD rationale and sample extracts for stakeholders.",
    stack: "SQL, ER modeling, documentation",
    linkLabel: "GitHub profile (link specific repo when ready)",
    href: site.githubUrl,
  },
  {
    title: "Python data workflow",
    course: "Data science / Python analytics",
    summary:
      "Notebook or script pipeline that cleans a dataset, visualizes trends, and states limitations clearly—practice in reproducible analysis and communication.",
    stack: "Python, pandas, visualization libraries",
    linkLabel: "GitHub profile (link specific repo when ready)",
    href: site.githubUrl,
  },
];

export default function WorkSamplesPage() {
  return (
    <Prose>
      <PageHeading title="Academic work samples" eyebrow="Academic work experience">
        <p>
          Five curated samples that represent your strongest academic work. Replace each link with
          the real repository, PDF, or hosted demo before recording your video and submitting.
        </p>
      </PageHeading>

      <ul className="not-prose list-none space-y-10 p-0">
        {samples.map((s) => (
          <li
            key={s.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
          >
            <h2 className="mt-0 font-serif text-xl font-semibold text-[var(--foreground)]">
              {s.title}
            </h2>
            <p className="mb-2 text-sm font-medium text-[var(--accent)]">{s.course}</p>
            <p className="mb-3 text-base leading-relaxed text-[var(--muted)]">{s.summary}</p>
            <p className="mb-4 text-sm text-[var(--muted)]">
              <strong className="text-[var(--foreground)]">Stack / focus:</strong> {s.stack}
            </p>
            <a
              href={s.href}
              className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.linkLabel} →
            </a>
          </li>
        ))}
      </ul>
    </Prose>
  );
}
