// import type { Metadata } from "next";
// import CtaBand from "@/components/CtaBand";
// import SeasonTimeline from "@/components/SeasonTimeline";
// import { Reveal } from "@/components/Reveal";
// import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

// export const metadata: Metadata = {
//   title: "How it works",
//   description:
//     "From loading your stock list to a delivered carton: setup, low-stock alerts, supplier messaging, delivery stages and the forecasting model behind InventiX.",
// };

// /* These are a genuine sequence, so they're numbered. */
// const setup = [
//   {
//     step: "01",
//     title: "Load what you already have",
//     body: "Import a spreadsheet, or add items as you count the shelves. Most shops get their first hundred items in during one afternoon.",
//   },
//   {
//     step: "02",
//     title: "Set a reorder point per item",
//     body: "The level at which you'd normally start worrying. InventiX suggests one once it has a few weeks of sales, and you can change it any time.",
//   },
//   {
//     step: "03",
//     title: "Add your suppliers",
//     body: "Name, WhatsApp number or email, and what they supply. Scores start building from the first delivery.",
//   },
//   {
//     step: "04",
//     title: "Sell as usual",
//     body: "Record sales at the counter or import them at the end of the day. Everything after this happens on its own.",
//   },
// ];

// const deliveryStages = [
//   {
//     name: "Processing",
//     body: "The supplier has the order and is putting it together.",
//   },
//   {
//     name: "Put to delivery",
//     body: "Packed and handed to whoever is carrying it.",
//   },
//   {
//     name: "On the way",
//     body: "In transit to your shop, with the promised arrival date shown.",
//   },
//   {
//     name: "Purchased",
//     body: "Received, counted and added to stock. Any shortfall is recorded against the supplier.",
//   },
// ];

// export default function HowItWorksPage() {
//   return (
//     <>
//       <section className="bg-ink">
//         <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
//           <Reveal>
//             <SectionHeading
//               tone="light"
//               eyebrow="How it works"
//               title="From an empty shelf to a delivered carton"
//               intro="Four steps to set up, and then the loop runs by itself: watch, warn, order, track, learn."
//             />
//           </Reveal>
//         </div>
//       </section>

//       {/* Setup */}
//       <section className="bg-paper">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//           <Reveal>
//             <Eyebrow>Getting started</Eyebrow>
//           </Reveal>
//           <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-maroon/10 md:grid-cols-2 lg:grid-cols-4">
//             {setup.map((item, i) => (
//               <Reveal key={item.step} delay={i * 80}>
//                 <div className="h-full bg-white p-7">
//                   <span className="font-mono text-3xl font-bold text-gold">
//                     {item.step}
//                   </span>
//                   <h3 className="mt-4 text-lg font-bold text-maroon">
//                     {item.title}
//                   </h3>
//                   <p className="mt-3 text-sm/6 text-ink/70">{item.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Delivery stages */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//           <ShelfRail className="mb-14" />
//           <Reveal>
//             <SectionHeading
//               eyebrow="Delivery tracking"
//               title="Four stages, and each one is a timestamp"
//               intro="A delivery either moved or it didn't. Every stage change is recorded, which is what makes the supplier speed score meaningful rather than a feeling."
//             />
//           </Reveal>

//           <Reveal delay={120}>
//             <ol className="mt-16 grid gap-8 md:grid-cols-4">
//               {deliveryStages.map((stage, i) => (
//                 <li key={stage.name} className="relative">
//                   {/* connector */}
//                   {i < deliveryStages.length - 1 && (
//                     <span
//                       aria-hidden="true"
//                       className="absolute top-3.5 left-8 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-gold to-maroon/15 md:block"
//                     />
//                   )}
//                   <div className="flex items-center gap-3">
//                     <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold font-mono text-xs font-bold text-maroon">
//                       {i + 1}
//                     </span>
//                     <h3 className="text-base font-bold text-maroon">
//                       {stage.name}
//                     </h3>
//                   </div>
//                   <p className="mt-3 pl-10 text-sm/6 text-ink/70 md:pl-0">
//                     {stage.body}
//                   </p>
//                 </li>
//               ))}
//             </ol>
//           </Reveal>
//         </div>
//       </section>

//       {/* Forecasting */}
//       <section className="bg-ink">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//           <Reveal>
//             <SectionHeading
//               tone="light"
//               eyebrow="The forecasting model"
//               title="It learns your shop, not an average one"
//               intro="Two shops on the same street sell differently. The model is trained on your own sales and inventory records, so its suggestions match what actually moves off your shelves."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 head: "What goes in",
//                 body: "Sales per item over time, current and past stock levels, delivery lead times from each supplier, and the calendar of local seasons.",
//               },
//               {
//                 head: "What comes out",
//                 body: "For each item: expected demand for the coming weeks, a suggested order quantity, and the date the order needs to be placed to land in time.",
//               },
//               {
//                 head: "How it improves",
//                 body: "Every sale and every delivery is another data point. Predictions get sharper over the first few months and keep adjusting as your shop changes.",
//               },
//             ].map((block, i) => (
//               <Reveal key={block.head} delay={i * 90}>
//                 <div className="h-full rounded-xl border border-paper/12 bg-paper/[0.04] p-7">
//                   <Eyebrow tone="light">{block.head}</Eyebrow>
//                   <p className="mt-4 text-base/7 text-paper/70">{block.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal delay={200}>
//             <div className="mt-20">
//               <Eyebrow tone="light">Seasonal warnings</Eyebrow>
//               <div className="mt-8">
//                 <SeasonTimeline tone="light" />
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Roadmap */}
//       <section id="roadmap" className="scroll-mt-24 bg-paper">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Roadmap"
//               title="What's decided, and what isn't"
//               intro="We'd rather say what we're still weighing than promise it and quietly drop it."
//             />
//           </Reveal>

//           <div className="mt-12 grid gap-6 md:grid-cols-2">
//             <Reveal>
//               <div className="h-full rounded-xl border-l-4 border-leaf bg-white p-7 shadow-sm">
//                 <Eyebrow className="!text-leaf">Being built</Eyebrow>
//                 <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
//                   <li>Stock, supplier, delivery and report modules</li>
//                   <li>Low-stock alerts with WhatsApp and email restocking</li>
//                   <li>Seasonal dashboard with two-to-three month lead time</li>
//                   <li>Demand forecasting from your own records</li>
//                 </ul>
//               </div>
//             </Reveal>

//             <Reveal delay={100}>
//               <div className="h-full rounded-xl border-l-4 border-amber bg-white p-7 shadow-sm">
//                 <Eyebrow>Under consideration</Eyebrow>
//                 <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
//                   <li>
//                     Live GPS tracking of delivery vehicles on a map — useful,
//                     but it only works if suppliers are willing to share
//                     location, so we haven&apos;t committed to it yet.
//                   </li>
//                 </ul>
//                 <p className="mt-5 font-mono text-xs text-ink/45">
//                   If this would decide it for your shop, tell us — it moves up
//                   the list.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       <CtaBand />
//     </>
//   );
// }


import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import SeasonTimeline from "@/components/SeasonTimeline";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

export const metadata: Metadata = {

  
  title: "How it works",
  description:
    "From loading your stock list to a delivered carton: setup, low-stock alerts, supplier messaging, delivery stages and the forecasting model behind InventiX.",
};

/* These are a genuine sequence, so they're numbered. */
const setup = [
  {
    step: "01",
    title: "Load what you already have",
    body: "Import a spreadsheet, or add items as you count the shelves. Most shops get their first hundred items in during one afternoon.",
  },
  {
    step: "02",
    title: "Set a reorder point per item",
    body: "The level at which you'd normally start worrying. InventiX suggests one once it has a few weeks of sales, and you can change it any time.",
  },
  {
    step: "03",
    title: "Add your suppliers",
    body: "Name, WhatsApp number or email, and what they supply. Scores start building from the first delivery.",
  },
  {
    step: "04",
    title: "Sell as usual",
    body: "Record sales at the counter or import them at the end of the day. Everything after this happens on its own.",
  },
];

const deliveryStages = [
  {
    name: "Processing",
    body: "The supplier has the order and is putting it together.",
  },
  {
    name: "Put to delivery",
    body: "Packed and handed to whoever is carrying it.",
  },
  {
    name: "On the way",
    body: "In transit to your shop, with the promised arrival date shown.",
  },
  {
    name: "Purchased",
    body: "Received, counted and added to stock. Any shortfall is recorded against the supplier.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="How it works"
              title="From an empty shelf to a delivered carton"
              intro="Four steps to set up, and then the loop runs by itself: watch, warn, order, track, learn."
            />
          </Reveal>
        </div>
      </section>

      {/* Setup */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <Eyebrow>Getting started</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-maroon/10 md:grid-cols-2 lg:grid-cols-4">
            {setup.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <span className="font-mono text-3xl font-bold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm/6 text-ink/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery stages */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <Reveal>
            <SectionHeading
              eyebrow="Delivery tracking"
              title="Four stages, and each one is a timestamp"
              intro="A delivery either moved or it didn't. Every stage change is recorded, which is what makes the supplier speed score meaningful rather than a feeling."
            />
          </Reveal>

          <ol className="mt-20 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {deliveryStages.map((stage, i) => {
              const isLast = i === deliveryStages.length - 1;
              return (
                <li key={stage.name}>
                  <Reveal delay={i * 140}>
                    <div className="flex flex-col items-center text-center">
                      {/* node row with connecting line */}
                      <div className="flex w-full items-center">
                        <span
                          aria-hidden="true"
                          className={`hidden h-0.5 flex-1 lg:block ${
                            i === 0
                              ? "bg-transparent"
                              : "bg-gradient-to-r from-maroon/15 to-gold"
                          }`}
                        />
                        <span
                          className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full font-mono text-sm font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)] ${
                            isLast ? "bg-leaf text-white" : "bg-gold text-maroon"
                          }`}
                        >
                          {isLast ? (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="size-4"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            i + 1
                          )}
                          {isLast && (
                            <span className="absolute -right-0.5 -top-0.5 flex size-3">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf/60" />
                              <span className="relative inline-flex size-3 rounded-full bg-leaf ring-2 ring-white" />
                            </span>
                          )}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`hidden h-0.5 flex-1 lg:block ${
                            isLast
                              ? "bg-transparent"
                              : "bg-gradient-to-r from-gold to-maroon/15"
                          }`}
                        />
                      </div>

                      <h3 className="mt-4 text-base font-bold text-maroon">
                        {stage.name}
                      </h3>
                      <p className="mt-2 max-w-[16rem] text-sm/6 text-ink/70">
                        {stage.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Forecasting */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="The forecasting model"
              title="It learns your shop, not an average one"
              intro="Two shops on the same street sell differently. The model is trained on your own sales and inventory records, so its suggestions match what actually moves off your shelves."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                head: "What goes in",
                body: "Sales per item over time, current and past stock levels, delivery lead times from each supplier, and the calendar of local seasons.",
              },
              {
                head: "What comes out",
                body: "For each item: expected demand for the coming weeks, a suggested order quantity, and the date the order needs to be placed to land in time.",
              },
              {
                head: "How it improves",
                body: "Every sale and every delivery is another data point. Predictions get sharper over the first few months and keep adjusting as your shop changes.",
              },
            ].map((block, i) => (
              <Reveal key={block.head} delay={i * 90}>
                <div className="h-full rounded-xl border border-paper/12 bg-paper/[0.04] p-7">
                  <Eyebrow tone="light">{block.head}</Eyebrow>
                  <p className="mt-4 text-base/7 text-paper/70">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-20">
              <Eyebrow tone="light">Seasonal warnings</Eyebrow>
              <div className="mt-8">
                <SeasonTimeline tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="What's decided, and what isn't"
              intro="We'd rather say what we're still weighing than promise it and quietly drop it."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border-l-4 border-leaf bg-white p-7 shadow-sm">
                <Eyebrow className="!text-leaf">Being built</Eyebrow>
                <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
                  <li>Stock, supplier, delivery and report modules</li>
                  <li>Low-stock alerts with WhatsApp and email restocking</li>
                  <li>Seasonal dashboard with two-to-three month lead time</li>
                  <li>Demand forecasting from your own records</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-xl border-l-4 border-amber bg-white p-7 shadow-sm">
                <Eyebrow>Under consideration</Eyebrow>
                <ul className="mt-4 space-y-3 text-base/7 text-ink/75">
                  <li>
                    Live GPS tracking of delivery vehicles on a map — useful,
                    but it only works if suppliers are willing to share
                    location, so we haven&apos;t committed to it yet.
                  </li>
                </ul>
                <p className="mt-5 font-mono text-xs text-ink/45">
                  If this would decide it for your shop, tell us — it moves up
                  the list.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}