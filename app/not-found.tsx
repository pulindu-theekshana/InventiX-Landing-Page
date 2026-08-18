import { ButtonLink, Eyebrow } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center lg:px-8">
        <LogoMark className="h-14 w-auto opacity-70" variant="light" />
        <Eyebrow tone="light" className="mt-8">
          Error 404
        </Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-paper">
          This shelf is empty
        </h1>
        <p className="mt-4 max-w-md text-lg/8 text-paper/65">
          The page you asked for isn&apos;t here. Nothing an alert can fix —
          try the home page instead.
        </p>
        <div className="mt-9">
          <ButtonLink href="/">Back to the home page</ButtonLink>
        </div>
      </div>
    </section>
  );
}
