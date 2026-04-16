import type { Entity } from "@/types";

// All international entities for the agency portfolio map.
export const INTERNATIONAL_ENTITIES: Entity[] = [
  // ─────────── EU REGION ───────────
  {
    id: "eu-bloc",
    geoId: "eu-bloc",
    name: "Europe",
    region: "eu",
    level: "bloc",
    isOverview: true,
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Arafion's European portfolio spans fintech infrastructure in London, industrial IoT in Berlin, merchant analytics in Stockholm, and compliance automation in Tallinn. Our deepest European partnerships are in financial services and enterprise platforms.",
    legislation: [
      {
        id: "eu-revolut-fraud",
        billCode: "REV-2024",
        title: "Revolut — Real-Time Fraud Detection Engine",
        summary: "ML-powered fraud detection processing 150M+ monthly transactions with sub-100ms latency. Reduced false positives by 34%.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "backend-engineering", "data-engineering"],
        category: "ai-system",
        updatedDate: "2024-09-15",
      },
      {
        id: "eu-siemens-factory",
        billCode: "SIE-2025",
        title: "Siemens — Factory Digital Twin Platform",
        summary: "Industrial IoT platform managing 800+ factory sensors with predictive maintenance and 3D digital twin visualization.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "cloud-infrastructure", "mobile"],
        category: "platform-engineering",
        updatedDate: "2025-03-20",
      },
      {
        id: "eu-wise-compliance",
        billCode: "WSE-2024",
        title: "Wise — Multi-Jurisdiction Compliance Engine",
        summary: "Automated KYC/AML rules engine handling regulatory requirements across 80+ jurisdictions. Cut onboarding time by 60%.",
        stage: "Live",
        stance: "growth",
        impactTags: ["backend-engineering", "ai-ml", "api-development"],
        category: "platform-engineering",
        updatedDate: "2024-11-08",
      },
    ],
    keyFigures: [],
    news: [
      {
        id: "eu-news-1",
        headline: "Arafion Expands European Engineering Hub in Berlin",
        source: "TechCrunch",
        date: "2025-06-12",
        url: "#",
      },
    ],
  },

  // United Kingdom
  {
    id: "uk",
    geoId: "826",
    name: "United Kingdom",
    region: "eu",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "London is home to our largest European engagement — Revolut's fraud detection platform. We also work with Wise on compliance automation across 80+ jurisdictions.",
    legislation: [
      {
        id: "uk-revolut",
        billCode: "REV-2024",
        title: "Revolut — Payment Intelligence Platform",
        summary: "End-to-end fraud detection and payment routing engine. ML pipeline processes 150M+ monthly transactions with real-time risk scoring.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "backend-engineering", "data-engineering"],
        category: "ai-system",
        updatedDate: "2024-09-15",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Germany
  {
    id: "germany",
    geoId: "276",
    name: "Germany",
    region: "eu",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Our Berlin engagement with Siemens involves building the next generation of factory floor intelligence — digital twins, predictive maintenance, and operator mobile tools.",
    legislation: [
      {
        id: "de-siemens",
        billCode: "SIE-2025",
        title: "Siemens Digital — Factory Operating System",
        summary: "Industrial IoT platform managing 800+ sensors. Built digital twin visualization, predictive maintenance engine, and operator mobile app.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "cloud-infrastructure", "mobile"],
        category: "platform-engineering",
        updatedDate: "2025-03-20",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Sweden
  {
    id: "sweden",
    geoId: "752",
    name: "Sweden",
    region: "eu",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "growth",
    contextBlurb:
      "Stockholm — Klarna's merchant analytics dashboard used by 500K+ retailers. Built cohort analysis, revenue forecasting, and self-serve reporting tools.",
    legislation: [
      {
        id: "se-klarna",
        billCode: "KLA-2025",
        title: "Klarna — Merchant Intelligence Dashboard",
        summary: "Analytics platform for 500K+ merchants. Cohort analysis engine, revenue forecasting models, and self-serve reporting.",
        stage: "Live",
        stance: "growth",
        impactTags: ["data-engineering", "frontend-engineering", "ai-ml"],
        category: "data-dashboard",
        updatedDate: "2025-01-10",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Estonia
  {
    id: "estonia",
    geoId: "233",
    name: "Estonia",
    region: "eu",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "sprint",
    contextBlurb:
      "Tallinn — Wise's compliance automation engine handling KYC/AML across 80+ jurisdictions with automated document verification.",
    legislation: [
      {
        id: "ee-wise",
        billCode: "WSE-2024",
        title: "Wise — Multi-Jurisdiction Compliance Engine",
        summary: "Automated regulatory compliance with KYC/AML rules engine, document verification pipeline, and regulatory reporting across 80+ jurisdictions.",
        stage: "Live",
        stance: "growth",
        impactTags: ["backend-engineering", "ai-ml", "api-development"],
        category: "platform-engineering",
        updatedDate: "2024-11-08",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // ─────────── ASIA REGION ───────────
  {
    id: "asia-bloc",
    geoId: "asia-bloc",
    name: "Asia Pacific",
    region: "asia",
    level: "bloc",
    isOverview: true,
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Arafion's APAC portfolio spans ride-hailing intelligence in Singapore, creative AI in Tokyo, cloud platforms in Shenzhen, and payments infrastructure in Bangalore. We operate across the full spectrum of Asian tech ecosystems.",
    legislation: [
      {
        id: "asia-grab",
        billCode: "GRB-2024",
        title: "Grab — Driver Earnings Optimization",
        summary: "Demand prediction and earnings optimization for Southeast Asia's largest ride-hailing platform. ML models, real-time heatmaps, driver app features.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "mobile", "data-engineering"],
        category: "ai-system",
        updatedDate: "2024-08-20",
      },
      {
        id: "asia-sony",
        billCode: "SNY-2025",
        title: "Sony — Creative AI Studio",
        summary: "AI-powered creative tools for music and entertainment. Generative audio engine, rights management, and artist collaboration platform.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "product-design", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-02-14",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Singapore
  {
    id: "singapore",
    geoId: "702",
    name: "Singapore",
    region: "asia",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "Grab's driver intelligence platform — demand prediction and earnings optimization for the largest ride-hailing service in Southeast Asia.",
    legislation: [
      {
        id: "sg-grab",
        billCode: "GRB-2024",
        title: "Grab — Driver Intelligence Platform",
        summary: "ML-powered demand prediction and earnings optimization serving millions of drivers across Southeast Asia.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "mobile", "data-engineering"],
        category: "ai-system",
        updatedDate: "2024-08-20",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Japan
  {
    id: "japan",
    geoId: "392",
    name: "Japan",
    region: "asia",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "Tokyo — Sony's Creative AI Studio. Generative audio tools for music production, rights management, and artist collaboration platform.",
    legislation: [
      {
        id: "jp-sony",
        billCode: "SNY-2025",
        title: "Sony — Creative AI Studio",
        summary: "AI-powered creative tools for Sony's music and entertainment division. Generative audio, rights management, artist collaboration.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "product-design", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-02-14",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // China
  {
    id: "china",
    geoId: "156",
    name: "China",
    region: "asia",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "growth",
    contextBlurb:
      "Shenzhen — Building Tencent Cloud's developer experience platform. IDE integration, deployment pipelines, and observability dashboard.",
    legislation: [
      {
        id: "cn-tencent",
        billCode: "TEN-2026",
        title: "Tencent Cloud — Developer Experience Platform",
        summary: "Cloud developer tools including IDE integration, deployment pipelines, and observability dashboard for enterprise customers.",
        stage: "In Progress",
        stance: "growth",
        impactTags: ["devops", "cloud-infrastructure", "frontend-engineering"],
        category: "platform-engineering",
        updatedDate: "2026-01-15",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // India
  {
    id: "india",
    geoId: "356",
    name: "India",
    region: "asia",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Bangalore — Razorpay's merchant operating system powering payments, payroll, and lending for 10M+ Indian businesses.",
    legislation: [
      {
        id: "in-razorpay",
        billCode: "RZP-2025",
        title: "Razorpay — Merchant Operating System",
        summary: "Unified payments, payroll, and lending platform for 10M+ businesses. Orchestration layer, risk engine, and merchant mobile app.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["backend-engineering", "mobile", "api-development"],
        category: "platform-engineering",
        updatedDate: "2025-04-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // ─────────── MENA & AFRICA REGION ───────────
  {
    id: "mena-bloc",
    geoId: "mena-bloc",
    name: "MENA & Africa",
    region: "mena",
    level: "bloc",
    isOverview: true,
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Arafion's MENA & Africa portfolio spans 13 markets — from sovereign wealth analytics in Doha and energy intelligence in Riyadh, to ultrafast delivery in Istanbul, Arabic NLP in Amman, open banking in Bahrain, and mobile money in Nairobi. We're deeply embedded in the region's fastest-growing tech ecosystems.",
    legislation: [
      {
        id: "mena-aramco",
        billCode: "ARM-2025",
        title: "Aramco Digital — Enterprise Energy Dashboard",
        summary: "Real-time energy management tracking 200+ facilities across the Kingdom. Monitoring, anomaly detection, and executive reporting.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["data-engineering", "cloud-infrastructure", "ai-ml"],
        category: "data-dashboard",
        updatedDate: "2025-06-01",
      },
      {
        id: "mena-careem",
        billCode: "CRM-2024",
        title: "Careem — Super App Core Platform",
        summary: "Core platform engineering for MENA's leading super app. Service mesh, real-time dispatch, and driver onboarding serving 50M+ users.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["backend-engineering", "mobile", "cloud-infrastructure"],
        category: "platform-engineering",
        updatedDate: "2024-12-01",
      },
      {
        id: "mena-safaricom",
        billCode: "SFC-2025",
        title: "Safaricom — M-Pesa Transaction Analytics",
        summary: "Real-time fraud detection and transaction analytics for Africa's largest mobile money platform.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["data-engineering", "ai-ml", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-03-15",
      },
    ],
    keyFigures: [],
    news: [
      {
        id: "mena-news-1",
        headline: "Arafion Opens MENA Office in Dubai Internet City",
        source: "Arabian Business",
        date: "2025-04-01",
        url: "#",
      },
    ],
  },

  // Saudi Arabia
  {
    id: "saudi-arabia",
    geoId: "682",
    name: "Saudi Arabia",
    region: "mena",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "Two marquee engagements: Aramco Digital's energy management platform in Riyadh and STC's conversational AI platform in Jeddah. Deep presence in the Kingdom's Vision 2030 digital transformation.",
    legislation: [
      {
        id: "sa-aramco",
        billCode: "ARM-2025",
        title: "Aramco Digital — Energy Management Platform",
        summary: "Enterprise energy management tracking 200+ facilities. Real-time monitoring, anomaly detection, executive reporting.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["data-engineering", "cloud-infrastructure", "ai-ml"],
        category: "data-dashboard",
        updatedDate: "2025-06-01",
      },
      {
        id: "sa-stc",
        billCode: "STC-2026",
        title: "STC — Conversational AI Platform",
        summary: "NLU-powered customer service platform replacing legacy IVR for 30M+ subscribers. Agent assist tools and omnichannel orchestrator.",
        stage: "In Progress",
        stance: "growth",
        impactTags: ["ai-ml", "backend-engineering", "product-design"],
        category: "ai-system",
        updatedDate: "2026-02-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // UAE
  {
    id: "uae",
    geoId: "784",
    name: "United Arab Emirates",
    region: "mena",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Dubai — Core platform engineering for Careem, MENA's leading super app. Service mesh, real-time dispatch, and driver onboarding for 50M+ users.",
    legislation: [
      {
        id: "ae-careem",
        billCode: "CRM-2024",
        title: "Careem — Super App Core Platform",
        summary: "Platform engineering for MENA's leading super app serving 50M+ users. Service mesh, real-time dispatch, driver onboarding.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["backend-engineering", "mobile", "cloud-infrastructure"],
        category: "platform-engineering",
        updatedDate: "2024-12-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Kenya
  {
    id: "kenya",
    geoId: "404",
    name: "Kenya",
    region: "mena",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Nairobi — Transaction analytics and fraud detection for Safaricom's M-Pesa, Africa's largest mobile money platform.",
    legislation: [
      {
        id: "ke-safaricom",
        billCode: "SFC-2025",
        title: "Safaricom — M-Pesa Analytics Platform",
        summary: "Real-time streaming pipeline, anomaly detection, and merchant risk scoring for Africa's largest mobile money network.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["data-engineering", "ai-ml", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-03-15",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Nigeria
  {
    id: "nigeria",
    geoId: "566",
    name: "Nigeria",
    region: "mena",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "sprint",
    contextBlurb:
      "Lagos — Cross-border payment infrastructure for Flutterwave serving 1M+ merchants across 34 African countries.",
    legislation: [
      {
        id: "ng-flutterwave",
        billCode: "FLW-2025",
        title: "Flutterwave — Cross-Border Payment Gateway",
        summary: "Settlement engine, multi-currency routing, and developer portal for 1M+ merchants across 34 African countries.",
        stage: "Live",
        stance: "growth",
        impactTags: ["api-development", "backend-engineering", "frontend-engineering"],
        category: "platform-engineering",
        updatedDate: "2025-05-20",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // South Africa
  {
    id: "south-africa",
    geoId: "710",
    name: "South Africa",
    region: "mena",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "growth",
    contextBlurb:
      "Johannesburg — Network performance analytics for MTN Group covering 280M+ subscribers across 19 African markets.",
    legislation: [
      {
        id: "za-mtn",
        billCode: "MTN-2025",
        title: "MTN — Network Performance Analytics",
        summary: "Predictive capacity planning, outage detection, and executive dashboards covering 280M+ subscribers across 19 markets.",
        stage: "Live",
        stance: "growth",
        impactTags: ["data-engineering", "cloud-infrastructure", "frontend-engineering"],
        category: "data-dashboard",
        updatedDate: "2025-07-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Egypt
  {
    id: "egypt",
    geoId: "818",
    name: "Egypt",
    region: "mena",
    level: "federal",
    stancePortfolio: "sprint",
    stanceAI: "sprint",
    contextBlurb:
      "Cairo — Building seller analytics and dynamic pricing for Noon.com, MENA's fastest-growing e-commerce marketplace.",
    legislation: [
      {
        id: "eg-noon",
        billCode: "NON-2026",
        title: "Noon — E-commerce Intelligence Platform",
        summary: "Seller analytics, dynamic pricing, and recommendation engine for MENA's leading e-commerce marketplace.",
        stage: "In Progress",
        stance: "sprint",
        impactTags: ["ai-ml", "data-engineering", "frontend-engineering"],
        category: "ai-system",
        updatedDate: "2026-03-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Morocco
  {
    id: "morocco",
    geoId: "504",
    name: "Morocco",
    region: "mena",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "growth",
    contextBlurb:
      "Casablanca — Building a digital banking platform for CIH Bank, one of Morocco's leading financial institutions. Core banking modernization, mobile-first UX, and real-time transaction processing serving 2M+ customers.",
    legislation: [
      {
        id: "ma-cih",
        billCode: "CIH-2025",
        title: "CIH Bank — Digital Banking Platform",
        summary: "End-to-end core banking modernization with mobile-first customer experience, real-time transaction processing, and self-service account management for 2M+ customers.",
        stage: "Live",
        stance: "growth",
        impactTags: ["mobile", "backend-engineering", "product-design"],
        category: "product-build",
        updatedDate: "2025-08-15",
      },
      {
        id: "ma-ocp",
        billCode: "OCP-2026",
        title: "OCP Group — Supply Chain Intelligence",
        summary: "AI-powered supply chain optimization for the world's largest phosphate exporter. Demand forecasting, logistics routing, and real-time inventory tracking across 4 continents.",
        stage: "In Progress",
        stance: "growth",
        impactTags: ["ai-ml", "data-engineering", "cloud-infrastructure"],
        category: "ai-system",
        updatedDate: "2026-02-10",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Qatar
  {
    id: "qatar",
    geoId: "634",
    name: "Qatar",
    region: "mena",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "Doha — Two flagship engagements: Qatar Investment Authority's portfolio analytics platform and Hamad Medical Corporation's clinical AI system. Deep alignment with Qatar National Vision 2030's digital transformation pillar.",
    legislation: [
      {
        id: "qa-qia",
        billCode: "QIA-2025",
        title: "QIA — Sovereign Wealth Portfolio Analytics",
        summary: "Real-time portfolio monitoring and risk analytics platform for one of the world's largest sovereign wealth funds. Multi-asset class dashboards, scenario modeling, and automated compliance reporting.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["data-engineering", "frontend-engineering", "cloud-infrastructure"],
        category: "data-dashboard",
        updatedDate: "2025-05-20",
      },
      {
        id: "qa-hmc",
        billCode: "HMC-2026",
        title: "Hamad Medical — Clinical Decision Engine",
        summary: "AI-powered diagnostic support system for Qatar's largest hospital network. NLP-based triage, imaging analysis, and patient flow optimization across 12 facilities.",
        stage: "In Progress",
        stance: "growth",
        impactTags: ["ai-ml", "backend-engineering", "product-design"],
        category: "ai-system",
        updatedDate: "2026-01-20",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Bahrain
  {
    id: "bahrain",
    geoId: "48",
    name: "Bahrain",
    region: "mena",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "sprint",
    contextBlurb:
      "Manama — Building the national open banking platform for the Central Bank of Bahrain, connecting all licensed banks and fintechs under a unified API framework.",
    legislation: [
      {
        id: "bh-cbb",
        billCode: "CBB-2025",
        title: "Central Bank of Bahrain — Open Banking Platform",
        summary: "National open banking infrastructure connecting 30+ licensed institutions. Consent management, API gateway, and transaction data aggregation compliant with Bahrain's regulatory sandbox.",
        stage: "Live",
        stance: "growth",
        impactTags: ["api-development", "backend-engineering", "cloud-infrastructure"],
        category: "platform-engineering",
        updatedDate: "2025-09-01",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Kuwait
  {
    id: "kuwait",
    geoId: "414",
    name: "Kuwait",
    region: "mena",
    level: "federal",
    stancePortfolio: "growth",
    stanceAI: "growth",
    contextBlurb:
      "Kuwait City — Zain Group's customer intelligence platform serving 50M+ subscribers across 7 markets. Churn prediction, personalized offers engine, and campaign automation.",
    legislation: [
      {
        id: "kw-zain",
        billCode: "ZAN-2025",
        title: "Zain Group — Customer Intelligence Platform",
        summary: "ML-powered churn prediction and personalized offer engine for 50M+ mobile subscribers across 7 Middle Eastern and African markets. Real-time campaign orchestration and A/B testing framework.",
        stage: "Live",
        stance: "growth",
        impactTags: ["ai-ml", "data-engineering", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-07-15",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Oman
  {
    id: "oman",
    geoId: "512",
    name: "Oman",
    region: "mena",
    level: "federal",
    stancePortfolio: "sprint",
    stanceAI: "sprint",
    contextBlurb:
      "Muscat — PDO (Petroleum Development Oman) predictive maintenance platform for upstream oil & gas operations. Sensor-driven anomaly detection across 200+ well sites.",
    legislation: [
      {
        id: "om-pdo",
        billCode: "PDO-2026",
        title: "PDO — Predictive Maintenance Platform",
        summary: "IoT-driven predictive maintenance for upstream oil & gas. Sensor data ingestion from 200+ well sites, anomaly detection, and maintenance scheduling optimization.",
        stage: "In Progress",
        stance: "sprint",
        impactTags: ["ai-ml", "cloud-infrastructure", "data-engineering"],
        category: "platform-engineering",
        updatedDate: "2026-03-10",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Jordan
  {
    id: "jordan",
    geoId: "400",
    name: "Jordan",
    region: "mena",
    level: "federal",
    stancePortfolio: "sprint",
    stanceAI: "growth",
    contextBlurb:
      "Amman — Mawdoo3's Arabic NLP platform, the largest Arabic content engine in the region. Built the search infrastructure, content recommendation system, and editorial tools.",
    legislation: [
      {
        id: "jo-mawdoo3",
        billCode: "MWD-2025",
        title: "Mawdoo3 — Arabic NLP & Content Platform",
        summary: "Arabic-first search and content intelligence platform. Built semantic search infrastructure, content recommendation engine, and editorial workflow tools serving 100M+ monthly users.",
        stage: "Live",
        stance: "growth",
        impactTags: ["ai-ml", "backend-engineering", "frontend-engineering"],
        category: "ai-system",
        updatedDate: "2025-04-20",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Lebanon
  {
    id: "lebanon",
    geoId: "422",
    name: "Lebanon",
    region: "mena",
    level: "federal",
    stancePortfolio: "advisory",
    stanceAI: "sprint",
    contextBlurb:
      "Beirut — Anghami's music streaming analytics and personalization engine. Recommendation algorithms and playlist generation for the Arab world's leading audio platform.",
    legislation: [
      {
        id: "lb-anghami",
        billCode: "ANG-2025",
        title: "Anghami — Audio Personalization Engine",
        summary: "Music recommendation and playlist generation system for the Arab world's largest streaming platform. Collaborative filtering, mood detection, and regional taste modeling for 70M+ registered users.",
        stage: "Live",
        stance: "sprint",
        impactTags: ["ai-ml", "data-engineering", "backend-engineering"],
        category: "ai-system",
        updatedDate: "2025-06-10",
      },
    ],
    keyFigures: [],
    news: [],
  },

  // Turkey
  {
    id: "turkey",
    geoId: "792",
    name: "Turkey",
    region: "mena",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Istanbul — Two engagements: Getir's real-time delivery logistics platform and Trendyol's marketplace intelligence engine. Turkey's tech ecosystem is one of the fastest-growing in the MENA corridor.",
    legislation: [
      {
        id: "tr-getir",
        billCode: "GTR-2025",
        title: "Getir — Ultra-Fast Delivery Platform",
        summary: "Real-time delivery orchestration platform for ultrafast grocery. Route optimization, dynamic courier allocation, and demand surge prediction across 5 countries.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["backend-engineering", "mobile", "ai-ml"],
        category: "platform-engineering",
        updatedDate: "2025-03-25",
      },
      {
        id: "tr-trendyol",
        billCode: "TRN-2026",
        title: "Trendyol — Marketplace Intelligence",
        summary: "Seller analytics, dynamic pricing, and search relevance optimization for Turkey's largest e-commerce platform. Serving 30M+ active buyers and 250K+ sellers.",
        stage: "In Progress",
        stance: "growth",
        impactTags: ["ai-ml", "data-engineering", "frontend-engineering"],
        category: "data-dashboard",
        updatedDate: "2026-01-05",
      },
    ],
    keyFigures: [],
    news: [],
  },
];
