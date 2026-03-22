import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstoneAnalysisPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Requirements analysis &amp; design</h2>

      <CapstoneDocCard
        title="Requirements analysis & design"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.requirementsAnalysisAndDesign),
          fileName: capstonePdfFiles.requirementsAnalysisAndDesign,
        }}
      >
        <p>
          The PDF bundles diagrams and design notes (UML, domain model, sequences) as submitted for
          the course. This section is the executive summary.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Domain model (narrative):</strong> Core concepts
          include <strong className="text-[var(--foreground)]">User</strong> (with roles),{" "}
          <strong className="text-[var(--foreground)]">Listing</strong> (space metadata and rules), and{" "}
          <strong className="text-[var(--foreground)]">Booking</strong> (time bounds and state) —
          adjusted to match your ERD in the full document.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Key sequences:</strong> Authentication flow;
          create booking with validation and conflict checks; owner updates listing and impact on
          active bookings.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">API design:</strong> Resource-oriented routes,
          consistent error payloads for clients, and compatibility notes between API and mobile
          releases.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
