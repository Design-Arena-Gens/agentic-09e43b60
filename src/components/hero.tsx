"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Design Ops conectado à engenharia",
  "Iterações guiadas por IA e dados reais",
  "Experiências acessíveis e inclusivas"
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="mx-auto h-72 w-72 rounded-full bg-gradient-to-r from-brand-500/40 via-brand-300/20 to-blue-500/30 opacity-70 sm:h-96 sm:w-96" />
      </div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.45em] text-brand-100"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Nova release 3.2
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] lg:items-center">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl"
          >
            Atualizamos cada detalhe do seu produto para entregar experiências
            memoráveis.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Aurora Studio combina estratégia, pesquisa e desenvolvimento front-end
            para acelerar sua evolução digital. Centralizamos decisões, protótipos e
            entregas com uma camada visual moderna e acessível.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center"
          >
            <Link
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
            >
              Ver atualizações
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#roadmap"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40"
            >
              Roadmap detalhado
            </Link>
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.4 }
              }
            }}
            className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-2 rounded-2xl border border-white/5 bg-slate-900/50 px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-200" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-900/70 p-6"
        >
          <div className="radial-mask pointer-events-none absolute inset-0 -z-10 opacity-60" />
          <div className="space-y-6">
            <header className="flex items-center justify-between text-xs font-medium text-slate-400">
              <span>Mapa de jornadas</span>
              <span>Atualizado há 4 dias</span>
            </header>
            <div className="grid gap-4">
              {["Onboarding", "Painel Financeiro", "Relatórios"].map((section, i) => (
                <div
                  key={section}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/60 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{section}</p>
                    <p className="text-xs text-slate-400">Sprint {i + 3}</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-200">
                    {70 + i * 8}% pronto
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-4 text-sm text-brand-50">
              Coletamos feedbacks semanais e já entregamos 27 melhorias nesta release.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
