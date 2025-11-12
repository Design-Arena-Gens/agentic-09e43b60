"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: string;
  variant?: "primary" | "secondary";
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  highlight,
  variant = "primary"
}: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/85 p-8 shadow-[0_30px_60px_-40px_rgba(15,23,42,1)]",
        variant === "primary" && "border-brand-500/20 bg-gradient-to-br from-slate-950 to-slate-900/90",
        variant === "secondary" && "border-slate-800/60"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-400/60 via-brand-200/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200 shadow-inner shadow-brand-500/10">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm text-slate-400">{description}</p>
        </div>
      </div>
      {highlight && (
        <p className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/5 px-4 py-3 text-xs font-medium uppercase tracking-wide text-brand-100">
          {highlight}
        </p>
      )}
    </motion.article>
  );
}
