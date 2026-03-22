type CapstoneDocCardProps = {
  title: string;
  children: React.ReactNode;
  /** PDF (or other downloadable) under /capstone/ — omit if only an external link is shown */
  download?: {
    href: string;
    label?: string;
    /** `download` attribute — suggested save name */
    fileName?: string;
  };
  /** e.g. Figma — shown as outline button if `download` is set, else as primary accent button */
  externalLink?: {
    href: string;
    label: string;
  };
};

const btnPrimary =
  "inline-flex items-center rounded-md border border-[var(--accent)] bg-[var(--accent-muted)] px-4 py-2 text-sm font-medium text-[var(--accent)] no-underline transition-colors hover:bg-[var(--accent)] hover:text-white";
const btnSecondary =
  "inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)] no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]";

export function CapstoneDocCard({ title, children, download, externalLink }: CapstoneDocCardProps) {
  const hasDownload = Boolean(download?.href);
  const hasExternal = Boolean(externalLink?.href);
  const externalIsPrimary = hasExternal && !hasDownload;

  return (
    <section className="not-prose my-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm first:mt-0">
      <h3 className="mt-0 font-serif text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <div className="space-y-3 text-base leading-relaxed text-[var(--muted)]">{children}</div>
      {(hasDownload || hasExternal) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {hasDownload ? (
            <a
              href={download!.href}
              download={download!.fileName}
              className={btnPrimary}
            >
              {download!.label ?? "Download full document (PDF)"}
            </a>
          ) : null}
          {hasExternal ? (
            <a
              href={externalLink!.href}
              target="_blank"
              rel="noopener noreferrer"
              className={externalIsPrimary ? btnPrimary : btnSecondary}
            >
              {externalLink!.label}
              {" ↗"}
            </a>
          ) : null}
        </div>
      )}
    </section>
  );
}
