"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion";

/**
 * The POS upload, step by step.
 *
 * It deliberately reads an exported file rather than talking to a till
 * directly — that is what lets it work with any POS in the country
 * instead of the three we could get an integration with. A name the
 * catalogue does not recognise is matched once, by the owner, and
 * remembered from then on.
 */

const ROWS = [
  { raw: "SUGAR 1KG WHT", matched: "White sugar · 1 kg", qty: 14, known: true },
  { raw: "RICE KEERI 5K", matched: "Keeri samba rice · 5 kg", qty: 6, known: true },
  { raw: "HIGHLND MP 400", matched: "Highland milk powder · 400 g", qty: 22, known: true },
  { raw: "MAL TIKIRI MARI", matched: null, qty: 9, known: false },
];

const STEPS = [
  "Reading the file",
  "Finding the columns",
  "Matching product names",
  "Reducing your stock",
];

export default function PosUpload() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(4);
      return;
    }
    const timers = STEPS.map((_, i) =>
      setTimeout(() => setStep(i + 1), 400 + i * 780),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="hairline rounded-lg bg-white p-5 sm:p-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-leaf-100">
            <svg viewBox="0 0 20 20" className="size-4 text-leaf" aria-hidden="true">
              <path
                d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M3.5 13v2.5A1.5 1.5 0 0 0 5 17h10a1.5 1.5 0 0 0 1.5-1.5V13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-maroon">
              sales_export_14sep.csv
            </p>
            <p className="font-mono text-[0.64rem] text-ink/50">
              214 rows · from your till
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase transition-colors duration-300 ${
            step >= 4 ? "bg-leaf-100 text-leaf" : "bg-maroon/6 text-ink/55"
          }`}
        >
          {step >= 4 ? "Stock updated" : STEPS[Math.max(0, step - 1)]}
        </span>
      </header>

      {/* progress through the four steps */}
      <ol className="mt-6 grid grid-cols-4 gap-2">
        {STEPS.map((label, i) => (
          <li key={label}>
            <div
              className={`h-1 rounded-full transition-colors duration-500 ${
                step > i ? "bg-gold" : "bg-maroon/10"
              }`}
            />
            <p
              className={`mt-2 hidden font-mono text-[0.58rem] tracking-[0.1em] uppercase transition-colors duration-500 sm:block ${
                step > i ? "text-amber" : "text-ink/35"
              }`}
            >
              {label}
            </p>
          </li>
        ))}
      </ol>

      {/* the matched rows */}
      <ul className="mt-6 divide-y divide-maroon/8">
        {ROWS.map((row, i) => {
          const shown = step >= 3;
          return (
            <li
              key={row.raw}
              // Stacks on a phone: the till's own spelling on one line, what
              // it was matched to on the next. Side by side at that width the
              // product name is truncated to nothing, which is the one part
              // worth reading.
              className="flex flex-col gap-1 py-3 transition-opacity duration-500 sm:flex-row sm:items-center sm:gap-3"
              style={{
                opacity: step >= 2 ? 1 : 0.25,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span className="truncate font-mono text-[0.68rem] text-ink/45 sm:w-[36%] sm:shrink-0">
                {row.raw}
              </span>
              <div className="flex min-w-0 flex-1 items-center gap-2.5">
                <svg
                  viewBox="0 0 16 8"
                  className={`size-4 shrink-0 rotate-90 transition-colors duration-500 sm:rotate-0 ${shown ? "text-amber" : "text-ink/20"}`}
                  aria-hidden="true"
                >
                  <path
                    d="M1 4h13m0 0-3-3m3 3-3 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="min-w-0 flex-1 truncate text-xs font-medium text-maroon">
                  {shown ? (row.matched ?? "Needs your match — once") : "…"}
                </span>
                <span className="shrink-0 font-mono text-[0.68rem] text-ink/50">
                  −{row.qty}
                </span>
                <span
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                    !shown
                      ? "bg-maroon/8"
                      : row.known
                        ? "bg-leaf-100"
                        : "bg-gold-100"
                  }`}
                >
                  {shown && row.known && (
                    <svg
                      viewBox="0 0 12 12"
                      className="size-3 text-leaf"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {shown && !row.known && (
                    <span className="font-mono text-[0.6rem] font-bold text-amber">
                      ?
                    </span>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-5 border-t border-maroon/10 pt-4 text-xs/5 text-ink/55">
        A name your catalogue does not know is matched once, by you, and
        remembered for every future upload. The same file cannot be applied
        twice, so stock is never reduced twice.
      </p>
    </div>
  );
}
