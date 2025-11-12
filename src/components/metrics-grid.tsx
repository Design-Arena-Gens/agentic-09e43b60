"use client";

import { motion } from "framer-motion";

type Metric = {
  label: string;
  value: string;
  description: string;
};

const metrics: Metric[] = [
  {
    label: "Tempo médio para release",
    value: "42%",
    description: "Redução no ciclo de entregas com automações e biblioteca compartilhada."
  },
  {
    label: "Aderência ao Design System",
    value: "96%",
    description: "Componentes auditados e sincronizados em tempo real entre squads."
  },
  {
    label: "Satisfação do time",
    value: "4.9/5",
    description: "Feedbacks positivos de designers e PMs após as últimas melhorias."
  },
  {
    label: "Tempo até insight",
    value: "3x",
    description: "Mais rápido para encontrar inconsistências e oportunidades em jornadas."
  }
];

export function MetricsGrid() {
  return (
    <section
      id="metricas"
      className="mx-auto grid w-full max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="rounded-3xl border border-white/5 bg-slate-900/60 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
            {metric.label}
          </p>
          <p className="mt-4 font-display text-4xl font-semibold text-white">
            {metric.value}
          </p>
          <p className="mt-3 text-sm text-slate-400">{metric.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
