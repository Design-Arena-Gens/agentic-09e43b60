 "use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-10 w-10 animate-pulse rounded-full bg-slate-800/60",
          className
        )}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/80 text-slate-100 shadow-glow transition hover:border-brand-400/60 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
        className
      )}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -15, opacity: 0, y: -6 }}
        animate={{ rotate: 0, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
      </motion.div>
    </motion.button>
  );
}
