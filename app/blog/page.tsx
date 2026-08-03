"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getBlogIndexContent } from "@/lib/i18n/blog-content";
import { getSiteConfig } from "@/lib/site/config";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";
const site = getSiteConfig();

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { locale } = useLanguage();
  const blog = getBlogIndexContent(locale);
  const featured = blog.articles[0];
  const rest = blog.articles.slice(1);
  const readLabel =
    locale === "fr"
      ? "lecture"
      : locale === "tr"
        ? "okuma"
        : locale === "ar"
          ? "قراءة"
          : locale === "he"
            ? "קריאה"
            : "read";

  const filtered =
    activeCategory === "all"
      ? rest
      : rest.filter((a) => a.categorySlug === activeCategory);

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* Top bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "14px",
              color: "#1D1D1F",
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
          >
            {site.shortName}
          </Link>
          <span
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "12px",
              color: "#86868B",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {blog.eyebrow}
          </span>
        </div>
      </div>

      {/* Page header */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(3rem, 5vw, 5rem) 1.25rem clamp(2.5rem, 4vw, 4rem)",
        }}
      >
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "13px",
              color: "#86868B",
              marginBottom: "1.25rem",
            }}
          >
          {blog.eyebrow} — {blog.articles.length} {locale === "fr" ? "articles" : locale === "tr" ? "makale" : locale === "ar" ? "مقالًا" : "articles"}
        </p>
        <h1
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#1D1D1F",
            maxWidth: "780px",
            marginBottom: "1.5rem",
          }}
        >
          {blog.heading}
        </h1>
        <p
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "15.5px",
            lineHeight: 1.7,
            color: "#86868B",
            maxWidth: "580px",
          }}
        >
          {blog.subheading}
        </p>
      </div>

      {/* Featured article */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem 3rem",
        }}
      >
        <Link
          href={featured.href}
          style={{ textDecoration: "none", display: "block" }}
        >
          <div
            className="group"
            style={{
              background: "#111316",
              borderRadius: "20px",
              padding: "clamp(2.5rem, 4vw, 4rem)",
              cursor: "pointer",
            }}
          >
            {/* Meta row */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: NM,
                  fontWeight: 500,
                  fontSize: "10.5px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {featured.category}
              </span>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px" }}>·</span>
              <span
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.28)",
                }}
              >
                {featured.readTime} {readLabel}
              </span>
              <span
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  padding: "2px 10px",
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "10.5px",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.04em",
                }}
              >
                {blog.featured}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "white",
                maxWidth: "820px",
                marginBottom: "1.25rem",
              }}
            >
              {featured.title}
            </h2>

            {/* Thesis */}
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.42)",
                maxWidth: "640px",
                marginBottom: "2.5rem",
              }}
            >
              {featured.thesis}
            </p>

            {/* Bottom row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "1.5rem",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem" }}>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: NM,
                      fontWeight: 400,
                      fontSize: "11.5px",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {blog.readArticle}
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Divider + filter */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            paddingTop: "2rem",
            paddingBottom: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
          }}
        >
          {blog.categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const count =
              cat.slug === "all"
                ? rest.length
                : rest.filter((a) => a.categorySlug === cat.slug).length;
            return (
              <button
              key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                style={{
                  fontFamily: NM,
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "12.5px",
                  letterSpacing: "-0.005em",
                  background: isActive ? "#1D1D1F" : "transparent",
                  color: isActive ? "white" : "#86868B",
                  border: `1px solid ${isActive ? "#1D1D1F" : "rgba(0,0,0,0.1)"}`,
                  borderRadius: "100px",
                  padding: "5px 14px",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.15s ease",
                }}
              >
                {cat.label}
                {cat.slug !== "all" && count > 0 && (
                  <span style={{ marginLeft: "5px", opacity: 0.45, fontSize: "11px" }}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Article grid */}
        <div style={{ paddingBottom: "6rem" }}>
          {filtered.length === 0 ? (
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "14px",
                color: "#86868B",
                padding: "2rem 0",
              }}
            >
              {blog.noArticles}
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
                gap: "1px",
                background: "rgba(0,0,0,0.07)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {filtered.map((article) => (
                <Link
                key={article.href}
                  href={article.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background: "white",
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "background 0.15s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.background = "#F9F9F9")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.background = "white")
                    }
                  >
                    {/* Category + read time */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.1rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: NM,
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#86868B",
                        }}
                      >
                        {article.category}
                      </span>
                      <span
                        style={{
                          fontFamily: NM,
                          fontWeight: 400,
                          fontSize: "11px",
                          color: "#86868B",
                        }}
                      >
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.38,
                        letterSpacing: "-0.015em",
                        color: "#1D1D1F",
                        marginBottom: "0.65rem",
                      }}
                    >
                      {article.title}
                    </h3>

                    {/* Thesis */}
                    <p
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "12.5px",
                        lineHeight: 1.6,
                        color: "#86868B",
                        marginBottom: "1.5rem",
                        flexGrow: 1,
                      }}
                    >
                      {article.thesis}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem 0.75rem",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        paddingTop: "1rem",
                      }}
                    >
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: NM,
                            fontWeight: 400,
                            fontSize: "10.5px",
                            color: "#86868B",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.07)",
          background: "#F5F5F7",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "4rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              color: "#1D1D1F",
              maxWidth: "520px",
            }}
          >
            {locale === "fr"
              ? "Prêt à construire quelque chose qui dure ?"
              : locale === "tr"
                ? "Uzun ömürlü bir şey inşa etmeye hazır mısınız?"
                : locale === "ar"
                  ? "هل أنت مستعد لبناء شيء يدوم؟"
                  : "Ready to build something that lasts?"}
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "13.5px",
              letterSpacing: "-0.01em",
              color: "white",
              background: "#1D1D1F",
              borderRadius: "100px",
              padding: "12px 28px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {locale === "fr" ? "Démarrer un projet" : locale === "tr" ? "Projeye başlayın" : locale === "ar" ? "ابدأ مشروعاً" : "Start a project"}
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "10px", height: "10px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
