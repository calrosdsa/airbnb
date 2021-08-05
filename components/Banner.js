import React from 'react'
import Image from 'next/image'
function Banner() {
    return (
        <div className="h-[300px] -top-28 sm:h-[400px] md:h-[500px] lg:h-[600px]  xl:h-[750px] relative">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit='cover'
            />
            <div className="absolute top-1/2 w-full text-center">
            <p className="text-gray-600 italic font-extrabold text-xl">Not sure where go? Perferct.</p>
            <button className="text-purple-500 p-1 md:p-2 md:text-xl  mt-2 rounded-lg font-bold text-lg hover:shadow-xl active:scale-90 shadow-md transition duration-150 border-2">I am Flexible</button>
            </div>
            
        </div>
    )
}

export default Banner
