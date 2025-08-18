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
  openGraph: {
    title: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
    description: "Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adriano Lima Santos - Portfólio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriano Lima Santos - Desenvolvedor Full-Stack & IA",
    description: "Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial"
  },
  robots: {
    index: true,
    follow: true
  }
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
