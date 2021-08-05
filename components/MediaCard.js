import React from 'react'
import Image from 'next/image'
function MediaCard({img,title}) {
    return (
        <main>
            <div className="relative shadow-lg w-[150px] mx-1 hover:scale-105 transform transition duration-300  ease-out">
            <Image
            src={img}
            height={200}
            width={150}
            objectFit='cover'
            className="rounded-xl"
            />
            <h1 className="mx-2 font-bold text-sm">{title}</h1>
            </div>
            </main>
    )
}

export default MediaCard
