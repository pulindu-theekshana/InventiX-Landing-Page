"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion";

/**
 * Three taps from a low shelf to an order in the supplier's hands.
 *
 * The app writes the message — shop name, products, quantities, estimated
 * total, in complete sentences — and then checks it against what the
 * supplier genuinely holds before it can be sent, rather than after.
 */

const CHANNELS = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "email", label: "Email" },
  { id: "app", label: "In the app" },
] as const;

const LINES = [
  "Hello Ranjith Stores,",
  "This is Wasantha Stores, Kotikawatte.",
  "We would like to order 150 kg of red raw rice (5 kg packs).",
  "Estimated total: LKR 37,500.",
  "Could you deliver by Thursday 18 September?",
];

export default function ReorderComposer() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [tap, setTap] = useState(0);
  const [channel, setChannel] = useState<string>("whatsapp");

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTap(3);
      return;
    }
    const t = [
      setTimeout(() => setTap(1), 350),
      setTimeout(() => setTap(2), 1500),
      setTimeout(() => setTap(3), 2900),
    ];
    return () => t.forEach(clearTimeout);
  }, [inView]);

  const steps = [
    "Tap the low item",
    "The app writes the message",
    "Send it the way they actually use",
  ];

  return (
    <div ref={ref} className="hairline rounded-lg bg-white p-5 sm:p-6">
      {/* the three taps */}
      <ol className="flex flex-wrap gap-x-6 gap-y-2">
        {steps.map((label, i) => (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex size-5 items-center justify-center rounded-full font-mono text-[0.6rem] font-bold transition-colors duration-400 ${
                tap > i ? "bg-gold text-maroon" : "bg-maroon/8 text-ink/40"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`text-xs font-medium transition-colors duration-400 ${
                tap > i ? "text-maroon" : "text-ink/40"
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>

      {/* the message it drafts */}
      <div className="mt-6 rounded-md bg-paper-200/60 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[0.62rem] tracking-[0.16em] text-amber uppercase">
            Draft · editable before it goes
          </p>
          {tap >= 2 && (
            <span className="animate-drop-in font-mono text-[0.62rem] text-leaf">
              ready
            </span>
          )}
        </div>

        <div className="mt-3 space-y-1.5">
          {LINES.map((line, i) => (
            <p
              key={line}
              className="text-sm/6 text-maroon transition-all duration-500"
              style={{
                opacity: tap >= 2 ? 1 : 0,
                transform: tap >= 2 ? "none" : "translateY(6px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* the checks that run before it can be sent */}
      <ul
        className="mt-4 flex flex-wrap gap-2 transition-opacity duration-500"
        style={{ opacity: tap >= 2 ? 1 : 0 }}
      >
        {[
          "150 kg is within what they hold",
          "Above their 50 kg minimum",
          "No open rice order with them",
        ].map((check) => (
          <li
            key={check}
            className="flex items-center gap-1.5 rounded-full bg-leaf-100 px-2.5 py-1 font-mono text-[0.62rem] text-leaf"
          >
            <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
              <path
                d="M2.5 6.2 4.8 8.5 9.5 3.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {check}
          </li>
        ))}
      </ul>

      {/* channel — a real choice, because suppliers differ */}
      <div
        className="mt-6 transition-opacity duration-500"
        style={{ opacity: tap >= 3 ? 1 : 0.35 }}
      >
        <p className="font-mono text-[0.62rem] tracking-[0.16em] text-ink/45 uppercase">
          Send by
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          {CHANNELS.map((c) => {
            const on = channel === c.id;
            return (
              <button
                key={c.id}
                type="button"
                disabled={tap < 3}
                onClick={() => setChannel(c.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  on
                    ? "bg-maroon text-paper"
                    : "bg-maroon/6 text-ink/60 hover:bg-maroon/12"
                } disabled:cursor-default`}
              >
                {c.label}
              </button>
            );
          })}
          <span className="ml-auto font-mono text-[0.62rem] text-ink/45">
            one key per order — sending twice still makes one order
          </span>
        </div>
      </div>
    </div>
  );
}
