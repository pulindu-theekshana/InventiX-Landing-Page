import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------- */
/* Eyebrow — the mono shelf-label voice above every section         */
/* -------------------------------------------------------------- */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[0.7rem] font-medium tracking-[0.22em] uppercase ${
        tone === "light" ? "text-gold" : "text-amber"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------- */
/* Shelf rail — the recurring divider                               */
/* -------------------------------------------------------------- */
export function ShelfRail({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`shelf-rail ${tone === "light" ? "text-paper" : "text-maroon"} ${className}`}
    />
  );
}

/* -------------------------------------------------------------- */
/* Section heading                                                  */
/* -------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`tracking-display mt-3 text-3xl font-bold text-balance sm:text-[2.6rem] sm:leading-[1.08] ${
          tone === "light" ? "text-paper" : "text-maroon"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-lg/8 text-pretty ${
            tone === "light" ? "text-paper/70" : "text-ink/70"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------- */
/* Buttons                                                          */
/*                                                                  */
/* One accent colour, and it only ever means "this is the action".  */
/* Everything else is a border or nothing at all.                   */
/* -------------------------------------------------------------- */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
  arrow?: boolean;
}) {
  const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-all duration-300";
  const styles = {
    solid:
      "bg-gold text-maroon hover:bg-gold-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(255,200,0,0.6)]",
    outline:
      "text-maroon hairline hover:bg-maroon/[0.04] hover:-translate-y-0.5",
    quiet:
      "hairline-light text-paper hover:text-gold hover:-translate-y-0.5",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {arrow && (
        <svg
          viewBox="0 0 16 8"
          aria-hidden="true"
          className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
        >
          <path
            d="M1 4h13m0 0-3.5-3.5M14 4l-3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}

/* -------------------------------------------------------------- */
/* Badge — small mono label, used for status and counts             */
/* -------------------------------------------------------------- */
export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "good" | "warn" | "bad" | "gold";
}) {
  const styles = {
    neutral: "bg-maroon/6 text-ink/60",
    good: "bg-leaf-100 text-leaf",
    warn: "bg-gold-100 text-amber",
    bad: "bg-clay/10 text-clay",
    gold: "bg-gold/15 text-amber",
  }[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.1em] uppercase ${styles}`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- */
/* Card — the hairline-and-lift surface used across the site        */
/* -------------------------------------------------------------- */
export function Card({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: "paper" | "dark";
  className?: string;
}) {
  const styles =
    tone === "dark"
      ? "hairline-light bg-paper/[0.04] hover:bg-paper/[0.07]"
      : "hairline bg-white hover:shadow-[0_18px_40px_-24px_rgba(80,22,2,0.35)]";
  return (
    <div className={`lift rounded-lg p-6 ${styles} ${className}`}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- */
/* Stock meter — the visual unit of the whole product               */
/* (kept for the pages that already use it)                         */
/* -------------------------------------------------------------- */
export function StockMeter({
  label,
  unit,
  level,
  status = "ok",
}: {
  label: string;
  unit: string;
  level: number; // 0–100
  status?: "ok" | "watch" | "low";
}) {
  const colour = {
    ok: "bg-leaf",
    watch: "bg-amber",
    low: "bg-clay",
  }[status];

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-paper">{label}</span>
        <span className="font-mono text-xs text-paper/55">{unit}</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-paper/12">
        <div
          className={`meter-fill h-full rounded-full ${colour}`}
          style={{ width: `${Math.max(2, Math.min(100, level))}%` }}
        />
      </div>
    </div>
  );
}
