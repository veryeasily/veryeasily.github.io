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
          "layout flex min-h-screen min-w-full flex-col overflow-hidden",
        )}
      >
        <div className="layout__outer flex h-full w-full flex-1 flex-col gap-4 md:gap-8">
          <Header />
          <main className="layout__main relative flex w-full flex-auto flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
