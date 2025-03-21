'use client';

import Link from 'next/link';
import React from 'react'

import { SiteDrawer } from './SiteDrawer';

const Header = () => {
  return (
    <header className="w-full ">
      <div className="bg-[#002171] text-white flex items-center justify-between py-4 px-16 rounded-b-3xl">
        <Link href="/" className="text-lg font-medium">
          iona.ai
        </Link>
       

        <SiteDrawer />
      </div>
    </header>
  )
}

export default Header