import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Background from "@/components/hero/background";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EMRC - Erin Mills Run Club',
  description: 'Join our inclusive running community in Mississauga',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans bg-background text-white min-h-screen`}>
        <Background />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 