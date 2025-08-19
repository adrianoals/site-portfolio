'use client';

export default function Skills() {
  const skills = [
    {
      title: 'Backend Python',
      description: 'Desenvolvimento robusto com Django, FastAPI e automações inteligentes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      category: 'Backend'
    },
    {
      title: 'Frontend Moderno',
      description: 'React, Next.js e TypeScript para interfaces responsivas e performáticas.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: 'Frontend'
    },
    {
      title: 'Banco de Dados',
      description: 'PostgreSQL, Supabase e MongoDB para armazenamento eficiente e escalável.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      category: 'Database'
    },
    {
      title: 'Infraestrutura',
      description: 'Docker, AWS e Vercel para deploy e gerenciamento de aplicações.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
        </svg>
      ),
      category: 'DevOps'
    },
    {
      title: 'IA & Automação',
      description: 'LangChain, OpenAI e n8n para soluções inteligentes e automação de processos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'IA'
    },
    {
      title: 'Metodologias',
      description: 'Agile, Scrum e desenvolvimento iterativo para entregas eficientes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'Processos'
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 relative overflow-hidden">
      {/* Background escuro para alternância */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">HABILIDADES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minhas Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stack completa para desenvolvimento Full-Stack, desde backend robusto até interfaces modernas e soluções com IA
          </p>
        </div>

        {/* Grid dos 6 skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card do skill */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Badge da categoria */}
                <div className="inline-flex items-center px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
                  <span className="text-blue-400 text-xs font-medium">{skill.category}</span>
                </div>

                {/* Ícone */}
                <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.icon}
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.title}
                </h3>



                {/* Indicador de hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
