// import type { Metadata } from "next";
// import CtaBand from "@/components/CtaBand";
// import { Reveal } from "@/components/Reveal";
// import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

// export const metadata: Metadata = {
//   title: "Features",
//   description:
//     "Stock control, low-stock alerts to WhatsApp and email, seasonal forecasting, supplier ranking, delivery tracking and reports — everything InventiX does.",
// };

// const modules = [
//   {
//     id: "stock",
//     eyebrow: "Module 01 · Stock",
//     title: "One count everybody trusts",
//     body: "Add items by name, barcode or bulk import. Set a reorder point per product — 15 kg of rice, two cartons of milk powder — and InventiX watches it against every sale and every delivery. Batches and expiry dates are tracked separately, so the older stock leaves first.",
//     points: [
//       "Per-item reorder points, set once",
//       "Batch and expiry tracking, oldest-first",
//       "Barcode or manual entry at the counter",
//       "Works across more than one branch",
//     ],
//   },
//   {
//     id: "alerts",
//     eyebrow: "Module 02 · Alerts",
//     title: "The message writes itself",
//     body: "When an item crosses its reorder point you get a notification. From that notification you can send the restock request straight to the supplier on WhatsApp or email — the item, the quantity and the delivery date are already filled in from the last order.",
//     points: [
//       "Low-stock notifications, per item",
//       "One tap to WhatsApp or email the supplier",
//       "Order details pre-filled from history",
//       "Silence items you're deliberately running down",
//     ],
//   },
//   {
//     id: "forecast",
//     eyebrow: "Module 03 · Forecasting",
//     title: "A read on next month, from your own numbers",
//     body: "The forecasting model learns from your sales and inventory records — not from an average shop somewhere else. It projects which items will move, how much of them, and when the order needs to be placed to arrive in time. Festival seasons get their own two-to-three month warning.",
//     points: [
//       "Demand predicted per item from your history",
//       "Suggested order quantity and order-by date",
//       "Awurudu, Vesak, Ramadan and Christmas peaks",
//       "Flags slow stock before it becomes dead stock",
//     ],
//   },
//   {
//     id: "suppliers",
//     eyebrow: "Module 04 · Suppliers",
//     title: "A supplier list with a memory",
//     body: "Each supplier is scored on quality, quantity accuracy and delivery speed, and you add your own star rating after a delivery. The list re-ranks itself, so when you go to reorder, the best performer for that item is already at the top. Switching is a single change.",
//     points: [
//       "Ranking on quality, quantity and speed",
//       "Your star rating after every delivery",
//       "Per-item supplier history and pricing",
//       "Change supplier at any time",
//     ],
//   },
//   {
//     id: "deliveries",
//     eyebrow: "Module 05 · Deliveries",
//     title: "Four stages, no guessing",
//     body: "An order moves through processing, put to delivery, on the way, and purchased. Each change is timestamped, so a supplier who says three days and takes six has that on record — and it feeds straight back into their speed score.",
//     points: [
//       "Processing → put to delivery → on the way → purchased",
//       "Timestamped at each stage",
//       "Late deliveries feed the supplier score",
//       "Live GPS map tracking is being explored",
//     ],
//   },
//   {
//     id: "reports",
//     eyebrow: "Module 06 · Reports",
//     title: "The week, the month, the season",
//     body: "Sales by item and category, stock movement, what's sitting still, and what your money is tied up in. Pick a date range, read it on the phone, or export it for whoever does your books.",
//     points: [
//       "Sales and stock movement by date range",
//       "Dead stock and slow-mover list",
//       "Value of stock currently held",
//       "Export for your accountant",
//     ],
//   },
// ];

// export default function FeaturesPage() {
//   return (
//     <>
//       <section className="bg-ink">
//         <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
//           <Reveal>
//             <SectionHeading
//               tone="light"
//               eyebrow="Features"
//               title="Six modules that keep a shop honest with itself"
//               intro="Nothing here is a dashboard for its own sake. Each module exists because a shop owner told us where the money was leaking."
//             />
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-paper">
//         <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
//           {modules.map((module, i) => (
//             <Reveal key={module.id}>
//               <div id={module.id} className="scroll-mt-24 py-16">
//                 <ShelfRail className="mb-12" />
//                 <div
//                   className={`grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20 ${
//                     i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
//                   }`}
//                 >
//                   <div>
//                     <Eyebrow>{module.eyebrow}</Eyebrow>
//                     <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-balance text-maroon sm:text-3xl">
//                       {module.title}
//                     </h2>
//                     <p className="mt-5 text-lg/8 text-pretty text-ink/70">
//                       {module.body}
//                     </p>
//                   </div>

//                   <ul className="space-y-px self-start overflow-hidden rounded-xl bg-maroon/10">
//                     {module.points.map((point) => (
//                       <li
//                         key={point}
//                         className="flex items-start gap-3 bg-white px-5 py-4 text-sm/6 text-ink/80"
//                       >
//                         <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <CtaBand
//         title="See it with your own stock list"
//         intro="Send us a photo of your current stock book or a spreadsheet, and we'll load it into a demo account for you."
//       />
//     </>
//   );
// }
// export default function FeaturesPage() {
//   return (
//     <>
//       {/* Recreated Upper Hero Section */}
//       <section className="bg-ink relative overflow-hidden">
//         <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-24">
//           <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            
//             {/* Left Column: Text Content */}
//             <Reveal>
//               <div className="flex flex-col items-start gap-6">
//                 <Eyebrow>Features</Eyebrow>
//                 <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-6xl">
//                   Smart Inventory & Supplier Intelligence for SMEs
//                 </h1>
//                 <p className="max-w-xl text-lg/8 text-pretty text-white/70">
//                   Stock control, low-stock alerts to WhatsApp and email, seasonal forecasting, supplier ranking, delivery tracking and reports — everything InventiX does to stop leaks and keep shelves full.
//                 </p>
//                 <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-ink transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
//                   Start Optimizing Today
//                 </button>
//               </div>
//             </Reveal>

//             {/* Right Column: Two Phone Mockups */}
//             <Reveal>
//               <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center lg:justify-end">
                
//                 {/* Phone 1: Stock Overview */}
//                 <div className="phone-slider">
//                   <div className="phone-mockup">
//                     <div className="phone-screen">
//                       <div className="app-header">
//                         <h2>Stock Overview</h2>
//                         <div className="app-search">Search inventory...</div>
//                       </div>
//                       <div className="app-body">
//                         <div className="chart-container">
//                           <div className="donut-chart"><div className="donut-hole">550</div></div>
//                           <div className="chart-legend">
//                             <div className="legend-item"><span className="dot bg-green"></span><span className="legend-text">In stock</span><span className="legend-val">63.6% (350)</span></div>
//                             <div className="legend-item"><span className="dot bg-yellow"></span><span className="legend-text">Low stock</span><span className="legend-val">17.8% (98)</span></div>
//                             <div className="legend-item"><span className="dot bg-red"></span><span className="legend-text">Out of stock</span><span className="legend-val">1.3% (7)</span></div>
//                             <div className="legend-item"><span className="dot bg-blue"></span><span className="legend-text">Overstock</span><span className="legend-val">17.3% (95)</span></div>
//                           </div>
//                         </div>
//                         <div className="list-title">Products</div>
//                         <div className="product-card">
//                           <div className="p-info"><h4>Araliya Keeri samba Rice</h4><p>5kg</p></div>
//                           <div className="p-data"><div className="p-price">LKR 1,250.00</div><span className="p-stock">In stock (120)</span></div>
//                         </div>
//                         <div className="product-card">
//                           <div className="p-info"><h4>White Sugar</h4><p>1kg</p></div>
//                           <div className="p-data"><div className="p-price">LKR 260.00</div><span className="p-stock">In stock (85)</span></div>
//                         </div>
//                         <div className="product-card">
//                           <div className="p-info"><h4>Highland Milk powder</h4><p>400g</p></div>
//                           <div className="p-data"><div className="p-price">LKR 1,180.00</div><span className="p-stock">In stock (12)</span></div>
//                         </div>
//                       </div>
//                       <div className="bottom-nav">
//                         <div className="nav-item active"><span className="nav-icon">📦</span>Stocks</div>
//                         <div className="nav-item"><span className="nav-icon">🚚</span>Delivery</div>
//                         <div className="nav-item"><span className="nav-icon">🤝</span>Suppliers</div>
//                         <div className="nav-item"><span className="nav-icon">📊</span>Reports</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
              
//               </div>
//             </Reveal>

//           </div>
//         </div>
//       </section>
      
//          <section className="bg-paper">
//         <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
//           {/* Added a grid wrapper to put 2 items per row on medium+ screens */}
//           <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20">
//             {modules.map((module, i) => (
//               <Reveal key={module.id}>
//                 <div id={module.id} className="scroll-mt-24">
//                   <ShelfRail className="mb-8" />
//                   <Eyebrow>{module.eyebrow}</Eyebrow>
//                   <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-balance text-maroon sm:text-3xl">
//                     {module.title}
//                   </h2>
//                   <p className="mt-5 text-lg/8 text-pretty text-ink/70">
//                     {module.body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand
//         title="See it with your own stock list"
//         intro="Send us a photo of your current stock book or a spreadsheet, and we'll load it into a demo account for you."
//       />
//     </>
//   );
// }




import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Stock control, low-stock alerts to WhatsApp and email, seasonal forecasting, supplier ranking, delivery tracking and reports — everything InventiX does.",
};

const modules = [
  {
    id: "stock",
    eyebrow: "Module 01 · Stock",
    title: "One count everybody trusts",
    body: "Add items by name, barcode or bulk import. Set a reorder point per product — 15 kg of rice, two cartons of milk powder — and InventiX watches it against every sale and every delivery. Batches and expiry dates are tracked separately, so the older stock leaves first.",
    points: [
      
    ],
  },
  {
    id: "alerts",
    eyebrow: "Module 02 · Alerts",
    title: "The message writes itself",
    body: "When an item crosses its reorder point you get a notification. From that notification you can send the restock request straight to the supplier on WhatsApp or email — the item, the quantity and the delivery date are already filled in from the last order.",
    points: [
    ],
  },
  {
    id: "forecast",
    eyebrow: "Module 03 · Forecasting",
    title: "A read on next month, from your own numbers",
    body: "The forecasting model learns from your sales and inventory records — not from an average shop somewhere else. It projects which items will move, how much of them, and when the order needs to be placed to arrive in time. Festival seasons get their own two-to-three month warning.",
    points: [
    ],
  },
  {
    id: "suppliers",
    eyebrow: "Module 04 · Suppliers",
    title: "A supplier list with a memory",
    body: "Each supplier is scored on quality, quantity accuracy and delivery speed, and you add your own star rating after a delivery. The list re-ranks itself, so when you go to reorder, the best performer for that item is already at the top. Switching is a single change.",
    points: [
    ],
  },
  {
    id: "deliveries",
    eyebrow: "Module 05 · Deliveries",
    title: "Four stages, no guessing",
    body: "An order moves through processing, put to delivery, on the way, and purchased. Each change is timestamped, so a supplier who says three days and takes six has that on record — and it feeds straight back into their speed score.",
    points: [
    ],
  },
  {
    id: "reports",
    eyebrow: "Module 06 · Reports",
    title: "The week, the month, the season",
    body: "Sales by item and category, stock movement, what's sitting still, and what your money is tied up in. Pick a date range, read it on the phone, or export it for whoever does your books.",
    points: [
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Recreated Upper Hero Section */}
      <section className="bg-ink relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <Reveal>
              <div className="flex flex-col items-start gap-6">
                <Eyebrow>Features</Eyebrow>
                <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-6xl">
                  Smart Inventory & Supplier Intelligence for SMEs
                </h1>
                <p className="max-w-xl text-lg/8 text-pretty text-white/70">
                  Stock control, low-stock alerts to WhatsApp and email, seasonal forecasting, supplier ranking, delivery tracking and reports — everything InventiX does to stop leaks and keep shelves full.
                </p>
                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-ink transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Start Optimizing Today
                </button>
              </div>
            </Reveal>

            {/* Right Column: Two Phone Mockups */}
            <Reveal>
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center lg:justify-end">
                
                {/* Phone 1: Stock Overview */}
                <div className="phone-slider">
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="app-header">
                        <h2>Stock Overview</h2>
                        <div className="app-search">Search inventory...</div>
                      </div>
                      <div className="app-body">
                        <div className="chart-container">
                          <div className="donut-chart"><div className="donut-hole">550</div></div>
                          <div className="chart-legend">
                            <div className="legend-item"><span className="dot bg-green"></span><span className="legend-text">In stock</span><span className="legend-val">63.6% (350)</span></div>
                            <div className="legend-item"><span className="dot bg-yellow"></span><span className="legend-text">Low stock</span><span className="legend-val">17.8% (98)</span></div>
                            <div className="legend-item"><span className="dot bg-red"></span><span className="legend-text">Out of stock</span><span className="legend-val">1.3% (7)</span></div>
                            <div className="legend-item"><span className="dot bg-blue"></span><span className="legend-text">Overstock</span><span className="legend-val">17.3% (95)</span></div>
                          </div>
                        </div>
                        <div className="list-title">Products</div>
                        <div className="product-card">
                          <div className="p-info"><h4>Araliya Keeri samba Rice</h4><p>5kg</p></div>
                          <div className="p-data"><div className="p-price">LKR 1,250.00</div><span className="p-stock">In stock (120)</span></div>
                        </div>
                        <div className="product-card">
                          <div className="p-info"><h4>White Sugar</h4><p>1kg</p></div>
                          <div className="p-data"><div className="p-price">LKR 260.00</div><span className="p-stock">In stock (85)</span></div>
                        </div>
                        <div className="product-card">
                          <div className="p-info"><h4>Highland Milk powder</h4><p>400g</p></div>
                          <div className="p-data"><div className="p-price">LKR 1,180.00</div><span className="p-stock">In stock (12)</span></div>
                        </div>
                      </div>
                      <div className="bottom-nav">
                        <div className="nav-item active"><span className="nav-icon">📦</span>Stocks</div>
                        <div className="nav-item"><span className="nav-icon">🚚</span>Delivery</div>
                        <div className="nav-item"><span className="nav-icon">🤝</span>Suppliers</div>
                        <div className="nav-item"><span className="nav-icon">📊</span>Reports</div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      
         <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          {/* Added a grid wrapper to put 2 items per row on medium+ screens */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20">
            {modules.map((module, i) => (
              <Reveal key={module.id}>
                <div id={module.id} className="scroll-mt-24">
                  <ShelfRail className="mb-8" />
                  <Eyebrow>{module.eyebrow}</Eyebrow>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-balance text-maroon sm:text-3xl">
                    {module.title}
                  </h2>
                  <p className="mt-5 text-lg/8 text-pretty text-ink/70">
                    {module.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See it with your own stock list"
        intro="Send us a photo of your current stock book or a spreadsheet, and we'll load it into a demo account for you."
      />
    </>
  );
}