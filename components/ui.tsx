import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------- */
/* Eyebrow — the mono shelf-label voice used above every section    */
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
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl ${
          tone === "light" ? "text-paper" : "text-maroon"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-lg/8 text-pretty ${
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
/* -------------------------------------------------------------- */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200";
  const styles = {
    solid:
      "bg-gold text-maroon hover:bg-gold-300 hover:-translate-y-0.5 shadow-[0_6px_0_-2px_rgba(80,22,2,0.25)]",
    outline:
      "border border-maroon/25 text-maroon hover:border-maroon/60 hover:bg-maroon/5",
    quiet:
      "border border-paper/25 text-paper hover:border-gold hover:text-gold",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------- */
/* Stock meter — the visual unit of the whole product               */
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
    low: "bg-[#B02A0E]",
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
