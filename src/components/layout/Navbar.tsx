'use client';

import Link from 'next/link';
import { useState } from 'react';
import { downloadCV } from '@/utils/download';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { anchor: 'home', label: 'Home' },
    { anchor: 'sobre', label: 'Sobre' },
    { anchor: 'habilidades', label: 'Habilidades' },
    { anchor: 'projetos', label: 'Projetos' },
    { anchor: 'experiencia', label: 'Experiência' },
    { anchor: 'contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-b from-black/80 via-black/60 to-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nome */}
          <div className="flex-shrink-0">
            <Link href="#home" className="flex items-center">
              <span className="text-xl font-bold text-white">Adriano Lima Santos</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.anchor}
                  href={`#${link.anchor}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => downloadCV()}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Baixar CV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md rounded-b-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.anchor}
                  href={`#${link.anchor}`}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => { downloadCV(); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 block text-center w-full"
                >
                  Baixar CV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
