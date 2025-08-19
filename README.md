# Site Portfolio - Adriano Lima Santos

Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- Design responsivo e moderno
- Seções: Hero, Sobre, Habilidades, Experiência, Projetos e Contato
- Timeline interativa com logos das instituições
- Seção de diferenciais destacados
- Animações e transições suaves

## 🎨 Personalização dos Logos

Para personalizar os logos das instituições, substitua os arquivos SVG na pasta `public/images/`:

- `fiap-logo.svg` - Logo da FIAP
- `fctech-logo.svg` - Logo da FCTech  
- `xnap-logo.svg` - Logo da XNAP

### Formatos suportados:
- **SVG** (recomendado para melhor qualidade)
- **PNG** (até 32x32px para melhor performance)
- **JPG** (não recomendado para logos)

### Dimensões recomendadas:
- **SVG**: 32x32px viewBox
- **PNG/JPG**: 32x32px ou 64x64px

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Deploy**: Vercel (recomendado)

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
├── components/          # Componentes React
│   ├── layout/         # Componentes de layout
│   └── sections/       # Seções da página
public/
├── images/             # Imagens e logos
└── ...
```

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 Próximas melhorias

- [ ] Adicionar modo escuro/claro
- [ ] Implementar blog integrado
- [ ] Adicionar sistema de analytics
- [ ] Otimizar performance com lazy loading
- [ ] Adicionar testes automatizados

---

Desenvolvido com ❤️ por Adriano Lima Santos
