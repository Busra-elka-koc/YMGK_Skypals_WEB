"use client"

import { useState, useEffect } from "react"
import AnimatedCloud from "./animated-cloud"

export default function AnimatedBackground() {
  const [clouds, setClouds] = useState<{ id: number; x: number; y: number; scale: number; speed: number }[]>([])

  useEffect(() => {
    // Generate random clouds
    const newClouds = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 70 + 5,
      scale: Math.random() * 0.6 + 0.4,
      speed: Math.random() * 0.2 + 0.1,
    }))

    setClouds(newClouds)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden z-0 bg-gradient-to-b from-sky-300 to-sky-100 opacity-50">
      {clouds.map((cloud) => (
        <AnimatedCloud key={cloud.id} x={cloud.x} y={cloud.y} scale={cloud.scale} speed={cloud.speed} />
      ))}
    </div>
  )
}
