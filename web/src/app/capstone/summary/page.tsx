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
          The full PDF expands on outcomes you can demonstrate: a documented API surface with
          representative requests and responses, core user journeys implemented end-to-end in the
          demo environment, recurring status checkpoints that capture scope changes and risks, and
          design artifacts that aligned requirements with UI expectations before build.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
