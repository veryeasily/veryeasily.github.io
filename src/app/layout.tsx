import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Underwood",
  description: "Personal site of Luke Underwood",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="relative w-full flex-1 px-12 md:px-4">{children}</main>
      </body>
    </html>
  );
}
