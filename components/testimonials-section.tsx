"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { LucideChevronLeft, LucideChevronRight, LucideQuote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ayşe K.",
      role: "İki çocuk annesi",
      text: "SkyPals 4 saatlik uçuşumuzu çok daha kolay hale getirdi! Çocuklarım havacılık ve farklı kültürler hakkında bilgi edinirken tüm yolculuk boyunca meşguldü. İndikten sonra Hezarfen'in maceraları hakkında bana anlatmak için sabırsızlanıyorlardı.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Mehmet T.",
      role: "8 yaşında oğlu olan baba",
      text: "Ekran süresi konusunda endişelenen bir ebeveyn olarak, SkyPals'ın ne kadar eğitici olduğunu görmek beni etkiledi. AR özellikleri benim için bile büyüleyiciydi! Oğlum eğlenirken uçuş bilimi hakkında bilgi edindi.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Seda G.",
      role: "6 ve 10 yaşlarında çocukları olan anne",
      text: "Her iki çocuğum da interaktif hikaye ve oyunları çok sevdi. Kültürel öğeler, varış yerimize varmadan önce onlara destinasyon hakkında bilgi verdi. Eğlence ve eğitimin mükemmel bir karışımı.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Ebeveynler Ne Diyor</h2>
          <p className="text-sky-600 max-w-2xl mx-auto">
            SkyPals'ı uçuşlar sırasında çocuklarıyla kullanan ebeveynlerden yorumlar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-0 text-sky-200">
            <LucideQuote size={64} />
          </div>

          <div className="bg-sky-50 rounded-xl p-8 shadow-lg relative z-10">
            <div className="text-lg text-sky-700 mb-6">"{testimonials[activeIndex].text}"</div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sky-800">{testimonials[activeIndex].name}</h4>
                <p className="text-sky-600 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <LucideChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-sky-500" : "bg-sky-200"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="Next testimonial"
            >
              <LucideChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
