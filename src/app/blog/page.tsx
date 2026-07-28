import type { Metadata } from "next";
import BlogIndexContent from "./BlogIndexContent";

const title = "Blog — Notes on Building Software";
const description =
    "Field notes from pdelabs: how we design and ship software. State machines, AI agents, nearshore engineering, and the decisions behind the products we build.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog" },
    openGraph: { url: "/blog", title: `${title} | pdelabs`, description },
    twitter: { title: `${title} | pdelabs`, description },
};

export default function BlogIndex() {
    return <BlogIndexContent />;
}
