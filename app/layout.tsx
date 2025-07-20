import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aere.ai",
  description: "",
  icons: {
    icon: [
      {
        url: "/images/aere blue 2.jpg",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/aere blue 2.jpg",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/aere blue 2.jpg",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/aere blue 2.jpg" }],
    other: [
      {
        rel: "icon",
        url: "/images/aere blue 2.jpg",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/idevibelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/idevibelogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/idevibelogo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}
