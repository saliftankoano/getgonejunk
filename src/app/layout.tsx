import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema, WebsiteSchema } from "@/components/schema";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `Junk Removal in Columbus, OH | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  applicationName: business.name,
  keywords: [
    "junk removal Columbus",
    "junk removal Columbus OH",
    "furniture removal Columbus",
    "appliance removal Columbus",
    "same day junk removal Columbus Ohio",
    "junk hauling Columbus",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: `Junk Removal in Columbus, OH | ${business.name}`,
    description: business.shortDescription,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Junk Removal in Columbus, OH | ${business.name}`,
    description: business.shortDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-bg">
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
