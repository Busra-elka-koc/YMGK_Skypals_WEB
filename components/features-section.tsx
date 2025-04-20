"use client"

import { useInView } from "react-intersection-observer"
import { LucideMap, FlaskConicalIcon as LucideFlask, LucideGamepad2, LucideShield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCard from "./feature-card"

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <LucideMap size={32} />,
      title: "AR Hikaye Görevleri",
      description: "Uçuş rotanıza dayalı interaktif görevlerle yeni yerler ve kültürler keşfedin.",
      delay: 0,
    },
    {
      icon: <LucideFlask size={32} />,
      title: "STEAM Laboratuvarı",
      description: "Eğlenceli deneyler ve zorluklarla bilim, teknoloji, mühendislik, sanat ve matematiği keşfedin.",
      delay: 0.2,
    },
    {
      icon: <LucideGamepad2 size={32} />,
      title: "Uçuş Simülatörü",
      description:
        "Sanal bir uçağın kontrolünü ele alın ve çocuk dostu bir simülatörde havacılığın temellerini öğrenin.",
      delay: 0.4,
    },
    {
      icon: <LucideShield size={32} />,
      title: "Ebeveyn Modu",
      description:
        "Kolay kullanımlı ebeveyn kontrolleriyle içeriği izleyin, öğrenme ilerlemesini takip edin ve sınırlar belirleyin.",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Uygulama Özellikleri</h2>
          <p className="text-sky-600 max-w-2xl mx-auto">
            SkyPals'ı çocuklar için benzersiz bir uçuş içi eğitim deneyimi yapan özellikleri keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              isVisible={inView}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/features">
            <Button
              variant="outline"
              className="rounded-full border-sky-400 text-sky-600 hover:text-sky-700 hover:bg-sky-50"
            >
              Tüm Özellikleri Keşfet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
