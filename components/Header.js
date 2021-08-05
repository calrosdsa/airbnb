import React,{Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Image from "next/image"
import {useRouter} from 'next/router'
import {SearchIcon,GlobeAltIcon,MenuAlt1Icon, UserIcon,} from '@heroicons/react/solid'

function Header() {
    const router=useRouter();
    return (
        <header className="sticky header  top-0 bg-transparent z-50 grid  grid-cols-3 shadow-lg py-5 px-3">
            <div className="relative flex items-center h-9 md:h-10  cursor-pointer my-auto mx-6 ">
                <Image
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit="contain"
                objectPosition='left'
                />
            </div>


            <div className="flex col-start-1  md:col-start-2 md:col-span-1 py-1  md:row-start-1 items-center  ">
             <input autoFocus type="text col-span-3" className="hidden md:inline-flex md:h-9  focus:outline-none flex-grow bg-gray-200 rounded-lg  p-1"  placeholder="Start Search"/>
             <Menu className="relative">
                 {({open})=>(
                     <Fragment>
                     <Menu.Button>
             <SearchIcon  className="h-8 md:hidden bg-red-400 text-white justify-end inline-flex rounded-full p-2 cursor-pointer"/>
                 </Menu.Button>
                 <Transition show={open}
                  enter="transition ease-out duration-400"
                  enterFrom="transform opacity-100  scale-x-0"
                  enterTo="transform opacity-100 scale-x-40"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-100 scale-x-0"
                 >
                     <Menu.Item>
             <input autoFocus type="text col-span-3" className="md:hidden  focus:outline-none bg-gray-200  rounded-lg absolute -mt-4 p-1"  placeholder="Start Search"/>
                     </Menu.Item>
                 </Transition>
                     </Fragment>
             )}
             </Menu>
            </div>
              <div className="flex justify-end items-center">
            <p className="mr-2 text-[12px] md:text-xl -ml-5  text-white font-bold ">Become a host</p>
            <GlobeAltIcon className="h-8 text-white mr-10"/>
            <div className="bg-white  flex justify-center mr-5 h-14 items-center  rounded-full  p-1">
                <UserIcon onClick={()=>router.push('/api/auth/login')}  className="bg-gray-400 h-10  p-1  rounded-xl "/>
                <MenuAlt1Icon  className="h-10  p-1"/>
            </div>
              </div>
        </header>
    )
}

export default Header;
