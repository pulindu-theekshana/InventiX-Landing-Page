import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckIcon,
  GiftIcon,
  RocketLaunchIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "InventiX plans for Sri Lankan grocery shops — Starter at LKR 5,000, Standard at LKR 12,000 and Pro at LKR 25,000 a month, billed per shop.",
};

/* ------------------------------------------------------------------ */
/* Plan icons — drawn here rather than pulled from an icon set, so the  */
/* sprout / star / branches trio matches the deck exactly.              */
/* ------------------------------------------------------------------ */

function SproutIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21v-8m0 0c0-3-2.2-5.2-5.2-5.2H4v1.4C4 12 6.2 14 9 14h3Zm0-1.4c0-2.7 1.9-4.6 4.6-4.6H20v1.2c0 2.6-2 4.4-4.6 4.4H12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6l2.7 5.9 6.3.8-4.7 4.4 1.3 6.3L12 16.8l-5.6 3.2 1.3-6.3L3 9.3l6.3-.8L12 2.6Z" />
    </svg>
  );
}

function BranchesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 21h18M5 21V6.5L11 3v18M19 21V10l-8-4.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 8.4v.01M7.6 12v.01M7.6 15.6v.01M14.6 12v.01M14.6 15.6v.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

type Plan = {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  features: string[];
  cta: string;
  CtaIcon: typeof GiftIcon;
  Icon: typeof SproutIcon;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "LKR 5,000",
    cadence: "for one shop",
    pitch: "Enough to stop running out of things.",
    features: [
      "Limited items",
      "Low-stock notifications",
      "Up to 5 suppliers",
      "Delivery stage tracking",
      "Weekly sales report",
    ],
    cta: "1 month free trial",
    CtaIcon: GiftIcon,
    Icon: SproutIcon,
    featured: false,
  },
  {
    name: "Standard",
    price: "LKR 12,000",
    cadence: "per shop",
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
    CtaIcon: RocketLaunchIcon,
    Icon: StarIcon,
    featured: true,
  },
  {
    name: "Pro",
    price: "LKR 25,000",
    cadence: "multi-branch",
    pitch: "One stock picture across every branch you run.",
    features: [
      "Everything in Standard",
      "Stock across multiple branches",
      "Transfer stock between shops",
      "Staff accounts with permissions",
      "Consolidated reporting",
      "Onboarding & data import help",
    ],
    cta: "Request early access",
    CtaIcon: UserIcon,
    Icon: BranchesIcon,
    featured: false,
  },
];

const faqs = [
  {
    q: "Do I need a smartphone for every staff member?",
    a: "No. One phone at the counter is enough. Staff accounts are only there if you want separate logins and permissions, and they start on Pro.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "You can keep recording sales and stock on the phone. Everything syncs once the connection is back, and a restock message queues rather than failing.",
  },
  {
    q: "How long before the forecasting is any good?",
    a: "It needs several weeks of uploaded sales before it says anything at all, and it tells you that rather than inventing a number. It gets noticeably better across the first two or three months, and seasonal predictions improve most once it has seen a full year.",
  },
  {
    q: "Does sending on WhatsApp cost extra?",
    a: "Messages go out through the WhatsApp Business API. On Standard and Pro the usual message volume for a grocery shop is included; heavy senders we'll discuss.",
  },
  {
    q: "Can I move my existing stock book in?",
    a: "Yes. Send us a spreadsheet or photos of the book and we'll import it during setup. On Pro that import is done for you.",
  },
];

/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Subscription plans"
              title="Priced like a shop expense, not software"
              intro="One monthly figure per shop. No commission on your orders, and no cut of what you buy from your suppliers."
            />
          </Reveal>
        </div>
      </section>

      {/* No overflow-hidden here: the cards are pulled up over the dark
          band above them, and the featured card's badge sits outside its
          own box. Clipping the section would cut both off. */}
      <section className="grain relative bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="-mt-20 grid items-start gap-6 lg:grid-cols-3 lg:gap-5">
            {plans.map((plan, i) => {
              const { Icon, CtaIcon } = plan;
              const dark = plan.featured;
              return (
                <Reveal
                  key={plan.name}
                  delay={i * 90}
                  from={i === 1 ? "up" : i === 0 ? "left" : "right"}
                >
                  {/* The featured card sits a little proud of the other two —
                      scaled up and lifted, so the eye lands on it first. */}
                  <div
                    className={`relative lg:transition-transform lg:duration-500 ${
                      dark ? "lg:-my-5 lg:scale-[1.035]" : ""
                    }`}
                  >
                    {dark && (
                      <span className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] whitespace-nowrap text-maroon uppercase shadow-[0_8px_20px_-6px_rgba(255,200,0,0.6)]">
                        <StarIcon className="size-3" />
                        Most shops
                      </span>
                    )}

                    <div
                      className={`lift flex h-full flex-col rounded-lg p-8 ${
                        dark
                          ? "bg-ink shadow-[0_28px_60px_-20px_rgba(26,7,4,0.55)] ring-1 ring-gold/25"
                          : "hairline bg-white hover:shadow-[0_22px_48px_-26px_rgba(80,22,2,0.4)]"
                      }`}
                    >
                      {/* icon */}
                      <span
                        className={`flex size-12 items-center justify-center rounded-full ${
                          dark ? "bg-gold text-maroon" : "bg-gold-100 text-amber"
                        }`}
                      >
                        <Icon className="size-6" />
                      </span>

                      <h2
                        className={`mt-6 text-xl font-bold ${dark ? "text-paper" : "text-maroon"}`}
                      >
                        {plan.name}
                      </h2>

                      <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
                        <span
                          className={`tracking-display text-[2.1rem] leading-none font-bold ${
                            dark ? "text-gold" : "text-maroon"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`text-sm ${dark ? "text-paper/60" : "text-ink/55"}`}
                        >
                          / month
                        </span>
                      </p>
                      <p
                        className={`mt-1.5 font-mono text-xs ${dark ? "text-paper/50" : "text-ink/50"}`}
                      >
                        {plan.cadence}
                      </p>

                      <p
                        className={`mt-6 border-t pt-6 text-sm/6 italic ${
                          dark
                            ? "border-paper/12 text-paper/70"
                            : "border-maroon/10 text-ink/65"
                        }`}
                      >
                        {plan.pitch}
                      </p>

                      <ul className="mt-6 flex-1 space-y-3.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full ${
                                dark ? "bg-gold" : "bg-maroon"
                              }`}
                            >
                              <CheckIcon
                                className={`size-3 ${dark ? "text-maroon" : "text-paper"}`}
                              />
                            </span>
                            <span
                              className={`text-sm/6 ${dark ? "text-paper/85" : "text-ink/75"}`}
                            >
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/about#contact"
                        className={`group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                          dark
                            ? "bg-gold text-maroon hover:bg-gold-300 hover:shadow-[0_10px_24px_-8px_rgba(255,200,0,0.7)]"
                            : "hairline text-maroon hover:bg-maroon/[0.04]"
                        }`}
                      >
                        <CtaIcon className="size-4" />
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={220}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              <p className="font-mono text-xs text-ink/45">
                Billed monthly in Sri Lankan rupees
              </p>
              <p className="font-mono text-xs text-ink/45">
                Cancel whenever — your data exports with you
              </p>
              <p className="font-mono text-xs text-ink/45">
                Add-ons: POS setup help, extra branches
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="tracking-display mt-3 text-3xl font-bold text-maroon">
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
