import { Eyebrow } from "./ui";

/**
 * The seasonal strip. Order is real information here — these are months
 * in sequence, and the gap between "order window" and "peak" is the
 * point of the whole feature, so the timeline is drawn to scale.
 */
const seasons = [
  {
    name: "Sinhala & Tamil New Year",
    peak: "April",
    order: "Late January",
    buys: "Rice flour, coconut, kithul treacle, cashew, oil",
    start: 6,
    width: 20,
  },
  {
    name: "Vesak",
    peak: "May",
    order: "Late February",
    buys: "Sugar, milk powder, ingredients for dansal",
    start: 30,
    width: 16,
  },
  {
    name: "Ramadan & Eid",
    peak: "Feb–Mar",
    order: "December",
    buys: "Dates, ghee, semolina, dried fruit",
    start: 50,
    width: 18,
  },
  {
    name: "Christmas & New Year",
    peak: "December",
    order: "Late September",
    buys: "Butter, dried fruit, wine, cake ingredients",
    start: 72,
    width: 22,
  },
];

export default function SeasonTimeline({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const light = tone === "light"; // light = on the dark ink surface

  return (
    <div>
      <div
        className={`hidden h-px w-full md:block ${light ? "bg-paper/15" : "bg-maroon/15"}`}
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {seasons.map((season) => (
          <div
            key={season.name}
            className={`group rounded-xl border p-5 transition duration-300 hover:-translate-y-1 ${
              light
                ? "border-paper/12 bg-paper/[0.04] hover:border-gold/40"
                : "border-maroon/12 bg-white hover:border-gold"
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3
                className={`text-base font-bold ${light ? "text-paper" : "text-maroon"}`}
              >
                {season.name}
              </h3>
              <span
                className={`font-mono text-[0.68rem] whitespace-nowrap ${light ? "text-paper/50" : "text-ink/50"}`}
              >
                {season.peak}
              </span>
            </div>

            {/* to-scale bar: order window → peak */}
            <div
              className={`relative mt-4 h-1.5 w-full rounded-full ${light ? "bg-paper/10" : "bg-maroon/10"}`}
            >
              <div
                className="absolute h-1.5 rounded-full bg-gradient-to-r from-amber to-gold"
                style={{ left: `${season.start}%`, width: `${season.width}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between">
              <Eyebrow tone={light ? "light" : "dark"}>
                Order by {season.order}
              </Eyebrow>
            </div>

            <p
              className={`mt-4 text-sm/6 ${light ? "text-paper/65" : "text-ink/70"}`}
            >
              {season.buys}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
