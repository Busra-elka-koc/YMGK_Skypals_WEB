"use client"

import type React from "react"

import { useState } from "react"
import { LucideMailOpen, LucideMessageSquare, LucidePhone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd handle the form submission here
    setFormSubmitted(true)
  }

  const contactMethods = [
    {
      icon: <LucideMailOpen className="h-6 w-6 text-sky-500" />,
      title: "E-posta Gönderin",
      description: "Destek ekibimiz genellikle 24 saat içinde yanıt verir.",
      contact: "destek@skypals.com",
      action: "E-posta Gönder",
      link: "mailto:destek@skypals.com",
    },
    {
      icon: <LucidePhone className="h-6 w-6 text-sky-500" />,
      title: "Bizi Arayın",
      description: "Pazartesi-Cuma, 9:00-17:00 (GMT+3) saatleri arasında ulaşılabilir.",
      contact: "+90 212 123 4567",
      action: "Şimdi Ara",
      link: "tel:+902121234567",
    },
    {
      icon: <LucideMessageSquare className="h-6 w-6 text-sky-500" />,
      title: "Canlı Sohbet",
      description: "Destek ekibimizle gerçek zamanlı sohbet edin.",
      contact: "Uygulamamızda mevcut",
      action: "Sohbeti Başlat",
      link: "#",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-sky-800 mb-6">Bize Ulaşın</h1>
            <p className="text-xl text-sky-600">
              Sizden haber almak isteriz! Sorularınız, geri bildirimleriniz varsa veya sadece merhaba demek
              istiyorsanız, yardıma hazırız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sky-800 mb-2">{method.title}</h3>
                  <p className="text-sky-600 mb-4">{method.description}</p>
                  <p className="font-medium text-sky-700 mb-6">{method.contact}</p>
                  <a href={method.link} className="text-sky-500 font-medium hover:text-sky-600 transition-colors">
                    {method.action} →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sky-800 mb-4">Teşekkürler!</h3>
                    <p className="text-sky-600 mb-6">
                      Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-sky-500 hover:bg-sky-600 text-white rounded-full"
                    >
                      Başka Bir Mesaj Gönder
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">Bize Mesaj Gönderin</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sky-700">
                            İsim
                          </Label>
                          <Input
                            id="name"
                            placeholder="İsminiz"
                            required
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sky-700">
                            E-posta
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="E-posta adresiniz"
                            required
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sky-700">Ben bir:</Label>
                        <RadioGroup defaultValue="parent" className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="parent" id="parent" />
                            <Label htmlFor="parent" className="text-sky-600">
                              Ebeveyn
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="educator" id="educator" />
                            <Label htmlFor="educator" className="text-sky-600">
                              Eğitimci
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="airline" id="airline" />
                            <Label htmlFor="airline" className="text-sky-600">
                              Havayolu Temsilcisi
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="text-sky-600">
                              Diğer
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sky-700">
                          Konu
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Mesajınız ne hakkında?"
                          required
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sky-700">
                          Mesaj
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Lütfen mesajınızı buraya yazın..."
                          required
                          rows={6}
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>

                      <div className="flex justify-center">
                        <Button
                          type="submit"
                          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8"
                          size="lg"
                        >
                          Mesaj Gönder
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map or Office Section (Optional) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Ofisimizi Ziyaret Edin</h2>
            <p className="text-lg text-sky-600 max-w-2xl mx-auto">
              Genel merkezimiz, Hezarfen Ahmed Çelebi'nin efsanevi uçuşunu gerçekleştirdiği şehir olan İstanbul'da
              bulunmaktadır.
            </p>
          </div>

          <div className="bg-sky-100 rounded-xl h-96 max-w-5xl mx-auto overflow-hidden relative">
            {/* In a real app, this would be a Google Map */}
            <div className="absolute inset-0 flex items-center justify-center text-sky-500">
              <p className="text-lg font-medium bg-white px-6 py-3 rounded-lg shadow">
                Map of Istanbul Office Location
              </p>
            </div>
          </div>

          <div className="max-w-lg mx-auto mt-8 text-center">
            <h3 className="font-bold text-sky-800 text-xl mb-2">SkyPals Genel Merkezi</h3>
            <p className="text-sky-600 mb-1">Caner İstanbulda oturuyor onun evi ve Adana</p>
            <p className="text-sky-600 mb-1">34330 Sancaktepe, İstanbul. Seyhan /Adana/ </p>
            <p className="text-sky-600 mb-1">Türkiye</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">SkyPals Topluluğuna Katılın</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            En son güncellemeler, eğitim ipuçları ve diğer ebeveynlerle bağlantı kurmak için sosyal medyada bizi takip
            edin.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-sky-600 hover:bg-sky-100 font-medium w-12 h-12 rounded-full flex items-center justify-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="bg-white text-sky-600 hover:bg-sky-100 font-medium w-12 h-12 rounded-full flex items-center justify-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="bg-white text-sky-600 hover:bg-sky-100 font-medium w-12 h-12 rounded-full flex items-center justify-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
