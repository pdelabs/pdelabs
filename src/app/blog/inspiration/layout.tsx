import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Why We Are Called Punta del Este Labs",
    description:
        "The story behind pdelabs: how Punta del Este, Uruguay — its beaches, its calm and its growing tech scene — shapes the way we build software.",
    alternates: { canonical: "/blog/inspiration" },
    openGraph: {
        type: "article",
        url: "/blog/inspiration",
        title: "Why We Are Called Punta del Este Labs",
        description:
            "The story behind pdelabs: how Punta del Este, Uruguay shapes the way we build software.",
    },
};

export default function InspirationLayout({ children }: PropsWithChildren) {
    return <>{children}</>;
}
