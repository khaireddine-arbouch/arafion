"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";

export default function CTASection() {
  return (
    <FadeInOnView>
      <div className="relative rounded-[2rem] overflow-hidden bg-ink text-white">
        {/* Gradient mesh bg */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #0A84FF 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #BF5AF2 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, #30D158 0%, transparent 50%)",
          }}
        />

        <div className="relative px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
              Have a system that needs building?
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed">
              We take on 3–4 new engagements per quarter. If you&rsquo;re
              building something that matters — AI, infrastructure, product
              — let&rsquo;s talk about whether we&rsquo;re the right fit.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-ink text-sm font-semibold tracking-tight hover:bg-white/90 transition-colors"
              >
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
            <Link
              href="/about"
              className="text-center text-[13px] text-white/40 hover:text-white/70 transition-colors"
            >
              Or learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </FadeInOnView>
  );
}
