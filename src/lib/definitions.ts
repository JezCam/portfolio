// Socials
import { X } from '@/components/socials/x'
import { Linkedin } from '@/components/socials/linkedin'
import { Github } from '@/components/socials/github'
import { Youtube } from '@/components/socials/youtube'
import { Instagram } from '@/components/socials/instagram'
import { Discord } from '@/components/socials/discord'

// Tools
import { Nextjs } from '@/components/tools/nextjs'
import { ReactIcon } from '@/components/tools/react'
import { Typescript } from '@/components/tools/typescript'
import { Illustrator } from '@/components/tools/illustrator'
import { Figma } from '@/components/tools/figma'
import { Framer } from '@/components/tools/framer'

// Tools
import FigmaIcon from '../../public/tools/figma.svg'
import WordpressIcon from '../../public/tools/WordPress_blue_logo.svg'
import BricksIcon from '../../public/tools/bricks-logo.svg'
import NextJSIcon from '../../public/tools/nextjs.svg'
import React from '../../public/tools/react.svg'
import TypescriptIcon from '../../public/tools/typescript.svg'
import IllustratorIcon from '../../public/tools/illustrator.svg'
import AfterEffectsIcon from '../../public/tools/aftereffects.svg'

// Positive Media
import ErrorPage from '../../public/positive media/404.png'
import AllPage from '../../public/positive media/all.png'
import HomePage from '../../public/positive media/home.png'

// Get The Memo
import GTM1 from '../../public/get the memo/1.png'
import GTM2 from '../../public/get the memo/2.png'
import GTM3 from '../../public/get the memo/3.png'

// Mustard Leadership
import ML1 from '../../public/mustard/1.png'
import ML2 from '../../public/mustard/2.png'
import ML4 from '../../public/mustard/4.png'
import { StaticImageData } from 'next/image'

export const socials = [
    {
        icon: X('var(--600)'),
        name: 'X',
        size: 19.2,
        border: 'var(--400)',
        background: 'var(--600-10)',
        url: 'https://x.com/jeremycameron',
    },
    {
        icon: Linkedin,
        name: 'LinkedIn',
        size: 69.61,
        border: 'rgba(10,102,194,1)',
        background: 'rgba(10,102,194,.1)',
        url: 'https://www.linkedin.com/in/jeremy-cameron-28559a153/',
    },
    {
        icon: Github('var(--600)'),
        name: 'GitHub',
        size: 55.2,
        border: 'var(--400)',
        background: 'var(--600-10)',
        url: 'https://github.com/JezCam',
    },
    {
        icon: Youtube,
        name: 'Youtube',
        size: 62.41,
        border: 'rgba(255,3,2,1)',
        background: 'rgba(255,3,2,.1)',
        url: 'https://www.youtube.com/@jeremycameroncom',
    },
    {
        icon: Instagram('var(--600)'),
        name: 'Instagram',
        size: 76.81,
        border: 'var(--400)',
        background: 'var(--600-10)',
        url: 'https://www.instagram.com/jeremycameroncom/',
    },
    {
        icon: Discord,
        name: 'Discord',
        size: 62.41,
        border: 'rgba(88,101,242,1)',
        background: 'rgba(88,101,242,.1)',
        url: 'https://x.com/jeremycameron',
    },
]

export const tools = [
    {
        icon: Nextjs('var(--600)'),
        name: 'NextJS',
        size: 55.2,
        border: 'var(--400)',
        background: 'var(--600-10)',
        url: 'https://nextjs.org/',
    },
    {
        icon: ReactIcon,
        name: 'React',
        size: 48,
        border: 'rgba(97,218,251,1)',
        background: 'rgba(97,218,251,.1)',
        url: 'https://react.dev/',
    },
    {
        icon: Typescript,
        name: 'Typescript',
        size: 84,
        border: 'rgba(49,120,198,1)',
        background: 'rgba(49,120,198,.1)',
        url: 'https://www.typescriptlang.org/',
    },
    {
        icon: Illustrator,
        name: 'Illustrator',
        size: 91.2,
        border: 'rgba(255,154,0,1)',
        background: 'rgba(255,154,0,.1)',
        url: 'https://www.adobe.com/au/products/illustrator.html',
    },
    {
        icon: Figma,
        name: 'Figma',
        size: 48,
        border: 'rgba(162,89,255,1)',
        background: 'rgba(162,89,255,.1)',
        url: 'https://www.figma.com/',
    },
    {
        icon: Framer,
        name: 'Framer',
        size: 55.2,
        border: 'rgba(1,163,255,1)',
        background: 'rgba(1,163,255,.1)',
        url: 'https://www.framer.com/',
    },
]

type ProjectType = {
    name: string
    media: {
        type: 'image' | 'video'
        src: string | StaticImageData
        alt: string
    }[]
    types: { name: string; background: string }[]
    tools: { icon: string | StaticImageData; name: string; url: string }[]
    url: string
}

export const projects: ProjectType[] = [
    {
        name: 'Positive Media',
        media: [
            { type: 'image', src: HomePage, alt: 'Positive Media Homepage' },
            {
                type: 'image',
                src: AllPage,
                alt: 'Positive Media Pages Showcase',
            },
            { type: 'image', src: ErrorPage, alt: 'Positive Media Error Page' },
        ],
        types: [
            { name: 'UI/UX', background: 'rgba(37,99,235,.15)' },
            { name: 'Development', background: 'rgba(220,38,38,.15)' },
        ],
        tools: [
            {
                icon: FigmaIcon,
                name: 'Figma',
                url: 'https://figma.com/',
            },
            {
                icon: WordpressIcon,
                name: 'Wordpress',
                url: 'https://wordpress.org/',
            },
            {
                icon: BricksIcon,
                name: 'Bricks Builder',
                url: 'https://bricksbuilder.io/',
            },
        ],
        url: 'https://positivemedia.com.au/',
    },
    {
        name: 'Get The Memo',
        media: [
            { type: 'image', src: GTM1, alt: 'Get The Memo Dark' },
            { type: 'image', src: GTM2, alt: 'Get The Memo Light' },
            { type: 'image', src: GTM3, alt: 'Get The Memo Letters' },
        ],
        types: [
            { name: 'UI/UX', background: 'rgba(37,99,235,.15)' },
            { name: 'Development', background: 'rgba(220,38,38,.15)' },
        ],
        tools: [
            {
                icon: TypescriptIcon,
                name: 'Typescript',
                url: 'https://www.typescriptlang.org/',
            },
            {
                icon: React,
                name: 'React',
                url: 'https://react.dev/',
            },
            {
                icon: NextJSIcon,
                name: 'NextJS',
                url: 'https://nextjs.org/',
            },
        ],
        url: 'https://get-the-memo-v6.vercel.app/',
    },
    {
        name: 'Mustard Scools',
        media: [
            { type: 'image', src: ML1, alt: 'Mustard Leadership Logo' },
            {
                type: 'image',
                src: ML2,
                alt: 'Mustard Leadership Brand Colours',
            },
            {
                type: 'video',
                src: '/mustard/3.mp4',
                alt: 'Mustard Leadership Logo Animation',
            },
            { type: 'image', src: ML4, alt: 'Mustard Leadership Concepts' },
        ],
        types: [
            { name: 'Branding', background: 'rgba(22,163,74,.15)' },
            { name: 'Motion', background: 'rgba(79,70,229,.15)' },
        ],
        tools: [
            {
                icon: IllustratorIcon,
                name: 'Adobe Illustrator',
                url: 'https://www.adobe.com/au/products/illustrator.html',
            },
            {
                icon: AfterEffectsIcon,
                name: 'Adobe After Effects',
                url: 'https://www.adobe.com/au/products/aftereffects.html',
            },
        ],
        url: 'https://www.mustard.org.au/',
    },
]
