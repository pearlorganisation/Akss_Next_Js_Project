"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Footer from "@/components/Footer"
import Notify from "@/components/Notify"

const VolumePage = () => {
  const [volume, setVolume] = useState(10)
  console.log("The volume value is", volume)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-end items-center p-4 sm:p-6">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          {/* Title Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What is your organization's <span className="italic">monthly</span> hiring volume?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Drag the volume slider below to see if iona.ai is a good fit for your organization.
            </p>
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
                className="w-full transform transition-transform duration-75 ease-in-out group-hover:translate-y-0.5"
                onValueChange={(e) => setVolume(e[0])}
              />
            </div>

            <p className="text-sm sm:text-base text-yellow-600 font-medium text-center sm:text-left">
              Start by dragging the slider to input your organization's hiring volume.
            </p>
          </div>
        </div>
      </main>

      {/* Conditional Notification */}
      {volume < 51 && (
        <div className="mx-6 sm:mx-11 lg:mx-36">
          <Notify />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default VolumePage;
