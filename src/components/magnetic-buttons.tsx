'use client'

import React, { ReactNode, useRef, useState } from 'react'

export default function MagneticButtons(props: {
    data: {
        icon: ReactNode
        name: string
        size: number
        border: string
        background: string
        url: string
    }[]
    direction: 'left' | 'right'
}) {
    const [hoverDataIndex, setHoverDataIndex] = useState<number>(1)

    return (
        <nav>
            <ul
                className={
                    props.direction === 'left'
                        ? 'group relative flex flex-col text-primary/70 transition-all after:point before:duration-300 before:pointer-events-none before:fixed before:left-[anchor(--anchor-left_left)] before:top-[anchor(--anchor-left_top)] before:z-[-1] before:h-[anchor-size(--anchor-left_height)] before:w-[anchor-size(--anchor-left_width)] before:rounded-full before:bg-300 before:transition-all before:content-[""] [&:has(a:is(:focus-visible,:hover))]:[--intent:1] [&:has(a:target:is(:focus-visible,:hover))::after]:text-primary'
                        : 'group relative flex flex-col text-primary/70 transition-all after:point before:duration-300 before:pointer-events-none before:fixed before:left-[anchor(--anchor-right_left)] before:top-[anchor(--anchor-right_top)] before:z-[-1] before:h-[anchor-size(--anchor-right_height)] before:w-[anchor-size(--anchor-right_width)] before:rounded-full before:bg-300 before:transition-all before:content-[""] [&:has(a:is(:focus-visible,:hover))]:[--intent:1] [&:has(a:target:is(:focus-visible,:hover))::after]:text-primary'
                }
            >
                {props.data.map((data, index) => (
                    <li
                        style={
                            {
                                '--direction': props.direction,
                            } as React.CSSProperties
                        }
                        className={
                            props.direction === 'left'
                                ? 'peer flex [&:has(a:is(:hover,:focus-visible))]:[anchor-name:--anchor-left] relative'
                                : 'peer flex [&:has(a:is(:hover,:focus-visible))]:[anchor-name:--anchor-right] relative'
                        }
                    >
                        {/* Button */}
                        <a
                            onMouseOver={() => setHoverDataIndex(index + 1)}
                            className="p-1.5 opacity-80 hover:opacity-100 transition-all"
                            key={index}
                            target="_blank"
                            href={data.url}
                        >
                            <div
                                style={{
                                    borderColor: data.border,
                                    backgroundColor: data.background,
                                }}
                                className="p-3 rounded-full w-11 h-11 border"
                            >
                                {data.icon}
                            </div>
                        </a>
                    </li>
                ))}
                {/* Tooltip */}
                <div
                    style={{
                        left: props.direction === 'left' ? '64px' : '',
                        right: props.direction === 'right' ? '64px' : '',
                        clipPath: `inset(${
                            (100 / props.data.length) * (hoverDataIndex - 1) + 4
                        }% ${
                            props.direction === 'left'
                                ? 78 - props.data[hoverDataIndex - 1].size
                                : 0
                        }px ${
                            100 - (100 / props.data.length) * hoverDataIndex + 4
                        }% ${
                            props.direction === 'right'
                                ? 91 - props.data[hoverDataIndex - 1].size
                                : 2
                        }px round 999px)`,
                    }}
                    className="flex flex-col absolute top-0 bg-300 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    {props.data.map((data, index) => (
                        <div
                            key={index}
                            style={{
                                alignSelf:
                                    props.direction === 'left'
                                        ? 'start'
                                        : 'end',
                            }}
                            className="flex items-center text-xs h-11 m-1.5 p-1.5 text-foreground font-semibold w-min"
                        >
                            {data.name}
                        </div>
                    ))}
                </div>
            </ul>
        </nav>
    )
}
