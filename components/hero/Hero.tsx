"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import type { Region } from "@/types";

// GlobeHero's d3-geo orthographic projection produces SVG path strings that
// depend on viewport size, so the SSR'd path never matches the client path
// and React hydration errors out — taking down scroll listeners on the
// hero subtree as collateral. Loading client-only sidesteps the mismatch.
const GlobeHero = dynamic(() => import("./GlobeHero"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden />,
});

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

type Props = {
  progress: number;
  onRegionClick?: (region: Region) => void;
};

export default function Hero({ progress, onRegionClick }: Props) {
  const headlineOpacity = clamp(1 - progress / 0.2, 0, 1);
  const headlineY = -progress * 40;
  // Scroll hint stays visible through most of the scroll since the map
  // transition itself doesn't begin until ~0.55. Fades out by ~0.6 once
  // the globe is clearly zooming into the map.
  const hintOpacity = clamp(1 - (progress - 0.45) / 0.15, 0, 1);
  // Fill the progress bar up to 100% by the time the map transition starts.
  const hintProgress = Math.min(100, (progress / 0.55) * 100);

  // Page bounce — if the visitor hasn't scrolled after ~2.5s, we smoothly
  // scroll down ~15vh then bounce back to 0. Acts as a physical demo that
  // the page is scrollable. Any real user scroll cancels the bounce.
  useEffect(() => {
    let userScrolled = false;
    let bouncing = false;
    const onScroll = () => {
      if (!bouncing) userScrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const startTimer = window.setTimeout(() => {
      if (userScrolled) return;
      bouncing = true;
      window.scrollTo({
        top: Math.round(window.innerHeight * 0.15),
        behavior: "smooth",
      });
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 750);
    }, 2500);
    return () => {
      window.clearTimeout(startTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const lockProgress = clamp((progress - 0.18) / 0.35, 0, 1);
  const phi = -15 - lockProgress * 25;
  const lockLambda = lockProgress > 0 ? 100 : undefined;

  const zoom = clamp((progress - 0.55) / 0.45, 0, 1);
  const globeScale = 1 + zoom * 1.8;
  const globeOpacity = clamp(1 - (zoom - 0.35) / 0.5, 0, 1);
  const bgOpacity = 1 - zoom;

  const inactive = progress > 0.92;

  return (
    <section
      className="fixed inset-0 z-20 overflow-hidden"
      style={{ pointerEvents: inactive ? "none" : "auto" }}
      aria-hidden={inactive}
    >
      <div
        className="absolute inset-0 bg-bg"
        style={{ opacity: bgOpacity }}
      />

      <div
        className="absolute inset-x-0 top-0 z-0 px-6 pt-6 pb-2 sm:pt-8 sm:pb-3 md:pt-10 md:pb-4 text-center pointer-events-none max-w-[min(42rem,100%)] mx-auto"
        style={{
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
          willChange: "transform, opacity",
        }}
      >
        {/* Top lockup: reads as a real header, less vertical drift than stacked + huge top offset */}
        <div className="flex items-center justify-center gap-2.5 md:gap-3 mb-4 md:mb-5">
          <Image
            src="/Arafion%20Icon.png"
            alt=""
            width={64}
            height={64}
            priority
            className="w-9 h-9 md:w-11 md:h-11 shrink-0 opacity-95"
          />
          <span
            className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase text-muted"
            aria-hidden
          >
            Arafion
          </span>
        </div>
        <p className="sr-only">Arafion</p>
        <h1 className="text-3xl sm:text-[2.65rem] md:text-[3.15rem] font-semibold tracking-[-0.02em] text-ink leading-[1.08] md:leading-[1.04]">
          Product engineering
        </h1>
        <p className="mt-3 md:mt-4 max-w-md mx-auto text-[14px] sm:text-[15px] text-muted leading-relaxed">
          We partner with product teams and enterprises to design, build, and
          ship systems that stay fast and clear as they grow.
        </p>
      </div>

      <div
        className="absolute inset-x-0 top-[min(38vh,18.5rem)] sm:top-[36vh] md:top-[34vh] z-10 flex justify-center"
        style={{
          opacity: globeOpacity,
          transform: `scale(${globeScale})`,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <div className="w-[78vh] h-[78vh] aspect-square">
          <GlobeHero
            phi={phi}
            lockLambda={lockLambda}
            onRegionClick={onRegionClick}
          />
        </div>
      </div>

      {/* Scroll prompt — label + animated chevron + progress bar so users
          know there's more below AND how far they have to go. Fades out
          once the map transition is visibly under way. */}
      <div
        className="absolute inset-x-0 bottom-[5.5vh] z-20 flex flex-col items-center gap-2.5 pointer-events-none"
        style={{ opacity: hintOpacity }}
        aria-hidden
      >
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-ink tracking-tight">
            Scroll to explore the portfolio map
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-ink"
            style={{ animation: "scroll-hint 1.8s ease-in-out infinite" }}
          >
            <path
              d="M3 4.5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative w-40 h-[2px] rounded-full bg-ink/10 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-ink"
            style={{ width: `${hintProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
