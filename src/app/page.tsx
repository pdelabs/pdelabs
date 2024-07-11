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
import DevelopmentProcess from "@/sections/DevelopmentProcess/DevelopmentProcess";
import Contact from "@/sections/Contact/Contact";
import TechnologiesScrollList from "@/components/TechnologiesScrollList";
import { Body } from "@/components/Typography/Typography";
import { HeartIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Toaster />
      <Header />
      <HomeSection />
      <WaterSection>
        <Services />
        {/* <AboutUs /> */}
        <Portfolio />
        {/* <DevelopmentProcess /> */}
        <Body style={{ color: 'white' }} className="m-auto left-0 right-0 text-center inline-flex mt-24">
          Some of the technologies we <HeartIcon className={"mx-1"} style={{ color: "#fc0e0e" }} fill="#fc0e0e" /> working with,
        </Body>
        <TechnologiesScrollList />
        <Contact />

      </WaterSection>
    </main>

  )
}

const WaterSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"flex flex-col items-center relative bg-[#547B96] pb-24 gap-y-1"}>
      {children}
    </div>
  )
}