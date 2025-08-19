'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animar itens da timeline sequencialmente
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedItems(prev => {
          if (prev.length < timeline.length) {
            return [...prev, prev.length];
          }
          clearInterval(interval);
          return prev;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const timeline = [
    {
      year: '2025',
      title: 'MBA em Engenharia de Software com IA',
      description: 'Especialização em desenvolvimento de software com foco em Inteligência Artificial e automação.',
      category: 'Formação',
      logo: '/images/fctech-logo.png',
      institution: 'FCTech'
    },
    {
      year: '2024',
      title: 'Fundador e Desenvolvedor Full-Stack na XNAP',
      description: 'Fundador da XNAP, empresa de software onde atuo no desenvolvimento de soluções personalizadas, chatbots inteligentes e sistemas de automação para clientes reais.',
      category: 'Experiência',
      logo: '/images/xnap-logo.png',
      institution: 'XNAP'
    },
    {
      year: '2023',
      title: 'Análise e Desenvolvimento de Sistemas',
      description: 'Formação em FIAP com sólida base em desenvolvimento e arquitetura de software.',
      category: 'Formação',
      logo: '/images/fiap-logo.svg',
      institution: 'FIAP'
    }
  ];

  const differentials = [
    {
      icon: '🚀',
      title: 'Mentalidade Produto',
      description: 'Foco em valor de negócio e impacto real'
    },
    {
      icon: '🧩',
      title: 'Código Limpo',
      description: 'Testes, documentação prática e boas práticas'
    },
    {
      icon: '🔄',
      title: 'Automação Inteligente',
      description: 'Reduzir retrabalho e acelerar entregas'
    },
    {
      icon: '🎯',
      title: 'Consultoria & Discovery',
      description: 'Experiência em descoberta de produto'
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 relative overflow-hidden">
      {/* Background claro para alternância */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 via-gray-900 to-black"></div>
      
      {/* Gradientes radiais adicionais */}
      <div className="absolute inset-0">
        {/* Gradiente radial principal */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/3 via-transparent to-transparent" 
             style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(138, 165, 255, 0.03) 0%, rgba(171, 171, 171, 0) 100%)'}}></div>
        
        {/* Gradiente radial secundário */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-600/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Gradiente linear diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-transparent" 
             style={{background: 'linear-gradient(105deg, rgba(41, 52, 255, 0.03) -8%, rgba(36, 65, 212, 0) 50%)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105">
            <span className="text-blue-400 text-sm font-medium">SOBRE MIM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:text-blue-400 transition-colors duration-300">
            Quem é Adriano Lima Santos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            Desenvolvedor apaixonado por tecnologia, especializado em criar soluções que unem o melhor do backend e frontend com inteligência artificial.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Descrição pessoal */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              Minha Trajetória
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg hover:text-white transition-colors duration-300">
              Sou um desenvolvedor Full-Stack com foco em Python, React e Next.js, 
              especializado em criar soluções escaláveis e inteligentes. Minha jornada 
              na tecnologia começou com a paixão por resolver problemas complexos através do código.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg hover:text-white transition-colors duration-300">
              Com formação em Análise de Desenvolvimento de Sistemas e cursando MBA em Engenharia de Software com IA, combino conhecimento técnico sólido com visão estratégica para entregar produtos que realmente fazem a diferença.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {['Full-Stack', 'Python', 'React/Next.js', 'IA & Automação'].map((skill, index) => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full hover:bg-blue-600/40 hover:border-blue-500/60 hover:scale-110 transition-all duration-300 transform cursor-pointer"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <span className="text-blue-400 text-sm font-medium hover:text-white transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 hover:text-blue-400 transition-colors duration-300">
              Formação & Experiência
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 transform ${
                    animatedItems.includes(index) 
                      ? 'translate-x-0 opacity-100 scale-100' 
                      : 'translate-x-10 opacity-0 scale-95'
                  }`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  {/* Linha conectora */}
                  {index < timeline.length - 1 && (
                    <div className={`absolute left-6 top-12 w-0.5 h-8 bg-blue-500/30 transition-all duration-1000 ${
                      animatedItems.includes(index) ? 'h-8 opacity-100' : 'h-0 opacity-0'
                    }`}></div>
                  )}
                  
                  <div className="flex items-start space-x-4 group">
                    {/* Ano */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-400 hover:scale-110 transition-all duration-300 transform shadow-lg hover:shadow-blue-500/50">
                      <span className="text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">{item.year}</span>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="inline-flex items-center px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-300">
                          <span className="text-blue-400 text-xs font-medium">{item.category}</span>
                        </div>
                        {/* Logo da instituição */}
                        {item.logo && (
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 transform group-hover:rotate-3">
                              <img 
                                src={item.logo} 
                                alt={`Logo ${item.institution}`}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  // Fallback para texto se a imagem não carregar
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) {
                                    fallback.style.display = 'block';
                                  }
                                }}
                              />
                              <span className="text-white text-xs font-medium hidden">{item.institution}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de diferenciais */}
        <div className={`mb-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white text-center mb-12 hover:text-blue-400 transition-colors duration-300">
            Meus Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-blue-600/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 hover:from-blue-600/20 hover:to-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{item.description}</p>
                
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6 hover:text-gray-300 transition-colors duration-300">
            Quer conhecer mais sobre meus projetos e habilidades?
          </p>
          <a
            href="#projetos"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl"
          >
            Ver Projetos
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
