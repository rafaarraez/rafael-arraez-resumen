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
  title: "Rafael Arraez - Senior Backend Engineer | NestJS, TypeScript, AWS Specialist",
  description: "Software Engineer with +7 years of experience developing and scaling backend platforms. Specialist in complex integrations and high-performance serverless architectures, managing systems with +1M monthly transactions. Expert in NestJS, TypeScript, AWS, PostgreSQL, and microservices.",
  keywords: [
    "Rafael Arraez",
    "Backend Engineer",
    "Software Engineer",
    "NestJS",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Serverless",
    "Microservices",
    "API Development",
    "Node.js",
    "Remote Developer",
    "Full Stack Developer",
    "Cloud Architecture",
    "Lambda Functions",
    "REST API",
    "GraphQL",
    "DevOps",
    "CI/CD",
    "Docker"
  ],
  authors: [{ name: "Rafael Arraez" }],
  creator: "Rafael Arraez",
  publisher: "Rafael Arraez",
  metadataBase: new URL("https://rafael-arraez.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es": "/",
      "en": "/"
    }
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://rafael-arraez.vercel.app",
    title: "Rafael Arraez - Senior Backend Engineer | NestJS, TypeScript, AWS Specialist",
    description: "Software Engineer with +7 years of experience developing and scaling backend platforms. Specialist in complex integrations and high-performance serverless architectures, managing systems with +1M monthly transactions.",
    siteName: "Rafael Arraez Portfolio",
    images: [
      {
        url: "/placeholder-user.jpg",
        width: 1200,
        height: 630,
        alt: "Rafael Arraez - Senior Backend Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Arraez - Senior Backend Engineer | NestJS, TypeScript, AWS Specialist",
    description: "Software Engineer with +7 years of experience developing and scaling backend platforms. Specialist in NestJS, TypeScript, AWS, PostgreSQL.",
    images: ["/placeholder-user.jpg"],
    creator: "@rafaelarraez"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafael Arraez",
    "jobTitle": "Senior Backend Engineer",
    "description": "Software Engineer with +7 years of experience developing and scaling backend platforms. Specialist in complex integrations and high-performance serverless architectures.",
    "url": "https://rafael-arraez.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VE"
    },
    "sameAs": [
      "https://github.com/rafaarraez",
      "https://www.linkedin.com/in/rafael-arraez",
    ],
    "knowsAbout": [
      "Backend Development",
      "NestJS",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "Serverless Architecture",
      "Microservices",
      "API Development",
      "Node.js",
      "Cloud Architecture"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Backend Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Remote"
      },
      "skills": [
        "NestJS",
        "TypeScript",
        "AWS",
        "PostgreSQL",
        "Node.js",
        "Docker",
        "Serverless",
        "Microservices",
        "REST APIs",
        "GraphQL"
      ]
    }
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
