import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { parkSpotMockupFigmaUrl } from "@/lib/capstone";

export default function CapstoneWireframesPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Wireframes / mockups</h2>

      <CapstoneDocCard
        title="ParkSpot mockup (Figma)"
        externalLink={{
          href: parkSpotMockupFigmaUrl,
          label: "Open Figma mockup",
        }}
      >
        <p>
          High-fidelity screens for ParkSpot — listing discovery, booking, and owner flows — are in
          the Figma file linked below.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
