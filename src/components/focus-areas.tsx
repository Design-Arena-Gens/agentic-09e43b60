"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Gauge,
  LayoutDashboard,
  MessageCircle,
  Sparkles,
  Users2
} from "lucide-react";

const areas = [
  {
    title: "Experiência clara",
    description:
      "Redesenhamos fluxos críticos com protótipos validados, reduzindo atritos e melhorando a ativação inicial.",
    icon: LayoutDashboard
  },
  {
    title: "Métricas acionáveis",
    description:
      "Integramos eventos-chave e dashboards de observabilidade para conectar decisões de design a resultados.",
    icon: Gauge
  },
  {
    title: "Acessibilidade avançada",
    description:
      "Implementação de padrões WCAG 2.2 com testes automatizados e análises semânticas contínuas.",
    icon: Accessibility
  },
  {
    title: "Branding refinado",
    description:
      "Sistema visual com micro interações e animações sutis que elevam a percepção de valor.",
    icon: Sparkles
  },
  {
    title: "Conteúdo estratégico",
    description:
      "Guidelines de tom de voz, microcopy contextual e mensagens baseadas no momento da jornada.",
    icon: MessageCircle
  },
  {
    title: "Colaboração em escala",
    description:
      "Playbooks de handoff, documentação viva e rituais para alinhar designers, PMs e devs.",
    icon: Users2
  }
];

export function FocusAreas() {
  return (
    <section
      id="sobre"
      className="mx-auto mt-24 w-full max-w-6xl px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-200">
          Atualizações em destaque
        </span>
        <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
          Transformamos insights em evoluções concretas
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-400">
          Combinamos pesquisa contínua, sprints enxutos e um design system vivo para
          atualizar seu produto sem rupturas. Tudo alinhado ao roadmap e a metas de
          negócio.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {areas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/70 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-100 shadow-inner">
                <area.icon className="h-6 w-6" />
              </span>
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-400">{area.description}</p>
              </div>
              <span className="mt-auto text-sm font-medium text-brand-200">
                Ver casos →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
