'use client';
import { downloadCV } from '@/utils/download';

export default function Experience() {
  // Flag para controlar a exibição da seção de certificações
  const showCerts = false;

  const experience = [
    {
      year: '2024 - Presente',
      title: 'Fundador & Desenvolvedor Full-Stack',
      company: 'XNAP – Soluções de Software',
      description: 'Fundador da XNAP, empresa de software onde desenvolvo soluções personalizadas, como simuladores financeiros, chatbots inteligentes e sistemas de automação para clientes de diversos setores.',
      technologies: ['Python', 'Django', 'FastAPI', 'Next.js', 'Supabase', 'n8n', 'Docker', 'LLMs', 'OpenAI', 'LangChain'],
      achievements: [
        'Simulador de consórcios para a Unifisa (8.000+ simulações/mês)',
        'Sistema de sorteio de vagas de garagem (Villa Nova Condomínios)',
        'Sistema de leitura remota de medidores (Leitura Nova)',
        'Chatbot de doações (Remar Brasil)',
        'Sites institucionais para clientes diversos'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Desenvolvedor de Software (Freelancer)',
      company: 'Trabalho Independente',
      description: 'Atuei de forma independente em projetos de desenvolvimento web, criando soluções sob medida para pequenos negócios e empreendedores. Essa etapa foi a base para a fundação da XNAP.',
      technologies: ['Python', 'Django', 'JavaScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'Supabase', 'Docker'],
      achievements: [
        'Landing pages otimizadas para conversão',
        'Dashboards interativos',
        'Primeiras aplicações full-stack com Python/Django',
        'Desenvolvimento de soluções personalizadas para pequenos negócios'
      ]
    },
    {
      year: 'Anterior a 2022',
      title: 'Consultoria e Gestão',
      company: 'EY, Stone e UCon Consultoria',
      description: 'Atuei em empresas como EY, Stone e UCon Consultoria, além de ter sido sócio de negócio próprio. Essa vivência me trouxe visão estratégica e de processos, que aplico hoje no desenvolvimento de software orientado a valor.',
      technologies: ['Gestão de Projetos', 'Processos de Negócio', 'Consultoria Estratégica', 'Análise de Dados'],
      achievements: [
        'Experiência em consultoria estratégica com grandes empresas',
        'Visão de processos de negócio e otimização',
        'Gestão de projetos complexos',
        'Desenvolvimento de estratégias empresariais'
      ]
    }
  ];

  const education = [
    {
      year: '2025',
      title: 'MBA em Engenharia de Software com IA',
      institution: 'FCTech',
      description: 'Especialização em desenvolvimento de software com foco em Inteligência Artificial, automação e arquitetura de sistemas.',
      highlights: ['Machine Learning', 'Arquitetura de Software', 'Gestão de Projetos', 'IA Aplicada']
    },
    {
      year: '2023',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'FIAP',
      description: 'Formação em FIAP com sólida base em desenvolvimento e arquitetura de software.',
      highlights: ['Desenvolvimento Web', 'Banco de Dados', 'Arquitetura de Software', 'Programação']
    }
  ];

  const certifications = [
    {
      name: 'Supabase Masterclass',
      issuer: 'Supabase',
      year: '2023',
      description: 'Especialização em desenvolvimento com Supabase, incluindo autenticação, APIs em tempo real e banco de dados PostgreSQL.'
    },
    {
      name: 'Descomplicando',
      issuer: 'Linux Tips',
      year: '2025',
      description: 'Containerização de aplicações, orquestração com Docker Compose e boas práticas de desenvolvimento.'
    },
    {
      name: 'React Avançado',
      issuer: 'React Training',
      year: '2022',
      description: 'Hooks avançados, Context API, performance optimization e padrões de desenvolvimento React.'
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 relative overflow-hidden">
      {/* Background escuro para alternância */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">EXPERIÊNCIA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Formação & Experiência Profissional
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Minha jornada na tecnologia, desde a formação acadêmica até projetos profissionais que transformaram negócios
          </p>
        </div>

        {/* Experiência Profissional */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Experiência Profissional
          </h3>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < experience.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-blue-500/30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Ano */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold text-center leading-tight">{exp.year}</span>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 font-medium text-lg mb-4">
                        {exp.company}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Tecnologias */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-400 mb-3">TECNOLOGIAS</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Conquistas */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-3">PRINCIPAIS CONQUISTAS</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Formação Acadêmica
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
                  <span className="text-blue-400 text-sm font-medium">{edu.year}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">
                  {edu.title}
                </h4>
                <p className="text-blue-400 font-medium mb-4">
                  {edu.institution}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-3">DESTAQUES</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, highIndex) => (
                      <span
                        key={highIndex}
                        className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-300 text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        {showCerts && (
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Certificações & Cursos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-400 font-medium text-sm mb-2">
                    {cert.issuer} • {cert.year}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Quer conhecer mais sobre minha experiência?
          </p>
          <button
            onClick={() => downloadCV()}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Baixar CV Completo
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
