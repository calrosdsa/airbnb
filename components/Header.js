import React,{Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Image from "next/image"
import {useRouter} from 'next/router'
import {SearchIcon,GlobeAltIcon,MenuAlt1Icon, UserIcon,} from '@heroicons/react/solid'

function Header() {
    const router=useRouter();
    return (
        <header className="sticky header  top-0 bg-white z-50 grid  grid-cols-3 shadow-lg py-1 sm:py-2 lg:py-3 2xl:py-5  px-3">
            <div className="relative xl:mx-10  h-9 md:h-10 mt-1  cursor-pointer">
                <Image
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit="contain"
                objectPosition='left'
                />
            </div>


            <div className="flex  md:col-start-2 md:col-span-1 py-1  md:row-start-1 items-center  ">
             <input autoFocus type="text col-span-3" className="hidden md:inline-flex md:h-9  focus:outline-none flex-grow bg-gray-200 rounded-lg  p-1"  placeholder="Start Search"/>
             <Menu className="">
                 {({open})=>(
                     <Fragment>
                     <Menu.Button>
             <SearchIcon  className="h-8 ml-4 md:hidden bg-red-400 text-white justify-end inline-flex rounded-full p-2 cursor-pointer"/>
                 </Menu.Button>
                 <Transition show={open}
                  enter="transition ease-out duration-500"
                 
                 >
                     <Menu.Item className="absolute min-w-[300px] focus:outline-none  bg-gray-100 top-16 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-8">
             <input autoFocus type="text col-span-3 " className="md:hidden rounded-full focus:outline-none  bg-gray-200 rounded-lg p-2 "  placeholder="Start Search"/>
                     </Menu.Item>
                 </Transition>
                     </Fragment>
             )}
             </Menu>
            </div>
              <div className="flex justify-end items-center ml-10">
            <p className="mr-2 text-gray-400 hidden md:inline-block text-[12px] text-sm xl:text-xl -ml-5 font-bold ">Become a host</p>
            <GlobeAltIcon className="h-8 hidden md:inline-block text-gray-400  mx-2 "/>
            <div className="bg-white text-gray flex justify-center sm:mr-5 h-12 items-center  rounded-full  p-1">
                <UserIcon onClick={()=>router.push('/api/auth/login')}  className="bg-gray-400 h-8 lg:h-10  p-1  rounded-xl "/>
                <MenuAlt1Icon  className="h-8 lg:h-10  p-1"/>
            </div>
              </div>
        </header>
    )
}

export default Header;
