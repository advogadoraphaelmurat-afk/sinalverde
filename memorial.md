# Memorial do Projeto: Sinal Verde

Este documento serve como um guia para situar o desenvolvimento do site institucional da **Sinal Verde Assessoria**, detalhando a criação das duas versões (Padrão e Black) e as decisões de design tomadas.

## 1. Visão Geral
O objetivo foi transformar o site da Sinal Verde em uma experiência digital de alto padrão, inspirada em designs modernos como o da Stripe, utilizando React, Framer Motion e Vanilla CSS.

## 2. As Duas Versões
Criamos duas variações independentes para oferecer experiências distintas:

### Versão Padrão (Light/Purple)
- **Caminho:** `d:\Sinal verde`
- **Identidade Visual:** Tons de roxo e rosa (`#8b5cf6`, `#ec4899`).
- **Estética:** Gradientes suaves e elementos cênicos coloridos.
- **Diferencial:** Foco em clareza e modernidade corporativa.

### Versão Black (Darkmode/Green)
- **Caminho:** `d:\Sinal verde black`
- **Identidade Visual:** Fundo ultra-escuro com detalhes em **Verde Neon** (`#10b981`).
- **Ajustes Recentes:**
    - O fundo foi escurecido significativamente (overlay de 98-99% de preto).
    - Elementos antes cinzas (botões, ícones, números) foram convertidos para tons de verde para reforçar a marca.
    - Vidros (glassmorphism) foram tornados mais opacos e escuros para melhor legibilidade e contraste.

## 3. Elementos de Design Comuns
- **Glassmorphism:** Uso intenso de `backdrop-filter: blur` em headers, sidebars e cards.
- **Objeto 3D Abstrato:** Um elemento "mesh" animado que flutua atrás da seção Hero em ambas as páginas.
    - **Alinhamento:** Centralizado verticalmente (`top: 50%`) e posicionado à direita (`left: 70%`) para emoldurar o texto da Hero.
- **Responsividade:** Layout adaptável para Mobile e Tablet, com sidebars que se transformam em barras de navegação inferior em telas menores.

## 4. Ajustes de UX (Acessibilidade e Visibilidade)
- **First View (Acima da Dobra):** Reduzimos o `padding-top` da seção Hero de `10rem` para `6rem` para garantir que o nome da empresa seja visível imediatamente ao carregar a página, sem necessidade de rolagem inicial.
- **Navegação:** Header fixo e Sidebar fixa para fácil acesso às seções (Sobre, Serviços, Contato).

## 5. Estrutura de Arquivos Principal
- `src/App.tsx`: Lógica dos componentes, seções e estados (ex: seletor de soluções).
- `src/index.css`: Sistema de design, variáveis CSS e animações globais.
- `public/`: Contém logo, favicon e imagens de fundo.

## 6. Próximos Passos Sugeridos
- Integração de formulários de contato reais.
- Otimização final de imagens para performance.
- Testes A/B entre as versões Padrão e Black para medir conversão.

---
*Atualizado em: 07 de Maio de 2026*
