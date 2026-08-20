import Link from "next/link";
import StockBoard from "@/components/StockBoard";
import PhoneMockup from "@/components/PhoneMockup";
import SeasonTimeline from "@/components/SeasonTimeline";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import {
  ButtonLink,
  Eyebrow,
  SectionHeading,
  ShelfRail,
} from "@/components/ui";
import { LogoMark } from "@/components/Logo";

const problems = [
  {
    title: "The shelf empties quietly",
    body: "Nobody notices the rice is finished until a customer asks for it. By then the sale has walked to the shop down the road.",
  },
  {
    title: "Money sleeps in the back room",
    body: "Cartons bought on a hunch sit unsold for months. That's cash you could have spent on stock that actually moves.",
  },
  {
    title: "The season arrives too late",
    body: "Awurudu orders placed in March cost more and arrive short. The decision needed making in January.",
  },
];

const pillars = [
  {
    name: "Stock",
    body: "Every item, batch and count in one place, with a reorder point per product and an alert the moment it's crossed.",
    href: "/features",
  },
  {
    name: "Suppliers",
    body: "Ranked on quality, quantity and delivery speed, rated by you, and swappable the day one stops performing.",
    href: "/suppliers",
  },
  {
    name: "Deliveries",
    body: "Four honest stages from processing to purchased, so you know what's on the road and what's still a promise.",
    href: "/suppliers#delivery",
  },
  {
    name: "Reports",
    body: "What sold, what sat, what it cost — for the week, the month or the season, exportable for your accountant.",
    href: "/features#reports",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-40 -right-40 size-[38rem] rounded-full bg-maroon-400/25 blur-3xl" />
          <div className="absolute -bottom-56 -left-32 size-[32rem] rounded-full bg-amber/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-20 pb-28 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-28 lg:pb-36">
          <div>
            <Reveal>
              <Eyebrow tone="light">
                For grocery shops in Sri Lanka
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.035em] text-balance text-paper sm:text-6xl">
                Know what&apos;s running out{" "}
                <span className="text-gold">before your customers do.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg/8 text-pretty text-paper/70">
                InventiX watches your stock, ranks your suppliers and reads your
                own sales history — then tells you what to order, how much, and
                when to send the message.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href="/about#contact">
                  Request early access
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="quiet">
                  See how it works
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-paper/10 pt-8">
                {[
                  ["4", "delivery stages tracked"],
                  ["2–3", "months of seasonal warning"],
                  ["3", "criteria behind every supplier rank"],
                ].map(([figure, label]) => (
                  <div key={label}>
                    <dt className="font-mono text-2xl font-bold text-gold">
                      {figure}
                    </dt>
                    <dd className="mt-1 text-xs/5 text-paper/55">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:pl-6">
            <StockBoard />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* The app itself                                              */}
      {/* ---------------------------------------------------------- */}
      <section className="overflow-hidden bg-gradient-to-b from-ink to-maroon">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <Reveal>
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Inside the app"
                title="Your whole shop, on the counter phone"
                intro="Every item, its price, and how many are left — with the ones about to run out already pulled to the top."
              />
              <ul className="mt-9 space-y-4">
                {[
                  "One glance tells you how the 550 items on your shelves are split",
                  "Filter to low stock and the reorder list writes itself",
                  "Tap an item to see its supplier, last price and delivery history",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-base/7 text-paper/70"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/features" variant="quiet">
                  Every feature in detail
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Problem                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="Why we built it"
              title="Three ways a good shop loses money without noticing"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {problems.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="text-lg font-bold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base/7 text-ink/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Four pillars                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What's inside"
              title="Four parts of the shop, one app"
              intro="Each one works on its own. Together they close the loop from an empty shelf to a delivered carton."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-maroon/10 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.name} delay={i * 70}>
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper"
                >
                  <div className="flex items-center gap-3">
                    <LogoMark className="h-5 w-auto opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="text-xl font-bold text-maroon">
                      {pillar.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base/7 text-ink/70">{pillar.body}</p>
                  <span className="mt-6 font-mono text-xs tracking-[0.14em] text-amber uppercase transition-transform duration-300 group-hover:translate-x-1">
                    Read more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Seasons                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Seasonal dashboard"
              title="Awurudu is decided in January, not April"
              intro="InventiX marks the seasons that move your particular shelves and tells you two to three months ahead what to buy and roughly how much."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <SeasonTimeline tone="light" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-mono text-xs text-paper/40">
              Bars show the order window ahead of each peak. Your own sales
              history sets the quantities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Suppliers teaser                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Suppliers"
                title="Keep the ones who deliver. Replace the ones who don't."
                intro="Every supplier carries a score built from three things you can actually feel in the shop: the quality of what arrives, whether the quantity matches the order, and how fast it gets to you."
              />
              <div className="mt-8">
                <ButtonLink href="/suppliers" variant="outline">
                  How ranking works
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-maroon/12 bg-white p-6 shadow-sm">
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-amber uppercase">
                Rice · 3 suppliers
              </p>
              <ul className="mt-5 divide-y divide-maroon/10">
                {[
                  ["Ranjith Stores", 4.6, 92, "2 days"],
                  ["Sampath Traders", 4.1, 78, "3 days"],
                  ["New Lanka Agencies", 3.2, 54, "6 days"],
                ].map(([name, rating, score, speed]) => (
                  <li
                    key={name as string}
                    className="flex items-center gap-4 py-4"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-maroon">
                        {name}
                      </p>
                      <p className="font-mono text-[0.68rem] text-ink/50">
                        {rating} ★ · avg {speed}
                      </p>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-maroon/10 sm:w-32">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber to-gold"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-mono text-xs text-ink/60">
                      {score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
