import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

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
      <body
        className={clsx(
          inter.className,
          "flex min-h-screen flex-col overflow-hidden",
        )}
      >
        <Header />
        <main className="relative flex w-full flex-auto flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
