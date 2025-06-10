import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FloatingParticles } from "@/components/effects/floating-particles"
import { CustomCursor } from "@/components/effects/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio Personal",
  description: "Portfolio profesional con información sobre mi carrera, habilidades y servicios"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <FloatingParticles />
            <CustomCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID &&
        process.env.NODE_ENV !== "development" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
        )}
    </html>
  )
}


import './globals.css'