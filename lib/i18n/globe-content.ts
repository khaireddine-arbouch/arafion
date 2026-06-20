import type { Locale } from "./translations";

type GlobeContent = {
  trustedBy: string;
  hubs: { id: string; label: string }[];
  testimonials: { quote: string; author: string }[];
};

const CONTENT: Record<Locale, GlobeContent> = {
  en: {
    trustedBy: "Trusted by",
    hubs: [
      { id: "morocco", label: "Morocco" },
      { id: "turkey", label: "Türkiye" },
      { id: "europe", label: "Europe" },
      { id: "international", label: "International" },
    ],
    testimonials: [
      { quote: "Shipped our core analytics dashboard in five weeks. Changed how we run daily operations.", author: "Atlas Intelligence" },
      { quote: "Technical depth that matched our brief better than any agency we had worked with before.", author: "Geoflex" },
      { quote: "From concept to production-ready in under eight weeks. Genuinely impressive execution.", author: "EVO2" },
      { quote: "The automation workflows they built delivered measurable time savings from day one.", author: "Toomore" },
      { quote: "Clean architecture, zero handholding. Code our team can actually own and build on.", author: "Chafai Architects" },
      { quote: "Flawless cross-timezone collaboration. The results exceeded every expectation we had set.", author: "Almajliss" },
    ],
  },
  fr: {
    trustedBy: "Approuvé par",
    hubs: [
      { id: "morocco", label: "Maroc" },
      { id: "turkey", label: "Türkiye" },
      { id: "europe", label: "Europe" },
      { id: "international", label: "International" },
    ],
    testimonials: [
      { quote: "Notre dashboard analytique principal a été livré en cinq semaines. Notre fonctionnement quotidien a changé.", author: "Atlas Intelligence" },
      { quote: "Une profondeur technique qui correspondait à notre brief mieux que n'importe quelle agence avec laquelle nous avions travaillé.", author: "Geoflex" },
      { quote: "Du concept à une version prête pour la production en moins de huit semaines. Une exécution vraiment impressionnante.", author: "EVO2" },
      { quote: "Les workflows d'automatisation livrés ont généré des gains de temps mesurables dès le premier jour.", author: "Toomore" },
      { quote: "Architecture propre, sans accompagnement excessif. Du code que notre équipe peut réellement posséder et faire évoluer.", author: "Chafai Architects" },
      { quote: "Une collaboration sans faille entre fuseaux horaires. Les résultats ont dépassé toutes nos attentes.", author: "Almajliss" },
    ],
  },
  tr: {
    trustedBy: "Güvenenler",
    hubs: [
      { id: "morocco", label: "Fas" },
      { id: "turkey", label: "Türkiye" },
      { id: "europe", label: "Avrupa" },
      { id: "international", label: "Uluslararası" },
    ],
    testimonials: [
      { quote: "Temel analiz panomuzu beş haftada yayına aldılar. Günlük operasyonlarımızı değiştirdi.", author: "Atlas Intelligence" },
      { quote: "Brifimize, birlikte çalıştığımız tüm ajanslardan daha iyi uyan teknik derinlik.", author: "Geoflex" },
      { quote: "Fikirden üretime hazır sürüme sekiz haftadan kısa sürede ulaşıldı. Gerçekten etkileyici bir teslim.", author: "EVO2" },
      { quote: "Kurdukları otomasyon iş akışları ilk günden ölçülebilir zaman tasarrufu sağladı.", author: "Toomore" },
      { quote: "Temiz mimari, hiç el tutma yok. Ekibimizin gerçekten sahiplenebileceği kod.", author: "Chafai Architects" },
      { quote: "Zaman dilimleri arasında kusursuz iş birliği. Sonuçlar tüm beklentilerimizi aştı.", author: "Almajliss" },
    ],
  },
  ar: {
    trustedBy: "يثق بنا",
    hubs: [
      { id: "morocco", label: "المغرب" },
      { id: "turkey", label: "Türkiye" },
      { id: "europe", label: "أوروبا" },
      { id: "international", label: "عالمي" },
    ],
    testimonials: [
      { quote: "أطلقوا لوحة التحليلات الأساسية لدينا خلال خمسة أسابيع. غيّر ذلك طريقة تشغيلنا اليومية.", author: "Atlas Intelligence" },
      { quote: "عمق تقني طابق brief الخاص بنا أفضل من أي وكالة عملنا معها من قبل.", author: "Geoflex" },
      { quote: "من الفكرة إلى نسخة جاهزة للإنتاج خلال أقل من ثمانية أسابيع. تنفيذ مثير للإعجاب فعلاً.", author: "EVO2" },
      { quote: "سير عمل الأتمتة الذي بنوه وفّر وقتاً ملموساً منذ اليوم الأول.", author: "Toomore" },
      { quote: "معمارية نظيفة، من دون شرح مفرط. كود يمكن لفريقنا امتلاكه والبناء عليه فعلاً.", author: "Chafai Architects" },
      { quote: "تعاون بلا أخطاء عبر المناطق الزمنية. النتائج تجاوزت كل التوقعات التي وضعناها.", author: "Almajliss" },
    ],
  },
};

export function getGlobeContent(locale: Locale): GlobeContent {
  return CONTENT[locale] ?? CONTENT.en;
}

