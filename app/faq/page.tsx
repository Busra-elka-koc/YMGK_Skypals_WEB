import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Genel Bilgiler",
      questions: [
        {
          question: "SkyPals nedir?",
          answer:
            "SkyPals, 5-12 yaş arası çocuklar için uçuş içi AR/VR eğitici eğlence uygulamasıdır. Efsanevi Osmanlı havacı Hezarfen Ahmed Çelebi'nin ilham verici hikayesi aracılığıyla havacılık, bilim ve kültürü birleştirir.",
        },
        {
          question: "Çocuğum SkyPals'a nasıl erişebilir?",
          answer:
            "SkyPals, seçili Türk Hava Yolları uçuşlarında mevcuttur. Uçuş içi eğlence sistemi aracılığıyla erişebilir veya AR özellikleriyle daha gelişmiş bir deneyim için uçuşunuzdan önce uygulamayı indirebilirsiniz.",
        },
        {
          question: "SkyPals birden fazla dilde mevcut mu?",
          answer:
            "Evet! SkyPals İngilizce, Türkçe, Arapça, İspanyolca, Fransızca, Almanca, Çince, Japonca ve Rusça dillerinde mevcuttur, böylece dünyanın dört bir yanından çocuklar için erişilebilir.",
        },
        {
          question: "SkyPals özel ekipman gerektiriyor mu?",
          answer:
            "Temel versiyon, ek ekipman gerektirmeden uçuş içi eğlence sisteminde çalışır. Gelişmiş AR deneyimi için, uçuşunuzdan önce SkyPals uygulamasını yüklediğiniz kendi tablet veya akıllı telefonunuzu kullanabilirsiniz.",
        },
      ],
    },
    {
      category: "Özellikler ve İçerik",
      questions: [
        {
          question: "SkyPals ne tür içerikler sunuyor?",
          answer:
            "SkyPals, interaktif hikaye görevleri, STEAM laboratuvar aktiviteleri, çocuk dostu uçuş simülatörü, kültürel keşif oyunları, dil öğrenme modülleri ve çok daha fazlasını sunar - hepsi uçuş rotanıza ve varış noktanıza uyarlanmıştır.",
        },
        {
          question: "AR özelliği nasıl çalışır?",
          answer:
            "AR özelliği, eğitici içeriği gerçek dünyaya yerleştirmek için cihazınızın kamerasını kullanır. Çocuklar uçakların 3D modellerini keşfedebilir, uçuş yolunuz boyunca simgeleri keşfedebilir ve kabindeki sanal öğelerle etkileşime geçebilir.",
        },
        {
          question: "İçerik her uçuş için farklı mı?",
          answer:
            "Evet! SkyPals içeriğini uçuş rotanıza, varış noktanıza ve sürenize göre uyarlar. Bu, çocuğunuzun her yolculukta kültürel olarak ilgili içerikle benzersiz bir deneyim yaşayacağı anlamına gelir.",
        },
        {
          question: "Kaç bölüm/aktivite içeriyor?",
          answer:
            "SkyPals, her biri çoklu aktiviteler, oyunlar ve AR deneyimleri içeren 10 ana bölüm içerir. Mevcut içerik uçuş sürenize bağlıdır, daha uzun uçuşlarda daha fazla içerik açılır.",
        },
      ],
    },
    {
      category: "Eğitim Değeri",
      questions: [
        {
          question: "SkyPals hangi eğitim konularını kapsar?",
          answer:
            "SkyPals, havacılık bilimi, coğrafya, kültürel çalışmalar, temel fizik, meteoroloji, tarih, dil temelleri ve sanat dahil olmak üzere geniş bir konu yelpazesini kapsar - hepsi yaşa uygun ve ilgi çekici bir şekilde sunulur.",
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
          question: "Uçuşumuzdan sonra öğrenmeye devam eden içerik var mı?",
          answer:
            "SkyPals, varış noktanız ve çocuğunuzun keşfettiği kavramlarla ilgili uçuş sonrası aktiviteler ve kaynaklar sağlar. Öğrendikleri üzerine inşa eden kitaplar, müzeler ve aktiviteler için öneriler alacaksınız.",
        },
      ],
    },
    {
      category: "Güvenlik ve Gizlilik",
      questions: [
        {
          question: "SkyPals çocuklar için güvenli mi?",
          answer:
            "Evet, güvenlik en büyük önceliğimizdir. Tüm içerik çocuk gelişimi uzmanları tarafından incelenir ve uygunsuz materyal içermez. Uygulama reklamsızdır ve uygulama içi satın alma veya harici bağlantılar içermez.",
        },
        {
          question: "SkyPals kişisel veri topluyor mu?",
          answer:
            "SkyPals minimum veri toplar, sadece hizmeti sağlamak ve geliştirmek için gerekli olanları. Çocukların verilerini asla üçüncü taraflarla paylaşmayız ve tüm bilgiler analitik amaçlar için anonimleştirilir.",
        },
        {
          question: "Kullanım süresi sınırları belirleyebilir miyim?",
          answer:
            "Evet, Ebeveyn Modu belirli zaman sınırları belirlemenize ve molalar programlamanıza olanak tanır. Uygulama ayrıca uzun uçuşlar sırasında otomatik olarak fiziksel aktiviteler ve dinlenme süreleri önerir.",
        },
        {
          question: "İçerik filtreleme veya moderasyon var mı?",
          answer:
            "Tüm SkyPals içeriği önceden moderasyona tabi tutulur ve özellikle çocuklar için hazırlanır. Uygulamada kullanıcı tarafından oluşturulan içerik veya moderasyonsuz etkileşim yoktur.",
        },
      ],
    },
    {
      category: "Teknik Destek",
      questions: [
        {
          question: "SkyPals hangi cihazlarla uyumlu?",
          answer:
            "Temel versiyon, donanımlı Türk Hava Yolları uçuşlarındaki tüm uçuş içi eğlence sistemlerinde çalışır. Gelişmiş AR versiyonu iOS 12+ ve Android 9+ tablet ve akıllı telefonlarla uyumludur.",
        },
        {
          question: "SkyPals internet bağlantısı olmadan çalışır mı?",
          answer:
            "Evet, SkyPals uçuşunuzdan önce indirildikten sonra tamamen çevrimdışı çalışır. AR deneyimleri ve oyunlar dahil tüm özellikler, uçuş içi Wi-Fi gerektirmeden çalışır.",
        },
        {
          question: "Teknik sorunlarla karşılaşırsam ne yapmalıyım?",
          answer:
            "Uçuş içi eğlence sistemi sorunları için lütfen kabin ekibiyle iletişime geçin. Mobil uygulama versiyonu için support@skypals.com adresinden destek ekibimizle iletişime geçebilir veya help.skypals.com adresindeki yardım merkezimizi ziyaret edebilirsiniz.",
        },
        {
          question: "Uygulama ne kadar depolama alanı gerektiriyor?",
          answer:
            "SkyPals uygulaması, temel kurulum için yaklaşık 500MB depolama alanı gerektirir. Belirli rotalar için ek içerik, uçuşunuzdan önce indirebileceğiniz ekstra 100-200MB gerektirebilir.",
        },
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-sky-800 mb-6">Sıkça Sorulan Sorular</h1>
            <p className="text-xl text-sky-600">
              SkyPals - Hezarfen'in Gökyüzü Kaşifleri hakkında sık sorulan soruların cevaplarını bulun.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-sky-800 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-sm">
                    {categoryIndex + 1}
                  </div>
                  {category.category}
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-6">Hala Sorularınız mı Var?</h2>
          <p className="text-lg text-sky-600 mb-8 max-w-2xl mx-auto">
            Aradığınız cevabı bulamadıysanız, lütfen destek ekibimizle iletişime geçmekten çekinmeyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
              Destek Ekibiyle İletişime Geçin
            </button>
            <button className="bg-white border border-sky-300 text-sky-600 hover:bg-sky-50 font-medium px-8 py-3 rounded-full transition-colors">
              Geri Bildirim Gönderin
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
