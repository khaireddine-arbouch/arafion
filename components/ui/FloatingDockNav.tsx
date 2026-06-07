"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const ARAFION_ICON_SRC = "/Arafion%20Icon.png";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 7 12 12.5 21 7" />
    </svg>
  );
}

export default function FloatingDockNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hasEverScrolled, setHasEverScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Show after scrolling 80px past top
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 80;
      setScrolled(past);
      if (past) setHasEverScrolled(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when footer enters the viewport
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Don't mount at all until user has scrolled past threshold at least once
  if (!hasEverScrolled && !reduceMotion) return null;

  const dockActive = reduceMotion ? true : (scrolled && !footerVisible);

  return (
    <motion.nav
      className="isolate fixed left-1/2 z-100 grid w-[min(calc(100vw-1rem),44rem)] max-w-full -translate-x-1/2 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-2 py-2 backdrop-blur-md sm:gap-3 sm:px-3.5 sm:py-2.5"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
      initial={{ y: 24, opacity: 0, scale: 0.94 }}
      animate={
        reduceMotion
          ? {
              y: 0,
              opacity: 1,
              scale: 1,
              boxShadow: "0 16px 48px rgba(0,0,0,0.32), 0 2px 8px rgba(0,0,0,0.12)",
            }
          : {
              y: dockActive ? 0 : 24,
              opacity: dockActive ? 1 : 0,
              scale: dockActive ? 1 : 0.94,
              pointerEvents: dockActive ? "auto" : "none",
              boxShadow: dockActive
                ? "0 20px 56px rgba(0,0,0,0.38), 0 4px 14px rgba(0,0,0,0.18)"
                : "0 10px 28px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.1)",
            }
      }
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 30,
        mass: 0.9,
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      aria-label="Primary"
    >
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-tr from-white/[0.07] via-transparent to-transparent"
          aria-hidden
          animate={{ opacity: dockActive ? 1 : 0.5 }}
          transition={{ duration: 0.45 }}
        />
      )}

      {/* Logo — column 1 */}
      <motion.div
        className="relative flex shrink-0 justify-self-start"
        whileHover={reduceMotion ? undefined : { scale: 1.06 }}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
      >
        <Link
          href="/"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#141414] shadow-inner transition-shadow ${
            pathname === "/"
              ? "ring-2 ring-white/40 shadow-md"
              : "ring-1 ring-black/5"
          }`}
          aria-label="Home"
        >
          <Image
            src={ARAFION_ICON_SRC}
            alt=""
            width={24}
            height={24}
            className="size-[18px] object-contain sm:size-6"
            priority
          />
        </Link>
      </motion.div>

      {/* Nav — column 2, centered in remaining space */}
      <ul
        className="relative flex min-w-0 snap-x snap-mandatory items-center justify-center gap-px overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] sm:snap-none sm:gap-0.5 md:gap-1 [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {NAV.map((item, i) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href} className="shrink-0 snap-center">
              <motion.div
                initial={false}
                animate={
                  reduceMotion
                    ? { y: 0, opacity: 1 }
                    : { y: dockActive ? 0 : 6, opacity: 1 }
                }
                transition={{
                  delay: reduceMotion ? 0 : dockActive ? i * 0.05 : 0,
                  type: "spring",
                  stiffness: 440,
                  damping: 26,
                }}
              >
                <Link
                  href={item.href}
                  className={`group relative flex min-h-11 items-center overflow-hidden rounded-full px-2 py-2 text-[10px] font-medium tracking-tight transition-colors sm:px-2.5 sm:text-[11px] md:px-3.5 md:text-[13px] ${
                    active ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="dock-nav-pill"
                      className="absolute inset-0 rounded-full bg-white/12"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">
                    {item.label}
                  </span>
                  {!active && (
                    <span
                      className="absolute bottom-1 left-1/2 z-10 h-px w-0 -translate-x-1/2 bg-white/75 transition-all duration-300 ease-out group-hover:w-[55%] sm:bottom-1.5 md:bottom-2"
                      aria-hidden
                    />
                  )}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>

      {/* Email — column 3 */}
      <motion.div
        className="relative flex shrink-0 justify-self-end"
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 450, damping: 24 }}
      >
        <a
          href="mailto:hello@arafion.com"
          aria-label="Email hello@arafion.com"
          className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-white px-2.5 text-[10px] font-semibold text-[#141414] shadow-sm ring-1 ring-black/4 transition-shadow hover:shadow-md sm:min-h-11 sm:min-w-0 sm:px-4 sm:py-2.5 sm:text-[12px]"
        >
          <MailIcon className="shrink-0 sm:hidden" />
          <span className="hidden max-w-44 truncate sm:inline md:max-w-none">
            hello@arafion.com
          </span>
        </a>
      </motion.div>
    </motion.nav>
  );
}
