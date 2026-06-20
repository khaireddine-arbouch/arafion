"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/arafion-data/blog-posts";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
        gap: "1px",
        background: "rgba(0,0,0,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {posts.map((article) => (
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`}
          className="group block"
          style={{ textDecoration: "none" }}
        >
          <div
            className="transition-colors group-hover:bg-[#F9F9F9]"
            style={{
              background: "white",
              padding: "1.5rem",
              height: "100%",
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
                display: "block",
                marginBottom: "0.65rem",
              }}
            >
              {article.category}
            </span>
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "14.5px",
                lineHeight: 1.4,
                letterSpacing: "-0.012em",
                color: "#1D1D1F",
                marginBottom: "0.75rem",
              }}
            >
              {article.title}
            </p>
            <span
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "11.5px",
                color: "#86868B",
              }}
            >
              {article.readTime} read
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
