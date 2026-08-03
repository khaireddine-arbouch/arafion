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
import {
  buildOrganizationJsonLd,
  buildRootMetadata,
  buildWebsiteJsonLd,
} from "@/lib/site/seo";
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

export const metadata: Metadata = buildRootMetadata(site);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const dir = translations[locale]?.dir ?? "ltr";
  const organizationJsonLd = buildOrganizationJsonLd(site, locale);
  const websiteJsonLd = buildWebsiteJsonLd(site, locale);

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
