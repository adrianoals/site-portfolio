import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
  description: "Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial. Crio soluções escaláveis e inteligentes que unem backend sólido, frontend moderno e automação com IA.",
  keywords: "desenvolvedor, full-stack, python, next.js, react, typescript, IA, inteligência artificial, django, fastapi, postgresql, supabase",
  authors: [{ name: "Adriano Lima Santos" }],
  creator: "Adriano Lima Santos",
  publisher: "Adriano Lima Santos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adriano.xnap.com.br/'), // Substitua pela sua URL real
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
    description: "Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial. Crio soluções escaláveis e inteligentes que unem backend sólido, frontend moderno e automação com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Adriano Lima Santos",
    url: "https://adriano.xnap.com.br/", // Substitua pela sua URL real
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
        type: "image/jpeg",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
        type: "image/png",
      }
    ],
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
    description: "Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial",
    creator: "@adrianoals", // Substitua pelo seu handle do Twitter
    site: "@adrianoals", // Substitua pelo seu handle do Twitter
    images: ["/og-image.jpg"],
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
    google: "seu-google-verification-code", // Adicione seu código de verificação do Google Search Console
    // yandex: "seu-yandex-verification-code",
    // yahoo: "seu-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
