'use client'

import { socials, tools } from '@/lib/definitions'
import Image from 'next/image'
import Me from '../../public/Me.png'
import ThemeToggle from '@/components/theme-toggle'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MagneticButtons from '@/components/magnetic-buttons'
import { useEffect, useRef, useState } from 'react'

// Tools
import Wordpress from '../../public/tools/WordPress_blue_logo.svg'
import Bricks from '../../public/tools/bricks-logo.svg'
import Figma from '../../public/tools/figma.svg'
import {
    TooltipProvider,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import React from 'react'

const projects = [
    {
        name: 'Positive Media',
        media: [
            { image: '', alt: '' },
            { image: '', alt: '' },
            { image: '', alt: '' },
        ],
        types: [
            { name: 'UI/UX', background: 'rgba(37,99,235,.15)' },
            { name: 'Development', background: 'rgba(220,38,38,.15)' },
        ],
        tools: [
            {
                icon: Figma,
                name: 'Figma',
                url: 'https://figma.com/',
            },
            {
                icon: Wordpress,
                name: 'Wordpress',
                url: 'https://wordpress.org/',
            },
            {
                icon: Bricks,
                name: 'Bricks Builder',
                url: 'https://bricksbuilder.io/',
            },
        ],
        url: 'https://positivemedia.com.au/',
    },
    {
        name: 'Get The Memo',
        media: [
            { image: '', alt: '' },
            { image: '', alt: '' },
            { image: '', alt: '' },
        ],
        url: 'https://positivemedia.com.au/',
    },
    {
        name: 'Mustard Leadership',
        media: [
            { image: '', alt: '' },
            { image: '', alt: '' },
            { image: '', alt: '' },
        ],
        url: 'https://positivemedia.com.au/',
    },
]

export default function Home() {
    const introRef = useRef<HTMLDivElement>(null)
    const [above, setAbove] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!introRef.current) return
            introRef.current.getBoundingClientRect().bottom < 0
                ? setAbove(true)
                : setAbove(false)
        })
    })

    return (
        <div className="flex justify-center">
            <section className="flex w-full max-w-[720px] py-8 md:py-16 px-3 md:px-8">
                {/* Left */}
                <div className="flex flex-col gap-11 md:gap-16 sticky top-8 md:top-16 h-min z-10">
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex items-center justify-center rounded-full w-9 md:w-11 aspect-square border-2 border-foreground overflow-hidden">
                            <Image
                                className="min-w-[42px] md:min-w-[42px]"
                                src={Me}
                                alt="Jeremy Cameron"
                            />
                        </div>
                        <p className="text-xs">Me</p>
                    </div>
                    {/* Socials */}
                    <div className="flex flex-col gap-1.5 items-center">
                        <p className="text-xs">Socials</p>
                        <MagneticButtons data={socials} direction="left" />
                    </div>
                </div>
                {/* Middle */}
                <div className="flex flex-col w-full items-center pt-16 px-3 md:px-16">
                    {/* Intro */}
                    <div
                        ref={introRef}
                        className="flex flex-col gap-6 items-center bg-background"
                    >
                        <div className="flex md:gap-2 flex-col md:flex-row items-center">
                            <h1 className="font-semibold text-foreground">
                                Jeremy Cameron.
                            </h1>
                            <h1 className="text-500">Design Engineer.</h1>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center text-500 text-sm">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="text-foreground" size={14} />
                                Melbourne,{' '}
                                <span className="text-foreground font-semibold">
                                    Australia
                                </span>
                            </div>
                            <a
                                className="flex items-center gap-1.5 underline hover:text-foreground transition-colors"
                                href="mailto:jeremy@cameron.org.au"
                            >
                                <Mail className="text-foreground" size={14} />
                                jeremy@cameron.org.au
                            </a>
                        </div>
                    </div>
                    {/* Consultation */}
                    <div className="py-8 md:py-16 bg-background sticky top-0 w-full flex items-center justify-center z-[1]">
                        <Button
                            className={`transition-all interpolate-size w-min [interpolate-size:allow-keywords] duration-500 [transition-timing-function:cubic-bezier(0.32,0,0.67,0)] ${
                                above && 'w-full'
                            } rounded-full text-xs md:text-sm h-9 md:h-11 px-6 `}
                        >
                            Free consultation
                        </Button>
                    </div>
                    {/* Portfolio */}
                    <div className="flex flex-col gap-4 md:gap-6 w-full relative">
                        {/* Project */}
                        {projects.map((project, index) => (
                            <React.Fragment>
                                {/* Heading */}
                                <div
                                    style={
                                        {
                                            '--mobile-top':
                                                (100 + index * 41).toString() +
                                                'px',
                                            '--desktop-top':
                                                (172 + index * 45).toString() +
                                                'px',
                                        } as React.CSSProperties
                                    }
                                    className="flex justify-between p-3 border-b-[1px] border-300 w-full bg-background sticky top-[var(--mobile-top)] md:top-[var(--desktop-top)]"
                                >
                                    <a
                                        href={`#${project.name}`}
                                        className="text-xs md:text-sm font-semibold text-foreground"
                                    >
                                        {project.name}
                                    </a>
                                    <a
                                        href={project.url}
                                        className="transition-all hover:text-foreground group flex items-center gap-1 text-xs md:text-sm text-500"
                                    >
                                        Visit
                                        <ArrowUpRight className="transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] w-3 h-3 md:h-4 md:w-4" />
                                    </a>
                                </div>
                                <div className="flex flex-col gap-5 md:gap-6 relative z-[-1]">
                                    {/* Anchor */}
                                    <div
                                        style={
                                            {
                                                '--mobile-top':
                                                    (
                                                        -155 -
                                                        index * 41
                                                    ).toString() + 'px',
                                                '--desktop-top':
                                                    (
                                                        -240 -
                                                        index * 45
                                                    ).toString() + 'px',
                                            } as React.CSSProperties
                                        }
                                        id={project.name}
                                        className="absolute top-[var(--mobile-top)] md:top-[var(--desktop-top)]"
                                    ></div>
                                    {/* Images */}
                                    {project.media.map(() => (
                                        <div className="w-full aspect-video bg-200 rounded-[16px] md:rounded-[22px] border border-300"></div>
                                    ))}
                                </div>
                                {/* Heading */}
                                <div className="flex justify-between mb-16 px-1.5 w-full items-center">
                                    <div className="flex gap-2">
                                        {project.types?.map((type, index) => (
                                            <h2
                                                style={{
                                                    background: type.background,
                                                }}
                                                key={index}
                                                className="text-[10px] md:text-xs py-1 px-2 rounded-full font-semibold text-foreground"
                                            >
                                                {type.name}
                                            </h2>
                                        ))}
                                    </div>
                                    <TooltipProvider delayDuration={0}>
                                        <div className="flex gap-2 h-min">
                                            {project.tools?.map((tool) => (
                                                <Tooltip>
                                                    <TooltipTrigger className="w-4 h-4 md:w-5 md:h-5 overflow-hidden">
                                                        <a href={tool.url}>
                                                            <Image
                                                                src={tool.icon}
                                                                alt={tool.name}
                                                            />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-100 text-foreground text-xs">
                                                        {tool.name}
                                                    </TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    </TooltipProvider>
                                </div>
                                {/* Divider
                                <div className="flex h-[1px] bg-200 m"></div> */}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col gap-6 h-min w-full mt-14">
                        <h2 className="px-3 text-sm">Contact Form</h2>
                        <div className="bg-200 h-96 w-full rounded-[16px] md:rounded-[22px] "></div>
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-11 md:gap-16 sticky top-8 md:top-16 h-min z-10">
                    {/* Theme */}
                    <div className="flex flex-col gap-3 items-center">
                        <ThemeToggle />
                        <p className="text-xs">Theme</p>
                    </div>
                    {/* Tools */}
                    <div className="flex flex-col gap-1.5 items-center">
                        <p className="text-xs">Tools</p>
                        <MagneticButtons data={tools} direction="right" />
                    </div>
                </div>
            </section>
        </div>
    )
}
