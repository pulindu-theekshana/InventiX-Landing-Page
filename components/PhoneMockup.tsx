"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import mockup from "@/public/app-mockup.png";

/**
 * The Stocks screen, face on.
 *
 * No tilt and no perspective — a rotated phone reads as an angled sheet
 * unless you build real geometry behind it, and at this size it isn't worth
 * it. Depth comes from the drop shadow and the warm glow instead.
 *
 * The phone bobs gently while the pointer is over it. That's done with
 * `animation-play-state` rather than React state, so the motion eases in
 * from wherever the loop happens to be instead of snapping.
 */
export default function PhoneMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      return;
    }
    const timers = [
      setTimeout(() => setStep(1), 1400),
      setTimeout(() => setStep(2), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="group relative flex justify-center py-6">
      {/* warm glow behind the glass */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 left-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[90px]"
      />

      <div className="float-on-hover relative">
        <Image
          src={mockup}
          alt="The InventiX Stocks screen: 550 items broken into in stock, low stock, out of stock and overstock, above a searchable product list with prices and stock counts."
          priority
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 264px"
          className="w-[220px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] sm:w-[250px] lg:w-[264px]"
        />

        {/* low-stock alert — right side, overlapping the phone by a sixth */}
        {step >= 1 && (
          <div className="animate-drop-in absolute -top-6 left-1/2 z-10 w-44 -translate-x-1/2 rounded-xl border border-gold/30 bg-maroon p-3 shadow-2xl shadow-black/60 sm:top-[17%] sm:left-auto sm:-right-[160px] sm:w-48 sm:translate-x-0">
            <div className="flex items-start gap-2.5">
              <span className="animate-pulse-ring mt-1 size-2 shrink-0 rounded-full bg-gold" />
              <div>
                <p className="text-[0.8rem] font-semibold text-paper">
                  Milk powder is running low
                </p>
                <p className="mt-1 font-mono text-[0.62rem] text-paper/60">
                  12 packs left · 4 days of cover
                </p>
              </div>
            </div>
          </div>
        )}

        {/* the message it drafts — left side, same overlap */}
        {step >= 2 && (
          <div className="animate-drop-in absolute -bottom-6 left-1/2 z-10 w-44 -translate-x-1/2 rounded-xl border border-leaf/40 bg-leaf-100 p-3 shadow-2xl shadow-black/50 sm:bottom-[15%] sm:-left-[160px] sm:w-48 sm:translate-x-0">
            <p className="font-mono text-[0.58rem] tracking-[0.16em] text-leaf uppercase">
              WhatsApp · draft ready
            </p>
            <p className="mt-1.5 text-[0.8rem]/5 text-maroon">
              “Highland agent — please send 60 packs of 400g by Thursday.”
            </p>
            <p className="mt-2 font-mono text-[0.62rem] text-maroon/55">
              Top-rated supplier · 4.6 ★
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
