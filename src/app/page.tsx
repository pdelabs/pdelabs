import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header/Header";
import Services from "@/sections/Services/Services";
import HomeSection from "@/sections/Home/Home";
import { FC, PropsWithChildren } from "react";
import Portfolio from "@/sections/Portfolio/Portfolio";
import Contact from "@/sections/Contact/Contact";
import TechnologiesScrollList from "@/components/TechnologiesScrollList";
import { Body } from "@/components/Typography/Typography";
import { HeartIcon } from "lucide-react";
import DevelopmentProcess from "@/sections/DevelopmentProcess/DevelopmentProcess";
import Waves from "@/components/SunsetContainer/Waves/Waves";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Toaster />
      <Header />
      <HomeSection />
      <WaterSection>
        <Services />
        <Waves />
        <Portfolio />
        <Body style={{ color: 'white' }} className="m-auto left-0 right-0 text-center inline-flex mt-24">
          Some of the technologies we <HeartIcon className={"mx-1"} style={{ color: "#fc0e0e" }} fill="#fc0e0e" /> working with,
        </Body>
        <TechnologiesScrollList />
        <Waves />
        <DevelopmentProcess />
        <Waves />
        <Contact />
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
