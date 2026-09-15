"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Route transition.
 *
 * A template re-mounts on every navigation (a layout does not), so this
 * runs each time you move between pages.
 *
 * Two different arrivals:
 *
 *  - Normal click → a short lift-and-fade. Long enough to say "this is a
 *    different page", short enough never to sit between someone and what
 *    they clicked.
 *  - Arrived by scrolling off the bottom of the previous page → the
 *    sections assemble. They come in out of order and slightly out of
 *    place, then settle, which answers the scatter the previous page left
 *    on. ScrollAdvance sets the flag that asks for this.
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    let shuffled = false;
    try {
      shuffled = sessionStorage.getItem("ix-shuffle") === "1";
      if (shuffled) sessionStorage.removeItem("ix-shuffle");
    } catch {
      /* private mode — fall through to the plain fade */
    }

    if (!shuffled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = [
      ...host.querySelectorAll<HTMLElement>("section"),
    ].filter((s) => !s.parentElement?.closest("section"));
    if (!sections.length) return;

    host.classList.remove("page-in");

    sections.forEach((el, i) => {
      const side = i % 2 === 0 ? 1 : -1;
      el.animate(
        [
          {
            transform: `translate3d(${side * (60 + i * 12)}px, 90px, 0) rotate(${side * (2.5 + i * 0.6)}deg) scale(0.92)`,
            opacity: 0,
            filter: "blur(3px)",
          },
          {
            transform: `translate3d(${side * 10}px, 8px, 0) rotate(${side * 0.4}deg) scale(0.995)`,
            opacity: 1,
            filter: "blur(0px)",
            offset: 0.62,
          },
          { transform: "none", opacity: 1, filter: "blur(0px)" },
        ],
        {
          duration: 720,
          // last section out is first section in, so the page reassembles
          // from the direction it left rather than replaying the same order
          delay: (sections.length - 1 - i) * 55,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );
    });
  }, []);

  return (
    <div ref={ref} className="page-in">
      {children}
    </div>
  );
}
