import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-base font-semibold text-[var(--foreground)]">
            {site.name}
          </p>
          <p className="mt-1 max-w-md text-sm text-[var(--muted)]">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={site.linkedInUrl}
            className="text-[var(--accent)] underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.githubUrl}
            className="text-[var(--accent)] underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted)]">
        Portfolio · COMP3078 · Living document
      </div>
    </footer>
  );
}
