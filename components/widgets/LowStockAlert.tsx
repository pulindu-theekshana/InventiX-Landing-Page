"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion";

/**
 * The low-stock alert, as it actually behaves in the app.
 *
 * Every product carries its own reorder point — ten bags of rice is a
 * crisis, two hundred packets of tea is a Tuesday — so the bar is drawn
 * against that item's own threshold rather than against a shared scale.
 *
 * The meters fill when the widget scrolls into view, then the rice drops
 * under its reorder point and the alert lands. That sequence is the
 * feature in about four seconds.
 */

type Item = {
  name: string;
  unit: string;
  onHand: number;
  reorderAt: number;
  full: number;
  cover: number;
};

const ITEMS: Item[] = [
  { name: "Red raw rice · 5 kg", unit: "kg", onHand: 62, reorderAt: 40, full: 140, cover: 11 },
  { name: "Highland milk powder · 400 g", unit: "packs", onHand: 34, reorderAt: 30, full: 120, cover: 6 },
  { name: "Coconut oil · 1 L", unit: "bottles", onHand: 51, reorderAt: 20, full: 90, cover: 14 },
  { name: "Mysoor dhal · 1 kg", unit: "kg", onHand: 28, reorderAt: 25, full: 100, cover: 7 },
];

const DRAINED: Item = { ...ITEMS[0], onHand: 9, cover: 2 };

export default function LowStockAlert() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(3);
      return;
    }
    const t = [
      setTimeout(() => setStep(1), 200), // meters fill
      setTimeout(() => setStep(2), 1900), // rice drains
      setTimeout(() => setStep(3), 2700), // alert lands
    ];
    return () => t.forEach(clearTimeout);
  }, [inView]);

  const rows = step >= 2 ? [DRAINED, ...ITEMS.slice(1)] : ITEMS;

  return (
    <div ref={ref} className="relative">
      <div className="hairline-light rounded-lg bg-ink-800/90 p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-6">
        <header className="flex items-center justify-between gap-4">
          <p className="font-mono text-[0.66rem] tracking-[0.2em] text-paper/45 uppercase">
            Low stock · Main shop
          </p>
          <span className="flex items-center gap-2 font-mono text-[0.66rem] text-leaf">
            <span className="size-1.5 rounded-full bg-leaf" />
            Live
          </span>
        </header>

        <ul className="mt-6 space-y-5">
          {rows.map((item) => {
            const below = item.onHand <= item.reorderAt;
            const pct = step === 0 ? 0 : (item.onHand / item.full) * 100;
            const markAt = (item.reorderAt / item.full) * 100;
            return (
              <li key={item.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="truncate text-sm font-medium text-paper">
                    {item.name}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-xs ${
                      below ? "text-gold" : "text-paper/50"
                    }`}
                  >
                    {item.onHand} {item.unit}
                  </span>
                </div>

                <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper/10">
                  <div
                    className={`meter-fill h-full rounded-full ${
                      below
                        ? "bg-clay"
                        : item.onHand < item.reorderAt * 1.5
                          ? "bg-amber"
                          : "bg-leaf"
                    }`}
                    style={{ width: `${Math.max(2, pct)}%` }}
                  />
                  {/* the item's own reorder point */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-paper/50"
                    style={{ left: `${markAt}%` }}
                  />
                </div>

                <p className="mt-1.5 font-mono text-[0.64rem] text-paper/40">
                  reorder at {item.reorderAt} · {item.cover} days of cover
                </p>
              </li>
            );
          })}
        </ul>

        <footer className="mt-6 flex items-center justify-between gap-4 border-t border-paper/10 pt-4">
          <span className="font-mono text-[0.66rem] text-paper/40">
            Reorder points set per product
          </span>
          <span className="font-mono text-[0.66rem] text-paper/40">
            Synced just now
          </span>
        </footer>
      </div>

      {/* The alert itself. It overlaps the top edge so it reads as having
          just landed, but stays inside the card's width — spilling sideways
          collides with whatever sits in the next column. */}
      {step >= 3 && (
        <div className="animate-drop-in absolute -top-5 right-3 w-[15rem] rounded-md border border-gold/30 bg-maroon p-3.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] sm:right-4">
          <div className="flex items-start gap-3">
            <span className="animate-pulse-ring mt-1 size-2 shrink-0 rounded-full bg-gold" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-paper">
                Rice is below its reorder point
              </p>
              <p className="mt-1 font-mono text-[0.66rem] text-paper/60">
                9 kg left · 2 days of cover
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
