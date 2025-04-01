'use client';

import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

import { SiteDrawer } from './SiteDrawer';
import logoimage from "../../public/logo.png"
const Header = () => {
  return (
    <header className="w-full ">
      <div className="bg-[#002171] text-white flex items-center justify-between py-4 px-16 rounded-b-3xl">
           <Link href={`/`}>
           <Image
           src={logoimage}
           alt="logo"
           width={100}
           height={100}
           className='w-full h-full'
           />
        </Link>
       

        <SiteDrawer />
      </div>
    </header>
  )
}

export default Header