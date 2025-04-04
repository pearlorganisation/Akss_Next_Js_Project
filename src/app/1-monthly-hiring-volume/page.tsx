"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
 import Notify from "@/components/Notify"
import KeyChallenge from "@/components/KeyChallenge"
import Image from "next/image"

import MyImage from "../../../public/homepage2.png";


// slider 
const VolumePage = () => {
  const [isClicked, setIsClicked ] = useState(false);
  const [volume, setVolume] = useState(10)
  console.log("The volume value is", volume)
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex  mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          {/* Title Section */}
         

         <div className="grid grid-cols-1 md:grid-cols-2">

         <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              What is your organization's <span className="italic">monthly</span> hiring volume?
            </h1>
            <p className="text-base sm:text-lg font-bold text-muted-foreground">
              Drag the volume slider below to see if iona.ai is a good fit for your organization.
            </p>
          </div>

          <Image src={MyImage} alt="" className="m-6"/>

         </div>

          {/* Slider Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 text-lg sm:text-xl justify-center sm:justify-start">
              <span role="img" aria-label="businessman">👨‍💼</span>
              <span role="img" aria-label="businesswoman">👩‍💼</span>
              <span>{volume}+ hires per month</span>
            </div>

            <div className="relative group">
              <Slider
                defaultValue={[10]}
                max={1000}
                step={1}
                className="w-full bg-blue-700 transform transition-transform duration-75 ease-in-out group-hover:translate-y-0.5"
                onValueChange={(e) => {
                  setVolume(e[0])
                  setIsClicked(true)
                }}
              />
            </div>
 

            <p className="text-sm sm:text-base text-black font-medium text-center sm:text-left">
              Start by dragging the slider to input your organization's hiring volume.
            </p>
            
            {/* Conditional Notification - Moved Closer */}
            {isClicked && volume > 0 && volume <=100 ?  (
              <div className="mt-4 sm:mt-6">
                <Notify />
              </div>

            ): isClicked && <div className="mt-4 sm:mt-6"><KeyChallenge /></div> }
          </div>
        </div>


      </main>

    
    </div>
  )
}

export default VolumePage;
