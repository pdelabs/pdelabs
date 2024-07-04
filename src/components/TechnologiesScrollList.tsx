'use client';
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Body, SmallBody } from './Typography/Typography';
import Link from 'next/link';

interface TechnologyBubbleProps {
    icon: string;
    name: string;
    link: string;
}

const TechnologyBubble = ({ icon, name, link }: TechnologyBubbleProps) => {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger>
                    <Link href={link} target='_blank'>
                        <div className="flex flex-col justify-center grow">
                            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <Image src={icon} alt={name} width={64} height={64} />
                            </div>
                        </div>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <SmallBody>{name}</SmallBody>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

const technologies = [
    {
        icon: '/icons/react.svg',
        name: 'React',
        link: 'https://reactjs.org/'
    },
    {
        icon: '/icons/nextjs.svg',
        name: 'Next.js',
        link: 'https://nextjs.org/'
    },
    {
        icon: '/icons/tailwind.svg',
        name: 'Tailwind CSS',
        link: 'https://tailwindcss.com/'
    },
    {
        icon: '/icons/typescript.svg',
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/'
    },
    {
        icon: '/icons/figma.svg',
        name: 'Figma',
        link: 'https://www.figma.com/'
    },
    {
        icon: '/icons/vercel.svg',
        name: 'Vercel',
        link: 'https://vercel.com/'
    },
    {
        icon: '/icons/flutter.svg',
        name: 'Flutter',
        link: 'https://flutter.dev/'
    },
    {
        icon: '/icons/firebase.svg',
        name: 'Firebase',
        link: 'https://firebase.google.com/'
    },
    {
        icon: '/icons/nodejs.svg',
        name: 'Node.js',
        link: 'https://nodejs.org/'
    },
    {
        icon: '/icons/mongodb.svg',
        name: 'MongoDB',
        link: 'https://www.mongodb.com/'
    },
    {
        icon: '/icons/python.svg',
        name: 'Python',
        link: 'https://www.python.org/'
    },
    {
        icon: '/icons/google-cloud.svg',
        name: 'Google Cloud',
        link: 'https://cloud.google.com/'
    },
    {
        icon: '/icons/aws.svg',
        name: 'AWS',
        link: 'https://aws.amazon.com/'
    },
    {
        icon: '/icons/docker.svg',
        name: 'Docker',
        link: 'https://www.docker.com/'
    },
    {
        icon: '/icons/serverless.svg',
        name: 'Serverless',
        link: 'https://www.serverless.com/'
    },
    {
        icon: '/icons/graphql.svg',
        name: 'GraphQL',
        link: 'https://graphql.org/'
    },
    {
        icon: '/icons/google-cloud-functions.svg',
        name: 'Google Cloud',
        link: 'https://cloud.google.com/'
    },
    {
        icon: '/icons/redux.svg',
        name: 'Redux',
        link: 'https://redux.js.org/'
    },
    {
        icon: '/icons/express.svg',
        name: 'Express',
        link: 'https://expressjs.com/'
    },
    {
        icon: '/icons/redis.svg',
        name: 'Redis',
        link: 'https://redis.io/'
    },
    {
        icon: '/icons/postgresql.svg',
        name: 'PostgreSQL',
        link: 'https://www.postgresql.org/'
    },
    {
        icon: '/icons/github.svg',
        name: 'GitHub',
        link: 'https://www.github.com/'
    },
    {
        icon: '/icons/supabase.svg',
        name: 'Supabase',
        link: 'https://supabase.com/'
    },
    {
        icon: '/icons/hasura.svg',
        name: 'HasuraGQL',
        link: 'https://hasura.io/'
    },
]

const TechnologiesScrollList = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const cursorOnTop = useRef(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let isAnimationRunning = true;

        const scrollWidth = scrollContainer?.scrollWidth ?? 0;
        let step = 1;

        const animateScroll = () => {

            if (isAnimationRunning && scrollContainer) {
                if (!cursorOnTop.current) {

                    if (scrollContainer.scrollLeft - scrollWidth / 2 < 0) {
                        scrollContainer.scrollLeft += step;
                    } else {
                        scrollContainer.scrollLeft = step;
                    }
                }

                requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();

        const handleStopScroll = () => {
            cursorOnTop.current = true;
        }

        const handleStartScroll = () => {
            cursorOnTop.current = false;
        }

        scrollContainerRef.current?.addEventListener('mouseenter', handleStopScroll);
        scrollContainerRef.current?.addEventListener('mouseleave', handleStartScroll);

        return () => {
            isAnimationRunning = false;
            scrollContainerRef.current?.removeEventListener('mouseenter', handleStopScroll);
            scrollContainerRef.current?.removeEventListener('mouseleave', handleStartScroll);
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className="flex flex-row gap-4 overflow-x-hidden pb-4 px-4 no-scrollbar relative w-full max-w-full min-w-full">
            {[...technologies, ...technologies].map((technology, index) => (
                <TechnologyBubble key={index} {...technology} />
            ))}
        </div>
    )
}

export default TechnologiesScrollList;
