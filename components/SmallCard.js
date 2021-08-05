import React from 'react'
import Image from 'next/image'
function SmallCard({img,location,distance}) {
    return (
        <div className="hover:bg-gray-300 rounded-lg my-2 hover:scale-105 transform transition ease-out duration-200 flex">
            <div className="h-16 w-16  ml-2 rounded-lg justify-start">

            <Image
            src={img}
            objectFit='cover'
            height={60}
            width={60}
            className="rounded-xl"
            />
            </div>
            <div className="mx-1 text-xs sm:text-sm xl:text-base ">

            <h1 className="font-bold">{location}</h1>
            <h2 className="font-bold text-gray-500">{distance}</h2>
            </div>
        </div>
    )
}

export default SmallCard
