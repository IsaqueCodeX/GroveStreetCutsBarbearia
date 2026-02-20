# Grove Street Cuts

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

![Banner do Projeto](./public/banner.png)

## Visão Geral

A **Grove Street Cuts** reimagina a experiência digital de agendamento de barbearias, transformando uma tarefa utilitária em uma jornada imersiva e gamificada. Inspirado na estética urbana de *Grand Theft Auto: San Andreas*, o projeto utiliza design visceral e micro-interações sonoras para maximizar o engajamento do usuário e a percepção de valor da marca.

Mais do que uma landing page, é uma aplicação web de alta performance focada em conversão, construída com uma arquitetura moderna e escalável.

[Ver Projeto Online (Demo)]

## Arquitetura e Engenharia

### Decisões Técnicas

O desenvolvimento foi guiado por três pilares: **Performance**, **Acessibilidade** e **Manutenibilidade**.

*   **Component-Driven UI (Shadcn/UI + Radix):** Optou-se por componentes "headless" (Radix UI) estilizados com Tailwind CSS via Shadcn/UI. Isso garante total acessibilidade (WAI-ARIA compliant) sem sacrificar a flexibilidade visual necessária para a identidade única do projeto.
*   **Animação Declarativa (Framer Motion):** Utilização de `framer-motion` para orquestrar animações complexas de entrada e saída, scroll-linked animations e gestos, mantendo o código limpo e declarativo.
*   **Hooks Personalizados:** Encapsulamento de lógica complexa, como o gerenciador de áudio `useSoundEffects` (Singleton Pattern), para garantir performance e evitar vazamento de memória com múltiplas instâncias de áudio.
*   **Validação em Tempo Real:** Implementação de Zod e React Hook Form para construir formulários robustos, com feedback instantâneo e validação de tipos estrita (TypeScript), reduzindo erros de input no agendamento.

### Estrutura do Projeto

A organização segue padrões de mercado para aplicações escaláveis:

```
src/
├── components/          # Componentes React
│   ├── ui/              # Design System (Botões, Inputs, Dialogs)
│   ├── HeroSection.tsx  # Seções da Landing Page
│   └── ...
├── hooks/               # Lógica reutilizável (useSoundEffects, useToast)
├── lib/                 # Utilitários e configurações (utils.ts)
├── assets/              # Mídia otimizada (WebP, MP3)
└── pages/               # Roteamento (se aplicável)
```

## Stack Tecnológica

| Categoria | Tecnologias |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **Estilização** | Tailwind CSS, PostCSS, Shadcn/UI |
| **Motion** | Framer Motion, CSS Modules |
| **State & Forms** | React Hook Form, TanStack Query |
| **Qualidade** | ESLint, Prettier, Husky (pre-commit) |

## Performance e Acessibilidade

O projeto foi auditado para garantir métricas de excelência (Core Web Vitals):

*   **LCP (Largest Contentful Paint):** Otimizado via lazy-loading de componentes não críticos e formatos de imagem modernos (WebP).
*   **CLS (Cumulative Layout Shift):** Dimensões explícitas em mídia para evitar saltos visuais.
*   **Acessibilidade:** Navegação completa por teclado e suporte a leitores de tela em todos os componentes interativos.

## Instalação e Execução

Para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/grove-street-barbearia.git
    cd grove-street-barbearia
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Build para produção:**
    ```bash
    npm run build
    ```

## Roadmap

*   [x] MVP: Landing Page com agendamento e identidade visual completa.
*   [x] Mobile Optimization: Ajustes finos para touch e responsividade.
*   [ ] Backend Integration: Conexão com API real de agendamento (Node.js/Supabase).
*   [ ] Painel Administrativo: Dashboard para barbeiros gerenciarem horários.

## Autor

| Desenvolvedor | Contato |
| :--- | :--- |
| **Isaque Santos** | [Portfolio](https://isaquesantosdev.com/) • [LinkedIn](https://www.linkedin.com/in/isaque-santos-720b8b15a) |

---

*Desenvolvido com foco em excelência e inovação.*
