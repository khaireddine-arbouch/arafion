import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import FloatingDockNav from "@/components/ui/FloatingDockNav";
import SiteFooter from "@/components/footer/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://arafion.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arafion — Product Engineering Lab",
    template: "%s · Arafion",
  },
  description:
    "Arafion is a hybrid execution studio building websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems. We build the systems behind serious digital execution.",
  keywords: [
    "product engineering",
    "SaaS development",
    "AI workflows",
    "dashboard development",
    "web development agency",
    "architectural visualization",
    "3D rendering",
    "Next.js development",
    "software engineering studio",
    "digital systems",
    "marketing infrastructure",
    "Arafion",
  ],
  authors: [{ name: "Arafion", url: SITE_URL }],
  creator: "Arafion",
  publisher: "Arafion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arafion",
    title: "Arafion — Product Engineering Lab",
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems for businesses that need serious digital execution.",
    images: [
      {
        url: "/Arafion%20Icon.png",
        width: 512,
        height: 512,
        alt: "Arafion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arafion — Product Engineering Lab",
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems.",
    images: ["/Arafion%20Icon.png"],
    creator: "@arafionhq",
    site: "@arafionhq",
  },
  icons: {
    icon: [
      { url: "/Arafion%20Icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/Arafion%20Icon.png", type: "image/png" },
    ],
    shortcut: "/Arafion%20Icon.png",
  },
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arafion",
  url: SITE_URL,
  logo: `${SITE_URL}/Arafion%20Icon.png`,
  description:
    "Arafion is a hybrid execution studio building websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems.",
  email: "contact@arafion.com",
  sameAs: [
    "https://www.linkedin.com/company/arafion",
    "https://www.instagram.com/arafionhq",
    "https://www.instagram.com/arafion.architects/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@arafion.com",
    contactType: "customer service",
    availableLanguage: ["English", "French", "Arabic"],
  },
  knowsAbout: [
    "Software Engineering",
    "SaaS Development",
    "AI Systems",
    "Dashboard Development",
    "Architectural Visualization",
    "3D Rendering",
    "Marketing Infrastructure",
    "Web Development",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arafion",
  url: SITE_URL,
  description: "Product engineering lab building digital systems, AI products, and visual sales assets.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/work?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <Script
          id="scroll-restoration"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if ('scrollRestoration' in history) history.scrollRestoration = 'manual';`,
          }}
        />
        {children}
        <SiteFooter />
        <FloatingDockNav />
        <Analytics />
      </body>
    </html>
  );
}
