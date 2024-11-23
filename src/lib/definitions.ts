import { X } from '@/components/socials/x'
import { Linkedin } from '@/components/socials/linkedin'
import { Github } from '@/components/socials/github'
import { Youtube } from '@/components/socials/youtube'
import { Instagram } from '@/components/socials/instagram'
import { Discord } from '@/components/socials/discord'

import { Nextjs } from '@/components/tools/nextjs'
import { ReactIcon } from '@/components/tools/react'
import { Typescript } from '@/components/tools/typescript'
import { Illustrator } from '@/components/tools/illustrator'
import { Figma } from '@/components/tools/figma'
import { Framer } from '@/components/tools/framer'

export const socials = [
    {
        icon: X('var(--500)'),
        name: 'X',
        border: 'var(--400)',
        background: 'var(--200)',
        url: 'https://x.com/jeremycameron',
    },
    {
        icon: Linkedin,
        name: 'LinkedIn',
        border: 'rgba(10,102,194,1)',
        background: 'rgba(10,102,194,.1)',
        url: 'https://www.linkedin.com/in/jeremy-cameron-28559a153/',
    },
    {
        icon: Github('var(--500)'),
        name: 'GitHub',
        border: 'var(--400)',
        background: 'var(--200)',
        url: 'https://github.com/JezCam',
    },
    {
        icon: Youtube,
        name: 'Youtube',
        border: 'rgba(255,3,2,1)',
        background: 'rgba(255,3,2,.1)',
        url: 'https://www.youtube.com/@jeremycameroncom',
    },
    {
        icon: Instagram('var(--500)'),
        name: 'Instagram',
        border: 'var(--400)',
        background: 'var(--200)',
        url: 'https://www.instagram.com/jeremycameroncom/',
    },
    {
        icon: Discord,
        name: 'Discord',
        border: 'rgba(88,101,242,1)',
        background: 'rgba(88,101,242,.1)',
        url: 'https://x.com/jeremycameron',
    },
]

export const tools = [
    {
        icon: Nextjs('var(--500)'),
        name: 'NextJS',
        border: 'var(--400)',
        background: 'var(--200)',
        url: 'https://nextjs.org/',
    },
    {
        icon: ReactIcon,
        name: 'React',
        border: 'rgba(97,218,251,1)',
        background: 'rgba(97,218,251,.1)',
        url: 'https://react.dev/',
    },
    {
        icon: Typescript,
        name: 'Typescript',
        border: 'rgba(49,120,198,1)',
        background: 'rgba(49,120,198,.1)',
        url: 'https://www.typescriptlang.org/',
    },
    {
        icon: Illustrator,
        name: 'Illustrator',
        border: 'rgba(255,154,0,1)',
        background: 'rgba(255,154,0,.1)',
        url: 'https://www.adobe.com/au/products/illustrator.html',
    },
    {
        icon: Figma,
        name: 'Figma',
        border: 'rgba(162,89,255,1)',
        background: 'rgba(162,89,255,.1)',
        url: 'https://www.figma.com/',
    },
    {
        icon: Framer,
        name: 'Framer',
        border: 'rgba(1,163,255,1)',
        background: 'rgba(1,163,255,.1)',
        url: 'https://www.framer.com/',
    },
]
