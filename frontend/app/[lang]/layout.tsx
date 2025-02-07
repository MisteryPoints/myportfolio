import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pixel Portfolio",
  description: "A retro-inspired dynamic portfolio",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

