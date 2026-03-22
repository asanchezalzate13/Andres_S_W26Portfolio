import { CapstoneDocCard } from "@/components/CapstoneDocCard";
import Link from "next/link";

export default function CapstoneImplementationPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>System implementation</h2>

      <CapstoneDocCard title="Implementation overview">
        <p>
          ParkSpot is structured so reviewers can map architecture to responsibilities. See also{" "}
          <Link href="/work-samples">work samples</Link> and the linked GitHub profile for code.
        </p>
        <p>
          <strong className="text-[var(--foreground)]">Backend (Node.js / Express)</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Route modules aligned to domain areas (auth, listings, bookings)</li>
          <li>Middleware for authentication and centralized error handling</li>
          <li>Persistence layer and migration or seed strategy for demonstrations</li>
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
          <li>Tests or manual scripts used before demonstrations</li>
          <li>Known limitations documented for transparency</li>
        </ul>
      </CapstoneDocCard>
    </article>
  );
}
