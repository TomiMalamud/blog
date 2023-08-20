import "./globals.css"
import { Public_Sans } from "next/font/google"
import { Analytics } from "@/components/analytics"
import Header from "@/components/header"
import Footer from "@/components/footer"

const public_sans = Public_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "ROHI Sommiers | Blog",
  description: "Un blog para mejorar tu descanso. Encontrá tips, consejos y novedades sobre el mundo del sueño.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body
        className={`antialiased motion-safe:scroll-smooth min-h-screen bg-white text-slate-900 ${public_sans.className}`}
      >
          <div className="py-2">
            <Header />
            <main className="max-w-6xl mx-auto px-4">{children}</main>
          </div>
          <Analytics />
          <Footer />
      </body>
    </html>
  )
}
