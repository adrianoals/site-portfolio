'use client';

import { useState } from 'react';
import { downloadCV } from '@/utils/download';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  agreeTerms: boolean;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  agreeTerms?: string;
}

interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError?: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormState>({
    data: {
      name: '',
      email: '',
      company: '',
      message: '',
      agreeTerms: false
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    submitError: undefined
  });

  const validateForm = (): boolean => {
    const errors: ContactFormErrors = {};

    // Validação do nome
    if (!formState.data.name.trim()) {
      errors.name = 'Nome é obrigatório';
    } else if (formState.data.name.trim().length < 2) {
      errors.name = 'Nome deve ter pelo menos 2 caracteres';
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formState.data.name.trim())) {
      errors.name = 'Nome deve conter apenas letras';
    }

    // Validação do email
    if (!formState.data.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.data.email.trim())) {
      errors.email = 'Email deve ter um formato válido';
    }

    // Validação da mensagem
    if (!formState.data.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    }

    // Validação dos termos
    if (!formState.data.agreeTerms) {
      errors.agreeTerms = 'Você deve concordar com os termos';
    }

    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormState(prev => {
      const newErrors = { ...prev.errors };
      delete newErrors[name as keyof ContactFormErrors];
      
      return {
        ...prev,
        data: { ...prev.data, [name]: newValue },
        errors: newErrors,
        submitError: undefined
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, submitError: undefined }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState.data),
      });

      const result = await response.json();

      if (response.ok) {
        // Sucesso
        setFormState(prev => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
          data: {
            name: '',
            email: '',
            company: '',
            message: '',
            agreeTerms: false
          }
        }));
      } else {
        // Erro
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          submitError: result.error || 'Erro ao enviar mensagem'
        }));
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitError: 'Erro de conexão. Verifique sua internet e tente novamente.'
      }));
    }
  };

  const resetForm = () => {
    setFormState(prev => ({
      ...prev,
      isSubmitted: false,
      submitError: undefined
    }));
  };

  const contactInfo = [
    {
      title: 'LinkedIn',
      value: 'adriano-lima',
      href: 'https://www.linkedin.com/in/adrianoals/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: 'GitHub',
      value: 'adriano-lima',
      href: 'https://github.com/adrianoals',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      title: 'Email',
      value: 'dri.limasantos@gmail.com',
      href: 'mailto:dri.limasantos@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contato" className="py-20 px-4 relative overflow-hidden">
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
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">CONTATO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato ou baixe meu CV para conhecer melhor minha experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Vamos Conectar
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Estou disponível para freelances, projetos colaborativos e oportunidades de trabalho. 
                Vamos conversar sobre como posso ajudar no seu próximo projeto!
              </p>
            </div>

            {/* Links de contato */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{contact.title}</h4>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Download do CV */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Baixar Currículo
              </h4>
              <button
                onClick={() => downloadCV()}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar CV (PDF)
              </button>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h3>
              
              {/* Mensagem de sucesso */}
              {formState.isSubmitted && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-green-400 font-semibold">Mensagem Enviada!</h4>
                      <p className="text-green-300 text-sm">Obrigado pelo contato. Responderei em breve!</p>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="mt-3 text-green-400 hover:text-green-300 text-sm underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}

              {/* Mensagem de erro */}
              {formState.submitError && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-red-400 font-semibold">Erro ao Enviar</h4>
                      <p className="text-red-300 text-sm">{formState.submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.data.name}
                    onChange={handleInputChange}
                    placeholder="Qual é o seu nome?"
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                      formState.errors.name 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-blue-500'
                    }`}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.name && (
                    <p className="mt-1 text-red-400 text-sm">{formState.errors.name}</p>
                  )}
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.data.email}
                    onChange={handleInputChange}
                    placeholder="Qual é o seu e-mail?"
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                      formState.errors.email 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-blue-500'
                    }`}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.email && (
                    <p className="mt-1 text-red-400 text-sm">{formState.errors.email}</p>
                  )}
                </div>
                
                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.data.company}
                    onChange={handleInputChange}
                    placeholder="Qual a sua empresa? (opcional)"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    disabled={formState.isSubmitting}
                  />
                </div>
                
                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formState.data.message}
                    onChange={handleInputChange}
                    placeholder="Conte sobre seu projeto ou oportunidade..."
                    rows={4}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 resize-none ${
                      formState.errors.message 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-blue-500'
                    }`}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.message && (
                    <p className="mt-1 text-red-400 text-sm">{formState.errors.message}</p>
                  )}
                </div>

                {/* Termos e envio */}
                <div className="space-y-4">
                  <div>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formState.data.agreeTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-900 border-white/20 focus:ring-blue-500 focus:ring-2 rounded mt-1"
                        disabled={formState.isSubmitting}
                      />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        Concordo com os termos e políticas de privacidade.
                      </span>
                    </label>
                    {formState.errors.agreeTerms && (
                      <p className="mt-1 text-red-400 text-sm">{formState.errors.agreeTerms}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      formState.isSubmitting
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'
                    }`}
                  >
                    {formState.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
