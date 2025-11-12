 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#design-system", label: "Design System" },
  { href: "#contato", label: "Contato" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="group relative flex items-center gap-2">
          <span className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 p-[2px] shadow-glow">
            <span className="flex h-full w-full items-center justify-center rounded-[6px] bg-slate-950 font-bold text-sm tracking-wide text-white">
              AS
            </span>
          </span>
          <div className="flex flex-col text-sm text-slate-300 transition group-hover:text-slate-50">
            <span className="font-display text-lg font-semibold leading-none">
              Aurora Studio
            </span>
            <span className="text-xs">Atualizações inteligentes</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-brand-400 to-brand-200 transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full border border-brand-500/60 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-100 transition hover:bg-brand-500/20 md:inline-flex"
          >
            Agendar demo
          </a>
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-200 transition hover:border-slate-700 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          closed: { height: 0, opacity: 0 },
          open: { height: "auto", opacity: 1 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "overflow-hidden border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl md:hidden"
        )}
      >
        <div className="space-y-2 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-700/80 hover:bg-slate-900/60"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="block rounded-lg border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200 transition hover:border-brand-400 hover:bg-brand-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar demo
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
