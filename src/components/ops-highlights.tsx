"use client";

import { FeatureCard } from "@/components/feature-card";
import { Clock3, Compass, Cpu, Users } from "lucide-react";

const opsHighlights = [
  {
    title: "Squads sincronizadas",
    description:
      "Cerimônias semanais com documentação viva, alinhando backlog, protótipos e entregas.",
    icon: Users,
    highlight: "Playbook de colaboração"
  },
  {
    title: "Automação com IA",
    description:
      "Assistentes que avaliam telas, sugerem melhorias de usabilidade e priorizam insights.",
    icon: Cpu,
    highlight: "Assistente Aurora"
  },
  {
    title: "Governança de design",
    description:
      "Checklist de acessibilidade, revisão semântica e auditoria automática de componentes.",
    icon: Compass
  },
  {
    title: "Ritmo acelerado",
    description:
      "Roadmap trimestral estruturado, com entregas quinzenais e rotas para experimentos rápidos.",
    icon: Clock3
  }
];

export function OpsHighlights() {
  return (
    <section className="mx-auto mt-24 grid w-full max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
      {opsHighlights.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          variant={index % 2 === 0 ? "primary" : "secondary"}
        />
      ))}
    </section>
  );
}
