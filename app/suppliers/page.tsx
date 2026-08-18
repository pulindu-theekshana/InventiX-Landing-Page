import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

export const metadata: Metadata = {
  title: "Suppliers & delivery",
  description:
    "How InventiX ranks suppliers on quality, quantity and delivery speed, how your ratings feed in, and how the four delivery stages are tracked.",
};

const criteria = [
  {
    name: "Quality",
    weight: "What arrived",
    body: "Damaged bags, short-dated stock, the wrong grade of rice. Log it once at receiving and it stays on the supplier's record.",
  },
  {
    name: "Quantity",
    weight: "How much of it",
    body: "Ordered 200 kg, received 180. The gap between the order and the count is measured on every delivery, not remembered vaguely.",
  },
  {
    name: "Delivery speed",
    weight: "How long it took",
    body: "Measured from the moment you place the order to the moment stock is counted in — using the timestamps from the four delivery stages.",
  },
];

const scorecard = [
  { name: "Ranjith Stores", quality: 94, quantity: 97, speed: 86, stars: 4.6 },
  { name: "Sampath Traders", quality: 81, quantity: 74, speed: 79, stars: 4.1 },
  {
    name: "New Lanka Agencies",
    quality: 62,
    quantity: 58,
    speed: 41,
    stars: 3.2,
  },
];

function Bar({ value }: { value: number }) {
  const tone =
    value >= 80 ? "bg-leaf" : value >= 60 ? "bg-amber" : "bg-[#B02A0E]";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-maroon/10">
        <div
          className={`h-full rounded-full ${tone}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-7 shrink-0 text-right font-mono text-[0.68rem] text-ink/55">
        {value}
      </span>
    </div>
  );
}

export default function SuppliersPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Suppliers & delivery"
              title="Loyalty is good. Records are better."
              intro="Most shop owners already know who lets them down. InventiX just makes it something you can show — and act on the same day."
            />
          </Reveal>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Ranking"
              title="Three things, measured at receiving"
              intro="Nothing subjective, nothing collected from anywhere but your own deliveries."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {criteria.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <div className="h-full rounded-xl border border-maroon/12 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-maroon/5">
                  <Eyebrow>{c.weight}</Eyebrow>
                  <h3 className="mt-3 text-xl font-bold text-maroon">
                    {c.name}
                  </h3>
                  <p className="mt-4 text-base/7 text-ink/70">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="The list, for one item"
              title="Rice, ranked"
              intro="Open any product and the suppliers who carry it are already sorted. The one at the top is the one your own deliveries say is best."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-maroon/12">
              <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr_auto] gap-6 bg-paper px-6 py-3 font-mono text-[0.68rem] tracking-[0.16em] text-ink/50 uppercase md:grid">
                <span>Supplier</span>
                <span>Quality</span>
                <span>Quantity</span>
                <span>Speed</span>
                <span>Rating</span>
              </div>
              <div className="divide-y divide-maroon/10">
                {scorecard.map((s) => (
                  <div
                    key={s.name}
                    className="grid gap-4 px-6 py-5 transition-colors hover:bg-paper md:grid-cols-[1.4fr_1fr_1fr_1fr_auto] md:items-center md:gap-6"
                  >
                    <p className="text-sm font-semibold text-maroon">
                      {s.name}
                    </p>
                    <Bar value={s.quality} />
                    <Bar value={s.quantity} />
                    <Bar value={s.speed} />
                    <p className="font-mono text-sm text-amber">{s.stars} ★</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-sm/6 text-ink/60">
              Your star rating sits alongside the measured scores rather than
              replacing them — a supplier can be slow and still be the one you
              trust with fragile stock. Switching to another supplier for an
              item takes one change and doesn&apos;t lose the history of the old
              one.
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
              intro="Each stage is a timestamp, and those timestamps are what the speed score is built from."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-paper/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Processing", "Order received, being assembled"],
              ["Put to delivery", "Packed and handed over"],
              ["On the way", "In transit, arrival date shown"],
              ["Purchased", "Counted in, shortfalls recorded"],
            ].map(([name, body], i) => (
              <Reveal key={name} delay={i * 80}>
                <div className="h-full bg-ink p-7">
                  <span className="font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-paper">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm/6 text-paper/60">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-xl border border-amber/30 bg-amber/[0.07] p-6">
              <Eyebrow tone="light">Still being decided</Eyebrow>
              <p className="mt-3 max-w-3xl text-base/7 text-paper/70">
                Live GPS tracking of the delivery vehicle on a map is something
                we&apos;re considering. It depends on suppliers agreeing to
                share location, so we&apos;re not promising it yet — the four
                stages above work without anyone installing anything.
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
