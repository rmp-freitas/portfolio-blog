# Portfólio Pessoal + Blog Técnico

Projeto base em Next.js (App Router), TypeScript, Tailwind CSS e MDX.

## Setup

1. Instalar dependências:

```bash
npm install
```

2. Iniciar ambiente local:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build && npm run start
```

## Estrutura

- `app/` rotas do site
- `components/` componentes reutilizáveis
- `content/posts/` artigos em MDX
- `lib/posts.ts` leitura de frontmatter + listagem de posts
- `lib/seo.ts` configuração base de metadata e OpenGraph

## Git local

Opção 1 (script):

```bash
npm run git:init
```

Opção 2 (manual):

```bash
git init
git add .
git commit -m "chore: initial project scaffold"
```
