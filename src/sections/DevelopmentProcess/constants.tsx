export const CARD_WIDTH = 350;

interface DevelopmentStepProps {
    number: number;
    /** Key into process.steps.* in the i18n messages. */
    stepKey: string;
    icon: string;
}


export const STEPS: DevelopmentStepProps[] = [
    { number: 0, stepKey: 'discovery', icon: 'discovery' },
    { number: 1, stepKey: 'design', icon: 'design' },
    { number: 2, stepKey: 'architecture', icon: 'architecture' },
    { number: 3, stepKey: 'development', icon: 'development' },
    { number: 4, stepKey: 'testing', icon: 'testing' },
    { number: 5, stepKey: 'deployment', icon: 'deployment' },
]

interface Pos { x: number, y: number }

type CardPositions = {
    [i: number]: Pos;
}

export const CARD_POSITIONS: CardPositions = {
    0: {
        x: 16,
        y: 0,
    },
    1: {
        x: 5,
        y: 33,
    },
    2: {
        x: 38,
        y: 35,
    },
    3: {
        x: 71,
        y: 28,
    },
    4: {
        x: 16,
        y: 66,
    },
    5: {
        x: 64,
        y: 72,
    },
};
