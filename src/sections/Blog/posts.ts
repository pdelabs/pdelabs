/**
 * Blog post registry. The article bodies live in their route pages (they carry
 * JSX and diagrams); this is the metadata the index card, the sitemap and the
 * BlogPosting JSON-LD all read, so they never drift apart.
 *
 * Ordered newest-first — the /blog index renders them in this order.
 */
export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    /** ISO date, used for display and for datePublished in structured data. */
    date: string;
    readingTime: string;
    tags: string[];
}

export const BLOG_POSTS: BlogPostMeta[] = [
    {
        slug: "order-state-machine",
        title: "Designing an order state machine with a timeout on every edge",
        excerpt:
            "On a marketplace, an order is a multi-day negotiation between two strangers with money in the middle. Here is how we modelled it so it never gets stuck.",
        date: "2026-07-24",
        readingTime: "7 min read",
        tags: ["architecture", "marketplaces", "backend"],
    },
    {
        slug: "inspiration",
        title: "Why we're Punta del Este Labs",
        excerpt:
            "A software studio named after a beach town. What that actually has to do with how we build — timezone, a low-attrition talent market, and balance the useful kind.",
        date: "2024-08-01",
        readingTime: "4 min read",
        tags: ["nearshore", "uruguay", "team"],
    },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
