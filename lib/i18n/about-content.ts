import { applySiteCopy } from "@/lib/site/config";
import { isIsraelOnlySite, scrubNonIsraelPlaces } from "@/lib/site/geography";
import { type Locale } from "./translations";
import type { LocaleRecord } from "./locale-record";

type AboutCard = {
  index: string;
  title: string;
  description: string;
  items: string[];
  proof: string;
};

type AboutContent = {
  topBar: string;
  hero: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whatIs: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    quote: string;
  };
  whatWeBuild: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cards: AboutCard[];
  };
  howWeThink: {
    eyebrow: string;
    heading: string;
    cards: { n: string; title: string; body: string }[];
  };
  howWeWork: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: { n: string; title: string; body: string }[];
  };
  proof: {
    eyebrow: string;
    heading: string;
    subheading: string;
    categories: { label: string; description: string; examples: string[] }[];
  };
  difference: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  name: {
    eyebrow: string;
    body: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
  };
  clients: {
    eyebrow: string;
    heading: string;
    subheading: string;
    types: string[];
    closing: string;
  };
  doNotDo: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

const ABOUT_CONTENT: LocaleRecord<AboutContent> = {
  en: {
    topBar: "About",
    hero: {
      eyebrow: "About Arafion",
      title: "We build the systems behind serious digital execution.",
      body1:
        "Arafion is a hybrid execution studio building websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems for businesses that need more than surface-level digital work.",
      body2:
        "We work across software engineering, AI, data, production, and visual systems. Our role is not only to design attractive interfaces or deliver isolated assets. We help clients turn ideas, workflows, campaigns, and visual concepts into usable systems that can be launched, operated, measured, and improved.",
      primaryCta: "See our work",
      secondaryCta: "Start a project",
    },
    whatIs: {
      eyebrow: "What Arafion is",
      heading: "Arafion is not a traditional agency.",
      body1:
        "Most agencies separate strategy, design, development, data, production, and marketing into disconnected services. That creates weak execution: a website that does not connect to the campaign, a dashboard without a real workflow, renders that never become sales assets, or an AI feature that does not fit the business.",
      body2:
        "Arafion is built differently. We combine engineering, AI, data systems, creative production, and architectural visualization into one execution pipeline. That allows us to build complete digital systems - from public-facing websites and SaaS platforms to internal tools, dashboards, campaign infrastructure, and cinematic 3D sales visuals.",
      quote:
        "We do not sell isolated deliverables. We build systems that help businesses present, operate, sell, and scale.",
    },
    whatWeBuild: {
      eyebrow: "What we build",
      heading: "Six execution lines.",
      subheading: "Each one can stand alone, but the real strength appears when they connect into one system.",
      cards: [
        {
          index: "01",
          title: "Software & Product Engineering",
          description:
            "We build full-stack products, SaaS platforms, internal tools, dashboards, client portals, and workflow systems.",
          items: [
            "SaaS MVPs",
            "Admin dashboards",
            "Client portals",
            "Internal operating systems",
            "Multi-tenant platforms",
            "Authentication and RBAC",
            "Heavy CRUD systems",
            "Browser-based production tools",
            "E-commerce systems",
            "Maintenance systems",
          ],
          proof:
            "Systems like NileRoute OS, SignalsFrame, Draftly, and Evo2 Variant Intelligence show full-stack product thinking across logistics, media, design, and research workflows.",
        },
        {
          index: "02",
          title: "Websites & Digital Presence",
          description:
            "We build websites that explain the business clearly, present proof, capture leads, and support growth.",
          items: [
            "Landing pages",
            "Corporate websites",
            "Portfolio websites",
            "Healthcare websites",
            "Architecture websites",
            "E-commerce storefronts",
            "SEO-ready pages",
            "CMS integrations",
            "Analytics setup",
            "Maintenance",
          ],
          proof:
            "Client-facing websites such as GeoFlex360 and Cabinet Chiropratique focus on business credibility, service presentation, SEO, contact flows, and trust-building.",
        },
        {
          index: "03",
          title: "Intelligence, Data & AI",
          description:
            "We turn scattered workflows and data into AI-assisted systems, dashboards, and decision interfaces.",
          items: [
            "AI copilots",
            "LLM API integrations",
            "Workflow automation",
            "Document intelligence",
            "Research assistants",
            "Decision-support systems",
            "Custom BI dashboards",
            "ETL/data pipelines",
            "Executive consoles",
            "Geospatial dashboards",
            "Market/risk intelligence interfaces",
          ],
          proof:
            "Evo2 Variant Intelligence, Atlas GEOINT, Atlas Intelligence, and Intelligence Console demonstrate this layer across genomics research, geospatial dashboards, and executive intelligence systems.",
        },
        {
          index: "04",
          title: "Marketing, Campaigns & Production",
          description:
            "We build the campaign infrastructure, creative production pipeline, tracking layer, and reporting structure behind growth systems.",
          items: [
            "Meta / Google / TikTok setup",
            "Campaign planning",
            "Landing pages",
            "Tracking and pixel implementation",
            "Creative production pipeline",
            "Post-production workflows",
            "Monthly reporting structures",
            "CRM and lead flow setup",
            "Client training and handoff",
          ],
          proof:
            "Our strength is the technical and production layer: campaign setup, creative systems, tracking, post-production, reporting, and client enablement - not generic social media management.",
        },
        {
          index: "05",
          title: "Architecture Visualization & 3D Sales Systems",
          description:
            "We transform plans, models, and design references into cinematic renders, interactive walkthroughs, and sales-ready visual systems.",
          items: [
            "Interior renders",
            "Exterior renders",
            "Kitchen and room visualization",
            "3D modeling from 2D plans",
            "Virtual walkthroughs",
            "Three.js web showcases",
            "Real estate sales visuals",
            "Social media render packs",
            "Portfolio and project pages",
            "Before/after presentations",
          ],
          proof:
            "Some architecture and rendering projects are confidential. Selected renders, before/after visuals, and delivered outputs can be shown publicly with permission.",
        },
        {
          index: "06",
          title: "Strategy, Scoping & Delivery Systems",
          description:
            "Before we build, we clarify the scope, architecture, business objective, timeline, and delivery path.",
          items: [
            "Project audit",
            "Technical scoping",
            "MVP roadmap",
            "Feature prioritization",
            "System architecture",
            "Delivery milestones",
            "QA process",
            "Launch planning",
            "Training and handoff",
            "Maintenance roadmap",
          ],
          proof: "Serious work fails when scope is vague. This layer protects both the client and the build.",
        },
      ],
    },
    howWeThink: {
      eyebrow: "How we think",
      heading: "Five principles that shape every project.",
      cards: [
        {
          n: "01",
          title: "Systems before deliverables",
          body: "A website is not only a website. A dashboard is not only charts. A render is not only an image. Each output should connect to a business system: lead generation, sales, operations, decision-making, training, or product usage.",
        },
        {
          n: "02",
          title: "Execution must be visible",
          body: "Clients should know what is being built, why it matters, what stage it is in, and what happens next. We structure projects around scope, milestones, deliverables, QA, launch, and handoff.",
        },
        {
          n: "03",
          title: "Technology must serve the workflow",
          body: "We do not add AI, dashboards, 3D, or automation because they sound advanced. We use them when they improve speed, clarity, quality, decision-making, or user experience.",
        },
        {
          n: "04",
          title: "Proof matters more than claims",
          body: "Arafion's portfolio is separated clearly between client work, internal products, prototypes, research dashboards, and confidential work. We avoid pretending that demos are enterprise deployments or prototypes are finished products.",
        },
        {
          n: "05",
          title: "Build for launch, then improvement",
          body: "The first launch is not the end. Good systems need iteration: maintenance, reporting, optimization, new modules, better content, stronger visuals, and clearer workflows.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "How we work",
      heading: "Seven stages from goal to growth.",
      subheading: "Every project starts by understanding the real outcome. Then we scope, design, build, test, launch, and support the system.",
      steps: [
        { n: "01", title: "Diagnose", body: "We clarify the business goal, users, workflow, assets, constraints, and success criteria." },
        { n: "02", title: "Scope", body: "We define what needs to be built, what should wait, what data/assets are required, and what the delivery path looks like." },
        { n: "03", title: "Design", body: "We design the user experience, visual direction, system structure, and interaction model." },
        { n: "04", title: "Build", body: "We implement the frontend, backend, integrations, AI workflows, dashboards, renders, production assets, or campaign infrastructure." },
        { n: "05", title: "Test", body: "We check performance, usability, responsiveness, data correctness, content, visuals, and edge cases." },
        { n: "06", title: "Launch", body: "We deploy, configure analytics/tracking, prepare handoff material, and train the client when needed." },
        { n: "07", title: "Improve", body: "We support the next iteration through maintenance, reporting, optimization, campaigns, or new features." },
      ],
    },
    proof: {
      eyebrow: "Proof",
      heading: "Proof across multiple types of work.",
      subheading: "Our work is organized into clear categories so clients can understand what has been delivered, what is internal, what is a prototype, and what is confidential.",
      categories: [
        {
          label: "Client work",
          description: "Real business websites and digital systems delivered for clients across industries such as topography, healthcare, architecture, and e-commerce.",
          examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"],
        },
        {
          label: "Product systems",
          description: "Internal and productized systems that show Arafion's ability to build full-stack platforms, SaaS products, and advanced interfaces.",
          examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"],
        },
        {
          label: "Intelligence platforms",
          description: "Research dashboards, enterprise-style consoles, data interfaces, and geospatial workstations.",
          examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"],
        },
        {
          label: "Confidential client work",
          description: "Projects where the client name is private, but approved visuals and outputs can be shown.",
          examples: [
            "Confidential interior render series",
            "Confidential kitchen visualization projects",
            "Confidential virtual walkthroughs",
            "Confidential campaign production systems",
          ],
        },
      ],
    },
    difference: {
      eyebrow: "Why clients work with Arafion",
      heading: "Five reasons that come up again and again.",
      items: [
        {
          title: "One pipeline instead of disconnected vendors",
          body: "A website, campaign, dashboard, render, and AI workflow can all connect. Arafion reduces the fragmentation between strategy, engineering, visuals, production, and delivery.",
        },
        {
          title: "Technical depth beyond surface design",
          body: "We can build interfaces, databases, APIs, authentication, dashboards, AI workflows, rendering systems, and deployment pipelines - not only landing pages.",
        },
        {
          title: "Visual quality with engineering structure",
          body: "For architecture, real estate, and campaigns, we connect visual production with websites, quote flows, portfolio systems, and sales assets.",
        },
        {
          title: "Honest project classification",
          body: "Client work, internal products, prototypes, demos, and confidential work are labeled clearly. That protects trust.",
        },
        {
          title: "Built for business outcomes",
          body: "Every project is connected to a business need: credibility, leads, sales, operations, automation, decision-making, visualization, or product launch.",
        },
      ],
    },
    name: {
      eyebrow: "The name",
      body: "Arafion was built around a simple idea: serious digital work needs both imagination and operating discipline. The name represents a studio designed to move between engineering, intelligence, production, and visual systems without losing execution quality.",
    },
    team: {
      eyebrow: "The team",
      heading: "Built by a focused technical team.",
      body1: "Arafion operates as a focused execution studio. Depending on the project, we combine product engineering, design, AI development, data systems, rendering, production, and campaign infrastructure into a lean delivery team.",
      body2: "Arafion is founder-led and built around hands-on execution. The studio works with a focused network of technical and creative collaborators when projects require specialized support.",
    },
    clients: {
      eyebrow: "Who we work with",
      heading: "Clients who need serious digital execution.",
      subheading: "We work with clients who need serious digital execution, not generic online presence.",
      types: [
        "Architecture firms",
        "Interior designers",
        "Real estate teams",
        "Healthcare practices",
        "E-commerce brands",
        "B2B service companies",
        "Founders building SaaS or MVPs",
        "Businesses needing dashboards or internal tools",
        "Teams exploring AI workflows",
        "Brands needing campaign infrastructure and production systems",
      ],
      closing:
        "The best clients come with a real problem, decision-making authority, available assets, and a willingness to build properly. If the scope is unclear, we start with scoping before execution.",
    },
    doNotDo: {
      eyebrow: "What we do not do",
      heading: "Six things clients can count on us not doing.",
      items: [
        "We do not sell fake AI-powered features without a real workflow.",
        "We do not present prototypes as proven enterprise deployments.",
        "We do not build cheap template websites with no strategy.",
        "We do not promise campaign results without the right offer, budget, assets, and tracking.",
        "We do not start complex projects without scope, milestones, and clear ownership.",
        "We do not disclose confidential client work without permission.",
      ],
    },
    finalCta: {
      eyebrow: "Start here",
      heading: "Have a system, product, campaign, or visual experience that needs building?",
      body: "Start with the project goal. We will help define the scope, delivery path, and right execution model.",
      primaryCta: "Start a project",
      secondaryCta: "See case studies",
    },
  },
  fr: {
    topBar: "A propos",
    hero: {
      eyebrow: "A propos d'Arafion",
      title: "Nous construisons les systemes derriere une execution digitale serieuse.",
      body1:
        "Arafion est un studio d'execution hybride qui conçoit et construit des sites web, des produits SaaS, des flux IA, des tableaux de bord, des infrastructures marketing et des systemes de visualisation architecturale pour les entreprises qui ont besoin de plus qu'un simple travail numerique en surface.",
      body2:
        "Nous travaillons sur l'ingenierie logicielle, l'IA, la donnée, la production et les systemes visuels. Notre role n'est pas seulement de dessiner de belles interfaces ou de livrer des assets isoles. Nous aidons les clients a transformer des idees, des workflows, des campagnes et des concepts visuels en systemes exploitables, lancables, mesurables et ameliorables.",
      primaryCta: "Voir nos realisations",
      secondaryCta: "Demarrer un projet",
    },
    whatIs: {
      eyebrow: "Ce qu'est Arafion",
      heading: "Arafion n'est pas une agence traditionnelle.",
      body1:
        "La plupart des agences separent la strategie, le design, le developpement, la donnée, la production et le marketing en services disjoints. Cela produit une execution faible: un site qui ne se connecte pas a la campagne, un tableau de bord sans vrai workflow, des rendus qui ne deviennent jamais des assets commerciaux, ou une fonctionnalite IA qui ne correspond pas au besoin de l'entreprise.",
      body2:
        "Arafion fonctionne autrement. Nous reunissons l'ingenierie, l'IA, les systemes de données, la production creative et la visualisation architecturale dans un seul pipeline d'execution. Cela nous permet de construire des systemes numeriques complets - des sites publics et plateformes SaaS aux outils internes, tableaux de bord, infrastructures de campagne et visuels 3D cinematographiques.",
      quote:
        "Nous ne vendons pas des livrables isoles. Nous construisons des systemes qui aident les entreprises a presenter, operer, vendre et se developper.",
    },
    whatWeBuild: {
      eyebrow: "Ce que nous construisons",
      heading: "Six lignes d'execution.",
      subheading: "Elles peuvent vivre seules, mais leur vraie force apparait lorsqu'elles s'assemblent en un seul systeme.",
      cards: [
        {
          index: "01",
          title: "Ingenierie logicielle et produit",
          description: "Nous construisons des produits full-stack, des plateformes SaaS, des outils internes, des tableaux de bord, des portails clients et des systemes de workflow.",
          items: [
            "MVP SaaS",
            "Tableaux de bord admin",
            "Portails clients",
            "Systemes d'exploitation internes",
            "Plateformes multi-tenant",
            "Authentification et RBAC",
            "Systemes CRUD lourds",
            "Outils de production dans le navigateur",
            "Systemes e-commerce",
            "Systemes de maintenance",
          ],
          proof: "Des systemes comme NileRoute OS, SignalsFrame, Draftly et Evo2 Variant Intelligence montrent une pensee produit full-stack sur la logistique, les medias, le design et la recherche.",
        },
        {
          index: "02",
          title: "Sites web et presence digitale",
          description: "Nous construisons des sites qui expliquent clairement l'activite, presentent des preuves, captent des leads et soutiennent la croissance.",
          items: [
            "Landing pages",
            "Sites d'entreprise",
            "Sites portfolio",
            "Sites sante",
            "Sites d'architecture",
            "Boutiques e-commerce",
            "Pages optimisees SEO",
            "Integrations CMS",
            "Configuration analytique",
            "Maintenance",
          ],
          proof: "Des sites orientés client comme GeoFlex360 et Cabinet Chiropratique se concentrent sur la credibilite, la presentation des services, le SEO, les flux de contact et la confiance.",
        },
        {
          index: "03",
          title: "Intelligence, donnees et IA",
          description: "Nous transformons des workflows eparpilles et de la donnée en systemes assistes par IA, tableaux de bord et interfaces de decision.",
          items: [
            "Copilotes IA",
            "Integrations API LLM",
            "Automatisation des workflows",
            "Intelligence documentaire",
            "Assistants de recherche",
            "Systemes d'aide a la decision",
            "Tableaux de bord BI sur mesure",
            "Pipelines ETL / données",
            "Consoles executives",
            "Tableaux geospatiaux",
            "Interfaces d'intelligence marche / risque",
          ],
          proof: "Evo2 Variant Intelligence, Atlas GEOINT, Atlas Intelligence et Intelligence Console montrent cette couche a travers la recherche genomique, les dashboards geospatiaux et les systemes d'intelligence executive.",
        },
        {
          index: "04",
          title: "Marketing, campagnes et production",
          description: "Nous construisons l'infrastructure de campagne, le pipeline creatif, la couche de tracking et la structure de reporting derriere les systemes de croissance.",
          items: [
            "Configuration Meta / Google / TikTok",
            "Planification de campagne",
            "Landing pages",
            "Tracking et pixels",
            "Pipeline de production creative",
            "Workflows de post-production",
            "Structures de reporting mensuel",
            "Mise en place CRM et lead flow",
            "Formation client et passation",
          ],
          proof: "Notre force se situe dans la couche technique et production: mise en place des campagnes, systemes creatifs, tracking, post-production, reporting et accompagnement client - pas dans la simple gestion des reseaux sociaux.",
        },
        {
          index: "05",
          title: "Visualisation architecturale et ventes 3D",
          description: "Nous transformons plans, modeles et references de design en rendus cinematographiques, visites interactives et systemes visuels prets a vendre.",
          items: [
            "Rendus interieur",
            "Rendus exterieur",
            "Visualisation cuisine et pieces",
            "Modelisation 3D depuis plans 2D",
            "Visites virtuelles",
            "Vitrines web Three.js",
            "Visuels commerciaux immobilier",
            "Packs de rendus pour reseaux sociaux",
            "Pages portfolio et projets",
            "Presentations avant / apres",
          ],
          proof: "Certains projets d'architecture et de rendu sont confidentiels. Des rendus selectionnes, des visuels avant / apres et des livrables peuvent etre rendus publics avec autorisation.",
        },
        {
          index: "06",
          title: "Strategie, cadrage et livraison",
          description: "Avant de construire, nous clarifions le perimetre, l'architecture, l'objectif business, le calendrier et le chemin de livraison.",
          items: [
            "Audit projet",
            "Cadrage technique",
            "Roadmap MVP",
            "Priorisation des fonctionnalites",
            "Architecture systeme",
            "Jalons de livraison",
            "Process QA",
            "Planification du lancement",
            "Formation et passation",
            "Roadmap de maintenance",
          ],
          proof: "Un travail serieux echoue quand le scope est vague. Cette couche protege a la fois le client et la construction.",
        },
      ],
    },
    howWeThink: {
      eyebrow: "Notre approche",
      heading: "Cinq principes qui guident chaque projet.",
      cards: [
        {
          n: "01",
          title: "Les systemes avant les livrables",
          body: "Un site n'est pas qu'un site. Un tableau de bord n'est pas qu'un ensemble de graphiques. Un rendu n'est pas qu'une image. Chaque resultat doit se relier a un systeme metier: generation de leads, ventes, operations, decision, formation ou usage produit.",
        },
        {
          n: "02",
          title: "L'execution doit etre visible",
          body: "Les clients doivent savoir ce qui est construit, pourquoi c'est important, ou en est le projet et ce qui vient ensuite. Nous structurons les projets autour du scope, des jalons, des livrables, de la QA, du lancement et de la passation.",
        },
        {
          n: "03",
          title: "La technologie doit servir le workflow",
          body: "Nous n'ajoutons pas de l'IA, des dashboards, de la 3D ou de l'automatisation parce que cela sonne avance. Nous les utilisons lorsqu'ils ameliorent la vitesse, la clarté, la qualite, la prise de decision ou l'experience utilisateur.",
        },
        {
          n: "04",
          title: "La preuve vaut plus que les promesses",
          body: "Le portfolio d'Arafion distingue clairement le travail client, les produits internes, les prototypes, les dashboards de recherche et les travaux confidentiels. Nous evitons de faire passer des demos pour des deploiements enterprise ou des prototypes pour des produits finis.",
        },
        {
          n: "05",
          title: "Construire pour le lancement, puis ameliorer",
          body: "Le premier lancement n'est pas la fin. Les bons systemes ont besoin d'iteration: maintenance, reporting, optimisation, nouveaux modules, meilleur contenu, visuels plus forts et workflows plus clairs.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "Notre methode",
      heading: "Sept etapes, de l'objectif a la croissance.",
      subheading: "Chaque projet commence par la comprehension du vrai resultat. Ensuite nous cadrons, designons, construisons, testons, lancons et accompagnons le systeme.",
      steps: [
        { n: "01", title: "Diagnostiquer", body: "Nous clarifions l'objectif metier, les utilisateurs, le workflow, les assets, les contraintes et les criteres de succes." },
        { n: "02", title: "Cadrer", body: "Nous definissons ce qui doit etre construit, ce qui peut attendre, quelles donnees et quels assets sont necessaires et a quoi ressemble le chemin de livraison." },
        { n: "03", title: "Designer", body: "Nous concevons l'experience utilisateur, la direction visuelle, la structure du systeme et le modele d'interaction." },
        { n: "04", title: "Construire", body: "Nous implementons le frontend, le backend, les integrations, les workflows IA, les tableaux de bord, les rendus, les assets de production ou l'infrastructure de campagne." },
        { n: "05", title: "Tester", body: "Nous verifions la performance, l'utilisabilite, la responsivite, l'exactitude des donnees, le contenu, les visuels et les cas limites." },
        { n: "06", title: "Lancer", body: "Nous deployons, configurons l'analytics et le tracking, preparons la passation et formons le client lorsque c'est necessaire." },
        { n: "07", title: "Ameliorer", body: "Nous soutenons la suite via la maintenance, le reporting, l'optimisation, les campagnes ou de nouvelles fonctionnalites." },
      ],
    },
    proof: {
      eyebrow: "Preuves",
      heading: "Des preuves sur plusieurs types de travail.",
      subheading: "Notre travail est organise en categories claires pour que les clients comprennent ce qui a ete livre, ce qui est interne, ce qui est un prototype et ce qui est confidentiel.",
      categories: [
        {
          label: "Travail client",
          description: "De vrais sites et systemes numeriques livrés a des clients dans des secteurs comme la topographie, la sante, l'architecture et l'e-commerce.",
          examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"],
        },
        {
          label: "Systemes produit",
          description: "Des systemes internes et productises qui montrent la capacite d'Arafion a construire des plateformes full-stack, des produits SaaS et des interfaces avancees.",
          examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"],
        },
        {
          label: "Plateformes d'intelligence",
          description: "Dashboards de recherche, consoles de type enterprise, interfaces de données et stations de travail geospatiales.",
          examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"],
        },
        {
          label: "Travail client confidentiel",
          description: "Des projets dont le nom du client est prive, mais dont les visuels et livrables approuves peuvent etre montrés.",
          examples: [
            "Serie de rendus interieur confidentiels",
            "Projets de visualisation cuisine confidentiels",
            "Visites virtuelles confidentielles",
            "Systemes de production de campagne confidentiels",
          ],
        },
      ],
    },
    difference: {
      eyebrow: "Pourquoi les clients travaillent avec Arafion",
      heading: "Cinq raisons qui reviennent encore et encore.",
      items: [
        {
          title: "Un seul pipeline au lieu de prestataires disperses",
          body: "Un site, une campagne, un tableau de bord, un rendu et un workflow IA peuvent tous etre connectes. Arafion reduit la fragmentation entre strategie, ingenierie, visuel, production et livraison.",
        },
        {
          title: "Une profondeur technique au-dela du design de surface",
          body: "Nous savons construire des interfaces, bases de donnees, APIs, authentification, tableaux de bord, workflows IA, systemes de rendu et pipelines de deployment - pas seulement des landing pages.",
        },
        {
          title: "Qualite visuelle avec structure d'ingenierie",
          body: "Pour l'architecture, l'immobilier et les campagnes, nous relions production visuelle, sites web, flux de devis, systemes de portfolio et supports de vente.",
        },
        {
          title: "Classification honnete des projets",
          body: "Travail client, produits internes, prototypes, demos et travaux confidentiels sont etiquetes clairement. Cela protege la confiance.",
        },
        {
          title: "Concu pour des resultats business",
          body: "Chaque projet est relie a un besoin metier: credibilite, leads, ventes, operations, automatisation, decision, visualisation ou lancement de produit.",
        },
      ],
    },
    name: {
      eyebrow: "Le nom",
      body: "Arafion est ne d'une idee simple: un travail numerique serieux a besoin a la fois d'imagination et de discipline operationnelle. Le nom represente un studio capable de passer de l'ingenierie a l'intelligence, a la production et aux systemes visuels sans perdre en qualite d'execution.",
    },
    team: {
      eyebrow: "L'equipe",
      heading: "Concue par une equipe technique focalisee.",
      body1: "Arafion fonctionne comme un studio d'execution concentre. Selon le projet, nous combinons ingenierie produit, design, developpement IA, systemes de données, rendu, production et infrastructure de campagne dans une equipe de livraison legere.",
      body2: "Arafion est dirige par son fondateur et repose sur une execution tres concrète. Le studio travaille avec un reseau ciblé de collaborateurs techniques et creatifs lorsque certains projets demandent un soutien specialise.",
    },
    clients: {
      eyebrow: "Avec qui nous travaillons",
      heading: "Des clients qui ont besoin d'une execution digitale serieuse.",
      subheading: "Nous travaillons avec des clients qui ont besoin d'une execution digitale serieuse, pas d'une simple presence en ligne.",
      types: [
        "Agences d'architecture",
        "Designers d'interieur",
        "Equipes immobilieres",
        "Cabinets de sante",
        "Marques e-commerce",
        "Entreprises de services B2B",
        "Fondateurs construisant un SaaS ou un MVP",
        "Entreprises ayant besoin de tableaux de bord ou d'outils internes",
        "Equipes explorant des workflows IA",
        "Marques ayant besoin d'une infrastructure de campagne et de systemes de production",
      ],
      closing:
        "Les meilleurs clients arrivent avec un vrai probleme, une capacite de decision, des assets disponibles et la volonte de construire correctement. Si le scope est flou, nous commençons par le cadrage avant l'execution.",
    },
    doNotDo: {
      eyebrow: "Ce que nous ne faisons pas",
      heading: "Six choses sur lesquelles les clients peuvent compter: nous ne les faisons pas.",
      items: [
        "Nous ne vendons pas de fausses fonctionnalites 'AI-powered' sans vrai workflow.",
        "Nous ne presentons pas des prototypes comme des deploiements enterprise prouvés.",
        "Nous ne construisons pas de sites templates bon marche sans strategie.",
        "Nous ne promettons pas de resultats de campagne sans la bonne offre, le budget, les assets et le tracking.",
        "Nous ne demarrons pas de projets complexes sans scope, jalons et responsabilites claires.",
        "Nous ne divulguons pas de travaux clients confidentiels sans autorisation.",
      ],
    },
    finalCta: {
      eyebrow: "Commencez ici",
      heading: "Vous avez un systeme, un produit, une campagne ou une experience visuelle a construire ?",
      body: "Commencez par l'objectif du projet. Nous vous aiderons a definir le scope, le chemin de livraison et le bon modele d'execution.",
      primaryCta: "Demarrer un projet",
      secondaryCta: "Voir les etudes de cas",
    },
  },
  tr: {
    topBar: "Hakkimizda",
    hero: {
      eyebrow: "Arafion hakkinda",
      title: "Ciddi dijital uretimin arkasindaki sistemleri kuruyoruz.",
      body1:
        "Arafion; web siteleri, SaaS urunleri, AI is akislari, panolar, pazarlama altyapisi ve mimari gorsellestirme sistemleri gelistiren hibrit bir uygulama stüdyosudur. Yüzeyde kalan dijital işten fazlasına ihtiyaç duyan şirketler için çalışıyoruz.",
      body2:
        "Yazılım mühendisliği, yapay zeka, veri, üretim ve görsel sistemler arasında çalışıyoruz. Rolümüz yalnızca hoş arayüzler tasarlamak veya tekil varlıklar teslim etmek değil. Fikirleri, iş akışlarını, kampanyaları ve görsel konseptleri başlatılabilir, işletilebilir, ölçülebilir ve geliştirilebilir sistemlere dönüştürüyoruz.",
      primaryCta: "Calismalarimizi gor",
      secondaryCta: "Proje baslat",
    },
    whatIs: {
      eyebrow: "Arafion nedir",
      heading: "Arafion geleneksel bir ajans degildir.",
      body1:
        "Cogu ajans strateji, tasarim, gelistirme, veri, uretim ve pazarlamayi birbirinden bagimsiz hizmetlere ayirir. Bu da zayif uygulama yaratir: kampanyaya baglanmayan bir site, gercek bir is akisi olmayan bir pano, hicbir zaman satis varligina donusmeyen gorseller ya da isletmeye uymayan bir AI ozelligi.",
      body2:
        "Arafion farkli calisir. Muhendislik, AI, veri sistemleri, yaratici uretim ve mimari gorsellestirmeyi tek bir uygulama boru hattinda birlestiriyoruz. Bu sayede kamuya acik web sitelerinden ve SaaS platformlarindan ic araclere, panolara, kampanya altyapisina ve sinematik 3D satis gorsellerine kadar eksiksiz dijital sistemler kurabiliyoruz.",
      quote:
        "Biz tekil teslimatlar satmiyoruz. Isletmelerin kendini sunmasina, operasyon kurmasina, satmasina ve buyumesine yardim eden sistemler kuruyoruz.",
    },
    whatWeBuild: {
      eyebrow: "Neler yapiyoruz",
      heading: "Alti uygulama cizgisi.",
      subheading: "Her biri tek basina durabilir; ama asil guc, hepsi tek bir sisteme baglandiginda ortaya cikar.",
      cards: [
        {
          index: "01",
          title: "Yazilim ve Urun Muhendisligi",
          description: "Gercek is akislari icin full-stack urunler, SaaS platformlari, ic araclar, panolar, musteri portallari ve workflow sistemleri kuruyoruz.",
          items: [
            "SaaS MVP'leri",
            "Yonetici panolari",
            "Musteri portallari",
            "Ic isletim sistemleri",
            "Cok kiracili platformlar",
            "Kimlik dogrulama ve RBAC",
            "Agir CRUD sistemleri",
            "Tarayici tabanli uretim araclari",
            "E-ticaret sistemleri",
            "Bakim sistemleri",
          ],
          proof: "NileRoute OS, SignalsFrame, Draftly ve Evo2 Variant Intelligence gibi sistemler; lojistik, medya, tasarim ve arastirma akislari boyunca full-stack urun dusuncesini gosteriyor.",
        },
        {
          index: "02",
          title: "Web Siteleri ve Dijital Varlik",
          description: "Işi net anlatan, kanit sunan, lead toplayan ve buyumeyi destekleyen siteler kuruyoruz.",
          items: [
            "Landing page'ler",
            "Kurumsal siteler",
            "Portfolyo siteleri",
            "Saglik siteleri",
            "Mimari siteler",
            "E-ticaret vitrini",
            "SEO'ya hazir sayfalar",
            "CMS entegrasyonlari",
            "Analitik kurulumu",
            "Bakim",
          ],
          proof: "GeoFlex360 ve Cabinet Chiropratique gibi musteriye yonelik siteler; guvenilirlik, hizmet sunumu, SEO, iletisim akislari ve guven olusturmaya odaklanir.",
        },
        {
          index: "03",
          title: "Zeka, Veri ve AI",
          description: "Daginik is akislari ve veriyi AI destekli sistemlere, panolara ve karar arayuzlerine dönüştürüyoruz.",
          items: [
            "AI copilot'lar",
            "LLM API entegrasyonlari",
            "Workflow otomasyonu",
            "Dokuman zekasi",
            "Arastirma asistanlari",
            "Karar destek sistemleri",
            "Ozel BI panolari",
            "ETL / veri hatlari",
            "Yonetici konsollari",
            "Jeo-uzamsal panolar",
            "Piyasa / risk zekasi arayuzleri",
          ],
          proof: "Evo2 Variant Intelligence, Atlas GEOINT, Atlas Intelligence ve Intelligence Console; genomik arastirma, jeo-uzamsal panolar ve yonetici zeka sistemleri boyunca bu katmani gosteriyor.",
        },
        {
          index: "04",
          title: "Pazarlama, Kampanyalar ve Uretim",
          description: "Buyume sistemlerinin arkasindaki kampanya altyapisini, yaratici uretim hattini, takip katmanini ve raporlama yapisini kuruyoruz.",
          items: [
            "Meta / Google / TikTok kurulumu",
            "Kampanya planlama",
            "Landing page'ler",
            "Tracking ve pixel uygulamasi",
            "Yaratici uretim hattı",
            "Post-prodüksiyon is akislari",
            "Aylik raporlama yapilari",
            "CRM ve lead flow kurulumu",
            "Musteri egitimi ve devir",
          ],
          proof: "Guclu oldugumuz alan teknik ve uretim katmani: kampanya kurulumu, yaratici sistemler, takip, post-prodüksiyon, raporlama ve musteri destegi - klasik sosyal medya yonetimi degil.",
        },
        {
          index: "05",
          title: "Mimari Gorsellestirme ve 3D Satis Sistemleri",
          description: "Planlari, modelleri ve tasarim referanslarini sinematik render'lara, interaktif gezintilere ve satisa hazir gorsel sistemlere donusturuyoruz.",
          items: [
            "Ic mekan renderlari",
            "Dis mekan renderlari",
            "Mutfak ve oda gorsellestirme",
            "2D plandan 3D modelleme",
            "Sanal gezintiler",
            "Three.js web vitrini",
            "Emlak satis gorselleri",
            "Sosyal medya render paketleri",
            "Portfolyo ve proje sayfalari",
            "Once / sonra sunumlari",
          ],
          proof: "Bazi mimari ve render projeleri gizlidir. Secili render'lar, once / sonra gorselleri ve teslimler izinle kamuya aciklanabilir.",
        },
        {
          index: "06",
          title: "Strateji, Kapsam ve Teslim Sistemleri",
          description: "Insaya baslamadan once kapsamı, mimariyi, is hedefini, zaman cizelgesini ve teslim yolunu netlestiriyoruz.",
          items: [
            "Proje denetimi",
            "Teknik kapsam belirleme",
            "MVP yol haritasi",
            "Ozellik onceliklendirme",
            "Sistem mimarisi",
            "Teslim kilometre taslari",
            "QA sureci",
            "Lansman planlama",
            "Egitim ve devir",
            "Bakim yol haritasi",
          ],
          proof: "Kapsam belirsiz oldugunda ciddi işler basarisiz olur. Bu katman hem musteriyi hem de build'i korur.",
        },
      ],
    },
    howWeThink: {
      eyebrow: "Nasil dusunuyoruz",
      heading: "Her projeyi sekillendiren bes ilke.",
      cards: [
        { n: "01", title: "Teslimattan once sistem", body: "Bir site sadece site degildir. Bir pano sadece grafikler degildir. Bir render sadece bir goruntu degildir. Her cikti bir is sistemine baglanmalidir: lead uretimi, satis, operasyon, karar verme, egitim veya urun kullanimi." },
        { n: "02", title: "Uygulama gorunur olmali", body: "Musteriler neyin yapildigini, neden onemli oldugunu, hangi asamada oldugunu ve sirada ne oldugunu bilmelidir. Projeleri kapsam, kilometre taslari, teslimatlar, QA, lansman ve devir etrafinda kuruyoruz." },
        { n: "03", title: "Teknoloji workflow'a hizmet etmeli", body: "AI, pano, 3D veya otomasyonu sadece 'ileri' gorundugu icin eklemiyoruz. Bunlari hiz, netlik, kalite, karar verme veya kullanici deneyimini iyilestirdiklerinde kullaniyoruz." },
        { n: "04", title: "Kanıt, iddiadan daha önemlidir", body: "Arafion portfolyosu musteri calismalari, ic urunler, prototipler, arastirma panolari ve gizli calismalar arasinda net sekilde ayrilir. Demo'lari enterprise kurulum, prototipleri de bitmis urun gibi gostermez." },
        { n: "05", title: "Lansman icin kur, sonra iyilestir", body: "Ilk lansman son degildir. Iyi sistemler yineleme ister: bakım, raporlama, optimizasyon, yeni moduller, daha iyi içerik, daha guclu gorseller ve daha net workflow'lar." },
      ],
    },
    howWeWork: {
      eyebrow: "Nasil calisiyoruz",
      heading: "Hedeften buyumeye yedi asama.",
      subheading: "Her proje gercek sonuclari anlamakla baslar. Sonra kapsar, tasarlar, kurar, test eder, yayina alir ve sistemi destekleriz.",
      steps: [
        { n: "01", title: "Teshis", body: "Is hedefini, kullanicilari, workflow'u, varliklari, kisitlari ve basari kriterlerini netlestiririz." },
        { n: "02", title: "Kapsam", body: "Ne yapilmasi gerektigini, neyin bekleyebilecegini, hangi veri / asset'lerin gerektigini ve teslim yolunu tanimlariz." },
        { n: "03", title: "Tasarim", body: "Kullanici deneyimini, gorsel yonu, sistem yapisini ve etkileşim modelini tasarlarız." },
        { n: "04", title: "Kurulum", body: "Frontend, backend, entegrasyonlar, AI akislari, panolar, render'lar, uretim varliklari veya kampanya altyapisini uygulariz." },
        { n: "05", title: "Test", body: "Performans, kullanilabilirlik, duyarlilik, veri dogrulugu, icerik, gorseller ve sinir durumlarini kontrol ederiz." },
        { n: "06", title: "Yayin", body: "Yayina alir, analytics / tracking'i kurar, devir materyallerini hazirlar ve gerekiyorsa musteriye egitim veririz." },
        { n: "07", title: "Iyilestirme", body: "Bakim, raporlama, optimizasyon, kampanyalar veya yeni ozelliklerle sonraki iterasyonu destekleriz." },
      ],
    },
    proof: {
      eyebrow: "Kanıt",
      heading: "Farkli is turleri boyunca kanit.",
      subheading: "Calismalarimiz net kategorilere ayrilir; boylece musteriler neyin teslim edilmis, neyin ic, neyin prototip ve neyin gizli oldugunu anlayabilir.",
      categories: [
        { label: "Musteri calismasi", description: "Topografi, saglik, mimari ve e-ticaret gibi alanlarda musteriye teslim edilmis gerçek siteler ve dijital sistemler.", examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"] },
        { label: "Urun sistemleri", description: "Arafion'un full-stack platformlar, SaaS urunleri ve ileri arayuzler kurabildigini gosteran ic ve urunlestirilmis sistemler.", examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"] },
        { label: "Zeka platformlari", description: "Arastirma panolari, enterprise tarzı konsollar, veri arayuzleri ve jeo-uzamsal calisma alanlari.", examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"] },
        { label: "Gizli musteri calismasi", description: "Musteri adinin gizli oldugu ama onayli gorsel ve ciktilarin gosterilebildigi projeler.", examples: ["Gizli ic mekan render serisi", "Gizli mutfak gorsellestirme projeleri", "Gizli sanal gezinti projeleri", "Gizli kampanya uretim sistemleri"] },
      ],
    },
    difference: {
      eyebrow: "Neden Arafion ile calisiyorlar",
      heading: "Tekrar tekrar duydugumuz bes neden.",
      items: [
        { title: "Daginik tedarikciler yerine tek pipeline", body: "Bir site, kampanya, pano, render ve AI workflow'u birbirine baglanabilir. Arafion strateji, muhendislik, gorsel, uretim ve teslim arasindaki daginikligi azaltir." },
        { title: "Yuzey tasariminin otesinde teknik derinlik", body: "Sadece landing page degil; arayuzler, veritabanlari, API'ler, kimlik dogrulama, panolar, AI workflow'lari, render sistemleri ve deployment pipeline'lari kurabiliriz." },
        { title: "Muhendislik yapisiyla görsel kalite", body: "Mimari, gayrimenkul ve kampanyalarda gorsel uretimi; web siteleri, teklif akislari, portfolyo sistemleri ve satis varliklariyla bagliyoruz." },
        { title: "Dürüst proje siniflandirmasi", body: "Musteri calismalari, ic urunler, prototipler, demolar ve gizli calismalar acikca etiketlenir. Bu guveni korur." },
        { title: "Is sonucuna gore kurulum", body: "Her proje; guvenilirlik, lead, satis, operasyon, otomasyon, karar verme, gorsellestirme veya urun lansmani gibi bir ihtiyaca baglidir." },
      ],
    },
    name: {
      eyebrow: "Isim",
      body: "Arafion basit bir fikir etrafinda kuruldu: ciddi dijital is hem hayal gucu hem de operasyon disiplini ister. Isim, muhendislik, zeka, uretim ve gorsel sistemler arasinda kalite kaybetmeden hareket edebilen bir stüdyoyu temsil eder.",
    },
    team: {
      eyebrow: "Ekip",
      heading: "Odakli bir teknik ekip tarafindan kuruldu.",
      body1: "Arafion odakli bir uygulama stüdyosu olarak calisir. Projeye gore urun muhendisligi, tasarim, AI gelistirme, veri sistemleri, render, uretim ve kampanya altyapisini hafif bir teslim ekibinde birlestiririz.",
      body2: "Arafion kurucu liderliginde ve uygulamaya odakli sekilde insa edilir. Studio, ozellesmis destek gerektiren projelerde secili teknik ve yaratici is ortaklariyla calisir.",
    },
    clients: {
      eyebrow: "Kimlerle calisiyoruz",
      heading: "Ciddi dijital uygulamaya ihtiyaci olan musteriler.",
      subheading: "Genel bir online varlik degil, ciddi dijital uygulama isteyen musterilerle calisiyoruz.",
      types: [
        "Mimarlik ofisleri",
        "Ic mimarlar",
        "Gayrimenkul ekipleri",
        "Saglik uygulamalari",
        "E-ticaret markalari",
        "B2B hizmet sirketleri",
        "SaaS veya MVP kuran kurucular",
        "Pano veya ic arac ihtiyaci olan sirketler",
        "AI workflow'larini arastiran ekipler",
        "Kampanya altyapisi ve uretim sistemleri gereken markalar",
      ],
      closing:
        "En iyi musteriler gercek bir sorun, karar alma yetkisi, hazir asset'ler ve dogru sekilde inşa etme istegiyle gelir. Scope belirsizse, uygulamadan once cadraga baslariz.",
    },
    doNotDo: {
      eyebrow: "Neleri yapmiyoruz",
      heading: "Musterilerin bize guvenebilecegi alti sey: bunlari yapmayiz.",
      items: [
        "Gercek bir workflow olmadan sahte 'AI-powered' ozellikler satmayiz.",
        "Prototipleri kanitlanmis enterprise kurulumlar gibi sunmayiz.",
        "Stratejisi olmayan ucuz şablon siteler kurmayiz.",
        "Dogru teklif, butce, asset ve tracking olmadan kampanya sonucu vadetmeyiz.",
        "Scope, kilometre tasi ve net sahiplik olmadan karmasik projelere baslamayiz.",
        "Izin olmadan gizli musteri calismalarini aciklamayiz.",
      ],
    },
    finalCta: {
      eyebrow: "Buradan basla",
      heading: "Kurulmasi gereken bir sistem, urun, kampanya veya gorsel deneyiminiz mi var?",
      body: "Proje hedefiyle baslayin. Scope'u, teslim yolunu ve dogru uygulama modelini tanimlamaniza yardim edecegiz.",
      primaryCta: "Proje baslat",
      secondaryCta: "Vaka calismalarini gor",
    },
  },
  ar: {
    topBar: "من نحن",
    hero: {
      eyebrow: "عن Arafion",
      title: "نبني الانظمة التي تقف خلف التنفيذ الرقمي الجاد.",
      body1:
        "Arafion هو استوديو تنفيذ هجين يبني المواقع الالكترونية ومنتجات SaaS ومسارات الذكاء الاصطناعي ولوحات البيانات وبنية التسويق وانظمة التصور المعماري للشركات التي تحتاج الى اكثر من عمل رقمي سطحي.",
      body2:
        "نعمل عبر هندسة البرمجيات والذكاء الاصطناعي والبيانات والانتاج والانظمة البصرية. دورنا لا يقتصر على تصميم واجهات جميلة او تسليم عناصر منفصلة؛ نحن نحول الافكار وسير العمل والحملات والمفاهيم البصرية الى انظمة قابلة للاطلاق والتشغيل والقياس والتحسين.",
      primaryCta: "شاهد اعمالنا",
      secondaryCta: "ابدأ مشروعاً",
    },
    whatIs: {
      eyebrow: "ما هو Arafion",
      heading: "Arafion ليس وكالة تقليدية.",
      body1:
        "معظم الوكالات تفصل الاستراتيجية والتصميم والتطوير والبيانات والانتاج والتسويق في خدمات متفرقة. هذا ينتج تنفيذًا ضعيفًا: موقع لا يرتبط بالحملة، لوحة بلا سير عمل حقيقي، تصاميم لا تتحول الى اصول بيع، او ميزة ذكاء اصطناعي لا تناسب العمل.",
      body2:
        "Arafion يعمل بشكل مختلف. نحن ندمج الهندسة والذكاء الاصطناعي وانظمة البيانات والانتاج الابداعي والتصور المعماري في خط تنفيذ واحد. وهذا يتيح لنا بناء انظمة رقمية متكاملة - من المواقع العامة ومنصات SaaS الى الادوات الداخلية ولوحات البيانات وبنية الحملات والمرئيات السينمائية ثلاثية الابعاد.",
      quote:
        "نحن لا نبيع مخرجات منفصلة. نحن نبني انظمة تساعد الشركات على العرض والتشغيل والبيع والتوسع.",
    },
    whatWeBuild: {
      eyebrow: "ما الذي نبنيه",
      heading: "ستة مسارات تنفيذية.",
      subheading: "كل واحد منها يمكن ان يعمل وحده، لكن القوة الحقيقية تظهر عندما تتصل كلها في نظام واحد.",
      cards: [
        {
          index: "01",
          title: "هندسة البرمجيات والمنتج",
          description: "نبني منتجات full-stack ومنصات SaaS وادوات داخلية ولوحات تحكم وبوابات عملاء وانظمة سير عمل.",
          items: [
            "MVPs SaaS",
            "لوحات تحكم ادارية",
            "بوابات العملاء",
            "انظمة تشغيل داخلية",
            "منصات متعددة المستأجرين",
            "المصادقة و RBAC",
            "انظمة CRUD مكثفة",
            "ادوات انتاج داخل المتصفح",
            "انظمة التجارة الالكترونية",
            "انظمة الصيانة",
          ],
          proof: "انظمة مثل NileRoute OS وSignalsFrame وDraftly وEvo2 Variant Intelligence تُظهر تفكيرًا منتجياً full-stack عبر اللوجستيات والاعلام والتصميم وسير عمل البحث.",
        },
        {
          index: "02",
          title: "المواقع والحضور الرقمي",
          description: "نبني مواقع تشرح العمل بوضوح وتعرض الادلة وتلتقط العملاء المحتملين وتدعم النمو.",
          items: [
            "Landing pages",
            "مواقع الشركات",
            "مواقع المحافظ",
            "مواقع الرعاية الصحية",
            "مواقع العمارة",
            "متاجر التجارة الالكترونية",
            "صفحات جاهزة للسيو",
            "تكاملات CMS",
            "اعداد التحليلات",
            "الصيانة",
          ],
          proof: "مواقع مواجهة للعملاء مثل GeoFlex360 وCabinet Chiropratique تركز على المصداقية وعرض الخدمات وتحسين السيو ومسارات التواصل وبناء الثقة.",
        },
        {
          index: "03",
          title: "الذكاء والبيانات والـ AI",
          description: "نحوّل سير العمل والبيانات المتناثرة الى انظمة مدعومة بالذكاء الاصطناعي ولوحات تحكم وواجهات قرار.",
          items: [
            "مساعدات AI",
            "تكاملات API مع LLM",
            "اوتوماتيكية سير العمل",
            "ذكاء المستندات",
            "مساعدو البحث",
            "انظمة دعم القرار",
            "لوحات BI مخصصة",
            "مسارات ETL / البيانات",
            "واجهات تنفيذية",
            "لوحات جغرافية مكانية",
            "واجهات ذكاء السوق / المخاطر",
          ],
          proof: "Evo2 Variant Intelligence وAtlas GEOINT وAtlas Intelligence وIntelligence Console يوضحون هذه الطبقة عبر ابحاث الجينوم واللوحات الجغرافية والانظمة التنفيذية.",
        },
        {
          index: "04",
          title: "التسويق والحملات والانتاج",
          description: "نبني بنية الحملات وخط الانتاج الابداعي وطبقة التتبع وهيكل التقارير خلف انظمة النمو.",
          items: [
            "اعداد Meta / Google / TikTok",
            "تخطيط الحملات",
            "Landing pages",
            "التتبع والـ pixels",
            "خط الانتاج الابداعي",
            "سير عمل ما بعد الانتاج",
            "هياكل التقارير الشهرية",
            "اعداد CRM وتدفق العملاء المحتملين",
            "تدريب العميل والتسليم",
          ],
          proof: "قوتنا الحقيقية في الطبقة التقنية والانتاجية: اعداد الحملات والأنظمة الابداعية والتتبع وما بعد الانتاج والتقارير وتمكين العميل - وليس ادارة وسائل التواصل بشكل عام.",
        },
        {
          index: "05",
          title: "التصور المعماري والانظمة البيعية ثلاثية الابعاد",
          description: "نحوّل المخططات والنماذج ومراجع التصميم الى رندرات سينمائية وجولات تفاعلية وانظمة بصرية جاهزة للبيع.",
          items: [
            "رندرات داخلية",
            "رندرات خارجية",
            "تصور المطابخ والغرف",
            "نمذجة 3D من مخططات 2D",
            "جولات افتراضية",
            "واجهات Web عبر Three.js",
            "مرئيات بيع عقاري",
            "حزم رندرات للسوشيال",
            "صفحات المحافظ والمشاريع",
            "عروض قبل / بعد",
          ],
          proof: "بعض مشاريع العمارة والرندرة سرية. يمكن عرض رندرات مختارة ومرئيات قبل / بعد والمخرجات المسلمة بشكل عام بعد الحصول على الموافقة.",
        },
        {
          index: "06",
          title: "الاستراتيجية وتحديد النطاق وانظمة التسليم",
          description: "قبل البناء نوضح النطاق والهيكل والهدف التجاري والجدول الزمني ومسار التسليم.",
          items: [
            "تدقيق المشروع",
            "تحديد النطاق التقني",
            "خارطة طريق MVP",
            "ترتيب اولويات الخصائص",
            "معمارية النظام",
            "مراحل التسليم",
            "عملية QA",
            "تخطيط الاطلاق",
            "التدريب والتسليم",
            "خارطة طريق الصيانة",
          ],
          proof: "العمل الجاد يفشل عندما يكون النطاق غامضاً. هذه الطبقة تحمي العميل والبناء معاً.",
        },
      ],
    },
    howWeThink: {
      eyebrow: "كيف نفكر",
      heading: "خمسة مبادئ تشكل كل مشروع.",
      cards: [
        { n: "01", title: "الانظمة قبل المخرجات", body: "الموقع ليس مجرد موقع. لوحة التحكم ليست مجرد رسوم. الرندر ليس مجرد صورة. كل مخرج يجب ان يرتبط بنظام عمل: توليد العملاء المحتملين، المبيعات، العمليات، اتخاذ القرار، التدريب، او استخدام المنتج." },
        { n: "02", title: "يجب ان يكون التنفيذ مرئياً", body: "يجب ان يعرف العملاء ما الذي يُبنى ولماذا يهم وفي اي مرحلة وما الذي سيحدث بعد ذلك. نحن ننظم المشاريع حول النطاق والمعالم والمخرجات وQA والاطلاق والتسليم." },
        { n: "03", title: "يجب ان تخدم التكنولوجيا سير العمل", body: "نحن لا نضيف AI او لوحات البيانات او 3D او الاوتوماتيكية فقط لانها تبدو متقدمة. نستخدمها عندما تحسن السرعة او الوضوح او الجودة او اتخاذ القرار او تجربة المستخدم." },
        { n: "04", title: "البرهان اهم من الادعاءات", body: "محفظة Arafion مقسمة بوضوح بين اعمال العملاء والمنتجات الداخلية والنماذج الاولية ولوحات البحث والاعمال السرية. لا نتظاهر بان العروض التجريبية هي نشرات مؤسسية او ان النماذج الاولية منتجات مكتملة." },
        { n: "05", title: "ابنِ للاطلاق ثم حسّن", body: "الاطلاق الاول ليس النهاية. الانظمة الجيدة تحتاج الى تكرار: صيانة، تقارير، تحسين، وحدات جديدة، محتوى افضل، مرئيات اقوى، وسير عمل اوضح." },
      ],
    },
    howWeWork: {
      eyebrow: "كيف نعمل",
      heading: "سبع مراحل من الهدف الى النمو.",
      subheading: "كل مشروع يبدأ بفهم النتيجة الحقيقية. ثم نحدد النطاق، نصمم، نبني، نختبر، نطلق، وندعم النظام.",
      steps: [
        { n: "01", title: "التشخيص", body: "نوضح الهدف التجاري والمستخدمين وسير العمل والاصول والقيود ومعايير النجاح." },
        { n: "02", title: "تحديد النطاق", body: "نحدد ما الذي يجب بناؤه، وما الذي يمكن ان ينتظر، وما البيانات والاصول المطلوبة، وكيف يبدو مسار التسليم." },
        { n: "03", title: "التصميم", body: "نصمم تجربة المستخدم والاتجاه البصري وبنية النظام ونموذج التفاعل." },
        { n: "04", title: "البناء", body: "ننفذ الواجهة الامامية والخلفية والتكاملات ومسارات AI ولوحات البيانات والرندرات واصول الانتاج او بنية الحملات." },
        { n: "05", title: "الاختبار", body: "نراجع الاداء وسهولة الاستخدام والاستجابة وصحة البيانات والمحتوى والمرئيات والحالات الطرفية." },
        { n: "06", title: "الاطلاق", body: "ننشر النظام ونضبط التحليلات والتتبع ونجهز مواد التسليم ونقوم بتدريب العميل عند الحاجة." },
        { n: "07", title: "التحسين", body: "ندعم المرحلة التالية عبر الصيانة والتقارير والتحسين والحملات او الخصائص الجديدة." },
      ],
    },
    proof: {
      eyebrow: "البرهان",
      heading: "برهان عبر انواع مختلفة من العمل.",
      subheading: "نرتب اعمالنا في فئات واضحة حتى يفهم العملاء ما تم تسليمه، وما هو داخلي، وما هو نموذج اولي، وما هو سري.",
      categories: [
        { label: "اعمال العملاء", description: "مواقع وانظمة رقمية حقيقية تم تسليمها لعملاء في مجالات مثل الطوبوغرافيا والرعاية الصحية والعمارة والتجارة الالكترونية.", examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"] },
        { label: "انظمة المنتج", description: "انظمة داخلية ومنتجة تثبت قدرة Arafion على بناء منصات full-stack ومنتجات SaaS وواجهات متقدمة.", examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"] },
        { label: "منصات الذكاء", description: "لوحات بحث، Consoles بنمط مؤسسي، واجهات بيانات ومحطات عمل جغرافية مكانية.", examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"] },
        { label: "اعمال سرية للعملاء", description: "مشاريع يبقى اسم العميل فيها خاصاً، لكن يمكن عرض المرئيات والمخرجات المعتمدة.", examples: ["سلسلة رندرات داخلية سرية", "مشاريع تصور مطابخ سرية", "جولات افتراضية سرية", "انظمة انتاج حملات سرية"] },
      ],
    },
    difference: {
      eyebrow: "لماذا يعمل العملاء مع Arafion",
      heading: "خمسة اسباب تتكرر مرة بعد مرة.",
      items: [
        { title: "خط انتاج واحد بدلاً من موردين منفصلين", body: "يمكن ربط موقع وحملة ولوحة تحكم ورندر ومسار AI معاً. Arafion يقلل التجزئة بين الاستراتيجية والهندسة والمرئيات والانتاج والتسليم." },
        { title: "عمق تقني يتجاوز التصميم السطحي", body: "يمكننا بناء الواجهات وقواعد البيانات وواجهات API والمصادقة ولوحات التحكم ومسارات AI وانظمة الرندرة وخطوط النشر - وليس فقط صفحات الهبوط." },
        { title: "جودة بصرية مع بنية هندسية", body: "في العمارة والعقار والحملات نربط الانتاج البصري بالمواقع ومسارات التسعير وانظمة المحافظ واصول البيع." },
        { title: "تصنيف صادق للمشاريع", body: "اعمال العملاء والمنتجات الداخلية والنماذج الاولية والعروض والعمل السري تُصنّف بوضوح. هذا يحافظ على الثقة." },
        { title: "مبني على نتائج تجارية", body: "كل مشروع مرتبط بحاجة تجارية: المصداقية، العملاء المحتملون، المبيعات، العمليات، الاوتوماتيكية، اتخاذ القرار، التصور، او اطلاق المنتج." },
      ],
    },
    name: {
      eyebrow: "الاسم",
      body: "بُني Arafion حول فكرة بسيطة: العمل الرقمي الجاد يحتاج الى الخيال والانضباط التشغيلي معاً. الاسم يمثل استوديو قادراً على الانتقال بين الهندسة والذكاء والانتاج والانظمة البصرية دون فقدان جودة التنفيذ.",
    },
    team: {
      eyebrow: "الفريق",
      heading: "مبني بواسطة فريق تقني مركز.",
      body1: "Arafion يعمل كاستوديو تنفيذ مركز. بحسب المشروع، نجمع هندسة المنتج والتصميم وتطوير AI وانظمة البيانات والرندرة والانتاج وبنية الحملات ضمن فريق تسليم خفيف.",
      body2: "Arafion يقوده المؤسس ويعتمد على تنفيذ عملي مباشر. ويعمل الاستوديو مع شبكة مركزة من المتعاونين التقنيين والابداعيين عندما تحتاج المشاريع دعماً متخصصاً.",
    },
    clients: {
      eyebrow: "مع من نعمل",
      heading: "عملاء يحتاجون الى تنفيذ رقمي جاد.",
      subheading: "نعمل مع عملاء يحتاجون الى تنفيذ رقمي جاد، وليس مجرد حضور رقمي عام.",
      types: [
        "مكاتب العمارة",
        "مصممو الديكور الداخلي",
        "فرق العقار",
        "الممارسات الصحية",
        "علامات التجارة الالكترونية",
        "شركات الخدمات B2B",
        "مؤسسون يبنون SaaS او MVP",
        "شركات تحتاج لوحات تحكم او ادوات داخلية",
        "فرق تستكشف مسارات AI",
        "علامات تحتاج بنية حملات وانظمة انتاج",
      ],
      closing:
        "افضل العملاء يأتون بمشكلة حقيقية وسلطة قرار واصول جاهزة واستعداد للبناء بشكل صحيح. اذا كان النطاق غير واضح، نبدأ بتحديده قبل التنفيذ.",
    },
    doNotDo: {
      eyebrow: "ما الذي لا نفعله",
      heading: "ستة امور يمكن للعملاء ان يثقوا باننا لن نفعلها.",
      items: [
        "لا نبيع ميزات 'AI-powered' مزيفة بدون سير عمل حقيقي.",
        "لا نقدم النماذج الاولية على انها نشرات مؤسسية مثبتة.",
        "لا نبني مواقع قالب رخيصة بلا استراتيجية.",
        "لا نعد بنتائج حملات بدون العرض والميزانية والاصول والتتبع المناسب.",
        "لا نبدأ مشاريع معقدة بدون نطاق ومعالم وملكية واضحة.",
        "لا نفصح عن اعمال العملاء السرية بدون تصريح.",
      ],
    },
    finalCta: {
      eyebrow: "ابدأ هنا",
      heading: "هل لديك نظام او منتج او حملة او تجربة بصرية تحتاج الى بناء؟",
      body: "ابدأ بهدف المشروع. سنساعدك على تحديد النطاق ومسار التسليم ونموذج التنفيذ المناسب.",
      primaryCta: "ابدأ مشروعاً",
      secondaryCta: "شاهد دراسات الحالة",
    },
  },
  he: {
    topBar: "אודות",
    hero: {
      eyebrow: "אודות {brand}",
      title: "אנחנו בונים את המערכות שמאחורי ביצוע דיגיטלי רציני.",
      body1:
        "{brand} הוא מעבדת הנדסת מוצר היברידית שבונה אתרים, מוצרי SaaS, זרימות עבודה מבוססות AI, דשבורדים, תשתיות דיגיטליות ומערכות ויזואליזציה לעסקים שזקוקים ליותר מעבודה דיגיטלית שטחית.",
      body2:
        "אנחנו עובדים בהנדסת תוכנה, AI, נתונים, הפקה ומערכות ויזואליות. התפקיד שלנו אינו רק לעצב ממשקים יפים או למסור נכסים בודדים. אנחנו עוזרים ללקוחות להפוך רעיונות, זרימות עבודה ותפיסות מוצר למערכות שמישות — שאפשר להשיק, להפעיל, למדוד ולשפר.",
      primaryCta: "לצפייה בעבודות",
      secondaryCta: "התחלת פרויקט",
    },
    whatIs: {
      eyebrow: "מה זה {brand}",
      heading: "{brand} אינו סוכנות מסורתית.",
      body1:
        "רוב הסוכנויות מפרידות בין אסטרטגיה, עיצוב, פיתוח, נתונים, הפקה ושיווק לשירותים מנותקים. זה יוצר ביצוע חלש: אתר שלא מתחבר לתהליך העסקי, דשבורד בלי זרימת עבודה אמיתית, ויזואליזציות שלא הופכות לנכסי מכירה, או פיצ׳ר AI שלא מתאים לעסק.",
      body2:
        "{brand} בנוי אחרת. אנחנו משלבים הנדסה, AI, מערכות נתונים, הפקה יצירתית וויזואליזציה בצינור ביצוע אחד. כך אפשר לבנות מערכות דיגיטליות שלמות — מאתרים ציבוריים ופלטפורמות SaaS ועד כלים פנימיים, דשבורדים, תשתיות מוצר וממשקים ויזואליים מוכנים לשימוש.",
      quote:
        "אנחנו לא מוכרים מסירות מבודדות. אנחנו בונים מערכות שעוזרות לעסקים להציג, להפעיל, למכור ולהתרחב.",
    },
    whatWeBuild: {
      eyebrow: "מה אנחנו בונים",
      heading: "שישה קווי ביצוע.",
      subheading: "כל אחד יכול לעמוד לבד, אבל הכוח האמיתי מופיע כשהם מתחברים למערכת אחת.",
      cards: [
        {
          index: "01",
          title: "הנדסת תוכנה ומוצר",
          description:
            "אנחנו בונים מוצרי full-stack, פלטפורמות SaaS, כלים פנימיים, דשבורדים, פורטלים ללקוחות ומערכות זרימת עבודה.",
          items: [
            "MVP ל־SaaS",
            "דשבורדים אדמין",
            "פורטלים ללקוחות",
            "מערכות תפעול פנימיות",
            "פלטפורמות רב־דייריות",
            "אימות ו־RBAC",
            "מערכות CRUD כבדות",
            "כלי הפקה בדפדפן",
            "מערכות מסחר אלקטרוני",
            "מערכות תחזוקה",
          ],
          proof:
            "מערכות כמו NileRoute OS, SignalsFrame, Draftly ו־Evo2 Variant Intelligence מציגות חשיבת מוצר full-stack בלוגיסטיקה, מדיה, עיצוב וזרימות מחקר.",
        },
        {
          index: "02",
          title: "אתרים ונוכחות דיגיטלית",
          description:
            "אנחנו בונים אתרים שמסבירים את העסק בבהירות, מציגים הוכחות, קולטים לידים ותומכים בצמיחה.",
          items: [
            "דפי נחיתה",
            "אתרים ארגוניים",
            "אתרי תיק עבודות",
            "אתרי בריאות",
            "אתרי אדריכלות",
            "חנויות מסחר אלקטרוני",
            "דפים מוכנים ל־SEO",
            "אינטגרציות CMS",
            "הקמת אנליטיקס",
            "תחזוקה",
          ],
          proof:
            "אתרים פונים ללקוח כמו GeoFlex360 ו־Cabinet Chiropratique מתמקדים באמינות עסקית, הצגת שירותים, SEO, זרימות יצירת קשר ובניית אמון.",
        },
        {
          index: "03",
          title: "מודיעין, נתונים ו־AI",
          description:
            "אנחנו הופכים זרימות עבודה ונתונים מפוזרים למערכות בסיוע AI, דשבורדים וממשקי החלטה.",
          items: [
            "קופיילוטים מבוססי AI",
            "אינטגרציות API ל־LLM",
            "אוטומציית זרימות עבודה",
            "מודיעין מסמכים",
            "עוזרי מחקר",
            "מערכות תמיכה בהחלטות",
            "דשבורדי BI מותאמים",
            "צינורות ETL / נתונים",
            "קונסולות למנהלים",
            "דשבורדים גיאו־מרחביים",
            "ממשקי מודיעין שוק / סיכון",
          ],
          proof:
            "Evo2 Variant Intelligence, Atlas GEOINT, Atlas Intelligence ו־Intelligence Console מדגימים את השכבה הזו במחקר גנומי, דשבורדים גיאו־מרחביים ומערכות מודיעין למנהלים.",
        },
        {
          index: "04",
          title: "תשתיות צמיחה, מעקב והפקה",
          description:
            "אנחנו בונים את תשתית הצמיחה, צינור ההפקה, שכבת המעקב ומבנה הדיווח שמאחורי מערכות דיגיטליות שמניעות תוצאות.",
          items: [
            "הקמת Meta / Google / TikTok",
            "תכנון קמפיינים",
            "דפי נחיתה",
            "מעקב ויישום פיקסלים",
            "צינור הפקה יצירתית",
            "זרימות עבודה לפוסט־פרודקשן",
            "מבני דיווח חודשיים",
            "הקמת CRM וזרימת לידים",
            "הדרכת לקוח והעברה",
          ],
          proof:
            "החוזק שלנו בשכבה הטכנית וההפקתית: הקמת מערכות, מעקב, פוסט־פרודקשן, דיווח והעצמת לקוח — לא ניהול רשתות חברתיות גנרי.",
        },
        {
          index: "05",
          title: "ויזואליזציה ומערכות תצוגה תלת־ממדיות",
          description:
            "אנחנו הופכים תוכניות, מודלים והפניות עיצוב לרנדרים ברורים, סיורים אינטראקטיביים ומערכות ויזואליות מוכנות לשימוש עסקי.",
          items: [
            "רנדרים פנימיים",
            "רנדרים חיצוניים",
            "ויזואליזציה של מטבחים וחללים",
            "מידול 3D מתוכניות 2D",
            "סיורים וירטואליים",
            "תצוגות Web ב־Three.js",
            "ויזואלים לנדל״ן",
            "חבילות רנדר לרשתות חברתיות",
            "דפי תיק עבודות ופרויקטים",
            "מצגות לפני / אחרי",
          ],
          proof:
            "חלק מפרויקטי הוויזואליזציה והרנדרינג חסויים. רנדרים נבחרים, ויזואלים של לפני / אחרי ומסירות מאושרות יכולים להיות מוצגים בפומבי באישור.",
        },
        {
          index: "06",
          title: "אסטרטגיה, היקף ומערכות מסירה",
          description:
            "לפני שבונים — מבהירים את ההיקף, הארכיטקטורה, היעד העסקי, לוח הזמנים ומסלול המסירה.",
          items: [
            "אודיט פרויקט",
            "הגדרת היקף טכני",
            "מפת דרכים ל־MVP",
            "תיעדוף פיצ׳רים",
            "ארכיטקטורת מערכת",
            "אבני דרך למסירה",
            "תהליך QA",
            "תכנון השקה",
            "הדרכה והעברה",
            "מפת דרכים לתחזוקה",
          ],
          proof: "עבודה רצינית נכשלת כשההיקף מעורפל. השכבה הזו מגנה גם על הלקוח וגם על הבנייה.",
        },
      ],
    },
    howWeThink: {
      eyebrow: "איך אנחנו חושבים",
      heading: "חמישה עקרונות שמעצבים כל פרויקט.",
      cards: [
        {
          n: "01",
          title: "מערכות לפני מסירות",
          body: "אתר אינו רק אתר. דשבורד אינו רק גרפים. רנדר אינו רק תמונה. כל פלט צריך להתחבר למערכת עסקית: יצירת לידים, מכירות, תפעול, קבלת החלטות, הדרכה או שימוש במוצר.",
        },
        {
          n: "02",
          title: "הביצוע חייב להיות גלוי",
          body: "לקוחות צריכים לדעת מה נבנה, למה זה חשוב, באיזה שלב זה נמצא ומה קורה אחר כך. אנחנו מבנים פרויקטים סביב היקף, אבני דרך, מסירות, QA, השקה והעברה.",
        },
        {
          n: "03",
          title: "הטכנולוגיה חייבת לשרת את זרימת העבודה",
          body: "אנחנו לא מוסיפים AI, דשבורדים, 3D או אוטומציה כי זה נשמע מתקדם. אנחנו משתמשים בהם כשהם משפרים מהירות, בהירות, איכות, קבלת החלטות או חוויית משתמש.",
        },
        {
          n: "04",
          title: "הוכחה חשובה יותר מהצהרות",
          body: "תיק העבודות של {brand} מופרד בבירור בין עבודת לקוח, מוצרים פנימיים, אבות־טיפוס, דשבורדי מחקר ועבודה חסויה. אנחנו נמנעים מלהציג דמואים כפריסות enterprise או אבות־טיפוס כמוצרים גמורים.",
        },
        {
          n: "05",
          title: "לבנות להשקה, ואז לשפר",
          body: "ההשקה הראשונה אינה הסוף. מערכות טובות דורשות איטרציה: תחזוקה, דיווח, אופטימיזציה, מודולים חדשים, תוכן טוב יותר, ויזואלים חזקים יותר וזרימות עבודה ברורות יותר.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "איך אנחנו עובדים",
      heading: "שבעה שלבים מהיעד לצמיחה.",
      subheading: "כל פרויקט מתחיל בהבנת התוצאה האמיתית. אחר כך מגדירים היקף, מעצבים, בונים, בודקים, משחררים ותומכים במערכת.",
      steps: [
        { n: "01", title: "אבחון", body: "מבהירים את היעד העסקי, המשתמשים, זרימת העבודה, הנכסים, המגבלות וקריטריוני ההצלחה." },
        { n: "02", title: "היקף", body: "מגדירים מה צריך לבנות, מה יכול לחכות, אילו נתונים/נכסים נדרשים וכיצד נראה מסלול המסירה." },
        { n: "03", title: "עיצוב", body: "מעצבים את חוויית המשתמש, הכיוון הוויזואלי, מבנה המערכת ומודל האינטראקציה." },
        { n: "04", title: "בנייה", body: "מיישמים את ה־frontend, ה־backend, האינטגרציות, זרימות ה־AI, הדשבורדים, הוויזואלים, נכסי ההפקה או תשתית המערכת." },
        { n: "05", title: "בדיקה", body: "בודקים ביצועים, שימושיות, רספונסיביות, נכונות נתונים, תוכן, ויזואלים ומקרי קצה." },
        { n: "06", title: "השקה", body: "פורסים, מגדירים אנליטיקס/מעקב, מכינים חומרי העברה ומדריכים את הלקוח כשצריך." },
        { n: "07", title: "שיפור", body: "תומכים באיטרציה הבאה דרך תחזוקה, דיווח, אופטימיזציה או פיצ׳רים חדשים." },
      ],
    },
    proof: {
      eyebrow: "הוכחות",
      heading: "הוכחות על פני סוגי עבודה שונים.",
      subheading: "העבודה שלנו מאורגנת בקטגוריות ברורות כדי שלקוחות יבינו מה נמסר, מה פנימי, מה אב־טיפוס ומה חסוי.",
      categories: [
        {
          label: "עבודת לקוח",
          description: "אתרים ומערכות דיגיטליות אמיתיות שנמסרו ללקוחות בענפים כמו טופוגרפיה, בריאות, אדריכלות ומסחר אלקטרוני.",
          examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"],
        },
        {
          label: "מערכות מוצר",
          description: "מערכות פנימיות וממוסחרות שמראות את היכולת של {brand} לבנות פלטפורמות full-stack, מוצרי SaaS וממשקים מתקדמים.",
          examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"],
        },
        {
          label: "פלטפורמות מודיעין",
          description: "דשבורדי מחקר, קונסולות בסגנון enterprise, ממשקי נתונים ותחנות עבודה גיאו־מרחביות.",
          examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"],
        },
        {
          label: "עבודת לקוח חסויה",
          description: "פרויקטים שבהם שם הלקוח פרטי, אך ויזואלים ומסירות מאושרים יכולים להיות מוצגים.",
          examples: [
            "סדרת רנדרי פנים חסויה",
            "פרויקטי ויזואליזציית מטבחים חסויים",
            "סיורים וירטואליים חסויים",
            "מערכות הפקה ותשתית דיגיטלית חסויות",
          ],
        },
      ],
    },
    difference: {
      eyebrow: "למה לקוחות עובדים עם {brand}",
      heading: "חמש סיבות שחוזרות שוב ושוב.",
      items: [
        {
          title: "צינור אחד במקום ספקים מנותקים",
          body: "אתר, דשבורד, זרימת AI ומערכת ויזואלית יכולים להתחבר יחד. {brand} מצמצם את הפיצול בין אסטרטגיה, הנדסה, ויזואלים, הפקה ומסירה.",
        },
        {
          title: "עומק טכני מעבר לעיצוב שטחי",
          body: "אנחנו יכולים לבנות ממשקים, מסדי נתונים, APIs, אימות, דשבורדים, זרימות AI, מערכות תצוגה וצינורות פריסה — לא רק דפי נחיתה.",
        },
        {
          title: "איכות ויזואלית עם מבנה הנדסי",
          body: "באדריכלות, נדל״ן ומערכות מוצר אנחנו מחברים הפקה ויזואלית לאתרים, זרימות הצעת מחיר, מערכות תיק עבודות ונכסי מכירה.",
        },
        {
          title: "סיווג פרויקטים כנה",
          body: "עבודת לקוח, מוצרים פנימיים, אבות־טיפוס, דמואים ועבודה חסויה מסומנים בבירור. זה מגן על האמון.",
        },
        {
          title: "בנוי לתוצאות עסקיות",
          body: "כל פרויקט מחובר לצורך עסקי: אמינות, לידים, מכירות, תפעול, אוטומציה, קבלת החלטות, ויזואליזציה או השקת מוצר.",
        },
      ],
    },
    name: {
      eyebrow: "השם",
      body: "{brand} נבנה סביב רעיון פשוט: עבודה דיגיטלית רצינית דורשת גם דמיון וגם משמעת תפעולית. השם מייצג סטודיו שנועד לנוע בין הנדסה, מודיעין, הפקה ומערכות ויזואליות בלי לאבד איכות ביצוע.",
    },
    team: {
      eyebrow: "הצוות",
      heading: "נבנה על ידי צוות טכני ממוקד.",
      body1: "{brand} פועל כסטודיו ביצוע ממוקד. בהתאם לפרויקט, אנחנו משלבים הנדסת מוצר, עיצוב, פיתוח AI, מערכות נתונים, ויזואליזציה, הפקה ותשתיות דיגיטליות בצוות מסירה רזה.",
      body2: "{brand} מונחה על ידי המייסד ובנוי סביב ביצוע מעשי. הסטודיו עובד עם רשת ממוקדת של שותפים טכניים ויצירתיים כשפרויקטים דורשים תמיכה מתמחה.",
    },
    clients: {
      eyebrow: "עם מי אנחנו עובדים",
      heading: "לקוחות שזקוקים לביצוע דיגיטלי רציני.",
      subheading: "אנחנו עובדים עם לקוחות שזקוקים לביצוע דיגיטלי רציני — לא לנוכחות אונליין גנרית.",
      types: [
        "משרדי אדריכלות",
        "מעצבי פנים",
        "צוותי נדל״ן",
        "מרפאות ובריאות",
        "מותגי מסחר אלקטרוני",
        "חברות שירותי B2B",
        "מייסדים שבונים SaaS או MVP",
        "עסקים שזקוקים לדשבורדים או כלים פנימיים",
        "צוותים שחוקרים זרימות עבודה מבוססות AI",
        "מותגים שזקוקים לתשתיות צמיחה ומערכות הפקה",
      ],
      closing:
        "הלקוחות הטובים ביותר מגיעים עם בעיה אמיתית, סמכות החלטה, נכסים זמינים ונכונות לבנות כמו שצריך. אם ההיקף לא ברור — מתחילים בהגדרת היקף לפני הביצוע.",
    },
    doNotDo: {
      eyebrow: "מה אנחנו לא עושים",
      heading: "שישה דברים שלקוחות יכולים לסמוך שלא נעשה.",
      items: [
        "אנחנו לא מוכרים פיצ׳רים מזויפים של AI בלי זרימת עבודה אמיתית.",
        "אנחנו לא מציגים אבות־טיפוס כפריסות enterprise מוכחות.",
        "אנחנו לא בונים אתרי תבנית זולים בלי אסטרטגיה.",
        "אנחנו לא מבטיחים תוצאות צמיחה בלי הצעה נכונה, תקציב, נכסים ומעקב.",
        "אנחנו לא מתחילים פרויקטים מורכבים בלי היקף, אבני דרך ובעלות ברורה.",
        "אנחנו לא חושפים עבודת לקוח חסויה בלי אישור.",
      ],
    },
    finalCta: {
      eyebrow: "התחילו כאן",
      heading: "יש לכם מערכת, מוצר או חוויה דיגיטלית שצריך לבנות?",
      body: "התחילו מיעד הפרויקט. נעזור להגדיר את ההיקף, מסלול המסירה ומודל הביצוע הנכון.",
      primaryCta: "התחלת פרויקט",
      secondaryCta: "לצפייה בחקר מקרה",
    },
  },
};

export function getAboutContent(locale: Locale) {
  const content = applySiteCopy(ABOUT_CONTENT[locale] ?? ABOUT_CONTENT.en);
  if (!isIsraelOnlySite()) return content;
  return JSON.parse(
    scrubNonIsraelPlaces(JSON.stringify(content), locale),
  ) as typeof content;
}
