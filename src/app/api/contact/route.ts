import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, agreeTerms } = body;

    // Validação básica
    if (!name || !email || !message || !agreeTerms) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Nome deve ter pelo menos 2 caracteres' },
        { status: 400 }
      );
    }

    // Validação de tamanho mínimo removida - apenas verifica se não está vazia

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Você pode mudar para seu domínio depois
      to: [process.env.CONTACT_EMAIL || 'dri.limasantos@gmail.com'], // Email configurável via variável de ambiente
      subject: `Nova mensagem do portfólio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nova Mensagem do Portfólio
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Detalhes do Contato</h3>
            
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
            <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Mensagem</h3>
            <p style="line-height: 1.6; color: #334155;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Esta mensagem foi enviada através do formulário de contato do seu portfólio.
            </p>
          </div>
        </div>
      `,
      text: `
Nova Mensagem do Portfólio

Detalhes do Contato:
- Nome: ${name}
- Email: ${email}
${company ? `- Empresa: ${company}` : ''}
- Data: ${new Date().toLocaleDateString('pt-BR')}

Mensagem:
${message}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
