# Guia de Manutenção do Website de Aviação

## Introdução

Este guia foi criado especificamente para si, que não tem conhecimentos de programação, mas quer manter o seu website de aviação atualizado e funcional. O website foi desenvolvido de forma a ser o mais simples possível de manter, permitindo-lhe fazer alterações sem precisar de conhecer código.

## Estrutura do Website

O seu website está organizado da seguinte forma:

### Seções Principais:
1. **Início** - Página principal com introdução
2. **História** - História da aviação desde os primórdios
3. **Aviação Militar** - Tipos de aeronaves militares e sua importância
4. **Marcas** - Principais fabricantes de aeronaves (Boeing, Airbus, Embraer, Bombardier)
5. **Formação** - Informações sobre licenças de piloto e custos
6. **Carreira** - Oportunidades profissionais na aviação
7. **Minha Jornada** - A sua história pessoal (editável)
8. **Contacto** - Formulário de contacto

## Como Fazer Alterações

### 1. Atualizar a Sua Jornada Pessoal

O ficheiro mais importante para si é `src/components/JourneySection.jsx`. Este contém toda a sua história pessoal.

**Para editar:**
1. Abra o ficheiro `src/components/JourneySection.jsx`
2. Procure pelas seguintes seções que pode alterar:

#### Timeline da Jornada:
```javascript
// Procure por esta seção e altere o texto entre aspas
{
  icon: BookOpen,
  title: "Faculdade",
  description: "Dois anos na universidade com excelentes notas, mas sem sentir realização pessoal."
}
```

#### Objetivos:
```javascript
// Procure por "Os Meus Objetivos" e altere:
{
  icon: Heart,
  title: "Ser Feliz",
  description: "Encontrar realização pessoal e profissional fazendo o que amo."
}
```

### 2. Atualizar Informações de Contacto

No ficheiro `src/components/ContactSection.jsx`:

```javascript
// Altere o email de contacto:
<p className="text-gray-600">contacto@aviacao-jornada.com</p>

// Para o seu email pessoal:
<p className="text-gray-600">seu.email@exemplo.com</p>
```

### 3. Adicionar Novas Experiências

À medida que progride no curso ATPL, pode adicionar novas experiências à timeline:

```javascript
// Adicione novos itens à timeline:
{
  icon: Plane, // Ícone da experiência
  title: "Primeiro Voo Solo", // Título da experiência
  description: "Descrição da sua experiência..." // Sua descrição
}
```

## Publicar Alterações

Depois de fazer alterações, siga estes passos:

### 1. Guardar Alterações no Git
```bash
# No terminal, navegue para a pasta do projeto
cd aviation-website

# Adicione as alterações
git add .

# Faça commit com uma mensagem descritiva
git commit -m "Atualizar jornada pessoal - adicionar nova experiência"

# Envie para o GitHub
git push
```

### 2. Verificar o Website
Após 2-3 minutos, as alterações aparecerão automaticamente no seu website em:
`https://SEU_USERNAME.github.io/aviation-website/`

## Adicionar Novas Imagens

### 1. Preparar a Imagem
- Redimensione para máximo 1920x1080 pixels
- Comprima para menos de 500KB
- Use formatos JPG ou PNG

### 2. Adicionar ao Website
1. Coloque a imagem na pasta `public/`
2. Dê um nome descritivo (ex: `meu-primeiro-voo.jpg`)
3. No componente onde quer usar, adicione:
```javascript
<img src="/meu-primeiro-voo.jpg" alt="Descrição da imagem" />
```

## Personalizar Cores e Estilos

### Alterar Cores Principais
No ficheiro `src/App.css`, procure por:

```css
/* Cores principais do website */
:root {
  --cor-principal: #3b82f6; /* Azul principal */
  --cor-secundaria: #1e40af; /* Azul escuro */
  --cor-destaque: #ef4444; /* Vermelho para destaques */
}
```

Altere os códigos de cor (hex codes) para as suas preferências.

### Cores Populares para Aviação:
- Azul céu: `#87CEEB`
- Azul marinho: `#000080`
- Dourado: `#FFD700`
- Cinza aviação: `#708090`

## Resolver Problemas Comuns

### Website não atualiza após alterações
1. Verifique se fez commit e push das alterações
2. Aguarde 5-10 minutos para o GitHub processar
3. Limpe o cache do browser (Ctrl+F5)

### Erro no GitHub Actions
1. Vá ao seu repositório no GitHub
2. Clique em "Actions"
3. Verifique se há erros na build
4. Normalmente são erros de sintaxe - verifique se não removeu aspas ou vírgulas

### Imagens não aparecem
1. Verifique se a imagem está na pasta `public/`
2. Confirme que o nome do ficheiro está correto
3. Use sempre `/` antes do nome da imagem

## Backup e Segurança

### Fazer Backup Regular
1. Descarregue o repositório completo do GitHub mensalmente
2. Guarde uma cópia local dos seus ficheiros importantes
3. Documente as alterações que fez

### Proteger o Repositório
1. Use senhas fortes no GitHub
2. Ative autenticação de dois fatores
3. Não partilhe as credenciais de acesso

## Expandir o Website

### Adicionar Nova Seção
1. Crie um novo ficheiro em `src/components/`
2. Siga o padrão dos outros componentes
3. Adicione a nova seção ao `src/App.jsx`
4. Atualize a navegação no `src/components/Header.jsx`

### Adicionar Blog/Diário de Voo
Pode criar uma seção de blog para documentar as suas experiências:

1. Crie `src/components/BlogSection.jsx`
2. Adicione entradas com data, título e descrição
3. Use o mesmo estilo das outras seções

## Recursos Úteis

### Aprender Mais
- **GitHub Docs**: https://docs.github.com/pt
- **React Básico**: https://pt-br.reactjs.org/tutorial/tutorial.html
- **Markdown Guide**: https://www.markdownguide.org/

### Ferramentas Recomendadas
- **Editor de Código**: Visual Studio Code (gratuito)
- **Edição de Imagens**: GIMP (gratuito) ou Canva (online)
- **Compressão de Imagens**: TinyPNG.com

### Suporte
- Para problemas técnicos: consulte a documentação do GitHub
- Para dúvidas de design: procure inspiração em outros websites de aviação
- Para conteúdo: consulte sites oficiais de aviação como ANAC, ICAO

## Cronograma de Manutenção Sugerido

### Semanal
- Verificar se o website está online
- Adicionar novas experiências do curso ATPL

### Mensal
- Fazer backup dos ficheiros
- Verificar e atualizar informações de contacto
- Adicionar novas imagens das suas experiências

### Trimestral
- Revisar todo o conteúdo
- Atualizar objetivos e metas
- Considerar melhorias no design

### Anual
- Fazer revisão completa do website
- Atualizar informações sobre carreira
- Considerar adicionar novas seções

## Conclusão

Este website foi criado para crescer consigo durante a sua jornada na aviação. Com este guia, conseguirá mantê-lo atualizado e personalizado sem precisar de conhecimentos técnicos avançados. Lembre-se de que pequenas alterações regulares são melhores do que grandes mudanças esporádicas.

O mais importante é que o website reflita a sua paixão pela aviação e documente a sua evolução como futuro piloto. Boa sorte na sua jornada!

