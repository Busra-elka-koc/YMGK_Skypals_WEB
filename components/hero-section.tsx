"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden py-12">
      {/* Background elements that move with scroll */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-yellow-200 rounded-full opacity-40 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hezarfen'in Kanatlarıyla Öğren!
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-sky-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hezarfen Ahmed Çelebi'nin ilham verici hikayesi aracılığıyla havacılık, bilim ve kültürü birleştiren
              inanılmaz bir uçuş içi macera için SkyPals'a katılın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white rounded-full px-8 text-lg"
              >
                Gökyüzünü Keşfetmeye Başla
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2 relative h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/resimler/anasayfailk.jpg"
              alt="Child with wings and rainbow pencil trail"
              width={600}
              height={600}
              className="object-contain"
            />

            {/* Animated rainbow trail */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
              <div className="w-48 h-48 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 via-blue-300 to-purple-300 opacity-30 blur-md"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
