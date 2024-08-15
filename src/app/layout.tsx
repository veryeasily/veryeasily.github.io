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
      <body className="layout_body flex min-h-full flex-col gap-8 md:gap-16">
        <Header />

        <main className="layout_main mx-auto flex w-full max-w-screen-sm flex-1 flex-col px-2 md:px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
