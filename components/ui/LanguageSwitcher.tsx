"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { LOCALES, type Locale } from "@/lib/i18n/translations";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

interface Props {
  /** Dark nav / dark background variant */
  dark?: boolean;
  /** Minimal icon-only trigger (globe + 2-letter code) for tight spaces like the floating nav */
  compact?: boolean;
}

export default function LanguageSwitcher({ dark = false, compact = false }: Props) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const triggerBg   = dark ? "hover:bg-white/10"       : "hover:bg-black/[0.07]";
  const triggerRing = dark ? "focus-visible:ring-white/30" : "focus-visible:ring-black/30";
  const iconColor   = dark ? "rgba(255,255,255,0.65)"   : "rgba(29,29,31,0.70)";
  const textColor   = dark ? "#ffffff"                  : "#1D1D1F";
  const chevronColor= dark ? "rgba(255,255,255,0.45)"   : "rgba(29,29,31,0.50)";

  return (
    <div ref={ref} className="relative" style={{ fontFamily: NM }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.common.language}: ${current.nativeName}`}
        className={
          compact
            ? `flex h-9 w-9 items-center justify-center rounded-full transition-colors ${triggerBg} focus:outline-none focus-visible:ring-2 ${triggerRing}`
            : `flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition-colors ${triggerBg} focus:outline-none focus-visible:ring-2 ${triggerRing}`
        }
      >
        {compact ? (
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: textColor,
            }}
          >
            {locale.toUpperCase()}
          </span>
        ) : (
          <>
            {/* Globe icon */}
            <svg
              viewBox="0 0 18 18"
              fill="none"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-[15px] shrink-0"
              style={{ stroke: iconColor }}
            >
              <circle cx="9" cy="9" r="7.5" />
              <path d="M9 1.5C9 1.5 6 5.5 6 9s3 7.5 3 7.5M9 1.5C9 1.5 12 5.5 12 9s-3 7.5-3 7.5M1.5 9h15" />
            </svg>
            <span
              className="hidden sm:inline"
              style={{
                fontSize: "12.5px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: textColor,
              }}
            >
              {current.nativeName}
            </span>
            {/* Chevron */}
            <svg
              viewBox="0 0 10 10"
              fill="none"
              strokeWidth="1.5"
              className="size-[9px] shrink-0 transition-transform duration-200"
              style={{
                stroke: chevronColor,
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2 4l3 3 3-3" />
            </svg>
          </>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label={t.common.language}
          className="absolute bottom-full right-0 mb-2 w-44 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)]"
          style={{
            animation: "lang-dropdown-in 0.18s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <div className="p-1">
            {LOCALES.map((l) => {
              const isActive = l.code === locale;
              return (
                <button
                  key={l.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLocale(l.code as Locale);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-black/5 focus:outline-none focus-visible:bg-black/5"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      style={{
                        fontSize: "12.5px",
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "#1D1D1F" : "#3A3A3C",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {l.nativeName}
                    </span>
                    {l.dir === "rtl" && (
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 400,
                          color: "#A0A0A6",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        RTL
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#1D1D1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3 shrink-0"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @keyframes lang-dropdown-in {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}
