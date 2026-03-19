"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const mainNav: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/cover-letter", label: "Cover letter" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/academic", label: "Academic credentials" },
  { href: "/work-samples", label: "Work samples" },
  { href: "/capstone", label: "Capstone" },
  { href: "/professional", label: "Professional" },
  { href: "/contact", label: "Contact" },
];

function navLinkClass(active: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm transition-colors",
    active
      ? "bg-[var(--accent-muted)] text-[var(--accent)] font-medium"
      : "text-[var(--muted)] hover:bg-[var(--accent-muted)] hover:text-[var(--foreground)]",
  ].join(" ");
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]"
          onClick={() => setOpen(false)}
        >
          {site.name.split(" ")[0]}{" "}
          <span className="text-[var(--muted)] font-normal">
            {site.name.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center justify-end gap-1 lg:flex">
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navLinkClass(
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`),
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--background)] px-4 pb-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 pt-2">
            {mainNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClass(
                  href === "/"
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(`${href}/`),
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
