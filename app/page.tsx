import Image from "next/image";
import Link from "next/link";

import HeroCollage from "@/components/HeroCollage";
import SeasonTimeline from "@/components/SeasonTimeline";
import CtaBand from "@/components/CtaBand";
import Tabs from "@/components/Tabs";
import { Reveal } from "@/components/Reveal";
import { Counter, Marquee, Spotlight } from "@/components/motion";
import {
  Badge,
  ButtonLink,
  Card,
  Eyebrow,
  SectionHeading,
  ShelfRail,
} from "@/components/ui";
import { LogoMark } from "@/components/Logo";

import LowStockAlert from "@/components/widgets/LowStockAlert";
import ReorderComposer from "@/components/widgets/ReorderComposer";
import PosUpload from "@/components/widgets/PosUpload";
import SupplierScore from "@/components/widgets/SupplierScore";
import DeliveryTracker from "@/components/widgets/DeliveryTracker";
import FestivalCountdown from "@/components/widgets/FestivalCountdown";
import ReportsCard from "@/components/widgets/ReportsCard";

/* ---------------------------------------------------------------- */

const shelf = [
  "Red raw rice · 5 kg",
  "Highland milk powder · 400 g",
  "Coconut oil · 1 L",
  "Mysoor dhal · 1 kg",
  "White sugar · 1 kg",
  "Maliban Tikiri Mari · 400 g",
  "Kithul treacle · 750 ml",
  "Cashew · 250 g",
  "Ceylon tea · 200 g",
  "Keeri samba · 5 kg",
  "Ghee · 400 g",
  "Dates · 500 g",
];

const problems = [
  {
    title: "The shelf empties quietly",
    body: "A product finishes on Friday and nobody notices until a customer asks for it on Sunday. That is two days of lost sales on something people came in wanting.",
  },
  {
    title: "Money sleeps in the back room",
    body: "Ordering enough to be safe ties up cash in stock that turns slowly, while the fast movers are the ones that run out.",
  },
  {
    title: "The season arrives before the order does",
    body: "Everyone knows Awurudu lifts sales. Far fewer know which of their own products lift, and by how much, in time to order at a sensible price.",
  },
];

const quotes = [
  {
    shop: "Walpola Stores",
    place: "Kotikawatte",
    body: "We already have a similar system for stock and suppliers, but it does not have automated email alerts for low-stock items. Getting an automatic alert would help us reorder on time and avoid shortages.",
    validates: "Low-stock alerts",
  },
  {
    shop: "Krishan Super",
    place: "Matara",
    body: "I especially like the reorder prediction feature. The automated purchase order could save me a lot of time, because I don't have to prepare an order manually every time stock gets low.",
    validates: "Forecasting + auto PO",
  },
];

/* ---------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/* Hero — headline left, product collage right                  */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 size-[38rem] rounded-full bg-maroon-400/25 blur-3xl" />
          <div className="absolute -bottom-56 -left-32 size-[32rem] rounded-full bg-amber/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.02fr_1fr] lg:px-8 lg:pt-24 lg:pb-32">
          <div>
            <Reveal from="up">
              <Eyebrow tone="light">For grocery shops in Sri Lanka</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={80}>
              <h1 className="tracking-display mt-5 text-[2.6rem] leading-[1.03] font-bold text-balance text-paper sm:text-[4.1rem]">
                Know what&apos;s running out{" "}
                <span className="text-gold">before your customers do.</span>
              </h1>
            </Reveal>

            <Reveal from="up" delay={160}>
              <p className="mt-7 max-w-xl text-lg/8 text-pretty text-paper/70">
                InventiX watches every shelf against its own reorder point,
                ranks your suppliers on what they actually did, and writes
                the restock message for you — in three taps, on WhatsApp or
                email.
              </p>
            </Reveal>

            <Reveal from="up" delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/about#contact" arrow>
                  Request early access
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="quiet">
                  See how it works
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal from="up" delay={320}>
              <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/10 pt-8 sm:grid-cols-4">
                {[
                  { n: 6, suffix: "", label: "delivery stages, both sides" },
                  { n: 4, suffix: "", label: "criteria behind a supplier rank" },
                  { n: 11, suffix: "", label: "weeks of seasonal warning" },
                  { n: 3, suffix: "", label: "taps from low stock to sent" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-3xl font-bold text-gold">
                      <Counter to={stat.n} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1.5 text-xs/5 text-paper/55">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:pl-10">
            <HeroCollage />
          </div>
        </div>

        {/* the shelf ticker — what it actually keeps count of */}
        <div className="border-t border-paper/10 py-5">
          <Marquee duration={50}>
            {shelf.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 rounded-full border border-paper/10 px-4 py-1.5 font-mono text-[0.68rem] whitespace-nowrap text-paper/45"
              >
                <span className="size-1 rounded-full bg-gold/60" />
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Problem — illustration and the three quiet losses            */}
      {/* ============================================================ */}
      <section className="grain relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <Reveal from="left">
              <Image
                src="/img/shop-front.svg"
                alt="A neighbourhood grocery shop, its shelves stocked except for one row that has run empty."
                width={640}
                height={420}
                unoptimized
                className="w-full max-w-xl"
              />
            </Reveal>

            <div>
              <Reveal from="right">
                <SectionHeading
                  eyebrow="Why we built it"
                  title="Three ways a good shop loses money without noticing"
                  intro="None of these are mistakes. They are what happens when a shop runs on memory, which is how most small shops in Sri Lanka run."
                />
              </Reveal>

              <div className="mt-12 space-y-8">
                {problems.map((item, i) => (
                  <Reveal key={item.title} from="right" delay={120 + i * 90}>
                    <div className="border-t-2 border-gold pt-5">
                      <h3 className="text-lg font-bold text-maroon">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-base/7 text-ink/70">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* It notices — the low-stock alert                             */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal from="left">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Low-stock alerts"
                title="Ten bags of rice is a crisis. Two hundred packets of tea is a Tuesday."
                intro="So the warning level is set per product, not across the shop. InventiX suggests a sensible starting point for every item, and you move it once you know better."
              />
              <ul className="mt-9 space-y-4">
                {[
                  "A reorder point per product, suggested and then yours to change",
                  "The alert carries the number that matters — days of cover, not just units",
                  "Every quantity change is dated and explained, so a wrong number can be traced",
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
                <ButtonLink href="/features" variant="quiet" arrow>
                  Every feature in detail
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <div className="lg:pl-6">
              <LowStockAlert />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Three taps — the reorder composer                            */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal from="left">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Restocking"
                  title="Three taps from a low shelf to an order in their hands"
                  intro="The app writes the message — your shop's name, the products, the quantities, the estimated total — in polite complete sentences. You edit it if you want to, then send it the way that supplier actually replies."
                />
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge tone="good">checked before sending</Badge>
                  <Badge tone="warn">never sends twice</Badge>
                  <Badge>works if WhatsApp is down</Badge>
                </div>
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <ReorderComposer />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Four parts of the shop — the tabbed tour                     */}
      {/* ============================================================ */}
      <section className="grain relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="What's inside"
              title="Four parts of the shop, one app"
              intro="Each one is useful on its own. Together they close the loop from an empty shelf to a delivered carton and back into the count."
            />
          </Reveal>

          <Reveal delay={120} from="scale">
            <div className="mt-12">
              <Tabs
                items={[
                  {
                    id: "stock",
                    label: "Stock",
                    panel: (
                      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <PosUpload />
                        <div>
                          <h3 className="text-xl font-bold text-maroon">
                            Your till already knows what you sold
                          </h3>
                          <p className="mt-3 text-base/7 text-ink/70">
                            Export the day&apos;s sales as CSV or Excel and
                            upload it. InventiX finds the columns itself and
                            reduces your stock by what left the shop. It reads
                            an exported file on purpose — that is what makes it
                            work with any till in the country rather than the
                            three we could get an integration with.
                          </p>
                          <Image
                            src="/img/pos-upload.svg"
                            alt="A till receipt exported to a file, its rows matched against the product catalogue."
                            width={520}
                            height={340}
                            unoptimized
                            className="mt-7 w-full max-w-md"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "suppliers",
                    label: "Suppliers",
                    panel: (
                      <div className="grid items-start gap-10 lg:grid-cols-2">
                        <SupplierScore />
                        <div>
                          <h3 className="text-xl font-bold text-maroon">
                            Ranked on what they did, not what they promised
                          </h3>
                          <p className="mt-3 text-base/7 text-ink/70">
                            Search by company or by product — who sells Highland
                            milk powder, and how good are they? Suppliers who
                            cannot fill your quantity are marked rather than
                            hidden, so you can see why they placed lower.
                          </p>

                          <ul className="mt-8 divide-y divide-maroon/10">
                            {[
                              ["Ranjith Stores", "4.6", 89, "2 days", false],
                              ["Sampath Traders", "4.1", 78, "3 days", false],
                              ["New Lanka Agencies", "—", 61, "no history", true],
                            ].map(([name, rating, score, speed, isNew]) => (
                              <li
                                key={name as string}
                                className="flex items-center gap-4 py-3.5"
                              >
                                <div className="min-w-0 flex-1">
                                  <p className="flex items-center gap-2 truncate text-sm font-semibold text-maroon">
                                    {name as string}
                                    {isNew ? <Badge tone="warn">new</Badge> : null}
                                  </p>
                                  <p className="font-mono text-[0.66rem] text-ink/50">
                                    {rating as string} ★ · {speed as string}
                                  </p>
                                </div>
                                <div className="h-1.5 w-20 overflow-hidden rounded-full bg-maroon/10 sm:w-28">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-amber to-gold"
                                    style={{ width: `${score as number}%` }}
                                  />
                                </div>
                                <span className="w-7 text-right font-mono text-xs text-ink/60">
                                  {score as number}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-7">
                            <ButtonLink href="/suppliers" variant="outline" arrow>
                              How ranking works
                            </ButtonLink>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "deliveries",
                    label: "Deliveries",
                    panel: (
                      <div className="space-y-10">
                        <DeliveryTracker tone="dark" />
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
                          <Image
                            src="/img/delivery.svg"
                            alt="A delivery lorry on a marked route between the supplier and the shop, with the stages ticked off behind it."
                            width={560}
                            height={320}
                            unoptimized
                            className="w-full max-w-lg"
                          />
                          <p className="text-base/7 text-ink/70">
                            Six stages, visible to both sides, changing live
                            without a refresh. The shop sees progress without
                            phoning anyone — and because only the shop can mark
                            an order purchased, the moment your stock count goes
                            up is a fact you confirmed rather than a claim
                            somebody made.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "reports",
                    label: "Reports",
                    panel: (
                      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
                        <ReportsCard />

                        <div>
                          <h3 className="text-xl font-bold text-maroon">
                            Five reports that need no machine learning
                          </h3>
                          <p className="mt-3 text-base/7 text-ink/70">
                            Just your own history, read back to you.
                          </p>
                          <ul className="mt-6 space-y-2.5">
                            {[
                              "Stock movement over time",
                              "Best and worst sellers",
                              "Spend by supplier",
                              "Order history with actual delivery times",
                              "Stock-out events",
                            ].map((r) => (
                              <li
                                key={r}
                                className="flex items-start gap-3 text-base/7 text-ink/75"
                              >
                                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Seasons                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Reveal from="left">
                <SectionHeading
                  tone="light"
                  eyebrow="Seasonal dashboard"
                  title="Awurudu is decided in January, not April"
                  intro="Everybody knows when the festival is. The date nobody has in their head is the one eleven weeks earlier, when the order still costs a sensible price and the supplier can still fill it."
                />
              </Reveal>
              <Reveal from="left" delay={120}>
                <Image
                  src="/img/festival.svg"
                  alt="Festival stock — an oil lamp, rice flour, coconut, treacle and cashew — with the order-by date marked well ahead of the peak."
                  width={520}
                  height={360}
                  unoptimized
                  className="mt-10 w-full max-w-md"
                />
              </Reveal>
            </div>

            <Reveal from="right" delay={140}>
              <Spotlight className="rounded-lg">
                <FestivalCountdown tone="light" />
              </Spotlight>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-16">
              <SeasonTimeline tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* What shop owners told us                                     */}
      {/* ============================================================ */}
      <section className="grain relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What shop owners told us"
              title="We asked before we built"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {quotes.map((q, i) => (
              <Reveal key={q.shop} delay={i * 110} from="scale">
                <Card className="h-full">
                  <LogoMark className="h-5 w-auto opacity-30" />
                  <blockquote className="mt-5 text-lg/8 text-pretty text-maroon">
                    “{q.body}”
                  </blockquote>
                  <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-maroon/10 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-maroon">
                        {q.shop}
                      </p>
                      <p className="font-mono text-[0.66rem] text-ink/50">
                        {q.place}
                      </p>
                    </div>
                    <Badge tone="gold">validates {q.validates}</Badge>
                  </footer>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="lift hairline group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-maroon"
              >
                Starter is free for a month
                <span className="font-mono text-xs text-amber transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
