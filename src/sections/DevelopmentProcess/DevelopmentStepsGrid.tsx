"use client";
import React from 'react';
import styled from 'styled-components';
import { CARD_WIDTH, STEPS } from './constants';
import DevelopmentStepCard from './DevelopmentStepCard';
import { useI18n, Rich } from '@/i18n/I18nProvider';

const DevelopmentStepsGrid = () => {
    const { t } = useI18n();
    return (
        <Wrapper>
            {STEPS.map((step, index) => (
                <DevelopmentStepCard
                    key={index}
                    number={index}
                    title={t(`process.steps.${step.stepKey}.title`)}
                    description={<Rich text={t(`process.steps.${step.stepKey}.desc`)} />}
                />
            ))}
        </Wrapper>
    );
}

export default DevelopmentStepsGrid;


const Wrapper = styled.div`
    display: none;
    grid-template-columns: repeat(auto-fill, minmax(${CARD_WIDTH}px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
    margin: 0 auto;
    max-width: 1400px;

    @media (max-width: 1250px) {
        display: grid;
    }
`;



