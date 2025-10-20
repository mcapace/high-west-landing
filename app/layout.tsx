import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Crimson_Text, Cinzel, Libre_Baskerville, Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-cormorant",
  display: 'swap',
});

const crimson = Crimson_Text({ 
  subsets: ["latin"],
  weight: ['400', '600'],
  variable: "--font-crimson",
  display: 'swap',
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-cinzel",
  display: 'swap',
});

const libre = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-libre",
  display: 'swap',
});

const spectral = Spectral({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-spectral",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "High West Distillery - Crafting Exceptional Whiskey in Utah",
  description: "Discover High West's award-winning whiskeys crafted in Park City, Utah. From Rendezvous Rye to limited editions, experience the Rocky Mountain character in every bottle.",
  keywords: "High West, whiskey, distillery, Utah, Park City, rye whiskey, bourbon, craft spirits",
  authors: [{ name: "High West Distillery" }],
  creator: "High West Distillery",
  publisher: "High West Distillery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://highwest.whiskyadvocate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "High West Distillery - Crafting Exceptional Whiskey in Utah",
    description: "Discover High West's award-winning whiskeys crafted in Park City, Utah. From Rendezvous Rye to limited editions, experience the Rocky Mountain character in every bottle.",
    url: 'https://highwest.whiskyadvocate.com',
    siteName: 'High West Distillery',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'High West Distillery - Award-Winning Whiskey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "High West Distillery - Crafting Exceptional Whiskey in Utah",
    description: "Discover High West's award-winning whiskeys crafted in Park City, Utah. From Rendezvous Rye to limited editions, experience the Rocky Mountain character in every bottle.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${crimson.variable} ${cinzel.variable} ${libre.variable} ${spectral.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
