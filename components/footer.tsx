import Link from "next/link"
import { LucideTwitter, LucideInstagram, LucideFacebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white pt-12 pb-6 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkyPals</h3>
            <p className="text-sky-200 mb-4">
              Hezarfen'in Kanatlarıyla Öğren! Çocuklar için uçuş içi AR/VR eğitici eğlence uygulaması.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <LucideTwitter size={20} />
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <LucideInstagram size={20} />
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <LucideFacebook size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-200 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sky-200 hover:text-white transition-colors">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="/journey" className="text-sky-200 hover:text-white transition-colors">
                  Yolculuk
                </Link>
              </li>
              <li>
                <Link href="/parents" className="text-sky-200 hover:text-white transition-colors">
                  Ebeveynler İçin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sky-200 hover:text-white transition-colors">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sky-200 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-200 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ortaklık</h3>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-sky-200 mb-2">Resmi Ortak</p>
              <p className="font-bold">Türk Hava Yolları</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-8 pt-6 text-center text-sky-300 text-sm">
          <p>&copy; {new Date().getFullYear()} SkyPals - Hezarfen'in Gökyüzü Kaşifleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
