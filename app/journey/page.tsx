"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function JourneyPage() {
  const [activeTab, setActiveTab] = useState("chapters")

  const chapters = [
    {
      id: 1,
      title: "Kalkış Macerası",
      description:
        "Kalkış sırasında Hezarfen ile ilk kez karşılaşan Mete'ye katılın. Uçakların nasıl kaldırma kuvveti oluşturduğunu ve uçuşun tarihini öğrenin",
      ar: "AR'de uçak kanadının farklı kısımlarını tespit edin",
      game: "Hezarfen'in ilk kanatlarını yapmasına yardım edin",
      learning: "Kaldırma fiziği, Havacılık tarihi",
      image: "/resimler/kalkisbolumu.png",
    },
    {
      id: 2,
      title: "Bulutlar & Hava Durumu",
      description:
        "EMete ve Hezarfen ile farklı bulut oluşumlarını ve hava modellerini keşfedin. Hava durumunun uçuşu nasıl etkilediğini anlayın",
      ar: "AR'de farklı bulut türleri oluşturun ve keşfedin",
      game: "Hava tahmini yarışması",
      learning: "Meteoroloji, Bulut sınıflandırmaları",
      image: "/resimler/bulutlarhava.png",
    },
    {
      id: 3,
      title: "Kültürel Destinasyon",
      description:
        "Hezarfen'in hikayeleri ve tarihi maceraları aracılığıyla gideceğiniz yerin kültürünü ve simge yapılarını keşfedin.",
      ar: "Varmadan önce simge yapıları 3 boyutlu olarak ziyaret edin",
      game: "Kültürel hazine avı",
      learning: "Coğrafya, Tarih, Kültürel gelenekler",
      image: "/resimler/kulutreldest.png",
    },
    {
      id: 4,
      title: "Sky Languages",
      description: "Eğlenceli telaffuz oyunlarıyla gideceğiniz ülkenin dilinde temel ifadeleri ve kelimeleri öğrenin.",
      ar: "Kelimeleri telaffuz eden etkileşimli kelime balonları",
      game: "Dil eşleştirme mücadelesi",
      learning: "Dil temelleri, İletişim becerileri",
      image: "/resimler/Sky Languages.png",
    },
    {
      id: 5,
      title: "Havacılık Kahramanları",
      description: "Dünyanın dört bir yanından ünlü havacılarla tanışın ve uçuşa katkılarını öğrenin.",
      ar: "3 boyutlu tarihi uçaklar",
      game: "Havacı zaman çizelgesi meydan okuması",
      learning: "Tarih, Biyografi, Havacılık kilometre taşları",
      image: "/resimler/Havacılık Kahramanları.png",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-sky-500 overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Mete'nin Yolculuğu"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6">Mete ile Yolculuk</h1>
            <p className="text-xl mb-6">
              Uçuşunuz sırasında öğrenmeyi eğlenceyle birleştiren 10 interaktif bölüm boyunca 8 yaşındaki Mete'yi takip
              edin.
            </p>
          </div>
        </div>
      </section>

      {/* Character Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Mete ile Tanışın</h2>
              <p className="text-lg text-sky-600 mb-4">
                Mete, uçakları, tarihi ve maceraya bayılan meraklı 8 yaşında bir çocuktur. İlk uçuşunda, ona efsanevi
                Osmanlı havacı Hezarfen Ahmed Çelebi'yi tanıtan SkyPals adlı sihirli bir uygulama keşfeder.
              </p>
              <p className="text-lg text-sky-600 mb-4">
                Birlikte, gökyüzü boyunca uzanan, havacılık, bilim, coğrafya ve kültürleri keşfeden eğitici bir
                yolculuğa çıkarlar.
              </p>
              <p className="text-lg text-sky-600">
                Mete'nin gözünden çocuklar, interaktif bir macera içinde öğrenmeyi eğlenceli hale getiren uçuşun
                harikalarını ve keşfetme sevincini deneyimlerler.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto">
              <Image src="/placeholder.svg?height=500&width=500" alt="Mete karakteri" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Content */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">SkyPals Deneyimi</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              Mete'nin gökyüzündeki yolculuğunu çocuklar için benzersiz bir eğitim macerası yapan özellikleri keşfedin.
            </p>
          </div>

          <Tabs defaultValue="chapters" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-full bg-sky-100 p-1 mb-12">
              <TabsTrigger
                value="chapters"
                className={`rounded-full ${activeTab === "chapters" ? "bg-white shadow-sm" : ""}`}
              >
                Hikaye Bölümleri
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className={`rounded-full ${activeTab === "experience" ? "bg-white shadow-sm" : ""}`}
              >
                AR ve Oyun
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chapters">
              <div className="space-y-12">
                {chapters.map((chapter) => (
                  <Card key={chapter.id} className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-video">
                          <Image
                            src={chapter.image || "/placeholder.svg"}
                            alt={`Chapter ${chapter.id}: ${chapter.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-200">
                              Chapter {chapter.id}
                            </Badge>
                            <h3 className="text-xl font-bold text-sky-800">{chapter.title}</h3>
                          </div>

                          <p className="text-sky-600 mb-6">{chapter.description}</p>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                              <Badge className="bg-purple-100 text-purple-800 border-purple-200">AR Deneyimi</Badge>
                              <p className="text-sky-700">{chapter.ar}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Badge className="bg-green-100 text-green-800 border-green-200">Mini-Oyun</Badge>
                              <p className="text-sky-700">{chapter.game}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Badge className="bg-amber-100 text-amber-800 border-amber-200">Öğrenme</Badge>
                              <p className="text-sky-700">{chapter.learning}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <p className="text-sky-600 italic">
                    Preview of 5 chapters out of 10. The full journey adapts to your flight route and duration.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="AR Experience"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Artırılmış Gerçeklik</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sky-600 mb-4">
                      SkyPals, uçak kabinini interaktif bir öğrenme ortamına dönüştürmek için en son AR teknolojisini
                      kullanır. Çocuklar şunları yapabilir:
                    </p>
                    <ul className="space-y-2 text-sky-700 list-disc pl-5">
                      <li>Uçakların, simgelerin ve bilimsel kavramların 3D modellerini keşfedin</li>
                      <li>Dokunma ve harekete tepki veren sanal öğelerle etkileşime geçin</li>
                      <li>Farklı bölgeler üzerinden uçarken coğrafi özellikleri görselleştirin</li>
                      <li>Tarihi olayların ve kültürel uygulamaların canlandığını görün</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src="/placeholder.svg?height=400&width=700" alt="Mini-Games" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">İnteraktif Mini-Oyunlar</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sky-600 mb-4">
                      Her bölüm, eğlence sağlarken öğrenme kavramlarını pekiştiren ilgi çekici mini oyunlar içerir.
                      Oyunlar şunlar için tasarlanmıştır:
                    </p>
                    <ul className="space-y-2 text-sky-700 list-disc pl-5">
                      <li>Problem çözme ve eleştirel düşünme becerilerini geliştirmek</li>
                      <li>Farklı yaş gruplarına ve beceri seviyelerine uyum sağlamak</li>
                      <li>Dijital rozetler ve başarılarla ilerlemeyi ödüllendirmek</li>
                      <li>Anında geri bildirim ve öğrenme pekiştirmesi sağlamak</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Mete'nin Macerasına Katılmaya Hazır mısınız?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            SkyPals, seçili Türk Hava Yolları uçuşlarında mevcuttur. Çocuğunuzun bir sonraki uçuşunu unutulmaz bir
            öğrenme deneyimine dönüştürün!
          </p>
          <button className="bg-white text-sky-600 hover:bg-sky-100 font-medium px-8 py-3 rounded-full transition-colors">
            Nasıl Erişileceğini Öğrenin
          </button>
        </div>
      </section>
    </div>
  )
}
