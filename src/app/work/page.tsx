import type { Metadata } from "next";
import WorkIndexContent from "./WorkIndexContent";

const title = "Our Work — Software Case Studies";
const description =
    "Case studies from pdelabs: a clothing marketplace with an order state machine and OpenSearch-backed search, and a carpooling app matching riders along overlapping routes. What we built and how.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/work" },
    openGraph: { url: "/work", title: `${title} | pdelabs`, description },
    twitter: { title: `${title} | pdelabs`, description },
};

export default function WorkIndex() {
    return <WorkIndexContent />;
}
