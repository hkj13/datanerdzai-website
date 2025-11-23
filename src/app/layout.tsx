import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DatanerdzAI | Crafting tomorrow's success",
  description:
    "DatanerdzAI is an edtech company helping students and professionals master data, tech, and business skills through industry-ready courses, projects, and mentorship.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses Offered" },
  { href: "/clients", label: "Our Clients" },
  { href: "/contact", label: "Contact Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/datanerdzai-logo.png"
                    alt="DatanerdzAI logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold tracking-tight text-slate-900">
                    DATANERDZ.AI
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Crafting tomorrow's success
                  </span>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark md:inline-flex"
              >
                Talk to us
              </Link>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-6">
              <div>
                <p className="font-semibold tracking-tight">DatanerdzAI</p>
                <p className="text-xs text-slate-400">
                  Upskilling students and professionals in data, tech, and business.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                <span>
                  9 {new Date().getFullYear()} DatanerdzAI. All rights reserved.
                </span>
                <span>Crafting tomorrow's success.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
