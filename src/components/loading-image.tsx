import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton'
import Image, { StaticImageData } from 'next/image'

export default function LoadingImage(props: {
    src: string | StaticImageData
    alt: string
}) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    return (
        <>
            {isLoading && <Skeleton className="w-full h-full" />}
            <Image
                src={props.src}
                alt={props.alt}
                onLoadingComplete={() => setIsLoading(false)}
            />
        </>
    )
}
