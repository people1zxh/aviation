# Guia de Implementação no GitHub Pages

## Passos para hospedar o website no GitHub Pages:

### 1. Criar repositório no GitHub
1. Aceda ao GitHub (https://github.com)
2. Clique em "New repository"
3. Nome sugerido: `aviation-website` ou `minha-jornada-aviacao`
4. Marque como "Public" (necessário para GitHub Pages gratuito)
5. NÃO inicialize com README, .gitignore ou licença
6. Clique em "Create repository"

### 2. Configurar o projeto localmente
Execute os seguintes comandos no terminal (substitua `SEU_USERNAME` pelo seu nome de utilizador do GitHub):

```bash
# Navegar para o diretório do projeto
cd aviation-website

# Configurar Git (se ainda não configurado)
git config user.email "seu.email@exemplo.com"
git config user.name "Seu Nome"

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USERNAME/aviation-website.git

# Fazer push do código
git push -u origin master
```

### 3. Configurar GitHub Pages
1. No repositório do GitHub, vá para "Settings"
2. Scroll down até "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Selecione "master" branch
5. Selecione "/ (root)" folder
6. Clique em "Save"

### 4. Configurar GitHub Actions para build automático
Crie o ficheiro `.github/workflows/deploy.yml` com o seguinte conteúdo:

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
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 5. Atualizar configuração do Vite
Adicione a seguinte linha ao `vite.config.js`:

```javascript
export default defineConfig({
  base: '/aviation-website/', // Substitua pelo nome do seu repositório
  plugins: [react()],
})
```

### 6. Verificar o website
Após alguns minutos, o website estará disponível em:
`https://SEU_USERNAME.github.io/aviation-website/`

## Manutenção do Website

### Para atualizar o conteúdo:
1. Edite os ficheiros em `src/components/`
2. Faça commit das alterações:
   ```bash
   git add .
   git commit -m "Atualizar conteúdo"
   git push
   ```
3. O GitHub Actions fará o build e deploy automaticamente

### Ficheiros importantes para editar:
- `src/components/JourneySection.jsx` - Para atualizar a sua jornada pessoal
- `src/components/ContactSection.jsx` - Para alterar informações de contacto
- `src/App.css` - Para ajustar cores e estilos

### Adicionar novas imagens:
1. Coloque as imagens na pasta `public/`
2. Referencie-as nos componentes como `/nome-da-imagem.jpg`
3. Faça commit e push das alterações

## Custos
- GitHub Pages é **gratuito** para repositórios públicos
- Sem limites de tráfego para uso pessoal
- Domínio personalizado opcional (requer compra separada)

## Suporte
- Documentação oficial: https://docs.github.com/pages
- Para problemas técnicos, consulte a documentação do React e Vite

