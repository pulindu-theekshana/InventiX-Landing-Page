import Image from "next/image";
import Link from "next/link";

import mockup from "@/public/app-mockup.png";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Counter, Marquee, Parallax } from "@/components/motion";
import { Badge, ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

import LowStockAlert from "@/components/widgets/LowStockAlert";
import ReorderComposer from "@/components/widgets/ReorderComposer";

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

const losses = [
  {
    stat: "2 days",
    title: "of sales, gone quietly",
    body: "A product finishes on Friday. Nobody notices until a customer asks on Sunday.",
  },
  {
    stat: "Cash",
    title: "asleep on a shelf",
    body: "Ordering enough to be safe ties up money in stock that turns slowly, while the fast movers run out.",
  },
  {
    stat: "11 weeks",
    title: "too late for the season",
    body: "Everyone knows Awurudu lifts sales. The date nobody has is the one to order by.",
  },
];

/* Each of these has a whole page behind it. Home introduces them and
   gets out of the way rather than repeating them. */
const areas = [
  {
    n: "01",
    name: "Features",
    body: "Six modules — stock, alerts, forecasting, suppliers, deliveries, reports.",
    href: "/features",
  },
  {
    n: "02",
    name: "How it works",
    body: "Four steps to set up, then the loop runs by itself.",
    href: "/how-it-works",
  },
  {
    n: "03",
    name: "Suppliers",
    body: "Scored out of 100 on what they did, and six delivery stages both sides can see.",
    href: "/suppliers",
  },
  {
    n: "04",
    name: "Pricing",
    body: "From LKR 5,000 a month per shop. One month free to start.",
    href: "/pricing",
  },
];

const quotes = [
  {
    shop: "Walpola Stores",
    place: "Kotikawatte",
    body: "Sometimes we don't notice when products are running low. Getting an automatic alert would help us reorder on time and avoid shortages.",
  },
  {
    shop: "Krishan Super",
    place: "Matara",
    body: "I especially like the reorder prediction. The automated purchase order could save me a lot of time.",
  },
];

/* ---------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/* Hero — the headline carries it. The product is the payoff     */}
      {/* underneath, not a competing object beside it.                 */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-48 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-maroon-400/20 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-24 text-center lg:px-8 lg:pt-32">
          <Reveal>
            <Eyebrow tone="light">For grocery shops in Sri Lanka</Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="tracking-display mx-auto mt-7 max-w-4xl text-[2.75rem] leading-[0.98] font-bold text-balance text-paper sm:text-[4.25rem] lg:text-[5.25rem]">
              Know what&apos;s running out{" "}
              <span className="text-gold">before your customers do.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-8 max-w-xl text-lg/8 text-pretty text-paper/65">
              InventiX watches every shelf against its own reorder point, then
              writes the restock message and sends it the way your supplier
              actually replies.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/about#contact" arrow>
                Request early access
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="quiet">
                See how it works
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-paper/10 pt-8 sm:grid-cols-4">
              {[
                { n: 6, label: "delivery stages" },
                { n: 4, label: "ranking criteria" },
                { n: 11, label: "weeks of warning" },
                { n: 3, label: "taps to order" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-2xl font-bold text-gold">
                    <Counter to={s.n} />
                  </dt>
                  <dd className="mt-1.5 text-xs/5 text-paper/50">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* the product, shown large and running off the bottom edge */}
        <Reveal delay={200} from="scale">
          <div className="relative mt-20 flex justify-center">
            <div
              aria-hidden="true"
              className="animate-glow pointer-events-none absolute bottom-0 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[110px]"
            />
            <Parallax strength={-16}>
              <Image
                src={mockup}
                alt="The InventiX stock screen: 550 items split into in stock, low stock, out of stock and overstock, above a searchable product list with prices and counts."
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                className="w-[260px] translate-y-10 drop-shadow-[0_40px_70px_rgba(0,0,0,0.6)] sm:w-[320px] lg:w-[360px]"
              />
            </Parallax>
          </div>
        </Reveal>

        {/* what it keeps count of */}
        <div className="mt-6 border-t border-paper/10 py-5">
          <Marquee duration={52}>
            {shelf.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 rounded-full border border-paper/10 px-4 py-1.5 font-mono text-[0.68rem] whitespace-nowrap text-paper/40"
              >
                <span className="size-1 rounded-full bg-gold/60" />
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Why — three short losses, kept tight                          */}
      {/* ============================================================ */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why we built it"
              title="Three ways a good shop loses money without noticing"
              intro="None of these are mistakes. They are what happens when a shop runs on memory, which is how most small shops here run."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {losses.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t-2 border-gold pt-6">
                  <p className="tracking-display text-2xl font-bold text-maroon">
                    {item.stat}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-maroon/70">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base/7 text-ink/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* The one story: it notices, then it writes the order           */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="The core loop"
              title="It notices before you do. Then it writes the order."
              intro="Ten bags of rice is a crisis. Two hundred packets of tea is a Tuesday. So every product is watched against its own reorder point, and the message that follows is already written."
            />
          </Reveal>

          <div className="mt-16 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal from="left" delay={100}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-maroon font-mono text-[0.62rem] font-bold text-gold">
                    1
                  </span>
                  <p className="font-mono text-[0.66rem] tracking-[0.2em] text-amber uppercase">
                    It notices
                  </p>
                </div>
                <LowStockAlert />
              </div>
            </Reveal>

            <Reveal from="right" delay={180}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-maroon font-mono text-[0.62rem] font-bold text-gold">
                    2
                  </span>
                  <p className="font-mono text-[0.66rem] tracking-[0.2em] text-amber uppercase">
                    It writes the order
                  </p>
                </div>
                <ReorderComposer />
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <Badge tone="good">checked before sending</Badge>
              <Badge tone="warn">never sends twice</Badge>
              <Badge>works if WhatsApp is down</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Where to go next — home introduces, the pages explain         */}
      {/* ============================================================ */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The rest of it"
              title="Four parts of the shop, one app"
              intro="Each one is useful on its own. Together they close the loop from an empty shelf to a delivered carton and back into the count."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.name} delay={i * 80} from="scale">
                <Link href={area.href} className="group block h-full">
                  <div className="lift hairline flex h-full items-start gap-6 rounded-lg bg-white p-7 group-hover:shadow-[0_22px_48px_-26px_rgba(80,22,2,0.4)]">
                    <span className="font-mono text-sm font-bold text-gold">
                      {area.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="flex items-center gap-2 text-xl font-bold text-maroon">
                        {area.name}
                        <svg
                          viewBox="0 0 16 8"
                          aria-hidden="true"
                          className="size-3.5 text-amber transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M1 4h13m0 0-3.5-3.5M14 4l-3.5 3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </h3>
                      <p className="mt-3 text-base/7 text-ink/70">
                        {area.body}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Proof                                                         */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
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
                  <footer className="mt-6 border-t border-maroon/10 pt-4">
                    <p className="text-sm font-semibold text-maroon">
                      {q.shop}
                    </p>
                    <p className="font-mono text-[0.66rem] text-ink/50">
                      {q.place}
                    </p>
                  </footer>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-12 text-center">
              <Link
                href="/about"
                className="font-mono text-xs tracking-[0.14em] text-amber uppercase transition-colors hover:text-maroon"
              >
                Read why we built it →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
