import { Toaster } from "@/components/ui/toaster"
import { FC, PropsWithChildren } from "react";
import Contact from "@/sections/Contact/Contact";
import Box from "@/components/Box/Box";

export default function Home() {
    return (
        <main className="flex flex-col justify-between">
            <Toaster />
            <WaterSection>
                <Box pt="4rem">
                    <Contact />
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
