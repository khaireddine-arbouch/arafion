import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work · Arafion",
};

export default function MethodologyPage() {
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
          How we work
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-12">
          Every engagement on our map follows the same disciplined process.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-ink tracking-tight mb-3">
              1. Discovery
            </h2>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              We start by understanding the business — not just the feature request.
              What does success look like in 6 months? What constraints are real?
              What has been tried before? This phase produces a systems map, not a spec.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink tracking-tight mb-3">
              2. Architecture
            </h2>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              We design the system before we write a line of code. Data models,
              API contracts, infrastructure topology, and deployment strategy.
              Every decision is documented with trade-offs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink tracking-tight mb-3">
              3. Build
            </h2>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              Two-week sprints with working software at the end of each cycle.
              Continuous integration, automated testing, and weekly demos with
              stakeholders. We ship to staging on every merge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink tracking-tight mb-3">
              4. Ship & Operate
            </h2>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              Production deployment with observability from day one. We don&apos;t
              hand off — we operate alongside your team through the first
              critical months, then transfer knowledge systematically.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
