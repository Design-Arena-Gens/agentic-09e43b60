import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { MetricsGrid } from "@/components/metrics-grid";
import { FocusAreas } from "@/components/focus-areas";
import { DesignSystemShowcase } from "@/components/design-system-showcase";
import { UpdateTimeline } from "@/components/update-timeline";
import { CaseStudies } from "@/components/case-studies";
import { CallToAction } from "@/components/call-to-action";
import { OpsHighlights } from "@/components/ops-highlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <MetricsGrid />
      </Suspense>
      <FocusAreas />
      <OpsHighlights />
      <DesignSystemShowcase />
      <UpdateTimeline />
      <CaseStudies />
      <CallToAction />
    </>
  );
}
