import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton'
import Image, { StaticImageData } from 'next/image'

export default function LoadingMedia(props: {
    type: 'image' | 'video'
    src: string | StaticImageData
    alt: string
}) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    return (
        <>
            {isLoading && <Skeleton className="w-full h-full" />}
            {props.type === 'image' && (
                <Image
                    src={props.src}
                    alt={props.alt}
                    onLoadingComplete={() => setIsLoading(false)}
                />
            )}

            {props.type === 'video' && (
                <video
                    src={props.src as string}
                    autoPlay
                    loop
                    muted
                    onLoadedData={() => setIsLoading(false)}
                />
            )}
        </>
    )
}
