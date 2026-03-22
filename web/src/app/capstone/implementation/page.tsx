import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import Link from "next/link";

export default function CapstoneImplementationPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>System implementation</h2>

      <CapstoneDocCard title="Implementation overview">
        <p>
          Summarize how ParkSpot was built so a reviewer can map architecture to responsibilities.
          Point to the canonical repository from your README and on the{" "}
          <Link href="/work-samples">work samples</Link> page.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Backend (Node.js / Express)</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Route modules aligned to domain areas (auth, listings, bookings)</li>
          <li>Middleware for authentication and centralized error handling</li>
          <li>Persistence layer and migration or seed strategy used in demos</li>
        </ul>
        <p>
          <strong className="text-[var(--foreground)]">Mobile (Kotlin)</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Screen map and navigation approach</li>
          <li>Networking: base URL, retries, token attachment</li>
          <li>UI decisions for booking confirmation and failure recovery</li>
        </ul>
        <p>
          <strong className="text-[var(--foreground)]">DevOps &amp; quality</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Local run instructions and environment variables</li>
          <li>Tests or manual scripts used before demos</li>
          <li>Known limitations stated for academic transparency</li>
        </ul>
        <p className="text-sm">
          When you have a standalone implementation write-up as PDF, add it under{" "}
          <code>web/public/capstone/</code> and wire it here using{" "}
          <code className="text-[var(--foreground)]">capstonePdfFiles</code> in{" "}
          <code>web/src/lib/capstone.ts</code>.
        </p>
      </CapstoneDocCard>
    </article>
  );
}
