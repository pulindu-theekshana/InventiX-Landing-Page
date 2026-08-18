import Link from "next/link";
import { Logo } from "./Logo";
import { ShelfRail } from "./ui";

const columns = [
  {
    heading: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "How it works", href: "/how-it-works" },
      { name: "Suppliers & delivery", href: "/suppliers" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Request early access", href: "/about#contact" },
      { name: "Roadmap", href: "/how-it-works#roadmap" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ShelfRail tone="light" className="mb-14" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm/6 text-paper/60">
              Stock, suppliers, deliveries and reports for grocery shops across
              Sri Lanka — in one app that tells you what to order before you run
              out.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-paper/45">
            © {new Date().getFullYear()} InventiX. Built in Sri Lanka.
          </p>
          <p className="font-mono text-xs text-paper/45">
            hello@inventix.lk · Colombo
          </p>
        </div>
      </div>
    </footer>
  );
}
