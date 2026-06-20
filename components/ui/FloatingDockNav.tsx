"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/context";

const ARAFION_ICON_SRC = "/Arafion%20Icon.png";

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

function MenuIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <motion.path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ d: open ? "M4 4l10 10" : "M3 6h12" }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ d: open ? "M14 4L4 14" : "M3 12h12" }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}

export default function FloatingDockNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hasEverScrolled, setHasEverScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV = [
    { href: "/work",     label: t.nav.work },
    { href: "/services", label: t.nav.services },
    { href: "/about",    label: t.nav.about },
    { href: "/blog",     label: t.nav.blog },
    { href: "/contact",  label: t.nav.contact },
  ];

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

  // Close the mobile sheet whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the sheet is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  // Don't mount at all until user has scrolled past threshold at least once
  if (!hasEverScrolled && !reduceMotion) return null;

  const dockActive = reduceMotion ? true : (scrolled && !footerVisible);

  return (
    <>
      {/* ── Mobile backdrop + sheet ─────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-99 bg-black/45 backdrop-blur-[2px] sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              key="sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-x-0 bottom-0 z-100 flex max-h-[min(82vh,560px)] flex-col rounded-t-[28px] border-t border-white/10 bg-[#141414] sm:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.6 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 90 || info.velocity.y > 600) setMenuOpen(false);
              }}
            >
              {/* Grab handle — also signals "swipe down to close" */}
              <div className="flex shrink-0 justify-center pt-3 pb-1">
                <div className="h-1.5 w-10 rounded-full bg-white/20" />
              </div>

              {/* Brand row */}
              <div className="flex shrink-0 items-center justify-between px-5 pt-2 pb-4">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                  <Image src={ARAFION_ICON_SRC} alt="" width={22} height={22} className="size-[20px] object-contain" />
                  <span className="text-[14px] font-medium tracking-[-0.02em] text-white">Arafion</span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label={t.common.close}
                  className="flex size-9 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-colors hover:bg-white/10"
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="size-3.5">
                    <path d="M2 2l10 10M12 2L2 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links — scrolls internally if content is taller than the sheet, so the contact row below always stays visible */}
              <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 pb-2">
                {NAV.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 text-[16px] font-medium tracking-tight transition-colors ${
                        active ? "bg-white/[0.08] text-white" : "text-white/80 active:bg-white/[0.06]"
                      }`}
                    >
                      {item.label}
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={`size-2.5 ${active ? "text-white/70" : "text-white/30"}`}>
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </Link>
                  );
                })}
              </nav>

              {/* Language + contact — pinned at the bottom of the sheet, never scrolled out of view */}
              <div
                className="flex shrink-0 items-center gap-2.5 border-t border-white/10 px-5 pt-4"
                style={{ paddingBottom: "max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))" }}
              >
                <LanguageSwitcher dark />
                <a
                  href="mailto:contact@arafion.com"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[13.5px] font-semibold text-[#141414]"
                >
                  <MailIcon className="size-4 shrink-0" />
                  <span className="truncate">contact@arafion.com</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Floating dock ───────────────────────────────────────────────── */}
      <motion.nav
        className="isolate fixed left-1/2 z-90 flex w-[min(calc(100vw-1rem),44rem)] max-w-full -translate-x-1/2 items-center rounded-full border border-white/10 bg-[#141414] px-2 py-2 backdrop-blur-md sm:px-3.5 sm:py-2.5"
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

        {/* ── Mobile compact bar (below sm): logo + menu toggle only ── */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <motion.div
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
          >
            <Link
              href="/"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#141414] shadow-inner transition-shadow ${
                pathname === "/" ? "ring-2 ring-white/40 shadow-md" : "ring-1 ring-black/5"
              }`}
              aria-label={t.nav.home}
            >
              <Image src={ARAFION_ICON_SRC} alt="" width={24} height={24} className="size-[18px] object-contain" priority />
            </Link>
          </motion.div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label={t.common.openMenu}
            aria-expanded={menuOpen}
            className="flex h-11 items-center gap-2 rounded-full bg-white/[0.08] px-4 text-[13px] font-medium text-white transition-colors active:bg-white/[0.14]"
          >
            <MenuIcon open={false} className="size-[15px]" />
            {t.common.menu}
          </button>
        </div>

        {/* ── Desktop layout (sm+): full nav row ── */}
        <div className="hidden w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:grid">
          {/* Logo */}
          <motion.div
            className="relative flex shrink-0 justify-self-start"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
          >
            <Link
              href="/"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#141414] shadow-inner transition-shadow ${
                pathname === "/" ? "ring-2 ring-white/40 shadow-md" : "ring-1 ring-black/5"
              }`}
              aria-label={t.nav.home}
            >
              <Image src={ARAFION_ICON_SRC} alt="" width={24} height={24} className="size-6 object-contain" priority />
            </Link>
          </motion.div>

          {/* Nav pills */}
          <ul className="relative flex min-w-0 items-center justify-center gap-0.5 md:gap-1" role="list">
            {NAV.map((item, i) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="shrink-0">
                  <motion.div
                    initial={false}
                    animate={reduceMotion ? { y: 0, opacity: 1 } : { y: dockActive ? 0 : 6, opacity: 1 }}
                    transition={{
                      delay: reduceMotion ? 0 : dockActive ? i * 0.05 : 0,
                      type: "spring",
                      stiffness: 440,
                      damping: 26,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`group relative flex min-h-11 items-center overflow-hidden rounded-full px-2.5 text-[11px] font-medium tracking-tight transition-colors md:px-3.5 md:text-[13px] ${
                        active ? "text-white" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="dock-nav-pill"
                          className="absolute inset-0 rounded-full bg-white/12"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          aria-hidden
                        />
                      )}
                      <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                      {!active && (
                        <span
                          className="absolute bottom-1.5 left-1/2 z-10 h-px w-0 -translate-x-1/2 bg-white/75 transition-all duration-300 ease-out group-hover:w-[55%] md:bottom-2"
                          aria-hidden
                        />
                      )}
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>

          {/* Actions: language switcher + email */}
          <div className="relative flex shrink-0 items-center gap-1.5 justify-self-end">
            <LanguageSwitcher dark compact />
            <motion.div
              className="relative flex shrink-0"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 450, damping: 24 }}
            >
              <a
                href="mailto:contact@arafion.com"
                aria-label="Email contact@arafion.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-4 py-2.5 text-[12px] font-semibold text-[#141414] shadow-sm ring-1 ring-black/4 transition-shadow hover:shadow-md"
              >
                <span className="max-w-44 truncate md:max-w-none">contact@arafion.com</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
