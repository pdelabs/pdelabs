"use client";
import React from 'react';
import styled from 'styled-components';

import { CARD_WIDTH } from './constants';
import DevelopmentStepsGrid from './DevelopmentStepsGrid';
import { Body, Title } from '@/components/Typography/Typography';
import ScheduleCall from '../Home/ScheduleCall';
import dynamic from "next/dynamic";

const DevelopmentStepsFancyPaths = dynamic(
  () => {
    return import("./DevelopmentStepsFancyPaths");
  },
  { ssr: false }
);

const DevelopmentProcess = () => {
  return (
    <section style={{ width: '100%', paddingTop: '6rem' }}>
      <Wrapper>
        <About>
          <RelativeTitle>
            <The>The</The>
            Development Process
          </RelativeTitle>
          <Body>
            At Punta del Este Labs, we follow a meticulously crafted development process to ensure the success of your project.
            Each stage is crucial for ensuring that the final product is functional, scalable, and user-friendly.
            Our process is designed to take your project from an initial idea through to a fully operational application,
            within weeks.
          </Body>
        </About>
      </Wrapper>
      <DevelopmentStepsFancyPaths />
      <DevelopmentStepsGrid />
    </section>
  );
};

export default DevelopmentProcess;

const MaxWidthWrapper = styled.div<{ maxWidth?: number }>`
  position: relative;
  width: 100%;
  max-width: ${(p) => p.maxWidth || 730}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
`;


const Wrapper = styled(MaxWidthWrapper)`
  padding-bottom: 96px;
  pointer-events: none;
  max-width: 1400px;

  @media (max-width: 1250px) {
    justify-content: center;
    padding-bottom: 48px;
  }
`;


const RelativeTitle = styled(Title)`
  position: relative;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  margin-top: 4px;
  /* Optical alignment */
  transform: translateX(-2px);
  color: white;
`

const The = styled(Body)`
  position: absolute;
  left: 10%;
  top: 30%;
  font-size: 24px;
  transform: translateY(-100%);
  color: #a9c6d4;
`

const About = styled.div`
  max-width: 360px;
  text-align: justify;
  pointer-events: auto;
  color: white;

  /* Positioning it relative to the card */
  position: relative;
  left: calc(17% + ${CARD_WIDTH}px + 64px);

  @media (max-width: 1250px) {
    max-width: 450px;
    text-align: center;
    left: initial;
    margin: 0 auto;
  }
`;


const Callus = () => {
  return (
    <CallusWrapper>
      <Ready>Ready to start your project?</Ready>
      <ScheduleCall />
    </CallusWrapper>
  )
}

const CallusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
  color: white;
`

const Ready = styled(Title)`
  margin: 1rem 0rem;
  height: 3rem;
  text-align: center;
  color: #a9c6d4;
  // background-image: linear-gradient(
  //   45deg,
  //   hsl(199deg 76% 19%),
  //   hsl(var(--primary-foreground-hsl))
  // );
  // background-size: 100%;
  // background-clip: text;
  // -webkit-text-fill-color: transparent;
  // transition: all 0.5s;
`