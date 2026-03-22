import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import { capstoneAssetUrl, capstonePdfFiles } from "@/lib/capstone";

export default function CapstoneRequirementsPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Project / business requirements</h2>

      <CapstoneDocCard
        title="High-level requirements"
        download={{
          href: capstoneAssetUrl(capstonePdfFiles.highLevelRequirements),
          fileName: capstonePdfFiles.highLevelRequirements,
        }}
      >
        <p>
          The PDF is the authoritative high-level requirements set (aligned with the SRS). Below is
          a condensed overview.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Functional scope:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Users can register, authenticate, and maintain a basic profile.</li>
          <li>Owners can create, edit, and retire parking listings with availability metadata.</li>
          <li>Renters can search or browse listings and submit booking requests within rules.</li>
          <li>The system enforces conflict prevention for overlapping bookings where applicable.</li>
          <li>Administrative or support scenarios are stubbed or documented for future terms.</li>
        </ul>
        <p>
          <strong className="text-[var(--foreground)]">Non-functional:</strong> Security appropriate
          to the deployment context; modular, maintainable API shape; reasonable performance at
          representative data volumes; mobile-first usability with clear failure feedback.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
