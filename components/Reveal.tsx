"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type From = "up" | "left" | "right" | "scale";

/**
 * Scroll-in transition.
 *
 * `from` picks the direction the content travels, which should match where
 * it sits: a left column enters from the left, a panel that replaces
 * something enters by scaling. Direction is information, not decoration.
 *
 * Honours prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      data-from={from}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Staggers its children in one after another. Cheaper to write than a
 * Reveal per child and keeps the rhythm even.
 */
export function RevealGroup({
  children,
  step = 80,
  from = "up",
  className = "",
}: {
  children: ReactNode[];
  step?: number;
  from?: From;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step} from={from} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
