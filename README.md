# Curso de Instrumentação Cirúrgica

Site do curso de instrumentação cirúrgica com 150 horas certificadas, ministrado pelo maior influenciador de instrumentação do Brasil.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- i18next (Internacionalização)

## 📚 Sobre o Curso

- **150 horas certificadas** pela Escola Urolaser
- **4 especialidades**: Urologia, Ginecologia, Plástica e Cirurgia Geral
- **Professor**: @Instrumentandoo (maior influenciador do Brasil)
- **Modalidade**: Online
- **Duração**: 1 mês
- **Certificado**: Reconhecido com CNPJ ativo

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000/certificados`

## 🏗️ Build

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `out/`

## 🐳 Docker

### Build da imagem
```bash
docker build -t instrumentacao-app .
```

### Executar com Docker Compose
```bash
docker-compose up -d
```

### Executar apenas o container
```bash
docker run -p 80:80 instrumentacao-app
```

## 🌐 Deploy

### EasyPanel
1. **Conecte seu repositório GitHub ao EasyPanel**
2. **Configure as seguintes opções:**
   - **Build Method**: Docker
   - **Dockerfile Path**: `./Dockerfile`
   - **Port**: 80
   - **Health Check**: `/health`

3. **Variáveis de ambiente (opcionais):**
   - `NODE_ENV=production`
   - `BASE_PATH=/certificados`

### Hostinger
1. Conecte seu repositório GitHub ao Hostinger
2. Configure o build command: `npm run build`
3. Configure o output directory: `out`

### VPS Manual
```bash
# Clone o repositório
git clone <seu-repositorio>
cd curso

# Build e execute com Docker
docker-compose up -d
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                # Componentes de interface
│   ├── animated/          # Componentes com animações
│   └── layout/           # Componentes de layout
├── pages/
│   └── instrumentando/    # Página principal do curso
├── router/               # Configuração de rotas
├── lib/                  # Utilitários
└── ...
```

## 🔧 Configurações

- Base path configurável via `BASE_PATH` environment variable
- Suporte a preview mode via `IS_PREVIEW` environment variable
- Build otimizado com source maps
- Nginx configurado para SPA
- Compressão Gzip habilitada
- Headers de segurança configurados

## 📞 Contato

- **WhatsApp**: +55 21 97276-2708
- **Instagram**: @instrumentandoo
- **Escola**: Urolaser

## 🚀 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 Licença

Projeto privado - Todos os direitos reservados