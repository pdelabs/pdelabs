import { Strong } from "@/components/Typography/Typography";
import {
    Bot,
    Braces,
    GitBranch,
    LucideProps,
    Radar,
    ScanSearch,
    ShieldCheck,
    Workflow,
} from "lucide-react";
import { ReactNode } from "react";

interface Capability {
    id: string;
    title: string;
    tagline: string;
    description: ReactNode;
    bullets: string[];
    Icon: React.FC<LucideProps>;
}

export const CAPABILITIES: Capability[] = [
    {
        id: 'rag',
        title: 'RAG that actually retrieves',
        tagline: 'Answers grounded in your data',
        description: (
            <>
                Most RAG demos fall apart the moment real documents show up. We build retrieval that survives
                production: <Strong>hybrid search, deliberate chunking, reranking and citations</Strong> — measured
                against a golden set instead of vibes.
            </>
        ),
        bullets: ['Hybrid vector + keyword search', 'Reranking & context compression', 'Inline citations and source tracing', 'Retrieval quality benchmarks'],
        Icon: ScanSearch,
    },
    {
        id: 'agentic-loops',
        title: 'Agentic loops',
        tagline: 'Plan, act, observe, correct',
        description: (
            <>
                A single prompt is not a product. We design the <Strong>loop</Strong> around the model: typed tools,
                structured outputs, bounded retries and self-correction, so the agent recovers from its own mistakes
                instead of confidently shipping them.
            </>
        ),
        bullets: ['Typed, permissioned tool calls', 'Structured output & schema validation', 'Bounded retries and back-off', 'Deterministic control flow where it matters'],
        Icon: Workflow,
    },
    {
        id: 'autonomous-agents',
        title: 'Autonomous agents',
        tagline: 'Work that happens without you',
        description: (
            <>
                Long-running agents that hold <Strong>memory, run on a schedule and act on your systems</Strong> —
                with human-in-the-loop checkpoints exactly where the stakes justify them, and a full audit trail
                for everything else.
            </>
        ),
        bullets: ['Persistent memory & state', 'Scheduled and event-triggered runs', 'Human-in-the-loop approvals', 'Full audit trail of every action'],
        Icon: Bot,
    },
    {
        id: 'evals',
        title: 'Evals & observability',
        tagline: 'Know when you break it',
        description: (
            <>
                The difference between a demo and a product is knowing it still works tomorrow. We ship
                <Strong> golden datasets, LLM-as-judge scoring and regression gates</Strong> in CI, plus tracing on
                every call in production.
            </>
        ),
        bullets: ['Golden datasets & regression suites', 'LLM-as-judge and rubric scoring', 'Tracing on every span', 'Cost and latency dashboards'],
        Icon: Radar,
    },
    {
        id: 'guardrails',
        title: 'Guardrails & safety',
        tagline: 'Autonomy with a seatbelt',
        description: (
            <>
                Autonomy is only useful when it is <Strong>bounded</Strong>. Token and action budgets, timeouts,
                permission scopes, prompt-injection defence and reversible operations — so the worst case is
                recoverable, not catastrophic.
            </>
        ),
        bullets: ['Token, cost & action budgets', 'Scoped permissions per tool', 'Prompt-injection hardening', 'Reversible, idempotent operations'],
        Icon: ShieldCheck,
    },
    {
        id: 'infrastructure',
        title: 'LLM infrastructure',
        tagline: 'The unglamorous part that decides the bill',
        description: (
            <>
                Model routing, prompt caching, streaming, queues and graceful fallbacks. The engineering that turns a
                promising prototype into something that stays <Strong>fast, cheap and up</Strong> under real traffic.
            </>
        ),
        bullets: ['Multi-provider routing & fallbacks', 'Prompt caching & token budgeting', 'Streaming and background queues', 'Rate limits, retries, dead letters'],
        Icon: Braces,
    },
];

interface AnatomyStep {
    step: string;
    title: string;
    description: string;
}

export const AGENT_ANATOMY: AnatomyStep[] = [
    {
        step: '01',
        title: 'Context',
        description: 'Retrieval, memory and permissions decide what the model is even allowed to see.',
    },
    {
        step: '02',
        title: 'Tools',
        description: 'Typed, idempotent, scoped. Every capability the agent has is a contract you can review.',
    },
    {
        step: '03',
        title: 'Loop',
        description: 'Plan, act, observe, correct — until the goal is met or a budget says stop.',
    },
    {
        step: '04',
        title: 'Guardrails',
        description: 'Budgets, timeouts and approval gates keep autonomy inside boundaries you set.',
    },
    {
        step: '05',
        title: 'Evals',
        description: 'Golden sets and judges gate every change, so quality is a number and not an opinion.',
    },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * HERMES — flagship case study.
 *
 * TODO(luis): swap in the real specifics before this goes out — what Hermes
 * runs on, who uses it, and any metric you are happy to publish (volume,
 * latency, hours saved). Concrete numbers sell this section far harder than
 * the capability copy below.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const HERMES = {
    name: 'Hermes',
    kicker: 'Built in-house',
    tagline: 'Our agent runtime for autonomous work.',
    description: (
        <>
            Hermes is the runtime we built for ourselves after shipping enough agents to get tired of rebuilding
            the same scaffolding. It handles the parts that are the same every time — <Strong>the loop, tool
                routing, memory, retries, budgets, tracing and evals</Strong> — so a project starts at the interesting
            problem instead of at plumbing.
        </>
    ),
    outcome: (
        <>
            For you that means agents in production in <Strong>weeks, not quarters</Strong>, on infrastructure that
            has already been through the failure modes yours is about to hit.
        </>
    ),
    pills: ['RAG', 'agentic loops', 'autonomous agents', 'tool use', 'evals', 'tracing'],
    features: [
        { title: 'Loop engine', description: 'Plan/act/observe cycles with budgets, timeouts and clean cancellation.' },
        { title: 'Tool registry', description: 'Typed tools with scoped permissions and automatic schema validation.' },
        { title: 'Memory', description: 'Short-term working context plus durable long-term recall across runs.' },
        { title: 'Retrieval', description: 'Pluggable hybrid search with reranking and citation tracking built in.' },
        { title: 'Tracing', description: 'Every span, token and tool call recorded and replayable after the fact.' },
        { title: 'Eval harness', description: 'Golden sets and judge scoring wired into CI as a release gate.' },
    ],
};

interface EngagementStep {
    title: string;
    duration: string;
    description: ReactNode;
}

export const AI_ENGAGEMENT: EngagementStep[] = [
    {
        title: 'AI opportunity audit',
        duration: '1 week',
        description: <>We map your workflows and data, and come back with the two or three places where an agent pays for itself — and the places where it definitely will not.</>,
    },
    {
        title: 'Working prototype',
        duration: '2–4 weeks',
        description: <>A real agent on your real data, with an eval set from day one. You get something you can use and judge, not a slide deck.</>,
    },
    {
        title: 'Production hardening',
        duration: '4–8 weeks',
        description: <>Guardrails, observability, cost control, permissions and the integration work that makes it part of your product rather than a side experiment.</>,
    },
];
