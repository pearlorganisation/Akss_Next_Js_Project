"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"

const HeaderWrapper = () => {
  const pathname = usePathname()
  const adminPath = pathname.startsWith('/admin')
  if(adminPath){
    return null
  }
  return <Header />
}

export default HeaderWrapper