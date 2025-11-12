"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, Figma, Palette, Sparkles } from "lucide-react";

const updates = [
  {
    title: "Dashboard redesenhado",
    description:
      "Layout modular com foco em tarefas e status em tempo real, com dark mode completo.",
    icon: Sparkles,
    date: "Abril 2024",
    status: "Entregue"
  },
  {
    title: "Nova camada visual para componentes críticos",
    description:
      "Refinamos botões, inputs e feedbacks, garantindo contraste AAA e alinhamento com guidelines de acessibilidade.",
    icon: Palette,
    date: "Março 2024",
    status: "Entregue"
  },
  {
    title: "Sistema de tokens integrado ao Figma",
    description:
      "Sincronização bidirecional entre Figma e aplicação com revisão automática de inconsistências.",
    icon: Figma,
    date: "Fevereiro 2024",
    status: "Em andamento"
  },
  {
    title: "Coleta de feedback inteligente",
    description:
      "Automação com IA para priorizar insights de usuários e direcionar decisões de design semanalmente.",
    icon: CalendarCheck2,
    date: "Janeiro 2024",
    status: "Backlog"
  }
];

export function UpdateTimeline() {
  return (
    <section
      id="roadmap"
      className="mx-auto mt-24 flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
          Roadmap
        </span>
        <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
          Evolução contínua com entregas mensuráveis
        </h2>
        <p className="mx-auto max-w-2xl text-base text-slate-400">
          Monitoramos cada atualização com indicadores claros e checkpoints
          colaborativos entre design, produto e engenharia.
        </p>
      </div>

      <div className="relative space-y-4 md:space-y-6">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-brand-500/50 via-brand-400/20 to-transparent md:block" />
        {updates.map((update, index) => (
          <motion.article
            key={update.title}
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="relative z-10 flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/60 p-6 md:flex-row md:items-center md:gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200 md:flex">
                <update.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-200">{update.date}</p>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {update.title}
                </h3>
              </div>
            </div>

            <p className="flex-1 text-sm text-slate-400">{update.description}</p>
            <div className="self-start rounded-full border border-slate-700/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              {update.status}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
