import type { Metadata } from "next";
import { Inter, Cairo, Heebo } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import FloatingDockNav from "@/components/ui/FloatingDockNav";
import SiteFooter from "@/components/footer/SiteFooter";
import { LanguageProvider } from "@/lib/i18n/context";
import { getRequestLocale } from "@/lib/i18n/server";
import { translations } from "@/lib/i18n/translations";
import { getSiteConfig } from "@/lib/site/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-cairo",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const site = getSiteConfig();
const titleDefault = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: titleDefault,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
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
    site.shortName,
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  publisher: site.name,
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
    locale: site.id === "norex" ? "en_IL" : "en_US",
    url: site.siteUrl,
    siteName: site.name,
    title: titleDefault,
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems for businesses that need serious digital execution.",
    images: [
      {
        url: "/background.png",
        width: 1200,
        height: 630,
        alt: titleDefault,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems.",
    images: ["/background.png"],
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
  icons: {
    icon: [{ url: site.iconPath, type: "image/png" }],
    apple: [{ url: site.iconPath, type: "image/png" }],
    shortcut: site.iconPath,
  },
  category: "technology",
  alternates: {
    canonical: site.siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.siteUrl,
  logo: `${site.siteUrl}${site.iconPath}`,
  description: site.description,
  email: site.email,
  sameAs: site.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer service",
    availableLanguage: site.availableLanguages,
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
  name: site.name,
  url: site.siteUrl,
  description: "Product engineering lab building digital systems, AI products, and visual sales assets.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.siteUrl}/work?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const dir = translations[locale]?.dir ?? "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${cairo.variable} ${heebo.variable}`}
    >
      <head>
        <link rel="preload" href="/fonts/NeueMontreal-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NeueMontreal-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
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
        <LanguageProvider initialLocale={locale}>
          {children}
          <SiteFooter />
          <FloatingDockNav />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
