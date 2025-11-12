"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const studies = [
  {
    title: "Fluxo de onboarding com IA",
    description:
      "Reposicionamos a primeira jornada com mensagens contextuais e validações inteligentes. Resultado: +37% de ativação em 60 dias.",
    metrics: ["+37% ativação", "-18% suporte", "NPS 4.7"],
    image: "/case-onboarding.svg"
  },
  {
    title: "Painel financeiro responsivo",
    description:
      "Redesenho de dashboards com filtros dinâmicos, responsividade avançada e dark mode nativo.",
    metrics: ["+22% retenção", "+15% uso mobile", "99% AA compliance"],
    image: "/case-finance.svg"
  }
];

export function CaseStudies() {
  return (
    <section
      className="mx-auto mt-24 w-full max-w-6xl space-y-12 px-6 lg:px-8"
      id="cases"
    >
      <div className="flex flex-col gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
          Impacto real
        </span>
        <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
          Resultados que elevam produto, marca e métricas
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-400">
          Cada release traz ganhos tangíveis. Trabalhamos com squads para medir
          impacto, aprender rápido e manter consistência de ponta a ponta.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {studies.map((study, index) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-white/5 bg-slate-950/70"
          >
            <div className="relative h-56 w-full bg-slate-900/80">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover brightness-[0.92]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="space-y-6 p-8">
              <h3 className="font-display text-2xl font-semibold text-white">
                {study.title}
              </h3>
              <p className="text-sm text-slate-400">{study.description}</p>
              <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-brand-100">
                {study.metrics.map((metric) => (
                  <li
                    key={metric}
                    className="rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
