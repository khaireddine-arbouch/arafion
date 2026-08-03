import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";
import { getRequestLocale } from "@/lib/i18n/server";
import { getCaseStudyMeta, imageUrl } from "@/data/arafion-data/case-studies-meta";
import type { ArafionProjectRow } from "@/lib/portfolio-view";
import rawProjects from "@/data/arafion-data/projects.json";
import { regionLabel, serviceLabel, statusLabel } from "@/lib/i18n/labels";
import { getWhatWeBuilt } from "@/lib/i18n/whatwebuilt-content";
import { getClientBrief } from "@/lib/i18n/work-content";
import {
  getProjectDisplayTitle,
  getProjectShortDescription,
} from "@/lib/i18n/project-content";
import { getSiteConfig } from "@/lib/site/config";

const RAW = rawProjects as unknown as ArafionProjectRow[];
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedWork from "@/components/work/RelatedWork";

const site = getSiteConfig();
const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

const LOGO_MAP: Record<string, { src: string; invert?: boolean }> = {
  "nileroute-os":               { src: "/logos/nile-route-os-logo.png", invert: true },
  "evo2-variant-intelligence":  { src: "/logos/evo2-Logo.png" },
  signalsframe:                 { src: "/logos/SignalsFrame%20logo.png" },
  "atlas-intelligence":         { src: "/logos/Atlas%20Intelligence%20Logo.png" },
  geoflex360:                   { src: "/logos/geoflex%20logo.png" },
  "chafai-architects":          { src: "/logos/chafai-architects.png" },
  "almajliss-heritage":         { src: "/logos/Almajliss-Site-Icon.webp" },
};

const STATUS_DOT: Record<string, string> = {
  live:               "#30D158",
  delivered:          "#86868B",
  "in-development":   "#FF9F0A",
  prototype:          "#FF9F0A",
};

export async function generateStaticParams() {
  return ALL_PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  const locale = await getRequestLocale();
  const title = getProjectDisplayTitle(
    locale,
    slug,
    project.title || project.displayTitle,
  );
  const description = getProjectShortDescription(
    locale,
    slug,
    project.shortDescription,
  );
  const url = `${site.siteUrl}/work/${slug}`;
  const meta = getCaseStudyMeta(slug);
  const heroImg = meta ? imageUrl(meta.imageFolder, meta.images[0]) : null;
  return {
    title,
    description,
    keywords: [...project.stackTags, ...project.serviceLabels, site.shortName, "case study"],
    openGraph: {
      title: `${title} — ${site.shortName} Case Study`,
      description,
      url,
      type: "article",
      ...(heroImg ? { images: [{ url: heroImg, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.shortName}`,
      description,
      ...(heroImg ? { images: [heroImg] } : {}),
    },
    alternates: { canonical: url },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = ALL_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const locale = await getRequestLocale();
  const meta = getCaseStudyMeta(slug, locale);
  const raw = RAW.find((r) => (r.slug ?? r.id) === slug);
  const whatWeBuilt: string[] = getWhatWeBuilt(locale, slug, raw?.whatWeBuilt ?? []);
  const logo = LOGO_MAP[project.id];
  const dotColor = STATUS_DOT[project.status] ?? "#86868B";
  const clientBrief = getClientBrief(locale, slug);
  const title = getProjectDisplayTitle(
    locale,
    slug,
    project.title || project.displayTitle,
  );
  const copy =
    locale === "fr"
      ? { back: "Travaux", live: "Voir le projet en ligne", overview: "Aperçu", built: "Ce que nous avons construit", screenshots: "Captures d'écran", challenge: "Le défi", outcome: "Le résultat", more: "Plus de travaux", cta: "Vous avez un système à construire ? ", start: "Démarrer un projet", stack: "Stack technique", wantThis: "Envie de construire quelque chose comme ça ?", viewLive: "Voir le projet en ligne" }
      : locale === "tr"
        ? { back: "İşler", live: "Canlı projeyi görüntüle", overview: "Genel bakış", built: "Ne inşa ettik", screenshots: "Ekran görüntüleri", challenge: "Zorluk", outcome: "Sonuç", more: "Daha fazla iş", cta: "İnşa edilmesi gereken bir sisteminiz mi var?", start: "Projeye başlayın", stack: "Teknik altyapı", wantThis: "Böyle bir şey mi inşa etmek istiyorsunuz?", viewLive: "Canlı projeyi görüntüle" }
        : locale === "ar"
          ? { back: "الأعمال", live: "عرض المشروع المباشر", overview: "نظرة عامة", built: "ما الذي بنيناه", screenshots: "لقطات الشاشة", challenge: "التحدي", outcome: "النتيجة", more: "المزيد من الأعمال", cta: "هل لديك نظام يحتاج إلى بناء؟", start: "ابدأ مشروعاً", stack: "المكونات التقنية", wantThis: "تريد بناء شيء مثل هذا؟", viewLive: "عرض المشروع المباشر" }
          : locale === "he"
            ? { back: "עבודות", live: "צפו בפרויקט החי", overview: "סקירה", built: "מה בנינו", screenshots: "צילומי מסך", challenge: "האתגר", outcome: "התוצאה", more: "עוד עבודות", cta: "יש לכם מערכת שצריך לבנות?", start: "התחילו פרויקט", stack: "סטאק טכני", wantThis: "רוצים לבנות משהו כזה?", viewLive: "צפו בפרויקט החי" }
            : { back: "Work", live: "View live project", overview: "Overview", built: "What we built", screenshots: "Screenshots", challenge: "The challenge", outcome: "The outcome", more: "More work", cta: "Have a system, product, campaign, or visual experience that needs building?", start: "Start a project", stack: "Technical stack", wantThis: "Want to build something like this?", viewLive: "View live project" };

  // 3 related projects (same service category, excluding current)
  const related = ALL_PORTFOLIO_PROJECTS.filter(
    (p) =>
      p.slug !== slug &&
      p.serviceCategories.some((c) => project.serviceCategories.includes(c)),
  ).slice(0, 3);

  const allImages = meta
    ? meta.images.map((img) => imageUrl(meta.imageFolder, img))
    : [];
  const heroImage = allImages[0] ?? null;
  const gallery = allImages.slice(1, 8);

  return (
    <>
      <ReadingProgress />
      <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

        {/* ── Top bar ── */}
        <div style={{
          borderBottom: "1px solid rgba(0,0,0,0.07)", position: "sticky", top: 0, zIndex: 40,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}>
          <div style={{
            maxWidth: "1320px", margin: "0 auto", padding: "0 2rem",
            height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <Link href="/work" style={{
              fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem",
            }}>
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                <path d="M8 5H2M5 8l-3-3 3-3" />
              </svg>
              {copy.back}
            </Link>
            <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none" }}>
              {site.shortName}
            </Link>
          </div>
        </div>

        {/* ── Article header ── */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(2.5rem, 4vw, 4rem) 1.25rem clamp(2rem, 3vw, 3rem)" }}>

          {/* Meta row */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.65rem", marginBottom: "2rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: dotColor, display: "inline-block" }} />
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#86868B" }}>
                {statusLabel(locale, project.status)}
              </span>
            </span>
            <span style={{ color: "rgba(0,0,0,0.18)", fontSize: "10px" }}>·</span>
            {project.serviceCategories.slice(0, 2).map((category, i) => (
              <span key={i} style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B" }}>
                {serviceLabel(locale, category)}{i < Math.min(project.serviceCategories.length, 2) - 1 ? " ·" : ""}
              </span>
            ))}
            <span style={{ color: "rgba(0,0,0,0.18)", fontSize: "10px" }}>·</span>
            <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B" }}>
              {regionLabel(locale, project.regionLabel)}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            lineHeight: 1.06, letterSpacing: "-0.038em",
            color: "#1D1D1F", maxWidth: "900px", marginBottom: "1.5rem",
          }}>
            {title}
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: NM, fontWeight: 400, fontSize: "1.15rem",
            lineHeight: 1.65, color: "#86868B",
            maxWidth: "680px", marginBottom: "2rem",
          }}>
            {clientBrief ||
              getProjectShortDescription(locale, slug, project.shortDescription)}
          </p>

          {/* Tag chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.stackTags.slice(0, 6).map((tag) => (
              <span key={tag} style={{
                fontFamily: NM, fontWeight: 400, fontSize: "11.5px", color: "#86868B",
                border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100px", padding: "3px 11px",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Hero visual ── */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem 3rem" }}>
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            background: "#080A0E", position: "relative",
          }}>
            {heroImage ? (
              <>
                <Image
                  src={heroImage}
                  alt={`${title} screenshot`}
                  width={1200}
                  height={675}
                  priority
                  style={{ width: "100%", height: "auto", display: "block", maxHeight: "600px", objectFit: "cover", objectPosition: "top" }}
                />
                {/* Overlay bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                  padding: "2rem 1.75rem 1rem",
                  display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem",
                }}>
                  {logo && (
                    <Image
                      src={logo.src}
                      alt=""
                      width={140}
                      height={28}
                      style={{
                        height: "28px", width: "auto",
                        filter: "brightness(0) invert(1)",
                        opacity: 0.75,
                      }}
                    />
                  )}
                  {project.publicUrl && (
                    <Link
                      href={project.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "11.5px",
                        color: "rgba(255,255,255,0.7)", textDecoration: "none",
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px",
                        padding: "5px 14px", background: "rgba(0,0,0,0.3)",
                        backdropFilter: "blur(8px)",
                        marginLeft: "auto",
                      }}
                    >
                      {copy.live}
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "8px", height: "8px" }}>
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </>
            ) : (
              /* Fallback dark panel (no screenshots available) */
              <div style={{
                minHeight: "340px", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", padding: "4rem 2rem", position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  backgroundImage: "radial-gradient(ellipse 80% 55% at 50% 35%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }} />
                {logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo.src} alt={title} style={{
                    height: "56px", width: "auto", maxWidth: "min(320px, 80vw)", objectFit: "contain",
                    filter: logo.invert ? "brightness(0) invert(1)" : undefined, opacity: 0.9,
                  }} />
                ) : (
                  <p style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    lineHeight: 1.1, letterSpacing: "-0.035em",
                    color: "rgba(255,255,255,0.88)", textAlign: "center",
                  }}>
                    {title}
                  </p>
                )}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1rem 1.75rem",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "10.5px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {title} · {regionLabel(locale, project.regionLabel)}
                  </span>
                  {project.publicUrl && (
                    <Link href={project.publicUrl} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "11.5px",
                      color: "rgba(255,255,255,0.45)", textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: "5px",
                      border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "4px 12px",
                    }}>
                      {locale === "fr" ? "Voir en ligne" : locale === "tr" ? "Canlı görüntüle" : locale === "ar" ? "عرض مباشر" : locale === "he" ? "צפו בחי" : "View live"}
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "8px", height: "8px" }}>
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Body: overview + what we built ── */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr)",
            gap: "0",
          }}>

            {/* Overview */}
            {meta?.overview && (
              <div style={{
                maxWidth: "720px", margin: "0 auto", width: "100%",
                padding: "3rem 0 2.5rem",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}>
                <p style={{
                  fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#86868B", marginBottom: "1.75rem",
                }}>
                  {copy.overview}
                </p>
                {meta.overview.map((para, i) => (
                  <p key={i} style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "16px",
                    lineHeight: 1.85, color: "#1D1D1F", marginBottom: "1.4rem",
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* What we built — always show */}
            {whatWeBuilt.length > 0 && (
              <div style={{
                maxWidth: "720px", margin: "0 auto", width: "100%",
                padding: "2.5rem 0 3rem",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}>
                <p style={{
                  fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#86868B", marginBottom: "1.75rem",
                }}>
                  {copy.built}
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
                  gap: "1px",
                  background: "rgba(0,0,0,0.06)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}>
                  {whatWeBuilt.map((item, i) => (
                    <div key={i} style={{
                      background: "white", padding: "1rem 1.25rem",
                      display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    }}>
                      <span style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "11px",
                        color: "#86868B", flexShrink: 0, marginTop: "2px",
                        letterSpacing: "0.04em",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                        letterSpacing: "-0.01em", color: "#1D1D1F", lineHeight: 1.4,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Screenshot gallery — full container width ── */}
        {gallery.length > 0 && (
          <div style={{
            maxWidth: "1320px", margin: "0 auto",
            padding: "1rem 2rem 4rem",
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}>
            <p style={{
              fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#86868B", marginBottom: "1.75rem",
            }}>
              {copy.screenshots}
            </p>

            {/* First image full width */}
            <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[0]}
                alt={`${title} screenshot`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Remaining images in a 2-col grid */}
            {gallery.length > 1 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
                gap: "1rem",
              }}>
                {gallery.slice(1).map((src, i) => (
                  <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${title} screenshot ${i + 2}`}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Outcome / Challenge callouts ── */}
        {(meta?.challenge || meta?.outcome) && (
          <div style={{
            maxWidth: "1320px", margin: "0 auto",
            padding: "0 2rem 4rem",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "1rem",
            }}>
              {meta.challenge && (
                <div style={{
                  background: "#F5F5F7", borderRadius: "16px", padding: "2rem",
                }}>
                  <p style={{
                    fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#86868B", marginBottom: "0.85rem",
                  }}>
                    {copy.challenge}
                  </p>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.7, color: "#1D1D1F" }}>
                    {meta.challenge}
                  </p>
                </div>
              )}
              {meta.outcome && (
                <div style={{
                  background: "#1D1D1F", borderRadius: "16px", padding: "2rem",
                }}>
                  <p style={{
                    fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)", marginBottom: "0.85rem",
                  }}>
                    {copy.outcome}
                  </p>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                    {meta.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Technical stack ── */}
        {project.stackTags.length > 0 && (
          <div style={{
            maxWidth: "1320px", margin: "0 auto",
            padding: "0 2rem 4rem",
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}>
            <p style={{
              fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#86868B", margin: "2rem 0 1.25rem",
            }}>
              {copy.stack}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.stackTags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: NM, fontWeight: 400, fontSize: "13px",
                  letterSpacing: "-0.01em", color: "#1D1D1F",
                  border: "1px solid rgba(0,0,0,0.1)", borderRadius: "8px",
                  padding: "6px 14px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Related projects ── */}
        {related.length > 0 && (
          <div style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            maxWidth: "1320px", margin: "0 auto", padding: "3rem 2rem 4rem",
          }}>
            <p style={{
              fontFamily: NM, fontWeight: 400, fontSize: "13px",
              color: "#86868B", marginBottom: "2rem",
            }}>
              {copy.more}
            </p>
            <RelatedWork projects={related} />
          </div>
        )}

        {/* ── CTA ── */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#F5F5F7" }}>
          <div style={{
            maxWidth: "1320px", margin: "0 auto", padding: "clamp(2.5rem, 4vw, 4rem) 1.25rem",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: "1.5rem",
          }}>
            <div>
              <p style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                lineHeight: 1.2, letterSpacing: "-0.025em",
                color: "#1D1D1F", marginBottom: "0.5rem", maxWidth: "480px",
              }}>
                {copy.wantThis}
              </p>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#86868B" }}>
                {copy.cta}
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {project.publicUrl && (
                <Link
                  href={project.publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                    color: "#1D1D1F", background: "white",
                    border: "1px solid rgba(0,0,0,0.12)",
                    borderRadius: "100px", padding: "11px 24px",
                    textDecoration: "none", display: "inline-flex",
                    alignItems: "center", gap: "7px",
                  }}
                >
                  {copy.viewLive}
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                    <path d="M2 5h6M5 2l3 3-3 3" />
                  </svg>
                </Link>
              )}
              <Link
                href="/contact"
                style={{
                  fontFamily: NM, fontWeight: 500, fontSize: "13.5px",
                  letterSpacing: "-0.01em", color: "white", background: "#1D1D1F",
                  borderRadius: "100px", padding: "12px 28px",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
                }}
              >
                {copy.start}
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "10px", height: "10px" }}>
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
