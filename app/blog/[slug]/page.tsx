import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import {
  getPublishedPosts,
  getPost,
  getRelated,
  type ContentBlock,
} from "@/data/arafion-data/blog-posts";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getLocalizedBlogPost } from "@/lib/i18n/blog-post-content";
import { getSiteConfig } from "@/lib/site/config";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";
const site = getSiteConfig();

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const raw = getPost(slug);
  if (!raw) return { title: "Not Found" };
  const post = getLocalizedBlogPost(locale, raw);
  const url = `${site.siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.thesis,
    keywords: post.tags,
    authors: [{ name: site.name, url: site.siteUrl }],
    openGraph: {
      title: post.title,
      description: post.thesis,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      tags: post.tags,
      authors: [site.siteUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.thesis,
    },
    alternates: { canonical: url },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={i}
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "16.5px",
            lineHeight: 1.85,
            color: "#1D1D1F",
            marginBottom: "1.5rem",
          }}
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          key={i}
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "#1D1D1F",
            marginTop: "3rem",
            marginBottom: "1rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={i}
          style={{
            fontFamily: NM,
            fontWeight: 500,
            fontSize: "1.05rem",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "#1D1D1F",
            marginTop: "2rem",
            marginBottom: "0.6rem",
          }}
        >
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul
          key={i}
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {block.items.map((item, j) => (
            <li
              key={j}
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#1D1D1F",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.85rem",
              }}
            >
              <span
                style={{
                  color: "#86868B",
                  flexShrink: 0,
                  marginTop: "2px",
                  fontSize: "14px",
                }}
              >
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={i}
          style={{
            margin: "2.5rem 0",
            padding: "0 0 0 1.5rem",
            borderLeft: "2px solid #1D1D1F",
            fontFamily: NM,
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "1.1rem",
            lineHeight: 1.65,
            color: "#1D1D1F",
          }}
        >
          {block.text}
        </blockquote>
      );

    case "callout":
      return (
        <div
          key={i}
          style={{
            background: "#F5F5F7",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            margin: "2rem 0",
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "14.5px",
            lineHeight: 1.75,
            color: "#1D1D1F",
          }}
        >
          {block.text}
        </div>
      );

    case "divider":
      return (
        <hr
          key={i}
          style={{
            border: "none",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            margin: "3rem 0",
          }}
        />
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const raw = getPost(slug);
  if (!raw) notFound();
  const post = getLocalizedBlogPost(locale, raw);

  const related = getRelated(slug, 3).map((p) => getLocalizedBlogPost(locale, p));
  const copy =
    locale === "fr"
      ? { back: "Du laboratoire", readTime: "lecture", more: "Plus du laboratoire", cta: "Prêt à construire quelque chose de sérieux ?", start: "Démarrer un projet" }
      : locale === "tr"
        ? { back: "Laboratuvardan", readTime: "okuma", more: "Laboratuvardan daha fazlası", cta: "Ciddi bir şey inşa etmeye hazır mısınız?", start: "Projeye başlayın" }
        : locale === "ar"
          ? { back: "من المختبر", readTime: "قراءة", more: "المزيد من المختبر", cta: "هل أنت مستعد لبناء شيء جاد؟", start: "ابدأ مشروعاً" }
          : locale === "he"
            ? { back: "מהמעבדה", readTime: "קריאה", more: "עוד מהמעבדה", cta: "מוכנים לבנות משהו רציני?", start: "התחלת פרויקט" }
            : { back: "From the Lab", readTime: "read", more: "More from the Lab", cta: "Ready to build something serious?", start: "Start a project" };

  return (
    <>
      <ReadingProgress />

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
              href="/blog"
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "13px",
                color: "#86868B",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                letterSpacing: "-0.005em",
              }}
            >
              <svg
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ width: "9px", height: "9px" }}
              >
                <path d="M8 5H2M5 8l-3-3 3-3" />
              </svg>
              {copy.back}
            </Link>
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
              Arafion
            </Link>
          </div>
        </div>

        {/* Article header */}
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "4rem 2rem 3rem",
          }}
        >
          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.65rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: NM,
                fontWeight: 500,
                fontSize: "10.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#86868B",
              }}
            >
              {post.category}
            </span>
            <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "12px",
                color: "#86868B",
              }}
            >
              {post.readTime} {copy.readTime}
            </span>
            <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "12px",
                color: "#86868B",
              }}
            >
              {post.publishedAt}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#1D1D1F",
              maxWidth: "900px",
              marginBottom: "1.75rem",
            }}
          >
            {post.title}
          </h1>

          {/* Thesis */}
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "1.2rem",
              lineHeight: 1.65,
              color: "#86868B",
              maxWidth: "720px",
              marginBottom: "2rem",
            }}
          >
            {post.thesis}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "11.5px",
                  color: "#86868B",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "100px",
                  padding: "3px 11px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem" }}>
          <hr
            style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: 0 }}
          />
        </div>

        {/* Article content */}
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "3.5rem 2rem 4rem",
          }}
        >
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              maxWidth: "1320px",
              margin: "0 auto",
              padding: "3rem 2rem 4rem",
            }}
          >
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "13px",
                color: "#86868B",
                marginBottom: "2rem",
                letterSpacing: "-0.005em",
              }}
            >
              {copy.more}
            </p>
            <RelatedPosts posts={related} />
          </div>
        )}

        {/* Bottom CTA */}
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
              {copy.cta}
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
              {copy.start}
              <svg
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                style={{ width: "10px", height: "10px" }}
              >
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}
