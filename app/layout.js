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

const siteUrl = "https://blueslide.gr";
const siteDescription =
  "Blue Slide Studio builds strategy, design, websites, software, social presence, and growth systems for modern brands with culture.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Blue Slide Studio",
  title: {
    default: "Blue Slide Studio | Digital presence for brands that do not blend in",
    template: "%s | Blue Slide Studio",
  },
  description: siteDescription,
  keywords: [
    "Blue Slide Studio",
    "digital studio",
    "web design Greece",
    "website development Greece",
    "software development Greece",
    "brand strategy",
    "branding",
    "social media",
    "SEO",
    "growth",
  ],
  authors: [{ name: "Blue Slide Studio" }],
  creator: "Blue Slide Studio",
  publisher: "Blue Slide Studio",
  category: "Digital Studio",
  alternates: {
    canonical: "/",
    languages: {
      el: "/",
      en: "/",
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Blue Slide Studio",
    description: siteDescription,
    url: "/",
    siteName: "Blue Slide Studio",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Blue Slide Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Slide Studio",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Blue Slide Studio",
  url: siteUrl,
  email: "info@blueslide.gr",
  description: siteDescription,
  areaServed: "Greece",
  serviceType: [
    "Brand strategy",
    "Website design",
    "Website development",
    "Software development",
    "SEO",
    "Social media growth",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
