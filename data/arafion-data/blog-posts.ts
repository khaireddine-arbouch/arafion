export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string }
  | { type: "divider" };

export interface BlogPost {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  thesis: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-saas-mvps-fail",
    category: "Product Engineering",
    categorySlug: "software",
    title: "Why most SaaS MVPs fail before they ever reach users",
    thesis:
      "The problem is never the technology. It's the missing data model, weak role logic, and undefined business workflows that collapse the product before it ever ships.",
    readTime: "12 min",
    publishedAt: "June 2026",
    tags: ["SaaS Architecture", "Product Scope", "Workflows"],
    content: [
      {
        type: "p",
        text: "Most teams assume their MVP failed because they moved too fast. The investor pressure, the short timeline, the shortage of engineers — these get blamed for the collapse. The actual pattern is usually the opposite: teams build the wrong thing slowly, with increasing commitment to a flawed foundation, until reversing course feels impossible.",
      },
      {
        type: "p",
        text: "We've audited dozens of failed MVPs over the past three years. Almost none of them failed from speed. They failed from structural ambiguity — no clear answer to what the system actually does, who it does it for, and what data it operates on.",
      },
      {
        type: "h2",
        text: "The five things that always break first",
      },
      {
        type: "p",
        text: "The failure pattern is consistent enough that we now run a diagnostic checklist on every inherited codebase before proposing any work. Five structural failures account for roughly 90% of the problems we find.",
      },
      {
        type: "ul",
        items: [
          "No defined data model. The team designed screens, then built backend tables to match the screens. The data model should define what the system knows — the screens are projections of that knowledge.",
          "No role system. Multi-user applications need permissions from the beginning. Retrofitting an auth model into an existing app is one of the most expensive engineering operations there is.",
          "No business logic layer. The codebase is pure CRUD — create, read, update, delete — with no domain logic, no validation rules, no workflow states. Business logic lives in the founders' heads.",
          "No error path design. Happy paths were built. Error states were left to handle later. Later never comes.",
          "No real workflow definition. What is the actual sequence of actions a user takes to accomplish the core task? This was never written down.",
        ],
      },
      {
        type: "h2",
        text: "The data model problem is almost always the root",
      },
      {
        type: "p",
        text: "The data model is the skeleton of a software product. Everything else — the UI, the API, the business logic, the reporting — is built on top of it. Get it wrong and you don't just need to fix one screen. You need to rebuild the foundation.",
      },
      {
        type: "p",
        text: "The most common mistake is schema-follows-UI. A designer mocks up screens. An engineer builds database tables to hold what the screens display. Six months later, the client asks for a reporting view that was never considered. The data to build it is either missing, scattered across five tables with no relational integrity, or duplicated in ways that produce conflicting answers.",
      },
      {
        type: "quote",
        text: "The data model is not a backend detail. It is the answer to the question: what does this system know, and how is that knowledge structured?",
      },
      {
        type: "h2",
        text: "Why the role system matters from day one",
      },
      {
        type: "p",
        text: "Almost every B2B SaaS product eventually needs multiple roles. Admin. Manager. Operator. Read-only viewer. The specific names don't matter — the need is universal: different users need different access to different parts of the system.",
      },
      {
        type: "p",
        text: "The mistake is to build the product for a single user type first, then add roles when you need them. By the time you need them, you have 40 API endpoints that assume every user can do everything. The auth layer gets bolted on externally, with middleware hacks and conditional rendering checks scattered across hundreds of files. The test coverage for this pattern is always insufficient. The security vulnerabilities are always real.",
      },
      {
        type: "p",
        text: "The correct approach is to design the permission matrix on day one — even if you only implement two roles on day one. The schema and the API are already structured to support the full model. Adding a new role later is a configuration change, not a refactor.",
      },
      {
        type: "h2",
        text: "The scope definition failure",
      },
      {
        type: "p",
        text: "The second most common cause of MVP failure is definitional, not structural. The scope was never real.",
      },
      {
        type: "p",
        text: "A real scope has three properties: it specifies the exact user actions the system supports, it defines the data the system needs to perform those actions, and it defines what the system does when something goes wrong. Most MVP scopes only address the first property, partially.",
      },
      {
        type: "callout",
        text: "\"Users can create projects and invite collaborators\" is not a scope. It is a feature list item. A scope specifies: what data a project contains, what states it can be in, who can create it, what permissions a collaborator has, what happens when a collaborator is removed, and what the system shows if the user loses connection mid-creation.",
      },
      {
        type: "h2",
        text: "What we do instead",
      },
      {
        type: "p",
        text: "We start every product engagement with a scoping document that defines the data model, the workflow map, and the permission matrix before a single screen is designed. This takes two to four weeks. Clients who skip this phase do so at their own risk — we have never seen a skipped scoping phase result in a successful product.",
      },
      {
        type: "ul",
        items: [
          "Data model: what entities exist, what they contain, how they relate",
          "Workflow map: the states each entity can be in and what causes transitions",
          "Permission matrix: who can perform which actions on which data",
          "Error taxonomy: the failure modes the system must handle gracefully",
          "Integration map: which external systems the product connects to, and how",
        ],
      },
      {
        type: "h2",
        text: "The real question for founders",
      },
      {
        type: "p",
        text: "Before committing to building a product, ask one question: can you describe, in writing, what your system knows, who it knows it for, and what it lets them do? If the answer is not clear, the product is not ready to build. The scoping work is not overhead — it is the actual work.",
      },
    ],
  },
  {
    slug: "internal-operating-systems",
    category: "Product Engineering",
    categorySlug: "software",
    title: "How we build internal operating systems for business workflows",
    thesis:
      "Admin dashboards, RBAC, document flows, and audit trails — built as a system, not a set of pages.",
    readTime: "11 min",
    publishedAt: "May 2026",
    tags: ["Internal Tools", "RBAC", "Operations"],
    content: [
      {
        type: "p",
        text: "Most clients who ask for an admin dashboard or internal portal are actually asking for an operating system. Not in the technical sense, but in the business sense: a system their team uses every day to perform the core operations of the business.",
      },
      {
        type: "p",
        text: "A website is a projection of information. An operating system is an environment in which work happens. The design requirements are fundamentally different. Websites optimize for comprehension and conversion. Operating systems optimize for speed, reliability, error prevention, and workflow continuity.",
      },
      {
        type: "h2",
        text: "The anatomy of a real internal system",
      },
      {
        type: "p",
        text: "The components vary by domain, but the structure is consistent across every serious internal tool we've built.",
      },
      {
        type: "ul",
        items: [
          "Entity management: the core data objects the business operates on — customers, orders, cases, properties, documents, depending on the domain",
          "Role-based access: different team members have different visibility and different permissions on every entity",
          "Workflow states: entities move through defined states with rules about who can trigger which transitions",
          "Audit trail: every state change is logged with who made it, when, and why",
          "Document management: file attachments, version history, access control",
          "Communication layer: internal notes, client-facing messages, notifications",
          "Reporting layer: operational summaries, export functions, performance dashboards",
        ],
      },
      {
        type: "h2",
        text: "The role-based access design",
      },
      {
        type: "p",
        text: "The most common failure mode in internal systems is inadequate role design. Teams build the system for the admin user first, then try to restrict access for lower-privilege users after the fact. This produces a system where restrictions are enforced inconsistently — some at the API level, some at the UI level, some nowhere.",
      },
      {
        type: "p",
        text: "We design permission matrices before writing a line of code. Every entity has a set of allowed operations: create, read, update, delete, export, reassign, archive. Every role has a defined set of permissions against every entity type. The matrix is implemented at the API level first, then reflected in the UI.",
      },
      {
        type: "quote",
        text: "Security through UI hiding is not security. Every permission must be enforced at the data layer.",
      },
      {
        type: "p",
        text: "A user who cannot export a document does not see the export button — but more importantly, they also cannot call the export API endpoint directly. The UI is a convenience. The API is the authority.",
      },
      {
        type: "h2",
        text: "Workflow state machines",
      },
      {
        type: "p",
        text: "Real business workflows are not boolean. An order is not just placed or delivered. It is placed, confirmed, assigned, packaged, shipped, in transit, delivered, and possibly returned. Each state has a set of allowed transitions, a set of users who can trigger those transitions, and a set of validations that must pass.",
      },
      {
        type: "p",
        text: "We implement workflow states as explicit state machines. The allowed transitions are defined in the data layer, not inferred from UI flows. This means the system enforces workflow rules consistently, regardless of whether the transition is triggered from the web UI, a mobile app, an API integration, or a background process.",
      },
      {
        type: "h2",
        text: "The audit trail is not optional",
      },
      {
        type: "p",
        text: "Every enterprise client eventually asks: who changed this, and what did it look like before? If your system does not log state changes, you cannot answer these questions. The audit trail is not a feature — it is a property of the data architecture.",
      },
      {
        type: "p",
        text: "We implement append-only audit logs on all entity mutations. Every write to the database produces an audit record that captures the before state, the after state, the user who made the change, the timestamp, and the source of the change — web UI, API, background process. This is implemented at the database level, not the application level, so it cannot be bypassed.",
      },
      {
        type: "h2",
        text: "When to build vs. when to configure",
      },
      {
        type: "p",
        text: "Not every internal system needs to be built from scratch. Some workflows are well-served by configurable platforms — project management tools, CRM systems, document management platforms. Our role in those cases is integration and customization, not custom development.",
      },
      {
        type: "p",
        text: "The decision depends on the specificity of the workflow. Generic workflows are better served by existing platforms. Specialized workflows — multi-tenant logistics operations, clinical case management, production pipeline tracking — require custom software because no existing platform's data model matches the domain well enough.",
      },
    ],
  },
  {
    slug: "ai-copilots-business-workflows",
    category: "AI Systems",
    categorySlug: "ai",
    title: "Building AI copilots that actually fit business workflows",
    thesis:
      "Copilots should connect to workflows, data, permissions, and outputs — not just chat.",
    readTime: "10 min",
    publishedAt: "May 2026",
    tags: ["AI Copilots", "LLM Integration", "Automation"],
    content: [
      {
        type: "p",
        text: "Most AI integrations we've seen in production fall into one of two failure modes. Either they are demos — technically functional, impressive in a presentation, but not connected to any real business workflow. Or they are LLM wrappers — a chat interface on top of a language model, with no integration into the data the business actually operates on.",
      },
      {
        type: "p",
        text: "Neither is useful. A copilot that cannot access your business data cannot tell you anything about your business. A copilot that can access your data but cannot take actions cannot change anything. The gap between AI demo and AI system is a full engineering project.",
      },
      {
        type: "h2",
        text: "What a real copilot needs",
      },
      {
        type: "ul",
        items: [
          "Data access: the ability to read from the business's actual data sources — databases, documents, APIs, spreadsheets",
          "Permission awareness: the copilot should only access data the current user is allowed to see",
          "Tool calling: the ability to take actions — create records, update states, trigger processes, send notifications",
          "Output validation: every response should be validated before it reaches the user or triggers an action",
          "Memory and context: the ability to maintain context across a conversation, and optionally across sessions",
        ],
      },
      {
        type: "h2",
        text: "The permission problem",
      },
      {
        type: "p",
        text: "LLMs do not understand permissions. If you give an LLM access to your database, it will query whatever it can reach. This is fine in a demo with synthetic data. In a production system, it means a sales representative could potentially query compensation data, or a junior analyst could access confidential reports.",
      },
      {
        type: "p",
        text: "Every copilot we build has a permission layer that mirrors the main application's permission system. When a user asks a question, the system first determines what data sources are accessible to that user, then constructs a query scoped to those sources. The LLM operates within a constrained data environment, not the full database.",
      },
      {
        type: "quote",
        text: "The copilot should know what you know. Not more, not less.",
      },
      {
        type: "h2",
        text: "The tool calling architecture",
      },
      {
        type: "p",
        text: "The most powerful copilots are not just query interfaces — they can take actions. A copilot that can only answer questions is a search engine with a conversational wrapper. A copilot that can take actions — creating records, changing states, sending messages, generating documents — is an operational tool.",
      },
      {
        type: "p",
        text: "Tool calling is the mechanism by which LLMs take structured actions. The language model is given a set of defined functions it can invoke, with clear input schemas and output formats. The key engineering challenge is making sure the tool definitions are precise enough that the model uses them correctly, and that outputs are validated before they produce side effects.",
      },
      {
        type: "h2",
        text: "Output validation and confidence thresholds",
      },
      {
        type: "p",
        text: "Language models produce plausible-sounding outputs. They do not always produce correct ones. For query tasks, a wrong answer is an inconvenience. For action tasks, a wrong action can corrupt data, trigger incorrect workflows, or send unintended communications.",
      },
      {
        type: "p",
        text: "Every action-capable copilot we build has an output validation layer. The model generates a proposed action. The validation layer checks that the action is structurally valid — correct format, valid identifiers — then optionally routes high-confidence actions to automatic execution and lower-confidence actions to a human review queue. The confidence threshold is tunable per action type.",
      },
      {
        type: "h2",
        text: "The right way to think about AI in a business context",
      },
      {
        type: "p",
        text: "AI is not a product feature. It is an acceleration layer on top of existing processes. The question to ask before building any AI integration is not what can the AI do, but what workflow does this accelerate, and what is the current bottleneck?",
      },
      {
        type: "callout",
        text: "If the bottleneck is data access — finding information that is hard to locate — a query copilot makes sense. If the bottleneck is repetitive decisions, an automation layer makes sense. If the bottleneck is document generation, an output copilot makes sense. The technology choice should follow the workflow analysis, not precede it.",
      },
    ],
  },
  {
    slug: "2d-plans-to-renders-pipeline",
    category: "Architecture Visualization",
    categorySlug: "architecture",
    title: "From 2D plans to cinematic renders: our visualization pipeline",
    thesis:
      "Plans → model → materials → lighting → camera → QA → delivery formats.",
    readTime: "8 min",
    publishedAt: "April 2026",
    tags: ["3D Rendering", "Interior Design", "Sales Visuals"],
    content: [
      {
        type: "p",
        text: "The starting point is rarely clean. A typical project begins with a combination of AutoCAD files, rough sketches, PDF floor plans, reference images from Pinterest, and a mood board the client assembled from magazine clips. Sometimes there is a full architectural drawing set. Sometimes there is a WhatsApp photo of a hand sketch.",
      },
      {
        type: "p",
        text: "The pipeline has to account for this variability. Before any 3D work begins, we conduct an asset audit: what do we have, what is missing, what needs to be resolved before modeling can start? Ambiguities at this stage — unclear ceiling heights, unspecified materials, missing details on fixtures — are resolved through a brief but structured discovery session. Every hour spent on discovery saves three hours in revision.",
      },
      {
        type: "h2",
        text: "The modeling phase",
      },
      {
        type: "p",
        text: "Modeling begins with the floor plan as the authoritative source. Everything else is secondary. The floor plan defines the geometry — walls, openings, ceiling heights, structural elements. Reference images inform the aesthetic, but the geometry comes from the plan.",
      },
      {
        type: "p",
        text: "We work in layers. The shell — walls, floors, ceilings, structural elements — is modeled first and reviewed before any furnishing or detailing begins. Shell revisions are cheap. Shell revisions after the space is furnished and lit are expensive. This staging discipline is non-negotiable on every project.",
      },
      {
        type: "ul",
        items: [
          "Shell: walls, floors, ceilings, windows, doors, structural elements",
          "Fixed elements: built-in cabinetry, kitchen units, bathroom fixtures, fireplaces",
          "Loose furniture: tables, chairs, sofas, lighting fixtures, decorative objects",
          "Materials: surfaces, finishes, textures applied after geometry is approved",
        ],
      },
      {
        type: "h2",
        text: "Materials and lighting",
      },
      {
        type: "p",
        text: "Materials are where renders go from technical to cinematic. The geometry can be correct, the furniture can be accurate — but if the materials are wrong the render looks like a real-time game engine screenshot rather than a photograph.",
      },
      {
        type: "p",
        text: "We use physically-based rendering materials exclusively. Every surface — wood, stone, fabric, metal, glass — is built from reference photographs of the actual material. Roughness, reflectance, and subsurface properties are calibrated against real-world observation. A marble countertop should look like marble, not like a marble texture applied to a white plane.",
      },
      {
        type: "p",
        text: "Lighting is the single biggest factor in render quality. We design lighting in two passes: the natural light study — how does the space read with daylight at different times of day — then the artificial light design, which determines what role interior lighting plays in the final image. Lighting decisions affect materials, which affect geometry requirements. The three are inseparable.",
      },
      {
        type: "quote",
        text: "A great render is a photograph of a space that doesn't exist yet. The goal is photographic plausibility, not technical accuracy.",
      },
      {
        type: "h2",
        text: "Camera and composition",
      },
      {
        type: "p",
        text: "Most architectural renders fail at the composition stage. The camera placement is either technically correct — centered in the room, everything visible — or copied from another project. Good composition is not a technical property; it is a visual one.",
      },
      {
        type: "p",
        text: "We produce multiple camera studies before committing to the final composition. The camera angle, height, and field of view are chosen to tell a specific story about the space: how the light falls in the morning, how the kitchen connects to the living area, how the bedroom feels when you first walk in. The client brief informs the composition choices — a residential project and a commercial project photograph differently.",
      },
      {
        type: "h2",
        text: "Delivery formats",
      },
      {
        type: "p",
        text: "The final deliverable is not a single render. It is a structured package of assets designed for how they will actually be used.",
      },
      {
        type: "ul",
        items: [
          "Print-ready renders (300 DPI, minimum A3) for physical presentations and brochures",
          "Screen-optimized renders (72 DPI, 2x) for website and digital use",
          "Social crops — square (1:1) and portrait (4:5) for Instagram, wide (16:9) for LinkedIn",
          "Before/after pairs for projects involving renovation or redesign",
          "Walkthrough video if scope includes animation",
        ],
      },
      {
        type: "p",
        text: "Each format has different requirements for render time, post-processing, and delivery timeline. Print renders require longer render times and additional color correction. Social crops require awareness of safe zones — the composition must hold after being cropped for different aspect ratios. This is why the composition is approved before the final render pass, not after.",
      },
    ],
  },
  {
    slug: "dashboards-data-model",
    category: "Data & Intelligence",
    categorySlug: "data",
    title: "Why dashboards fail when the data model is wrong",
    thesis:
      "Dashboards are not charts. They are decision systems built on top of data architecture.",
    readTime: "9 min",
    publishedAt: "April 2026",
    tags: ["Dashboard Design", "Data Modelling", "BI"],
    content: [
      {
        type: "p",
        text: "A dashboard is not a collection of charts. It is a decision support system. The question it should answer is not what does the data look like, but what should I do next, and why.",
      },
      {
        type: "p",
        text: "This distinction matters because it changes the design criteria. A chart collection is evaluated on completeness — does it show all the metrics? A decision support system is evaluated on relevance — does it surface the right information at the right moment to support the right decision?",
      },
      {
        type: "h2",
        text: "The four most common dashboard failures",
      },
      {
        type: "h3",
        text: "1. The data is wrong",
      },
      {
        type: "p",
        text: "The most common dashboard failure is invisible: the numbers are wrong, but nobody knows. Data pipelines have bugs. Source systems have data quality issues. Business logic is implemented inconsistently across multiple pipelines. The dashboard displays confident numbers that are subtly incorrect.",
      },
      {
        type: "p",
        text: "The symptom is often a user who cross-references the dashboard against a spreadsheet and finds discrepancies. At that point, the dashboard is no longer trusted. A distrusted dashboard is worse than no dashboard, because it introduces uncertainty into decisions that should be clear.",
      },
      {
        type: "h3",
        text: "2. The wrong metrics",
      },
      {
        type: "p",
        text: "Dashboards are often built bottom-up: what data do we have, and what can we visualize? The result is a dashboard full of available metrics, very few of which are decision-relevant. The correct approach is top-down: what decisions does this dashboard support, and what information would change those decisions?",
      },
      {
        type: "h3",
        text: "3. No time intelligence",
      },
      {
        type: "p",
        text: "Most business metrics are only useful in context. Revenue of €240,000 this month means nothing without knowing whether that is 20% up or 40% down from last month, from last year, or from plan. Dashboards that display absolute values without trend context produce false confidence or false alarm.",
      },
      {
        type: "h3",
        text: "4. Too much information",
      },
      {
        type: "p",
        text: "The fastest path to an unused dashboard is to include every metric the client asked for. When every metric is highlighted, nothing is highlighted. Visual hierarchy — size, position, color weight — must be used deliberately to direct attention to what matters most.",
      },
      {
        type: "quote",
        text: "The most dangerous dashboard is one that looks credible but measures the wrong things.",
      },
      {
        type: "h2",
        text: "The data model requirements for good dashboards",
      },
      {
        type: "p",
        text: "Most dashboard failures trace back to a data model designed for transaction processing, not analysis. OLTP databases — the kind that power applications — are optimized for fast reads and writes of individual records. Analytical queries — aggregations over time, cross-dimensional comparisons, funnel analysis — are expensive on transactional schemas.",
      },
      {
        type: "p",
        text: "The solution is not always a full data warehouse. For smaller datasets, a well-designed aggregation layer can run on the same database. For larger datasets, a separate analytical store is necessary. The key decision is whether the data model supports the required analytical queries — not whether it stores all the data.",
      },
      {
        type: "h2",
        text: "Metrics design as a discipline",
      },
      {
        type: "p",
        text: "Metrics are not pulled from databases. They are defined by business stakeholders, then implemented in data systems. The definition matters as much as the implementation.",
      },
      {
        type: "callout",
        text: "A metric is not just a number. It is a number, a definition (what does it count?), a grain (at what level of aggregation?), a lag (how current is it?), and a confidence level (how reliable is the underlying data?). Dashboard users need to understand all five properties to make good decisions.",
      },
      {
        type: "p",
        text: "The most durable dashboards are built after a metrics design session — a structured conversation with the decision-makers who will use the dashboard, where each metric is defined, named, scoped, and agreed upon before a single query is written.",
      },
    ],
  },
  {
    slug: "quote-selectors-high-ticket",
    category: "Strategy & Delivery",
    categorySlug: "growth",
    title: "How we design quote selectors for high-ticket service businesses",
    thesis:
      "Package logic, add-ons, scope control, and lead qualification — not just a pricing page.",
    readTime: "7 min",
    publishedAt: "March 2026",
    tags: ["Lead Qualification", "Pricing UX", "Conversion"],
    content: [
      {
        type: "p",
        text: "A quote selector is not a pricing page. A pricing page tells visitors what your services cost. A quote selector helps a prospective client understand what they need, qualify themselves for the right service tier, and take the first step toward engagement.",
      },
      {
        type: "p",
        text: "For high-ticket service businesses — architecture firms, engineering consultancies, creative agencies, specialized software shops — the right clients are not price-sensitive in the traditional sense. They are scope-sensitive. They want to understand what they are buying before they talk to anyone.",
      },
      {
        type: "h2",
        text: "Package architecture",
      },
      {
        type: "p",
        text: "Most service businesses try to serve every client from the same service definition. This creates two problems: sophisticated clients feel the offer is too generic, and unsophisticated clients feel overwhelmed by options they don't understand.",
      },
      {
        type: "p",
        text: "The solution is tiered package architecture with a clear positioning principle for each tier. We typically design three tiers:",
      },
      {
        type: "ul",
        items: [
          "Entry tier: defined scope, fixed deliverables, clear timeline, accessible entry price. For clients who know what they want and need predictability.",
          "Core tier: the most common engagement type. Flexible scope within defined boundaries, collaborative process, outcome-focused.",
          "Comprehensive tier: full-service, open scope, ongoing relationship. For clients managing complex or long-term needs.",
        ],
      },
      {
        type: "callout",
        text: "The key principle: each tier should be the correct choice for a specific type of client, not a worse version of the tier above it. If the entry tier looks like the core tier with features removed, the architecture is wrong.",
      },
      {
        type: "h2",
        text: "Add-on logic",
      },
      {
        type: "p",
        text: "Add-ons serve two purposes. They let clients customize their package without requiring a custom quote, and they reveal to you which clients are willing to invest beyond the baseline.",
      },
      {
        type: "p",
        text: "Effective add-ons are things that are clearly valuable but not universally needed: rush delivery, additional revision rounds, expanded scope items, training sessions, monthly support retainers. The add-on catalog should be short — more than six options creates decision fatigue.",
      },
      {
        type: "h2",
        text: "Scope control and lead qualification",
      },
      {
        type: "p",
        text: "The most important function of a quote selector is lead qualification. A client who spends ten minutes with a detailed quote selector has demonstrated interest, domain awareness, and willingness to engage. They are a better sales lead than one who clicked a contact form.",
      },
      {
        type: "p",
        text: "The selector should ask questions that surface the client's sophistication and readiness: what stage is your project at, what is your target timeline, do you have existing assets we can work from. These questions qualify the lead, inform the initial conversation, and reduce the time spent on clients who are not yet ready to engage.",
      },
      {
        type: "h2",
        text: "The CTA mechanics",
      },
      {
        type: "p",
        text: "The quote selector should not end with a number. It should end with a path. For lower-ticket packages: direct checkout or booking. For mid-tier: a scoping call booking. For comprehensive: a consultation request with brief submitted.",
      },
      {
        type: "quote",
        text: "Match the commitment level of the CTA to the investment level of the package. Asking a €20,000 client to check out online is wrong. Asking a €2,000 client to request a consultation is friction they won't tolerate.",
      },
    ],
  },
  {
    slug: "campaign-infrastructure",
    category: "Marketing & Production",
    categorySlug: "production",
    title: "Campaign infrastructure is more than running ads",
    thesis:
      "Tracking, landing pages, CRM, creative pipeline, reporting, and training — the full system behind a campaign.",
    readTime: "8 min",
    publishedAt: "March 2026",
    tags: ["Campaign Setup", "Tracking", "Creative Pipeline"],
    content: [
      {
        type: "p",
        text: "When most businesses say they want to run marketing campaigns, they mean they want to spend money on advertising and see more revenue. This is the goal. The infrastructure required to achieve it reliably is rarely what they expect.",
      },
      {
        type: "p",
        text: "A campaign is not an ad. A campaign is a complete system: the ads that generate awareness, the landing pages that capture intent, the tracking that connects spend to revenue, the CRM that manages leads, the creative pipeline that produces assets consistently, and the reporting structure that tells you what's working and what isn't.",
      },
      {
        type: "h2",
        text: "The tracking layer",
      },
      {
        type: "p",
        text: "Attribution is the foundation of measurable marketing. Without reliable attribution, you cannot know which campaigns generate revenue, which audience segments convert, or whether your ad spend is profitable.",
      },
      {
        type: "ul",
        items: [
          "Pixel events: standard events (PageView, ViewContent, Purchase) and custom events specific to the business model",
          "Server-side events: a parallel event stream via Conversions API that doesn't depend on browser-side cookies or iOS consent",
          "UTM structure: a consistent naming convention for source, medium, campaign, content, and term across all campaigns",
          "Conversion windows: defined attribution windows for each channel, matched to the actual sales cycle",
        ],
      },
      {
        type: "callout",
        text: "The tracking layer should be audited before campaign spend begins. Running campaigns into a broken tracking setup is the most expensive mistake in digital marketing — you cannot optimize what you cannot measure.",
      },
      {
        type: "h2",
        text: "Landing page requirements",
      },
      {
        type: "p",
        text: "Campaign landing pages are not website pages. They serve a single purpose: convert the intent generated by the ad into a lead or a transaction. The design, copy, and structure should be optimized for that purpose and nothing else.",
      },
      {
        type: "p",
        text: "A campaign landing page needs a headline that matches the ad copy, a clear value proposition, social proof — testimonials, client logos, case study references — a single call to action, and fast load time. Most pages fail on message match: the ad promises one thing and the landing page says something else. The user's trust collapses in the first three seconds.",
      },
      {
        type: "h2",
        text: "The creative production pipeline",
      },
      {
        type: "p",
        text: "Most campaigns fail not because of targeting or bidding, but because the creative is weak. A strong offer with weak creative will underperform a moderate offer with compelling creative on almost every platform.",
      },
      {
        type: "p",
        text: "Creative production for campaigns is a pipeline, not a single project. It requires: a brief (what is the offer, who is the audience, what is the call to action), production (video, photography, or design work), variants (multiple versions for split testing), revision process (fast turnaround, structured feedback), and delivery formats — each platform has specific aspect ratio and duration requirements.",
      },
      {
        type: "h2",
        text: "Reporting that informs decisions",
      },
      {
        type: "p",
        text: "The reporting structure determines whether campaign learnings compound or disappear. Most campaign reports answer the wrong question: they tell you what happened, but not what to do about it.",
      },
      {
        type: "quote",
        text: "Good campaign reporting answers three questions: which campaigns are profitable at current scale, which can be scaled further, and which should be paused or restructured.",
      },
      {
        type: "p",
        text: "The answers require cost-per-conversion by campaign, audience segment, creative, and landing page variant — compared against the revenue or lead value targets. Without this structure, campaign spend optimization is guesswork.",
      },
    ],
  },
  {
    slug: "architectural-visuals-sales-system",
    category: "Architecture Visualization",
    categorySlug: "architecture",
    title: "How to turn architectural visuals into a sales system",
    thesis:
      "Renders + portfolio + virtual walkthrough + social crops + lead capture = a complete sales machine.",
    readTime: "9 min",
    publishedAt: "February 2026",
    tags: ["Architecture Sales", "3D Portfolio", "Lead Capture"],
    content: [
      {
        type: "p",
        text: "Most architecture and design firms have beautiful visuals and use them badly. The renders are in a Dropbox folder, shared via WeTransfer, emailed as attachments, or posted sporadically on Instagram. The visual assets exist. The system that turns them into sales does not.",
      },
      {
        type: "p",
        text: "A visual sales system connects the creation of visual assets to the qualification and conversion of clients. Every asset has a purpose in the sales process: generating awareness, building trust, qualifying intent, or closing the deal. Most firms produce the assets without defining the purpose.",
      },
      {
        type: "h2",
        text: "Layer 1: Awareness assets",
      },
      {
        type: "p",
        text: "These are the assets designed for distribution: social media posts, short videos, teaser images. Their job is to reach new potential clients who don't know you exist. They should be formatted for the platforms where your clients spend time — Instagram for residential design, LinkedIn for commercial, Houzz for both.",
      },
      {
        type: "p",
        text: "Awareness assets should be produced from every project as a standard workflow step, not as an afterthought. The renders are already produced. The additional work to export a 1:1 crop, a 9:16 story version, and a 16:9 landscape version adds less than 30 minutes per project. Firms that skip this step are leaving systematic visibility on the table.",
      },
      {
        type: "h2",
        text: "Layer 2: Credibility assets",
      },
      {
        type: "p",
        text: "These are the full project pages on your website: the complete render sequence, the design narrative, the project specifications, and the outcome. Their job is to build trust with clients who are already considering you.",
      },
      {
        type: "p",
        text: "A credibility asset should answer the client's unstated question: do you understand my problem, and have you solved it before? The project narrative — what was the brief, what were the constraints, what decisions were made, what was the result — answers this question more effectively than a gallery of renders.",
      },
      {
        type: "h2",
        text: "Layer 3: Qualification assets",
      },
      {
        type: "p",
        text: "The quote selector, the project brief form, the discovery call booking page. Their job is to convert interest into an engaged lead.",
      },
      {
        type: "callout",
        text: "Most firms have a contact form. This is not a qualification asset. A qualification asset asks the right questions: what type of space, what budget range, what timeline, what stage of the project. This information qualifies the lead before the first conversation, saving time on both sides.",
      },
      {
        type: "h2",
        text: "Layer 4: Closing assets",
      },
      {
        type: "p",
        text: "The walkthrough video, the interactive 3D viewer, the comparison renders. Their job is to close deals that are already in progress.",
      },
      {
        type: "p",
        text: "A prospective client who can walk through a virtual version of their project before signing a contract has significantly higher confidence. The visual experience reduces the psychological distance between the concept and the reality. It also reduces revision requests after the project starts — clients who can explore the space virtually have fewer surprises when work begins.",
      },
      {
        type: "quote",
        text: "Interactive 3D is not a nice-to-have for premium projects. It is the difference between a client who signs confidently and one who hesitates because they can't visualize the outcome.",
      },
      {
        type: "h2",
        text: "Building it as a workflow",
      },
      {
        type: "p",
        text: "The visual sales system is not built once. It is maintained as a workflow. Every new project produces assets that feed each layer: awareness posts from the render deliverables, a project page from the case study documentation, qualification updates as the portfolio evolves, closing assets as new visualization techniques become available.",
      },
      {
        type: "p",
        text: "The competitive advantage is cumulative. Firms that run this system for three years have a visual authority that cannot be replicated quickly. The asset library, the social proof, and the visual credibility compound over time.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return BLOG_POSTS.slice(0, limit);
  return BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.categorySlug === post.categorySlug,
  )
    .slice(0, limit)
    .concat(
      BLOG_POSTS.filter(
        (p) => p.slug !== slug && p.categorySlug !== post.categorySlug,
      ),
    )
    .slice(0, limit);
}
