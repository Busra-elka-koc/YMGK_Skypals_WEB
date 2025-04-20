import type React from "react"
import { Inter, Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata = {
  title: "SkyPals - Hezarfen'in Gökyüzü Kaşifleri",
  description: "Hezarfen'in Kanatlarıyla Öğren! Çocuklar için uçuş içi AR/VR eğitici eğlence uygulaması.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${nunito.variable} font-nunito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'