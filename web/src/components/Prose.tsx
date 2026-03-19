export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose-portrait mx-auto max-w-3xl px-6 py-12 sm:py-16">
      {children}
    </article>
  );
}

export function PageHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-10 border-b border-[var(--border)] pb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-4 text-base leading-relaxed text-[var(--muted)]">{children}</div>
      ) : null}
    </header>
  );
}
