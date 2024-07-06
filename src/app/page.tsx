import LosDedosFooterContainer from "@/components/LosDedosFooterContainer/LosDedosFooterContainer";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import TechnologiesScrollList from "@/components/TechnologiesScrollList";
import { BigTitle, Body, HugeTitle, Subtitle, Title } from "@/components/Typography/Typography";
import styles from './page.module.css';
import c from 'classnames';
import { FC, PropsWithChildren, useEffect } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Toaster } from "@/components/ui/toaster"
import CalendlyDialogOpenProvider from "@/components/Calendly/CalendlyDialogOpenProvider";
import { HeartIcon } from "lucide-react";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <CalendlyDialogOpenProvider>
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <Toaster />
        <SunsetContainer>
          <div className="flex flex-col">
            <BigTitle style={{ color: 'white' }} className="text-center center white pt-8">Crafting exceptional software solutions to help your business <br /><span style={{
              textShadow: "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #ffd271, 0 0 4px #ffd271, 0 0 5px #ffd271, 0 0 6px #ffd271, 0 0 10px #ffd271"
            }}>shine.</span></BigTitle>
          </div>
        </SunsetContainer>
        <div className="flex flex-col items-center relative bg-[#547B96] pb-24 gap-y-1" style={{ color: 'white' }}>
          <Services />
          <Body style={{ color: 'white', zIndex: 5 }} className="m-auto left-0 right-0 text-center inline-flex">
            Some of the technologies we <HeartIcon className={"mx-1"} style={{ color: "#ff2b2b" }} fill="#ff2b2b" /> working with,
          </Body>
          <TechnologiesScrollList />
        </div>
        <CalendlyWidget />
        <LosDedosFooterContainer />

      </main >
    </CalendlyDialogOpenProvider>

  )
}

const Services = () => {
  return (
    <section id="services" className="flex flex-col gap-1 px-8">
      <Container>
        <Title style={{ color: 'white' }} className="text-left center white pt-8">What we offer</Title>
        <Body>
          From sleek web and mobile applications to cutting-edge AI-powered solutions, our team delivers innovative and impactful projects that drive business success.
        </Body>
        <div className={styles.services}>
          <ServiceCard
            title={"Custom Software Development"}
            description={"Developing bespoke software solutions tailored to the specific needs and requirements of a client. This includes web applications, desktop applications, and specialized business software."}
          />
          <ServiceCard
            title={"Mobile App Development"}
            description={"Creating mobile applications for various platforms (iOS, Android) that offer a seamless user experience. This includes native app development, cross-platform solutions, or progressive web apps (PWAs)."}
          />
          <ServiceCard
            title={"Software Integration and API Development"}
            description={"Ensuring different software systems work together seamlessly by developing and implementing APIs and middleware solutions, as well as structured and non structured databases. This service often includes integration of third-party services, cloud-based solutions, and enterprise systems"}
          />
          <ServiceCard
            title={"Comprehensive AI Solutions"}
            description={"Our AI services are designed to empower businesses with artificial intelligence capabilities, enabling them to innovate, automate, and optimize their operations. By leveraging state-of-the-art AI technologies, we help organizations transform data into actionable insights and intelligent solutions."}
          />
        </div>
      </Container>

    </section>
  )
}

interface ServiceCardProps {
  title: string;
  description: string;
  img?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, img }) => {
  return (
    <div className={c("rounded-lg p-2 bg-white", styles.service)}>
      <Subtitle style={{ color: '#274453' }}>
        {title}
      </Subtitle>
      <Body>
        {description}
      </Body>
    </div>
  );
}


const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}