import type { Locale } from "./translations";

export type BlogCard = {
  category: string;
  categorySlug: string;
  title: string;
  thesis: string;
  readTime: string;
  tags: string[];
  href: string;
};

export type BlogIndexContent = {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAll: string;
  featured: string;
  readArticle: string;
  noArticles: string;
  categories: { label: string; slug: string }[];
  articles: BlogCard[];
};

const BLOG_INDEX_CONTENT: Record<Locale, BlogIndexContent> = {
  en: {
    eyebrow: "From the Lab",
    heading: "Engineering notes, system breakdowns, and production playbooks.",
    subheading:
      "We publish how we think through software architecture, AI workflows, dashboards, campaign systems, and architectural visualization.",
    viewAll: "View all notes",
    featured: "Featured",
    readArticle: "Read article",
    noArticles: "No articles in this category yet.",
    categories: [
      { label: "All", slug: "all" },
      { label: "Software", slug: "software" },
      { label: "AI", slug: "ai" },
      { label: "Data", slug: "data" },
      { label: "Architecture", slug: "architecture" },
      { label: "Growth", slug: "growth" },
      { label: "Production", slug: "production" },
    ],
    articles: [
      {
        category: "Product Engineering",
        categorySlug: "software",
        title: "Why most SaaS MVPs fail before they ever reach users",
        thesis:
          "The problem is never the technology. It's the missing data model, weak role logic, and undefined business workflows that collapse the product before it ever ships.",
        readTime: "12 min",
        tags: ["SaaS Architecture", "Product Scope", "Workflows"],
        href: "/blog/why-saas-mvps-fail",
      },
      {
        category: "Architecture Visualization",
        categorySlug: "architecture",
        title: "From 2D plans to cinematic renders: our visualization pipeline",
        thesis: "Plans -> model -> materials -> lighting -> camera -> QA -> delivery formats.",
        readTime: "8 min",
        tags: ["3D Rendering", "Interior Design", "Sales Visuals"],
        href: "/blog/2d-plans-to-renders-pipeline",
      },
      {
        category: "AI Systems",
        categorySlug: "ai",
        title: "Building AI copilots that actually fit business workflows",
        thesis: "Copilots should connect to workflows, data, permissions, and outputs - not just chat.",
        readTime: "10 min",
        tags: ["AI Copilots", "LLM Integration", "Automation"],
        href: "/blog/ai-copilots-business-workflows",
      },
      {
        category: "Data & Intelligence",
        categorySlug: "data",
        title: "Why dashboards fail when the data model is wrong",
        thesis: "Dashboards are not charts. They are decision systems built on top of data architecture.",
        readTime: "9 min",
        tags: ["Dashboard Design", "Data Modelling", "BI"],
        href: "/blog/dashboards-data-model",
      },
      {
        category: "Product Engineering",
        categorySlug: "software",
        title: "How we build internal operating systems for business workflows",
        thesis: "Admin dashboards, RBAC, document flows, and audit trails - built as a system, not a set of pages.",
        readTime: "11 min",
        tags: ["Internal Tools", "RBAC", "Operations"],
        href: "/blog/internal-operating-systems",
      },
      {
        category: "Strategy & Delivery",
        categorySlug: "growth",
        title: "How we design quote selectors for high-ticket service businesses",
        thesis: "Package logic, add-ons, scope control, and lead qualification - not just a pricing page.",
        readTime: "7 min",
        tags: ["Lead Qualification", "Pricing UX", "Conversion"],
        href: "/blog/quote-selectors-high-ticket",
      },
      {
        category: "Marketing & Production",
        categorySlug: "production",
        title: "Campaign infrastructure is more than running ads",
        thesis: "Tracking, landing pages, CRM, creative pipeline, reporting, and training - the full system behind a campaign.",
        readTime: "8 min",
        tags: ["Campaign Setup", "Tracking", "Creative Pipeline"],
        href: "/blog/campaign-infrastructure",
      },
      {
        category: "Architecture Visualization",
        categorySlug: "architecture",
        title: "How to turn architectural visuals into a sales system",
        thesis: "Renders + portfolio + virtual walkthrough + social crops + lead capture = a complete sales machine.",
        readTime: "9 min",
        tags: ["Architecture Sales", "3D Portfolio", "Lead Capture"],
        href: "/blog/architectural-visuals-sales-system",
      },
    ],
  },
  fr: {
    eyebrow: "Du laboratoire",
    heading: "Notes d'ingénierie, décryptages système et guides de production.",
    subheading:
      "Nous partageons notre manière d'aborder l'architecture logicielle, les workflows IA, les dashboards, les systèmes de campagne et la visualisation architecturale.",
    viewAll: "Voir toutes les notes",
    featured: "À la une",
    readArticle: "Lire l'article",
    noArticles: "Aucun article dans cette catégorie pour le moment.",
    categories: [
      { label: "Tout", slug: "all" },
      { label: "Logiciel", slug: "software" },
      { label: "IA", slug: "ai" },
      { label: "Données", slug: "data" },
      { label: "Architecture", slug: "architecture" },
      { label: "Croissance", slug: "growth" },
      { label: "Production", slug: "production" },
    ],
    articles: [
      {
        category: "Ingénierie produit",
        categorySlug: "software",
        title: "Pourquoi la plupart des MVP SaaS échouent avant d'atteindre les utilisateurs",
        thesis:
          "Le problème n'est jamais la technologie. Ce sont le modèle de données absent, la logique des rôles fragile et des workflows métier mal définis qui font échouer le produit avant même son lancement.",
        readTime: "12 min",
        tags: ["Architecture SaaS", "Périmètre produit", "Workflows"],
        href: "/blog/why-saas-mvps-fail",
      },
      {
        category: "Visualisation architecturale",
        categorySlug: "architecture",
        title: "Des plans 2D aux rendus cinématiques : notre pipeline de visualisation",
        thesis: "Plans -> modèle -> matériaux -> éclairage -> caméra -> contrôle qualité -> formats de livraison.",
        readTime: "8 min",
        tags: ["Rendu 3D", "Design intérieur", "Visuels commerciaux"],
        href: "/blog/2d-plans-to-renders-pipeline",
      },
      {
        category: "Systèmes IA",
        categorySlug: "ai",
        title: "Construire des copilotes IA qui s'intègrent vraiment aux workflows métier",
        thesis: "Un copilote doit se connecter aux workflows, aux données, aux permissions et aux sorties - pas seulement au chat.",
        readTime: "10 min",
        tags: ["Copilotes IA", "Intégration LLM", "Automatisation"],
        href: "/blog/ai-copilots-business-workflows",
      },
      {
        category: "Données & intelligence",
        categorySlug: "data",
        title: "Pourquoi les tableaux de bord échouent quand le modèle de données est faux",
        thesis: "Un dashboard n'est pas un ensemble de graphiques. C'est un système de décision bâti sur une architecture de données.",
        readTime: "9 min",
        tags: ["Conception de dashboard", "Modélisation de données", "BI"],
        href: "/blog/dashboards-data-model",
      },
      {
        category: "Ingénierie produit",
        categorySlug: "software",
        title: "Comment nous construisons des systèmes d'exploitation internes pour les workflows métiers",
        thesis: "Tableaux d'administration, RBAC, flux documentaires et pistes d'audit - pensés comme un système, pas comme une suite de pages.",
        readTime: "11 min",
        tags: ["Outils internes", "RBAC", "Opérations"],
        href: "/blog/internal-operating-systems",
      },
      {
        category: "Stratégie & delivery",
        categorySlug: "growth",
        title: "Comment nous concevons des sélecteurs d'offres pour les services à forte valeur",
        thesis: "Logique des forfaits, options additionnelles, contrôle du périmètre et qualification des leads - pas simplement une page tarifaire.",
        readTime: "7 min",
        tags: ["Qualification des leads", "UX tarifaire", "Conversion"],
        href: "/blog/quote-selectors-high-ticket",
      },
      {
        category: "Marketing & production",
        categorySlug: "production",
        title: "L'infrastructure de campagne va bien au-delà de la simple diffusion d'annonces",
        thesis: "Tracking, landing pages, CRM, pipeline créatif, reporting et formation - tout le système derrière une campagne.",
        readTime: "8 min",
        tags: ["Mise en place campagne", "Tracking", "Pipeline créatif"],
        href: "/blog/campaign-infrastructure",
      },
      {
        category: "Visualisation architecturale",
        categorySlug: "architecture",
        title: "Transformer des visuels architecturaux en système de vente",
        thesis: "Rendus + portfolio + visite virtuelle + recadrages social media + capture de leads = une machine commerciale complète.",
        readTime: "9 min",
        tags: ["Vente architecture", "Portfolio 3D", "Capture de leads"],
        href: "/blog/architectural-visuals-sales-system",
      },
    ],
  },
  tr: {
    eyebrow: "Laboratuvardan",
    heading: "Mühendislik notları, sistem çözümlemeleri ve üretim rehberleri.",
    subheading:
      "Yazılım mimarisi, yapay zeka iş akışları, gösterge tabloları, kampanya sistemleri ve mimari görselleştirme üzerine nasıl düşündüğümüzü paylaşıyoruz.",
    viewAll: "Tüm notları görüntüle",
    featured: "Öne çıkan",
    readArticle: "Makaleyi oku",
    noArticles: "Bu kategoride henüz makale yok.",
    categories: [
      { label: "Tümü", slug: "all" },
      { label: "Yazılım", slug: "software" },
      { label: "AI", slug: "ai" },
      { label: "Veri", slug: "data" },
      { label: "Mimari", slug: "architecture" },
      { label: "Büyüme", slug: "growth" },
      { label: "Üretim", slug: "production" },
    ],
    articles: [
      {
        category: "Ürün Mühendisliği",
        categorySlug: "software",
        title: "Çoğu SaaS MVP neden kullanıcılara ulaşmadan başarısız olur",
        thesis:
          "Sorun teknoloji değil. Ürünü yayına gelmeden çökerten, eksik veri modeli, zayıf rol mantığı ve tanımlanmamış iş akışlarıdır.",
        readTime: "12 dk",
        tags: ["SaaS Mimarisi", "Ürün Kapsamı", "İş Akışları"],
        href: "/blog/why-saas-mvps-fail",
      },
      {
        category: "Mimari Görselleştirme",
        categorySlug: "architecture",
        title: "2D planlardan sinematik görsellere: görselleştirme hattımız",
        thesis: "Planlar -> model -> malzeme -> ışık -> kamera -> kalite kontrol -> teslim formatları.",
        readTime: "8 dk",
        tags: ["3D Render", "İç Mekan Tasarımı", "Satış Görselleri"],
        href: "/blog/2d-plans-to-renders-pipeline",
      },
      {
        category: "AI Sistemleri",
        categorySlug: "ai",
        title: "İş akışlarına gerçekten uyan AI yardımcıları nasıl kurulur",
        thesis: "Bir yardımcı sadece sohbet etmemeli; iş akışlarına, verilere, izinlere ve çıktılara bağlanmalı.",
        readTime: "10 dk",
        tags: ["AI Yardımcıları", "LLM Entegrasyonu", "Otomasyon"],
        href: "/blog/ai-copilots-business-workflows",
      },
      {
        category: "Veri ve Zeka",
        categorySlug: "data",
        title: "Veri modeli yanlışsa panolar neden başarısız olur?",
        thesis: "Dashboard'lar grafik değil; veri mimarisi üzerine kurulu karar sistemleridir.",
        readTime: "9 dk",
        tags: ["Gösterge Tasarımı", "Veri Modellemesi", "BI"],
        href: "/blog/dashboards-data-model",
      },
      {
        category: "Ürün Mühendisliği",
        categorySlug: "software",
        title: "İş akışları için iç operasyon sistemlerini nasıl kuruyoruz",
        thesis: "Yönetim panelleri, RBAC, belge akışları ve denetim kayıtları - bir sistem olarak, sayfa yığını olarak değil.",
        readTime: "11 dk",
        tags: ["İç Araçlar", "RBAC", "Operasyonlar"],
        href: "/blog/internal-operating-systems",
      },
      {
        category: "Strateji ve Teslimat",
        categorySlug: "growth",
        title: "Yüksek bütçeli hizmet işleri için teklif seçicileri nasıl tasarlıyoruz",
        thesis: "Paket mantığı, ek modüller, kapsam kontrolü ve lead kalifikasyonu - yalnızca bir fiyat sayfası değil.",
        readTime: "7 dk",
        tags: ["Lead Kalifikasyonu", "Fiyatlandırma UX", "Dönüşüm"],
        href: "/blog/quote-selectors-high-ticket",
      },
      {
        category: "Pazarlama ve Üretim",
        categorySlug: "production",
        title: "Kampanya altyapısı reklam yayınlamaktan çok daha fazlasıdır",
        thesis: "Takip, landing page'ler, CRM, yaratıcı üretim hattı, raporlama ve eğitim - kampanyanın arkasındaki tam sistem.",
        readTime: "8 dk",
        tags: ["Kampanya Kurulumu", "Takip", "Yaratıcı Hat"],
        href: "/blog/campaign-infrastructure",
      },
      {
        category: "Mimari Görselleştirme",
        categorySlug: "architecture",
        title: "Mimari görselleri bir satış sistemine dönüştürmek",
        thesis: "Renderlar + portföy + sanal tur + sosyal medya kırpımları + lead toplama = eksiksiz bir satış makinesi.",
        readTime: "9 dk",
        tags: ["Mimari Satış", "3D Portföy", "Lead Toplama"],
        href: "/blog/architectural-visuals-sales-system",
      },
    ],
  },
  ar: {
    eyebrow: "من المختبر",
    heading: "ملاحظات هندسية، تفكيك للأنظمة، وأدلة إنتاج.",
    subheading:
      "نشارك كيف نفكر في بنية البرمجيات، وسير عمل الذكاء الاصطناعي، ولوحات البيانات، وأنظمة الحملات، والتصور المعماري.",
    viewAll: "عرض جميع الملاحظات",
    featured: "مميز",
    readArticle: "اقرأ المقال",
    noArticles: "لا توجد مقالات في هذه الفئة بعد.",
    categories: [
      { label: "الكل", slug: "all" },
      { label: "البرمجيات", slug: "software" },
      { label: "الذكاء الاصطناعي", slug: "ai" },
      { label: "البيانات", slug: "data" },
      { label: "المعماري", slug: "architecture" },
      { label: "النمو", slug: "growth" },
      { label: "الإنتاج", slug: "production" },
    ],
    articles: [
      {
        category: "هندسة المنتج",
        categorySlug: "software",
        title: "لماذا تفشل معظم نماذج SaaS الأولية قبل أن تصل إلى المستخدمين",
        thesis:
          "المشكلة ليست في التقنية أبداً. بل في غياب نموذج البيانات، وضعف منطق الأدوار، وسير العمل غير المعرّف الذي ينهار به المنتج قبل إطلاقه.",
        readTime: "12 د",
        tags: ["معمارية SaaS", "نطاق المنتج", "سير العمل"],
        href: "/blog/why-saas-mvps-fail",
      },
      {
        category: "التصور المعماري",
        categorySlug: "architecture",
        title: "من المخططات ثنائية الأبعاد إلى اللقطات السينمائية: خط الإنتاج البصري لدينا",
        thesis: "المخططات -> النموذج -> المواد -> الإضاءة -> الكاميرا -> ضمان الجودة -> صيغ التسليم.",
        readTime: "8 د",
        tags: ["إخراج ثلاثي الأبعاد", "تصميم داخلي", "مرئيات البيع"],
        href: "/blog/2d-plans-to-renders-pipeline",
      },
      {
        category: "أنظمة الذكاء الاصطناعي",
        categorySlug: "ai",
        title: "بناء مساعدين ذكاء اصطناعي يناسبون سير العمل فعلاً",
        thesis: "على المساعد أن يتصل بسير العمل والبيانات والصلاحيات والمخرجات - لا بالمحادثة فقط.",
        readTime: "10 د",
        tags: ["مساعدات AI", "تكامل LLM", "أتمتة"],
        href: "/blog/ai-copilots-business-workflows",
      },
      {
        category: "البيانات والذكاء",
        categorySlug: "data",
        title: "لماذا تفشل لوحات البيانات عندما يكون نموذج البيانات خاطئاً",
        thesis: "اللوحات ليست رسومًا بيانية. إنها أنظمة قرار مبنية فوق معمارية بيانات.",
        readTime: "9 د",
        tags: ["تصميم اللوحات", "نمذجة البيانات", "BI"],
        href: "/blog/dashboards-data-model",
      },
      {
        category: "هندسة المنتج",
        categorySlug: "software",
        title: "كيف نبني أنظمة تشغيل داخلية لسير العمل التجاري",
        thesis: "لوحات الإدارة، وRBAC، وتدفقات المستندات، ومسارات التدقيق - كنظام واحد لا كمجموعة صفحات.",
        readTime: "11 د",
        tags: ["أدوات داخلية", "RBAC", "العمليات"],
        href: "/blog/internal-operating-systems",
      },
      {
        category: "الاستراتيجية والتسليم",
        categorySlug: "growth",
        title: "كيف نصمم منتقيات العروض للأعمال ذات القيمة العالية",
        thesis: "منطق الباقات والإضافات وضبط النطاق وتأهيل العملاء المحتملين - وليس مجرد صفحة أسعار.",
        readTime: "7 د",
        tags: ["تأهيل العملاء", "UX الأسعار", "التحويل"],
        href: "/blog/quote-selectors-high-ticket",
      },
      {
        category: "التسويق والإنتاج",
        categorySlug: "production",
        title: "بنية الحملات أكثر من مجرد تشغيل الإعلانات",
        thesis: "التتبع، وصفحات الهبوط، وCRM، وخط الإنتاج الإبداعي، والتقارير، والتدريب - النظام الكامل خلف الحملة.",
        readTime: "8 د",
        tags: ["إعداد الحملات", "التتبع", "خط الإبداع"],
        href: "/blog/campaign-infrastructure",
      },
      {
        category: "التصور المعماري",
        categorySlug: "architecture",
        title: "كيف نحول المرئيات المعمارية إلى نظام مبيعات",
        thesis: "الرندرات + المحفظة + الجولة الافتراضية + قصاصات الشبكات + التقاط العملاء المحتملين = آلة بيع متكاملة.",
        readTime: "9 د",
        tags: ["مبيعات معمارية", "محفظة 3D", "التقاط العملاء"],
        href: "/blog/architectural-visuals-sales-system",
      },
    ],
  },
};

export function getBlogIndexContent(locale: Locale): BlogIndexContent {
  return BLOG_INDEX_CONTENT[locale] ?? BLOG_INDEX_CONTENT.en;
}
