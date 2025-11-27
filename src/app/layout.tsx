"use client";

import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses We Offer" },
  { href: "/events", label: "Events" },
  { href: "/join-mentor", label: "Join as Mentor" },
  { href: "/join-student", label: "Join as Student" },
  { href: "/clients", label: "Clients" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Datanerdz AI | Crafting Tomorrow's Success</title>
        <meta
          name="description"
          content="Datanerdz AI is an edtech company helping students and professionals master data, tech, and business skills through industry-ready courses, projects, and mentorship."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-slate-900`}
      >
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
              {/* Logo */}
              <Link href="/" className="flex flex-shrink-0 items-center gap-2">
                <Image
                  src="/datanerdzai-logo.png"
                  alt="DatanerdzAI"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <div className="flex flex-col">
                  <div className="text-sm font-bold uppercase tracking-wide text-slate-900">
                    Datanerdz.AI
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-primary">
                    Crafting Tomorrow&apos;s Success
                  </div>
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
              <button
                onClick={() => setContactModalOpen(true)}
                className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark md:inline-flex"
              >
                Talk to Us
              </button>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
              <div className="grid gap-8 md:grid-cols-4">
                {/* Brand Section */}
                <div className="md:col-span-2">
                  <p className="text-lg font-semibold tracking-tight">Datanerdz AI</p>
                  <p className="text-xs text-slate-400">+91 9363932727</p>
                  <p className="mt-2 text-sm text-slate-400">
                    A student-first learning community helping college students and freshers master tech skills, get mentorship, and build successful careers.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-slate-400">
                      <span className="font-medium text-white">Email:</span>{" "}
                      <a href="mailto:contact@datanerdzai.com" className="hover:text-sky-300">
                        contact@datanerdzai.com
                      </a>
                    </p>
                    <p className="text-slate-400">
                      <span className="font-medium text-white">Phone:</span>{" "}
                      <a href="tel:+919363932727" className="hover:text-sky-300">
                        +91 9363932727
                      </a>
                    </p>
                    <a
                      href="https://wa.me/919363932727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <p className="text-sm font-semibold">Quick Links</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media */}
                <div>
                  <p className="text-sm font-semibold">Connect With Us</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-sky-600 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-sky-600 hover:text-white"
                      aria-label="Twitter"
                    >
                      <span className="text-sm">𝕏</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-pink-600 hover:text-white"
                      aria-label="Instagram"
                    >
                      <span className="text-sm">📷</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-red-600 hover:text-white"
                      aria-label="YouTube"
                    >
                      <span className="text-sm">▶</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-400">
                <p>
                  &copy; {new Date().getFullYear()} Datanerdz AI. All rights reserved. |
                  Crafting tomorrow&apos;s success.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
