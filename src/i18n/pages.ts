import { Locale } from "./config";

/**
 * Copy for the marketing / proof pages: /ai, /work (+ case studies) and the
 * /blog index. Kept out of messages.ts so that file stays about the homepage
 * and chrome. Merged into MESSAGES there.
 *
 * Same conventions: `**bold**` → <Strong>, `\n\n` → paragraph break.
 * Technical proper nouns (MercadoPago, OpenSearch, Hasura, Flutter, Lambda…)
 * stay in English inside the Spanish and Portuguese copy — that's how they're
 * actually written.
 *
 * NOTE: the long-form blog *article* bodies are deliberately not here yet.
 */

const en = {
    ai: {
        hero: { title: "AI agents that make it to", emphasis: "production.", subtitle: "RAG systems, agentic loops and autonomous agents — engineered, evaluated and shipped." },
        intro: "Anyone can wire a chatbot to an API. The hard part is everything after the demo: retrieval that holds up on messy documents, agents that recover from their own mistakes, budgets that keep the bill sane, and evals that tell you the moment quality slips.\n\nThat is the part we do. **RAG systems, agentic loops and autonomous agents**, engineered like software rather than assembled like a prompt.",
        whatWeBuild: { title: "What we build", lead: "Six things we do well, and the pieces that go into each of them." },
        anatomy: { title: "What is inside an agent we ship", lead: "An agent is not a prompt. It is five systems that have to hold together — and steps two to four run in a loop until the goal is met or a budget stops it." },
        hermesTitle: "How we start fast",
        engagement: { title: "How an AI project with us goes", lead: "Short steps, each one ending in something you can actually judge." },
        cta: { title: "Have a workflow you think an agent should be doing?", button: "Let's talk about it" },
        capabilities: {
            rag: { title: "RAG that actually retrieves", tagline: "Answers grounded in your data", description: "Most RAG demos fall apart the moment real documents show up. We build retrieval that survives production: **hybrid search, deliberate chunking, reranking and citations** — measured against a golden set instead of vibes.", bullets: ["Hybrid vector + keyword search", "Reranking & context compression", "Inline citations and source tracing", "Retrieval quality benchmarks"] },
            agenticLoops: { title: "Agentic loops", tagline: "Plan, act, observe, correct", description: "A single prompt is not a product. We design the **loop** around the model: typed tools, structured outputs, bounded retries and self-correction, so the agent recovers from its own mistakes instead of confidently shipping them.", bullets: ["Typed, permissioned tool calls", "Structured output & schema validation", "Bounded retries and back-off", "Deterministic control flow where it matters"] },
            autonomousAgents: { title: "Autonomous agents", tagline: "Work that happens without you", description: "Long-running agents that hold **memory, run on a schedule and act on your systems** — with human-in-the-loop checkpoints exactly where the stakes justify them, and a full audit trail for everything else.", bullets: ["Persistent memory & state", "Scheduled and event-triggered runs", "Human-in-the-loop approvals", "Full audit trail of every action"] },
            evals: { title: "Evals & observability", tagline: "Know when you break it", description: "The difference between a demo and a product is knowing it still works tomorrow. We ship **golden datasets, LLM-as-judge scoring and regression gates** in CI, plus tracing on every call in production.", bullets: ["Golden datasets & regression suites", "LLM-as-judge and rubric scoring", "Tracing on every span", "Cost and latency dashboards"] },
            guardrails: { title: "Guardrails & safety", tagline: "Autonomy with a seatbelt", description: "Autonomy is only useful when it is **bounded**. Token and action budgets, timeouts, permission scopes, prompt-injection defence and reversible operations — so the worst case is recoverable, not catastrophic.", bullets: ["Token, cost & action budgets", "Scoped permissions per tool", "Prompt-injection hardening", "Reversible, idempotent operations"] },
            infrastructure: { title: "LLM infrastructure", tagline: "The unglamorous part that decides the bill", description: "Model routing, prompt caching, streaming, queues and graceful fallbacks. The engineering that turns a promising prototype into something that stays **fast, cheap and up** under real traffic.", bullets: ["Multi-provider routing & fallbacks", "Prompt caching & token budgeting", "Streaming and background queues", "Rate limits, retries, dead letters"] },
        },
        anatomySteps: {
            context: { title: "Context", description: "Retrieval, memory and permissions decide what the model is even allowed to see." },
            tools: { title: "Tools", description: "Typed, idempotent, scoped. Every capability the agent has is a contract you can review." },
            loop: { title: "Loop", description: "Plan, act, observe, correct — until the goal is met or a budget says stop." },
            guardrails: { title: "Guardrails", description: "Budgets, timeouts and approval gates keep autonomy inside boundaries you set." },
            evals: { title: "Evals", description: "Golden sets and judges gate every change, so quality is a number and not an opinion." },
        },
        hermes: {
            heading: "The scaffolding, already built",
            tagline: "Every agent needs the same plumbing. We don't rebuild it each time.",
            description: "**The loop, tool routing, memory, retries, budgets, tracing and evals** are the same on every project. We run them on a mature, proven agent runtime instead of rebuilding them each time — so a project starts at the interesting problem instead of at the plumbing.",
            outcome: "For you that means agents in production in **weeks, not quarters**, on infrastructure that has already been through the failure modes yours is about to hit.",
            features: {
                loopEngine: { title: "Loop engine", description: "Plan/act/observe cycles with budgets, timeouts and clean cancellation." },
                toolRegistry: { title: "Tool registry", description: "Typed tools with scoped permissions and automatic schema validation." },
                memory: { title: "Memory", description: "Short-term working context plus durable long-term recall across runs." },
                retrieval: { title: "Retrieval", description: "Pluggable hybrid search with reranking and citation tracking built in." },
                tracing: { title: "Tracing", description: "Every span, token and tool call recorded and replayable after the fact." },
                evalHarness: { title: "Eval harness", description: "Golden sets and judge scoring wired into CI as a release gate." },
            },
        },
        engagementSteps: {
            audit: { title: "AI opportunity audit", duration: "1 week", description: "We map your workflows and data, and come back with the two or three places where an agent pays for itself — and the places where it definitely will not." },
            prototype: { title: "Working prototype", duration: "2–4 weeks", description: "A real agent on your real data, with an eval set from day one. You get something you can use and judge, not a slide deck." },
            hardening: { title: "Production hardening", duration: "4–8 weeks", description: "Guardrails, observability, cost control, permissions and the integration work that makes it part of your product rather than a side experiment." },
        },
    },
    work: {
        heroTitle: "Our work",
        heroSubtitle: "Two products we took from an idea to something real people use every day — and the engineering decisions that got them there.",
        readCaseStudy: "Read the case study",
    },
    blog: {
        heroTitle: "Notes on building software",
        heroSubtitle: "How we design and ship the things we build — and the decisions behind them.",
        readingTimeSuffix: "min read",
        read: "Read",
    },
    caseStudy: {
        labels: { role: "Role", platforms: "Platforms", timeline: "Timeline", theProblem: "The problem", whatWeBuilt: "What we built", theStack: "The stack", ctaTitle: "Have something like this to build?", readCaseStudy: "Read the case study" },
        demoda: {
            tagline: "A clothing marketplace where the hard part was never the catalogue.",
            role: "Staff augmentation — product, mobile, backend and platform",
            platforms: "iOS · Android · Web",
            year: "2022 – 2024",
            pills: ["mobile", "web", "api", "search", "payments", "staff augmentation"],
            intro: "demoda is a marketplace for clothing and accessories that lets small brands, second-hand stores, fashion designers and individuals sell their products. It covers the entire sales process — discovery, buyer-to-seller messaging, online payments, shipping and order tracking.\n\nWe joined the team as an embedded engineering group and worked across the whole stack: the Flutter app, the GraphQL API, the Python services behind it and the AWS infrastructure it all runs on.",
            challenge: [
                { title: "An order is a negotiation, not a checkout", body: "On a marketplace, buying is not one transaction — it is a multi-day exchange between two strangers, either of whom can simply stop replying. Money sits in the middle the whole time. The system has to know what happens when a seller never confirms, when a package is never shipped, when a buyer never collects." },
                { title: "Search runs on other people's data", body: "Nobody normalises a marketplace catalogue. Sellers write their own titles and descriptions from their phones — inconsistent casing, misspellings, brand names spelled six ways, Spanish and English mixed in the same listing. Matching a query against that is not a SQL LIKE." },
                { title: "Sellers are individuals, not merchants", body: "The seller side had to work for someone photographing a jacket on their bed, not for a warehouse with an ERP. That shapes onboarding, payment setup, image handling and every empty state in the app." },
            ],
            highlights: [
                { title: "An order state machine with a timeout on every edge", body: "The order lifecycle is modelled explicitly rather than inferred from a status column, and every state where the system waits on a human has its own timeout handler. Nothing waits forever.", bullets: ["Payment, pickup, shipping and waiting-for-shipment each have a dedicated timeout path", "Unhappy paths are first-class: seller rejects, buyer reports a problem, order is never collected", "Totals are calculated server-side, so the client can never be the source of truth for money", "Every transition is a handler that can be tested in isolation"] },
                { title: "Split payments, with each seller paid into their own account", body: "Sellers connect their own MercadoPago account through an OAuth flow, so funds settle to them directly rather than pooling in a platform wallet that has to be reconciled later.", bullets: ["OAuth onboarding per store, with automatic token refresh", "Payment preferences created server-side and reconciled from MercadoPago webhooks", "Webhook events drive order state transitions, not the app", "A separate bank-transfer withdrawal flow for seller balances"] },
                { title: "Search on OpenSearch, not on the database", body: "Product search runs against a purpose-built OpenSearch index with its own loader and a query builder that carries its own test suite — because relevance is a thing you regress, and you only notice if you test it.", bullets: ["Dedicated indexing pipeline, decoupled from the transactional database", "Query builder unit-tested against real query shapes", "Machine learning in the pipeline for relevance beyond keyword matching"] },
                { title: "Hasura as the API surface, with the schema in version control", body: "The read and write API is GraphQL over PostgreSQL via Hasura. What matters is that none of it lives only in a console: permissions, relationships and actions are committed metadata, reviewed in pull requests like any other code.", bullets: ["Migrations and Hasura metadata committed alongside the application code", "Row-level permissions expressed as data, not scattered through handlers", "Custom business logic behind Hasura Actions, served by Python services", "The Flutter client generates its types from the live schema, so a breaking change fails the build"] },
                { title: "One Flutter codebase across iOS, Android and web", body: "The app is organised feature-first — roughly thirty self-contained contexts, each owning its screens, state and queries — which is what makes a codebase this size survive more than one team rotation.", bullets: ["Riverpod for state, Freezed for immutable models, go_router for navigation", "GraphQL types generated from the schema rather than hand-written", "Sentry, Firebase Analytics and Remote Config wired in from the start"] },
                { title: "Per-branch environments from infrastructure as code", body: "The AWS footprint is defined in CloudFormation stacks, and every deploy label gets its own API endpoint. Reviewing a change means opening the environment it created, not reading a diff and hoping.", bullets: ["Separate stacks for core services, shared resources and the image pipeline", "Image processing with HEIC support, delivered from a dedicated edge stack", "Secrets held in AWS Secrets Manager, never in the repository"] },
            ],
            testimonial: { quote: "As co-founder of demoda, I am extremely impressed with the work pdelabs did helping in the development of our marketplace. They solved technically challenging problems such as real time messaging, complex order state machines and much more. Their commitment to understanding our vision and their ability to translate it into a functional and user-friendly platform was remarkable.", author: "Nicolas Ferro, co-founder" },
        },
        "vamos-juntos": {
            tagline: "Carpooling for Uruguay — matching people by route, not by address.",
            role: "Full product build — mobile, API and infrastructure",
            platforms: "iOS · Android",
            year: "2020 – 2022",
            pills: ["mobile", "api", "geo", "realtime", "serverless"],
            intro: "Vamos Juntos is a carpooling app that connects drivers and passengers for shared rides, making travel cheaper and greener. It handles the whole journey: matching people by route and schedule, agreeing on a ride, and in-app messaging with shared location while it is happening.\n\nWe built it end to end — the mobile apps, the API, the data model and the AWS and Firebase infrastructure underneath.",
            challenge: [
                { title: "Two people match on corridors, not on endpoints", body: "Carpooling is not ride-hailing. A passenger going part of the way is still a match, and a driver twenty minutes off a passenger's origin may still be one. Useful matching means reasoning about overlapping paths across a country, not comparing two pairs of coordinates." },
                { title: "Strangers are about to get in a car together", body: "Every trust affordance has to exist before anyone will use it once, let alone twice: verified identity, reviews in both directions, a way to report what went wrong, and a shared location during the ride so someone else can see where you are." },
                { title: "Rides get planned before they exist", body: "Most searches return nothing, because the matching ride has not been posted yet. A carpooling app that only answers the query in front of it feels empty on day one and stays empty." },
            ],
            highlights: [
                { title: "Matching on geography, with searches that outlive the query", body: "Route matching runs as dedicated geo services rather than as database predicates, and a search that finds nothing today is saved — so the user is notified when a matching ride is posted later. It turns an empty result into a pending one.", bullets: ["Dedicated geo and geocoding services behind the API", "Saved ride searches that fire a notification on a later match", "Map-first interface on the client, not a form with two text inputs"] },
                { title: "Identity verified once, at the edge", body: "Firebase issues the token, and an API Gateway JWT authorizer validates it before any function runs. No handler hand-rolls token parsing, which is exactly where auth bugs come from when there are thirty of them.", bullets: ["Firebase JWT authorizer configured at the HTTP API layer", "Sign-in with Google and Apple, plus phone-based registration", "Handlers receive an already-authenticated identity"] },
                { title: "A serverless API sized per function", body: "The API is a set of independently packaged Lambda functions deployed with the Serverless Framework to São Paulo — the closest AWS region to Uruguay, which matters more than it sounds when the client is on mobile data on a highway.", bullets: ["Each function packaged and optimised individually, so cold starts stay small", "TypeScript end to end, with the entity and repository layers shared", "Deployed to sa-east-1 for Latin American latency"] },
                { title: "The full ride lifecycle, including when it goes wrong", body: "Rides, ride requests, passengers, reviews and complaints are each modelled explicitly. The complaint path is not an afterthought bolted on after the first bad trip — it shipped with the product.", bullets: ["Request and accept flow with seat accounting", "Reviews in both directions, driver and passenger", "A complaint path with its own handling, separate from reviews"] },
                { title: "Realtime messaging with shared location", body: "Once a ride is agreed, riders and drivers coordinate in-app. Messaging runs on Firestore with push through Firebase Cloud Messaging, so the conversation survives the app being backgrounded — which it always is, because the user is travelling.", bullets: ["Firestore-backed messaging with live location sharing", "Push notifications through Firebase Cloud Messaging", "Crashlytics, Analytics and Remote Config for release safety"] },
                { title: "Two client generations", body: "The product shipped first as a React Native app in TypeScript, then was rebuilt in Flutter as the team's needs changed. Both generations ran against the same API — which is the payoff for having drawn that boundary properly in the first place.", bullets: ["v1: React Native, Redux Toolkit, React Navigation, native maps", "v2: Flutter with Riverpod and a GraphQL client", "One API contract across both, no rewrite of the backend"] },
            ],
            testimonial: { quote: "I couldn't be happier with the outstanding job pdelabs did in developing our carpooling app. Their team was always available, responsive, and really understood what we wanted, the development process was really smooth and we always knew what to expect. I highly recommend them for any software development needs.", author: "Mario Guadalupe, founder" },
        },
    },
    blogPosts: {
        "order-state-machine": { title: "Designing an order state machine with a timeout on every edge", excerpt: "On a marketplace, an order is a multi-day negotiation between two strangers with money in the middle. Here is how we modelled it so it never gets stuck." },
        "ai-agents-in-production": { title: "What actually goes inside a production AI agent", excerpt: "Anyone can wire an LLM to an API and get a demo. Everything hard is after that. The five systems that turn a prompt into an agent you can actually run." },
        inspiration: { title: "Why we're Punta del Este Labs", excerpt: "A software studio named after a beach town. What that actually has to do with how we build — timezone, a low-attrition talent market, and balance the useful kind." },
    },
};

const es: typeof en = {
    ai: {
        hero: { title: "Agentes de IA que llegan a", emphasis: "producción.", subtitle: "Sistemas RAG, loops agénticos y agentes autónomos — diseñados, evaluados y puestos en producción." },
        intro: "Cualquiera puede conectar un chatbot a una API. Lo difícil es todo lo que viene después de la demo: recuperación que aguanta con documentos desprolijos, agentes que se recuperan de sus propios errores, presupuestos que mantienen la cuenta bajo control y evaluaciones que te avisan en el momento exacto en que baja la calidad.\n\nEsa es la parte que hacemos. **Sistemas RAG, loops agénticos y agentes autónomos**, diseñados como software y no armados como un prompt.",
        whatWeBuild: { title: "Qué construimos", lead: "Seis cosas que hacemos bien, y las piezas que componen cada una." },
        anatomy: { title: "Qué hay dentro de un agente que ponemos en producción", lead: "Un agente no es un prompt. Son cinco sistemas que tienen que sostenerse juntos — y los pasos dos a cuatro corren en un loop hasta cumplir el objetivo o hasta que un presupuesto los detiene." },
        hermesTitle: "Cómo arrancamos rápido",
        engagement: { title: "Cómo es un proyecto de IA con nosotros", lead: "Pasos cortos, cada uno terminando en algo que podés evaluar de verdad." },
        cta: { title: "¿Tenés un flujo de trabajo que creés que un agente debería hacer?", button: "Hablemos de eso" },
        capabilities: {
            rag: { title: "RAG que realmente recupera", tagline: "Respuestas basadas en tus datos", description: "La mayoría de las demos de RAG se caen apenas aparecen documentos reales. Construimos recuperación que sobrevive en producción: **búsqueda híbrida, chunking deliberado, reranking y citas** — medida contra un golden set y no contra la intuición.", bullets: ["Búsqueda híbrida vectorial + por palabras clave", "Reranking y compresión de contexto", "Citas en línea y trazabilidad de fuentes", "Benchmarks de calidad de recuperación"] },
            agenticLoops: { title: "Loops agénticos", tagline: "Planificar, actuar, observar, corregir", description: "Un solo prompt no es un producto. Diseñamos el **loop** alrededor del modelo: herramientas tipadas, salidas estructuradas, reintentos acotados y autocorrección, para que el agente se recupere de sus errores en lugar de publicarlos con total confianza.", bullets: ["Llamadas a herramientas tipadas y con permisos", "Salida estructurada y validación de esquema", "Reintentos acotados y back-off", "Control de flujo determinista donde importa"] },
            autonomousAgents: { title: "Agentes autónomos", tagline: "Trabajo que sucede sin vos", description: "Agentes de larga duración que mantienen **memoria, corren en un cronograma y actúan sobre tus sistemas** — con puntos de control humanos exactamente donde el riesgo lo justifica, y una traza de auditoría completa para todo lo demás.", bullets: ["Memoria y estado persistentes", "Ejecuciones programadas y por eventos", "Aprobaciones con humano en el loop", "Traza de auditoría de cada acción"] },
            evals: { title: "Evaluaciones y observabilidad", tagline: "Enterate cuando lo rompés", description: "La diferencia entre una demo y un producto es saber que sigue funcionando mañana. Entregamos **golden datasets, scoring con LLM-como-juez y regression gates** en CI, más tracing en cada llamada en producción.", bullets: ["Golden datasets y suites de regresión", "LLM-como-juez y scoring por rúbrica", "Tracing en cada span", "Dashboards de costo y latencia"] },
            guardrails: { title: "Guardrails y seguridad", tagline: "Autonomía con cinturón de seguridad", description: "La autonomía solo sirve cuando está **acotada**. Presupuestos de tokens y de acciones, timeouts, alcances de permisos, defensa contra prompt injection y operaciones reversibles — para que el peor caso sea recuperable y no catastrófico.", bullets: ["Presupuestos de tokens, costo y acciones", "Permisos acotados por herramienta", "Endurecimiento contra prompt injection", "Operaciones reversibles e idempotentes"] },
            infrastructure: { title: "Infraestructura de LLM", tagline: "La parte poco glamorosa que define la factura", description: "Ruteo de modelos, caché de prompts, streaming, colas y fallbacks elegantes. La ingeniería que convierte un prototipo prometedor en algo que se mantiene **rápido, barato y disponible** bajo tráfico real.", bullets: ["Ruteo multiproveedor y fallbacks", "Caché de prompts y presupuesto de tokens", "Streaming y colas en segundo plano", "Rate limits, reintentos, dead letters"] },
        },
        anatomySteps: {
            context: { title: "Contexto", description: "La recuperación, la memoria y los permisos definen qué es lo que el modelo puede siquiera ver." },
            tools: { title: "Herramientas", description: "Tipadas, idempotentes, acotadas. Cada capacidad del agente es un contrato que podés revisar." },
            loop: { title: "Loop", description: "Planificar, actuar, observar, corregir — hasta cumplir el objetivo o hasta que un presupuesto diga basta." },
            guardrails: { title: "Guardrails", description: "Presupuestos, timeouts y puntos de aprobación mantienen la autonomía dentro de los límites que ponés." },
            evals: { title: "Evaluaciones", description: "Golden sets y jueces validan cada cambio, para que la calidad sea un número y no una opinión." },
        },
        hermes: {
            heading: "La base, ya resuelta",
            tagline: "Todo agente arranca sobre la misma base. No la rehacemos en cada proyecto.",
            description: "**El loop, el ruteo de herramientas, la memoria, los reintentos, los presupuestos, el tracing y las evaluaciones** son iguales en todos los proyectos. En vez de rehacerlos cada vez, los corremos sobre un runtime de agentes maduro y probado — así el proyecto arranca en el problema que importa y no en la infraestructura de siempre.",
            outcome: "Para vos eso significa agentes en producción en **semanas, no trimestres**, sobre una infraestructura que ya pasó por los modos de falla que el tuyo está por encontrar.",
            features: {
                loopEngine: { title: "Motor de loop", description: "Ciclos de planificar/actuar/observar con presupuestos, timeouts y cancelación limpia." },
                toolRegistry: { title: "Registro de herramientas", description: "Herramientas tipadas con permisos acotados y validación de esquema automática." },
                memory: { title: "Memoria", description: "Contexto de trabajo de corto plazo más recuerdo duradero de largo plazo entre ejecuciones." },
                retrieval: { title: "Recuperación", description: "Búsqueda híbrida enchufable con reranking y seguimiento de citas incorporados." },
                tracing: { title: "Tracing", description: "Cada span, token y llamada a herramienta registrado y reproducible después." },
                evalHarness: { title: "Arnés de evaluación", description: "Golden sets y scoring por juez integrados en CI como release gate." },
            },
        },
        engagementSteps: {
            audit: { title: "Auditoría de oportunidades de IA", duration: "1 semana", description: "Mapeamos tus flujos de trabajo y tus datos, y volvemos con los dos o tres lugares donde un agente se paga solo — y los lugares donde definitivamente no." },
            prototype: { title: "Prototipo funcional", duration: "2–4 semanas", description: "Un agente real sobre tus datos reales, con un set de evaluación desde el día uno. Recibís algo que podés usar y evaluar, no un slide deck." },
            hardening: { title: "Endurecimiento para producción", duration: "4–8 semanas", description: "Guardrails, observabilidad, control de costos, permisos y el trabajo de integración que lo convierte en parte de tu producto y no en un experimento aparte." },
        },
    },
    work: {
        heroTitle: "Nuestro trabajo",
        heroSubtitle: "Dos productos que llevamos de una idea a algo que gente real usa todos los días — y las decisiones de ingeniería que lo hicieron posible.",
        readCaseStudy: "Leé el caso de estudio",
    },
    blog: {
        heroTitle: "Notas sobre construir software",
        heroSubtitle: "Cómo diseñamos y lanzamos lo que construimos — y las decisiones detrás.",
        readingTimeSuffix: "min de lectura",
        read: "Leer",
    },
    caseStudy: {
        labels: { role: "Rol", platforms: "Plataformas", timeline: "Período", theProblem: "El problema", whatWeBuilt: "Qué construimos", theStack: "El stack", ctaTitle: "¿Tenés algo así para construir?", readCaseStudy: "Leé el caso de estudio" },
        demoda: {
            tagline: "Un marketplace de ropa donde lo difícil nunca fue el catálogo.",
            role: "Ampliación de equipo — producto, mobile, backend y plataforma",
            platforms: "iOS · Android · Web",
            year: "2022 – 2024",
            pills: ["mobile", "web", "api", "búsqueda", "pagos", "ampliación de equipo"],
            intro: "demoda es un marketplace de ropa y accesorios que permite a pequeñas marcas, tiendas de segunda mano, diseñadores de moda y particulares vender sus productos. Cubre todo el proceso de venta — descubrimiento, mensajería entre comprador y vendedor, pagos en línea, envío y seguimiento de pedidos.\n\nNos sumamos al equipo como un grupo de ingeniería embebido y trabajamos en todo el stack: la app en Flutter, la API GraphQL, los servicios en Python detrás y la infraestructura de AWS sobre la que corre todo.",
            challenge: [
                { title: "Un pedido es una negociación, no un checkout", body: "En un marketplace, comprar no es una sola transacción — es un intercambio de varios días entre dos desconocidos, cualquiera de los cuales puede simplemente dejar de responder. El dinero queda en el medio todo el tiempo. El sistema tiene que saber qué pasa cuando un vendedor nunca confirma, cuando un paquete nunca se envía, cuando un comprador nunca lo retira." },
                { title: "La búsqueda corre sobre datos ajenos", body: "Nadie normaliza el catálogo de un marketplace. Los vendedores escriben sus propios títulos y descripciones desde el celular — mayúsculas inconsistentes, errores de tipeo, marcas escritas de seis formas distintas, español e inglés mezclados en el mismo aviso. Hacer match de una consulta contra eso no es un SQL LIKE." },
                { title: "Los vendedores son personas, no comercios", body: "El lado del vendedor tenía que funcionar para alguien que fotografía una campera sobre su cama, no para un depósito con un ERP. Eso moldea el onboarding, la configuración de pagos, el manejo de imágenes y cada estado vacío de la app." },
            ],
            highlights: [
                { title: "Una máquina de estados de pedidos con un timeout en cada arista", body: "El ciclo de vida del pedido se modela de forma explícita en lugar de inferirse de una columna de estado, y cada estado en el que el sistema espera a una persona tiene su propio manejador de timeout. Nada espera para siempre.", bullets: ["Pago, retiro, envío y espera-de-despacho tienen cada uno su propia ruta de timeout", "Los caminos infelices son de primera clase: el vendedor rechaza, el comprador reporta un problema, el pedido nunca se retira", "Los totales se calculan del lado del servidor, así el cliente nunca es la fuente de verdad del dinero", "Cada transición es un manejador que se puede testear de forma aislada"] },
                { title: "Pagos divididos, con cada vendedor cobrando en su propia cuenta", body: "Los vendedores conectan su propia cuenta de MercadoPago mediante un flujo OAuth, así los fondos les llegan directo en lugar de acumularse en una billetera de la plataforma que hay que reconciliar después.", bullets: ["Onboarding OAuth por tienda, con refresco automático de tokens", "Preferencias de pago creadas del lado del servidor y reconciliadas desde los webhooks de MercadoPago", "Los eventos de webhook manejan las transiciones de estado del pedido, no la app", "Un flujo aparte de retiro por transferencia bancaria para los saldos de los vendedores"] },
                { title: "Búsqueda en OpenSearch, no en la base de datos", body: "La búsqueda de productos corre contra un índice de OpenSearch hecho a medida, con su propio loader y un query builder que trae su propia suite de tests — porque la relevancia es algo que se regresiona, y solo te enterás si lo testeás.", bullets: ["Pipeline de indexación dedicado, desacoplado de la base de datos transaccional", "Query builder con tests unitarios contra formas de consulta reales", "Machine learning en el pipeline para relevancia más allá del match por palabras clave"] },
                { title: "Hasura como superficie de la API, con el esquema en control de versiones", body: "La API de lectura y escritura es GraphQL sobre PostgreSQL vía Hasura. Lo que importa es que nada vive solo en una consola: permisos, relaciones y acciones son metadata versionada, revisada en pull requests como cualquier otro código.", bullets: ["Migraciones y metadata de Hasura versionadas junto al código de la aplicación", "Permisos a nivel de fila expresados como datos, no dispersos por los manejadores", "Lógica de negocio a medida detrás de Hasura Actions, servida por servicios en Python", "El cliente Flutter genera sus tipos desde el esquema en vivo, así un cambio incompatible rompe el build"] },
                { title: "Un solo código Flutter en iOS, Android y web", body: "La app está organizada por features — unos treinta contextos autocontenidos, cada uno dueño de sus pantallas, su estado y sus consultas — que es lo que hace que un código de este tamaño sobreviva más de una rotación de equipo.", bullets: ["Riverpod para el estado, Freezed para modelos inmutables, go_router para la navegación", "Tipos GraphQL generados desde el esquema en lugar de escritos a mano", "Sentry, Firebase Analytics y Remote Config integrados desde el arranque"] },
                { title: "Entornos por rama desde infraestructura como código", body: "La huella de AWS está definida en stacks de CloudFormation, y cada deploy label recibe su propio endpoint de API. Revisar un cambio significa abrir el entorno que creó, no leer un diff y cruzar los dedos.", bullets: ["Stacks separados para servicios core, recursos compartidos y el pipeline de imágenes", "Procesamiento de imágenes con soporte HEIC, servido desde un stack de edge dedicado", "Secretos guardados en AWS Secrets Manager, nunca en el repositorio"] },
            ],
            testimonial: { quote: "Como cofundador de demoda, estoy sumamente impresionado con el trabajo de pdelabs ayudando en el desarrollo de nuestro marketplace. Resolvieron problemas técnicamente desafiantes como la mensajería en tiempo real, complejas máquinas de estados de pedidos y mucho más. Su compromiso por entender nuestra visión y su capacidad para traducirla en una plataforma funcional y fácil de usar fue notable.", author: "Nicolás Ferro, cofundador" },
        },
        "vamos-juntos": {
            tagline: "Carpooling para Uruguay — emparejando personas por ruta, no por dirección.",
            role: "Desarrollo completo del producto — mobile, API e infraestructura",
            platforms: "iOS · Android",
            year: "2020 – 2022",
            pills: ["mobile", "api", "geo", "realtime", "serverless"],
            intro: "Vamos Juntos es una app de carpooling que conecta conductores y pasajeros para viajes compartidos, haciendo que viajar sea más barato y más ecológico. Maneja todo el trayecto: emparejar personas por ruta y horario, acordar un viaje y mensajería en la app con ubicación compartida mientras sucede.\n\nLo construimos de punta a punta — las apps móviles, la API, el modelo de datos y la infraestructura de AWS y Firebase por debajo.",
            challenge: [
                { title: "Dos personas hacen match por corredores, no por extremos", body: "El carpooling no es ride-hailing. Un pasajero que hace parte del camino sigue siendo un match, y un conductor a veinte minutos del origen de un pasajero también puede serlo. Un emparejamiento útil implica razonar sobre trayectos que se superponen a lo largo de un país, no comparar dos pares de coordenadas." },
                { title: "Dos desconocidos están por subirse al mismo auto", body: "Cada elemento de confianza tiene que existir antes de que alguien lo use una vez, y mucho menos dos: identidad verificada, reseñas en ambos sentidos, una forma de reportar lo que salió mal y una ubicación compartida durante el viaje para que alguien más pueda ver dónde estás." },
                { title: "Los viajes se planean antes de existir", body: "La mayoría de las búsquedas no devuelven nada, porque el viaje que haría match todavía no fue publicado. Una app de carpooling que solo responde la consulta que tiene enfrente se siente vacía el primer día y sigue vacía." },
            ],
            highlights: [
                { title: "Emparejamiento por geografía, con búsquedas que sobreviven a la consulta", body: "El emparejamiento de rutas corre como servicios geo dedicados en lugar de como predicados de base de datos, y una búsqueda que hoy no encuentra nada se guarda — así se le avisa al usuario cuando más tarde se publica un viaje que hace match. Convierte un resultado vacío en uno pendiente.", bullets: ["Servicios geo y de geocoding dedicados detrás de la API", "Búsquedas de viaje guardadas que disparan una notificación ante un match posterior", "Interfaz orientada al mapa en el cliente, no un formulario con dos campos de texto"] },
                { title: "Identidad verificada una sola vez, en el borde", body: "Firebase emite el token, y un JWT authorizer de API Gateway lo valida antes de que corra cualquier función. Ningún manejador parsea el token a mano, que es justo de donde salen los bugs de auth cuando hay treinta de ellos.", bullets: ["JWT authorizer de Firebase configurado en la capa de HTTP API", "Inicio de sesión con Google y Apple, más registro por teléfono", "Los manejadores reciben una identidad ya autenticada"] },
                { title: "Una API serverless dimensionada por función", body: "La API es un conjunto de funciones Lambda empaquetadas de forma independiente y desplegadas con el Serverless Framework a São Paulo — la región de AWS más cercana a Uruguay, algo que importa más de lo que parece cuando el cliente está con datos móviles en una ruta.", bullets: ["Cada función empaquetada y optimizada por separado, así los cold starts se mantienen chicos", "TypeScript de punta a punta, con las capas de entidad y repositorio compartidas", "Desplegado en sa-east-1 para latencia latinoamericana"] },
                { title: "El ciclo de vida completo del viaje, incluso cuando algo sale mal", body: "Viajes, solicitudes de viaje, pasajeros, reseñas y reclamos están cada uno modelados de forma explícita. El camino del reclamo no es un agregado puesto después del primer mal viaje — salió con el producto.", bullets: ["Flujo de solicitud y aceptación con conteo de asientos", "Reseñas en ambos sentidos, conductor y pasajero", "Un camino de reclamos con su propio manejo, separado de las reseñas"] },
                { title: "Mensajería en tiempo real con ubicación compartida", body: "Una vez acordado un viaje, pasajeros y conductores se coordinan dentro de la app. La mensajería corre sobre Firestore con push a través de Firebase Cloud Messaging, así la conversación sobrevive a que la app quede en segundo plano — que es lo que siempre pasa, porque el usuario está viajando.", bullets: ["Mensajería sobre Firestore con ubicación en vivo compartida", "Notificaciones push a través de Firebase Cloud Messaging", "Crashlytics, Analytics y Remote Config para lanzamientos seguros"] },
                { title: "Dos generaciones de cliente", body: "El producto salió primero como una app React Native en TypeScript, y luego se reconstruyó en Flutter a medida que cambiaron las necesidades del equipo. Ambas generaciones corrieron contra la misma API — que es la recompensa de haber trazado bien ese límite desde el principio.", bullets: ["v1: React Native, Redux Toolkit, React Navigation, mapas nativos", "v2: Flutter con Riverpod y un cliente GraphQL", "Un solo contrato de API para ambas, sin reescribir el backend"] },
            ],
            testimonial: { quote: "No podría estar más contento con el excelente trabajo que hizo pdelabs desarrollando nuestra app de carpooling. Su equipo siempre estuvo disponible, atento y entendió realmente lo que queríamos; el proceso de desarrollo fue muy fluido y siempre supimos qué esperar. Los recomiendo totalmente para cualquier necesidad de desarrollo de software.", author: "Mario Guadalupe, fundador" },
        },
    },
    blogPosts: {
        "order-state-machine": { title: "Diseñar una máquina de estados de pedidos con un timeout en cada arista", excerpt: "En un marketplace, un pedido es una negociación de varios días entre dos desconocidos con dinero en el medio. Así lo modelamos para que nunca se quede trabado." },
        "ai-agents-in-production": { title: "Qué hay realmente dentro de un agente de IA en producción", excerpt: "Cualquiera puede conectar un LLM a una API y tener una demo. Todo lo difícil viene después. Los cinco sistemas que convierten un prompt en un agente que realmente podés operar." },
        inspiration: { title: "Por qué somos Punta del Este Labs", excerpt: "Un estudio de software con el nombre de un balneario. Qué tiene que ver eso con cómo construimos — huso horario, un mercado de talento de baja rotación y el equilibrio del tipo útil." },
    },
};

const pt: typeof en = {
    ai: {
        hero: { title: "Agentes de IA que chegam à", emphasis: "produção.", subtitle: "Sistemas RAG, loops agênticos e agentes autônomos — projetados, avaliados e colocados em produção." },
        intro: "Qualquer um consegue ligar um chatbot a uma API. O difícil é tudo o que vem depois da demo: recuperação que aguenta documentos bagunçados, agentes que se recuperam dos próprios erros, orçamentos que mantêm a conta sob controle e avaliações que avisam no exato momento em que a qualidade cai.\n\nEssa é a parte que fazemos. **Sistemas RAG, loops agênticos e agentes autônomos**, projetados como software e não montados como um prompt.",
        whatWeBuild: { title: "O que construímos", lead: "Seis coisas que fazemos bem, e as peças que compõem cada uma delas." },
        anatomy: { title: "O que existe dentro de um agente que colocamos em produção", lead: "Um agente não é um prompt. São cinco sistemas que precisam se sustentar juntos — e os passos dois a quatro rodam em loop até o objetivo ser cumprido ou até um orçamento parar." },
        hermesTitle: "Como começamos rápido",
        engagement: { title: "Como é um projeto de IA com a gente", lead: "Passos curtos, cada um terminando em algo que você consegue de fato avaliar." },
        cta: { title: "Tem um fluxo de trabalho que você acha que um agente deveria fazer?", button: "Vamos conversar sobre isso" },
        capabilities: {
            rag: { title: "RAG que realmente recupera", tagline: "Respostas baseadas nos seus dados", description: "A maioria das demos de RAG desmorona no momento em que documentos reais aparecem. Construímos recuperação que sobrevive em produção: **busca híbrida, chunking deliberado, reranking e citações** — medida contra um golden set e não contra o feeling.", bullets: ["Busca híbrida vetorial + por palavras-chave", "Reranking e compressão de contexto", "Citações inline e rastreamento de fontes", "Benchmarks de qualidade de recuperação"] },
            agenticLoops: { title: "Loops agênticos", tagline: "Planejar, agir, observar, corrigir", description: "Um único prompt não é um produto. Projetamos o **loop** em volta do modelo: ferramentas tipadas, saídas estruturadas, retries limitados e autocorreção, para que o agente se recupere dos próprios erros em vez de publicá-los com total confiança.", bullets: ["Chamadas de ferramentas tipadas e com permissões", "Saída estruturada e validação de schema", "Retries limitados e back-off", "Controle de fluxo determinístico onde importa"] },
            autonomousAgents: { title: "Agentes autônomos", tagline: "Trabalho que acontece sem você", description: "Agentes de longa duração que mantêm **memória, rodam em uma agenda e agem sobre seus sistemas** — com checkpoints humanos exatamente onde o risco justifica, e uma trilha de auditoria completa para todo o resto.", bullets: ["Memória e estado persistentes", "Execuções agendadas e por eventos", "Aprovações com humano no loop", "Trilha de auditoria de cada ação"] },
            evals: { title: "Avaliações e observabilidade", tagline: "Saiba quando você quebra algo", description: "A diferença entre uma demo e um produto é saber que ele ainda funciona amanhã. Entregamos **golden datasets, scoring com LLM-como-juiz e regression gates** no CI, além de tracing em cada chamada em produção.", bullets: ["Golden datasets e suítes de regressão", "LLM-como-juiz e scoring por rubrica", "Tracing em cada span", "Dashboards de custo e latência"] },
            guardrails: { title: "Guardrails e segurança", tagline: "Autonomia com cinto de segurança", description: "A autonomia só é útil quando é **limitada**. Orçamentos de tokens e de ações, timeouts, escopos de permissão, defesa contra prompt injection e operações reversíveis — para que o pior caso seja recuperável e não catastrófico.", bullets: ["Orçamentos de tokens, custo e ações", "Permissões limitadas por ferramenta", "Endurecimento contra prompt injection", "Operações reversíveis e idempotentes"] },
            infrastructure: { title: "Infraestrutura de LLM", tagline: "A parte pouco glamourosa que define a conta", description: "Roteamento de modelos, cache de prompts, streaming, filas e fallbacks elegantes. A engenharia que transforma um protótipo promissor em algo que se mantém **rápido, barato e no ar** sob tráfego real.", bullets: ["Roteamento multiprovedor e fallbacks", "Cache de prompts e orçamento de tokens", "Streaming e filas em segundo plano", "Rate limits, retries, dead letters"] },
        },
        anatomySteps: {
            context: { title: "Contexto", description: "Recuperação, memória e permissões definem o que o modelo pode sequer ver." },
            tools: { title: "Ferramentas", description: "Tipadas, idempotentes, com escopo. Cada capacidade do agente é um contrato que você pode revisar." },
            loop: { title: "Loop", description: "Planejar, agir, observar, corrigir — até o objetivo ser cumprido ou até um orçamento mandar parar." },
            guardrails: { title: "Guardrails", description: "Orçamentos, timeouts e portões de aprovação mantêm a autonomia dentro dos limites que você define." },
            evals: { title: "Avaliações", description: "Golden sets e juízes validam cada mudança, para que a qualidade seja um número e não uma opinião." },
        },
        hermes: {
            heading: "A base, já pronta",
            tagline: "Todo agente começa sobre a mesma base. Não refazemos isso a cada projeto.",
            description: "**O loop, o roteamento de ferramentas, a memória, os retries, os orçamentos, o tracing e as avaliações** são iguais em todos os projetos. Em vez de refazer tudo isso a cada vez, rodamos sobre um runtime de agentes maduro e comprovado — então o projeto começa no problema que importa e não na infraestrutura de sempre.",
            outcome: "Para você isso significa agentes em produção em **semanas, não trimestres**, sobre uma infraestrutura que já passou pelos modos de falha que o seu está prestes a encontrar.",
            features: {
                loopEngine: { title: "Motor de loop", description: "Ciclos de planejar/agir/observar com orçamentos, timeouts e cancelamento limpo." },
                toolRegistry: { title: "Registro de ferramentas", description: "Ferramentas tipadas com permissões limitadas e validação de schema automática." },
                memory: { title: "Memória", description: "Contexto de trabalho de curto prazo mais recall duradouro de longo prazo entre execuções." },
                retrieval: { title: "Recuperação", description: "Busca híbrida plugável com reranking e rastreamento de citações embutidos." },
                tracing: { title: "Tracing", description: "Cada span, token e chamada de ferramenta registrado e reproduzível depois." },
                evalHarness: { title: "Arcabouço de avaliação", description: "Golden sets e scoring por juiz integrados ao CI como release gate." },
            },
        },
        engagementSteps: {
            audit: { title: "Auditoria de oportunidades de IA", duration: "1 semana", description: "Mapeamos seus fluxos de trabalho e seus dados, e voltamos com os dois ou três lugares onde um agente se paga — e os lugares onde definitivamente não." },
            prototype: { title: "Protótipo funcional", duration: "2–4 semanas", description: "Um agente real sobre seus dados reais, com um conjunto de avaliação desde o primeiro dia. Você recebe algo que pode usar e avaliar, não um slide deck." },
            hardening: { title: "Endurecimento para produção", duration: "4–8 semanas", description: "Guardrails, observabilidade, controle de custos, permissões e o trabalho de integração que o torna parte do seu produto e não um experimento à parte." },
        },
    },
    work: {
        heroTitle: "Nosso trabalho",
        heroSubtitle: "Dois produtos que levamos de uma ideia a algo que pessoas reais usam todos os dias — e as decisões de engenharia que tornaram isso possível.",
        readCaseStudy: "Leia o estudo de caso",
    },
    blog: {
        heroTitle: "Notas sobre construir software",
        heroSubtitle: "Como projetamos e lançamos o que construímos — e as decisões por trás disso.",
        readingTimeSuffix: "min de leitura",
        read: "Ler",
    },
    caseStudy: {
        labels: { role: "Papel", platforms: "Plataformas", timeline: "Período", theProblem: "O problema", whatWeBuilt: "O que construímos", theStack: "A stack", ctaTitle: "Tem algo assim para construir?", readCaseStudy: "Leia o estudo de caso" },
        demoda: {
            tagline: "Um marketplace de roupas onde o difícil nunca foi o catálogo.",
            role: "Ampliação de equipe — produto, mobile, backend e plataforma",
            platforms: "iOS · Android · Web",
            year: "2022 – 2024",
            pills: ["mobile", "web", "api", "busca", "pagamentos", "ampliação de equipe"],
            intro: "demoda é um marketplace de roupas e acessórios que permite a pequenas marcas, brechós, estilistas e pessoas físicas venderem seus produtos. Ele cobre todo o processo de venda — descoberta, mensageria entre comprador e vendedor, pagamentos online, envio e acompanhamento de pedidos.\n\nEntramos no time como um grupo de engenharia embarcado e trabalhamos em toda a stack: o app em Flutter, a API GraphQL, os serviços em Python por trás e a infraestrutura de AWS sobre a qual tudo roda.",
            challenge: [
                { title: "Um pedido é uma negociação, não um checkout", body: "Num marketplace, comprar não é uma única transação — é uma troca de vários dias entre dois estranhos, qualquer um dos quais pode simplesmente parar de responder. O dinheiro fica no meio o tempo todo. O sistema precisa saber o que acontece quando um vendedor nunca confirma, quando um pacote nunca é enviado, quando um comprador nunca retira." },
                { title: "A busca roda sobre dados dos outros", body: "Ninguém normaliza o catálogo de um marketplace. Os vendedores escrevem seus próprios títulos e descrições pelo celular — maiúsculas inconsistentes, erros de digitação, marcas escritas de seis jeitos diferentes, espanhol e inglês misturados no mesmo anúncio. Casar uma consulta contra isso não é um SQL LIKE." },
                { title: "Os vendedores são pessoas, não lojistas", body: "O lado do vendedor tinha que funcionar para alguém fotografando uma jaqueta em cima da cama, não para um galpão com ERP. Isso molda o onboarding, a configuração de pagamentos, o tratamento de imagens e cada estado vazio do app." },
            ],
            highlights: [
                { title: "Uma máquina de estados de pedidos com um timeout em cada aresta", body: "O ciclo de vida do pedido é modelado explicitamente em vez de inferido de uma coluna de status, e todo estado em que o sistema espera por uma pessoa tem seu próprio handler de timeout. Nada espera para sempre.", bullets: ["Pagamento, retirada, envio e espera-de-despacho têm cada um seu próprio caminho de timeout", "Os caminhos infelizes são de primeira classe: o vendedor rejeita, o comprador reporta um problema, o pedido nunca é retirado", "Os totais são calculados no servidor, então o cliente nunca é a fonte da verdade do dinheiro", "Cada transição é um handler que pode ser testado isoladamente"] },
                { title: "Pagamentos divididos, com cada vendedor recebendo na própria conta", body: "Os vendedores conectam a própria conta do MercadoPago por um fluxo OAuth, então os fundos chegam direto a eles em vez de se acumularem numa carteira da plataforma que precisa ser reconciliada depois.", bullets: ["Onboarding OAuth por loja, com refresh automático de tokens", "Preferências de pagamento criadas no servidor e reconciliadas pelos webhooks do MercadoPago", "Os eventos de webhook conduzem as transições de estado do pedido, não o app", "Um fluxo separado de saque por transferência bancária para os saldos dos vendedores"] },
                { title: "Busca no OpenSearch, não no banco de dados", body: "A busca de produtos roda contra um índice OpenSearch feito sob medida, com seu próprio loader e um query builder que carrega sua própria suíte de testes — porque relevância é algo que regride, e você só percebe se testar.", bullets: ["Pipeline de indexação dedicado, desacoplado do banco de dados transacional", "Query builder com testes unitários contra formatos de consulta reais", "Machine learning no pipeline para relevância além do match por palavras-chave"] },
                { title: "Hasura como superfície da API, com o schema em controle de versão", body: "A API de leitura e escrita é GraphQL sobre PostgreSQL via Hasura. O que importa é que nada vive só num console: permissões, relações e ações são metadata versionada, revisada em pull requests como qualquer outro código.", bullets: ["Migrações e metadata do Hasura versionadas junto ao código da aplicação", "Permissões a nível de linha expressas como dados, não espalhadas pelos handlers", "Lógica de negócio sob medida atrás das Hasura Actions, servida por serviços em Python", "O cliente Flutter gera seus tipos a partir do schema ao vivo, então uma mudança incompatível quebra o build"] },
                { title: "Um único código Flutter em iOS, Android e web", body: "O app é organizado por features — cerca de trinta contextos autocontidos, cada um dono de suas telas, seu estado e suas consultas — que é o que faz um código deste tamanho sobreviver a mais de uma rotação de time.", bullets: ["Riverpod para o estado, Freezed para modelos imutáveis, go_router para a navegação", "Tipos GraphQL gerados a partir do schema em vez de escritos à mão", "Sentry, Firebase Analytics e Remote Config integrados desde o início"] },
                { title: "Ambientes por branch a partir de infraestrutura como código", body: "A pegada da AWS é definida em stacks de CloudFormation, e cada deploy label recebe seu próprio endpoint de API. Revisar uma mudança significa abrir o ambiente que ela criou, não ler um diff e torcer.", bullets: ["Stacks separados para serviços core, recursos compartilhados e o pipeline de imagens", "Processamento de imagens com suporte a HEIC, servido a partir de um stack de edge dedicado", "Segredos guardados no AWS Secrets Manager, nunca no repositório"] },
            ],
            testimonial: { quote: "Como cofundador da demoda, estou extremamente impressionado com o trabalho da pdelabs ajudando no desenvolvimento do nosso marketplace. Eles resolveram problemas tecnicamente desafiadores como mensageria em tempo real, máquinas de estado de pedidos complexas e muito mais. O comprometimento em entender nossa visão e a capacidade de traduzi-la em uma plataforma funcional e fácil de usar foram notáveis.", author: "Nicolas Ferro, cofundador" },
        },
        "vamos-juntos": {
            tagline: "Carona compartilhada para o Uruguai — casando pessoas por rota, não por endereço.",
            role: "Desenvolvimento completo do produto — mobile, API e infraestrutura",
            platforms: "iOS · Android",
            year: "2020 – 2022",
            pills: ["mobile", "api", "geo", "realtime", "serverless"],
            intro: "Vamos Juntos é um app de carona compartilhada que conecta motoristas e passageiros em viagens compartilhadas, deixando o deslocamento mais barato e mais ecológico. Ele cuida de todo o trajeto: casar pessoas por rota e horário, combinar uma viagem e mensageria no app com localização compartilhada enquanto ela acontece.\n\nConstruímos de ponta a ponta — os apps mobile, a API, o modelo de dados e a infraestrutura de AWS e Firebase por baixo.",
            challenge: [
                { title: "Duas pessoas casam por corredores, não por extremos", body: "Carona não é ride-hailing. Um passageiro que faz parte do caminho ainda é um match, e um motorista a vinte minutos da origem de um passageiro também pode ser. Um casamento útil significa raciocinar sobre trajetos que se sobrepõem por um país inteiro, não comparar dois pares de coordenadas." },
                { title: "Dois estranhos estão prestes a entrar no mesmo carro", body: "Cada elemento de confiança precisa existir antes de alguém usar uma vez, quanto mais duas: identidade verificada, avaliações nos dois sentidos, um jeito de reportar o que deu errado e uma localização compartilhada durante a viagem para que outra pessoa possa ver onde você está." },
                { title: "As viagens são planejadas antes de existir", body: "A maioria das buscas não retorna nada, porque a viagem que daria match ainda não foi publicada. Um app de carona que só responde a consulta na sua frente parece vazio no primeiro dia e continua vazio." },
            ],
            highlights: [
                { title: "Casamento por geografia, com buscas que sobrevivem à consulta", body: "O casamento de rotas roda como serviços geo dedicados em vez de predicados de banco de dados, e uma busca que hoje não encontra nada é salva — então o usuário é avisado quando uma viagem que dá match é publicada depois. Transforma um resultado vazio em um pendente.", bullets: ["Serviços geo e de geocoding dedicados atrás da API", "Buscas de viagem salvas que disparam uma notificação quando há um match posterior", "Interface orientada ao mapa no cliente, não um formulário com dois campos de texto"] },
                { title: "Identidade verificada uma vez, na borda", body: "O Firebase emite o token, e um JWT authorizer do API Gateway o valida antes de qualquer função rodar. Nenhum handler faz o parsing do token na mão, que é justamente de onde vêm os bugs de auth quando existem trinta deles.", bullets: ["JWT authorizer do Firebase configurado na camada de HTTP API", "Login com Google e Apple, além de cadastro por telefone", "Os handlers recebem uma identidade já autenticada"] },
                { title: "Uma API serverless dimensionada por função", body: "A API é um conjunto de funções Lambda empacotadas de forma independente e implantadas com o Serverless Framework em São Paulo — a região da AWS mais próxima do Uruguai, o que importa mais do que parece quando o cliente está com dados móveis numa estrada.", bullets: ["Cada função empacotada e otimizada separadamente, então os cold starts ficam pequenos", "TypeScript de ponta a ponta, com as camadas de entidade e repositório compartilhadas", "Implantado em sa-east-1 para latência latino-americana"] },
                { title: "O ciclo de vida completo da viagem, inclusive quando dá errado", body: "Viagens, solicitações de viagem, passageiros, avaliações e reclamações são cada um modelados explicitamente. O caminho da reclamação não é um adendo colocado depois da primeira viagem ruim — saiu com o produto.", bullets: ["Fluxo de solicitação e aceitação com contagem de assentos", "Avaliações nos dois sentidos, motorista e passageiro", "Um caminho de reclamações com tratamento próprio, separado das avaliações"] },
                { title: "Mensageria em tempo real com localização compartilhada", body: "Assim que uma viagem é combinada, passageiros e motoristas se coordenam dentro do app. A mensageria roda sobre o Firestore com push pelo Firebase Cloud Messaging, então a conversa sobrevive ao app ir para segundo plano — o que sempre acontece, porque o usuário está viajando.", bullets: ["Mensageria sobre Firestore com localização ao vivo compartilhada", "Notificações push pelo Firebase Cloud Messaging", "Crashlytics, Analytics e Remote Config para lançamentos seguros"] },
                { title: "Duas gerações de cliente", body: "O produto saiu primeiro como um app React Native em TypeScript, e depois foi reconstruído em Flutter conforme as necessidades do time mudaram. As duas gerações rodaram contra a mesma API — que é a recompensa de ter traçado bem essa fronteira desde o início.", bullets: ["v1: React Native, Redux Toolkit, React Navigation, mapas nativos", "v2: Flutter com Riverpod e um cliente GraphQL", "Um único contrato de API para as duas, sem reescrever o backend"] },
            ],
            testimonial: { quote: "Eu não poderia estar mais feliz com o excelente trabalho que a pdelabs fez no desenvolvimento do nosso app de carona. O time esteve sempre disponível, atento e entendeu de verdade o que queríamos; o processo de desenvolvimento foi muito tranquilo e sempre soubemos o que esperar. Recomendo fortemente para qualquer necessidade de desenvolvimento de software.", author: "Mario Guadalupe, fundador" },
        },
    },
    blogPosts: {
        "order-state-machine": { title: "Projetando uma máquina de estados de pedidos com um timeout em cada aresta", excerpt: "Num marketplace, um pedido é uma negociação de vários dias entre dois estranhos com dinheiro no meio. Foi assim que modelamos para que ele nunca trave." },
        "ai-agents-in-production": { title: "O que realmente existe dentro de um agente de IA em produção", excerpt: "Qualquer um consegue ligar um LLM a uma API e ter uma demo. Tudo o que é difícil vem depois. Os cinco sistemas que transformam um prompt em um agente que você realmente consegue operar." },
        inspiration: { title: "Por que somos a Punta del Este Labs", excerpt: "Um estúdio de software com o nome de uma cidade praiana. O que isso tem a ver com como construímos — fuso horário, um mercado de talentos de baixa rotatividade e o equilíbrio do tipo útil." },
    },
};

export const PAGE_MESSAGES: Record<Locale, typeof en> = { en, es, pt };
