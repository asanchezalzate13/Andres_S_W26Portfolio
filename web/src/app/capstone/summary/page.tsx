import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstoneSummaryPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project summary</h2>

      <CapstoneDocCard
        title="Project summary document"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.projectSummary),
          fileName: capstonePdfFiles.projectSummary,
        }}
      >
        <p>
          ParkSpot targets friction in short-term parking by giving owners a structured way to
          monetize unused capacity and giving renters a transparent booking path. The capstone scope
          balances feasibility with demonstrable value: authenticated users, listing lifecycle,
          booking constraints, and an operational API that a mobile client can consume.
        </p>
        <p>
          The full document covers outcomes in depth: documented API surface with representative
          requests and responses, core user journeys end-to-end in the test environment, status
          checkpoints for scope and risk, and design artifacts aligned with requirements before
          build.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
