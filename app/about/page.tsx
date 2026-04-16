import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Arafion",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-12"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to map
        </Link>

        <h1 className="text-4xl font-semibold text-ink tracking-tight mb-4">
          About Arafion
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-12">
          A product engineering lab that designs and builds high-leverage
          digital systems.
        </p>

        <div className="space-y-8 text-[15px] text-ink/80 leading-relaxed">
          <p>
            We work across the full stack — from product conception and
            interface design to AI-powered tools, internal systems, and
            production deployment.
          </p>
          <p>
            Our focus is simple: build systems that actually improve how a
            business operates. That includes high-end corporate websites,
            data-rich dashboards, AI-driven applications, and decision
            systems — all engineered with speed, precision, and real-world
            constraints in mind.
          </p>
          <p>
            We don&rsquo;t approach projects as design tasks or isolated builds.
            We approach them as systems. That means understanding the business,
            structuring the problem, and delivering something that works at
            scale — not just something that looks good.
          </p>
          <p>
            Arafion operates at the intersection of engineering, product
            thinking, and execution. We build fast, we go deep where it
            matters, and we prioritize outcomes over appearances.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-black/[.06]">
          <h2 className="text-xl font-semibold text-ink tracking-tight mb-6">
            By the numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30+", label: "Projects shipped" },
              { value: "4", label: "Continents" },
              { value: "15+", label: "Countries" },
              { value: "100M+", label: "End users served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-ink tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
