import type { Metadata } from "next";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/motion";
import { Badge, Card, Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who is building InventiX, what shop owners told us before we started, and how to get in touch about early access.",
};

const principles = [
  {
    title: "Built for the counter, not the boardroom",
    body: "The person using this is serving a customer with one hand. Every screen has to be readable at a glance and finishable in a few taps.",
  },
  {
    title: "Your data stays yours",
    body: "The forecasting learns from your shop, for your shop. You can export everything, and if you leave, it leaves with you.",
  },
  {
    title: "Say what isn't finished",
    body: "Demand forecasting is the next phase, not today. Live GPS tracking is undecided. Both say so on this site rather than sitting quietly in a feature list.",
  },
  {
    title: "Every number can be traced",
    body: "A manual correction, spoilage, a delivery, a sales upload — each writes a dated record. A count that looks wrong can always be explained.",
  },
];

const quotes = [
  {
    shop: "Walpola Stores",
    place: "Kotikawatte",
    body: "We already have a similar system for stock and suppliers, but it does not have automated email alerts for low-stock items. Sometimes we don't notice when products are running low, so getting an automatic alert would help us reorder on time and avoid shortages.",
    validates: "Low-stock alerts",
  },
  {
    shop: "Krishan Super",
    place: "Matara",
    body: "I especially like the reorder prediction feature. It helps me understand when I may need to purchase stock again, instead of waiting until a product runs out. The automated purchase order could save me a lot of time.",
    validates: "Forecasting + auto PO",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-36 -left-24 size-[32rem] rounded-full bg-amber/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-20">
          <Reveal from="left">
            <SectionHeading
              tone="light"
              eyebrow="About"
              title="A stock book, rewritten for the shops that still use one"
              intro="Most small grocery shops in Sri Lanka run on memory and a notebook, and both of them fail at exactly the wrong moment."
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

      {/* Story + principles */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal from="left">
              <div className="space-y-5 text-lg/8 text-ink/75">
                <p>
                  We spent time behind the counter of shops that turn over
                  thousands of items a week without a single number written
                  down. The owners are not disorganised — they are busy. The
                  notebook works right up until a festival week, a supplier who
                  goes quiet, or a carton of stock that expires in the back
                  room.
                </p>
                <p>
                  So we built the thing the notebook could never do: watch every
                  item at once against its own reorder point, remember which
                  supplier actually delivered on time rather than who promised
                  to, and put the till&apos;s own sales data to work instead of
                  leaving it sitting in the machine.
                </p>
                <p>
                  InventiX is a team of four building this in Sri Lanka, for
                  shops in Sri Lanka. We are onboarding a first group of
                  businesses now, and we would rather have twenty shops that use
                  it every day than a thousand downloads.
                </p>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-maroon/10 pt-8">
                {[
                  { n: 4, label: "people building it" },
                  { n: 6, label: "delivery stages tracked" },
                  { n: 5, label: "festivals on the calendar" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-mono text-2xl font-bold text-amber">
                      <Counter to={s.n} />
                    </p>
                    <p className="mt-1 text-xs/5 text-ink/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <div className="grid gap-4">
                {principles.map((p) => (
                  <Card key={p.title}>
                    <h3 className="text-base font-bold text-maroon">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm/6 text-ink/70">{p.body}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What shop owners told us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What shop owners told us"
              title="We asked before we built"
              intro="Two of the shops we spoke to, in their own words. Both pointed at the same thing, which is how it ended up first in the build."
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="grain relative scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal from="left">
              <div>
                <SectionHeading
                  eyebrow="Get in touch"
                  title="Tell us about your shop"
                  intro="We set up early-access accounts by hand — with your items, your suppliers and your reorder points already in. It takes us about a day."
                />
                <dl className="mt-10 space-y-5">
                  {[
                    ["Email", "hello@inventix.lk"],
                    ["WhatsApp", "+94 XX XXX XXXX"],
                    ["Based in", "Colombo, Sri Lanka"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[0.68rem] tracking-[0.2em] text-amber uppercase">
                        {label}
                      </dt>
                      <dd className="mt-1 text-base text-maroon">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-maroon">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Reveal>
            <Eyebrow tone="light">Sinhala · Tamil · English</Eyebrow>
            <p className="mt-4 max-w-2xl text-xl/8 text-balance text-paper">
              The app is being built for all three languages. If your staff are
              more comfortable in Sinhala or Tamil, say so when you write to us
              — it helps us decide what to finish first.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
