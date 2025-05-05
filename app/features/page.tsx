import Image from "next/image"
import {
  LucideMap,
  FlaskConicalIcon as LucideFlask,
  LucideGamepad2,
  LucideShield,
  LucideZap,
  LucideGlobe2,
  LucideAward,
  LucideUsers,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <LucideMap size={32} className="text-sky-500" />,
      title: "AR Hikaye Görevleri",
      description:
        "Uçuş rotanıza dayalı, Hezarfen'in dünyasını canlandıran artırılmış gerçeklik öğeleriyle interaktif görevler. Çocuklar, üzerinden uçtukları bölgelerin simgelerini, coğrafi özelliklerini ve kültürel unsurlarını keşfedebilirler.",
      image: "/resimler/ozellikler/argrv.jpeg",
    },
    {
      icon: <LucideFlask size={32} className="text-purple-500" />,
      title: "STEAM Laboratuvarı",
      description:
        "Bilim, Teknoloji, Mühendislik, Sanat ve Matematik'i kapsayan eğlenceli deneyler ve zorluklar. Farklı yaş gruplarına uygun interaktif oyunlar ve simülasyonlar aracılığıyla aerodinamik, hava durumu modelleri ve havacılık fiziği hakkında bilgi edinin.",
      image: "/resimler/ozellikler/stmlb.jpeg",
    },
    {
      icon: <LucideGamepad2 size={32} className="text-green-500" />,
      title: "Uçuş Simülatörü",
      description:
        "Havacılığın temellerini öğreten çocuk dostu bir uçuş simülatörü. Sanal bir uçağın kontrolünü ele alın, uçuş aletlerini anlayın ve uçuş fiziğini erişilebilir bir şekilde öğrenirken pilotluk yapmanın keyfini yaşayın.",
      image: "/resimler/ozellikler/smlt.jpeg",
    },
    {
      icon: <LucideShield size={32} className="text-red-500" />,
      title: "Ebeveyn Modu",
      description:
        "İçeriği izlemenize, öğrenme ilerlemesini takip etmenize ve zaman sınırları belirlemenize olanak tanıyan kapsamlı ebeveyn kontrolleri. Çocuğunuzun uçuş sırasında neler öğrendiği ve başardığı hakkında raporlar alın, takip etkinlikleri için önerilerle birlikte.",
      image: "/resimler/ozellikler/ebevyn.jpeg",
    },
    {
      icon: <LucideZap size={32} className="text-amber-500" />,
      title: "Kişiselleştirilmiş Maceralar",
      description:
        "Çocuğunuzun yaşına, ilgi alanlarına ve öğrenme hızına uyum sağlayan içerik. Uygulama, çocukları yolculuk boyunca meşgul tutacak özelleştirilmiş zorluklar ve bilgiler sunmak için etkileşimlerden öğrenir.",
      image: "/resimler/ozellikler/mcrlr.jpeg",
    },
    {
      icon: <LucideGlobe2 size={32} className="text-indigo-500" />,
      title: "Kültürel Keşif",
      description:
        "Varış noktanızın tarihi, gelenekleri ve simgeleri hakkında bilgi edinin. Çocuklar, Hezarfen'in gözünden farklı kültürler hakkında ilginç gerçekleri keşfeder ve seyahat deneyimleri için eğlenceli bir şekilde hazırlanırlar.",
      image: "/resimler/kulutreldest.png",
    },
    {
      icon: <LucideAward size={32} className="text-teal-500" />,
      title: "Dijital Rozetler ve Ödüller",
      description:
        "Görevleri ve zorlukları tamamladıkça başarı rozetleri toplayın ve özel içeriklerin kilidini açın. Çocuklar SkyPals Kaşif sertifikaları kazanabilir ve birden fazla uçuş boyunca ilerlemelerini takip edebilirler.",
      image: "/resimler/ozellikler/rzt.jpeg",
    },
    {
      icon: <LucideUsers size={32} className="text-pink-500" />,
      title: "Çok Oyunculu Mod",
      description:
        "İşbirlikçi öğrenme maceraları için aynı uçuştaki kardeşler veya arkadaşlarla bağlantı kurun. Çocuklar bu sosyal öğrenme deneyiminde bulmacaları çözmek, görevleri tamamlamak ve keşifleri paylaşmak için birlikte çalışabilirler.",
      image: "/resimler/ozellikler/WhatsApp Image 2025-04-13 at 20.38.31.jpeg",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-sky-800 mb-6">SkyPals Özellikleri</h1>
            <p className="text-xl text-sky-600 mb-6">
              SkyPals'ı çocuklar için mükemmel bir uçuş içi eğitici eğlence uygulaması yapan tüm heyecan verici
              özellikleri keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-sky-100">
                      {feature.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-sky-800">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-sky-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-6">SkyPals'ı Deneyimlemek İster misiniz?</h2>
          <p className="text-lg text-sky-600 mb-8 max-w-2xl mx-auto">
            SkyPals, seçili Türk Hava Yolları uçuşlarında mevcuttur. SkyPals'ın yolculuğunuzun bir parçası olup
            olmayacağını görmek için rezervasyonunuzu kontrol edin!
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Nasıl Erişileceğini Öğrenin
          </button>
        </div>
      </section>
    </div>
  )
}
