import type { Locale } from "./translations";

const CAPABILITIES: Record<Locale, string[][]> = {
  en: [
    [
      "SaaS MVPs & multi-tenant platforms",
      "Admin dashboards & client portals",
      "Internal operating systems",
      "E-commerce & order management",
      "Auth, RBAC & data models",
    ],
    [
      "Corporate & portfolio websites",
      "Landing pages & lead capture",
      "E-commerce storefronts",
      "SEO-ready architecture",
      "CMS integrations & maintenance",
    ],
    [
      "AI copilots & workflow automation",
      "LLM API & document intelligence",
      "Custom BI dashboards",
      "ETL pipelines & data infrastructure",
      "Decision-support systems",
    ],
    [
      "Meta / Google / TikTok setup",
      "Pixel & conversion tracking",
      "Creative production pipelines",
      "CRM & lead flow setup",
      "Monthly reporting structures",
    ],
    [
      "Interior & exterior renders",
      "3D modeling from 2D plans",
      "Virtual walkthroughs",
      "Three.js & WebGL web showcases",
      "Social media render packs",
    ],
    [
      "Technical scoping & MVP roadmap",
      "System architecture & data models",
      "Feature prioritisation",
      "Hosting, deployment & monitoring",
      "Ongoing maintenance & iteration",
    ],
  ],
  fr: [
    [
      "MVP SaaS et plateformes multi-tenant",
      "Tableaux de bord admin et portails clients",
      "Systèmes d'exploitation internes",
      "E-commerce et gestion des commandes",
      "Auth, RBAC et modèles de données",
    ],
    [
      "Sites corporate et portfolios",
      "Landing pages et capture de leads",
      "Boutiques e-commerce",
      "Architecture optimisée SEO",
      "Intégrations CMS et maintenance",
    ],
    [
      "Copilotes IA et automatisation des workflows",
      "API LLM et intelligence documentaire",
      "Tableaux BI sur mesure",
      "Pipelines ETL et infrastructure data",
      "Systèmes d'aide à la décision",
    ],
    [
      "Configuration Meta / Google / TikTok",
      "Tracking pixel et conversion",
      "Pipelines de production créative",
      "CRM et flux de leads",
      "Structures de reporting mensuel",
    ],
    [
      "Rendus intérieurs et extérieurs",
      "Modélisation 3D à partir de plans 2D",
      "Visites virtuelles",
      "Vitrines web Three.js et WebGL",
      "Packs de rendus pour les réseaux sociaux",
    ],
    [
      "Cadrage technique et roadmap MVP",
      "Architecture système et modèles de données",
      "Priorisation des fonctionnalités",
      "Hébergement, déploiement et supervision",
      "Maintenance et itérations continues",
    ],
  ],
  tr: [
    [
      "SaaS MVP'leri ve çok kiracılı platformlar",
      "Yönetim panoları ve müşteri portalları",
      "Dahili operasyon sistemleri",
      "E-ticaret ve sipariş yönetimi",
      "Kimlik doğrulama, RBAC ve veri modelleri",
    ],
    [
      "Kurumsal ve portfolyo web siteleri",
      "Landing page'ler ve lead toplama",
      "E-ticaret vitrinleri",
      "SEO'ya hazır mimari",
      "CMS entegrasyonları ve bakım",
    ],
    [
      "AI yardımcıları ve iş akışı otomasyonu",
      "LLM API ve belge zekası",
      "Özel BI panoları",
      "ETL hatları ve veri altyapısı",
      "Karar destek sistemleri",
    ],
    [
      "Meta / Google / TikTok kurulumu",
      "Pixel ve dönüşüm takibi",
      "Yaratıcı üretim hatları",
      "CRM ve lead akışı kurulumu",
      "Aylık raporlama yapıları",
    ],
    [
      "İç ve dış mekan renderları",
      "2D planlardan 3D modelleme",
      "Sanal turlar",
      "Three.js ve WebGL vitrinleri",
      "Sosyal medya render paketleri",
    ],
    [
      "Teknik kapsam ve MVP yol haritası",
      "Sistem mimarisi ve veri modelleri",
      "Özellik önceliklendirme",
      "Barındırma, dağıtım ve izleme",
      "Sürekli bakım ve yineleme",
    ],
  ],
  ar: [
    [
      "نماذج SaaS الأولية ومنصات متعددة المستأجرين",
      "لوحات الإدارة وبوابات العملاء",
      "أنظمة التشغيل الداخلية",
      "التجارة الإلكترونية وإدارة الطلبات",
      "المصادقة وRBAC ونماذج البيانات",
    ],
    [
      "مواقع الشركات والمحافظ",
      "صفحات الهبوط والتقاط العملاء المحتملين",
      "واجهات التجارة الإلكترونية",
      "هيكلية جاهزة للـ SEO",
      "تكاملات CMS والصيانة",
    ],
    [
      "مساعدون بالذكاء الاصطناعي وأتمتة سير العمل",
      "واجهات LLM وذكاء المستندات",
      "لوحات BI مخصصة",
      "خطوط ETL والبنية التحتية للبيانات",
      "أنظمة دعم القرار",
    ],
    [
      "إعداد Meta / Google / TikTok",
      "تتبع Pixel والتحويلات",
      "خطوط الإنتاج الإبداعي",
      "إعداد CRM وتدفق العملاء المحتملين",
      "هياكل التقارير الشهرية",
    ],
    [
      "رندرات داخلية وخارجية",
      "نمذجة ثلاثية الأبعاد من مخططات 2D",
      "جولات افتراضية",
      "واجهات عرض Three.js وWebGL",
      "حِزم رندرات لوسائل التواصل",
    ],
    [
      "تحديد النطاق الفني وخارطة MVP",
      "معمارية النظام ونماذج البيانات",
      "ترتيب الأولويات للميزات",
      "الاستضافة والنشر والمراقبة",
      "الصيانة والتحسين المستمر",
    ],
  ],
};

const CAPABILITIES_FULL: Record<Locale, string[][]> = {
  en: [
    ["SaaS MVPs", "Multi-tenant platforms", "Browser-based production software", "Admin dashboards", "Client portals", "Internal operating systems", "Workflow automation tools", "Authentication & RBAC systems", "E-commerce storefronts", "Product catalog architecture", "Cart, checkout & payment flows", "Customer accounts & order management", "Product prototypes", "Maintenance systems"],
    ["Landing pages", "Corporate websites", "Portfolio websites", "Healthcare websites", "Architecture & studio websites", "E-commerce storefronts", "SEO-ready pages", "CMS integrations", "Conversion landing pages", "Analytics setup", "Maintenance & content updates", "Performance optimisation"],
    ["AI copilots & assistants", "LLM API integrations", "Workflow automation pipelines", "Document intelligence", "Video & media AI tools", "Research assistants", "Decision-support dashboards", "Prompt engineering & fine-tuning", "Custom BI dashboards", "ETL & data pipelines", "Executive consoles", "Operational reporting tools", "Geospatial dashboards", "Market & risk intelligence UIs", "Multi-source data aggregation", "Role-based reporting", "Export & report generation"],
    ["Meta / Google / TikTok setup", "Tracking & pixel implementation", "CRM and lead flow setup", "Conversion landing pages", "Campaign dashboards", "UTM structure", "Campaign planning & strategy", "Creative production pipeline", "Post-production workflows", "Brand content calendars", "Social media asset packs", "QA pipeline", "Delivery formats (ads/social/web)", "Monthly performance reporting", "Client training & handoff"],
    ["Interior & exterior renders", "3D modeling from 2D plans", "Virtual walkthroughs", "Three.js web showcases", "WebGL scenes & configurators", "Real estate sales visuals", "Social media render packs", "Portfolio & project pages", "Kitchen & space visualization", "Before/after presentation", "Embedded render galleries", "Interactive 3D product viewers"],
    ["Project audit", "Product requirements", "Feature prioritisation", "MVP scope definition", "Technical architecture", "User flows", "Data model planning", "Integration planning", "Delivery roadmap", "Cost & timeline estimation", "Hosting setup", "Deployment monitoring", "Bug fixes & security updates", "Content updates", "Analytics reporting", "Monthly improvements", "Backup & recovery", "Performance optimisation", "QA process", "Training & handoff"],
  ],
  fr: [
    ["MVP SaaS", "Plateformes multi-tenant", "Logiciel de production dans le navigateur", "Tableaux de bord admin", "Portails clients", "Systèmes d'exploitation internes", "Outils d'automatisation", "Systèmes d'authentification et RBAC", "Boutiques e-commerce", "Architecture de catalogue produit", "Parcours panier, commande et paiement", "Comptes clients et gestion des commandes", "Prototypes produit", "Systèmes de maintenance"],
    ["Landing pages", "Sites corporate", "Sites portfolios", "Sites santé", "Sites d'architecture et de studio", "Boutiques e-commerce", "Pages optimisées SEO", "Intégrations CMS", "Pages de conversion", "Configuration analytics", "Maintenance et mises à jour de contenu", "Optimisation des performances"],
    ["Copilotes et assistants IA", "Intégrations API LLM", "Pipelines d'automatisation", "Intelligence documentaire", "Outils IA vidéo et média", "Assistants de recherche", "Dashboards d'aide à la décision", "Prompt engineering et fine-tuning", "Tableaux BI sur mesure", "ETL et pipelines data", "Consoles exécutives", "Outils de reporting opérationnel", "Dashboards géospatiaux", "Interfaces de veille marché et risque", "Agrégation multi-sources", "Reporting par rôle", "Export et génération de rapports"],
    ["Configuration Meta / Google / TikTok", "Implémentation tracking et pixels", "CRM et flux de leads", "Landing pages de conversion", "Tableaux de bord de campagne", "Structure UTM", "Planification et stratégie de campagne", "Pipeline de production créative", "Workflows de post-production", "Calendriers de contenu de marque", "Packs d'assets pour réseaux sociaux", "Pipeline QA", "Formats de diffusion (ads/social/web)", "Reporting mensuel", "Formation client et passation"],
    ["Rendus intérieurs et extérieurs", "Modélisation 3D à partir de plans 2D", "Visites virtuelles", "Vitrines web Three.js", "Scènes et configurateurs WebGL", "Visuels de vente immobilière", "Packs de rendus pour réseaux sociaux", "Pages portfolio et projets", "Visualisation cuisine et espaces", "Présentations avant/après", "Galeries de rendus intégrées", "Vues produits 3D interactives"],
    ["Audit projet", "Cahier des charges produit", "Priorisation des fonctionnalités", "Définition du périmètre MVP", "Architecture technique", "Parcours utilisateurs", "Planification du modèle de données", "Plan d'intégration", "Roadmap de livraison", "Estimation coût et délai", "Configuration d'hébergement", "Supervision du déploiement", "Correctifs et mises à jour sécurité", "Mises à jour de contenu", "Reporting analytics", "Améliorations mensuelles", "Sauvegarde et reprise", "Optimisation des performances", "Process QA", "Formation et passation"],
  ],
  tr: [
    ["SaaS MVP'leri", "Çok kiracılı platformlar", "Tarayıcı tabanlı üretim yazılımı", "Yönetim panoları", "Müşteri portalları", "Dahili operasyon sistemleri", "İş akışı otomasyon araçları", "Kimlik doğrulama ve RBAC sistemleri", "E-ticaret vitrinleri", "Ürün katalog mimarisi", "Sepet, ödeme ve checkout akışları", "Müşteri hesapları ve sipariş yönetimi", "Ürün prototipleri", "Bakım sistemleri"],
    ["Landing page'ler", "Kurumsal web siteleri", "Portfolyo web siteleri", "Sağlık siteleri", "Mimari ve stüdyo siteleri", "E-ticaret vitrinleri", "SEO'ya hazır sayfalar", "CMS entegrasyonları", "Dönüşüm landing page'leri", "Analitik kurulumu", "Bakım ve içerik güncellemeleri", "Performans optimizasyonu"],
    ["AI yardımcıları", "LLM API entegrasyonları", "Otomasyon hatları", "Belge zekası", "Video ve medya AI araçları", "Araştırma yardımcıları", "Karar destek panoları", "Prompt engineering ve fine-tuning", "Özel BI panoları", "ETL ve veri hatları", "Yönetici konsolları", "Operasyonel raporlama araçları", "Coğrafi panolar", "Pazar ve risk zekası arayüzleri", "Çok kaynaklı veri toplama", "Role göre raporlama", "Dışa aktarma ve rapor üretimi"],
    ["Meta / Google / TikTok kurulumu", "Tracking ve pixel uygulaması", "CRM ve lead akışı kurulumu", "Dönüşüm landing page'leri", "Kampanya panoları", "UTM yapısı", "Kampanya planlama ve strateji", "Yaratıcı üretim hattı", "Post-prodüksiyon iş akışları", "Marka içerik takvimleri", "Sosyal medya asset paketleri", "QA hattı", "Teslim formatları (ads/social/web)", "Aylık performans raporlaması", "Müşteri eğitimi ve devir"],
    ["İç ve dış mekan renderları", "2D planlardan 3D modelleme", "Sanal turlar", "Three.js web vitrinleri", "WebGL sahneleri ve configurator'lar", "Emlak satış görselleri", "Sosyal medya render paketleri", "Portfolyo ve proje sayfaları", "Mutfak ve alan görselleştirme", "Önce/sonra sunumu", "Gömülü render galerileri", "Etkileşimli 3D ürün görüntüleyiciler"],
    ["Proje denetimi", "Ürün gereksinimleri", "Özellik önceliklendirme", "MVP kapsam tanımı", "Teknik mimari", "Kullanıcı akışları", "Veri modeli planlama", "Entegrasyon planlama", "Teslim yol haritası", "Maliyet ve zaman tahmini", "Barındırma kurulumu", "Dağıtım izleme", "Hata düzeltmeleri ve güvenlik güncellemeleri", "İçerik güncellemeleri", "Analitik raporlama", "Aylık iyileştirmeler", "Yedekleme ve kurtarma", "Performans optimizasyonu", "QA süreci", "Eğitim ve devir"],
  ],
  ar: [
    ["نماذج SaaS الأولية", "منصات متعددة المستأجرين", "برمجيات إنتاج داخل المتصفح", "لوحات الإدارة", "بوابات العملاء", "أنظمة التشغيل الداخلية", "أدوات أتمتة سير العمل", "أنظمة المصادقة وRBAC", "واجهات التجارة الإلكترونية", "معمارية كتالوج المنتجات", "تدفقات السلة والدفع", "حسابات العملاء وإدارة الطلبات", "نماذج أولية للمنتجات", "أنظمة الصيانة"],
    ["صفحات الهبوط", "مواقع الشركات", "مواقع المحافظ", "مواقع الرعاية الصحية", "مواقع العمارة والاستوديو", "واجهات التجارة الإلكترونية", "صفحات جاهزة للـ SEO", "تكاملات CMS", "صفحات تحويل", "إعداد التحليلات", "الصيانة وتحديث المحتوى", "تحسين الأداء"],
    ["مساعدون بالذكاء الاصطناعي", "تكاملات LLM API", "خطوط الأتمتة", "ذكاء المستندات", "أدوات AI للفيديو والوسائط", "مساعدون للبحث", "لوحات دعم القرار", "هندسة prompts والضبط الدقيق", "لوحات BI مخصصة", "خطوط ETL والبيانات", "وحدات تنفيذية", "أدوات التقارير التشغيلية", "لوحات جغرافية", "واجهات ذكاء السوق والمخاطر", "تجميع بيانات متعددة المصادر", "تقارير حسب الدور", "التصدير وإنشاء التقارير"],
    ["إعداد Meta / Google / TikTok", "تنفيذ تتبع وPixel", "إعداد CRM وتدفق العملاء", "صفحات هبوط للتحويل", "لوحات حملات", "هيكل UTM", "تخطيط واستراتيجية الحملات", "خط الإنتاج الإبداعي", "سير عمل ما بعد الإنتاج", "جداول محتوى العلامة", "حِزم أصول لوسائل التواصل", "خط QA", "تنسيقات التسليم (ads/social/web)", "تقارير الأداء الشهرية", "تدريب العميل والتسليم"],
    ["رندرات داخلية وخارجية", "نمذجة ثلاثية الأبعاد من مخططات 2D", "جولات افتراضية", "واجهات Three.js على الويب", "مشاهد WebGL وconfigurators", "مرئيات مبيعات عقارية", "حِزم رندرات لوسائل التواصل", "صفحات المحافظ والمشاريع", "تصور المطابخ والمساحات", "عرض قبل/بعد", "معارض رندرات مدمجة", "عارضات منتجات 3D تفاعلية"],
    ["تدقيق المشروع", "متطلبات المنتج", "ترتيب الأولويات", "تعريف نطاق MVP", "المعمارية التقنية", "تدفقات المستخدم", "تخطيط نموذج البيانات", "تخطيط التكامل", "خارطة التسليم", "تقدير التكلفة والوقت", "إعداد الاستضافة", "مراقبة النشر", "إصلاح الأخطاء وتحديثات الأمان", "تحديثات المحتوى", "تقارير التحليلات", "تحسينات شهرية", "النسخ الاحتياطي والاستعادة", "تحسين الأداء", "عملية QA", "التدريب والتسليم"],
  ],
};

export function getServiceCapabilities(locale: Locale): string[][] {
  return CAPABILITIES[locale] ?? CAPABILITIES.en;
}

export function getServiceCapabilitiesFull(locale: Locale): string[][] {
  return CAPABILITIES_FULL[locale] ?? CAPABILITIES_FULL.en;
}

