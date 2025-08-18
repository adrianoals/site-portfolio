'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Simulador de Consórcios',
      client: 'Unifisa Consórcio Nacional',
      logo: '/unifisa-logo.png',
      image: "/case-1-dashboard.png",
      challenge: 'Propostas geradas manualmente em várias planilhas, gerando erros e retrabalho.',
      solution: 'Plataforma web que automatiza cálculos, gera propostas em PDF e integra chatbot no WhatsApp.',
      results: [
        '80% de redução no tempo de criação',
        '+10.000 simulações/mês',
        '+25% de conversão'
      ],
      technologies: ['Python', 'Django', 'Next.js', 'Supabase', 'OpenAI'],
      category: 'Automação',
      link: '#'
    },
    {
      id: 2,
      title: 'Chatbot de Coleta de Doações',
      client: 'Remar Brasil',
      logo: '/remar-logo.jpg',
      image: '/case-2-chatbot.png',
      challenge: 'Dificuldade na qualificação de itens e registro de doadores.',
      solution: 'Chatbot inteligente que guia a doação, filtra informações e atualiza banco de dados.',
      results: [
        '+60% de precisão na triagem',
        '-30% no tempo de atendimento',
        '+40% no volume de doações'
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'WhatsApp API', 'PostgreSQL'],
      category: 'IA & Chatbots',
      link: '#'
    },
    {
      id: 3,
      title: 'Sistema de Coleta e Portal',
      client: 'Leitura Nova (Água & Gás)',
      logo: '/leitura-nova-logo.png',
      image: '/case-3-portal.png',
      challenge: 'Processos manuais de coleta de fotos de medidores e falta de transparência.',
      solution: 'Integração WhatsApp ↔ Google Sheets/Drive e portal web com histórico de consumo em tempo real.',
      results: [
        'Eliminação de 100% do retrabalho',
        '-80% em dúvidas de consumo',
        '+90% de satisfação dos clientes'
      ],
      technologies: ['Python', 'n8n', 'Google APIs', 'Next.js', 'PostgreSQL'],
      category: 'Integração',
      link: '#'
    },
    {
      id: 4,
      title: 'Sistema de Sorteio de Vagas',
      client: 'Vila Nova Condomínios',
      logo: '/vila-nova-logo.png',
      image: '/case-4-sorteio.png',
      challenge: 'Alocação manual de vagas, sem transparência e conflitos entre moradores.',
      solution: 'Aplicação web com algoritmo de sorteio automático e painel de auditoria.',
      results: [
        'De dias para minutos no processo',
        '+100% de transparência',
        '-90% nas reclamações'
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Sistemas Web',
      link: '#'
    },
    {
      id: 5,
      title: 'Website e Dashboard',
      client: 'Laudok',
      logo: '/laudok-logo.png',
      image: '/case-5-dashboard.png',
      challenge: 'Modernizar site e implementar fluxo de pagamentos para relatórios de engenharia.',
      solution: 'Desenvolvimento de dashboard interativo e checkout simplificado.',
      results: [
        'Entregue e pronto',
        'Aguardando lançamento oficial',
        'Dashboard interativo completo'
      ],
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      category: 'E-commerce',
      link: '#'
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projetos" className="py-20 px-4 relative overflow-hidden">
      {/* Background escuro para alternância */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">PROJETOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos que Transformaram Negócios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções inteligentes que impulsionaram resultados e otimizaram processos
          </p>
        </div>

        {/* Carrossel de projetos */}
        <div className="relative max-w-6xl mx-auto">
          {/* Projeto atual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo do projeto */}
            <div className="space-y-8">
              {/* Badge da categoria */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">{projects[currentProject].category}</span>
              </div>

              {/* Título e cliente */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-medium text-sm">Logo</span>
                  </div>
                  <p className="text-blue-400 font-medium text-lg">
                    {projects[currentProject].client}
                  </p>
                </div>
              </div>

              {/* Desafio */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">DESAFIO</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {projects[currentProject].challenge}
                </p>
              </div>

              {/* Solução */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">SOLUÇÃO</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {projects[currentProject].solution}
                </p>
              </div>

              {/* Tecnologias */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">TECNOLOGIAS</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resultados */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-4">RESULTADOS</h4>
                <ul className="space-y-3">
                  {projects[currentProject].results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Imagem do projeto */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gray-900/60">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Screenshot do projeto</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação do carrossel */}
          <div className="flex justify-between items-center mt-12">
            {/* Botão anterior */}
            <button
              onClick={prevProject}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900/50 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-white">Anterior</span>
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-blue-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={nextProject}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900/50 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <span className="text-white">Próximo</span>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Quer conhecer mais projetos?
          </p>
          <p className="text-gray-300 mb-8">
            Explore meu portfólio completo ou entre em contato para descobrir como posso ajudar no seu próximo desafio.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Fale Conosco
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
