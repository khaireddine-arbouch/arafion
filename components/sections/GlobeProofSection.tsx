"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import createGlobe from "cobe";
import GlobeProjectCard from "@/components/map/GlobeProjectCard";
import { FONT_INTER_STACK } from "@/lib/font-stacks";
import { ALL_MAP_PROJECTS } from "@/lib/map-projects";
import type { MapProject } from "@/types";

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';
const { PI, sin, cos } = Math;

/* ── constants (identical to CinematicGlobeHero) ───────────────────────── */
const GLOBE_R    = 0.8;
const MIN_SCALE  = 1;
const MAX_SCALE  = 2.6;
const ZOOM_SPEED = 0.002;
const LABEL_PAD_X = 76;
const LABEL_PAD_Y = 24;

const HUBS = [
  { id: "morocco",       label: "Morocco",       location: [31.7917,  -7.0926] as [number, number] },
  { id: "turkey",        label: "Türkiye",       location: [39.9334,  32.8597] as [number, number] },
  { id: "europe",        label: "Europe",        location: [48.8566,   2.3522] as [number, number] },
  { id: "international", label: "International", location: [ 1.3521, 103.8198] as [number, number] },
];

const ARC_PAIRS = [
  ["morocco", "turkey"],
  ["turkey",  "europe"],
  ["europe",  "international"],
  ["international", "morocco"],
] as const;

const REGION_LABELS: Record<string, string> = {
  "United States": "North America - Business Intelligence Systems",
  Canada:          "North America - Business Intelligence Systems",
  Morocco:         "Morocco - Data Operations",
  Turkey:          "Türkiye - Software Systems",
  France:          "Europe - Software Engineering",
  Germany:         "Europe - Software Engineering",
  "United Kingdom":"Europe - Software Engineering",
  Singapore:       "Global - SaaS Infrastructure",
};

/* ── logos / testimonials ───────────────────────────────────────────────── */
const LOGOS = [
  { src: "/logos/Almajliss-Site-Icon.webp",        alt: "Almajliss"          },
  { src: "/logos/Atlas%20Intelligence%20Logo.png",  alt: "Atlas Intelligence" },
  { src: "/logos/chafai-architects.png",            alt: "Chafai Architects"  },
  { src: "/logos/evo2-Logo.png",                    alt: "EVO2"               },
  { src: "/logos/geoflex%20logo.png",               alt: "Geoflex"            },
  { src: "/logos/Toomore-Logo.png",                 alt: "Toomore"            },
  { src: "/logos/BK%20logo.svg",                    alt: "BK"                 },
  { src: "/logos/SignalsFrame%20logo.png",          alt: "SignalsFrame"       },
  { src: "/logos/nile-route-os-logo.png",           alt: "Nile Route OS"     },
];

const TESTIMONIALS = [
  { quote: "Shipped our core analytics dashboard in five weeks. Changed how we run daily operations.",   author: "Atlas Intelligence" },
  { quote: "Technical depth that matched our brief better than any agency we had worked with before.",  author: "Geoflex"            },
  { quote: "From concept to production-ready in under eight weeks. Genuinely impressive execution.",    author: "EVO2"               },
  { quote: "The automation workflows they built delivered measurable time savings from day one.",        author: "Toomore"            },
  { quote: "Clean architecture, zero handholding. Code our team can actually own and build on.",        author: "Chafai Architects"  },
  { quote: "Flawless cross-timezone collaboration. The results exceeded every expectation we had set.", author: "Almajliss"          },
];

/* ── types ──────────────────────────────────────────────────────────────── */
interface GlobeMarker {
  id: string;
  location: [number, number];
  size: number;
  weight: number;
  count: number;
  project: MapProject;
}

/* ── math helpers (identical to CinematicGlobeHero) ────────────────────── */
function latLonTo3D([lat, lon]: [number, number]): [number, number, number] {
  const latRad = (lat * PI) / 180;
  const lonRad = (lon * PI) / 180 - PI;
  const cosLat = cos(latRad);
  return [-cosLat * cos(lonRad), sin(latRad), cosLat * sin(lonRad)];
}

function projectMarker(
  location: [number, number],
  phi: number,
  theta: number,
  elevation: number,
  scale = 1,
): { x: number; y: number; visible: boolean } {
  const pos3D = latLonTo3D(location);
  const r = GLOBE_R + elevation;
  const p: [number, number, number] = [pos3D[0] * r, pos3D[1] * r, pos3D[2] * r];
  const cx = cos(theta), cy = cos(phi), sx = sin(theta), sy = sin(phi);
  const rx =  cy * p[0] + sy * p[2];
  const ry =  sy * sx * p[0] + cx * p[1] - cy * sx * p[2];
  const rz = -sy * cx * p[0] + sx * p[1] + cy * cx * p[2];
  return { x: (rx * scale + 1) / 2, y: (-ry * scale + 1) / 2, visible: rz >= 0 || rx * rx + ry * ry >= 0.64 };
}

function clusterProjects(projects: MapProject[], cellDeg: number): GlobeMarker[] {
  const buckets = new Map<string, MapProject[]>();
  for (const p of projects) {
    const key = `${Math.round(p.lat / cellDeg)}|${Math.round(p.lng / cellDeg)}`;
    const b = buckets.get(key) ?? [];
    b.push(p);
    buckets.set(key, b);
  }
  const markers: GlobeMarker[] = [];
  for (const [, bucket] of buckets) {
    let repr = bucket[0]; let sumLat = 0, sumLng = 0, weight = 0;
    for (const p of bucket) {
      const w = p.engagementWeight ?? 1;
      sumLat += p.lat; sumLng += p.lng; weight += w;
      if (w > (repr.engagementWeight ?? 0)) repr = p;
    }
    markers.push({
      id: `marker-${repr.id}`,
      location: [sumLat / bucket.length, sumLng / bucket.length],
      size: weight > 110 ? 0.034 : weight > 60 ? 0.026 : 0.018,
      weight, count: bucket.length, project: repr,
    });
  }
  return markers.sort((a, b) => b.weight - a.weight);
}

function targetPhiFor(location: [number, number]): number {
  return ((-location[1] - 20) * PI) / 180;
}

/* ── component ──────────────────────────────────────────────────────────── */
export default function GlobeProofSection() {
  /* globe refs */
  const canvasRef       = useRef<HTMLCanvasElement>(null);
  const containerRef    = useRef<HTMLDivElement>(null);
  const phiRef          = useRef(0);
  const targetPhiRef    = useRef<number | null>(null);
  const thetaOffset     = useRef(0);
  const phiOffset       = useRef(0);
  const dragOffset      = useRef({ phi: 0, theta: 0 });
  const pointerDown     = useRef<{ x: number; y: number } | null>(null);
  const isPausedRef     = useRef(false);
  const reducedMotionRef = useRef(false);
  const scaleRef        = useRef(1);
  const scaleTargetRef  = useRef(1);
  const idleTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const labelRefs       = useRef<Map<string, HTMLButtonElement>>(new Map());
  const hubRefs         = useRef<Map<string, HTMLDivElement>>(new Map());
  const arcRefs         = useRef<Map<string, SVGPathElement>>(new Map());

  /* state */
  const [selectedProject, setSelectedProject] = useState<MapProject | null>(null);

  /* derived */
  const markers = useMemo(() => clusterProjects(ALL_MAP_PROJECTS, 4), []);
  const topIds  = useMemo(() => {
    const regions = new Map<string, GlobeMarker>();
    for (const m of markers) {
      const key = `${Math.round(m.location[0] / 36)}|${Math.round(m.location[1] / 36)}`;
      const ex = regions.get(key);
      if (!ex || m.weight > ex.weight) regions.set(key, m);
    }
    return new Set(Array.from(regions.values()).map((m) => m.id));
  }, [markers]);

  /* callbacks */
  const resumeAfterIdle = useCallback((ms = 1400) => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      if (!pointerDown.current && !selectedProject) isPausedRef.current = false;
    }, ms);
  }, [selectedProject]);

  const handleSelectProject = useCallback((project: MapProject) => {
    setSelectedProject(project);
    isPausedRef.current = true;
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
    resumeAfterIdle(800);
  }, [resumeAfterIdle]);

  const handleHubClick = useCallback((location: [number, number]) => {
    targetPhiRef.current = targetPhiFor(location);
    thetaOffset.current  = Math.max(-0.28, Math.min(0.28, location[0] / 180));
    isPausedRef.current  = true;
    resumeAfterIdle(1800);
  }, [resumeAfterIdle]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerDown.current = { x: e.clientX, y: e.clientY };
    targetPhiRef.current = null;
    isPausedRef.current  = true;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!pointerDown.current) return;
    const dx = e.clientX - pointerDown.current.x;
    const dy = e.clientY - pointerDown.current.y;
    const s  = scaleRef.current;
    dragOffset.current = { phi: dx / (210 * s), theta: dy / (620 * s) };
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerDown.current) {
      phiOffset.current   += dragOffset.current.phi;
      thetaOffset.current += dragOffset.current.theta;
      dragOffset.current   = { phi: 0, theta: 0 };
    }
    pointerDown.current = null;
    resumeAfterIdle();
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, [resumeAfterIdle]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    scaleTargetRef.current = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scaleTargetRef.current * (1 + -e.deltaY * ZOOM_SPEED)));
    isPausedRef.current = true;
    if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    wheelTimerRef.current = setTimeout(() => resumeAfterIdle(600), 500);
  }, [resumeAfterIdle]);

  /* media query + viewport effects */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const handler = (ev: MediaQueryListEvent) => { reducedMotionRef.current = ev.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* pointer + wheel event listeners */
  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup",   handlePointerUp,   { passive: true });
    const c = containerRef.current;
    if (c) c.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup",   handlePointerUp);
      if (c) c.removeEventListener("wheel", handleWheel);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [handlePointerMove, handlePointerUp, handleWheel]);

  /* globe animation loop */
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const elevation = 0.018;
    let animId = 0;

    const init = () => {
      const width = canvas.offsetWidth;
      if (!width) { animId = requestAnimationFrame(init); return; }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width, height: width,
        phi: 0, theta: 0.12,
        dark: 1, diffuse: 1.15,
        mapSamples: 22000, mapBrightness: 5.4,
        baseColor: [0.26, 0.29, 0.32],
        markerColor: [0.96, 0.62, 0.18],
        glowColor: [0.05, 0.06, 0.08],
        markers: markers.slice(0, 12).map((m) => ({ location: m.location, size: m.size })),
        markerElevation: elevation,
        opacity: 0.94,
      });

      const animate = () => {
        if (targetPhiRef.current !== null) {
          const diff = targetPhiRef.current - phiRef.current;
          phiRef.current += diff * 0.055;
          if (Math.abs(diff) < 0.002) targetPhiRef.current = null;
        } else if (!isPausedRef.current && !reducedMotionRef.current) {
          phiRef.current += 0.0022;
        }

        scaleRef.current += (scaleTargetRef.current - scaleRef.current) * 0.11;
        const s  = scaleRef.current;
        const tr = 0.36 + (s - 1) * 0.22;
        const currentPhi   = phiRef.current + phiOffset.current + dragOffset.current.phi;
        const currentTheta = Math.max(-tr, Math.min(tr, 0.12 + thetaOffset.current + dragOffset.current.theta));

        globe.update({ phi: currentPhi, theta: currentTheta, scale: s });

        const containerW = canvas.offsetWidth;
        const placed: { x: number; y: number }[] = [];
        for (const marker of markers) {
          const el = labelRefs.current.get(marker.id);
          if (!el) continue;
          const pos = projectMarker(marker.location, currentPhi, currentTheta, elevation, s);
          el.style.left = `${pos.x * 100}%`;
          el.style.top  = `${pos.y * 100}%`;
          const onScreen = pos.x > -0.04 && pos.x < 1.04 && pos.y > -0.04 && pos.y < 1.04;
          const isTop = topIds.has(marker.id);
          let hide = !pos.visible || !onScreen;
          if (!hide && isTop) {
            for (const p of placed) {
              if (Math.abs(pos.x * containerW - p.x * containerW) < LABEL_PAD_X &&
                  Math.abs(pos.y * containerW - p.y * containerW) < LABEL_PAD_Y) { hide = true; break; }
            }
            if (!hide) placed.push(pos);
          }
          el.style.opacity = hide ? "0" : "1";
          el.style.filter  = hide ? "blur(6px)" : "none";
        }

        const hubPositions = new Map<string, { x: number; y: number; visible: boolean }>();
        for (const hub of HUBS) {
          const pos = projectMarker(hub.location, currentPhi, currentTheta, elevation, s);
          hubPositions.set(hub.id, pos);
          const el = hubRefs.current.get(hub.id);
          if (el) {
            el.style.left    = `${pos.x * 100}%`;
            el.style.top     = `${pos.y * 100}%`;
            el.style.opacity = pos.visible ? "0.65" : "0";
          }
        }

        for (const [from, to] of ARC_PAIRS) {
          const path = arcRefs.current.get(`${from}-${to}`);
          const a = hubPositions.get(from), b = hubPositions.get(to);
          if (!path || !a || !b || !a.visible || !b.visible) { if (path) path.style.opacity = "0"; continue; }
          const mx = ((a.x + b.x) / 2) * 100;
          const my = ((a.y + b.y) / 2) * 100 - 7;
          path.setAttribute("d", `M ${a.x * 100} ${a.y * 100} Q ${mx} ${my} ${b.x * 100} ${b.y * 100}`);
          path.style.opacity = reducedMotionRef.current ? "0.18" : "0.34";
        }

        animId = requestAnimationFrame(animate);
      };
      animate();

      return () => { cancelAnimationFrame(animId); globe.destroy(); };
    };

    let cleanup: (() => void) | undefined;
    animId = requestAnimationFrame(() => { cleanup = init() ?? undefined; });
    return () => { cancelAnimationFrame(animId); cleanup?.(); };
  }, [markers, topIds]);

  /* ── render ─────────────────────────────────────────────────────────── */
  return (
    <section
      className="relative overflow-hidden bg-[#07080a] text-white"
      style={{ fontFamily: NM }}
    >
      {/* background from CinematicGlobeHero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_50%_38%,rgba(255,149,0,0.035),transparent_34%),linear-gradient(180deg,#090a0d_0%,#050506_100%)]" />

      {/* ── Globe ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center px-5 pt-14 md:pt-16">

        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            fontFamily: NM, fontWeight: 400, fontSize: "11px",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.32)",
          }}>
            <span style={{ width: "18px", height: "1px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
            Deployed projects
            <span style={{ width: "18px", height: "1px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
          </span>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            lineHeight: 1.12, letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.88)",
          }}>
            Operating across 4 continents.
          </h2>
          <p style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(13px, 1.2vw, 14.5px)",
            lineHeight: 1.7, color: "rgba(255,255,255,0.36)",
            maxWidth: "420px",
          }}>
            Each dot is a live or delivered engagement. Click any marker to see project details.
          </p>
        </div>

        {/* ── Globe + Card side-by-side row ─────────────────────────── */}
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">

        <div
          ref={containerRef}
          className="globe-markers-container relative aspect-square touch-none"
          style={{ width: "min(82vw, 660px)", flexShrink: 0 }}
        >
          <canvas
            ref={canvasRef}
            className="size-full cursor-grab"
            onPointerDown={handlePointerDown}
          />

          <svg
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 size-full overflow-visible"
            aria-hidden
          >
            {ARC_PAIRS.map(([from, to], i) => (
              <path
                key={`${from}-${to}`}
                ref={(el) => { if (el) arcRefs.current.set(`${from}-${to}`, el); else arcRefs.current.delete(`${from}-${to}`); }}
                fill="none"
                stroke="rgba(255,179,71,0.72)"
                strokeWidth="0.22"
                strokeDasharray="1.4 2.6"
                style={{ animation: `globe-arc-pulse 4.4s ease-in-out ${i * 0.45}s infinite` }}
              />
            ))}
          </svg>

          {/* hub region labels */}
          {HUBS.slice(0, 4).map((hub) => (
            <div
              key={hub.id}
              ref={(el) => { if (el) hubRefs.current.set(hub.id, el); else hubRefs.current.delete(hub.id); }}
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="rounded-full border border-white/14 bg-white/[.045] px-2.5 py-1 text-[10px] font-medium text-white/48 backdrop-blur"
                style={{ fontFamily: NM }}
              >
                {hub.label}
              </div>
            </div>
          ))}

          {/* project markers */}
          {markers.slice(0, 12).map((marker, index) => {
            const label = REGION_LABELS[marker.project.country ?? ""] ?? `${marker.project.regionLabel ?? "Global"} - Software Systems`;
            const isTop = topIds.has(marker.id);
            return (
              <button
                key={marker.id}
                ref={(el) => { if (el) labelRefs.current.set(marker.id, el); else labelRefs.current.delete(marker.id); }}
                type="button"
                className="globe-marker group absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-white/30"
                onMouseEnter={() => { isPausedRef.current = true; }}
                onMouseLeave={() => { resumeAfterIdle(900); }}
                onFocus={() => { isPausedRef.current = true; }}
                onBlur={() => { resumeAfterIdle(900); }}
                onClick={() => handleSelectProject(marker.project)}
                aria-label={`Open ${label}`}
              >
                <span className="globe-marker-icon block size-2.5 rounded-full bg-[#ffb14a] ring-2 ring-white/72 shadow-[0_0_16px_rgba(255,177,74,0.28)]" />
                <span className="absolute -inset-4 md:hidden" />
                <span className={`absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#111317]/88 px-3 py-1.5 text-[12px] font-medium text-white/76 shadow-2xl backdrop-blur-xl transition-all duration-150 ${isTop && index < 4 ? "hidden md:block" : "globe-marker-tooltip opacity-0 scale-95"}`}
                  style={{ fontFamily: NM }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Card — appears beside globe on lg+, below on mobile */}
        {selectedProject && (
          <div className="w-full max-w-[320px] lg:w-[300px]" style={{ flexShrink: 0 }}>
            <GlobeProjectCard project={selectedProject} onClose={handleCloseProject} />
          </div>
        )}

        </div>{/* end globe+card row */}

        {/* hub fly-to buttons */}
        <div className="mt-2 mb-0 flex flex-wrap justify-center gap-2">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              onClick={() => handleHubClick(hub.location)}
              className="rounded-full border border-white/8 bg-white/[.03] px-3 py-1.5 text-[11px] font-medium text-white/48 transition-colors hover:border-white/18 hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ fontFamily: NM }}
            >
              {hub.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Divider ────────────────────────────────────────────────────── */}
      <div className="mx-auto mt-4 max-w-[1280px] px-8 md:px-14" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* ── Logo strip ─────────────────────────────────────────────────── */}
      <div className="pt-6">
        <p className="mb-9 text-center" style={{ fontFamily: NM, fontWeight: 500, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
          Trusted by
        </p>
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
          <div className="flex w-max animate-marquee-left items-center" style={{ gap: "3.5rem" }}>
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="flex h-12 min-w-[4.5rem] shrink-0 items-center justify-center sm:h-14 sm:min-w-[5.5rem]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  decoding="async"
                  className="max-h-10 w-auto max-w-[160px] object-contain opacity-70 sm:max-h-11"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1280px] px-8 md:px-14" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
      </div>

      {/* ── Testimonials ticker ────────────────────────────────────────── */}
      <div className="mt-10 pb-14">
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div className="flex w-max animate-marquee-right-slow items-stretch" style={{ gap: 0 }}>
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="flex shrink-0 items-center">
                <blockquote style={{ width: "360px", padding: "0 2rem" }}>
                  <p
                    style={{
                      fontFamily: FONT_INTER_STACK,
                      fontWeight: 500,
                      fontSize: "clamp(15px, 1.35vw, 17px)",
                      lineHeight: 1.55,
                      letterSpacing: "-0.02em",
                      color: "rgba(255,255,255,0.96)",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <cite style={{ display: "block", marginTop: "10px", fontFamily: FONT_INTER_STACK, fontWeight: 600, fontStyle: "normal", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.58)" }}>
                    {t.author}
                  </cite>
                </blockquote>
                <div className="shrink-0 self-stretch" style={{ width: "1px", background: "rgba(255,255,255,0.09)", margin: "4px 0" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
