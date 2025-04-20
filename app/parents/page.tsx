import Image from "next/image"
import { LucideShield, LucideBrain, LucideBookOpen, LucideSmile, LucideAward, LucideHeart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ParentsPage() {
  const safetySections = [
    {
      icon: <LucideShield className="h-8 w-8 text-sky-500" />,
      title: "Çocuklara Uygun İçerik",
      description:
        "Tüm içerik yaşa uygundur ve çocuk güvenliği öncelikli olarak tasarlanmıştır. Her oyun, hikaye ve aktivite eğitim uzmanları ve çocuk psikologları tarafından düzenlenmiştir.",
    },
    {
      icon: <LucideHeart className="h-8 w-8 text-pink-500" />,
      title: "Reklamsız Deneyim",
      description:
        "SkyPals tamamen reklamsız ve uygulama içi satın alma olmadan, dikkat dağıtıcı unsurlar veya istenmeyen içerik olmadan güvenli bir dijital ortam sağlar.",
    },
    {
      icon: <LucideSmile className="h-8 w-8 text-amber-500" />,
      title: "Ebeveyn Kontrolleri",
      description:
        "Kapsamlı kontroller, ebeveynlerin zaman sınırları belirlemesine, aktiviteleri izlemesine ve içeriği çocuklarının yaşına ve tercihlerine göre özelleştirmesine olanak tanır.",
    },
  ]

  const educationalBenefits = [
    {
      icon: <LucideBrain className="h-8 w-8 text-purple-500" />,
      title: "Bilişsel Gelişim",
      description:
        "İlgi çekici zorluklar aracılığıyla problem çözme, eleştirel düşünme ve uzamsal farkındalığı geliştirmek için tasarlanmış aktiviteler.",
    },
    {
      icon: <LucideBookOpen className="h-8 w-8 text-green-500" />,
      title: "STEAM Öğrenimi",
      description:
        "Bilim, Teknoloji, Mühendislik, Sanat ve Matematik kavramlarının erişilebilir ve eğlenceli bir formatta entegrasyonu.",
    },
    {
      icon: <LucideAward className="h-8 w-8 text-indigo-500" />,
      title: "Kültürel Farkındalık",
      description:
        "Hezarfen'in maceraları ve destinasyona özgü içerik aracılığıyla çeşitli kültürler, diller ve geleneklere giriş.",
    },
  ]

  const faqs = [
    {
      question: "Bir uçuş sırasında ne kadar ekran süresi uygundur?",
      answer:
        "SkyPals, sağlıklı ekran süresi göz önünde bulundurularak tasarlanmıştır. Uygulama molaları teşvik eder ve çizim ve pencereden dışarı bakma gibi çevrimdışı aktiviteleri içerir. Uzun uçuşlarda SkyPals'ı diğer aktivitelerle dengelemenizi öneririz.",
    },
    {
      question: "SkyPals farklı yaş gruplarına nasıl uyum sağlar?",
      answer:
        "Uygulama çocuğunuzun yaşını algılar ve içerik karmaşıklığını buna göre ayarlar. 5 yaşındaki bir çocuk daha basit açıklamalar ve oyunlar alırken, 12 yaşındaki bir çocuk daha gelişmiş kavramlar ve zorluklarla karşılaşır.",
    },
    {
      question: "Çocuğumun öğrenme ilerlemesini takip edebilir miyim?",
      answer:
        "Evet! Ebeveyn Modu, tamamlanan aktiviteler, öğrenilen kavramlar ve kazanılan başarı rozetleri hakkında ayrıntılı raporlar sunar. Bu bilgileri uçuş sırasında veya sonrasında inceleyebilirsiniz.",
    },
    {
      question: "SkyPals internet bağlantısı olmadan çalışır mı?",
      answer:
        "Kesinlikle. SkyPals, uçuşunuzdan önce indirildikten sonra tamamen çevrimdışı çalışır. AR deneyimleri ve oyunlar dahil tüm özellikler, uçuş içi Wi-Fi gerektirmeden çalışır.",
    },
    {
      question: "Uçuşumuzdan sonra öğrenme deneyimine nasıl devam edebilirim?",
      answer:
        "SkyPals, varış noktanız ve çocuğunuzun keşfettiği kavramlarla ilgili uçuş sonrası aktiviteler ve kaynaklar sağlar. Öğrendikleri üzerine inşa eden kitaplar, müzeler ve aktiviteler için öneriler alacaksınız.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-sky-800 mb-6">Ebeveynler için SkyPals</h1>
              <p className="text-xl text-sky-600 mb-6">
                Ebeveynlerin, özellikle seyahat sırasında, çocuklarının tükettiği dijital içerikten hem eğlence hem de
                eğitim değeri beklediklerini anlıyoruz.
              </p>
              <p className="text-lg text-sky-600">
                SkyPals, ebeveynlerin güvenebileceği güvenli, ilgi çekici ve eğitici bir deneyim yaratmak için
                ebeveynler, eğitimciler ve çocuk gelişimi uzmanlarından gelen girdilerle geliştirilmiştir.
              </p>
            </div>
            <div className="relative max-w-md mx-auto">
              <Image
                src="/resimler/cocuktablet.jpg"
                alt="SkyPals'ı kullanan ebeveyn ve çocuk"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Önce Güvenlik</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              SkyPals, bu temel özelliklerle çocuk güvenliğine öncelik verir:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetySections.map((section, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-sky-800 mb-2">{section.title}</h3>
                    <p className="text-sky-600">{section.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Eğitim Faydaları</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              SkyPals uçuş süresini değerli öğrenme fırsatlarına dönüştürür:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalBenefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-sky-800 mb-2">{benefit.title}</h3>
                    <p className="text-sky-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Eğitim Hedefleri</h2>
              <p className="text-lg text-sky-600 mb-6">
                SkyPals, bu temel alanlarda anlamlı öğrenme sonuçları sunmak için uluslararası eğitim standartlarıyla
                uyumludur:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-800">Bilim ve Teknoloji</h3>
                    <p className="text-sky-600">Temel fizik, havacılık ilkeleri, mühendislik kavramları</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-800">Coğrafya ve Kültür</h3>
                    <p className="text-sky-600">Dünya coğrafyası, kültürel gelenekler, simgeler, diller</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-800">Tarih</h3>
                    <p className="text-sky-600">Havacılık tarihi, tarihi figürler, kültürel miras</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-800">Problem Çözme</h3>
                    <p className="text-sky-600">Eleştirel düşünme, uzamsal akıl yürütme, mantıksal zorluklar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-800">Yaratıcılık</h3>
                    <p className="text-sky-600">Sanat aktiviteleri, hikaye anlatımı, hayal gücüne dayalı oyun</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative max-w-md mx-auto">
              <Image
                src="/resimler/cocuktablet2.png"
                alt="SkyPals ile öğrenen çocuk"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Ebeveynlerin Soruları</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              SkyPals hakkında ebeveynlerden gelen yaygın sorular:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-sky-100"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-sky-800 hover:text-sky-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-sky-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-sky-600">
              Daha fazla sorunuz mu var?{" "}
              <a href="/faq" className="text-sky-700 font-medium hover:text-sky-800">
                Tam SSS sayfamızı ziyaret edin
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Ebeveynler Ne Diyor</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              SkyPals'ı çocuklarıyla kullanan ebeveynlerden yorumlar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sky-700 italic">
                    "My daughter was completely engaged during our 5-hour flight. She learned about aerodynamics and
                    Turkish culture while having fun. The parent reports helped me see what she was learning."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                      AK
                    </div>
                    <div>
                      <p className="font-medium text-sky-800">Ayşe K.</p>
                      <p className="text-sm text-sky-600">Mother of 7-year-old</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sky-700 italic">
                    "As an educator, I was impressed by how SkyPals balances entertainment with genuine learning. My
                    twins were excitedly telling me facts about clouds and aviation history."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                      MT
                    </div>
                    <div>
                      <p className="font-medium text-sky-800">Michael T.</p>
                      <p className="text-sm text-sky-600">Father of 9-year-old twins</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sky-700 italic">
                    "The safety features gave me peace of mind. No ads, no in-app purchases, and age-appropriate
                    content. My son was completely immersed in the AR experiences and games."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                      JL
                    </div>
                    <div>
                      <p className="font-medium text-sky-800">Jennifer L.</p>
                      <p className="text-sm text-sky-600">Mother of 10-year-old</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Uçuş Süresini Öğrenme Süresine Dönüştürmeye Hazır mısınız?</h2>
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
