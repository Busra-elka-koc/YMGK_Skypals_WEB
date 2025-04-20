import Image from "next/image"
import Link from "next/link"
import { LucideShield, LucideBrain, LucideWifi, LucideBookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ParentsSection() {
  const benefits = [
    {
      icon: <LucideShield className="h-6 w-6 text-sky-500" />,
      title: "Güvenli ve Reklamsız",
      description: "Reklam veya uygulama içi satın alma olmayan çocuk dostu içerik.",
    },
    {
      icon: <LucideBrain className="h-6 w-6 text-sky-500" />,
      title: "Bilişsel Gelişim",
      description: "Problem çözme ve eleştirel düşünmeyi geliştirmek için tasarlanmış aktiviteler.",
    },
    {
      icon: <LucideWifi className="h-6 w-6 text-sky-500" />,
      title: "Çevrimdışı Mod",
      description: "Uçuş sırasında internet bağlantısı olmadan çalışan içerik.",
    },
    {
      icon: <LucideBookOpen className="h-6 w-6 text-sky-500" />,
      title: "Eğitim Değeri",
      description: "Uluslararası eğitim standartlarıyla uyumlu müfredat.",
    },
  ]

  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Ebeveynler İçin</h2>
          <p className="text-sky-600 max-w-2xl mx-auto">
            SkyPals, hem çocukların keyif alması hem de ebeveynlerin içinin rahat etmesi öncelikli olarak
            tasarlanmıştır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-800 mb-6">Ebeveynler Neden SkyPals'ı Seviyor</h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sky-700">{benefit.title}</h4>
                      <p className="text-sky-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/parents">
                  <Button
                    variant="outline"
                    className="rounded-full border-sky-400 text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                  >
                    Güvenlik ve Eğitim Hakkında Daha Fazla Bilgi
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/resimler/cocuktablet.jpg"
                alt="Parent and child using SkyPals together"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-60 blur-md"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
