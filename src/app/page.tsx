'use client'

import { socials, tools } from '@/lib/definitions'
import Image from 'next/image'
import Me from '../../public/Me.png'
import ThemeToggle from '@/components/theme-toggle'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MagneticButtons from '@/components/magnetic-buttons'
import { useEffect, useRef, useState } from 'react'

const projects = [
    {
        name: 'Positive Media',
        media: [
            { image: '', alt: '' },
            { image: '', alt: '' },
            { image: '', alt: '' },
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
            <section className="flex w-full max-w-[720px] py-16 px-8">
                {/* Left */}
                <div className="flex flex-col gap-16 sticky top-16 h-min">
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <Image
                            className="rounded-full w-11 h-11 border-2 border-foreground"
                            src={Me}
                            alt="Jeremy Cameron"
                            objectFit="cover"
                        />
                        <p className="text-xs">Me</p>
                    </div>
                    {/* Socials */}
                    <div className="flex flex-col gap-1.5 items-center">
                        <p className="text-xs">Socials</p>
                        <MagneticButtons data={socials} direction="left" />
                    </div>
                </div>
                {/* Middle */}
                <div className="flex flex-col gap-16 w-full items-center pt-16 px-16">
                    {/* Intro */}
                    <div
                        ref={introRef}
                        className="flex flex-col gap-6 items-center"
                    >
                        <h1 className="font-semibold text-foreground">
                            Jeremy Cameron.{' '}
                            <span className="text-500">Design Engineer.</span>
                        </h1>
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

                    <Button
                        className={`transition-all interpolate-size w-min [interpolate-size:allow-keywords] duration-500 [transition-timing-function:cubic-bezier(0.32,0,0.67,0)] ${
                            above && 'w-full'
                        } rounded-full text-sm h-11 px-6 sticky top-16`}
                    >
                        Free consultation
                    </Button>

                    {/* Portfolio */}
                    <div className="flex flex-col gap-11 w-full">
                        {/* Project */}
                        {projects.map((project) => (
                            <>
                                <div className="flex flex-col gap-3 w-full">
                                    {/* Heading */}
                                    <div className="flex justify-between px-3 w-full">
                                        <h2 className="text-sm font-semibold text-foreground">
                                            {project.name}
                                        </h2>
                                        <a
                                            href={project.url}
                                            className="transition-all hover:text-foreground group flex items-center gap-1 text-sm text-500"
                                        >
                                            Visit
                                            <ArrowUpRight
                                                className="transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
                                                size={16}
                                            />
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        {/* Images */}
                                        {project.media.map(() => (
                                            <div className="w-full aspect-video bg-200 rounded-[22px] border border-300"></div>
                                        ))}
                                    </div>
                                </div>
                                {/* Divider */}
                                <div className="flex h-[1px] bg-200"></div>
                            </>
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-16 sticky top-16 h-min">
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
