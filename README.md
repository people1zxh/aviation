# Website de Aviação - Minha Jornada

Um website pessoal dedicado à aviação, combinando informações educativas sobre o mundo aeronáutico com a jornada pessoal de um futuro piloto.

## 🛩️ Sobre o Projeto

Este website foi criado para documentar e partilhar a paixão pela aviação, oferecendo:

- **Conteúdo Educativo**: História da aviação, aviação militar, fabricantes, formação e oportunidades de carreira
- **Jornada Pessoal**: Documentação da transição da universidade para o curso ATPL integrado
- **Design Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis 
- **Hospedagem Gratuita**: Configurado para GitHub Pages sem custos

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript para interface
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS para estilização
- **Lucide React** - Ícones modernos e elegantes
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## 📋 Seções do Website

### 1. História da Aviação
- Dos irmãos Wright aos jatos modernos
- Marcos importantes da aviação
- Evolução tecnológica

### 2. Aviação Militar
- Tipos de aeronaves militares
- Importância estratégica
- Tecnologias avançadas

### 3. Fabricantes de Aeronaves
- **Boeing** - Líder americana em aviação comercial
- **Airbus** - Consórcio europeu de referência
- **Embraer** - Excelência brasileira em jatos regionais
- **Bombardier** - Inovação canadense

### 4. Formação de Piloto
- Licença de Piloto Privado (PP)
- Licença de Piloto Comercial (PC)
- ATPL - Airline Transport Pilot License
- Custos e requisitos

### 5. Oportunidades de Carreira
- Piloto Comercial
- Controlador de Tráfego Aéreo
- Engenheiro Aeronáutico
- Mecânico de Aeronaves
- Despachante Operacional
- Comissário de Bordo

### 6. Minha Jornada
- Transição da universidade para aviação
- Desafios e motivações
- Objetivos futuros
- Experiências do curso ATPL

## 🛠️ Como Usar

### Pré-requisitos
- Node.js 18+ instalado
- Git instalado
- Conta no GitHub

### Instalação Local
```bash
# Clonar o repositório
git clone https://github.com/SEU_USERNAME/aviation-website.git

# Navegar para o diretório
cd aviation-website

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

### Deploy para GitHub Pages
1. Faça fork deste repositório
2. Configure o GitHub Pages nas definições do repositório
3. As alterações são automaticamente deployadas via GitHub Actions

## 📝 Personalização

### Atualizar Jornada Pessoal
Edite o ficheiro `src/components/JourneySection.jsx` para:
- Adicionar novas experiências
- Atualizar objetivos
- Modificar a timeline pessoal

### Alterar Informações de Contacto
No ficheiro `src/components/ContactSection.jsx`:
- Atualize o email de contacto
- Modifique as informações pessoais

### Personalizar Cores
No ficheiro `src/App.css`, altere as variáveis CSS:
```css
:root {
  --cor-principal: #3b82f6;
  --cor-secundaria: #1e40af;
  --cor-destaque: #ef4444;
}
```

## 📁 Estrutura do Projeto

```
aviation-website/
├── public/                 # Ficheiros estáticos
│   ├── airplane-sky.jpg   # Imagem hero
│   └── cockpit-pilots.jpg # Imagem formação
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx    # Navegação
│   │   ├── Hero.jsx      # Seção principal
│   │   ├── HistorySection.jsx
│   │   ├── MilitarySection.jsx
│   │   ├── BrandsSection.jsx
│   │   ├── TrainingSection.jsx
│   │   ├── CareerSection.jsx
│   │   ├── JourneySection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── .github/workflows/    # GitHub Actions
├── GUIA_MANUTENCAO.md   # Guia detalhado de manutenção
└── deploy-github-pages.md # Instruções de deploy
```

## 🔧 Manutenção

Para manter o website atualizado:

1. **Alterações Regulares**: Documente novas experiências do curso ATPL
2. **Backup**: Faça backup mensal dos ficheiros
3. **Atualizações**: Mantenha as dependências atualizadas
4. **Monitorização**: Verifique regularmente se o website está online

Consulte o `GUIA_MANUTENCAO.md` para instruções detalhadas.

## 📊 Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Navegação suave entre seções
- ✅ Formulário de contacto funcional
- ✅ Otimizado para SEO
- ✅ Carregamento rápido
- ✅ Deploy automático
- ✅ Hospedagem gratuita

## 🎯 Objetivos do Projeto

Este website serve múltiplos propósitos:

1. **Educativo**: Partilhar conhecimento sobre aviação
2. **Pessoal**: Documentar a jornada de formação
3. **Profissional**: Criar presença online na área da aviação
4. **Inspiracional**: Motivar outros interessados em aviação

## 🤝 Contribuições

Este é um projeto pessoal, mas sugestões são bem-vindas:

1. Abra uma issue para reportar problemas
2. Sugira melhorias via pull requests
3. Partilhe feedback sobre o conteúdo

## 📄 Licença

Este projeto é de uso pessoal. O conteúdo educativo sobre aviação é baseado em fontes públicas e pode ser partilhado para fins educativos.

## 📞 Contacto

Para questões sobre o projeto ou aviação:
- Email: contacto@aviacao-jornada.com
- Website: [Link do seu website quando estiver online]

## 🙏 Agradecimentos

- Comunidade React pela excelente documentação
- GitHub pela hospedagem gratuita
- Todos os pioneiros da aviação que inspiraram este projeto

---

**Nota**: Este website foi desenvolvido como parte da jornada pessoal de formação em aviação. O conteúdo será atualizado regularmente com novas experiências e aprendizagens do curso ATPL integrado.

