import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstoneStatusPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Status reports</h2>

      <CapstoneDocCard
        title="Project report"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.projectReport2),
          fileName: capstonePdfFiles.projectReport2,
        }}
      >
        <p>
          The PDF is the milestone project report: progress, blockers, risks, and decisions across
          the capstone term.
        </p>
        <p>Report structure includes:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-[var(--foreground)]">Completed:</strong> delivered scope items
            (e.g. API endpoints, mobile screens, integrations)
          </li>
          <li>
            <strong className="text-[var(--foreground)]">In progress:</strong> active workstreams and
            near-term goals
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Blockers:</strong> dependencies and issues
            affecting delivery
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Risks &amp; decisions:</strong> technical and
            scope decisions, mitigations, and deferred items
          </li>
        </ul>
      </CapstoneDocCard>
    </article>
  );
}
