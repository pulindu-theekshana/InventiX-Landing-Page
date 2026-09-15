"use client";

import { useEffect, useState } from "react";
import { Counter, useInView } from "../motion";

/**
 * How a supplier's score out of 100 is actually built.
 *
 * Quality 40 · Delivery speed 30 · Quantity availability 20 · Price 10
 *
 * Delivery speed is measured from orders that genuinely completed, never
 * from the lead time a supplier claims — so it cannot be improved by
 * promising harder. The ring draws itself on scroll so the number reads
 * as something measured rather than something asserted.
 */

const PARTS = [
  { label: "Quality", weight: 40, earned: 37, note: "star ratings after delivery" },
  { label: "Delivery speed", weight: 30, earned: 27, note: "measured from completed orders" },
  { label: "Quantity availability", weight: 20, earned: 17, note: "could they fill what you asked" },
  { label: "Price", weight: 10, earned: 8, note: "against others for the same product" },
];

const TOTAL = PARTS.reduce((sum, p) => sum + p.earned, 0); // 89

export default function SupplierScore({
  tone = "dark",
}: {
  tone?: "light" | "dark";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [on, setOn] = useState(false);
  const light = tone === "light";

  useEffect(() => {
    if (inView) setOn(true);
  }, [inView]);

  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <div
      ref={ref}
      className={`rounded-lg p-6 ${light ? "hairline-light bg-paper/[0.04]" : "hairline bg-white"}`}
    >
      <div className="flex flex-wrap items-center gap-7">
        {/* the ring */}
        <div className="relative shrink-0">
          <svg
            viewBox="0 0 128 128"
            className="size-32 -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="64"
              cy="64"
              r={R}
              fill="none"
              strokeWidth="9"
              className={light ? "stroke-paper/10" : "stroke-maroon/10"}
            />
            <circle
              cx="64"
              cy="64"
              r={R}
              fill="none"
              strokeWidth="9"
              strokeLinecap="round"
              stroke="url(#ixScoreGrad)"
              className="ring-fill"
              strokeDasharray={C}
              strokeDashoffset={on ? C * (1 - TOTAL / 100) : C}
            />
            <defs>
              <linearGradient id="ixScoreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#C4910C" />
                <stop offset="1" stopColor="#FFC800" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={`text-3xl font-bold tracking-display ${light ? "text-paper" : "text-maroon"}`}
            >
              <Counter to={TOTAL} duration={1500} />
            </span>
            <span
              className={`font-mono text-[0.6rem] tracking-[0.16em] uppercase ${light ? "text-paper/45" : "text-ink/45"}`}
            >
              out of 100
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`font-mono text-[0.66rem] tracking-[0.2em] uppercase ${light ? "text-gold" : "text-amber"}`}
          >
            Ranked first for rice
          </p>
          <h3
            className={`mt-1.5 text-lg font-bold ${light ? "text-paper" : "text-maroon"}`}
          >
            Ranjith Stores
          </h3>
          <p
            className={`mt-1 font-mono text-xs ${light ? "text-paper/50" : "text-ink/55"}`}
          >
            4.6 ★ · 38 completed orders · avg 2 days
          </p>
        </div>
      </div>

      {/* the weighted parts */}
      <ul className="mt-7 space-y-4">
        {PARTS.map((part, i) => (
          <li key={part.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`text-sm font-medium ${light ? "text-paper/85" : "text-ink/80"}`}
              >
                {part.label}
              </span>
              <span
                className={`shrink-0 font-mono text-xs ${light ? "text-paper/55" : "text-ink/55"}`}
              >
                {part.earned}/{part.weight}
              </span>
            </div>
            <div
              className={`mt-2 h-1.5 w-full overflow-hidden rounded-full ${light ? "bg-paper/10" : "bg-maroon/10"}`}
            >
              <div
                className="meter-fill h-full rounded-full bg-gradient-to-r from-amber to-gold"
                style={{
                  width: on ? `${(part.earned / part.weight) * 100}%` : "0%",
                  transitionDelay: `${i * 110}ms`,
                }}
              />
            </div>
            <p
              className={`mt-1.5 font-mono text-[0.62rem] ${light ? "text-paper/35" : "text-ink/45"}`}
            >
              {part.note}
            </p>
          </li>
        ))}
      </ul>

      <p
        className={`mt-6 border-t pt-4 text-xs/5 ${
          light ? "border-paper/10 text-paper/50" : "border-maroon/10 text-ink/55"
        }`}
      >
        With only one or two ratings the average is pulled back towards
        neutral — two opinions are not evidence. Suppliers under three
        completed orders are labelled new and shown with a provisional
        score, rather than buried.
      </p>
    </div>
  );
}
