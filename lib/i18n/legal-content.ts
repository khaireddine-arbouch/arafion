import { type Locale } from "./translations";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageContent = {
  topBar: string;
  eyebrow: string;
  title: string;
  intro: string;
  effective: string;
  sections: LegalSection[];
  footerQuestions: string;
  footerHome: string;
  footerOtherLabel: string;
  footerOtherHref: string;
};

const PRIVACY: Record<Locale, LegalPageContent> = {
  en: {
    topBar: "Privacy Policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "We keep this short and plain. Here is what we collect, why, and what we do with it.",
    effective: "1 June 2025",
    footerQuestions: "Questions?",
    footerHome: "Home",
    footerOtherLabel: "Terms of Use",
    footerOtherHref: "/terms",
    sections: [
      {
        title: "1. Who we are",
        body: "Arafion is a product engineering studio that provides software development, AI systems, data infrastructure, marketing systems, and architectural visualization services. This Privacy Policy explains how we handle information collected through this website and during service engagements. Contact: contact@arafion.com.",
      },
      {
        title: "2. Information we collect",
        body: "We collect information you voluntarily provide, such as your name, email address, company name, and project details when you reach out via the contact page or by email. We do not run user accounts, collect payment information directly, or store sensitive personal data on this website. We may collect basic analytics data, such as pages visited, referrer, and browser type, through privacy-respecting analytics tools to understand how the site is used.",
      },
      {
        title: "3. How we use your information",
        body: "We use contact information solely to respond to your enquiry, discuss your project, and communicate about an engagement. We do not sell, rent, or share your personal information with third parties for marketing purposes. Analytics data is used in aggregate to improve site content and performance; it is never tied to identifiable individuals.",
      },
      {
        title: "4. Cookies and tracking",
        body: "This website may use essential cookies required for basic functionality. We do not use advertising cookies or cross-site tracking cookies. If you use an analytics-blocking browser extension, it will not affect your ability to use this site. We do not run retargeting pixels, Facebook Pixel, or Google Ads tags on this website.",
      },
      {
        title: "5. Client project data",
        body: "When working on a project, clients may share business data, assets, credentials, or proprietary information. We treat all project data as strictly confidential. We do not share client materials with third parties except subcontractors engaged to deliver project work under confidentiality obligations. We retain project files for a reasonable period for support and handoff purposes, then securely delete them upon request.",
      },
      {
        title: "6. Data storage and security",
        body: "Information you send us via email or the contact form is stored in our email system and project management tools, which are hosted on reputable cloud providers with industry-standard security. We take reasonable precautions to protect your information, but no transmission over the internet is 100% secure. We are not responsible for interception by third parties outside our control.",
      },
      {
        title: "7. Third-party services",
        body: "This website may link to external websites, demos, and case studies hosted on third-party platforms. Once you leave arafion.com, this Privacy Policy no longer applies. We are not responsible for the privacy practices of those sites.",
      },
      {
        title: "8. Your rights",
        body: "You may request access to, correction of, or deletion of any personal information we hold about you by emailing contact@arafion.com. We will respond within a reasonable time. If you are located in the EU or EEA, you have additional rights under the GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.",
      },
      {
        title: "9. Children's privacy",
        body: "This website is not directed at children under 16. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us and we will delete it.",
      },
      {
        title: "10. Changes to this policy",
        body: "We may update this Privacy Policy from time to time. The effective date at the top of this page reflects when the policy was last revised. Continued use of this website after an update constitutes acceptance of the revised policy.",
      },
      {
        title: "11. Contact",
        body: "For privacy-related questions or requests, email contact@arafion.com. We aim to respond within two business days.",
      },
    ],
  },
  fr: {
    topBar: "Politique de confidentialité",
    eyebrow: "Mentions légales",
    title: "Politique de confidentialité",
    intro: "Nous restons simples et directs. Voici ce que nous collectons, pourquoi, et ce que nous en faisons.",
    effective: "1 juin 2025",
    footerQuestions: "Des questions ?",
    footerHome: "Accueil",
    footerOtherLabel: "Conditions d'utilisation",
    footerOtherHref: "/terms",
    sections: [
      {
        title: "1. Qui nous sommes",
        body: "Arafion est un studio d'ingénierie produit qui fournit des services de développement logiciel, systèmes IA, infrastructures data, systèmes marketing et visualisation architecturale. Cette politique explique comment nous traitons les informations collectées via ce site et dans le cadre de nos missions. Contact : contact@arafion.com.",
      },
      {
        title: "2. Informations collectées",
        body: "Nous collectons les informations que vous fournissez volontairement, comme votre nom, votre adresse e-mail, votre société et les détails du projet lorsque vous nous contactez via la page de contact ou par e-mail. Nous ne gérons pas de comptes utilisateurs, ne collectons pas directement de paiements et ne stockons pas de données personnelles sensibles sur ce site. Nous pouvons recueillir des données analytiques de base, comme les pages visitées, la provenance et le type de navigateur, via des outils respectueux de la vie privée afin de comprendre l'usage du site.",
      },
      {
        title: "3. Utilisation des informations",
        body: "Nous utilisons vos coordonnées uniquement pour répondre à votre demande, discuter de votre projet et communiquer dans le cadre d'une mission. Nous ne vendons, ne louons et ne partageons pas vos informations personnelles à des fins marketing. Les données analytiques sont utilisées de manière agrégée pour améliorer le contenu et les performances du site ; elles ne sont jamais rattachées à une personne identifiable.",
      },
      {
        title: "4. Cookies et suivi",
        body: "Ce site peut utiliser des cookies essentiels au bon fonctionnement. Nous n'utilisons pas de cookies publicitaires ni de cookies de suivi intersites. Si vous bloquez les analytics via votre navigateur, cela n'affectera pas l'utilisation du site. Nous n'utilisons pas de pixels de reciblage, de Facebook Pixel ni de balises Google Ads sur ce site.",
      },
      {
        title: "5. Données de projet client",
        body: "Lors d'un projet, les clients peuvent partager des données métier, des assets, des identifiants ou des informations propriétaires. Nous considérons toutes les données de projet comme strictement confidentielles. Nous ne partageons pas les éléments client avec des tiers, sauf avec des sous-traitants engagés pour livrer le projet dans le cadre d'obligations de confidentialité. Nous conservons les fichiers pendant une période raisonnable pour l'assistance et la passation, puis nous les supprimons de manière sécurisée sur demande.",
      },
      {
        title: "6. Stockage et sécurité",
        body: "Les informations envoyées par e-mail ou via le formulaire sont stockées dans notre système de messagerie et nos outils de gestion de projet, hébergés chez des fournisseurs cloud reconnus avec des standards de sécurité élevés. Nous prenons des précautions raisonnables, mais aucune transmission sur Internet n'est sécurisée à 100 %. Nous ne sommes pas responsables d'une interception par des tiers hors de notre contrôle.",
      },
      {
        title: "7. Services tiers",
        body: "Ce site peut renvoyer vers des sites externes, des démos et des études de cas hébergés sur des plateformes tierces. Une fois que vous quittez arafion.com, cette politique ne s'applique plus. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites.",
      },
      {
        title: "8. Vos droits",
        body: "Vous pouvez demander l'accès, la correction ou la suppression des informations personnelles que nous détenons en écrivant à contact@arafion.com. Nous répondons dans un délai raisonnable. Si vous êtes situé dans l'UE ou l'EEE, vous disposez de droits supplémentaires au titre du RGPD, notamment le droit à la portabilité et le droit de déposer une réclamation auprès d'une autorité de contrôle.",
      },
      {
        title: "9. Vie privée des enfants",
        body: "Ce site ne s'adresse pas aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès de mineurs. Si vous pensez qu'un mineur nous a transmis des informations, contactez-nous et nous les supprimerons.",
      },
      {
        title: "10. Modifications de cette politique",
        body: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La date d'effet en haut de la page indique la dernière révision. L'utilisation continue du site après une mise à jour vaut acceptation de la version révisée.",
      },
      {
        title: "11. Contact",
        body: "Pour toute question relative à la confidentialité, écrivez à contact@arafion.com. Nous visons une réponse sous deux jours ouvrés.",
      },
    ],
  },
  tr: {
    topBar: "Gizlilik Politikası",
    eyebrow: "Yasal",
    title: "Gizlilik Politikası",
    intro: "Kısa ve net tutuyoruz. Neleri topladığımızı, neden topladığımızı ve nasıl kullandığımızı burada bulabilirsiniz.",
    effective: "1 Haziran 2025",
    footerQuestions: "Sorularınız mı var?",
    footerHome: "Ana sayfa",
    footerOtherLabel: "Kullanım Şartları",
    footerOtherHref: "/terms",
    sections: [
      {
        title: "1. Biz kimiz",
        body: "Arafion; yazılım geliştirme, AI sistemleri, veri altyapısı, pazarlama sistemleri ve mimari görselleştirme hizmetleri sunan bir ürün mühendisliği stüdyosudur. Bu politika, bu web sitesi ve hizmet görüşmeleri sırasında toplanan bilgilerin nasıl işlendiğini açıklar. İletişim: contact@arafion.com.",
      },
      {
        title: "2. Topladığımız bilgiler",
        body: "İletişim sayfası veya e-posta üzerinden bize ulaştığınızda adınız, e-posta adresiniz, şirket adınız ve proje detaylarınız gibi gönüllü olarak verdiğiniz bilgileri toplarız. Kullanıcı hesabı açmayız, doğrudan ödeme bilgisi toplamayız ve bu sitede hassas kişisel veri saklamayız. Sayfa ziyaretleri, yönlendiren kaynak ve tarayıcı türü gibi temel analiz verilerini, sitenin nasıl kullanıldığını anlamak için gizliliği gözeten araçlarla toplayabiliriz.",
      },
      {
        title: "3. Bilgileri nasıl kullanıyoruz",
        body: "İletişim bilgilerini yalnızca talebinize yanıt vermek, projenizi konuşmak ve bir çalışma hakkında iletişim kurmak için kullanırız. Kişisel bilgilerinizi pazarlama amacıyla satmayız, kiralamayız veya üçüncü taraflarla paylaşmayız. Analitik veriler toplu şekilde kullanılır; belirli kişilerle ilişkilendirilmez.",
      },
      {
        title: "4. Çerezler ve takip",
        body: "Bu web sitesi, temel işlevler için gerekli olan zorunlu çerezler kullanabilir. Reklam çerezleri veya siteler arası takip çerezleri kullanmayız. Tarayıcıda analitik engelleme eklentisi kullanmanız siteyi etkilemez. Yeniden hedefleme pikselleri, Facebook Pixel veya Google Ads etiketleri kullanmıyoruz.",
      },
      {
        title: "5. Müşteri proje verileri",
        body: "Bir proje yürütürken müşteriler iş verileri, varlıklar, erişim bilgileri veya özel bilgiler paylaşabilir. Tüm proje verilerini kesin olarak gizli kabul ederiz. Proje işini teslim etmek için çalışan alt yükleniciler dışında müşteri materyallerini üçüncü taraflarla paylaşmayız. Destek ve devir amaçlı olarak proje dosyalarını makul süre saklar, talep üzerine güvenli şekilde sileriz.",
      },
      {
        title: "6. Veri saklama ve güvenlik",
        body: "E-posta veya iletişim formu üzerinden gönderdiğiniz bilgiler, güvenilir bulut sağlayıcılarında barındırılan e-posta sistemimiz ve proje yönetim araçlarımızda saklanır. Bilginizi korumak için makul önlemler alırız; ancak internet üzerinden hiçbir aktarım yüzde yüz güvenli değildir. Kontrolümüz dışındaki üçüncü taraf müdahalelerinden sorumlu değiliz.",
      },
      {
        title: "7. Üçüncü taraf hizmetler",
        body: "Bu web sitesi üçüncü taraf platformlarda barındırılan harici sitelere, demolara ve vaka çalışmalarına bağlanabilir. arafion.com'dan ayrıldığınızda bu politika artık geçerli değildir. O sitelerin gizlilik uygulamalarından sorumlu değiliz.",
      },
      {
        title: "8. Haklarınız",
        body: "Hakkınızda tuttuğumuz kişisel bilgilere erişim, düzeltme veya silme talebini contact@arafion.com adresine e-posta göndererek yapabilirsiniz. Makul süre içinde yanıt veririz. AB/AEA bölgesindeyseniz GDPR kapsamında veri taşınabilirliği ve denetim otoritesine şikayette bulunma hakkı dahil ek haklara sahipsiniz.",
      },
      {
        title: "9. Çocukların gizliliği",
        body: "Bu web sitesi 16 yaş altı çocuklara yönelik değildir. Reşit olmayanlardan bilerek kişisel bilgi toplamayız. Eğer bir küçüğün bize bilgi gönderdiğini düşünüyorsanız, lütfen bizimle iletişime geçin; veriyi silelim.",
      },
      {
        title: "10. Bu politikadaki değişiklikler",
        body: "Gizlilik Politikasını zaman zaman güncelleyebiliriz. Sayfanın üst kısmındaki yürürlük tarihi son revizyonu gösterir. Güncellemeden sonra siteyi kullanmaya devam etmeniz, yeni sürümü kabul ettiğiniz anlamına gelir.",
      },
      {
        title: "11. İletişim",
        body: "Gizlilikle ilgili sorular veya talepler için contact@arafion.com adresine yazın. İki iş günü içinde yanıtlamayı hedefliyoruz.",
      },
    ],
  },
  ar: {
    topBar: "سياسة الخصوصية",
    eyebrow: "قانوني",
    title: "سياسة الخصوصية",
    intro: "نحافظ على الأمر مختصراً وواضحاً. هنا ما الذي نجمعه، ولماذا، وماذا نفعل به.",
    effective: "1 يونيو 2025",
    footerQuestions: "هل لديك أسئلة؟",
    footerHome: "الرئيسية",
    footerOtherLabel: "شروط الاستخدام",
    footerOtherHref: "/terms",
    sections: [
      { title: "1. من نحن", body: "Arafion هو استوديو هندسة منتجات يقدم خدمات تطوير البرمجيات وأنظمة الذكاء الاصطناعي وبنية البيانات وأنظمة التسويق والتصور المعماري. توضح هذه السياسة كيف نتعامل مع المعلومات التي نجمعها عبر هذا الموقع وفي أثناء تقديم الخدمات. التواصل: contact@arafion.com." },
      { title: "2. المعلومات التي نجمعها", body: "نجمع المعلومات التي تقدمها طوعاً، مثل الاسم والبريد الإلكتروني واسم الشركة وتفاصيل المشروع عندما تتواصل معنا عبر صفحة الاتصال أو عبر البريد. لا ننشئ حسابات مستخدمين، ولا نجمع معلومات الدفع مباشرة، ولا نخزن بيانات شخصية حساسة على هذا الموقع. قد نجمع بيانات تحليلية أساسية مثل الصفحات التي تمت زيارتها ومصدر الإحالة ونوع المتصفح عبر أدوات تحترم الخصوصية لفهم استخدام الموقع." },
      { title: "3. كيف نستخدم المعلومات", body: "نستخدم معلومات الاتصال فقط للرد على استفسارك ومناقشة مشروعك والتواصل بشأن أي مشاركة عمل. لا نبيع معلوماتك الشخصية أو نؤجرها أو نشاركها مع أطراف ثالثة لأغراض تسويقية. تُستخدم بيانات التحليل بشكل مجمع لتحسين المحتوى والأداء، ولا ترتبط مطلقاً بأشخاص يمكن التعرف عليهم." },
      { title: "4. ملفات الارتباط والتتبع", body: "قد يستخدم هذا الموقع ملفات ارتباط أساسية لازمة للوظائف الأساسية. لا نستخدم ملفات ارتباط إعلانية أو ملفات تتبع عبر المواقع. إذا كنت تستخدم إضافة لحظر التحليلات في المتصفح فلن يؤثر ذلك على قدرتك على استخدام الموقع. لا نستخدم بكسلات إعادة الاستهداف أو Facebook Pixel أو وسوم Google Ads." },
      { title: "5. بيانات مشاريع العملاء", body: "عند العمل على مشروع قد يشارك العملاء بيانات أعمال أو أصولاً أو بيانات وصول أو معلومات خاصة. نتعامل مع جميع بيانات المشروع على أنها سرية تماماً. لا نشارك مواد العميل مع أطراف ثالثة إلا مع المتعاقدين الفرعيين المشاركين في تسليم العمل تحت التزامات السرية. نحتفظ بملفات المشروع لفترة معقولة لأغراض الدعم والتسليم ثم نحذفها بأمان عند الطلب." },
      { title: "6. التخزين والأمان", body: "تُخزن المعلومات التي ترسلها عبر البريد أو نموذج الاتصال في نظام البريد وأدوات إدارة المشاريع لدينا، والمستضافة لدى مزودين سحابة موثوقين بمعايير أمان متعارف عليها. نتخذ احتياطات معقولة لحماية معلوماتك، لكن لا توجد عملية نقل عبر الإنترنت آمنة بنسبة 100%. نحن غير مسؤولين عن أي اعتراض من أطراف خارج سيطرتنا." },
      { title: "7. الخدمات الخارجية", body: "قد يحتوي هذا الموقع على روابط لمواقع خارجية وعروض توضيحية ودراسات حالة مستضافة على منصات طرف ثالث. بمجرد مغادرتك arafion.com لا تنطبق هذه السياسة. نحن غير مسؤولين عن ممارسات الخصوصية لتلك المواقع." },
      { title: "8. حقوقك", body: "يمكنك طلب الوصول إلى أي معلومات شخصية نحتفظ بها عنك أو تصحيحها أو حذفها عبر مراسلتنا على contact@arafion.com. سنرد خلال مدة معقولة. إذا كنت في الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية فلك حقوق إضافية بموجب GDPR، بما في ذلك الحق في نقل البيانات والحق في تقديم شكوى إلى جهة إشرافية." },
      { title: "9. خصوصية الأطفال", body: "هذا الموقع غير موجه للأطفال دون 16 عاماً. لا نجمع عن قصد معلومات شخصية من القاصرين. إذا كنت تعتقد أن قاصراً قد أرسل لنا معلومات، فاتصل بنا وسنقوم بحذفها." },
      { title: "10. التغييرات على هذه السياسة", body: "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. يعكس تاريخ السريان في أعلى الصفحة آخر مراجعة. استمرار استخدام الموقع بعد أي تحديث يعني قبول السياسة المعدلة." },
      { title: "11. التواصل", body: "للاستفسارات أو الطلبات المتعلقة بالخصوصية، راسل contact@arafion.com. نهدف إلى الرد خلال يومي عمل." },
    ],
  },
};

const TERMS: Record<Locale, LegalPageContent> = {
  en: {
    topBar: "Terms of Use",
    eyebrow: "Legal",
    title: "Terms of Use",
    intro: "These terms govern your use of this website and any engagement with Arafion for services. Please read them carefully.",
    effective: "1 June 2025",
    footerQuestions: "Questions?",
    footerHome: "Home",
    footerOtherLabel: "Privacy Policy",
    footerOtherHref: "/privacy-policy",
    sections: [
      { title: "1. Acceptance of terms", body: "By accessing arafion.com or engaging Arafion for any service, whether through this website, email, or any other channel, you agree to be bound by these Terms of Use. If you do not agree, do not use this website or our services." },
      { title: "2. Services provided", body: "Arafion provides software engineering, web development, AI product development, data systems, marketing infrastructure, architectural visualization, and related digital services. The specific scope, deliverables, timeline, and payment terms for any project are defined in a separate written agreement between Arafion and the client." },
      { title: "3. Intellectual property", body: "Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. Arafion retains ownership of underlying frameworks, reusable components, development tools, methodologies, and know-how used in the creation of deliverables. Arafion may reference completed projects in its portfolio unless the client requests confidentiality in writing before project start." },
      { title: "4. Client responsibilities", body: "Clients are responsible for providing accurate briefs, timely feedback, required assets, and all approvals necessary for project delivery. Delays caused by late or incomplete client input may affect the agreed timeline. Clients confirm that they own or have the right to use any materials they provide to Arafion for use in a project." },
      { title: "5. Payment", body: "Payment terms are defined per engagement. Arafion typically requires a deposit before work begins, with milestone payments tied to delivery stages. Invoices are due within the period stated. Late payment may result in work pausing until the outstanding balance is settled. All fees are non-refundable unless stated otherwise in the project agreement." },
      { title: "6. Confidentiality", body: "Both parties agree to keep confidential any non-public information shared during the engagement. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law. Arafion handles all client data with discretion and will not share project details or sensitive business information with third parties without consent." },
      { title: "7. Warranties and disclaimers", body: "Arafion warrants that services will be performed professionally and in accordance with the agreed specifications. We do not warrant that software will be entirely free from defects in all environments, or that third-party platforms and APIs we integrate with will remain available or unchanged. This website and its contents are provided as is without warranty of any kind." },
      { title: "8. Limitation of liability", body: "To the maximum extent permitted by applicable law, Arafion's total liability for any claim arising from a project is limited to the fees paid by the client for the specific project giving rise to the claim. Arafion is not liable for indirect, incidental, consequential, or punitive damages, including loss of revenue, loss of data, or business interruption." },
      { title: "9. Termination", body: "Either party may terminate a project agreement with written notice as specified in that agreement. If a client terminates early, payment is due for all work completed to the termination date. If Arafion terminates due to client breach, all outstanding amounts become immediately payable." },
      { title: "10. Governing law", body: "These terms are governed by the laws of the jurisdiction in which Arafion is registered, without regard to conflict of law provisions. Any disputes shall be resolved through good-faith negotiation first, followed by mediation if necessary." },
      { title: "11. Changes to these terms", body: "Arafion may update these Terms of Use at any time. The revised terms take effect upon posting to this page. Continued use of this website or our services after any change constitutes acceptance of the updated terms." },
      { title: "12. Contact", body: "Questions about these terms should be sent to contact@arafion.com. We aim to respond within two business days." },
    ],
  },
  fr: {
    topBar: "Conditions d'utilisation",
    eyebrow: "Mentions légales",
    title: "Conditions d'utilisation",
    intro: "Ces conditions régissent l'utilisation du site et toute collaboration avec Arafion. Merci de les lire attentivement.",
    effective: "1 juin 2025",
    footerQuestions: "Des questions ?",
    footerHome: "Accueil",
    footerOtherLabel: "Politique de confidentialité",
    footerOtherHref: "/privacy-policy",
    sections: [
      { title: "1. Acceptation des conditions", body: "En accédant à arafion.com ou en engageant Arafion pour un service, via ce site, par e-mail ou par tout autre canal, vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'êtes pas d'accord, n'utilisez pas ce site ni nos services." },
      { title: "2. Services fournis", body: "Arafion fournit des services d'ingénierie logicielle, de développement web, de produits IA, de systèmes de données, d'infrastructure marketing, de visualisation architecturale et des services numériques connexes. Le périmètre, les livrables, le calendrier et les conditions de paiement de chaque projet sont définis dans un accord écrit séparé entre Arafion et le client." },
      { title: "3. Propriété intellectuelle", body: "Après paiement intégral, les clients obtiennent la propriété des livrables finaux tels que définis dans l'accord projet. Arafion conserve la propriété des frameworks sous-jacents, composants réutilisables, outils de développement, méthodes et savoir-faire utilisés pour créer les livrables. Arafion peut mentionner les projets terminés dans son portfolio, sauf demande écrite de confidentialité avant le début du projet." },
      { title: "4. Responsabilités du client", body: "Le client doit fournir des briefs exacts, des retours dans les délais, les assets requis et toutes les validations nécessaires à la livraison. Les retards dus à des retours tardifs ou incomplets peuvent impacter le calendrier convenu. Le client confirme détenir les droits d'utilisation sur les éléments fournis à Arafion pour le projet." },
      { title: "5. Paiement", body: "Les modalités de paiement sont définies projet par projet. Arafion demande généralement un acompte avant le démarrage, puis des paiements liés aux jalons. Les factures sont exigibles dans le délai indiqué. Tout retard peut entraîner une suspension du travail jusqu'au règlement du solde. Les frais ne sont pas remboursables sauf mention contraire dans l'accord de projet." },
      { title: "6. Confidentialité", body: "Les deux parties conviennent de garder confidentielles les informations non publiques partagées pendant la mission. Cette obligation ne s'applique pas aux informations publiques, développées indépendamment ou dont la divulgation est exigée par la loi. Arafion traite les données client avec discrétion et ne partage pas les détails de projet ni les informations sensibles sans consentement." },
      { title: "7. Garanties et exclusions", body: "Arafion garantit que les services seront exécutés avec professionnalisme et conformément aux spécifications convenues. Nous ne garantissons pas qu'un logiciel sera exempt de défauts dans tous les environnements, ni que les plateformes ou API tierces intégrées resteront disponibles ou inchangées. Ce site et son contenu sont fournis en l'état, sans garantie d'aucune sorte." },
      { title: "8. Limitation de responsabilité", body: "Dans la limite maximale autorisée par la loi applicable, la responsabilité totale d'Arafion pour toute réclamation liée à un projet est plafonnée aux honoraires payés par le client pour ce projet. Arafion n'est pas responsable des dommages indirects, accessoires, consécutifs ou punitifs, y compris la perte de revenus, la perte de données ou l'interruption d'activité." },
      { title: "9. Résiliation", body: "Chaque partie peut résilier un accord projet par notification écrite selon les modalités prévues dans l'accord. Si un client résilie plus tôt, le paiement reste dû pour le travail effectué jusqu'à la date de résiliation. Si Arafion résilie en raison d'un manquement du client, toutes les sommes dues deviennent immédiatement exigibles." },
      { title: "10. Droit applicable", body: "Ces conditions sont régies par les lois de la juridiction dans laquelle Arafion est immatriculée, sans égard aux règles de conflit de lois. Les différends seront d'abord résolus par une négociation de bonne foi, puis par médiation si nécessaire." },
      { title: "11. Modifications", body: "Arafion peut mettre à jour ces Conditions d'utilisation à tout moment. Les conditions révisées prennent effet dès leur publication sur cette page. L'utilisation continue du site ou de nos services après une modification vaut acceptation des nouvelles conditions." },
      { title: "12. Contact", body: "Les questions relatives à ces conditions doivent être envoyées à contact@arafion.com. Nous visons une réponse sous deux jours ouvrés." },
    ],
  },
  tr: {
    topBar: "Kullanım Şartları",
    eyebrow: "Yasal",
    title: "Kullanım Şartları",
    intro: "Bu şartlar, web sitesini kullanımınızı ve Arafion ile hizmet ilişkisini düzenler. Lütfen dikkatlice okuyun.",
    effective: "1 Haziran 2025",
    footerQuestions: "Sorularınız mı var?",
    footerHome: "Ana sayfa",
    footerOtherLabel: "Gizlilik Politikası",
    footerOtherHref: "/privacy-policy",
    sections: [
      { title: "1. Şartların kabulü", body: "arafion.com'a erişerek veya bu web sitesi, e-posta ya da başka herhangi bir kanal üzerinden Arafion'dan hizmet alarak bu Kullanım Şartlarına bağlı olmayı kabul edersiniz. Kabul etmiyorsanız bu web sitesini veya hizmetlerimizi kullanmayın." },
      { title: "2. Sunulan hizmetler", body: "Arafion; yazılım mühendisliği, web geliştirme, AI ürün geliştirme, veri sistemleri, pazarlama altyapısı, mimari görselleştirme ve ilgili dijital hizmetler sunar. Her proje için kapsam, teslimatlar, zaman çizelgesi ve ödeme şartları Arafion ile müşteri arasında ayrı bir yazılı anlaşmada belirlenir." },
      { title: "3. Fikri mülkiyet", body: "Tam ödeme sonrasında müşteriler proje anlaşmasında belirtildiği şekilde nihai teslimatların mülkiyetini alır. Arafion; teslimatların oluşturulmasında kullanılan temel framework'lerin, yeniden kullanılabilir bileşenlerin, geliştirme araçlarının, metodolojilerin ve know-how'ın mülkiyetini elinde tutar. Müşteri proje başlamadan önce yazılı olarak gizlilik talep etmezse, tamamlanan projeler portföyde gösterilebilir." },
      { title: "4. Müşteri sorumlulukları", body: "Müşteriler doğru brief, zamanında geri bildirim, gerekli varlıklar ve teslim için gereken tüm onayları sağlamakla sorumludur. Geç veya eksik geri bildirimler kabul edilen takvimi etkileyebilir. Müşteriler, projede kullanılmak üzere Arafion'a verdikleri materyalleri kullanma hakkına sahip olduklarını onaylar." },
      { title: "5. Ödeme", body: "Ödeme şartları projeye göre belirlenir. Arafion genellikle işe başlamadan önce depozito ister; aşamalı ödemeler teslim kilometre taşlarına bağlanır. Faturalar belirtilen süre içinde ödenmelidir. Geç ödeme, bakiye kapanana kadar çalışmanın durmasına neden olabilir. Proje anlaşmasında aksi belirtilmedikçe tüm ücretler iade edilmez." },
      { title: "6. Gizlilik", body: "Taraflar, çalışma sırasında paylaşılan herkese açık olmayan bilgileri gizli tutmayı kabul eder. Bu yükümlülük, kamuya açık, bağımsız geliştirilen veya yasa gereği açıklanması gereken bilgilere uygulanmaz. Arafion müşteri verilerini dikkatle işler ve proje detaylarını veya hassas iş bilgilerini izinsiz paylaşmaz." },
      { title: "7. Garanti ve feragatler", body: "Arafion, hizmetlerin profesyonel şekilde ve üzerinde anlaşılan teknik şartlara uygun olarak yürütüleceğini taahhüt eder. Yazılımın her ortamda tamamen hatasız olacağını veya entegre ettiğimiz üçüncü taraf platformlar ve API'lerin aynı şekilde kullanılabilir kalacağını garanti etmeyiz. Bu web sitesi ve içeriği herhangi bir garanti olmaksızın olduğu gibi sunulur." },
      { title: "8. Sorumluluğun sınırlandırılması", body: "Yürürlükteki hukukun izin verdiği azami ölçüde, bir projeden doğan herhangi bir talep için Arafion'un toplam sorumluluğu, ilgili projeye ilişkin müşteri tarafından ödenen ücretlerle sınırlıdır. Arafion; gelir kaybı, veri kaybı veya iş kesintisi dahil olmak üzere dolaylı, arızi, sonuçsal veya cezai zararlardan sorumlu değildir." },
      { title: "9. Fesih", body: "Taraflardan herhangi biri, ilgili anlaşmada belirtilen yazılı bildirimle proje anlaşmasını feshedebilir. Müşteri erken fesih yaparsa, fesih tarihine kadar tamamlanan işlerin ücreti ödenir. Arafion, müşteri ihlali nedeniyle fesih yaparsa, tüm ödenmemiş tutarlar derhal muaccel olur." },
      { title: "10. Uygulanacak hukuk", body: "Bu şartlar, Arafion'un kayıtlı olduğu yargı alanının hukukuna tabidir; kanunlar ihtilafı hükümleri dikkate alınmaz. Herhangi bir uyuşmazlık önce iyi niyetli müzakere, gerekirse de arabuluculuk yoluyla çözülür." },
      { title: "11. Bu şartlardaki değişiklikler", body: "Arafion bu Kullanım Şartlarını dilediği zaman güncelleyebilir. Revize edilmiş şartlar bu sayfada yayınlandığı anda yürürlüğe girer. Siteyi veya hizmetleri herhangi bir değişiklikten sonra kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir." },
      { title: "12. İletişim", body: "Bu şartlarla ilgili sorularınızı contact@arafion.com adresine gönderebilirsiniz. İki iş günü içinde yanıtlamayı hedefliyoruz." },
    ],
  },
  ar: {
    topBar: "شروط الاستخدام",
    eyebrow: "قانوني",
    title: "شروط الاستخدام",
    intro: "تنظم هذه الشروط استخدامك للموقع وأي تعامل مع Arafion لتقديم الخدمات. يرجى قراءتها بعناية.",
    effective: "1 يونيو 2025",
    footerQuestions: "هل لديك أسئلة؟",
    footerHome: "الرئيسية",
    footerOtherLabel: "سياسة الخصوصية",
    footerOtherHref: "/privacy-policy",
    sections: [
      { title: "1. قبول الشروط", body: "باستخدامك للموقع arafion.com أو بالتعاقد مع Arafion عبر هذا الموقع أو البريد أو أي قناة أخرى، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق، فلا تستخدم الموقع أو خدماتنا." },
      { title: "2. الخدمات المقدمة", body: "تقدم Arafion خدمات هندسة البرمجيات وتطوير الويب ومنتجات الذكاء الاصطناعي وأنظمة البيانات وبنية التسويق والتصور المعماري وخدمات رقمية ذات صلة. يتم تحديد نطاق كل مشروع ومخرجاته وجدوله وشروط الدفع في اتفاقية مكتوبة منفصلة بين Arafion والعميل." },
      { title: "3. الملكية الفكرية", body: "عند السداد الكامل، يحصل العميل على ملكية المخرجات النهائية كما هو محدد في اتفاقية المشروع. تحتفظ Arafion بملكية الأطر الأساسية والمكونات القابلة لإعادة الاستخدام وأدوات التطوير والمنهجيات والخبرة المستخدمة في إنتاج المخرجات. يجوز لـ Arafion الإشارة إلى المشاريع المنجزة في محفظتها ما لم يطلب العميل السرية كتابة قبل بدء المشروع." },
      { title: "4. مسؤوليات العميل", body: "يقع على العميل تقديم brief دقيق، وملاحظات في الوقت المناسب، والأصول المطلوبة، وجميع الموافقات اللازمة للتسليم. قد تؤثر التأخيرات الناتجة عن تأخر أو نقص مدخلات العميل على الجدول المتفق عليه. ويؤكد العميل أنه يملك أو يملك حق استخدام أي مواد يقدمها إلى Arafion لاستخدامها في المشروع." },
      { title: "5. الدفع", body: "تحدد شروط الدفع لكل مشروع على حدة. تطلب Arafion عادةً دفعة مقدمة قبل بدء العمل، مع ربط الدفعات المرحلية بمراحل التسليم. يجب سداد الفواتير خلال المدة المحددة. قد يؤدي التأخر في الدفع إلى إيقاف العمل حتى يتم تسوية الرصيد المستحق. جميع الرسوم غير قابلة للاسترداد ما لم ينص اتفاق المشروع على خلاف ذلك." },
      { title: "6. السرية", body: "يتفق الطرفان على الحفاظ على سرية أي معلومات غير عامة يتم تبادلها خلال المشروع. لا تنطبق هذه الالتزامات على المعلومات المتاحة للعامة أو المطورة بشكل مستقل أو المطلوب الكشف عنها بموجب القانون. تتعامل Arafion مع بيانات العميل بحذر ولا تشارك تفاصيل المشروع أو معلومات العمل الحساسة مع أطراف ثالثة دون موافقة." },
      { title: "7. الضمانات والتنبيهات", body: "تضمن Arafion أن الخدمات ستُنفذ بشكل مهني ووفق المواصفات المتفق عليها. لا نضمن خلو البرمجيات من العيوب في كل البيئات، ولا نضمن بقاء منصات الطرف الثالث وواجهات API التي ندمجها متاحة أو دون تغيير. يُقدَّم هذا الموقع ومحتواه كما هو من دون أي ضمان من أي نوع." },
      { title: "8. تحديد المسؤولية", body: "إلى أقصى حد يسمح به القانون المعمول به، فإن المسؤولية الإجمالية لـ Arafion عن أي مطالبة تنشأ عن مشروع تقتصر على الرسوم المدفوعة من العميل لذلك المشروع بعينه. Arafion غير مسؤولة عن الأضرار غير المباشرة أو العرضية أو التبعية أو العقابية، بما في ذلك فقدان الإيرادات أو فقدان البيانات أو توقف الأعمال." },
      { title: "9. الإنهاء", body: "يجوز لأي طرف إنهاء اتفاق المشروع بإشعار كتابي وفق ما هو منصوص عليه في الاتفاق. إذا أنهى العميل مبكراً، تبقى مستحقات العمل المنجز حتى تاريخ الإنهاء واجبة السداد. وإذا أنهت Arafion بسبب إخلال العميل، تصبح جميع المبالغ المستحقة واجبة الدفع فوراً." },
      { title: "10. القانون الحاكم", body: "تخضع هذه الشروط لقوانين الولاية القضائية التي سجلت فيها Arafion، دون اعتبار لقواعد تنازع القوانين. تتم تسوية أي نزاع أولاً عبر التفاوض بحسن نية، ثم عبر الوساطة إذا لزم الأمر." },
      { title: "11. التغييرات على هذه الشروط", body: "يجوز لـ Arafion تحديث شروط الاستخدام هذه في أي وقت. تسري الشروط المعدلة عند نشرها في هذه الصفحة. استمرار استخدام الموقع أو خدماتنا بعد أي تغيير يعني قبول الشروط المحدَّثة." },
      { title: "12. التواصل", body: "يجب إرسال الأسئلة المتعلقة بهذه الشروط إلى contact@arafion.com. نهدف إلى الرد خلال يومي عمل." },
    ],
  },
};

export function getPrivacyContent(locale: Locale) {
  return PRIVACY[locale] ?? PRIVACY.en;
}

export function getTermsContent(locale: Locale) {
  return TERMS[locale] ?? TERMS.en;
}
