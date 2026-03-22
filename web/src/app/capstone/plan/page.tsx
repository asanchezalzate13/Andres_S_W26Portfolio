import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstonePlanPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project plan</h2>

      <CapstoneDocCard
        title="Project plan & milestones"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.projectPlan),
          fileName: capstonePdfFiles.projectPlan,
        }}
      >
        <p>
          The PDF includes the project schedule: dates, milestones, and planning artifacts. This
          page summarizes the phase structure.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Phase 1 — Discovery &amp; baseline</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Confirm personas, primary journeys, and out-of-scope items</li>
          <li>Stand up repository structure, environments, and API skeleton</li>
          <li>Draft initial risk list (integration, data model changes, demo dependencies)</li>
        </ul>
        <p>
          <strong className="text-[var(--foreground)]">Phase 2 — Vertical slice &amp; integration</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Implement core entities and persistence; seed demo data</li>
          <li>Connect mobile client to happiest-path flows; log defects</li>
          <li>Weekly status: scope, blockers, decisions</li>
        </ul>
        <p>
          <strong className="text-[var(--foreground)]">Phase 3 — Hardening &amp; demonstration</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Error handling, validation messages, and documentation pass</li>
          <li>Rehearse demo script; capture screenshots for documentation</li>
          <li>Finalize README, API notes, and known limitations</li>
        </ul>
      </CapstoneDocCard>
    </article>
  );
}
