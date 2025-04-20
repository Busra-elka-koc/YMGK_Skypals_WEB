"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LucideX } from "lucide-react"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("app-screenshots")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const appScreenshots = [
    {
      id: 1,
      title: "Ana Menü",
      description: "Hezarfen'i içeren SkyPals'ın renkli ana menüsü",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 2,
      title: "AR Deneyimi",
      description: "Uçak bileşenlerinin Artırılmış Gerçeklik görünümü",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 3,
      title: "STEAM Laboratuvarı",
      description: "Hava basıncı hakkında interaktif bilim deneyi",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 4,
      title: "Uçuş Simülatörü",
      description: "Uçuş simülatörü için çocuk dostu kontroller",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 5,
      title: "Kültürel Keşif",
      description: "İnteraktif oyunlar aracılığıyla destinasyonlar hakkında öğrenme",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 6,
      title: "Ebeveyn Paneli",
      description: "Öğrenme ilerlemesi ve kontrolleri gösteren ebeveyn modu",
      image: "/placeholder.svg?height=500&width=800",
    },
  ]

  const badges = [
    {
      id: 1,
      title: "Kalkış Ustası",
      description: "Uçak fiziği bölümünü tamamlayanlara verilir",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Bulut Kaşifi",
      description: "Farklı bulut oluşumlarını tanımlayarak kazanılır",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Kültür Elçisi",
      description: "Varış noktası kültürleri hakkında bilgi edinenlere verilir",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Havacılık Tarihçisi",
      description: "Havacılık tarihi zaman çizelgesini tamamlayarak kazanılır",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      title: "Dil Öğrencisi",
      description: "Yeni bir dilde temel ifadeleri öğrenenlere verilir",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      title: "Uçuş Kaptanı",
      description: "Uçuş simülatörünü başarıyla tamamlayarak kazanılır",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      title: "Bilim Dehası",
      description: "Tüm STEAM laboratuvar deneylerini tamamlayanlara verilir",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      title: "Usta Kaşif",
      description: "Tüm bölümleri tamamlayanlar için nihai rozet",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Gökyüzü Kaşifi Sertifikası",
      description: "İlk yolculuklarını tamamlayan çocuklara verilir",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "İleri Düzey Kaşif Sertifikası",
      description: "Birden fazla yolculuk tamamlayan çocuklar için",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Hezarfen'in Çırağı Sertifikası",
      description: "Uçuş kavramlarında ustalaşanlar için özel ödül",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-sky-800 mb-6">SkyPals Galerisi</h1>
            <p className="text-xl text-sky-600">
              Uygulama ekran görüntülerini, dijital rozetleri ve çocukların SkyPals maceraları boyunca kazanabilecekleri
              sertifikaları keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="app-screenshots" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 rounded-full bg-sky-100 p-1 mb-12">
              <TabsTrigger
                value="app-screenshots"
                className={`rounded-full ${activeTab === "app-screenshots" ? "bg-white shadow-sm" : ""}`}
              >
                Uygulama Görüntüleri
              </TabsTrigger>
              <TabsTrigger
                value="badges"
                className={`rounded-full ${activeTab === "badges" ? "bg-white shadow-sm" : ""}`}
              >
                Dijital Rozetler
              </TabsTrigger>
              <TabsTrigger
                value="certificates"
                className={`rounded-full ${activeTab === "certificates" ? "bg-white shadow-sm" : ""}`}
              >
                Sertifikalar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="app-screenshots">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appScreenshots.map((screenshot) => (
                  <Dialog
                    key={screenshot.id}
                    open={selectedImage === screenshot.image}
                    onOpenChange={(open) => {
                      if (!open) setSelectedImage(null)
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedImage(screenshot.image)}
                      >
                        <div className="relative aspect-video">
                          <Image
                            src={screenshot.image || "/placeholder.svg"}
                            alt={screenshot.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="font-bold text-sky-800">{screenshot.title}</h3>
                          <p className="text-sm text-sky-600">{screenshot.description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={screenshot.image || "/placeholder.svg"}
                          alt={screenshot.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800"
                      >
                        <LucideX size={18} />
                      </button>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="badges">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {badges.map((badge) => (
                  <Dialog
                    key={badge.id}
                    open={selectedImage === badge.image}
                    onOpenChange={(open) => {
                      if (!open) setSelectedImage(null)
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow p-4 text-center"
                        onClick={() => setSelectedImage(badge.image)}
                      >
                        <div className="relative aspect-square mb-4 mx-auto w-32 h-32">
                          <Image
                            src={badge.image || "/placeholder.svg"}
                            alt={badge.title}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-bold text-sky-800 text-sm">{badge.title}</h3>
                        <p className="text-xs text-sky-600 mt-1">{badge.description}</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg p-0 overflow-hidden">
                      <div className="relative aspect-square p-8 bg-white">
                        <Image
                          src={badge.image || "/placeholder.svg"}
                          alt={badge.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-white p-4 text-center">
                        <h3 className="font-bold text-sky-800 text-lg">{badge.title}</h3>
                        <p className="text-sky-600">{badge.description}</p>
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800"
                      >
                        <LucideX size={18} />
                      </button>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <Dialog
                    key={certificate.id}
                    open={selectedImage === certificate.image}
                    onOpenChange={(open) => {
                      if (!open) setSelectedImage(null)
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedImage(certificate.image)}
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="font-bold text-sky-800">{certificate.title}</h3>
                          <p className="text-sm text-sky-600">{certificate.description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800"
                      >
                        <LucideX size={18} />
                      </button>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-6">Bir Sonraki Uçuşunuzda SkyPals'ı Deneyimleyin</h2>
          <p className="text-lg text-sky-600 mb-8 max-w-2xl mx-auto">
            Çocuğunuzun bir sonraki Türk Hava Yolları uçuşu sırasında öğrenirken ve eğlenirken tüm bu rozetleri ve
            sertifikaları toplamasına izin verin.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Nasıl Erişileceğini Öğrenin
          </button>
        </div>
      </section>
    </div>
  )
}
