"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function JourneySection() {
  const [activeChapter, setActiveChapter] = useState(1)

  const chapters = [
    { id: 1, title: "Kalkış Macerası" },
    { id: 2, title: "Bulutlar ve Hava Durumu" },
    { id: 3, title: "Kültürel Destinasyon" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Mete ile Yolculuk</h2>
          <p className="text-sky-600 max-w-2xl mx-auto">
            8 yaşındaki Mete'yi uçuş sırasında öğrenmeyi eğlenceyle birleştiren interaktif bir macera boyunca takip
            edin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/resimler/kalkisbolumu.png"
              alt={`Chapter ${activeChapter}: ${chapters.find((c) => c.id === activeChapter)?.title}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-sky-200 mb-1">Chapter {activeChapter}</p>
                <h3 className="text-2xl font-bold text-white">{chapters.find((c) => c.id === activeChapter)?.title}</h3>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-sky-800 mb-4">İnteraktif Bölümler</h3>
              <p className="text-sky-600 mb-6">
                SkyPals, uçuş rotanıza ve sürenize uyum sağlayan 10 ilgi çekici bölüm içerir. Her bölüm, yolculuğunuza
                göre uyarlanmış AR deneyimlerini, mini oyunları ve kültürel öğrenmeyi birleştirir.
              </p>

              <div className="space-y-3">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapter(chapter.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeChapter === chapter.id
                        ? "bg-sky-100 text-sky-700"
                        : "bg-gray-50 text-sky-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">Chapter {chapter.id}:</span> {chapter.title}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-sky-500 text-sm">10 bölümden 3'ünün önizlemesi</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/journey">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full">Tüm Yolculuğu Keşfet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
