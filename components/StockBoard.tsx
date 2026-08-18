"use client";

import { useEffect, useState } from "react";
import { StockMeter } from "./ui";

type Row = {
  label: string;
  unit: string;
  level: number;
  status: "ok" | "watch" | "low";
};

const RESTING: Row[] = [
  { label: "Red raw rice · 5 kg", unit: "62 kg", level: 62, status: "ok" },
  { label: "Milk powder · 400 g", unit: "34 packs", level: 44, status: "watch" },
  { label: "Coconut oil · 1 L", unit: "51 bottles", level: 71, status: "ok" },
  { label: "Mysoor dhal · 1 kg", unit: "28 kg", level: 38, status: "watch" },
];

const DRAINED: Row[] = [
  { label: "Red raw rice · 5 kg", unit: "9 kg", level: 9, status: "low" },
  ...RESTING.slice(1),
];

/**
 * Runs once on load: meters fill, the rice shelf drains below its
 * reorder point, the alert lands, and a supplier message is drafted.
 * That sequence is the whole product in seven seconds.
 */
export default function StockBoard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setStep(4);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 250),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2700),
      setTimeout(() => setStep(4), 3900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const rows: Row[] =
    step === 0
      ? RESTING.map((r) => ({ ...r, level: 0 }))
      : step >= 2
        ? DRAINED
        : RESTING;

  return (
    <div className="relative">
      {/* the board */}
      <div className="rounded-2xl border border-paper/12 bg-ink-800/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.68rem] tracking-[0.2em] text-paper/45 uppercase">
            Stock board · Main shop
          </p>
          <span className="flex items-center gap-2 font-mono text-[0.68rem] text-leaf">
            <span className="size-1.5 rounded-full bg-leaf" />
            Live
          </span>
        </div>

        <div className="mt-6 space-y-5">
          {rows.map((row) => (
            <StockMeter key={row.label} {...row} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
          <span className="font-mono text-[0.68rem] text-paper/40">
            Reorder point · 15%
          </span>
          <span className="font-mono text-[0.68rem] text-paper/40">
            Synced just now
          </span>
        </div>
      </div>

      {/* alert */}
      {step >= 3 && (
        <div className="animate-drop-in absolute -top-5 -right-3 w-60 rounded-xl border border-gold/30 bg-maroon p-3.5 shadow-xl shadow-black/40 sm:-right-8 sm:w-64">
          <div className="flex items-start gap-3">
            <span className="animate-pulse-ring mt-0.5 size-2 shrink-0 rounded-full bg-gold" />
            <div>
              <p className="text-sm font-semibold text-paper">
                Rice is below reorder point
              </p>
              <p className="mt-1 font-mono text-[0.68rem] text-paper/60">
                9 kg left · 4 days of cover
              </p>
            </div>
          </div>
        </div>
      )}

      {/* supplier message */}
      {step >= 4 && (
        <div className="animate-drop-in absolute -bottom-6 -left-3 w-64 rounded-xl border border-leaf/40 bg-leaf-100 p-3.5 shadow-xl shadow-black/30 sm:-left-8">
          <p className="font-mono text-[0.62rem] tracking-[0.18em] text-leaf uppercase">
            WhatsApp · draft ready
          </p>
          <p className="mt-1.5 text-sm/5 text-maroon">
            “Ranjith Stores — please send 150 kg red raw rice by Thursday.”
          </p>
          <p className="mt-2 font-mono text-[0.68rem] text-maroon/55">
            Top-rated supplier · 4.6 ★
          </p>
        </div>
      )}
    </div>
  );
}
