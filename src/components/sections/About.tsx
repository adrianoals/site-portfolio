'use client';

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'MBA em Engenharia de Software com IA',
      description: 'Especialização em desenvolvimento de software com foco em Inteligência Artificial e automação.',
      category: 'Formação'
    },
    {
      year: '2023',
      title: 'Desenvolvedor Full-Stack na XNAP',
      description: 'Desenvolvimento de soluções personalizadas, chatbots inteligentes e sistemas de automação.',
      category: 'Experiência'
    },
    {
      year: '2022',
      title: 'Especialização em Tecnologias Web',
      description: 'Foco em React, Next.js, TypeScript e arquiteturas modernas de frontend.',
      category: 'Formação'
    },
    {
      year: '2021',
      title: 'Graduação em Sistemas de Informação',
      description: 'Base sólida em desenvolvimento de software e arquitetura de sistemas.',
      category: 'Formação'
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-600/2 to-transparent rounded-full blur-3xl"></div>
        
        {/* Gradiente linear diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-transparent" 
             style={{background: 'linear-gradient(105deg, rgba(41, 52, 255, 0.03) -8%, rgba(36, 65, 212, 0) 50%)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">SOBRE MIM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem é Adriano Lima Santos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, especializado em criar soluções que unem o melhor do backend e frontend com inteligência artificial.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Descrição pessoal */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Minha Trajetória
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Sou um desenvolvedor Full-Stack com foco em Python, React e Next.js, 
              especializado em criar soluções escaláveis e inteligentes. Minha jornada 
              na tecnologia começou com a paixão por resolver problemas complexos através do código.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Com formação em Sistemas de Informação e MBA em Engenharia de Software com IA, 
              combino conhecimento técnico sólido com visão estratégica para entregar 
              produtos que realmente fazem a diferença.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">Full-Stack</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">Python</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">React/Next.js</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">IA & Automação</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Formação & Experiência
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Linha conectora */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-blue-500/30"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Ano */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{item.year}</span>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-2">
                        <span className="text-blue-400 text-xs font-medium">{item.category}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Quer conhecer mais sobre meus projetos e habilidades?
          </p>
          <a
            href="#projetos"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Ver Projetos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
