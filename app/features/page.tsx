import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

import LowStockAlert from "@/components/widgets/LowStockAlert";
import PosUpload from "@/components/widgets/PosUpload";
import ReorderComposer from "@/components/widgets/ReorderComposer";
import FestivalCountdown from "@/components/widgets/FestivalCountdown";
import SupplierScore from "@/components/widgets/SupplierScore";
import DeliveryTracker from "@/components/widgets/DeliveryTracker";
import ReportsCard from "@/components/widgets/ReportsCard";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Stock control with per-product reorder points, low-stock alerts to WhatsApp and email, seasonal forecasting, supplier ranking, six-stage delivery tracking and five reports.",
};

type Module = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
};

const modules: Module[] = [
  {
    id: "stock",
    eyebrow: "Module 01 · Stock",
    title: "One count everybody trusts",
    body: "Add items by name, barcode or bulk import, and set a reorder point per product — ten bags of rice, two cartons of milk powder. The count moves on its own from two directions: deliveries you confirm push it up, and the sales file from your till pulls it down.",
    points: [
      "Per-item reorder points, suggested then yours",
      "Batch and expiry tracking, oldest-first",
      "Reads an exported file from any till",
      "Every quantity change is dated and explained",
    ],
    visual: <PosUpload />,
  },
  {
    id: "alerts",
    eyebrow: "Module 02 · Alerts",
    title: "The message writes itself",
    body: "When an item crosses its reorder point you get a notification, and from that notification the restock request is three taps away. The quantities are checked against what the supplier genuinely holds before it can be sent, rather than after.",
    points: [
      "Low-stock notifications, per item",
      "One tap to WhatsApp, email or in the app",
      "Refuses to order the same thing twice by mistake",
      "One key per order — sending twice still makes one order",
    ],
    visual: <ReorderComposer />,
  },
  {
    id: "forecast",
    eyebrow: "Module 03 · Forecasting",
    title: "A read on next month, from your own numbers",
    body: "Sri Lankan festivals are on the calendar, and the date that matters is not the festival — it is the one about eleven weeks earlier, when the order still costs a sensible price. Demand forecasting from your own sales history is the next phase, and it will say so rather than inventing a number before it has the data.",
    points: [
      "Awurudu, Vesak, Ramadan, Deepavali and Christmas",
      "Order-by date, not just the peak date",
      "Order straight from the warning",
      "Your own history takes over once you have uploaded a few months",
    ],
    visual: <FestivalCountdown />,
  },
  {
    id: "suppliers",
    eyebrow: "Module 04 · Suppliers",
    title: "A supplier list with a memory",
    body: "A score out of 100, recomputed continuously: quality 40, delivery speed 30, quantity availability 20, price 10. Speed is measured from orders that actually completed, so a supplier cannot improve it by promising harder.",
    points: [
      "Quality 40 · speed 30 · quantity 20 · price 10",
      "Your star rating after every delivery",
      "One or two ratings are pulled back towards neutral",
      "New suppliers are labelled, not buried",
    ],
    visual: <SupplierScore />,
  },
  {
    id: "deliveries",
    eyebrow: "Module 05 · Deliveries",
    title: "Six stages, no guessing",
    body: "Requested, confirmed, processing, put to delivery, on the way, purchased — visible to both sides and changing live without a refresh. Only you can mark an order purchased, because that is the moment your stock count goes up.",
    points: [
      "Six stages, each one timestamped",
      "Stage changes arrive live",
      "A decline requires a reason, which you see",
      "Late deliveries feed the supplier's speed score",
    ],
    visual: <DeliveryTracker tone="dark" />,
  },
  {
    id: "reports",
    eyebrow: "Module 06 · Reports",
    title: "The week, the month, the season",
    body: "Five reports that need no machine learning — just your own history read back to you. Pick a date range, read it on the phone, or export it for whoever does your books.",
    points: [
      "Stock movement over time",
      "Best and worst sellers",
      "Spend by supplier, and actual delivery times",
      "Stock-out events",
    ],
    visual: <ReportsCard />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/img/photo/shelves.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/30" />
          <div className="absolute -top-40 -right-40 size-[34rem] rounded-full bg-maroon-400/25 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-20">
          <Reveal from="left">
            <SectionHeading
              tone="light"
              eyebrow="Features"
              title="Six modules that keep a shop honest with itself"
              intro="Nothing here is a dashboard for its own sake. Each module exists because a shop owner told us where the money was leaking."
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <div className="lg:pl-8">
              <LowStockAlert />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      {modules.map((module, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={module.id}
            id={module.id}
            className={`scroll-mt-24 ${
              flipped ? "bg-white" : "grain relative bg-paper"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
              <ShelfRail className="mb-14" />
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  from={flipped ? "right" : "left"}
                  className={flipped ? "lg:order-2" : ""}
                >
                  <div>
                    <Eyebrow>{module.eyebrow}</Eyebrow>
                    <h2 className="tracking-display mt-3 text-2xl font-bold text-balance text-maroon sm:text-[2rem] sm:leading-[1.12]">
                      {module.title}
                    </h2>
                    <p className="mt-5 text-lg/8 text-pretty text-ink/70">
                      {module.body}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {module.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-base/7 text-ink/75"
                        >
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal
                  from={flipped ? "left" : "right"}
                  delay={120}
                  className={flipped ? "lg:order-1" : ""}
                >
                  {module.visual}
                </Reveal>
              </div>

              {/* the two modules that have an illustration to go with them */}
              {module.id === "forecast" && (
                <Reveal delay={180}>
                  <Image
                    src="/img/festival.svg"
                    alt="Festival stock — an oil lamp, rice flour, coconut, treacle and cashew — with the order-by date marked well ahead of the peak."
                    width={520}
                    height={330}
                    unoptimized
                    className="mt-14 w-full max-w-lg"
                  />
                </Reveal>
              )}
              {module.id === "deliveries" && (
                <Reveal delay={180}>
                  <Image
                    src="/img/delivery.svg"
                    alt="A delivery lorry on a marked route between the supplier and the shop, with the completed stages ticked off behind it."
                    width={560}
                    height={320}
                    unoptimized
                    className="mt-14 w-full max-w-lg"
                  />
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      <CtaBand
        title="See it with your own stock list"
        intro="Send us a photo of your current stock book or a spreadsheet, and we'll load it into a demo account for you."
      />
    </>
  );
}
