import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, ShelfRail } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who is building InventiX, why, and how to get in touch about early access.",
};

const principles = [
  {
    title: "Built for the counter, not the boardroom",
    body: "The person using this is serving a customer with one hand. Every screen has to be readable at a glance and finishable in a few taps.",
  },
  {
    title: "Your data stays yours",
    body: "The forecasting model learns from your shop for your shop. You can export everything, and if you leave, it leaves with you.",
  },
  {
    title: "Say what isn't finished",
    body: "Where something is still under consideration — like live GPS tracking — we say so on the site instead of putting it in a feature list.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="About"
              title="A stock book, rewritten for the shops that still use one"
              intro="InventiX started from a simple observation: most small grocery shops in Sri Lanka run on memory and a notebook, and both of them fail at exactly the wrong moment."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
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
                  item at once, remember which supplier actually delivered on
                  time last Poya, and do the arithmetic on what next month will
                  look like based on what the last twelve looked like.
                </p>
                <p>
                  InventiX is a small team building this in Sri Lanka, for
                  shops in Sri Lanka. We are onboarding our first group of
                  businesses now, and we would rather have twenty shops that
                  use it every day than a thousand downloads.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-px overflow-hidden rounded-2xl bg-maroon/10">
                {principles.map((p) => (
                  <div key={p.title} className="bg-white p-7">
                    <h3 className="text-base font-bold text-maroon">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm/6 text-ink/70">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ShelfRail className="mb-14" />
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Get in touch"
                  title="Tell us about your shop"
                  intro="We set up early-access accounts by hand — with your items, your suppliers and your reorder points already in. It takes us about a day."
                />
                <dl className="mt-10 space-y-5">
                  <div>
                    <dt className="font-mono text-[0.68rem] tracking-[0.2em] text-amber uppercase">
                      Email
                    </dt>
                    <dd className="mt-1 text-base text-maroon">
                      hello@inventix.lk
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.68rem] tracking-[0.2em] text-amber uppercase">
                      WhatsApp
                    </dt>
                    <dd className="mt-1 text-base text-maroon">
                      +94 XX XXX XXXX
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.68rem] tracking-[0.2em] text-amber uppercase">
                      Based in
                    </dt>
                    <dd className="mt-1 text-base text-maroon">
                      Colombo, Sri Lanka
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-maroon">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Eyebrow tone="light">Sinhala · Tamil · English</Eyebrow>
          <p className="mt-4 max-w-2xl text-xl/8 text-balance text-paper">
            The app is being built for all three languages. If your staff are
            more comfortable in Sinhala or Tamil, say so when you write to us —
            it helps us decide what to finish first.
          </p>
        </div>
      </section>
    </>
  );
}
