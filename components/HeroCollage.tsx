"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import mockup from "@/public/app-mockup.png";
import { Parallax } from "./motion";

/**
 * The hero, built as a collage rather than a screenshot with a caption.
 *
 * The app screen is the anchor; the cards around it are the three things
 * the app does that a static screenshot cannot show — it notices, it
 * ranks, it drafts. They land one after another on load, and drift at
 * different rates as you scroll so the group reads as layered depth
 * instead of one flat image.
 */
export default function HeroCollage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(3);
      return;
    }
    const t = [
      setTimeout(() => setStep(1), 900),
      setTimeout(() => setStep(2), 1700),
      setTimeout(() => setStep(3), 2500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex justify-center py-8 lg:py-4">
      {/* warm light behind the glass */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 left-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[100px]"
      />

      <Parallax strength={-18}>
        <div className="group relative">
          <div className="float-on-hover">
            <Image
              src={mockup}
              alt="The InventiX stock screen: 550 items split into in stock, low stock, out of stock and overstock, above a searchable product list with prices and counts."
              priority
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 260px, 280px"
              className="w-[230px] drop-shadow-[0_34px_60px_rgba(0,0,0,0.55)] sm:w-[260px] lg:w-[280px]"
            />
          </div>

          {/* it notices */}
          {step >= 1 && (
            <Parallax
              strength={26}
              className="animate-drop-in absolute -top-4 left-1/2 z-20 w-[13.5rem] -translate-x-1/2 sm:top-[14%] sm:-left-[150px] sm:translate-x-0 lg:-left-[190px]"
            >
              <div className="rounded-md border border-gold/30 bg-maroon p-3 shadow-[0_20px_44px_-14px_rgba(0,0,0,0.75)]">
                <div className="flex items-start gap-2.5">
                  <span className="animate-pulse-ring mt-1 size-2 shrink-0 rounded-full bg-gold" />
                  <div className="min-w-0">
                    <p className="text-[0.8rem] font-semibold text-paper">
                      Milk powder is running low
                    </p>
                    <p className="mt-1 font-mono text-[0.62rem] text-paper/60">
                      12 packs left · 4 days of cover
                    </p>
                  </div>
                </div>
              </div>
            </Parallax>
          )}

          {/* it ranks */}
          {step >= 2 && (
            <Parallax
              strength={40}
              className="animate-drop-in absolute top-[42%] -right-6 z-20 hidden w-[12.5rem] sm:block lg:-right-[120px]"
            >
              <div className="rounded-md border border-paper/12 bg-ink-800/95 p-3 shadow-[0_20px_44px_-14px_rgba(0,0,0,0.75)] backdrop-blur-sm">
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-gold uppercase">
                  Best supplier · rice
                </p>
                <p className="mt-1.5 text-[0.8rem] font-semibold text-paper">
                  Ranjith Stores
                </p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-paper/12">
                  <div className="h-full w-[89%] rounded-full bg-gradient-to-r from-amber to-gold" />
                </div>
                <p className="mt-1.5 font-mono text-[0.6rem] text-paper/50">
                  89/100 · 4.6 ★ · 2 days
                </p>
              </div>
            </Parallax>
          )}

          {/* it drafts */}
          {step >= 3 && (
            <Parallax
              strength={14}
              className="animate-drop-in absolute -bottom-5 left-1/2 z-20 w-[13.5rem] -translate-x-1/2 sm:bottom-[10%] sm:-left-[150px] sm:translate-x-0 lg:-left-[190px]"
            >
              <div className="rounded-md border border-leaf/40 bg-leaf-100 p-3 shadow-[0_20px_44px_-14px_rgba(0,0,0,0.5)]">
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-leaf uppercase">
                  WhatsApp · draft ready
                </p>
                <p className="mt-1.5 text-[0.8rem]/5 text-maroon">
                  “Highland agent — please send 60 packs of 400 g by
                  Thursday.”
                </p>
              </div>
            </Parallax>
          )}
        </div>
      </Parallax>
    </div>
  );
}
