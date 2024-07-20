"use client"
import Sun from '@/components/PDELabsSun/PDELabsSun';
import { BigTitle } from '@/components/Typography/Typography';
import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <main className="flex h-screen flex-col justify-between">
            <Wrapper>
                <TextColor>
                    <BigTitle>404 - Page Not Found</BigTitle>
                </TextColor>

                <SunPosition>
                    <Sun width={400} height={400} />
                </SunPosition>
            </Wrapper>
        </main>
    )
}


export default NotFound;


const TextColor = styled.div`
    color: white;
`;

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--primary-background-hex);
    background: linear-gradient(to bottom,
            #6b8cb1, #F56217);
    position: relative;
`;

const SunPosition = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
`;