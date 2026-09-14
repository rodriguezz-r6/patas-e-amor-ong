# 🐾 ONG Patas & Amor

Projeto de site institucional e interativo para a ONG **Patas & Amor**, focado em resgate, acolhimento e adoção responsável de animais em situação de vulnerabilidade.

Este projeto foi desenvolvido como parte de uma atividade acadêmica de Desenvolvimento Web, com o objetivo de aplicar conceitos de HTML5 semântico, estilização com CSS3 e manipulação do DOM/máscaras de entrada com JavaScript.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo (`<header>`, `<main>`, `<section>`, `<article>`, `<fieldset>`, `<footer>`).
- **CSS3**: Estilização moderna utilizando CSS Grid, Flexbox e variáveis customizadas.
- **JavaScript (ES6+)**: Lógica para aplicação de máscaras dinâmicas de formatação de dados em tempo real.

---

## 📌 Funcionalidades

- **Página Inicial (`index.html`)**: Apresentação da ONG, história, pilares de atuação e chamada para ação (CTA).
- **Iniciativas (`projetos.html`)**: Exibição dos projetos desenvolvidos, como redes de lar temporário, mutirões de castração e campanhas de arrecadação.
- **Formulário de Cadastro (`cadastro.html`)**:
  - Validação nativa do navegador para campos obrigatórios (`required`).
  - **Máscaras de Entrada em Tempo Real**:
    - **CPF**: Formatação automática (`000.000.000-00`).
    - **Telefone/WhatsApp**: Formatação com DDD (`(00) 00000-0000`).
    - **CEP**: Formatação padrão (`00000-000`).
  - Seleção de modalidades de voluntariado.

---

## 📁 Estrutura de Pastas

```text
├── assets/         # Imagens e recursos visuais
├── css/
│   └── style.css   # Estilos globais do projeto
├── js/
│   └── script.js   # Lógica das máscaras e manipulação de formulário
├── index.html      # Página inicial
├── projetos.html   # Página de iniciativas da ONG
├── cadastro.html   # Formulário de voluntariado
└── README.md       # Documentação do projeto