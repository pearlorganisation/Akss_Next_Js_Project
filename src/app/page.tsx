"use client";


import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import MyImage from "../../public/homepage.png";
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

              <p className="mt-8 text-[#646464] font-mono font-medium"> Imagine a seamless, AI-powered solution that
                  handles everything–from headcount planning to
                  background checks–freeing you to focus on
                  strategic growth. Unlike traditional tools, we're a
                  fully managed service, eliminating resource
                  drain and cutting hiring costs by up to 90%.
                  Discover how iona.ai delivers quality hires at
                  speed and scale..</p>
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

