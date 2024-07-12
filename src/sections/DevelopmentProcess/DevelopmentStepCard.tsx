import { Body, Strong, Subtitle } from '@/components/Typography/Typography';
import React, { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface DevelopmentStepCardProps {
  number: number;
  title: string;
  description: ReactNode;
}

const DevelopmentStepCard = React.forwardRef<HTMLElement, DevelopmentStepCardProps>(
  (
    {
      number,
      title,
      description,
      ...rest
    },
    ref
  ) => {
    return (
      <Wrapper ref={ref} {...rest}>
        <Num><Body><Strong>{number + 1}</Strong></Body></Num>
        <Header>
          <Subtitle>
            {title}
          </Subtitle>
        </Header>
        <MainArea>
          <Body>{description}</Body>
        </MainArea>
      </Wrapper>
    );
  }
);

const Wrapper = styled.article`
  background: hsl(0deg 0% 100%);
  pointer-events: auto;
  border-radius: 1rem;

  li {
    font-size: 16px !important;
    margin-bottom: 0px !important;
  }
`;

const Header = styled.header`
  padding: 16px;
  background: linear-gradient(
    45deg,
    hsl(199deg 76% 19%),
    hsl(var(--primary-foreground-hsl))
  );
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 1rem 1rem 0 0;
`;


const Num = styled.div`
  position: absolute;
  left: -2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: #a9c6d4;
  padding: 0.5rem;
  border-radius: 50%;
  border: 2px solid #a9c6d4;

  span {
    margin: 0px;
  }
`;

const MainArea = styled.section`
  --selection-background-color: hsl(292deg 10% 15%);
  --selection-text-color: white;
  padding: 16px;
  padding-bottom: 20px;
  color: var(--primary-foreground-hex);
  font-size: 16px;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default DevelopmentStepCard;
