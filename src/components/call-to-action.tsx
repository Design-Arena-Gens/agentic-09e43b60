"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToAction() {
  return (
    <section
      id="contato"
      className="mx-auto mt-24 w-full max-w-5xl px-6 pb-24 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="radial-mask overflow-hidden rounded-[40px] border border-brand-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 p-10 shadow-[0_30px_80px_-40px_rgba(14,116,144,0.5)] md:p-16"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">
              Vamos juntos
            </span>
            <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
              Pronto para atualizar seu produto com um design evolutivo?
            </h2>
            <p className="text-base text-slate-300">
              Crie um ciclo de evolução contínua, com decisões guiadas por dados,
              biblioteca centralizada e experiências que seus usuários vão amar.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-60">
            <Link
              href="https://cal.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
            >
              Agendar conversa
            </Link>
            <Link
              href="mailto:design@aurorastudio.app"
              className="inline-flex items-center justify-center rounded-full border border-brand-200/50 bg-transparent px-6 py-3 text-base font-semibold text-brand-100 transition hover:bg-brand-500/10"
            >
              Enviar briefing
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
