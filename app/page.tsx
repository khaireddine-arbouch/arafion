"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import MapShell from "@/components/map/MapShell";
import FadeInOnView from "@/components/ui/FadeInOnView";
import StatsBar from "@/components/sections/StatsBar";
import BentoCapabilities from "@/components/sections/BentoCapabilities";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import ClientMarquee from "@/components/sections/ClientMarquee";
import TechStack from "@/components/sections/TechStack";
import CTASection from "@/components/sections/CTASection";
import { useScrollProgress } from "@/lib/use-scroll-progress";
import type {
  Dimension,
  DimensionLens,
  Region,
  ViewTarget,
} from "@/types";

function smoothScrollToMap(duration = 1200) {
  if (typeof window === "undefined") return;
  const targetY = window.innerHeight * 2.2;
  const startY = window.scrollY;
  if (startY >= targetY - 1) return;
  const distance = targetY - startY;
  const startTime = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);
  const step = (now: number) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + distance * ease(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Page() {
  const progress = useScrollProgress();
  const [dimension, setDimension] = useState<Dimension>("overall");
  const [lens, setLens] = useState<DimensionLens>("portfolio");
  const navigateRef = useRef<((t: ViewTarget) => void) | null>(null);

  const handleGlobeRegionClick = (region: Region) => {
    navigateRef.current?.({
      region,
      naView: "countries",
      selectedGeoId: null,
    });
    smoothScrollToMap(1800);
  };

  return (
    <>
      <MapShell
        revealProgress={progress}
        dimension={dimension}
        lens={lens}
        navigateRef={navigateRef}
      />
      <Hero progress={progress} onRegionClick={handleGlobeRegionClick} />
      <div className="h-[400vh]" aria-hidden />

      {/* ──────────────────── SECTION 1 · At a Glance ──────────────────── */}
      <section className="relative z-10 bg-white border-t border-black/[.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-16">
          <FadeInOnView>
            <div className="text-[13px] font-medium text-muted tracking-tight mb-2">
              01 · At a glance
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.1] mb-10">
              Built across 4 continents
            </h2>
          </FadeInOnView>
          <StatsBar />
        </div>
      </section>

      {/* ──────────────────── SECTION 2 · What We Do ──────────────────── */}
      <section className="relative z-10 bg-bg border-t border-black/[.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
          <FadeInOnView>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <div className="text-[13px] font-medium text-muted tracking-tight mb-2">
                  02 · What we do
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.1]">
                  Systems that work at scale
                </h2>
              </div>
              <p className="text-[15px] text-muted leading-relaxed max-w-md">
                We don&rsquo;t approach projects as design tasks or isolated builds.
                We approach them as systems — engineered with speed, precision,
                and real-world constraints.
              </p>
            </div>
          </FadeInOnView>
          <BentoCapabilities />
        </div>
      </section>

      {/* ──────────────────── SECTION 3 · Featured Work ──────────────────── */}
      <section
        id="work"
        className="relative z-10 bg-white border-t border-black/[.06] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-24">
          <FadeInOnView>
            <div className="text-[13px] font-medium text-muted tracking-tight mb-2">
              03 · Featured work
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.1] mb-3">
              Case studies
            </h2>
            <p className="text-[15px] text-muted leading-relaxed max-w-[42rem] mb-12">
              Select an engagement to see the details. Every project on this
              list was designed, built, and shipped by Arafion.
            </p>
          </FadeInOnView>
          <FadeInOnView delay={100}>
            <FeaturedCaseStudies />
          </FadeInOnView>
        </div>
      </section>

      {/* ──────────────────── SECTION 4 · Clients ──────────────────── */}
      <section
        id="clients"
        className="relative z-10 bg-bg border-t border-black/[.06] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-24">
          <FadeInOnView>
            <div className="text-[13px] font-medium text-muted tracking-tight mb-2">
              04 · Clients
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.1] mb-3">
              Who we work with
            </h2>
            <p className="text-[15px] text-muted leading-relaxed max-w-[42rem] mb-10">
              From fintech unicorns to Fortune 500 enterprises across 15+ countries.
              Filter by region to explore our geographic footprint.
            </p>
          </FadeInOnView>
          <FadeInOnView delay={80}>
            <ClientMarquee />
          </FadeInOnView>
        </div>
      </section>

      {/* ──────────────────── SECTION 5 · Tech Stack ──────────────────── */}
      <section
        id="stack"
        className="relative z-10 bg-white border-t border-black/[.06] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-24">
          <FadeInOnView>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <div className="text-[13px] font-medium text-muted tracking-tight mb-2">
                  05 · Stack
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.1]">
                  Our toolkit
                </h2>
              </div>
              <p className="text-[15px] text-muted leading-relaxed max-w-md">
                We pick the right tool for each problem — no dogma.
                Here&rsquo;s what we reach for most.
              </p>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={80}>
            <TechStack />
          </FadeInOnView>
        </div>
      </section>

      {/* ──────────────────── SECTION 6 · CTA ──────────────────── */}
      <section className="relative z-10 bg-bg border-t border-black/[.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
          <CTASection />
        </div>
      </section>

      {/* ──────────────────── Footer ──────────────────── */}
      <footer className="relative z-10 bg-white border-t border-black/[.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-lg font-semibold text-ink tracking-tight">
                Arafion
              </div>
              <div className="text-xs text-muted mt-1">
                Product Engineering Lab
              </div>
            </div>
            <nav className="flex flex-wrap gap-6 text-xs text-muted">
              <Link href="/about" className="hover:text-ink transition-colors">About</Link>
              <Link href="/methodology" className="hover:text-ink transition-colors">How We Work</Link>
              <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
              <Link href="/globe" className="hover:text-ink transition-colors">3D Globe</Link>
            </nav>
            <div className="text-[11px] text-muted/60">
              &copy; {new Date().getFullYear()} Arafion. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
