import Image from "next/image";
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
          High-fidelity screens for ParkSpot — listing discovery, booking, and owner flows — live in
          the team Figma file. Use the button below to open the interactive mockup; export a PDF
          from Figma later if you want a static download as well.
        </p>
      </CapstoneDocCard>

      <div className="not-prose my-8 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center text-[var(--muted)]">
        <div className="relative mx-auto mb-4 aspect-[16/10] w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-inner">
          <Image
            src="/capstone/wireframe-placeholder.svg"
            alt="Preview placeholder — add PNG or WebP exports under public/capstone/ and swap this image"
            fill
            className="object-contain p-6"
            priority
          />
        </div>
        <p className="text-sm">
          Optional: drop static mockup images (e.g. <code>parkspot-mockup-home.png</code>) into{" "}
          <code>public/capstone/</code> and update this page to use{" "}
          <code className="text-[var(--foreground)]">next/image</code>.
        </p>
      </div>
    </article>
  );
}
