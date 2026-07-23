import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import { FC, PropsWithChildren } from "react";
import Contact from "@/sections/Contact/Contact";
import Box from "@/components/Box/Box";

export const metadata: Metadata = {
    title: "Contact Us — Start Your Software Project",
    description:
        "Tell us about your project and we will get back to you in less than 24 hours. Book a call with the pdelabs team in Punta del Este, Uruguay, or write to us by email.",
    alternates: { canonical: "/contact" },
    openGraph: {
        url: "/contact",
        title: "Contact pdelabs — Start Your Software Project",
        description:
            "Tell us about your project and we will get back to you in less than 24 hours.",
    },
};

export default function ContactPage() {
    return (
        <main className="flex flex-col justify-between">
            <Toaster />
            <WaterSection>
                <Box pt="4rem">
                    <Contact isPageHeading />
                </Box>
            </WaterSection>
        </main>

    )
}

const WaterSection: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={"flex flex-col items-center relative bg-[#547B96] pb-24"}>
            {children}
        </div>
    )
}
