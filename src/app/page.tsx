"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-6">
        
        <Button variant="ghost" size="icon">
          <Menu className="h-12 w-12" />
        </Button>
        
      
      </header>

      <main className="flex max-w-4xl ml-6 py-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold tracking-tight">
              Convert <span className="italic">Prospect</span> to <br /><span className="italic">Productive</span> 
            </h1>
            <p className="text-2xl text-gray-500 my-2">Add some good landing page copy here...</p>
               <div className="mt-2">
                   <Link href={`/1-monthly-hiring-volume`}>   
              <Button  size="icon" className="w-32 h-10 bg-blue-500">
                <span className="text-white">Learn More</span><ArrowRight className="h-6 w-6" />
              </Button>
              </Link>
               </div>
            
          </div>
        </div>
      </main>
     
     {/** footer will remain same */}
      <Footer />
    </div>
  )
}

