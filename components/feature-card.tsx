"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isVisible: boolean
}

export default function FeatureCard({ icon, title, description, delay, isVisible }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4 text-sky-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
          <p className="text-sky-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
