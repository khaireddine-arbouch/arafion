import { type Locale } from "./translations";
import type { LocaleRecord } from "./locale-record";
import { scrubNonIsraelPlaces } from "@/lib/site/geography";

const CLIENT_BRIEFS: LocaleRecord<Record<string, string>> = {
  en: {
    "nileroute-os":
      "A full internal operating system for a freight logistics business - not a simple dashboard, but a real multi-tenant platform that could handle customers, shipments, containers, documents, and an AI assistant in a single authenticated workspace.",
    "evo2-variant-intelligence":
      "A research-grade interface for variant pathogenicity prediction, connecting the Evo2 foundation model to a usable analysis console with 3D protein visualization, clinical annotation, and session history.",
    "signalsframe":
      "A browser-based video and audio editing platform that runs entirely without plugins - full timeline engine, export pipeline, and social presets, all in the browser.",
    "intelligence-console":
      "An enterprise intelligence demo platform showing supply chain risk, ESG scoring, scenario modeling, and executive dashboards - designed to communicate product capability to procurement and risk buyers.",
    "atlas-intelligence":
      "A reusable intelligence UI framework with four operational modes (Scan, Investigate, Decide, Execute) that could be adapted for different enterprise intelligence use cases without rebuilding from scratch.",
    "atlas-geoint":
      "A geospatial intelligence workstation prototype for visualizing incidents, entities, and corridors on an interactive map - with confidence scoring, evidence linking, and decision tagging.",
    draftly:
      "A collaborative design project platform where teams can manage design projects, mood boards, and assets in authenticated workspaces - built as a product prototype.",
    geoflex360:
      "A multilingual marketing website in French for a Moroccan topographic engineering firm - with service presentation, project portfolio, SEO infrastructure, and a working contact form backend.",
    "chiro-site":
      "A clean, trustworthy healthcare website for a chiropractic practice with service presentation, team profiles, and a patient contact/booking flow.",
  },
  fr: {
    "nileroute-os":
      "Un systeme d'exploitation interne complet pour une entreprise de logistique fret - pas un simple tableau de bord, mais une vraie plateforme multi-tenant pour gerer clients, expéditions, conteneurs, documents et assistant IA dans un seul espace authentifié.",
    "evo2-variant-intelligence":
      "Une interface de niveau recherche pour la prediction de pathogenicite des variants, reliant le modele fondation Evo2 a une console d'analyse utile avec visualisation 3D des proteines, annotation clinique et historique de session.",
    "signalsframe":
      "Une plateforme web de montage video et audio qui fonctionne entierement dans le navigateur, sans plugins - moteur de timeline, pipeline d'export et presets sociaux.",
    "intelligence-console":
      "Une plateforme demo d'intelligence d'entreprise montrant le risque supply chain, le scoring ESG, la simulation de scenarios et des dashboards executifs - pensee pour expliquer la capacite du produit aux acheteurs procurement et risk.",
    "atlas-intelligence":
      "Un framework UI d'intelligence reutilisable avec quatre modes operationnels (Scanner, Investiguer, Decider, Executer) adaptables a differents cas d'usage sans repartir de zero.",
    "atlas-geoint":
      "Un prototype de station de travail geospatiale pour visualiser incidents, entites et corridors sur une carte interactive - avec score de confiance, liens de preuves et etiquetage decisionnel.",
    draftly:
      "Une plateforme collaborative de projets design ou les equipes gerent projets, moodboards et assets dans des espaces authentifies - construite comme prototype produit.",
    geoflex360:
      "Un site marketing multilingue en francais pour un bureau d'ingenierie topographique marocain - avec presentation des services, portfolio, base SEO et backend de formulaire de contact.",
    "chiro-site":
      "Un site sante propre et rassurant pour un cabinet de chiropraxie, avec presentation des services, profils d'equipe et flux de contact / prise de rendez-vous.",
  },
  tr: {
    "nileroute-os":
      "Bir kargo lojistik işi için tam kapsamlı bir iç işletim sistemi - basit bir pano değil, müşterileri, sevkiyatları, konteynerleri, belgeleri ve AI asistanını tek bir doğrulanmış çalışma alanında yöneten gerçek bir çok kiracılı platform.",
    "evo2-variant-intelligence":
      "Varyant patojenite tahmini için araştırma seviyesinde bir arayüz; Evo2 temel modelini 3D protein görselleştirme, klinik açıklama ve oturum geçmişi olan kullanışlı bir analiz konsoluna bağlıyor.",
    "signalsframe":
      "Tamamen tarayıcı içinde çalışan, eklenti gerektirmeyen video ve ses düzenleme platformu - eksiksiz timeline motoru, export hattı ve sosyal medya preset'leri.",
    "intelligence-console":
      "Tedarik zinciri riski, ESG skoru, senaryo modelleme ve yönetici panoları gösteren kurumsal zeka demo platformu - ürün kabiliyetini procurement ve risk alıcılarına anlatmak için tasarlandı.",
    "atlas-intelligence":
      "Dört operasyon modu olan (Scan, Investigate, Decide, Execute) yeniden kullanılabilir bir zeka UI framework'ü; farklı kurumsal kullanım senaryolarına baştan inşa etmeden uyarlanabilir.",
    "atlas-geoint":
      "Etkileşimli bir harita üzerinde olayları, varlıkları ve koridorları görselleştiren jeo-uzamsal bir çalışma istasyonu prototipi - güven skoru, kanıt bağlantısı ve karar etiketleriyle.",
    draftly:
      "Ekiplerin tasarım projelerini, moodboard'ları ve varlıkları doğrulanmış çalışma alanlarında yönetebildiği işbirlikçi bir tasarım proje platformu - ürün prototipi olarak kuruldu.",
    geoflex360:
      "Faslı bir topoğrafi mühendislik firması için Fransızca çok dilli bir pazarlama sitesi - hizmet sunumu, proje portföyü, SEO altyapısı ve çalışan iletişim formu backend'iyle.",
    "chiro-site":
      "Bir kiropraktik pratiği için hizmet sunumu, ekip profilleri ve hasta iletişim / randevu akışı olan temiz ve güven veren bir sağlık sitesi.",
  },
  ar: {
    "nileroute-os":
      "نظام تشغيل داخلي متكامل لشركة لوجستيات شحن - ليس مجرد لوحة بسيطة، بل منصة متعددة المستأجرين تدير العملاء والشحنات والحاويات والمستندات والمساعد الذكي داخل مساحة عمل واحدة موثقة.",
    "evo2-variant-intelligence":
      "واجهة بمستوى بحثي لتوقع قابلية إمراضية المتغيرات، تربط نموذج Evo2 الأساسي بلوحة تحليل قابلة للاستخدام مع تصور ثلاثي الأبعاد للبروتينات وتعليقات سريرية وسجل جلسات.",
    "signalsframe":
      "منصة تحرير فيديو وصوت تعمل بالكامل داخل المتصفح من دون إضافات - محرك timeline كامل وخط تصدير وإعدادات جاهزة للسوشيال.",
    "intelligence-console":
      "منصة عرض تجريبية لذكاء الأعمال تُظهر مخاطر سلسلة الإمداد وتقييم ESG ونمذجة السيناريوهات ولوحات الإدارة التنفيذية - صُممت لتوضيح قدرة المنتج لمشتريي المشتريات والمخاطر.",
    "atlas-intelligence":
      "إطار واجهات ذكاء قابل لإعادة الاستخدام بأربعة أوضاع تشغيل (Scan, Investigate, Decide, Execute) ويمكن تكييفه مع حالات استخدام مؤسسية مختلفة من دون إعادة البناء من الصفر.",
    "atlas-geoint":
      "نموذج أولي لمحطة عمل جغرافية مكانية يتيح تصور الحوادث والكيانات والممرات على خريطة تفاعلية - مع درجة ثقة وربط للأدلة ووسوم للقرارات.",
    draftly:
      "منصة تعاونية لمشاريع التصميم حيث تدير الفرق المشاريع ولوحات الإلهام والأصول داخل مساحات موثقة - بنيت كنموذج منتج.",
    geoflex360:
      "موقع تسويقي متعدد اللغات بالفرنسية لشركة هندسة طبوغرافية مغربية - مع عرض الخدمات ومحفظة المشاريع وبنية SEO ونظام خلفي لنموذج التواصل.",
    "chiro-site":
      "موقع صحي نظيف وموثوق لعيادة تقويم العمود الفقري مع عرض الخدمات وملفات الفريق ومسار تواصل / حجز للمريض.",
  },
  he: {
    "nileroute-os":
      "מערכת תפעול פנימית מלאה לעסק לוגיסטיקת מטענים — לא דשבורד פשוט, אלא פלטפורמה רב־דיירית אמיתית לניהול לקוחות, משלוחים, מכולות, מסמכים ועוזר AI במרחב עבודה מאומת אחד.",
    "evo2-variant-intelligence":
      "ממשק ברמה מחקרית לחיזוי פתוגניות של וריאנטים, שמחבר את מודל הבסיס Evo2 לקונסולת ניתוח שמישה עם ויזואליזציית חלבון תלת־ממדית, הערות קליניות והיסטוריית סשנים.",
    "signalsframe":
      "פלטפורמת עריכת וידאו ואודיו בדפדפן שעובדת לגמרי בלי תוספים — מנוע טיימליין מלא, צינור ייצוא ופריסטים לרשתות, הכול בדפדפן.",
    "intelligence-console":
      "פלטפורמת דמו למודיעין ארגוני שמציגה סיכון שרשרת אספקה, ניקוד ESG, מידול תרחישים ודשבורדים למנהלים — מיועדת להעביר יכולת מוצר לקונים בתחומי רכש וסיכון.",
    "atlas-intelligence":
      "מסגרת UI למודיעין לשימוש חוזר עם ארבעה מצבי תפעול (Scan, Investigate, Decide, Execute) שניתן להתאים לשימושי מודיעין ארגוניים שונים בלי לבנות מאפס.",
    "atlas-geoint":
      "אבטיפוס של תחנת עבודה למודיעין גיאו־מרחבי להצגת אירועים, ישויות ומסדרונות על מפה אינטראקטיבית — עם ניקוד ביטחון, קישור ראיות ותיוג החלטות.",
    draftly:
      "פלטפורמת עיצוב שיתופית שבה צוותים מנהלים פרויקטי עיצוב, לוחות השראה ונכסים במרחבי עבודה מאומתים — נבנתה כאבטיפוס מוצר.",
    geoflex360:
      "אתר שיווקי רב־לשוני בצרפתית לחברת הנדסה טופוגרפית ממרוקו — עם הצגת שירותים, תיק פרויקטים, תשתית SEO וטופס יצירת קשר פעיל.",
    "chiro-site":
      "אתר בריאות נקי ואמין לקליניקת כירופרקטיקה עם הצגת שירותים, פרופילי צוות וזרימת יצירת קשר / הזמנת תור.",
    "cabinet-chiropratique-chaima-hosni":
      "אתר בריאות נקי ואמין לקליניקת כירופרקטיקה עם הצגת שירותים, פרופילי צוות וזרימת יצירת קשר / הזמנת תור.",
  },
};

const MORE_LABEL: LocaleRecord<string> = {
  en: "more",
  fr: "de plus",
  tr: "daha",
  ar: "أخرى",
  he: "עוד",
};

export function getClientBrief(locale: Locale, slug: string) {
  const localized = CLIENT_BRIEFS[locale]?.[slug];
  if (localized) return scrubNonIsraelPlaces(localized, locale);
  // Avoid English brief flash for translated locales — callers fall through
  // to localized short descriptions instead.
  if (locale === "en") {
    return scrubNonIsraelPlaces(CLIENT_BRIEFS.en[slug] ?? "", locale);
  }
  return "";
}

export function getMoreLabel(locale: Locale) {
  return MORE_LABEL[locale] ?? MORE_LABEL.en;
}
