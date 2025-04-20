"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LucideBook, LucideGraduationCap, PlaneIcon as LucideAirplane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("hezarfen")

  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">SkyPals Hakkında</h2>
          <p className="text-sky-600 max-w-2xl mx-auto">
            Eğitici maceramızın arkasındaki hikayeyi ve SkyPals'ı benzersiz bir öğrenme deneyimi yapan özellikleri
            keşfedin.
          </p>
        </div>

        <Tabs defaultValue="hezarfen" onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 rounded-full bg-sky-100 p-1">
            <TabsTrigger
              value="hezarfen"
              className={`rounded-full text-sm md:text-base ${activeTab === "hezarfen" ? "bg-white shadow-sm" : ""}`}
            >
              Hezarfen'in Mirası
            </TabsTrigger>
            <TabsTrigger
              value="academy"
              className={`rounded-full text-sm md:text-base ${activeTab === "academy" ? "bg-white shadow-sm" : ""}`}
            >
              Gökyüzü Akademisi
            </TabsTrigger>
            <TabsTrigger
              value="partnership"
              className={`rounded-full text-sm md:text-base ${activeTab === "partnership" ? "bg-white shadow-sm" : ""}`}
            >
              Ortaklık
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="hezarfen">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <LucideBook size={24} className="text-sky-600" />
                      <h3 className="text-xl font-bold text-sky-800">Hezarfen'in Mirası</h3>
                    </div>
                    <p className="text-sky-700 mb-4">
                      Hezarfen Ahmed Çelebi, 17. yüzyılda ilk sürdürülebilir insan uçuşunu gerçekleştirdiği söylenen
                      efsanevi bir Osmanlı mucit ve havacıydı.
                    </p>
                    <p className="text-sky-700 mb-4">
                      Yapay kanatlar kullanarak Galata Kulesi'nden Boğaz'ı geçerek Üsküdar'a uçtu ve olağanüstü bir
                      yenilikçilik ve cesaret örneği gösterdi.
                    </p>
                    <p className="text-sky-700">
                      Onun hikayesi çocukları büyük hayaller kurmaya, meraklı olmaya ve bilgiyi takip etmeye teşvik eder
                      - SkyPals deneyiminin kalbinde yatan değerler.
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src="/resimler/hezarfen.jpg"
                      alt="Illustration of Hezarfen Ahmed Çelebi"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academy">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <LucideGraduationCap size={24} className="text-sky-600" />
                      <h3 className="text-xl font-bold text-sky-800">Gökyüzü Akademisi</h3>
                    </div>
                    <p className="text-sky-700 mb-4">
                      Gökyüzü Akademisi, uçuşlar sırasında oyunu amaçlı öğrenmeyle birleştiren yenilikçi eğitim
                      çerçevemizdir.
                    </p>
                    <p className="text-sky-700 mb-4">
                      Çocuklar, eğlenceli AR/VR deneyimleri aracılığıyla STEAM kavramlarını, kültürel bilgileri ve
                      havacılık ilkelerini keşfederler!
                    </p>
                    <p className="text-sky-700">
                      Müfredat, çocukları eğlendirirken anlamlı öğrenme sonuçları sağlamak için eğitim uzmanları
                      tarafından yaşa uygun olarak geliştirilmiştir.
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src="/resimler/stem.jpg"
                      alt="Children learning with AR technology"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partnership">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <LucideAirplane size={24} className="text-sky-600" />
                      <h3 className="text-xl font-bold text-sky-800">Türk Hava Yolları Ortaklığı</h3>
                    </div>
                    <p className="text-sky-700 mb-4">
                      SkyPals, bu benzersiz eğitim deneyimini genç yolculara sunmak için Türk Hava Yolları ile ortaklık
                      kurmaktan gurur duyar.
                    </p>
                    <p className="text-sky-700 mb-4">
                      Bu işbirliği, gerçek uçuş verilerini ve havacılık bilgilerini uygulamamıza entegre etmemize olanak
                      tanıyarak otantik bir öğrenme ortamı yaratır.
                    </p>
                    <p className="text-sky-700">
                      Birlikte, seyahat süresini çocukların uçuştan çok sonra hatırlayacakları değerli öğrenme
                      fırsatlarına dönüştürüyoruz.
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src="/resimler/thy.jpg"
                      alt="Turkish Airlines partnership"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
