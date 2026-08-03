import type { Locale } from "./translations";
import type { LocaleRecord } from "./locale-record";
import { scrubNonIsraelPlaces } from "@/lib/site/geography";

/**
 * Card / listing short descriptions (matches projects.json tone).
 * Longer narrative briefs live in work-content.ts (`getClientBrief`).
 */
const SHORT_DESCRIPTIONS: LocaleRecord<Record<string, string>> = {
  en: {},
  he: {
    "nileroute-os":
      "דשבורד תפעול לוגיסטיקת מטענים רב־דיירי לניהול לקוחות, בקשות משלוח, משלוחים, מכולות, אירועי מעקב, מסמכים ושאילתות תפעול בסיוע AI.",
    "evo2-variant-intelligence":
      "פלטפורמת מחקר גנומי מלאה לחיזוי פתוגניות של וריאנטים, עם אינפרנס Evo2 בבקאנד וקונסולת ניתוח ב־Next.js.",
    signalsframe:
      "אפליקציית עריכת וידאו, אודיו ותמונה בדפדפן — עם עריכת טיימליין, כלי ייצוא, עיבוד מדיה ויכולות עריכה מוקדמות בסיוע AI.",
    "intelligence-console":
      "דשבורד מודיעין לשרשרת אספקה, ESG וביצועי חברות — מבוסס נתוני דמו דטרמיניסטיים ומידול תרחישים.",
    "atlas-intelligence":
      "מעטפת מודיעין ב־Next.js עם מצבי Scan, Investigate, Decide ו־Execute, נתוני דמו ומערכת UI בסגנון טרמינל.",
    "atlas-geoint":
      "אבטיפוס תחנת עבודה למודיעין גיאו־מרחבי להצגת אירועים, ישויות, מסדרונות, ציוני ביטחון ומקור על מפה אינטראקטיבית.",
    draftly:
      "פלטפורמת עיצוב שיתופית לניהול פרויקטי עיצוב, לוחות השראה, נכסים ומרחבי עבודה מאומתים.",
    geoflex360:
      "אתר שיווקי רב־לשוני בצרפתית לחברת הנדסה טופוגרפית — עם הצגת שירותים, תיק עבודות, SEO ובקאנד לטופס יצירת קשר.",
    "cabinet-chiropratique-chaima-hosni":
      "אתר מקצועי לקליניקת כירופרקטיקה עם הסברת שירותים, פרופיל רופא, שאלות נפוצות, זרימת יצירת קשר וסימון SEO לבריאות.",
    "chiro-site":
      "אתר מקצועי לקליניקת כירופרקטיקה עם הסברת שירותים, פרופיל רופא, שאלות נפוצות, זרימת יצירת קשר וסימון SEO לבריאות.",
    "chafai-architects":
      "אתר ציבורי פרימיום למשרד אדריכלות — הצגת המשרד, תיק עבודות, פרויקטים, פרסומים ופרטי יצירת קשר.",
    "almajliss-heritage":
      "חוויית מסחר אלקטרוני יוקרתית עם קטגוריות מוצרים, זרימת קנייה, עגלה, חשבונות לקוח ונוכחות מותג.",
    "visibility-intelligence-lab":
      "דשבורד TypeScript לניתוח ריכוז נראות בחיפוש Google, דומיננטיות מדיה, מערכי SERP ונתוני היררכיית בעלות.",
    "confidential-kitchen-interior-render-series-turkiye":
      "סדרת רנדרי מטבח קולנועיים שנוצרו מתכניות דו־ממדיות — תאורה, חומרים ואווירה ברמת קמפיין.",
    "confidential-room-interior-render-series-turkiye":
      "ויזואליזציית חללי פנים יוקרתיים ללקוח דיסקרטי — חומרים, תאורה והצגת אווירה.",
    "confidential-virtual-walkthrough-project-turkiye":
      "קונספט תצוגת פרויקט אינטראקטיבית ב־Three.js — סיור וירטואלי באתר/חלל.",
    "high-end-campaign-production-pipeline":
      "זרימת הפקת קמפיין מקצה לקצה — תכנון, בקרת גרסאות, נכסי מדיה ומסירת תוצרים.",
    "supply-chain-risk-intelligence-apac":
      "פלטפורמת ניטור סיכוני שרשרת אספקה בזמן אמת — בריאות ספקים, חשיפה גיאופוליטית, צווארי בקבוק בנמלים ופערי ביקוש/קיבולת.",
    "agricultural-commodities-intelligence-india":
      "פלטפורמת מודיעין לסחורות חקלאיות — מעקב יבולים, מזג אוויר, תנועות מחירים וצווארי בקבוק בהיצע בזמן אמת.",
    "fintech-operations-intelligence-gulf":
      "דשבורד תפעול וציות לפינטק — ניטור עסקאות, סינון AML/KYC, חשיפות סיכון שוק וציות רגולטורי.",
    "manufacturing-operations-platform-germany":
      "דשבורד תפעול ייצור בזמן אמת — טלמטריית מכונות, תזמון ייצור, מדדי איכות, מלאי ותחזוקה חזויה ברשת מפעלים.",
    "healthcare-outcomes-intelligence-uk":
      "דשבורד תוצאות ועלויות בריאות — תוצאות מטופלים, מסלולי טיפול, עלות למקרה ומדדי שוויון ברשתות בתי חולים.",
    "real-estate-intelligence-brazil":
      "פלטפורמת מודיעין נדל״ן — הערכות שווי, סיכון/הזדמנות שכונתית, שינויים דמוגרפיים והשפעת תשתיות.",
    "energy-digital-twin-middle-east":
      "תאום דיגיטלי לתשתיות אנרגיה — ויזואליזציה תלת־ממדית, חיישנים בזמן אמת, תחזוקה חזויה וציות סביבתי.",
    "edtech-student-intelligence-india":
      "פלטפורמת מודיעין למידה — מעקב התקדמות תלמידים, פערי מיומנויות, חיזוי נשירה ומסלולי למידה מותאמים.",
    "carbon-credits-intelligence-africa":
      "פלטפורמת מודיעין לקרדיטי פחמן — מדידת הפחתת פליטות, הנפקה/משיכה, אימות, תמחור וציות לרגולציה.",
    "port-operations-intelligence-global":
      "מודיעין תפעול נמלים — מעקב כלי שיט, זרימות מכולות, ניצול רציפים, מסמכי מטען ואופטימיזציית צווארי בקבוק.",
    "media-rights-licensing-intelligence":
      "פלטפורמת מודיעין זכויות מדיה ורישוי — אישור זכויות, מעקב הסכמים, ניטור שימוש וחישוב תמלוגים בזמן אמת.",
    "pharmaceutical-supply-chain-track-trace":
      "מעקב וסריאליזציה בשרשרת אספקת תרופות — ציות DSCSA/FMD, זיהוי זיופים ושמירה על שרשרת קור.",
    "esg-data-pipeline-scoring":
      "צינור איסוף וניקוד ESG אוטומטי — איחוד מקורות, סטנדרטיזציה ודירוגים מיושרים למסגרות בינלאומיות.",
    "procurement-fraud-detection-engine":
      "מנוע לזיהוי הונאות רכש מבוסס למידת מכונה — הזמנות חשודות, דפוסי ספקים, מניפולציית מכרזים ותוכניות שוחד.",
    "scientific-research-collaboration-intelligence":
      "מודיעין שיתופי מחקר מדעי — איחוד פרסומים, מיפוי רשתות חוקרים, הזדמנויות שיתוף ומעקב ציטוטים.",
    "insurance-claims-intelligence-subrogation":
      "מודיעין תביעות ביטוח וסברוגציה — זיהוי הונאה, הערכת חומרה, הזדמנויות סברוגציה והערכת אחריות.",
    "critical-minerals-supply-chain-intelligence":
      "מודיעין שרשרת אספקה למינרלים קריטיים — כרייה, זיקוק, ציות ESG, סיכון גיאופוליטי ותחזית היצע/ביקוש.",
    "hotel-revenue-pricing-intelligence":
      "ניהול הכנסות ותמחור דינמי למלונות — חיזוי ביקוש, מחירי מתחרים, עונתיות והזמנות קבוצתיות למקסום RevPAR.",
    "microfinance-risk-intelligence-emerging-markets":
      "מודיעין סיכון למיקרו־פיננסים — ניקוד אשראי חלופי, חיזוי חדלות פירעון ואופטימיזציית תיק הלוואות.",
    "synthetic-data-pipeline-platform":
      "צינור נתונים סינתטיים ופרטיות — יצירת מערכי בדיקה ריאליסטיים מסכמות פרודקשן תוך עמידה ב־GDPR/HIPAA.",
    "clinical-trial-intelligence-platform":
      "מודיעין ניסויים קליניים ובחירת אתרים — אוכלוסיית מטופלים, ניסיון חוקרים, קיבולת גיוס וציות לפרוטוקול.",
    "vertical-farming-operations-intelligence":
      "מודיעין תפעול לחקלאות אנכית — אופטימיזציית תנאי גידול, חיזוי יבול, הפחתת אנרגיה ותזמון קציר.",
  },
};

/** Localized listing titles. Product brand names stay Latin where they are trademarks. */
const DISPLAY_TITLES: LocaleRecord<Record<string, string>> = {
  en: {},
  he: {
    "nileroute-os": "NileRoute OS",
    "evo2-variant-intelligence": "Evo2 Variant Intelligence",
    signalsframe: "SignalsFrame",
    "intelligence-console": "קונסולת מודיעין",
    "atlas-intelligence": "Atlas Intelligence",
    "atlas-geoint": "Atlas GEOINT",
    draftly: "Draftly",
    geoflex360: "GeoFlex360",
    "cabinet-chiropratique-chaima-hosni": "קליניקת כירופרקטיקה — ד״ר שיימה חוסני",
    "chiro-site": "קליניקת כירופרקטיקה — ד״ר שיימה חוסני",
    "chafai-architects": "Chafai Architects",
    "almajliss-heritage": "Almajliss Heritage",
    "visibility-intelligence-lab": "מעבדת מודיעין נראות",
    "confidential-kitchen-interior-render-series-turkiye":
      "סדרת רנדרי מטבח — פרויקט דיסקרטי",
    "confidential-room-interior-render-series-turkiye":
      "סדרת רנדרי חדרים — פרויקט דיסקרטי",
    "confidential-virtual-walkthrough-project-turkiye":
      "סיור וירטואלי אינטראקטיבי — פרויקט דיסקרטי",
    "high-end-campaign-production-pipeline": "צינור הפקת קמפיין פרימיום",
    "supply-chain-risk-intelligence-apac": "מודיעין סיכוני שרשרת אספקה — APAC",
    "agricultural-commodities-intelligence-india": "מודיעין סחורות חקלאיות — הודו",
    "fintech-operations-intelligence-gulf": "מודיעין תפעול פינטק — המפרץ",
    "manufacturing-operations-platform-germany": "פלטפורמת תפעול ייצור — גרמניה",
    "healthcare-outcomes-intelligence-uk": "מודיעין תוצאות בריאות — UK NHS",
    "real-estate-intelligence-brazil": "מודיעין שוק נדל״ן — ברזיל",
    "energy-digital-twin-middle-east": "תאום דיגיטלי לתשתיות אנרגיה — המזרח התיכון",
    "edtech-student-intelligence-india": "מודיעין תלמידים ל־EdTech — הודו",
    "carbon-credits-intelligence-africa": "מודיעין קרדיטי פחמן וקיימות — אפריקה",
    "port-operations-intelligence-global": "מודיעין תפעול נמלים — גלובלי",
    "media-rights-licensing-intelligence": "מודיעין זכויות מדיה ורישוי",
    "pharmaceutical-supply-chain-track-trace": "מעקב וסריאליזציה בשרשרת אספקת תרופות",
    "esg-data-pipeline-scoring": "צינור איסוף וניקוד נתוני ESG",
    "procurement-fraud-detection-engine": "מנוע זיהוי הונאות רכש",
    "scientific-research-collaboration-intelligence": "מודיעין שיתופי מחקר מדעי",
    "insurance-claims-intelligence-subrogation": "מודיעין תביעות ביטוח וסברוגציה",
    "critical-minerals-supply-chain-intelligence": "מודיעין שרשרת אספקה למינרלים קריטיים",
    "hotel-revenue-pricing-intelligence": "ניהול הכנסות ותמחור דינמי למלונות",
    "microfinance-risk-intelligence-emerging-markets":
      "מודיעין סיכון למיקרו־פיננסים — שווקים מתעוררים",
    "synthetic-data-pipeline-platform": "צינור נתונים סינתטיים ושמירת פרטיות",
    "clinical-trial-intelligence-platform": "מודיעין ניסויים קליניים ובחירת אתרים",
    "vertical-farming-operations-intelligence": "מודיעין תפעול לחקלאות אנכית",
  },
};

export function getProjectDisplayTitle(
  locale: Locale,
  slug: string,
  fallback: string,
): string {
  const localized =
    DISPLAY_TITLES[locale]?.[slug] ?? DISPLAY_TITLES.en[slug] ?? fallback;
  return scrubNonIsraelPlaces(localized, locale);
}

export function getProjectShortDescription(
  locale: Locale,
  slug: string,
  fallback: string,
): string {
  const localized =
    SHORT_DESCRIPTIONS[locale]?.[slug] ??
    SHORT_DESCRIPTIONS.en[slug] ??
    fallback;
  return scrubNonIsraelPlaces(localized, locale);
}
