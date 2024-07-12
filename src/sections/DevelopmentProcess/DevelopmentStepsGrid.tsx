
import React from 'react';
import styled from 'styled-components';
import { CARD_WIDTH, STEPS } from './constants';
import DevelopmentStepCard from './DevelopmentStepCard';

const DevelopmentStepsGrid = () => {
    return (
        <Wrapper>
            {STEPS.map((step, index) => (
                <DevelopmentStepCard key={index} number={index} title={step.title} description={step.description} />
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



