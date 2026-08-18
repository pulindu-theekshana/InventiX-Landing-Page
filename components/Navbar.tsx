"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "./Logo";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Suppliers", href: "/suppliers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">InventiX — home</span>
          <Logo />
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-maroon"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-9">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-semibold transition-colors ${
                  active ? "text-maroon" : "text-ink/65 hover:text-maroon"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <Link
            href="/about#contact"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-maroon transition duration-200 hover:-translate-y-0.5 hover:bg-gold-300"
          >
            Request early access
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-ink/40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-paper p-6 sm:max-w-sm sm:ring-1 sm:ring-maroon/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">InventiX — home</span>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-maroon"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-maroon/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-maroon hover:bg-maroon/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/about#contact"
                  className="block rounded-lg bg-gold px-3 py-3 text-center text-base font-semibold text-maroon"
                >
                  Request early access
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
