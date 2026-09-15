"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type TabItem = {
  id: string;
  label: string;
  panel: ReactNode;
};

/**
 * Tabs with a sliding indicator and a directional panel swap.
 *
 * The direction matters: move to a tab on the right and the new panel
 * comes in from the right. It tells you which way you just travelled,
 * which a plain crossfade does not. The indicator slides between tabs
 * rather than cutting, for the same reason — it keeps the two states
 * connected instead of making you re-find the selection.
 *
 * Keyboard: arrow keys move, Home/End jump. Standard tablist roles, so
 * a screen reader announces it as tabs and not as a row of buttons.
 */
export default function Tabs({
  items,
  tone = "dark",
  className = "",
}: {
  items: TabItem[];
  tone?: "dark" | "light"; // "light" = sitting on a dark surface
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const listRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });

  const light = tone === "light";

  // Track height and top as well as left and width. If the list ever wraps
  // onto a second line, an indicator pinned to the full height of the list
  // stretches across both rows instead of sitting behind one tab.
  const measure = useCallback(() => {
    const node = tabRefs.current[active];
    const list = listRef.current;
    if (!node || !list) return;
    setIndicator({
      left: node.offsetLeft,
      width: node.offsetWidth,
      top: node.offsetTop,
      height: node.offsetHeight,
    });
  }, [active]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    // Fonts landing late shift the tab widths underneath the indicator
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure).catch(() => {});
    }
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const select = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <div
        ref={listRef}
        role="tablist"
        aria-label="Feature areas"
        onKeyDown={onKeyDown}
        className={`ix-tablist relative flex max-w-full gap-1 overflow-x-auto rounded-full p-1 sm:inline-flex sm:overflow-visible ${
          light
            ? "bg-paper/[0.06] hairline-light"
            : "bg-maroon/[0.05] hairline"
        }`}
      >
        {/* the indicator that slides between tabs */}
        <span
          aria-hidden="true"
          className="absolute rounded-full bg-gold transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            left: indicator.left,
            width: indicator.width,
            top: indicator.top,
            height: indicator.height,
          }}
        />
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className={`relative z-10 shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                selected
                  ? "text-maroon"
                  : light
                    ? "text-paper/65 hover:text-paper"
                    : "text-ink/60 hover:text-maroon"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {items.map((item, i) =>
          i === active ? (
            <div
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              tabIndex={0}
              className="panel-in focus:outline-none"
              style={
                { "--panel-from": `${direction * 16}px` } as CSSProperties
              }
            >
              {item.panel}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
