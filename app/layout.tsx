import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Chopin - AI Voice Calls for Vietnamese Market Vendors",
  description:
    "Empowering Vietnamese market vendors with voice-first AI technology that transforms how they manage their business.",
  generator: "v0.dev",
  keywords: "AI, voice calls, Vietnamese market, vendors, voice-first technology, Chopin",
  authors: [{ name: "Chopin Team" }],
  openGraph: {
    title: "Chopin - AI Voice Calls for Vietnamese Market Vendors",
    description: "Empowering Vietnamese market vendors with voice-first AI technology",
    images: ["/chopin-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chopin - AI Voice Calls for Vietnamese Market Vendors",
    description: "Empowering Vietnamese market vendors with voice-first AI technology",
    images: ["/chopin-logo.png"],
  },
  icons: {
    icon: [
      { url: "/chopin-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/chopin-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/chopin-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/chopin-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/chopin-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/chopin-logo.png" />
        <link rel="shortcut icon" href="/chopin-logo.png" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-TileImage" content="/chopin-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
