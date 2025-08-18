'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background com gradiente radial */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black"></div>
      
      {/* Efeitos de luz decorativos */}
      <div className="absolute inset-0">
        {/* Luz central */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Luzes menores */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300/40 rounded-full blur-sm"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Foto/Ilustração pessoal */}
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">AL</span>
              </div>
            </div>
          </div>

          {/* Headline pessoal */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Desenvolvedor{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Full-Stack
            </span>
            {' '}especializado em Python, Next.js e{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              IA
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Crio soluções escaláveis e inteligentes que unem backend sólido, frontend moderno e automação com Inteligência Artificial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <Link
              href="#projetos"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Ver Projetos
            </Link>
            <Link
              href="#contato"
              className="w-full sm:w-auto border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Baixar CV
            </Link>
          </div>

          {/* Diferenciais técnicos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60 px-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm">Backend Python</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm">Frontend React/Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm">IA & Automação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
