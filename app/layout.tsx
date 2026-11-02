import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import { EasterEggs } from "@/components/effects/easter-eggs"

export const metadata: Metadata = {
  title: "Rafael Arraez - Senior Backend Engineer | AI Agents & LLMs, Node.js, NestJS",
  description: "Senior Backend Engineer with 8+ years designing, building and scaling backend platforms with Node.js, NestJS, TypeScript and Python/Django. Specialized in LLM-powered AI agents that quote and book for 700+ hotels, and in taking backends from zero to production on AWS and Google Cloud.",
  keywords: [
    "Rafael Arraez",
    "Backend Engineer",
    "Software Engineer",
    "AI Agents",
    "LLM",
    "LangGraph",
    "WebRTC",
    "Google Cloud",
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
    title: "Rafael Arraez - Senior Backend Engineer | AI Agents & LLMs, Node.js, NestJS",
    description: "Senior Backend Engineer with 8+ years designing, building and scaling backend platforms. Specialized in LLM-powered AI agents for 700+ hotels and in taking backends from zero to production.",
    siteName: "Rafael Arraez Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafael Arraez - Senior Backend Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Arraez - Senior Backend Engineer | AI Agents & LLMs, Node.js, NestJS",
    description: "Senior Backend Engineer with 8+ years building backend platforms. AI agents & LLMs, Node.js, NestJS, PostgreSQL, AWS and Google Cloud.",
    images: ["/og-image.png"],
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
    "description": "Senior Backend Engineer with 8+ years designing, building and scaling backend platforms. Specialized in LLM-powered AI agents and in taking backends from zero to production.",
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
      "AI Agents",
      "Large Language Models",
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
      "name": "Senior Backend Engineer",
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
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <EasterEggs />
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
