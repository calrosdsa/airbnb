import React from 'react'
import Image from 'next/image'
function LargeCard({img,title,description,bottontext}) {
    return (
        <section className="relative py-16 cursor-pointer mx-auto">
            <div className="relative h-64 md:h-96 min-w-[300px]">
                <Image
                src={img}
                layout='fill'
                objectFit="cover"
                className="rounded-2xl"
                />
            </div>
                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-serif text-base">{description}</p>
                <button className="text-sm   text-white bg-gray-900 px-5 mt-4 py-2 rounded-lg">{bottontext}</button>
            </div>
        </section>
    )
}

export default LargeCard
