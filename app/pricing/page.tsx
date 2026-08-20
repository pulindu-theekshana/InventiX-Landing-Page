import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly plans for single shops, growing businesses and multi-branch grocery operations in Sri Lanka.",
};

/* NOTE: these figures are placeholders — swap in your real numbers. */
const plans = [
  {
    name: "Starter",
    price: "LKR 5,000",
    cadence: "for one shop",
    pitch: "Enough to stop running out of things.",
    features: [
      "Up to 150 items",
      "Low-stock notifications",
      "Up to 5 suppliers",
      "Delivery stage tracking",
      "Weekly sales report",
    ],
    cta: "1 Month free trial",
    featured: false,
  },
  {
    name: "Standard",
    price: "LKR 12,000",
    cadence: "per month, per shop",
    pitch: "For a shop that wants to buy ahead instead of catching up.",
    features: [
      "Unlimited items and suppliers",
      "WhatsApp and email restocking",
      "Demand forecasting from your history",
      "Seasonal dashboard with order-by dates",
      "Supplier ranking and ratings",
      "Full reports with export",
    ],
    cta: "Request early access",
    featured: true,
  },
  {
    name: "PRO",
    price: "LKR 25,000",
    cadence: "multi-branch",
    pitch: "One stock picture across every branch you run.",
    features: [
      "Everything in Shop",
      "Stock across multiple branches",
      "Transfer stock between shops",
      "Staff accounts with permissions",
      "Consolidated reporting",
      "Onboarding and data import help",
    ],
    cta: "Request early access",
    featured: false,
  },
];

const faqs = [
  {
    q: "Do I need a smartphone for every staff member?",
    a: "No. One phone at the counter is enough. Staff accounts are only there if you want separate logins and permissions.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "You can keep recording sales and stock on the phone. Everything syncs once the connection is back.",
  },
  {
    q: "How long before the forecasting is any good?",
    a: "It starts making suggestions after a few weeks of sales, and gets noticeably better across the first two or three months. Seasonal predictions improve most once it has seen a full year.",
  },
  {
    q: "Does sending on WhatsApp cost extra?",
    a: "Messages go out through the WhatsApp Business API. On the Shop plan the usual message volume for a grocery shop is included; heavy senders we'll discuss.",
  },
  {
    q: "Can I move my existing stock book in?",
    a: "Yes. Send us a spreadsheet or photos of the book and we'll import it during setup.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Pricing"
              title="Priced like a shop expense, not software"
              intro="One monthly figure per shop. No commission on your orders, and no cut of what you buy from your suppliers."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="-mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-gold bg-white shadow-lg shadow-maroon/10 lg:scale-[1.03]"
                      : "border-maroon/12 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-maroon">
                      {plan.name}
                    </h2>
                    {plan.featured && (
                      <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-maroon uppercase">
                        Most shops
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-ink">
                    {plan.price}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink/50">
                    {plan.cadence}
                  </p>
                  <p className="mt-5 text-sm/6 text-ink/70">{plan.pitch}</p>

                  <ul className="mt-7 flex-1 space-y-3 border-t border-maroon/10 pt-7">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm/6 text-ink/75"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink
                      href="/about#contact"
                      variant={plan.featured ? "solid" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-center font-mono text-xs text-ink/45">
              Prices in Sri Lankan rupees, billed monthly. Cancel whenever you
              like — your data exports with you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-maroon">
              Before you ask
            </h2>
          </Reveal>

          <dl className="mt-12 divide-y divide-maroon/10 border-t border-maroon/10">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="py-7">
                  <dt className="text-base font-bold text-maroon">{faq.q}</dt>
                  <dd className="mt-3 text-base/7 text-ink/70">{faq.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
