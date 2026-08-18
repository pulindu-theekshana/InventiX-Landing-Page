import { ButtonLink, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";

export default function CtaBand({
  title = "Try InventiX in your shop",
  intro = "We're onboarding a first group of grocery shops now. Tell us what you stock and we'll set the app up with your items and suppliers.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-maroon">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-ink px-8 py-14 text-center sm:px-14">
            <LogoMark
              className="pointer-events-none absolute -right-10 -bottom-12 h-56 w-auto opacity-[0.07]"
              variant="light"
            />
            <div className="relative">
              <Eyebrow tone="light">Early access</Eyebrow>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-balance text-paper sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg/8 text-pretty text-paper/70">
                {intro}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href="/about#contact">
                  Request early access
                </ButtonLink>
                <ButtonLink href="/pricing" variant="quiet">
                  See pricing
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
