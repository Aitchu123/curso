# Certificados - Site de Diplomas e Certificados

Site desenvolvido em React + TypeScript + Vite para diplomas e certificados de ensino superior.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- i18next (Internacionalização)
- Firebase
- Supabase
- Stripe

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🏗️ Build

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `out/`

## 🌐 Deploy

### Hostinger
1. Conecte seu repositório GitHub ao Hostinger
2. Configure o build command: `npm run build`
3. Configure o output directory: `out`

### EasyPanel
1. Crie um novo app no EasyPanel
2. Conecte ao repositório GitHub
3. Configure as variáveis de ambiente se necessário
4. Deploy automático será feito a cada push

## 📁 Estrutura do Projeto

```
src/
├── pages/          # Páginas da aplicação
├── router/         # Configuração de rotas
├── i18n/          # Configuração de internacionalização
└── ...
```

## 🔧 Configurações

- Base path configurável via `BASE_PATH` environment variable
- Suporte a preview mode via `IS_PREVIEW` environment variable
- Build otimizado com source maps

## 📄 Licença

Projeto privado - Todos os direitos reservados