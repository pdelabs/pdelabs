import LosDedosFooterContainer from "@/components/LosDedosFooterContainer/LosDedosFooterContainer";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Toaster } from "@/components/ui/toaster"
import CalendlyDialogOpenProvider from "@/components/Calendly/CalendlyDialogOpenProvider";
import Header from "@/components/Header/Header";
import Services from "@/sections/Services/Services";
import AboutUs from "@/sections/AboutUs/AboutUs";
import HomeSection from "@/sections/Home/Home";
import { FC, PropsWithChildren } from "react";
import Portfolio from "@/sections/Portfolio/Portfolio";
import { LargeBody, Strong } from "@/components/Typography/Typography";

export default function Home() {
  return (
    <CalendlyDialogOpenProvider>
      <main className="flex min-h-screen flex-col justify-between">
        <Toaster />
        <Header />
        <HomeSection />
        <WaterSection>

          <Services />
          <AboutUs />
          <Portfolio />
          {/* <Body style={{ color: 'white', zIndex: 5 }} className="m-auto left-0 right-0 text-center inline-flex">
            Some of the technologies we <HeartIcon className={"mx-1"} style={{ color: "#ff2b2b" }} fill="#ff2b2b" /> working with,
          </Body>
          <TechnologiesScrollList /> */}
        </WaterSection>
        <CalendlyWidget />
        <LosDedosFooterContainer />
      </main >
    </CalendlyDialogOpenProvider>

  )
}


const WaterSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"flex flex-col items-center relative bg-[#547B96] pb-24 gap-y-1"}>
      {children}
    </div>
  )
}