"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion";

/**
 * The six delivery stages, both sides see the same rail.
 *
 * requested → confirmed → processing → put to delivery → on the way → purchased
 *
 * Only the shop can set the last one, because that is the moment stock
 * goes up: a supplier saying "delivered" is a claim, the shop confirming
 * is the fact. The rail marks that stage as the shop's, not the
 * supplier's, rather than hiding the distinction.
 */

/**
 * `yoursAlone` marks the one stage the supplier cannot set. Every other
 * stage is theirs to move; this one is the shop's, because it is the
 * stage that changes the stock count.
 */
const STAGES = [
  { id: "requested", label: "Requested", at: "Mon 09:12", yoursAlone: false },
  { id: "confirmed", label: "Confirmed", at: "Mon 10:40", yoursAlone: false },
  { id: "processing", label: "Processing", at: "Mon 14:05", yoursAlone: false },
  { id: "dispatch", label: "Put to delivery", at: "Tue 08:30", yoursAlone: false },
  { id: "transit", label: "On the way", at: "Tue 11:15", yoursAlone: false },
  { id: "purchased", label: "Purchased", at: "—", yoursAlone: true },
] as const;

export default function DeliveryTracker({
  tone = "light",
}: {
  tone?: "light" | "dark"; // "light" = sitting on a dark surface
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [reached, setReached] = useState(0);
  const light = tone === "light";

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReached(5);
      return;
    }
    const timers = STAGES.slice(0, 5).map((_, i) =>
      setTimeout(() => setReached(i + 1), 320 + i * 480),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const progress = (Math.max(0, reached - 1) / (STAGES.length - 1)) * 100;

  return (
    <div
      ref={ref}
      className={`rounded-lg p-5 sm:p-6 ${
        light ? "hairline-light bg-paper/[0.04]" : "hairline bg-white"
      }`}
    >
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p
            className={`font-mono text-[0.66rem] tracking-[0.2em] uppercase ${
              light ? "text-gold" : "text-amber"
            }`}
          >
            Order #DEL-0042
          </p>
          <p
            className={`mt-1 text-sm font-semibold ${light ? "text-paper" : "text-maroon"}`}
          >
            Ranjith Stores · 150 kg red raw rice
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 font-mono text-[0.64rem] tracking-[0.12em] uppercase ${
            reached >= 5
              ? "bg-gold/15 text-gold"
              : light
                ? "bg-paper/10 text-paper/60"
                : "bg-maroon/8 text-ink/60"
          }`}
        >
          {reached >= 5 ? "On the way" : "Updating"}
        </span>
      </header>

      {/* the rail */}
      <div className="relative mt-8">
        <div
          className={`absolute top-[7px] right-0 left-0 h-0.5 rounded-full ${
            light ? "bg-paper/12" : "bg-maroon/12"
          }`}
        />
        <div
          className="absolute top-[7px] left-0 h-0.5 rounded-full bg-gradient-to-r from-amber to-gold transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${progress}%` }}
        />

        <ol className="relative grid grid-cols-3 gap-y-7 sm:grid-cols-6">
          {STAGES.map((stage, i) => {
            const done = i < reached;
            const current = i === reached - 1;
            return (
              <li key={stage.id} className="flex flex-col items-start">
                {/* The stage the order is sitting at right now gets the green
                    treatment and a live ping, so the eye lands on "where is
                    it" before it reads any of the labels. */}
                <span
                  className={`relative flex size-4 items-center justify-center rounded-full transition-colors duration-300 ${
                    current
                      ? "bg-leaf"
                      : done
                        ? "bg-gold"
                        : light
                          ? "bg-ink-800 ring-1 ring-paper/20"
                          : "bg-paper ring-1 ring-maroon/20"
                  }`}
                >
                  {done && (
                    <svg
                      viewBox="0 0 12 12"
                      className={`size-2.5 ${current ? "text-paper" : "text-maroon"}`}
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
                  {current && (
                    <span
                      aria-hidden="true"
                      className="absolute inline-flex size-full animate-ping rounded-full bg-leaf/60"
                    />
                  )}
                </span>
                <span
                  className={`mt-3 text-xs font-semibold ${
                    done
                      ? light
                        ? "text-paper"
                        : "text-maroon"
                      : light
                        ? "text-paper/45"
                        : "text-ink/45"
                  }`}
                >
                  {stage.label}
                </span>
                <span
                  className={`mt-0.5 font-mono text-[0.6rem] ${light ? "text-paper/35" : "text-ink/40"}`}
                >
                  {stage.at}
                </span>
                {stage.yoursAlone && (
                  <span
                    className={`mt-1 font-mono text-[0.58rem] tracking-[0.1em] uppercase ${
                      light ? "text-gold/70" : "text-amber"
                    }`}
                  >
                    yours alone
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <p
        className={`mt-7 border-t pt-4 text-xs/5 ${
          light
            ? "border-paper/10 text-paper/50"
            : "border-maroon/10 text-ink/55"
        }`}
      >
        Stage changes arrive live, without refreshing. Only you can mark an
        order purchased — that is the moment your stock count goes up.
      </p>
    </div>
  );
}
