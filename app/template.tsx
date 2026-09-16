"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Route transition.
 *
 * A template re-mounts on every navigation (a layout does not), so this
 * runs each time you move between pages.
 *
 * Arriving by scrolling off the bottom of the previous page gets a tight
 * upward rise, section by section, answering the lift the previous page
 * left on. Short distance, short stagger, no rotation and no blur — an
 * earlier version threw the sections around and it read as mess rather
 * than motion. Everything else gets the plain fade.
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    // Release any hold the outgoing page left on #main.
    //
    // ScrollAdvance fades #main out with fill: "forwards" so the old page
    // stays hidden until this one is ready. #main lives in the layout and
    // never remounts, so nothing else would ever clear it — leaving every
    // subsequent page invisible. This template DOES remount on every
    // navigation, which makes it the right place to let go.
    document
      .getElementById("main")
      ?.getAnimations()
      .forEach((a) => a.cancel());

    let arrived = false;
    try {
      arrived = sessionStorage.getItem("ix-shuffle") === "1";
      if (arrived) sessionStorage.removeItem("ix-shuffle");
    } catch {
      /* private mode — fall through to the plain fade */
    }

    if (!arrived) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = [
      ...host.querySelectorAll<HTMLElement>("section"),
    ].filter((s) => !s.parentElement?.closest("section"));
    if (!sections.length) return;

    host.classList.remove("page-in");

    sections.forEach((el, i) => {
      el.animate(
        [
          { transform: "translate3d(0, 26px, 0)", opacity: 0 },
          { transform: "none", opacity: 1 },
        ],
        {
          duration: 520,
          delay: i * 40,
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
