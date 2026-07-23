import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Why We Are Called Punta del Este Labs",
    description:
        "The story behind pdelabs — and why building from Punta del Este, Uruguay, means a nearshore team in your timezone, from Latin America's most stable, lowest-attrition tech market.",
    alternates: { canonical: "/blog/inspiration" },
    openGraph: {
        type: "article",
        url: "/blog/inspiration",
        title: "Why We Are Called Punta del Este Labs",
        description:
            "Why building from Punta del Este, Uruguay means a nearshore team in your timezone — steady, close, and built to last.",
    },
};

export default function InspirationLayout({ children }: PropsWithChildren) {
    return <>{children}</>;
}
