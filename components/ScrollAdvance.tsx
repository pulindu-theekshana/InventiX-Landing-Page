"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Scroll past the bottom of a page and it carries you to the next one.
 *
 * Taking the scroll wheel off someone is rude unless it is very carefully
 * guarded, so this does not fire on "you happened to reach the bottom".
 * Four guards stand between the bottom of the page and a navigation:
 *
 *   1. ARMING DELAY — after you land at the bottom nothing counts for
 *      600ms. That window swallows the tail of the flick that got you
 *      there, so one continuous scroll can never advance the page.
 *   2. INTENT THRESHOLD — once armed, you have to push roughly another
 *      screen's worth of wheel before it fires, and the hint shows that
 *      building up so it is never a surprise.
 *   3. DECAY — stop pushing and the accumulated intent bleeds away. Rest
 *      your hand on the trackpad and nothing happens.
 *   4. COOLDOWN — after navigating, the whole mechanism is dead for a
 *      second, so momentum cannot skip two pages.
 *
 * It is off entirely for touch (momentum scrolling misfires constantly),
 * for reduced-motion users, and on any page short enough not to scroll.
 */

const ORDER = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const ARM_DELAY = 600; // ms at the bottom before intent starts counting
const THRESHOLD = 620; // px of extra wheel needed to commit
const DECAY_PER_MS = 1.6; // px of intent lost per ms while idle
const COOLDOWN = 1100; // ms after a navigation
const EXIT_MS = 380; // must match the exit animation below

export default function ScrollAdvance() {
  const router = useRouter();
  const pathname = usePathname();

  const [progress, setProgress] = useState(0); // 0–1, drives the hint
  const [armed, setArmed] = useState(false);

  const intent = useRef(0);
  const armedAt = useRef<number | null>(null);
  const busy = useRef(false);
  const lastWheel = useRef(0);
  const raf = useRef(0);

  const next = ORDER[ORDER.findIndex((p) => p.href === pathname) + 1];

  /* ---------------------------------------------------------------- */
  /* The exit: the page lifts and dissolves as one piece.               */
  /*                                                                    */
  /* An earlier version scattered the sections individually. It read as  */
  /* mess rather than motion — too many things moving in too many        */
  /* directions to follow. One object, one direction, one short move is  */
  /* sharper and it gets out of the way faster.                          */
  /* ---------------------------------------------------------------- */
  const liftOut = useCallback(() => {
    const main = document.getElementById("main");
    if (!main) return Promise.resolve();

    const anim = main.animate(
      [
        { transform: "none", opacity: 1 },
        {
          transform: "translate3d(0, -26px, 0) scale(0.988)",
          opacity: 0,
        },
      ],
      {
        duration: EXIT_MS,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        fill: "forwards",
      },
    );

    return anim.finished.catch(() => undefined);
  }, []);

  const go = useCallback(async () => {
    if (!next || busy.current) return;
    busy.current = true;
    intent.current = 0;
    setProgress(0);
    setArmed(false);

    // tells the incoming page to assemble rather than simply fade in
    try {
      sessionStorage.setItem("ix-shuffle", "1");
    } catch {
      /* private mode — the plain fade is a fine fallback */
    }

    await liftOut();
    router.push(next.href);
    window.setTimeout(() => {
      busy.current = false;
    }, COOLDOWN);
  }, [next, router, liftOut]);

  /* ---------------------------------------------------------------- */

  useEffect(() => {
    // Reset the intent state when the route changes — but do NOT touch the
    // scroll position. Next handles that already, and forcing it to the top
    // here would break every in-page anchor (/about#contact, /features#reports).
    intent.current = 0;
    armedAt.current = null;
    setProgress(0);
    setArmed(false);
  }, [pathname]);

  useEffect(() => {
    if (!next) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (coarse || reduced) return;

    const atBottom = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable < 200) return false; // page barely scrolls; leave it alone
      return window.scrollY >= scrollable - 2;
    };

    const onScroll = () => {
      if (busy.current) return;
      if (atBottom()) {
        if (armedAt.current === null) armedAt.current = performance.now();
      } else {
        armedAt.current = null;
        intent.current = 0;
        setProgress(0);
        setArmed(false);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (busy.current) return;
      if (e.deltaY <= 0) {
        // scrolling back up is an explicit "no"
        intent.current = 0;
        setProgress(0);
        return;
      }
      if (armedAt.current === null) return;
      if (performance.now() - armedAt.current < ARM_DELAY) return;

      lastWheel.current = performance.now();
      intent.current = Math.min(THRESHOLD, intent.current + e.deltaY);
      setArmed(true);
      setProgress(intent.current / THRESHOLD);

      if (intent.current >= THRESHOLD) void go();
    };

    // intent bleeds away the moment you stop pushing
    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      if (busy.current || intent.current <= 0) return;
      const idle = performance.now() - lastWheel.current;
      if (idle < 90) return;
      intent.current = Math.max(0, intent.current - DECAY_PER_MS * 16);
      setProgress(intent.current / THRESHOLD);
      if (intent.current === 0) setArmed(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf.current);
    };
  }, [next, go, pathname]);

  if (!next) return null;

  const R = 13;
  const C = 2 * Math.PI * R;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center transition-all duration-300 ${
        armed
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-maroon/12 bg-paper/95 py-2 pr-4 pl-2.5 shadow-[0_12px_32px_-12px_rgba(80,22,2,0.4)] backdrop-blur-md">
        <span className="relative flex size-8 items-center justify-center">
          <svg viewBox="0 0 32 32" className="size-8 -rotate-90">
            <circle
              cx="16"
              cy="16"
              r={R}
              fill="none"
              strokeWidth="2.5"
              className="stroke-maroon/15"
            />
            <circle
              cx="16"
              cy="16"
              r={R}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stroke-gold"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - progress)}
            />
          </svg>
          <svg
            viewBox="0 0 12 12"
            className="absolute size-3 text-maroon"
          >
            <path
              d="M6 1.5v9m0 0 3.5-3.5M6 10.5 2.5 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-xs text-ink/60">
          Keep scrolling for{" "}
          <span className="font-semibold text-maroon">{next.label}</span>
        </span>
      </div>
    </div>
  );
}
