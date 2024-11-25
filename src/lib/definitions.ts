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
        icon: X('var(--800)'),
        name: 'X',
        size: 19.2,
        border: 'var(--600)',
        background: 'var(--300)',
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
        icon: Github('var(--800)'),
        name: 'GitHub',
        size: 55.2,
        border: 'var(--600)',
        background: 'var(--300)',
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
        icon: Instagram('var(--800)'),
        name: 'Instagram',
        size: 76.81,
        border: 'var(--600)',
        background: 'var(--300)',
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
        icon: Nextjs('var(--800)'),
        name: 'NextJS',
        size: 55.2,
        border: 'var(--600)',
        background: 'var(--300)',
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
