import type { Locale } from "./translations";

const SERVICE_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    websites: "Websites",
    "digital-presence": "Digital presence",
    "saas-software": "SaaS & software",
    "ai-systems": "AI systems",
    "dashboards-intelligence": "Dashboards & intelligence",
    "marketing-production": "Marketing & production",
    "architecture-visualization": "Architecture visualization",
    "3d-rendering": "3D rendering",
    ecommerce: "E-commerce",
    "internal-tools": "Internal tools",
  },
  fr: {
    websites: "Sites web",
    "digital-presence": "Présence digitale",
    "saas-software": "SaaS et logiciel",
    "ai-systems": "Systèmes IA",
    "dashboards-intelligence": "Tableaux de bord et intelligence",
    "marketing-production": "Marketing et production",
    "architecture-visualization": "Visualisation architecturale",
    "3d-rendering": "Rendu 3D",
    ecommerce: "E-commerce",
    "internal-tools": "Outils internes",
  },
  tr: {
    websites: "Web siteleri",
    "digital-presence": "Dijital varlık",
    "saas-software": "SaaS ve yazılım",
    "ai-systems": "AI sistemleri",
    "dashboards-intelligence": "Gösterge tabloları ve zeka",
    "marketing-production": "Pazarlama ve üretim",
    "architecture-visualization": "Mimari görselleştirme",
    "3d-rendering": "3D render",
    ecommerce: "E-ticaret",
    "internal-tools": "Dahili araçlar",
  },
  ar: {
    websites: "المواقع",
    "digital-presence": "الحضور الرقمي",
    "saas-software": "SaaS والبرمجيات",
    "ai-systems": "أنظمة الذكاء الاصطناعي",
    "dashboards-intelligence": "لوحات التحكم والذكاء",
    "marketing-production": "التسويق والإنتاج",
    "architecture-visualization": "التصور المعماري",
    "3d-rendering": "إخراج ثلاثي الأبعاد",
    ecommerce: "التجارة الإلكترونية",
    "internal-tools": "الأدوات الداخلية",
  },
};

const STATUS_LABELS: Record<Locale, Record<string, string>> = {
  en: { live: "Live", delivered: "Delivered", active: "Active", "in-development": "In development", prototype: "Prototype", "planned-or-in-progress": "In development" },
  fr: { live: "En ligne", delivered: "Livré", active: "Actif", "in-development": "En développement", prototype: "Prototype", "planned-or-in-progress": "En développement" },
  tr: { live: "Yayında", delivered: "Teslim edildi", active: "Aktif", "in-development": "Geliştiriliyor", prototype: "Prototip", "planned-or-in-progress": "Geliştiriliyor" },
  ar: { live: "مباشر", delivered: "مسلّم", active: "نشط", "in-development": "قيد التطوير", prototype: "نموذج أولي", "planned-or-in-progress": "قيد التطوير" },
};

const REGION_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    Americas: "Americas",
    Europe: "Europe",
    "MENA & Africa": "MENA & Africa",
    "Asia Pacific": "Asia Pacific",
    International: "International",
    "Morocco / International": "Morocco / International",
  },
  fr: {
    Americas: "Amériques",
    Europe: "Europe",
    "MENA & Africa": "MENA et Afrique",
    "Asia Pacific": "Asie-Pacifique",
    International: "International",
    "Morocco / International": "Maroc / International",
  },
  tr: {
    Americas: "Amerika kıtası",
    Europe: "Avrupa",
    "MENA & Africa": "MENA ve Afrika",
    "Asia Pacific": "Asya Pasifik",
    International: "Uluslararası",
    "Morocco / International": "Fas / Uluslararası",
  },
  ar: {
    Americas: "الأمريكيتان",
    Europe: "أوروبا",
    "MENA & Africa": "الشرق الأوسط وشمال أفريقيا وأفريقيا",
    "Asia Pacific": "آسيا والمحيط الهادئ",
    International: "عالمي",
    "Morocco / International": "المغرب / عالمي",
  },
};

export function serviceLabel(locale: Locale, category: string): string {
  return SERVICE_LABELS[locale][category] ?? SERVICE_LABELS.en[category] ?? category;
}

export function statusLabel(locale: Locale, status: string): string {
  return STATUS_LABELS[locale][status] ?? STATUS_LABELS.en[status] ?? status;
}

export function regionLabel(locale: Locale, label: string): string {
  return REGION_LABELS[locale][label] ?? REGION_LABELS.en[label] ?? label;
}

