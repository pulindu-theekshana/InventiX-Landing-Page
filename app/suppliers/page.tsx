import type { Metadata } from "next";
import Image from "next/image";

import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/motion";
import { Badge, Card, Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

import SupplierScore from "@/components/widgets/SupplierScore";
import DeliveryTracker from "@/components/widgets/DeliveryTracker";

export const metadata: Metadata = {
  title: "Suppliers & delivery",
  description:
    "How InventiX scores suppliers out of 100 on quality, delivery speed, quantity availability and price, and how the six delivery stages are tracked by both sides.",
};

/* The real weighting. Speed is measured from completed orders, never from
   the lead time a supplier claims. */
const criteria = [
  {
    name: "Quality",
    weight: 40,
    source: "Star ratings from shops after delivery",
    body: "Damaged bags, short-dated stock, the wrong grade of rice. You rate it once at receiving and it stays on that supplier's record — the largest single part of their score, because it is the part you feel first.",
  },
  {
    name: "Delivery speed",
    weight: 30,
    source: "Measured from orders that actually completed",
    body: "Not the lead time they claim. The clock runs from the moment you place the order to the moment you confirm receipt, using the timestamps from the six stages. A supplier cannot improve this by promising harder.",
  },
  {
    name: "Quantity availability",
    weight: 20,
    source: "Whether they could fill what you asked for",
    body: "Ordered 200 kg, they hold 180. The gap between what you needed and what they could supply is measured on every order, rather than remembered vaguely.",
  },
  {
    name: "Price",
    weight: 10,
    source: "Against other suppliers of the same product",
    body: "The smallest weight on purpose. The cheapest supplier who arrives late with damaged stock is not the best supplier, and a score that says otherwise would be useless to you.",
  },
];

const fairness = [
  {
    head: "Two opinions are not evidence",
    body: "With only one or two ratings, a supplier's average is pulled back towards neutral. One five-star review should not put somebody at the top of your list.",
  },
  {
    head: "New suppliers are labelled, not buried",
    body: "Under three completed orders they show as new, with a provisional score. A newcomer who might be excellent stays visible instead of sinking out of sight.",
  },
  {
    head: "Nobody who fails is hidden",
    body: "A supplier who cannot fill your quantity is marked as such and still shown, so you can see why they placed lower rather than wondering where they went.",
  },
];

export default function SuppliersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-32 size-[34rem] rounded-full bg-maroon-400/25 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-20">
          <Reveal from="left">
            <SectionHeading
              tone="light"
              eyebrow="Suppliers & delivery"
              title="Loyalty is good. Records are better."
              intro="Most shop owners already know who lets them down. InventiX makes it something you can show — and act on the same day, without losing the history of the supplier you are leaving."
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <Spotlight className="rounded-lg lg:ml-6">
              <SupplierScore tone="light" />
            </Spotlight>
          </Reveal>
        </div>
      </section>

      {/* The four parts of the score */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Ranking"
              title="A score out of 100, and you can see every part of it"
              intro="Four measurements, weighted. Nothing subjective beyond your own star rating, and nothing collected from anywhere but your own orders."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {criteria.map((c, i) => (
              <Reveal key={c.name} delay={i * 80} from={i % 2 ? "right" : "left"}>
                <Card className="h-full">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-maroon">{c.name}</h3>
                    <span className="tracking-display shrink-0 text-2xl font-bold text-gold">
                      {c.weight}
                      <span className="text-sm text-ink/40">/100</span>
                    </span>
                  </div>

                  {/* the weight, drawn to scale */}
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-maroon/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber to-gold"
                      style={{ width: `${c.weight}%` }}
                    />
                  </div>

                  <p className="mt-3 font-mono text-[0.66rem] text-ink/50">
                    {c.source}
                  </p>
                  <p className="mt-4 text-base/7 text-ink/70">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fairness */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="Keeping it fair"
              title="A ranking that can be gamed is worth nothing"
              intro="Three rules stop the score from rewarding the wrong things."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fairness.map((f, i) => (
              <Reveal key={f.head} delay={i * 90} from="scale">
                <div className="h-full border-t-2 border-gold pt-5">
                  <h3 className="text-lg font-bold text-maroon">{f.head}</h3>
                  <p className="mt-3 text-base/7 text-ink/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-14 max-w-2xl text-sm/6 text-ink/60">
              Your star rating sits alongside the measured scores rather than
              replacing them — a supplier can be slow and still be the one you
              trust with fragile stock. Switching supplier for an item takes one
              change, and the history of the old one stays intact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="scroll-mt-24 bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Delivery"
              title="Where the order actually is"
              intro="Six stages, visible to both sides, changing live without a refresh. Each one is a timestamp, and those timestamps are what the speed score is built from."
            />
          </Reveal>

          <Reveal delay={120} from="scale">
            <div className="mt-12">
              <DeliveryTracker tone="light" />
            </div>
          </Reveal>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal from="left" delay={160}>
              <div className="hairline-light overflow-hidden rounded-lg">
                <Image
                  src="/img/photo/delivery.jpg"
                  alt="Two workers loading cartons into the back of a delivery lorry at a loading bay."
                  width={1024}
                  height={765}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal from="right" delay={200}>
              <div>
                <h3 className="text-xl font-bold text-paper">
                  The last stage is yours alone
                </h3>
                <p className="mt-4 text-base/7 text-paper/70">
                  The supplier moves an order through the first five stages.
                  Only you can mark it purchased, because that is the moment
                  your stock count goes up. A supplier saying
                  &ldquo;delivered&rdquo; is a claim; you confirming it is a
                  fact, and a stock count built on claims is not worth keeping.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge tone="good">stage changes arrive live</Badge>
                  <Badge tone="warn">a decline needs a reason</Badge>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-12 rounded-lg border border-amber/30 bg-amber/[0.07] p-6">
              <Eyebrow tone="light">Still being decided</Eyebrow>
              <p className="mt-3 max-w-3xl text-base/7 text-paper/70">
                Live GPS tracking of the delivery vehicle on a map is something
                we are considering. It depends on suppliers agreeing to share
                location, so we are not promising it yet — the six stages above
                work without anyone installing anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bring your supplier list"
        intro="Send us the suppliers you buy from and what they deliver. We'll set up the scorecard so it starts recording from your next delivery."
      />
    </>
  );
}
