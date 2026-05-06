# LearningFlix — Test Automation

Projeto de automação de testes da plataforma **LearningFlix** (Revvo), desenvolvido pelo **Squad Iterasys-145** utilizando Playwright + Cucumber (BDD).

---

## 🛠 Stack

| Ferramenta | Versão |
|---|---|
| Node.js | 20+ |
| Playwright | ^1.59.1 |
| Cucumber | ^12.8.1 |
| dotenv | ^17.4.2 |

---

## 📁 Estrutura do Projeto

```
learningflix-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── data/
├── docs/
├── fixtures/
├── pages/
│   ├── AdminPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── PublicoAlvoPage.js
│   └── ThemePage.js
├── tests/
│   ├── features/
│   │   ├── login/
│   │   │   └── login.feature
│   │   ├── logo_favicon/
│   │   │   ├── inserir_favicon.feature
│   │   │   ├── inserir_logo.feature
│   │   │   ├── mime_type.feature
│   │   │   └── visualizar_logo.feature
│   │   ├── publico_alvo/
│   │   │   ├── adicionar_usuario.feature
│   │   │   ├── buscar_publico_alvo.feature
│   │   │   ├── criar_publico_alvo.feature
│   │   │   ├── editar.feature
│   │   │   ├── excluir_publico_alvo.feature
│   │   │   └── remover_usuario.feature
│   │   └── variantes_tema/
│   │       ├── criar_tema.feature
│   │       ├── excluir_tema.feature
│   │       ├── excluir_tema_padrao.feature
│   │       ├── inativar_tema_padrao.feature
│   │       ├── pre_visualizar_tema.feature
│   │       └── tornar_padrao.feature
│   ├── hooks/
│   │   └── hooks.js
│   └── steps/
│       ├── adicionar_usuario_publico_alvo.steps.js
│       ├── buscar_publico_alvo.steps.js
│       ├── common.steps.js
│       ├── criar_publico_alvo.steps.js
│       ├── criar_tema.steps.js
│       ├── editar_publico_alvo.steps.js
│       ├── excluir_publico_alvo.steps.js
│       ├── excluir_tema.steps.js
│       ├── excluir_tema_padrao.js
│       ├── inativar_tema_padrao.js
│       ├── inserir_favicon.steps.js
│       ├── inserir_logo.steps.js
│       ├── login.steps.js
│       ├── mime_type.steps.js
│       ├── pre_visualizar_tema.steps.js
│       ├── remover_usuario_publico_alvo.steps.js
│       ├── tornar_padrao.steps.js
│       └── visualizar_logo.steps.js
├── cucumber.js
└── package.json
```

---

## ⚙️ Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/Squad-Iterasys-145/learningflix-automation
cd learningflix-automation
```

### 2. Instalar dependências

```bash
npm ci
npx playwright install chromium
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BASE_URL=https://homolog.learningflix.net/login/index.php
ADMIN_USERNAME=seu_usuario_admin
ADMIN_PASSWORD=sua_senha_admin
CLIENT_USERNAME=seu_usuario_cliente
CLIENT_PASSWORD=sua_senha_cliente
```

> ⚠️ O arquivo `.env` não deve ser commitado — já está no `.gitignore`.

---

## ▶️ Como Executar os Testes

### Rodar todos os testes

```bash
npm test
```

### Rodar com browser visível (modo debug)

```bash
headless = true
SLOWMO=1000 npx cucumber-js
```

---

## 🎯 Executar por Módulo

### 🔐 Login

```bash
npx cucumber-js --tags @login
```

---

### 🎨 Variantes do Tema — Thamires

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags @variantes_tema` |
| Criar tema | `npx cucumber-js --tags @criar_tema` |
| Pré-visualizar tema | `npx cucumber-js --tags @pre_visualizar_tema` |
| Tornar tema padrão | `npx cucumber-js --tags @tornar_padrao` |
| Excluir tema | `npx cucumber-js --tags @excluir_tema` |
| Inativar tema padrão (cliente) | `npx cucumber-js --tags @inativar_tema_padrao` |
| Excluir tema padrão (cliente ) | `npx cucumber-js --tags @excluir_tema_padrao` |

---

### 🖼 Logo e Favicon — Diego

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags @logo_favicon` |
| Inserir logo | `npx cucumber-js --tags @inserir_logo` |
| Inserir favicon | `npx cucumber-js --tags @inserir_favicon` |
| Validação MIME Type | `npx cucumber-js --tags @mime_type` |
| Visualizar logo | `npx cucumber-js --tags @visualizar_logo` |

---

### 🎯 Público-alvo — Felipe

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags "@publico_alvo"` |
| Criar público-alvo | `npx cucumber-js --tags "@criar_publico_alvo"` |
| Adicionar usuário | `npx cucumber-js --tags "@adicionar_usuario"` |
| Remover usuário | `npx cucumber-js --tags "@remover_usuario"` |
| Excluir público-alvo | `npx cucumber-js --tags "@excluir_publico_alvo"` |
| Buscar público-alvo | `npx cucumber-js --tags "@buscar_publico_alvo"` |
| Editar público-alvo | `npx cucumber-js --tags "@editar_publico_alvo"` |

---

## 👥 Time

| Membro | Responsabilidade |
|---|---|
| **Thamires** | Variantes do Tema |
| **Diego** | Logo e Favicon |
| **Felipe** | Público-alvo |

---

## 🔀 Fluxo Git

```
feature/branch → PR para develop → revisão → merge
develop → PR para main → ao final do sprint
```

### Convenção de commits

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `test:` | Adição ou correção de testes |
| `docs:` | Documentação |
| `chore:` | Tarefas de manutenção |
| `refactor:` | Refatoração |

---

## 🏢 Projeto

- **Empresa:** Revvo
- **Plataforma:** LearningFlix — Moodle 4.2+
- **Squad:** Iterasys-145
- **Repositório:** [Squad-Iterasys-145/learningflix-automation](https://github.com/Squad-Iterasys-145/learningflix-automation)