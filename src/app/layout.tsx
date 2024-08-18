import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Header from "@/app/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luke Underwood",
  description: "this is where i put stuff i do!",
  robots: "noindex, nofollow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="layout h-full">
      <body className="layout_body min-h-full gap-8 md:gap-16 flex flex-col">
        <Header />

        <main className="layout_main max-w-lg mx-auto w-full px-2 md:px-4 flex-1">{children}</main>
      </body>
    </html>
  )
}
