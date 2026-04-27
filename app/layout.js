import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://blueslidestudio.gr"),
  title: {
    default: "Blue Slide Studio | Digital presence for brands that do not blend in",
    template: "%s | Blue Slide Studio",
  },
  description:
    "Blue Slide Studio builds strategy, design, websites, social presence, and growth systems for modern brands with culture.",
  keywords: [
    "Blue Slide Studio",
    "digital studio",
    "web design Greece",
    "brand strategy",
    "social media",
    "SEO",
    "growth",
  ],
  authors: [{ name: "Blue Slide Studio" }],
  creator: "Blue Slide Studio",
  publisher: "Blue Slide Studio",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Blue Slide Studio",
    description:
      "Digital presence for modern, culture-led brands that do not blend in.",
    url: "/",
    siteName: "Blue Slide Studio",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Slide Studio",
    description:
      "Strategy, design, websites, and growth for brands with culture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
