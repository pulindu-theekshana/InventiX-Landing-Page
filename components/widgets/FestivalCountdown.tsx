"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion";

/**
 * Counts down to the next festival, from today's real date.
 *
 * The number that matters is not the festival — everyone knows when
 * Awurudu is — it is the order-by date, which lands roughly eleven weeks
 * earlier and is the one nobody has in their head.
 *
 * Dates are computed after mount rather than on the server, so the
 * markup the server sends and the markup React renders always agree.
 * The lunar festivals move year to year and are marked approximate
 * rather than quietly pretending to be exact.
 */

type Festival = {
  name: string;
  month: number; // 1-12
  day: number;
  approx?: boolean;
  buys: string;
};

const FESTIVALS: Festival[] = [
  { name: "Ramadan & Eid", month: 2, day: 18, approx: true, buys: "Dates, ghee, semolina, dried fruit" },
  { name: "Sinhala & Tamil New Year", month: 4, day: 13, buys: "Rice flour, coconut, kithul treacle, cashew, oil" },
  { name: "Vesak", month: 5, day: 12, approx: true, buys: "Sugar, milk powder, dansal ingredients" },
  { name: "Deepavali", month: 11, day: 8, approx: true, buys: "Oil, sugar, gram flour, dried fruit" },
  { name: "Christmas & New Year", month: 12, day: 25, buys: "Butter, dried fruit, wine, cake ingredients" },
];

const ORDER_LEAD_DAYS = 77; // about eleven weeks
const DAY = 86_400_000;

function nextFestival(today: Date) {
  const year = today.getFullYear();
  const candidates = [
    ...FESTIVALS.map((f) => ({ f, date: new Date(year, f.month - 1, f.day) })),
    ...FESTIVALS.map((f) => ({ f, date: new Date(year + 1, f.month - 1, f.day) })),
  ];
  const upcoming = candidates
    .filter((c) => c.date.getTime() >= today.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
  return upcoming;
}

const fmt = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "long" });

export default function FestivalCountdown({
  tone = "dark",
}: {
  tone?: "light" | "dark";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [data, setData] = useState<{
    name: string;
    approx: boolean;
    buys: string;
    peak: Date;
    orderBy: Date;
    daysToPeak: number;
    daysToOrder: number;
  } | null>(null);

  const light = tone === "light";

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { f, date } = nextFestival(today);
    const orderBy = new Date(date.getTime() - ORDER_LEAD_DAYS * DAY);
    setData({
      name: f.name,
      approx: Boolean(f.approx),
      buys: f.buys,
      peak: date,
      orderBy,
      daysToPeak: Math.round((date.getTime() - today.getTime()) / DAY),
      daysToOrder: Math.round((orderBy.getTime() - today.getTime()) / DAY),
    });
  }, []);

  // how far through the run-up we are, for the bar
  const progress = data
    ? Math.min(
        100,
        Math.max(
          0,
          ((180 - data.daysToPeak) / 180) * 100,
        ),
      )
    : 0;

  const orderWindowOpen = data ? data.daysToOrder <= 0 : false;

  return (
    <div
      ref={ref}
      className={`rounded-lg p-6 ${light ? "hairline-light bg-paper/[0.04]" : "hairline bg-white"}`}
    >
      <header className="flex items-center justify-between gap-4">
        <p
          className={`font-mono text-[0.66rem] tracking-[0.2em] uppercase ${light ? "text-gold" : "text-amber"}`}
        >
          Next season
        </p>
        {data?.approx && (
          <span
            className={`font-mono text-[0.6rem] ${light ? "text-paper/40" : "text-ink/45"}`}
          >
            date approximate
          </span>
        )}
      </header>

      {data ? (
        <>
          <h3
            className={`mt-3 text-xl font-bold ${light ? "text-paper" : "text-maroon"}`}
          >
            {data.name}
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-5">
            <div>
              <p
                className={`text-3xl font-bold tracking-display ${light ? "text-paper" : "text-maroon"}`}
              >
                {data.daysToPeak}
              </p>
              <p
                className={`mt-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase ${light ? "text-paper/45" : "text-ink/50"}`}
              >
                days to the peak
              </p>
              <p
                className={`mt-1 font-mono text-[0.66rem] ${light ? "text-paper/55" : "text-ink/55"}`}
              >
                {fmt(data.peak)}
              </p>
            </div>
            <div>
              <p
                className={`text-3xl font-bold tracking-display ${
                  orderWindowOpen ? "text-gold" : light ? "text-paper" : "text-maroon"
                }`}
              >
                {orderWindowOpen ? "Now" : data.daysToOrder}
              </p>
              <p
                className={`mt-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase ${light ? "text-paper/45" : "text-ink/50"}`}
              >
                {orderWindowOpen ? "order window open" : "days until you order"}
              </p>
              <p
                className={`mt-1 font-mono text-[0.66rem] ${light ? "text-paper/55" : "text-ink/55"}`}
              >
                {orderWindowOpen
                  ? `${data.daysToPeak} days of runway left`
                  : `by ${fmt(data.orderBy)}`}
              </p>
            </div>
          </div>

          {/* run-up bar: order window sits well before the peak */}
          <div
            className={`relative mt-7 h-1.5 w-full rounded-full ${light ? "bg-paper/10" : "bg-maroon/10"}`}
          >
            <div
              className="meter-fill h-1.5 rounded-full bg-gradient-to-r from-amber to-gold"
              style={{ width: inView ? `${progress}%` : "0%" }}
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 right-0 size-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold ring-4 ring-gold/20"
            />
          </div>

          <p
            className={`mt-5 text-sm/6 ${light ? "text-paper/65" : "text-ink/70"}`}
          >
            {data.buys}
          </p>

          <p
            className={`mt-5 border-t pt-4 text-xs/5 ${
              light ? "border-paper/10 text-paper/50" : "border-maroon/10 text-ink/55"
            }`}
          >
            Today every shop sees the same expected lift. Once you have
            uploaded a few months of sales, your own history sets the
            quantities instead.
          </p>
        </>
      ) : (
        <div className="mt-3 h-[17rem]" aria-hidden="true" />
      )}
    </div>
  );
}
