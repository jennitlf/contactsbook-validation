# 📒 ContactsBook Validation

> Projeto de portfólio que demonstra a aplicação de um fluxo completo de Garantia da Qualidade (QA) em um sistema web de agenda de contatos desenvolvido em MVP (Minimum Viable Product).

---

# Objetivo

Este projeto tem como objetivo demonstrar a aplicação das principais atividades desempenhadas por um Analista de Qualidade de Software (QA) utilizando como objeto de estudo o **ContactsBook**, uma aplicação web para gerenciamento de contatos desenvolvida em estágio de MVP.

Embora a aplicação possua um conjunto reduzido de funcionalidades, ela permite aplicar um fluxo completo de validação de software, abrangendo desde o planejamento dos testes até sua automação.

O foco deste repositório não é a complexidade do sistema, mas sim demonstrar organização, documentação, rastreabilidade e boas práticas utilizadas no processo de Garantia da Qualidade.

---

# Métricas do Projeto

| Métrica                      |                     Valor |
| ---------------------------- | ------------------------: |
| Casos de teste manuais       |                        16 |
| Casos de teste automatizados |                        16 |
| Cobertura da automação       | 100% dos casos planejados |
| Ferramenta de automação      |                Playwright |
| Linguagem                    |                TypeScript |
| Arquitetura da automação     |   Page Object Model (POM) |

---

# Competências Aplicadas

* ✅ Planejamento de Testes
* ✅ Casos de Teste Manuais
* ✅ Execução Manual dos Testes
* ✅ Registro dos Resultados
* ✅ Automação de Testes com Playwright
* ✅ Arquitetura utilizando Page Object Model (POM)
* ✅ Versionamento com Git e GitHub
* ✅ Integração Contínua (CI)

---

# Escopo Validado

Os testes contemplam as principais funcionalidades da aplicação.

* Cadastro de contatos
* Consulta de contatos
* Busca por nome
* Edição de contatos
* Exclusão de contatos
* Validação de campos obrigatórios
* Validação de regras de negócio
* Fluxos positivos
* Fluxos negativos

---

# Estrutura do Projeto

```text
contactsbook-validation
│
├── automation
│   ├── pages
│   ├── tests
│   ├── playwright.config.ts
│   └── ...
│
├── test-case
│   └── Matriz de Casos de Teste e Resultados.xlsx
│
├── .gitignore
└── README.md
```

---

# Tecnologias Utilizadas

* Playwright
* TypeScript
* Node.js
* Git
* GitHub

---

# Organização da Automação

A automação foi desenvolvida utilizando o padrão **Page Object Model (POM)**, separando a lógica dos testes da interação com as páginas da aplicação. Essa abordagem proporciona maior organização, reutilização de código e facilidade de manutenção da suíte de testes.

---

# Casos de Teste

Os cenários de teste foram elaborados a partir das funcionalidades disponíveis no MVP da aplicação, contemplando tanto fluxos positivos quanto negativos.

Cada caso de teste possui um identificador único (TC-XX), permitindo a rastreabilidade entre:

* Planejamento dos testes;
* Execução manual;
* Automação dos cenários;
* Resultado obtido.

---

# Automação

Os testes automatizados foram implementados utilizando **Playwright** e **TypeScript**, seguindo o padrão **Page Object Model (POM)**.

A suíte automatiza todos os cenários planejados, garantindo consistência entre os casos de teste documentados e sua execução automatizada.

---

# Como Executar

Clone o repositório:

```bash
git clone https://github.com/jennitlf/contactsbook-validation
```

Acesse a pasta da automação:

```bash
cd automation
```

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npx playwright test
```

Visualize o relatório HTML da execução:

```bash
npx playwright show-report
```

---

# Objetivo do Portfólio

Este repositório foi desenvolvido com o objetivo de demonstrar conhecimentos práticos em Garantia da Qualidade de Software, evidenciando todas as etapas envolvidas no processo de testes de uma aplicação web.

O projeto reúne atividades de planejamento, documentação, execução manual e automação de testes, aplicando ferramentas e práticas amplamente utilizadas no mercado para representar o fluxo de trabalho esperado de um Analista de QA.

---

## Desenvolvido por

**Jennifer Lima**

Projeto desenvolvido para composição de portfólio na área de Qualidade de Software (QA).
