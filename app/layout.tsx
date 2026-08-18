import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InventiX — inventory that tells you what to order next",
    template: "%s · InventiX",
  },
  description:
    "InventiX manages stock, suppliers, deliveries and reports for small and medium grocery businesses in Sri Lanka, and forecasts what to buy before the season hits.",
  openGraph: {
    title: "InventiX — inventory that tells you what to order next",
    description:
      "Stock, suppliers, deliveries and reports for Sri Lankan grocery shops.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-maroon"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
