# Documentação Técnica - Website de Aviação

## Arquitetura do Sistema

### Visão Geral
O website foi desenvolvido como uma Single Page Application (SPA) usando React 19, com foco em performance, manutenibilidade e facilidade de hospedagem gratuita no GitHub Pages.

### Stack Tecnológica

#### Frontend
- **React 19.1.0** - Framework JavaScript para construção da interface
- **Vite 6.3.5** - Build tool moderna com Hot Module Replacement (HMR)
- **Tailwind CSS 4.1.7** - Framework CSS utility-first para estilização
- **Lucide React 0.510.0** - Biblioteca de ícones SVG otimizados

#### Build e Deploy
- **GitHub Actions** - CI/CD pipeline para deploy automático
- **GitHub Pages** - Hospedagem estática gratuita
- **ESLint** - Linting para qualidade de código

### Estrutura de Componentes

#### Componente Principal (App.jsx)
```javascript
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <HistorySection />
        <MilitarySection />
        <BrandsSection />
        <TrainingSection />
        <CareerSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
```

#### Padrão de Componentes
Todos os componentes seguem o mesmo padrão:
- Importações organizadas (React, ícones, utilitários)
- Componente funcional com JSX
- Uso consistente de Tailwind CSS
- Estrutura semântica HTML5

### Sistema de Design

#### Paleta de Cores
```css
/* Cores principais */
--azul-principal: #3b82f6    /* Blue-500 */
--azul-escuro: #1e40af       /* Blue-700 */
--azul-claro: #dbeafe        /* Blue-100 */
--vermelho: #ef4444          /* Red-500 */
--verde: #10b981             /* Emerald-500 */
--cinza-texto: #374151       /* Gray-700 */
--cinza-claro: #f9fafb       /* Gray-50 */
```

#### Tipografia
- **Fonte Principal**: Inter (system font stack)
- **Tamanhos**: text-sm (14px) a text-6xl (60px)
- **Pesos**: font-normal (400) a font-bold (700)

#### Espaçamento
- **Sistema**: Baseado em múltiplos de 4px (Tailwind padrão)
- **Containers**: max-w-7xl com padding responsivo
- **Seções**: py-16 (64px) para desktop, py-8 (32px) para mobile

### Responsividade

#### Breakpoints
```css
/* Tailwind CSS breakpoints */
sm: 640px   /* Tablets pequenos */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Desktops grandes */
```

#### Estratégia Mobile-First
- Design base para mobile (320px+)
- Progressive enhancement para telas maiores
- Grid responsivo: 1 coluna (mobile) → 2 colunas (tablet) → 3+ colunas (desktop)

### Performance

#### Otimizações Implementadas
1. **Lazy Loading**: Imagens carregadas sob demanda
2. **Code Splitting**: Componentes separados em chunks
3. **Tree Shaking**: Remoção de código não utilizado
4. **Minificação**: CSS e JS comprimidos na build
5. **Compressão de Imagens**: Imagens otimizadas para web

#### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### SEO e Acessibilidade

#### Meta Tags
```html
<meta name="description" content="Website sobre aviação e jornada pessoal de formação de piloto">
<meta name="keywords" content="aviação, piloto, ATPL, formação, carreira">
<meta name="author" content="[Nome do Utilizador]">
<meta property="og:title" content="Aviação - História, Formação e Carreira">
<meta property="og:description" content="Explore o mundo da aviação...">
```

#### Acessibilidade (WCAG 2.1)
- **Contraste**: Mínimo 4.5:1 para texto normal
- **Navegação**: Suporte completo a teclado
- **Alt Text**: Todas as imagens têm descrições
- **Semântica**: HTML5 semântico (header, main, section, footer)
- **ARIA**: Labels e roles onde necessário

### Configuração de Build

#### Vite Configuration (vite.config.js)
```javascript
export default defineConfig({
  base: '/aviation-website/', // GitHub Pages path
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Desabilitado para produção
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

#### Tailwind Configuration
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        aviation: {
          blue: '#3b82f6',
          navy: '#1e40af',
          sky: '#0ea5e9'
        }
      }
    },
  },
  plugins: [],
}
```

### CI/CD Pipeline

#### GitHub Actions Workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: [domínio personalizado se aplicável]
```

#### Processo de Deploy
1. **Trigger**: Push para branch master
2. **Build**: npm run build gera pasta dist/
3. **Deploy**: Conteúdo da dist/ é publicado na branch gh-pages
4. **Disponibilização**: GitHub Pages serve o conteúdo

### Estrutura de Ficheiros

```
aviation-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── airplane-sky.jpg        # Imagem hero (733KB)
│   ├── cockpit-pilots.jpg      # Imagem formação (38KB)
│   └── favicon.ico             # Ícone do site
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegação (2.1KB)
│   │   ├── Hero.jsx            # Seção principal (1.8KB)
│   │   ├── HistorySection.jsx  # História aviação (3.2KB)
│   │   ├── MilitarySection.jsx # Aviação militar (2.9KB)
│   │   ├── BrandsSection.jsx   # Fabricantes (3.5KB)
│   │   ├── TrainingSection.jsx # Formação piloto (4.1KB)
│   │   ├── CareerSection.jsx   # Oportunidades (3.8KB)
│   │   ├── JourneySection.jsx  # Jornada pessoal (2.7KB)
│   │   ├── ContactSection.jsx  # Contacto (2.3KB)
│   │   └── Footer.jsx          # Rodapé (1.5KB)
│   ├── App.jsx                 # Componente principal (1.2KB)
│   ├── App.css                 # Estilos globais (0.8KB)
│   └── main.jsx                # Entry point (0.3KB)
├── dist/                       # Build output (gerado)
├── node_modules/               # Dependências (gitignored)
├── .gitignore                  # Ficheiros ignorados pelo Git
├── components.json             # Configuração shadcn/ui
├── eslint.config.js            # Configuração ESLint
├── index.html                  # HTML template
├── package.json                # Dependências e scripts
├── tailwind.config.js          # Configuração Tailwind
├── vite.config.js              # Configuração Vite
├── README.md                   # Documentação do projeto
├── GUIA_MANUTENCAO.md         # Guia para utilizador
├── DOCUMENTACAO_TECNICA.md    # Este ficheiro
└── deploy-github-pages.md     # Instruções de deploy
```

### Dependências

#### Produção
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "lucide-react": "^0.510.0"
}
```

#### Desenvolvimento
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "@tailwindcss/vite": "^4.1.7",
  "vite": "^6.3.5",
  "eslint": "^9.17.0",
  "tailwindcss": "^4.1.7"
}
```

### Segurança

#### Medidas Implementadas
1. **Dependências**: Auditoria regular com `npm audit`
2. **HTTPS**: Forçado pelo GitHub Pages
3. **CSP**: Content Security Policy configurada
4. **Sanitização**: Inputs do formulário validados
5. **Atualizações**: Dependências mantidas atualizadas

#### Headers de Segurança
```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Monitorização

#### Métricas Recomendadas
1. **Uptime**: Monitorização da disponibilidade
2. **Performance**: Core Web Vitals
3. **Erros**: JavaScript errors via console
4. **Tráfego**: Google Analytics (opcional)

#### Ferramentas Sugeridas
- **Lighthouse**: Auditoria de performance e SEO
- **PageSpeed Insights**: Métricas de velocidade
- **GTmetrix**: Análise detalhada de performance
- **Pingdom**: Monitorização de uptime

### Manutenção

#### Tarefas Regulares
1. **Semanal**: Verificar funcionamento do site
2. **Mensal**: Atualizar dependências minor
3. **Trimestral**: Auditoria de segurança
4. **Semestral**: Revisão completa do código

#### Atualizações de Dependências
```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências minor/patch
npm update

# Atualizar dependências major (cuidado!)
npm install package@latest
```

### Troubleshooting

#### Problemas Comuns

**Build Falha**
- Verificar sintaxe JSX
- Confirmar importações corretas
- Validar package.json

**Deploy Não Funciona**
- Verificar GitHub Actions logs
- Confirmar configuração GitHub Pages
- Validar vite.config.js base path

**Performance Lenta**
- Otimizar imagens
- Verificar bundle size
- Implementar lazy loading

**Responsividade**
- Testar em diferentes dispositivos
- Validar breakpoints Tailwind
- Verificar viewport meta tag

### Extensibilidade

#### Adicionar Nova Seção
1. Criar componente em `src/components/`
2. Importar em `App.jsx`
3. Adicionar link na navegação
4. Atualizar testes se aplicável

#### Integrar CMS
Para facilitar edição de conteúdo:
1. **Netlify CMS**: Interface web para edição
2. **Forestry**: CMS baseado em Git
3. **Strapi**: Headless CMS completo

#### Adicionar Blog
1. Criar estrutura de posts em JSON/Markdown
2. Implementar roteamento com React Router
3. Adicionar sistema de tags/categorias
4. Implementar paginação

### Considerações Futuras

#### Melhorias Possíveis
1. **PWA**: Service Worker para offline
2. **i18n**: Suporte multi-idioma
3. **Dark Mode**: Tema escuro
4. **Animações**: Framer Motion para transições
5. **Backend**: API para formulário de contacto

#### Migração para Frameworks
Se o projeto crescer:
1. **Next.js**: SSR/SSG para melhor SEO
2. **Gatsby**: Static site generator
3. **Nuxt.js**: Se migrar para Vue.js

Esta documentação deve ser atualizada sempre que houver mudanças significativas na arquitetura ou tecnologias utilizadas.

