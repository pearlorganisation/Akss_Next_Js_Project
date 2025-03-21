"use client";


import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import MyImage from "../../public/image1.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter(); 
  return (
    <div className="">
      <main className="ml-6 py-12">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 md:gap-12 px-4 md:px-8 lg:px-12">
            <div className="">
              <h1 className="text-5xl md:text-3xl lg:text-5xl font-michroma "> ELEVATING</h1>
              <h1 className="text-5xl md:text-3xl lg:text-5xl font-michroma mt-4"> EXPERIENCE</h1>

              <p className="mt-8 text-[#646464] font-mono font-medium"> A Brand Guide is a document that outlines the way a brand looks, feels, and behaves so that any person interacting with the brand anywhere in the world, and on any platform experiences it the same way, contributing to the success and longevity of the brand.</p>
            <button className="px-4 py-2 bg-[#001A72] text-white rounded-md mt-6 text-lg font-mono" onClick={() => router.push("/1-monthly-hiring-volume")}> Learn More </button>
          
            </div>
            <div className=""> 
            <Image src={MyImage} className="object-cover min-h-40" alt="my-image"/>  
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

