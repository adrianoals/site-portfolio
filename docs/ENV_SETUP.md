# Configuração das Variáveis de Ambiente

## 📧 Configuração do Resend

### 1. Criar arquivo `.env.local` na raiz do projeto

```bash
# Na raiz do projeto (mesmo nível do package.json)
touch .env.local
```

### 2. Adicionar as seguintes variáveis no `.env.local`:

```env
# Configurações do Resend para envio de emails
# Substitua com sua API key real da Resend
RESEND_API_KEY=re_sua_api_key_aqui

# Email de destino para receber as mensagens do formulário
# Você pode alterar para qualquer email que preferir
CONTACT_EMAIL=dri.limasantos@gmail.com

# Configurações opcionais
NODE_ENV=development
```

### 3. Onde encontrar sua API Key da Resend:

1. Acesse [resend.com](https://resend.com)
2. Faça login na sua conta
3. Vá para a seção "API Keys"
4. Copie a chave que começa com `re_`
5. Cole no arquivo `.env.local`

### 4. Exemplo de arquivo `.env.local` configurado:

```env
RESEND_API_KEY=re_fpuoQZEa_MiDiuEmYuA9Xk5aUp53txxYj
CONTACT_EMAIL=dri.limasantos@gmail.com
NODE_ENV=development
```

## ⚠️ Importante

- **NUNCA** commite o arquivo `.env.local` no Git
- O arquivo `.env.local` já está no `.gitignore`
- Reinicie o servidor de desenvolvimento após criar o arquivo
- Teste o formulário após a configuração

## 🧪 Testando

1. Preencha o formulário de contato
2. Clique em "Enviar Mensagem"
3. Verifique se recebeu o email
4. Verifique os logs do console para debug

## 🔧 Troubleshooting

Se houver problemas:

1. Verifique se a API key está correta
2. Verifique se o arquivo `.env.local` está na raiz
3. Reinicie o servidor de desenvolvimento
4. Verifique os logs do console
5. Teste com o email de teste da Resend primeiro
