"use client";
import { BigTitle, SmallBody, Subtitle, Title } from '@/components/Typography/Typography';
import React from 'react';
import styles from './Contact.module.css';
import styled from 'styled-components';
import useDimensions from './useDimensions';

const TakeItOfflineArrow = () => {

    const [ref, { width, height }] = useDimensions();

    return (
        <Wrapper>
            <TiltedBody>
                Or<br />
                if your prefer taking it offline
            </TiltedBody>
            <Svg ref={ref as any}>
                <Line d={`M 5 ${(height / 2) - 40} S ${width / 2} 0, ${width / 2} ${height / 4}, 40 50, ${width - 5} 20`} />
                <Line d={`M ${width - 20} 10 L ${width - 5} 20`} />
                <Line d={`M ${width - 20} 35 L ${width - 5} 20`} />
                {/* <Line d={`M ${width} 0 S ${width / 2} ${height / 4}, ${width / 2} ${height / 2}, 0 ${height / 2}`} /> */}
            </Svg>
        </Wrapper>
    )
}

export default TakeItOfflineArrow;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 0px;
    flex-direction: row;
    align-items: center;
    align-self: stretch;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const TiltedBody = styled(SmallBody)`
    color: #a9c6d4;
    transform: rotate(-14deg);
    min-width: 120px;

    @media (max-width: 1024px) {
        justify-self: center;
    }
`

const Svg = styled.svg`
  display: block;
  flex: 1;
  overflow: visible;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% - 120px);

  @media (max-width: 1115px) {
    display: none;
  }
`;

const Line = styled.path`
  stroke: #a9c6d4;
  stroke-width: 3px;
  stroke-dasharray: 6px 9px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  vector-effect: non-scaling-stroke;
  backface-visibility: hidden;
`;