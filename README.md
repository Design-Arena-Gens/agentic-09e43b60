# Aurora Studio — Plataforma de Atualizações de Design

Aplicação Next.js focada em apresentar atualizações de produto, roadmap e evolução de design para squads digitais. O layout combina motion design, dark mode refinado e seções modulares que podem ser facilmente adaptadas ao contexto do seu produto.

## 🚀 Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) com plugins de Forms & Typography
- [Framer Motion](https://www.framer.com/motion/) para animações suaves
- [next-themes](https://github.com/pacocoursey/next-themes) para alternância de tema

## 🧪 Scripts

- `npm run dev` — inicia o servidor em desenvolvimento
- `npm run lint` — executa a checagem de lint
- `npm run build` — gera o build de produção
- `npm start` — inicia o servidor com o build gerado

## 📂 Estrutura principal

```
app/
  layout.tsx           # Layout raiz com tema, header e footer
  page.tsx             # Página principal (landing)
src/
  components/          # Componentes reutilizáveis (hero, cards, timeline, etc)
  lib/utils.ts         # Utilitário `cn` para Tailwind
public/
  case-*.svg           # Mockups ilustrativos das features
```

## 🔧 Como rodar localmente

```bash
npm install
npm run dev
# abra http://localhost:3000
```

## ✨ Destaques de design e conteúdo

- Hero com CTA duplo e indicadores de progresso das squads
- Seção de métricas com animações suaves e dados fictícios
- Roadmap visual com status em tempo real
- Showroom do Design System com tokens, documentação e atualizações
- Caso de uso com gráficos SVG otimizados para dark mode
- Call-to-action final integrado com opções de contato

Sinta-se à vontade para ajustar textos, cores, tokens e dados conforme a necessidade do projeto.
