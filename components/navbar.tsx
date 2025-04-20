"use client"

import Link from "next/link"
import { useState } from "react"
import { LucideMenu, LucideX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Özellikler", href: "/features" },
    { title: "Yolculuk", href: "/journey" },
    { title: "Ebeveynler İçin", href: "/parents" },
    { title: "SSS", href: "/faq" },
    { title: "Galeri", href: "/gallery" },
    { title: "İletişim", href: "/contact" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg">SP</span>
          </div>
          <span className="font-bold text-xl text-sky-700 hidden md:block">SkyPals</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sky-800 hover:text-sky-500 transition-colors font-medium"
            >
              {link.title}
            </Link>
          ))}
          <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full">SkyPals'ı Deneyin</Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <LucideX /> : <LucideMenu />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 px-4 flex flex-col gap-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sky-800 hover:text-sky-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full w-full">SkyPals'ı Deneyin</Button>
          </div>
        )}
      </div>
    </header>
  )
}
