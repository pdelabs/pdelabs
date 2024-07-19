"use client";
import React, { FC, PropsWithChildren } from 'react';
import { Title } from "./Typography/Typography"
import styled from 'styled-components';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className="mt-16 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
            <WhiteTitle className="text-left center white">{children}</WhiteTitle>
        </>
    )
}

export default SectionTitle;

const WhiteTitle = styled(Title)`
    color: white;
`
