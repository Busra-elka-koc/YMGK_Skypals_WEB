"use client"

import { useEffect, useState } from "react"

interface AnimatedCloudProps {
  x: number
  y: number
  scale: number
  speed: number
}

export default function AnimatedCloud({ x, y, scale, speed }: AnimatedCloudProps) {
  const [position, setPosition] = useState(x)

  useEffect(() => {
    const animateCloud = () => {
      setPosition((prev) => {
        if (prev > 100) return -20
        return prev + speed
      })
    }

    const interval = setInterval(animateCloud, 100)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div
      className="absolute pointer-events-none transition-transform duration-1000 ease-linear"
      style={{
        left: `${position}%`,
        top: `${y}%`,
        transform: `scale(${scale})`,
      }}
    >
      <div className="w-36 h-12 bg-white rounded-full opacity-80 shadow-lg blur-sm"></div>
      <div className="w-24 h-12 bg-white rounded-full opacity-80 shadow-lg blur-sm -mt-6 ml-12"></div>
      <div className="w-24 h-12 bg-white rounded-full opacity-80 shadow-lg blur-sm -mt-8 ml-4"></div>
    </div>
  )
}
