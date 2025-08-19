'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Technologies() {
  const technologies = [
    // Universo Python (Primeira linha)
    { 
      name: 'Python', 
      logo: '🐍', 
      image: '/images/icons/python.svg',
      color: 'text-yellow-500',
      description: 'Linguagem de programação versátil e poderosa. Utilizo Python para desenvolvimento backend robusto, automações e integração com IA.'
    },
    { 
      name: 'Django', 
      logo: '⚡', 
      image: '/images/icons/django.svg',
      color: 'text-green-600',
      description: 'Framework web de alto nível para desenvolvimento rápido e seguro. Django me permite criar aplicações escaláveis com código limpo e manutenível.'
    },
    { 
      name: 'FastAPI', 
      logo: '⚡', 
      image: '/images/icons/fastapi.svg',
      color: 'text-green-600',
      description: 'Framework Python moderno para criação de APIs de alta performance. FastAPI é ideal para desenvolvimento de APIs de IA e microserviços.'
    },
    { 
      name: 'SQL', 
      logo: '🗄️', 
      image: '/images/icons/sql.svg',
      color: 'text-blue-400',
      description: 'Linguagem padrão para gerenciamento de bancos de dados relacionais. SQL me permite criar, consultar e gerenciar dados de forma eficiente e segura.'
    },
    { 
      name: 'PostgreSQL', 
      logo: '🐘', 
      image: '/images/icons/postgres.svg',
      color: 'text-blue-400',
      description: 'Sistema de gerenciamento de banco de dados objeto relacional. PostgreSQL oferece confiabilidade, integridade de dados e recursos avançados.'
    },
    
    // Universo JavaScript (Segunda linha)
    { 
      name: 'JavaScript', 
      logo: 'JS', 
      image: '/images/icons/javascript.svg',
      color: 'text-yellow-400',
      description: 'Linguagem de programação dinâmica e versátil. JavaScript é fundamental para desenvolvimento web moderno, tanto no frontend quanto no backend.'
    },
    { 
      name: 'TypeScript', 
      logo: 'TS', 
      image: '/images/icons/typescript.svg',
      color: 'text-blue-600',
      description: 'Superset do JavaScript com tipagem estática. TypeScript aumenta a confiabilidade do código e melhora a experiência de desenvolvimento.'
    },
    { 
      name: 'Node.js', 
      logo: '⚡', 
      image: '/images/icons/nodejs.svg',
      color: 'text-green-600',
      description: 'Runtime JavaScript para desenvolvimento server-side. Node.js permite criar aplicações escaláveis e de alta performance com JavaScript.'
    },
    { 
      name: 'React', 
      logo: '⚛️', 
      image: '/images/icons/react.svg',
      color: 'text-cyan-400',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário. React me permite criar componentes reutilizáveis e interfaces interativas.'
    },
    { 
      name: 'Next.js', 
      logo: '⚛️', 
      image: '/images/icons/nextjs.svg',
      color: 'text-blue-500',
      description: 'Framework React para produção com renderização híbrida. Next.js oferece performance otimizada, SEO melhorado e experiência de desenvolvimento superior.'
    },
    
    // Bancos de Dados (Terceira linha)
    { 
      name: 'MongoDB', 
      logo: '🍃', 
      image: '/images/icons/mongodb.svg',
      color: 'text-green-500',
      description: 'Banco de dados NoSQL orientado a documentos. MongoDB oferece flexibilidade para estruturas de dados complexas e escalabilidade horizontal.'
    },
    { 
      name: 'Redis', 
      logo: '🔴', 
      image: '/images/icons/redis.svg',
      color: 'text-red-500',
      description: 'Banco de dados em memória para cache e sessões. Redis oferece alta performance para operações que requerem velocidade extrema.'
    },
    { 
      name: 'Pinecone', 
      logo: '🌲', 
      image: '/images/icons/pinecone.svg',
      color: 'text-green-600',
      description: 'Banco de dados de vetores para aplicações de IA. Pinecone permite busca semântica e similaridade para chatbots e sistemas de recomendação.'
    },
    { 
      name: 'Supabase', 
      logo: '🔥', 
      image: '/images/icons/supabase.svg',
      color: 'text-orange-500',
      description: 'Backend-as-a-Service open source. Supabase oferece banco de dados PostgreSQL, autenticação, APIs em tempo real e armazenamento de arquivos.'
    },
    { 
      name: 'n8n', 
      logo: '🔄', 
      image: '/images/icons/n8n.svg',
      color: 'text-purple-500',
      description: 'Plataforma de automação de workflows open source. n8n permite conectar diferentes serviços e criar automações complexas sem código.'
    },
    
    // IA e Ferramentas (Quarta linha)
    { 
      name: 'OpenAI', 
      logo: '🤖', 
      image: '/images/icons/openai.svg',
      color: 'text-green-500',
      description: 'Inteligência artificial avançada para automação e geração de conteúdo. Utilizo as mais recentes APIs da OpenAI para criar soluções inteligentes.'
    },
    { 
      name: 'LangChain', 
      logo: '🔗', 
      image: '/images/icons/langchain.svg',
      color: 'text-purple-500',
      description: 'Framework para desenvolvimento de aplicações com IA. LangChain facilita a integração de modelos de linguagem e criação de chatbots inteligentes.'
    },
    { 
      name: 'Cursor', 
      logo: '⌨️', 
      image: '/images/icons/cursor.svg',
      color: 'text-blue-500',
      description: 'Editor de código com IA integrada. Cursor oferece autocompletar inteligente, geração de código e assistência de desenvolvimento avançada.'
    },
    { 
      name: 'Claude', 
      logo: '🧠', 
      image: '/images/icons/claude.svg',
      color: 'text-orange-500',
      description: 'Modelo de IA da Anthropic para processamento de linguagem natural. Claude oferece capacidades avançadas de conversação e análise de texto.'
    },
    { 
      name: 'Docker', 
      logo: '🐳', 
      image: '/images/icons/docker.svg',
      color: 'text-blue-500',
      description: 'Plataforma de containerização para desenvolvimento e deploy. Docker garante consistência entre ambientes e facilita a implantação.'
    },
    
    // Infraestrutura (Quinta linha)
    { 
      name: 'AWS', 
      logo: '☁️', 
      image: '/images/icons/aws.svg',
      color: 'text-orange-500',
      description: 'Plataforma de serviços cloud da Amazon. AWS oferece infraestrutura escalável, serviços de IA, banco de dados e muito mais.'
    },
    { 
      name: 'Vercel', 
      logo: '▲', 
      image: '/images/icons/vercel.svg',
      color: 'text-black',
      description: 'Plataforma de deploy para frontend e aplicações JAMstack. Vercel oferece deploy automático, CDN global e integração com Git.'
    },
    { 
      name: 'Git', 
      logo: '📦', 
      image: '/images/icons/git.svg',
      color: 'text-orange-500',
      description: 'Sistema de controle de versão distribuído. Git permite colaboração eficiente e controle de mudanças no código.'
    },
    { 
      name: 'GitHub', 
      logo: '🐙', 
      image: '/images/icons/github.svg',
      color: 'text-gray-800',
      description: 'Plataforma de hospedagem de código e colaboração. GitHub oferece CI/CD, code review e integração com ferramentas de desenvolvimento.'
    },
    { 
      name: 'Figma', 
      logo: '🎨', 
      image: '/images/icons/figma.svg',
      color: 'text-purple-500',
      description: 'Ferramenta de design colaborativo para interfaces. Figma permite criar protótipos, design systems e colaboração em tempo real.'
    }
  ];

  // Estado para controlar qual tecnologia está destacada
  const [highlightedTech, setHighlightedTech] = useState(technologies[1]); // JavaScript como padrão

  return (
    <section id="tecnologias" className="py-20 px-4 relative overflow-hidden">
      {/* Background escuro para alternância */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              stack tecnológica
            </span>
            {' '}para projetos inovadores
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Conheça as tecnologias que domino e utilizo para desenvolver soluções modernas e eficientes.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Tecnologias que transformam ideias em realidade
          </h3>
        </div>

        {/* Grid de tecnologias */}
        <div className="relative max-w-6xl mx-auto">
          {/* Grid 4x5 + 4 (24 tecnologias) */}
          <div className="grid grid-cols-5 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`text-center group cursor-pointer transition-all duration-300 ${
                  highlightedTech.name === tech.name 
                    ? 'scale-110 transform' 
                    : 'hover:scale-105'
                }`}
                onClick={() => setHighlightedTech(tech)}
              >
                {/* Logo da tecnologia */}
                <div className={`mb-3 transition-all duration-300 ${
                  highlightedTech.name === tech.name 
                    ? 'scale-125' 
                    : 'group-hover:scale-110'
                }`}>
                  <div className="w-16 h-16 mx-auto relative">
                    <Image
                      src={tech.image}
                      alt={`Logo ${tech.name}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
                
                {/* Nome da tecnologia */}
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  highlightedTech.name === tech.name 
                    ? 'text-white font-bold' 
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

          {/* Tecnologia destacada */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Card destacado */}
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6 transition-all duration-500">
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto relative">
                  <Image
                    src={highlightedTech.image}
                    alt={`Logo ${highlightedTech.name}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                {highlightedTech.name}
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
                {highlightedTech.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
