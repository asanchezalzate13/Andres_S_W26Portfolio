import Link from "next/link";

const capstoneNav: { href: string; label: string }[] = [
  { href: "/capstone", label: "Overview" },
  { href: "/capstone/summary", label: "Project summary" },
  { href: "/capstone/vision", label: "Project vision" },
  { href: "/capstone/requirements", label: "Requirements" },
  { href: "/capstone/plan", label: "Project plan" },
  { href: "/capstone/analysis", label: "Analysis & design" },
  { href: "/capstone/wireframes", label: "Wireframes / mockups" },
  { href: "/capstone/status", label: "Status reports" },
  { href: "/capstone/implementation", label: "Implementation" },
];

export default function CapstoneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
      <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        Academic work experience
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        Capstone — ParkSpot
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
        Modular parking rental application — your role: project manager &amp; backend lead. Stack:
        Node.js, Express, and Kotlin (mobile). Each tab summarizes a deliverable and offers a{" "}
        <strong>PDF download</strong> where applicable (team PDFs in{" "}
        <code className="text-sm">web/public/capstone/</code>, names in{" "}
        <code className="text-sm">src/lib/capstone.ts</code>). Wireframes open the{" "}
        <strong>ParkSpot mockup</strong> in Figma.
      </p>

      <nav
        aria-label="Capstone sections"
        className="mt-8 flex flex-wrap gap-2 border-y border-[var(--border)] py-4"
      >
        {capstoneNav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="pt-8">{children}</div>
    </div>
  );
}
