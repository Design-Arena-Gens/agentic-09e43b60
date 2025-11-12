"use client";

import { motion } from "framer-motion";
import { Paintbrush, SwatchBook, Workflow } from "lucide-react";

const tokens = [
  { label: "Cores", value: "16 tokens", detail: "Escalas atualizadas + contraste AAA" },
  { label: "Tipografia", value: "Inter / Space Grotesk", detail: "Peso automático por contexto" },
  { label: "Espaçamentos", value: "8px grid", detail: "Escala fluida para mobile e desktop" },
  { label: "Sombras", value: "5 presets", detail: "Elevations otimizadas para dark mode" }
];

export function DesignSystemShowcase() {
  return (
    <section
      id="design-system"
      className="mx-auto mt-24 grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[2fr,3fr] lg:items-center lg:px-8"
    >
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/60 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
          <Paintbrush className="h-3.5 w-3.5" />
          Design System
        </span>
        <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
          Sistema de design vivo, conectado ao produto
        </h2>
        <p className="text-base text-slate-400">
          Criamos uma base robusta com tokens inteligentes, componentes auditados e
          documentação viva. O resultado é consistência visual, acessibilidade e
          velocidade para experimentar novas ideias.
        </p>
        <ul className="space-y-4 text-sm text-slate-300">
          <li className="flex items-center gap-3">
            <SwatchBook className="h-5 w-5 text-brand-200" />
            Tokens compartilhados em múltiplas plataformas com fallback automático.
          </li>
          <li className="flex items-center gap-3">
            <Workflow className="h-5 w-5 text-brand-200" />
            Componentes com modos variantes, estados e comportamento documentados.
          </li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 p-8"
      >
        <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] md:h-[260px] md:w-[260px]" />
        <div className="relative space-y-6">
          <header className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>Tokens ativos</span>
            <span>Atualizado há 2h</span>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {tokens.map((token, index) => (
              <motion.div
                key={token.label}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/5 bg-slate-950/80 p-5"
              >
                <p className="text-xs uppercase tracking-wide text-brand-200">
                  {token.label}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {token.value}
                </p>
                <p className="mt-2 text-xs text-slate-400">{token.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
