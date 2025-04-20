import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Uçuş Süresini Öğrenme Maceralarına Dönüştürmeye Hazır mısınız?
        </h2>
        <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
          Uçuş süresini büyülü bir eğitim deneyimine dönüştüren binlerce aileye katılın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/features">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-100 rounded-full px-8">
              Özellikleri Keşfet
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-sky-600 rounded-full px-8">
              Bize Ulaşın
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
