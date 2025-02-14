"use client"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Footer from "@/components/Footer"
import Notify from "@/components/Notify"
const VolumePage = () => {
  const [volume, setVolume] = useState(10)
  console.log("the volume value is", volume)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-6">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto  py-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What is your organization's <span className="italic">monthly</span> hiring volume?
            </h1>
            <p className="text-lg text-muted-foreground">
              Drag the volume slider below to see if iona.ai is a good fit for your organization.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-2 text-xl">
              <span role="img" aria-label="businessman">
                👨‍💼
              </span>
              <span role="img" aria-label="businesswoman">
                👩‍💼
              </span>
              <span>{volume}+ hires per month</span>
            </div>
            <div className="relative group">
              <Slider
              defaultValue={[10]}
              max={1000}
              step={1}
              className="w-full transform transition-transform duration-75 ease-in-out group-hover:translate-y-0.5"
              onValueChange={(e) => setVolume(e[0])}
              />
            </div>

            <p className="text-sm text-yellow-600 font-medium">
              Start by dragging the slider to input your organization's hiring volume.
            </p>
          </div>
        </div>
      </main>

      {/* <footer className="border-t">
        <div className="container max-w-4xl mx-auto px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-2">
              <a href="mailto:help@iona.ai" className="text-sm hover:underline">
                help@iona.ai
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-sm hover:underline">
                  Facebook
                </a>
                <a href="#" className="text-sm hover:underline">
                  Twitter/X
                </a>
                <a href="#" className="text-sm hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p>128 City Road</p>
              <p>London, United Kingdom</p>
              <p>EC1V 2NX</p>
            </div>

            <div className="space-y-1 text-sm">
              <p>1204, World Trade Tower</p>
              <p>Central Auto Market Block B</p>
              <p>Sector 16, Noida</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <p className="text-sm text-muted-foreground">2023 © iona.ai</p>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer> */}
      { volume < 51 &&  <div className="mx-16"><Notify /></div> }
      <Footer />
    </div>
  )
}

export default VolumePage;