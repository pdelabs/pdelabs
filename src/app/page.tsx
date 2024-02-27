import LosDedosFooterContainer from "@/components/LosDedosFooterContainer/LosDedosFooterContainer";
import SunsetContainer from "@/components/SunsetContainer/SunsetContainer";
import { BigTitle, Title } from "@/components/Typography/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* <SunsetContainer /> */}
      <SunsetContainer>
        <Title style={{ color: 'white' }} className="text-center center white pt-8">pde labs Home screen Title</Title>
      </SunsetContainer>
      <div className="flex flex-col items-center relative h-[110vh]" style={{ background: 'red' }}>
        <BigTitle style={{ color: 'white', zIndex: 5 }} className="absolute m-auto left-0 right-0 text-center">
          pde labs Home screen Title
        </BigTitle>
        {/* <PositionedSun /> */}
      </div>
      <div className="flex flex-col items-center bg-red h-[1500px] w-full z-10 bg-[#547B96]">
        <Title>pde labs Home screen Title</Title>
      </div>

      <LosDedosFooterContainer />
    </main>
  )
}

