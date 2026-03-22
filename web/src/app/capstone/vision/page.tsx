import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstoneVisionPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project vision</h2>

      <CapstoneDocCard
        title="Vision statement"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.projectVision),
          fileName: capstonePdfFiles.projectVision,
        }}
      >
        <p>
          <strong className="text-[var(--foreground)]">Problem:</strong> Parking is often fragmented
          — informal arrangements are hard to trust, and marketplaces can be too heavy for
          small-scale owners. ParkSpot focuses on a lighter, modular rental flow that still respects
          accountability.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Target users:</strong> Local space owners
          (driveways, small lots) and drivers who need predictable short-term parking near
          destinations.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Product promise:</strong> Clear availability,
          explicit booking rules, and a technical foundation that can grow (payment providers,
          richer discovery, admin tooling) without rewriting the core domain model.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Success signals:</strong> A stable demo for
          primary journeys, reliable API behaviour in test scenarios, and documentation that lets a
          new developer onboard in a single sitting. The PDF contains the full narrative your team
          submitted for the capstone.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
