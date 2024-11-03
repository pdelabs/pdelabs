"use client"
import styled from 'styled-components';

export const TextColor = styled.div`
    color: white;
`;

export const Wrapper = styled.div`
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

export const SunPosition = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
`;