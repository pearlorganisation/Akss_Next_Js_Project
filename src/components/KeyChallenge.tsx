"use client"

import { useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KeyChallenge() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full space-y-6">
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full bg-[#4B75C5] text-white hover:bg-[#4B75C5]/90"
      >
        <span>Key challenges</span>
        <ArrowRight
          className="ml-2 h-4 w-4 transition-transform duration-300"
          style={{
            transform: isHovered ? "translateX(2px)" : "translateX(0)",
          }}
        />
      </Button>

      <p className="text-sm text-gray-800">
        Discover how <span className="font-semibold">iona.ai</span> solves the most common and critical issues of
        high-volume hiring.
      </p>

      <div className="text-center text-sm text-gray-500">or</div>

      <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
        <Calendar className="mr-2 h-4 w-4" />
        Schedule a demo
      </Button>

      <p className="text-sm text-gray-800">
        Our experts will be glad to demo <span className="font-semibold">iona.ai</span> and answer any questions you
        have.
      </p>
    </div>
  )
}

