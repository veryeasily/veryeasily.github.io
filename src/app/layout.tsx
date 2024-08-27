import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Header from "@/app/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "lju.me",
  description: "this is where i put stuff i do!",
  metadataBase: new URL("https://lju.me"),
  // robots: "noindex, nofollow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="layout h-full" style={inter.style}>
      <body className="layout_body bg-cycle flex min-h-full flex-col gap-8 md:gap-16">
        <Header />

        <main className="layout_main mx-auto w-full max-w-lg flex-1 px-2 md:px-4">{children}</main>
      </body>
    </html>
  )
}
