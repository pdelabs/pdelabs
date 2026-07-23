import { ReactNode } from "react";

export interface CaseStudyBlock {
    title: string;
    body: ReactNode;
    bullets?: string[];
}

export interface CaseStudyData {
    slug: string;
    name: string;
    /** Hero line. Should say what the project is, not adjectives about it. */
    tagline: string;
    metaTitle: string;
    metaDescription: string;
    year: string;
    role: string;
    platforms: string;
    pills: string[];
    images: string[];
    intro: ReactNode;
    challenge: CaseStudyBlock[];
    highlights: CaseStudyBlock[];
    stack: { group: string; items: string[] }[];
    testimonial: { quote: string; author: string };
}

export const DEMODA: CaseStudyData = {
    slug: "demoda",
    name: "demoda",
    tagline: "A clothing marketplace where the hard part was never the catalogue.",
    metaTitle: "demoda — Marketplace Case Study (Flutter, Hasura, OpenSearch)",
    metaDescription:
        "How pdelabs built demoda: a clothing marketplace with an order state machine that times out every wait, split payments through MercadoPago, OpenSearch-backed search and one Flutter codebase across iOS, Android and web.",
    year: "2022 – 2024",
    role: "Staff augmentation — product, mobile, backend and platform",
    platforms: "iOS · Android · Web",
    pills: ["mobile", "web", "api", "search", "payments", "staff augmentation"],
    images: [
        "/assets/demoda/app_preview.png",
        "/assets/demoda/app_preview2.png",
        "/assets/demoda/app_preview3.png",
        "/assets/demoda/app_preview4.png",
        "/assets/demoda/app_preview5.png",
    ],
    intro: (
        <>
            demoda is a marketplace for clothing and accessories that lets small brands, second-hand stores,
            fashion designers and individuals sell their products. It covers the entire sales process — discovery,
            buyer-to-seller messaging, online payments, shipping and order tracking.
            <br />
            <br />
            We joined the team as an embedded engineering group and worked across the whole stack: the Flutter
            app, the GraphQL API, the Python services behind it and the AWS infrastructure it all runs on.
        </>
    ),
    challenge: [
        {
            title: "An order is a negotiation, not a checkout",
            body: "On a marketplace, buying is not one transaction — it is a multi-day exchange between two strangers, either of whom can simply stop replying. Money sits in the middle the whole time. The system has to know what happens when a seller never confirms, when a package is never shipped, when a buyer never collects.",
        },
        {
            title: "Search runs on other people's data",
            body: "Nobody normalises a marketplace catalogue. Sellers write their own titles and descriptions from their phones — inconsistent casing, misspellings, brand names spelled six ways, Spanish and English mixed in the same listing. Matching a query against that is not a SQL LIKE.",
        },
        {
            title: "Sellers are individuals, not merchants",
            body: "The seller side had to work for someone photographing a jacket on their bed, not for a warehouse with an ERP. That shapes onboarding, payment setup, image handling and every empty state in the app.",
        },
    ],
    highlights: [
        {
            title: "An order state machine with a timeout on every edge",
            body: "The order lifecycle is modelled explicitly rather than inferred from a status column, and every state where the system waits on a human has its own timeout handler. Nothing waits forever.",
            bullets: [
                "Payment, pickup, shipping and waiting-for-shipment each have a dedicated timeout path",
                "Unhappy paths are first-class: seller rejects, buyer reports a problem, order is never collected",
                "Totals are calculated server-side, so the client can never be the source of truth for money",
                "Every transition is a handler that can be tested in isolation",
            ],
        },
        {
            title: "Split payments, with each seller paid into their own account",
            body: "Sellers connect their own MercadoPago account through an OAuth flow, so funds settle to them directly rather than pooling in a platform wallet that has to be reconciled later.",
            bullets: [
                "OAuth onboarding per store, with automatic token refresh",
                "Payment preferences created server-side and reconciled from MercadoPago webhooks",
                "Webhook events drive order state transitions, not the app",
                "A separate bank-transfer withdrawal flow for seller balances",
            ],
        },
        {
            title: "Search on OpenSearch, not on the database",
            body: "Product search runs against a purpose-built OpenSearch index with its own loader and a query builder that carries its own test suite — because relevance is a thing you regress, and you only notice if you test it.",
            bullets: [
                "Dedicated indexing pipeline, decoupled from the transactional database",
                "Query builder unit-tested against real query shapes",
                "Machine learning in the pipeline for relevance beyond keyword matching",
            ],
        },
        {
            title: "Hasura as the API surface, with the schema in version control",
            body: "The read and write API is GraphQL over PostgreSQL via Hasura. What matters is that none of it lives only in a console: permissions, relationships and actions are committed metadata, reviewed in pull requests like any other code.",
            bullets: [
                "Migrations and Hasura metadata committed alongside the application code",
                "Row-level permissions expressed as data, not scattered through handlers",
                "Custom business logic behind Hasura Actions, served by Python services",
                "The Flutter client generates its types from the live schema, so a breaking change fails the build",
            ],
        },
        {
            title: "One Flutter codebase across iOS, Android and web",
            body: "The app is organised feature-first — roughly thirty self-contained contexts, each owning its screens, state and queries — which is what makes a codebase this size survive more than one team rotation.",
            bullets: [
                "Riverpod for state, Freezed for immutable models, go_router for navigation",
                "GraphQL types generated from the schema rather than hand-written",
                "Sentry, Firebase Analytics and Remote Config wired in from the start",
            ],
        },
        {
            title: "Per-branch environments from infrastructure as code",
            body: "The AWS footprint is defined in CloudFormation stacks, and every deploy label gets its own API endpoint. Reviewing a change means opening the environment it created, not reading a diff and hoping.",
            bullets: [
                "Separate stacks for core services, shared resources and the image pipeline",
                "Image processing with HEIC support, delivered from a dedicated edge stack",
                "Secrets held in AWS Secrets Manager, never in the repository",
            ],
        },
    ],
    stack: [
        { group: "Mobile & web", items: ["Flutter", "Dart", "Riverpod", "Freezed", "go_router", "GraphQL codegen"] },
        { group: "API", items: ["Hasura", "GraphQL", "PostgreSQL"] },
        { group: "Services", items: ["Python", "FastAPI", "AWS Lambda", "Pants"] },
        { group: "Search", items: ["OpenSearch", "TensorFlow", "Transformers"] },
        { group: "Payments", items: ["MercadoPago"] },
        { group: "Platform", items: ["AWS CloudFormation", "S3", "Firebase", "Sentry"] },
    ],
    testimonial: {
        quote:
            "As co-founder of demoda, I am extremely impressed with the work pdelabs did helping in the development of our marketplace. They solved technically challenging problems such as real time messaging, complex order state machines and much more. Their commitment to understanding our vision and their ability to translate it into a functional and user-friendly platform was remarkable.",
        author: "Nicolas Ferro, co-founder",
    },
};

export const VAMOS_JUNTOS: CaseStudyData = {
    slug: "vamos-juntos",
    name: "Vamos Juntos",
    tagline: "Carpooling for Uruguay — matching people by route, not by address.",
    metaTitle: "Vamos Juntos — Carpooling App Case Study (React Native, Serverless)",
    metaDescription:
        "How pdelabs built Vamos Juntos: a carpooling app matching drivers and passengers along overlapping routes, with a serverless API on AWS, Firebase identity verified at the edge, and realtime messaging with shared location.",
    year: "2020 – 2022",
    role: "Full product build — mobile, API and infrastructure",
    platforms: "iOS · Android",
    pills: ["mobile", "api", "geo", "realtime", "serverless"],
    images: [
        "/assets/vamosjuntos/app_preview.png",
        "/assets/vamosjuntos/app_preview_2.png",
        "/assets/vamosjuntos/app_preview_3.png",
        "/assets/vamosjuntos/app_preview_4.png",
        "/assets/vamosjuntos/app_preview_5.png",
        "/assets/vamosjuntos/app_preview_6.png",
    ],
    intro: (
        <>
            Vamos Juntos is a carpooling app that connects drivers and passengers for shared rides, making travel
            cheaper and greener. It handles the whole journey: matching people by route and schedule, agreeing on
            a ride, and in-app messaging with shared location while it is happening.
            <br />
            <br />
            We built it end to end — the mobile apps, the API, the data model and the AWS and Firebase
            infrastructure underneath.
        </>
    ),
    challenge: [
        {
            title: "Two people match on corridors, not on endpoints",
            body: "Carpooling is not ride-hailing. A passenger going part of the way is still a match, and a driver twenty minutes off a passenger's origin may still be one. Useful matching means reasoning about overlapping paths across a country, not comparing two pairs of coordinates.",
        },
        {
            title: "Strangers are about to get in a car together",
            body: "Every trust affordance has to exist before anyone will use it once, let alone twice: verified identity, reviews in both directions, a way to report what went wrong, and a shared location during the ride so someone else can see where you are.",
        },
        {
            title: "Rides get planned before they exist",
            body: "Most searches return nothing, because the matching ride has not been posted yet. A carpooling app that only answers the query in front of it feels empty on day one and stays empty.",
        },
    ],
    highlights: [
        {
            title: "Matching on geography, with searches that outlive the query",
            body: "Route matching runs as dedicated geo services rather than as database predicates, and a search that finds nothing today is saved — so the user is notified when a matching ride is posted later. It turns an empty result into a pending one.",
            bullets: [
                "Dedicated geo and geocoding services behind the API",
                "Saved ride searches that fire a notification on a later match",
                "Map-first interface on the client, not a form with two text inputs",
            ],
        },
        {
            title: "Identity verified once, at the edge",
            body: "Firebase issues the token, and an API Gateway JWT authorizer validates it before any function runs. No handler hand-rolls token parsing, which is exactly where auth bugs come from when there are thirty of them.",
            bullets: [
                "Firebase JWT authorizer configured at the HTTP API layer",
                "Sign-in with Google and Apple, plus phone-based registration",
                "Handlers receive an already-authenticated identity",
            ],
        },
        {
            title: "A serverless API sized per function",
            body: "The API is a set of independently packaged Lambda functions deployed with the Serverless Framework to São Paulo — the closest AWS region to Uruguay, which matters more than it sounds when the client is on mobile data on a highway.",
            bullets: [
                "Each function packaged and optimised individually, so cold starts stay small",
                "TypeScript end to end, with the entity and repository layers shared",
                "Deployed to sa-east-1 for Latin American latency",
            ],
        },
        {
            title: "The full ride lifecycle, including when it goes wrong",
            body: "Rides, ride requests, passengers, reviews and complaints are each modelled explicitly. The complaint path is not an afterthought bolted on after the first bad trip — it shipped with the product.",
            bullets: [
                "Request and accept flow with seat accounting",
                "Reviews in both directions, driver and passenger",
                "A complaint path with its own handling, separate from reviews",
            ],
        },
        {
            title: "Realtime messaging with shared location",
            body: "Once a ride is agreed, riders and drivers coordinate in-app. Messaging runs on Firestore with push through Firebase Cloud Messaging, so the conversation survives the app being backgrounded — which it always is, because the user is travelling.",
            bullets: [
                "Firestore-backed messaging with live location sharing",
                "Push notifications through Firebase Cloud Messaging",
                "Crashlytics, Analytics and Remote Config for release safety",
            ],
        },
        {
            title: "Two client generations",
            body: "The product shipped first as a React Native app in TypeScript, then was rebuilt in Flutter as the team's needs changed. Both generations ran against the same API — which is the payoff for having drawn that boundary properly in the first place.",
            bullets: [
                "v1: React Native, Redux Toolkit, React Navigation, native maps",
                "v2: Flutter with Riverpod and a GraphQL client",
                "One API contract across both, no rewrite of the backend",
            ],
        },
    ],
    stack: [
        { group: "Mobile", items: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation", "Flutter", "Riverpod"] },
        { group: "API", items: ["AWS Lambda", "API Gateway", "Serverless Framework", "TypeScript"] },
        { group: "Data", items: ["PostgreSQL", "Firestore"] },
        { group: "Identity", items: ["Firebase Auth", "Google Sign-In", "Sign in with Apple"] },
        { group: "Platform", items: ["Firebase Cloud Messaging", "Crashlytics", "Analytics", "Remote Config"] },
    ],
    testimonial: {
        quote:
            "I couldn't be happier with the outstanding job pdelabs did in developing our carpooling app. Their team was always available, responsive, and really understood what we wanted, the development process was really smooth and we always knew what to expect. I highly recommend them for any software development needs.",
        author: "Mario Guadalupe, founder",
    },
};

export const CASE_STUDIES = [DEMODA, VAMOS_JUNTOS];
