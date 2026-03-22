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
          Download <strong className="text-[var(--foreground)]">W26_T29_ProjectReport2.pdf</strong> for
          the full milestone report: progress, blockers, risks, and decisions from the capstone term.
        </p>
        <p>Typical entries cover:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-[var(--foreground)]">Completed:</strong> e.g. booking validation
            endpoint, listing filters, Kotlin screen wiring
          </li>
          <li>
            <strong className="text-[var(--foreground)]">In progress:</strong> error UX, admin stubs,
            deployment checklist
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Blockers:</strong> devices, credentials,
            scope questions — stated specifically
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Risks &amp; decisions:</strong> integration
            drift, demo data, API shape changes, deferred features
          </li>
        </ul>
      </CapstoneDocCard>
    </article>
  );
}
