import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { translations, type Locale } from "@/lib/i18n/translations";
import { applySiteCopy, getSiteConfig } from "@/lib/site/config";
import { filterServiceCategories } from "@/lib/site/offerings";
import { homeMarketLabel, isIsraelOnlySite } from "@/lib/site/geography";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const site = getSiteConfig();
  const title =
    locale === "fr"
      ? "Contact"
      : locale === "tr"
        ? "Iletisim"
        : locale === "ar"
          ? "تواصل معنا"
          : locale === "he"
            ? "צור קשר"
            : "Contact";
  const description = applySiteCopy(
    locale === "fr"
      ? "Démarrez un projet avec {brand}. Parlez-nous d'ingénierie logicielle, de systèmes IA, de tableaux de bord, d'infrastructure de campagne, de visualisation architecturale ou d'un audit de projet."
      : locale === "tr"
        ? "{brand} ile bir projeye başlayın. Yazılım mühendisliği, AI sistemleri, panolar, kampanya altyapısı, mimari görselleştirme veya proje denetimi hakkında bize ulaşın."
        : locale === "ar"
          ? "ابدأ مشروعاً مع {brand}. تواصل معنا بشأن هندسة البرمجيات أو أنظمة الذكاء الاصطناعي أو لوحات البيانات أو بنية الحملات أو التصور المعماري أو تدقيق المشروع."
          : locale === "he"
            ? "התחילו פרויקט עם {brand}. פנו אלינו בנושא הנדסת תוכנה, מערכות AI, דשבורדים, או אודיט פרויקט."
            : "Start a project with {brand}. Reach out about software engineering, AI systems, dashboards, campaign infrastructure, architectural visualization, or a project audit.",
  );

  return {
    title,
    description,
    openGraph: {
      title: locale === "en" ? `Contact ${site.shortName} - Start a Project` : title,
      description,
      url: `${site.siteUrl}/contact`,
    },
    alternates: { canonical: `${site.siteUrl}/contact` },
  };
}

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";
const site = getSiteConfig();

function channelLabels(locale: Locale) {
  const israelOnly = isIsraelOnlySite();
  const market = homeMarketLabel(locale);
  if (locale === "fr") {
    return {
      email: "Email",
      location: "Localisation",
      locationValue: israelOnly ? market : "Global · Compatible à distance",
    };
  }
  if (locale === "tr") {
    return {
      email: "E-posta",
      location: "Konum",
      locationValue: israelOnly ? market : "Küresel · Uzaktan uyumlu",
    };
  }
  if (locale === "ar") {
    return {
      email: "البريد",
      location: "الموقع",
      locationValue: israelOnly ? market : "عالمي · مناسب للعمل عن بُعد",
    };
  }
  if (locale === "he") {
    return {
      email: "אימייל",
      location: "מיקום",
      locationValue: israelOnly ? market : "גלובלי · תומך בעבודה מרחוק",
    };
  }
  return {
    email: "Email",
    location: "Location",
    locationValue: israelOnly ? market : "Global · Remote-friendly",
  };
}

function contactCopy(locale: Locale) {
  if (locale === "fr") {
    return {
      eyebrow: "Démarrer un projet",
      title: "Construisons quelque chose qui se livre.",
      body: "Donnez-nous un peu de contexte — ce que vous construisez, les contraintes en jeu et à quoi ressemble un excellent résultat. Nous répondons généralement sous un jour ouvré.",
      touch: "Entrer en contact",
      help: "Ce que nous pouvons vous aider à construire",
      ctaTitle: "Vous êtes prêt à cadrer votre projet ?",
      ctaBody: "Envoyez-nous un e-mail directement ou contactez-nous sur LinkedIn — nous organiserons un appel de cadrage.",
      nav: "Contact",
    };
  }
  if (locale === "tr") {
    return {
      eyebrow: "Projeye başlayın",
      title: "Teslim edilen bir şey inşa edelim.",
      body: "Bize biraz bağlam verin — ne inşa ettiğiniz, hangi kısıtlarla çalıştığınız ve harika bir sonucun nasıl göründüğü. Genellikle bir iş günü içinde yanıt veriyoruz.",
      touch: "İletişime geçin",
      help: "Sizin için neleri yapabiliriz",
      ctaTitle: "Projenizi kapsamlandırmaya hazır mısınız?",
      ctaBody: "Bize doğrudan e-posta atın veya LinkedIn'den ulaşın — bir kapsamlandırma görüşmesi ayarlayalım.",
      nav: "İletişim",
    };
  }
  if (locale === "ar") {
    return {
      eyebrow: "ابدأ مشروعاً",
      title: "لننشئ شيئاً يتم تسليمه فعلاً.",
      body: "أعطنا بعض السياق — ما الذي تبنيه، ما القيود التي تعمل ضمنها، وكيف يبدو النجاح الحقيقي. نردّ عادةً خلال يوم عمل واحد.",
      touch: "تواصل معنا",
      help: "ما الذي يمكننا مساعدتك في بنائه",
      ctaTitle: "هل أنت مستعد لتحديد نطاق مشروعك؟",
      ctaBody: "أرسل لنا بريدًا إلكترونيًا مباشرة أو تواصل معنا عبر LinkedIn — سنرتب مكالمة لتحديد النطاق.",
      nav: "تواصل",
    };
  }
  if (locale === "he") {
    return {
      eyebrow: "התחילו פרויקט",
      title: "בואו נבנה משהו שמגיע לפרודקשן.",
      body: "שתפו קצת הקשר — מה אתם בונים, אילו אילוצים יש, ואיך נראה תוצאה מוצלחת. בדרך כלל אנחנו משיבים תוך יום עסקים אחד.",
      touch: "צרו קשר",
      help: "במה נוכל לעזור",
      ctaTitle: "מוכנים להגדיר את היקף הפרויקט?",
      ctaBody: "שלחו לנו מייל ישירות או פנו בלינקדאין — נתאם שיחת היקף.",
      nav: "צור קשר",
    };
  }
  return {
    eyebrow: "Start a project",
    title: "Let’s build something that ships.",
    body: "Share a bit of context — what you’re building, what constraints you’re operating under, and what a great outcome looks like. We typically reply within one business day.",
    touch: "Get in touch",
    help: "What we can help with",
    ctaTitle: "Ready to scope your project?",
    ctaBody: "Email us directly or reach out on LinkedIn — we’ll set up a scoping call.",
    nav: "Contact",
  };
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const t = translations[locale];
  const copy = contactCopy(locale);
  const labels = channelLabels(locale);
  const services = filterServiceCategories(t.services.categories).map((service) => service.title);
  const channels = [
    { label: labels.email, value: site.email, href: `mailto:${site.email}`, external: false },
    ...site.socialLinks.map((s) => ({
      label: s.label.split(" ")[0] ?? s.label,
      value: s.href.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: s.href,
      external: true,
    })),
    { label: labels.location, value: labels.locationValue, href: null as string | null, external: false },
  ];

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none" }}>
            {site.shortName}
          </Link>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {copy.nav}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem clamp(3.5rem, 6vw, 6rem)", display: "grid", gridTemplateColumns: "1fr", gap: "5rem" }}>
        <div>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", marginBottom: "1.25rem" }}>{copy.eyebrow}</p>
          <h1 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(2.2rem, 5vw, 4.2rem)", lineHeight: 1.07, letterSpacing: "-0.038em", color: "#1D1D1F", maxWidth: "780px", marginBottom: "1.75rem" }}>
            {copy.title}
          </h1>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "#86868B", maxWidth: "560px" }}>
            {copy.body}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "4rem", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "3.5rem" }}>
          <div>
            <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.75rem" }}>
              {copy.touch}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {channels.map((ch) => (
                <div key={ch.label}>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", letterSpacing: "0.04em", color: "#86868B", marginBottom: "0.3rem" }}>
                    {ch.label}
                  </p>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target={ch.external ? "_blank" : undefined}
                      rel={ch.external ? "noopener noreferrer" : undefined}
                      dir="ltr"
                      style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", letterSpacing: "-0.012em", color: "#1D1D1F", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.15)", paddingBottom: "1px", unicodeBidi: "isolate" }}
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", letterSpacing: "-0.012em", color: "#1D1D1F" }}>
                      {ch.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.75rem" }}>
              {copy.help}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
              {services.map((svc) => (
                <div key={svc} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#86868B", flexShrink: 0 }} />
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", letterSpacing: "-0.012em", color: "#1D1D1F", lineHeight: 1.3 }}>
                    {svc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#F5F5F7", borderRadius: "20px", padding: "clamp(2rem, 3vw, 3rem) clamp(1.5rem, 3vw, 3rem)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", lineHeight: 1.2, letterSpacing: "-0.025em", color: "#1D1D1F", marginBottom: "0.5rem" }}>
              {copy.ctaTitle}
            </p>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#86868B" }}>
              {copy.ctaBody}
            </p>
          </div>
          <a href={`mailto:${site.email}`} dir="ltr" style={{ fontFamily: NM, fontWeight: 500, fontSize: "13.5px", letterSpacing: "-0.01em", color: "white", background: "#1D1D1F", borderRadius: "100px", padding: "12px 28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0, unicodeBidi: "isolate" }}>
            {site.email}
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "10px", height: "10px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
