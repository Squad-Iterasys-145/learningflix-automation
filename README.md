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
│   ├── Matriz_Risco_Automacao_LearningFlix.xlsx
│   └── criterios_automacao.docx
├── pages/
│   ├── AdminPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── PublicoAlvoPage.js
│   ├── ThemePage.js
│   └── UserManagementPage.js
├── tests/
│   ├── features/
│   │   ├── login/
│   │   │   └── login.feature
│   │   ├── logo_favicon/
│   │   │   ├── acessar_url_direta.feature
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
│   │   │   ├── remover_usuario.feature
│   │   │   ├── sobrescrita_acessar_publico_alvo.feature
│   │   │   ├── sobrescrita_tema_publico_alvo.feature
│   │   │   ├── usuario_acessar_publico_alvo.feature
│   │   │   ├── usuario_inativo_publico_alvo.feature
│   │   │   ├── usuario_login_publico_alvo.feature
│   │   │   ├── usuario_login_remover_publico_alvo.feature
│   │   │   ├── usuario_remover_acessar_publico_alvo.feature
│   │   │   ├── validacao_nome_publico_alvo.feature
│   │   │   └── validar_isolamento_tema_publico_alvo.feature
│   │   └── variantes_tema/
│   │       ├── ativar_inativar_tema.feature
│   │       ├── ativar_tema_login.feature
│   │       ├── criar_tema.feature
│   │       ├── dois_temas_padrao.feature
│   │       ├── excluir_tema.feature
│   │       ├── excluir_tema_padrao.feature
│   │       ├── inativar_tema_login.feature
│   │       ├── inativar_tema_padrao.feature
│   │       ├── pre_visualizar_tema.feature
│   │       ├── sobrescrever_tema.feature
│   │       ├── tema_login_usuario.feature
│   │       ├── tema_login_usuario_negativo.feature
│   │       ├── tornar_padrao.feature
│   │       └── visualizar_como.feature
│   ├── hooks/
│   │   └── hooks.js
│   └── steps/
│       ├── acessar_url_direta.steps.js
│       ├── adicionar_usuario_publico_alvo.steps.js
│       ├── ativar_inativar_tema.steps.js
│       ├── ativar_tema_login.steps.js
│       ├── buscar_publico_alvo.steps.js
│       ├── common.steps.js
│       ├── criar_publico_alvo.steps.js
│       ├── criar_tema.steps.js
│       ├── dois_temas_padrao.steps.js
│       ├── editar_publico_alvo.steps.js
│       ├── excluir_publico_alvo.steps.js
│       ├── excluir_tema.steps.js
│       ├── excluir_tema_padrao.steps.js
│       ├── inativar_tema_padrao.steps.js
│       ├── inserir_favicon.steps.js
│       ├── inserir_logo.steps.js
│       ├── login.steps.js
│       ├── mime_type.steps.js
│       ├── pre_visualizar_tema.steps.js
│       ├── remover_usuario_publico_alvo.steps.js
│       ├── sobrescrever_tema.steps.js
│       ├── sobrescrita_acessar_publico_alvo.steps.js
│       ├── sobrescrita_tema_publico_alvo.steps.js
│       ├── tema_login_usuario.steps.js
│       ├── tema_login_usuario_negativo.steps.js
│       ├── tornar_padrao.steps.js
│       ├── usuario_inativo_publico_alvo.steps.js
│       ├── usuario_login_publico_alvo.steps.js
│       ├── usuario_login_remover_publico_alvo.steps.js
│       ├── validacao_nome_publico_alvo.steps.js
│       ├── visualizar_como.steps.js
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

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

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

### Rodar com browser visível e lento (modo debug)

```bash
SLOWMO=1000 npx cucumber-js
```

### Rodar com gravação de vídeo

```bash
RECORD_VIDEO=true npx cucumber-js --tags @variantes_tema
```

---

## 🎯 Executar por Módulo

### 🔐 Login

```bash
npx cucumber-js --tags @login
```

---

### 🎨 Variantes do Tema — Thamires Santos

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags @variantes_tema` |
| Criar tema | `npx cucumber-js --tags @criar_tema` |
| Pré-visualizar tema | `npx cucumber-js --tags @pre_visualizar_tema` |
| Tornar tema padrão | `npx cucumber-js --tags @tornar_padrao` |
| Ativar e Inativar tema | `npx cucumber-js --tags @ativar_inativar_tema` |
| Excluir tema | `npx cucumber-js --tags @excluir_tema` |
| Excluir tema padrão — bloqueado | `npx cucumber-js --tags @excluir_tema_padrao` |
| Inativar tema padrão — bloqueado | `npx cucumber-js --tags @inativar_tema_padrao` |
| Sobrescrever tema de usuário | `npx cucumber-js --tags @sobrescrever_tema` |
| Dois temas padrão — negativo | `npx cucumber-js --tags @dois_temas_padrao` |
| Tema após login — usuário | `npx cucumber-js --tags @tema_login_usuario` |
| Tema após login — negativo | `npx cucumber-js --tags @tema_login_usuario_negativo` |
| Ativar tema e validar login | `npx cucumber-js --tags @ativar_tema_login` |
| Inativar tema e validar login | `npx cucumber-js --tags @inativar_tema_login` |
| Visualizar como usuário | `npx cucumber-js --tags @visualizar_como` |

---

### 🖼 Logo e Favicon — Diego Valter

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags @logo_favicon` |
| Inserir logo | `npx cucumber-js --tags @inserir_logo` |
| Inserir favicon | `npx cucumber-js --tags @inserir_favicon` |
| Validação MIME Type | `npx cucumber-js --tags @mime_type` |
| Visualizar logo | `npx cucumber-js --tags @visualizar_logo` |
| Acessar URL direta — negativo | `npx cucumber-js --tags @acessar_url_direta` |

---

### 🎯 Público-alvo — Felipe Sizoto

| Descrição | Comando |
|---|---|
| Todos os testes | `npx cucumber-js --tags @publico_alvo` |
| Criar público-alvo | `npx cucumber-js --tags @criar_publico_alvo` |
| Adicionar usuário | `npx cucumber-js --tags @adicionar_usuario` |
| Remover usuário | `npx cucumber-js --tags @remover_usuario` |
| Excluir público-alvo | `npx cucumber-js --tags @excluir_publico_alvo` |
| Buscar público-alvo | `npx cucumber-js --tags @buscar_publico_alvo` |
| Editar público-alvo | `npx cucumber-js --tags @editar_publico_alvo` |
| Sobrescrita via gerenciar usuários | `npx cucumber-js --tags @sobrescrita_tema_publico_alvo` |
| Sobrescrita via acessar como | `npx cucumber-js --tags @sobrescrita_acessar_publico_alvo` |
| Aplicação de tema via público-alvo | `npx cucumber-js --tags @usuario_acessar_publico_alvo` |
| Login com tema aplicado | `npx cucumber-js --tags @usuario_login_publico_alvo` |
| Validação de nome | `npx cucumber-js --tags @validacao_nome_publico_alvo` |
| Usuário inativo no grupo | `npx cucumber-js --tags @usuario_inativo_publico_alvo` |

---

## 👥 Time

| Membro | Responsabilidade |
|---|---|
| **Thamires Santos** | Variantes do Tema |
| **Diego Valter** | Logo e Favicon |
| **Felipe Sizoto** | Público-alvo |

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