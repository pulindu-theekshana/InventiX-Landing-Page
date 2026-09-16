import type { Metadata } from "next";
import Image from "next/image";

import CtaBand from "@/components/CtaBand";
import SeasonTimeline from "@/components/SeasonTimeline";
import { Reveal } from "@/components/Reveal";
import { Counter, Spotlight } from "@/components/motion";
import { Badge, ButtonLink, Card, Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

import DeliveryTracker from "@/components/widgets/DeliveryTracker";
import PosUpload from "@/components/widgets/PosUpload";
import FestivalCountdown from "@/components/widgets/FestivalCountdown";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From loading your stock list to a delivered carton: setup, low-stock alerts, supplier messaging, the six delivery stages, and what the forecasting can and cannot do yet.",
};

/* A genuine sequence, so it is numbered. */
const setup = [
  {
    step: "01",
    title: "Load what you already have",
    body: "Import a spreadsheet, or add items as you count the shelves. Most shops get their first hundred items in during one afternoon.",
  },
  {
    step: "02",
    title: "Set a reorder point per item",
    body: "The level at which you would normally start worrying. InventiX suggests a starting point — about a quarter of what you hold — so nobody has to think hard about every item.",
  },
  {
    step: "03",
    title: "Add your suppliers",
    body: "Name, WhatsApp number or email, and what they sell. Their score starts building from the first completed delivery.",
  },
  {
    step: "04",
    title: "Sell as usual",
    body: "Record sales at the counter, or export the day's file from your till and upload it. Everything after this happens on its own.",
  },
];

const loop = [
  {
    head: "Watch",
    body: "Every item is measured against its own reorder point, not a level shared across the shop.",
  },
  {
    head: "Warn",
    body: "Crossing that line raises a notification carrying days of cover, not just a unit count.",
  },
  {
    head: "Order",
    body: "The message is written for you, checked against what the supplier holds, and sent the way they actually reply.",
  },
  {
    head: "Track",
    body: "Six stages, both sides, live. You confirm receipt, and the stock count goes up by itself.",
  },
  {
    head: "Learn",
    body: "Every completed order feeds the supplier's measured speed, and every uploaded sales file feeds what comes next.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 size-[32rem] rounded-full bg-amber/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-20">
          <Reveal from="left">
            <SectionHeading
              tone="light"
              eyebrow="How it works"
              title="From an empty shelf to a delivered carton"
              intro="Four steps to set up. After that the loop runs by itself: watch, warn, order, track, learn."
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <Image
              src="/img/shop-front.svg"
              alt="A neighbourhood grocery shop, its shelves stocked except for one row that has run empty."
              width={640}
              height={420}
              unoptimized
              className="w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Setup */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Getting started"
              title="One afternoon, and then it is running"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {setup.map((item, i) => (
              <Reveal key={item.step} delay={i * 80} from="scale">
                <Card className="h-full">
                  <span className="font-mono text-3xl font-bold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm/6 text-ink/70">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The loop */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="The loop"
              title="Five things, going round"
              intro="None of these need you to remember anything. That is the whole point of them."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {loop.map((item, i) => (
              <Reveal key={item.head} delay={i * 80}>
                <Spotlight className="hairline-light h-full rounded-lg bg-paper/[0.04] p-6">
                  <span className="font-mono text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-paper">
                    {item.head}
                  </h3>
                  <p className="mt-2.5 text-sm/6 text-paper/65">{item.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Your till */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal from="left">
              <div>
                <SectionHeading
                  eyebrow="Keeping the count honest"
                  title="Your till already knows what you sold"
                  intro="Export the day's or week's sales as CSV or Excel and upload it. InventiX finds the columns itself, and reduces your stock by what left the shop."
                />
                <p className="mt-6 text-base/7 text-ink/70">
                  It reads an exported file rather than talking to a till
                  directly, and that is a deliberate choice — it is what lets it
                  work with any POS in the country instead of the three we could
                  get an integration with.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge tone="good">any till that exports a file</Badge>
                  <Badge tone="warn">same file can&apos;t apply twice</Badge>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" delay={120}>
              <PosUpload />
            </Reveal>
          </div>

          <Reveal delay={180}>
            <Image
              src="/img/pos-upload.svg"
              alt="A till receipt exported as a file, its rows matched one by one to the product catalogue."
              width={520}
              height={340}
              unoptimized
              className="mt-16 w-full max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Delivery */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="Delivery tracking"
              title="Six stages, and each one is a timestamp"
              intro="A delivery either moved or it did not. Every stage change is recorded, which is what makes the supplier speed score a measurement rather than a feeling."
            />
          </Reveal>

          <Reveal delay={120} from="scale">
            <div className="mt-12">
              <DeliveryTracker tone="dark" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <Image
                src="/img/delivery.svg"
                alt="A delivery lorry on a marked route between the supplier and the shop."
                width={560}
                height={320}
                unoptimized
                className="w-full max-w-lg"
              />
              <p className="text-base/7 text-ink/70">
                The supplier moves the order through the first five stages. The
                sixth is yours alone, because confirming receipt is the moment
                your stock count goes up — and a supplier saying
                &ldquo;delivered&rdquo; is a claim, while you confirming it is a
                fact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forecasting — honest about what exists today */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
            <Reveal from="left">
              <div>
                <SectionHeading
                  tone="light"
                  eyebrow="Seasons and forecasting"
                  title="What it does today, and what it does not yet"
                  intro="Two shops on the same street sell differently, so a model trained on an average shop is worth very little. Ours will be trained on yours — which means it needs your history before it says anything."
                />

                <dl className="mt-10 space-y-6">
                  <div className="hairline-light rounded-lg p-5">
                    <dt className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-leaf" />
                      <span className="font-mono text-[0.66rem] tracking-[0.18em] text-leaf uppercase">
                        Working today
                      </span>
                    </dt>
                    <dd className="mt-3 text-base/7 text-paper/70">
                      The festival calendar, with an order-by date roughly{" "}
                      <Counter to={11} className="font-mono text-gold" /> weeks
                      ahead of each peak, the categories that usually lift, and
                      a suggested quantity you can order straight from.
                    </dd>
                  </div>
                  <div className="hairline-light rounded-lg p-5">
                    <dt className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-amber" />
                      <span className="font-mono text-[0.66rem] tracking-[0.18em] text-amber uppercase">
                        Coming next
                      </span>
                    </dt>
                    <dd className="mt-3 text-base/7 text-paper/70">
                      Demand predicted per item from your own uploads, so
                      &ldquo;low stock&rdquo; becomes &ldquo;you will run out on
                      Thursday&rdquo;. It needs several weeks of sales before it
                      says anything at all — and it will say so, rather than
                      inventing a number.
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal from="right" delay={140}>
              <Spotlight className="rounded-lg">
                <FestivalCountdown tone="light" />
              </Spotlight>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-16">
              <Eyebrow tone="light">Seasonal warnings</Eyebrow>
              <div className="mt-8">
                <SeasonTimeline tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="What's decided, and what isn't"
              intro="We would rather say what we are still weighing than promise it and quietly drop it."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal from="left">
              <div className="h-full rounded-lg border-l-4 border-leaf bg-paper p-7">
                <Eyebrow className="!text-leaf">Built and working</Eyebrow>
                <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
                  <li>Stock, suppliers, deliveries and reports</li>
                  <li>Low-stock alerts with WhatsApp and email restocking</li>
                  <li>POS sales upload from any exported file</li>
                  <li>Supplier ranking from completed orders</li>
                  <li>Festival warnings with order-by dates</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full rounded-lg border-l-4 border-amber bg-paper p-7">
                <Eyebrow>Coming next</Eyebrow>
                <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
                  <li>Demand forecasting from your own sales history</li>
                  <li>Festival lift learned from your shop, not the average</li>
                  <li>Reorder points suggested from real sales velocity</li>
                  <li>Push notifications on the lock screen</li>
                  <li>An installable Android app</li>
                </ul>
              </div>
            </Reveal>

            <Reveal from="right" delay={180}>
              <div className="h-full rounded-lg border-l-4 border-maroon/30 bg-paper p-7">
                <Eyebrow>Still being decided</Eyebrow>
                <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
                  <li>
                    Live GPS tracking of the delivery vehicle on a map. It only
                    works if suppliers agree to share location, so we have not
                    committed to it — the six stages work without anyone
                    installing anything.
                  </li>
                </ul>
                <p className="mt-5 font-mono text-xs text-ink/45">
                  If this would decide it for your shop, tell us — it moves up
                  the list.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-10">
              <ButtonLink href="/features" variant="outline" arrow>
                Every feature in detail
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
