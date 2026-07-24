"use client";
import React, { FC } from "react";
import DevelopmentStepCard from "./DevelopmentStepCard";
import { CARD_WIDTH, CARD_POSITIONS, STEPS } from "./constants";
import styled from "styled-components";
import useHasMounted from "@/hooks/useHasMounted";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useI18n, Rich } from "@/i18n/I18nProvider";

const VB_HEIGHT = 1450;
const VB_MAX_WIDTH = 1400;

interface Pos { x: number, y: number }

function getPath(index: number, startPos: Pos, endPos: Pos, windowWidth: number, cardRef: HTMLDivElement | undefined) {
    if (typeof cardRef === "undefined") {
        return;
    }

    const cardHeight = cardRef.getBoundingClientRect().height;

    const svgWidth = Math.min(windowWidth, VB_MAX_WIDTH);
    const startX = (startPos.x * svgWidth) / 100;
    const startY = (startPos.y * VB_HEIGHT) / 100;
    const endX = (endPos.x * svgWidth) / 100;
    const endY = (endPos.y * VB_HEIGHT) / 100;

    const BUFFER = 10;

    switch (index) {
        case 0: {
            return `
        M ${startX + CARD_WIDTH / 2} ${startY + cardHeight + BUFFER}
        C ${startX + CARD_WIDTH / 2} ${endY}
          ${endX + CARD_WIDTH / 2} ${startY + cardHeight}
          ${endX + CARD_WIDTH / 2} ${endY - BUFFER}
        `;
        }

        case 1: {
            const xMidpoint =
                startX + CARD_WIDTH + (endX - (startX + CARD_WIDTH)) / 2;
            return `
        M ${startX + CARD_WIDTH + BUFFER} ${startY + cardHeight * 0.8}
        Q ${xMidpoint} ${startY + cardHeight * 0.4}
          ${endX - BUFFER} ${endY + cardHeight * 0.2}
        `;
        }

        case 2: {
            return `
        M ${startX + CARD_WIDTH + BUFFER} ${startY + cardHeight * 0.75}
        C ${endX} ${startY + cardHeight * 0.4}
          ${startX + CARD_WIDTH + BUFFER} ${startY + cardHeight * 0.25}
          ${endX - BUFFER} ${endY + cardHeight * 0.25}
        `;
        }

        case 3: {
            return `
        M ${startX + CARD_WIDTH * 0.6} ${startY + cardHeight + BUFFER}
        C ${startX + CARD_WIDTH * 0.75} ${endY - BUFFER + 50}
          ${endX + CARD_WIDTH * 1.4} ${endY - BUFFER - 150}
          ${endX + CARD_WIDTH / 2} ${endY - BUFFER}
        `;
        }

        case 4: {
            return `
      M ${startX + CARD_WIDTH + BUFFER} ${startY + cardHeight * 0.8}
      C ${startX + CARD_WIDTH * 3.5} ${startY + cardHeight * 0.2}
        ${endX - CARD_WIDTH * 2.5} ${endY - cardHeight * 0.2}
        ${endX - BUFFER} ${endY + cardHeight * 0.6}
        `;
        }
        default: {
            return undefined;
        }
        case 5: {

            // return `
            // M ${startX + CARD_WIDTH / 2} ${startY + cardHeight + BUFFER}
            // C ${startX + CARD_WIDTH / 2} ${endY + 128}
            //   ${endX} ${startY + cardHeight + BUFFER}
            //   ${endX} ${endY + 128}
            //   `
        }
    }
}

const DevelopmentStepsFancyPaths: FC = () => {
    const { t } = useI18n();
    const { width: windowWidth } = useWindowDimensions();
    const vbWidth = Math.min(windowWidth ?? 0, VB_MAX_WIDTH);

    // Trigger a re-render after mount, to draw the paths now that
    // refs are collected.
    const mounted = useHasMounted();

    const card0Ref = React.useState();
    const card1Ref = React.useState();
    const card2Ref = React.useState();
    const card3Ref = React.useState();
    const card4Ref = React.useState();
    const card5Ref = React.useState();
    const card6Ref = React.useState();
    const card7Ref = React.useState();
    const card8Ref = React.useState();
    const card9Ref = React.useState();

    const cardRefs = [
        card0Ref,
        card1Ref,
        card2Ref,
        card3Ref,
        card4Ref,
        card5Ref,
        card6Ref,
        card7Ref,
        card8Ref,
        card9Ref,
    ];

    if (!mounted) {
        return null;
    }

    return (
        <Wrapper>
            {typeof windowWidth === "number" && (
                <Svg
                    viewBox={`0 0 ${vbWidth} ${VB_HEIGHT}`}
                    preserveAspectRatio="none"
                    fill="none"
                >
                    {Object.values(CARD_POSITIONS).map((pos, index) => {
                        let nextPosition = CARD_POSITIONS[index + 1];

                        if (!nextPosition) {
                            // For the very last line, we don't have a "next
                            // card", but we do have a target; the heading
                            // afterwards (“And so much more…”)
                            nextPosition = {
                                x: 50,
                                y: 100,
                            };
                        }

                        return (
                            <Line
                                key={index}
                                d={getPath(
                                    index,
                                    pos,
                                    nextPosition,
                                    windowWidth,
                                    cardRefs[index][0]
                                )}
                                fill="none"
                            />
                        );
                    })}
                </Svg>
            )}

            {STEPS.map((item, index) => (
                <PositionedModuleCard
                    key={item.number}
                    number={item.number}
                    title={t(`process.steps.${item.stepKey}.title`)}
                    description={<Rich text={t(`process.steps.${item.stepKey}.desc`)} />}
                    style={{
                        top: CARD_POSITIONS[item.number].y + "%",
                        left: CARD_POSITIONS[item.number].x + "%",
                    }}
                    ref={cardRefs[index][1] as any}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: ${VB_HEIGHT}px;
  margin-top: -400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 1400px;
  pointer-events: none;
  margin-bottom: 128px;

  @media (max-width: 1250px) {
    display: none;
  }
`;

const Svg = styled.svg`
  display: block;
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Line = styled.path`
  stroke: #a9c6d4;
  stroke-width: 5px;
  stroke-dasharray: 10px 16px;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
  backface-visibility: hidden;
`;

const PositionedModuleCard = styled(DevelopmentStepCard)`
  position: absolute;
  width: ${CARD_WIDTH}px;
`;

export default DevelopmentStepsFancyPaths;
