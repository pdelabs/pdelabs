import Sun from '@/components/PDELabsSun/PDELabsSun';
import { BigTitle } from '@/components/Typography/Typography';
import React from 'react';
import { SunPosition, TextColor, Wrapper } from './components';

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

