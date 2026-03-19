import Image from "next/image";

export default function CapstoneWireframesPage() {
  return (
    <article className="prose-portrait max-w-3xl">
      <h2>Wireframes / mockups</h2>
      <p>
        Export frames from Figma (or similar) into <code>web/public/capstone/</code>, then replace
        the placeholder below. Use PNG or WebP for static export compatibility.
      </p>
      <div className="not-prose my-8 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center text-[var(--muted)]">
        <div className="relative mx-auto mb-4 aspect-[16/10] w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-inner">
          <Image
            src="/capstone/wireframe-placeholder.svg"
            alt="Placeholder wireframe panel"
            fill
            className="object-contain p-6"
            priority
          />
        </div>
        <p className="text-sm">
          Replace <code>public/capstone/wireframe-placeholder.svg</code> with your real mockups or
          add multiple images in a simple grid.
        </p>
      </div>
    </article>
  );
}
