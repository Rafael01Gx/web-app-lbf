# 🧪 web-app-lbf

Sistema web para gerenciamento de ordens de serviço e fluxo de amostras em um laboratório físico. A aplicação atende diferentes perfis de usuário — cliente, executante e administrador — e permite o acompanhamento completo do ciclo de vida das amostras, desde a criação da ordem de serviço até a entrega dos resultados finais.

## 📸 Demonstração

#### 🔐 Login  
Tela de autenticação da aplicação, com proteção por token JWT e controle de permissões baseado em perfis de usuário.

![Login](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Login.jpg)

---

#### 🏠 Página Inicial  
Tela inicial com instruções para envio de amostras e visualização de etapas do procedimento laboratorial.

![Home](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Home.jpg)

---

#### 📊 Dashboard  
Painel com gráficos e indicadores sobre o andamento das análises, ordens de serviço e prazos.

![Dashboard](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/DashBoard.jpg)

---

#### 📦 Ordem de Serviço  
Tela para criação e visualização das ordens de serviço (remessas), com emissão de etiquetas e controle por status.

![Ordem de Serviço](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Ordems%20de%20Serviço.jpg)

---

#### 🧾 Gerenciar OS (Administrador)  
Acesso exclusivo do administrador para controlar o ciclo completo das ordens, incluindo aprovação e emissão de laudos finais.

![Gerenciar OS](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/GerenciarOs.jpg)

---

#### ⚙️ Configurações  
Gestão de parâmetros laboratoriais: unidades de medida, matérias-primas, peneiras e mais. Acesso restrito a operadores e administradores.

![Configurações](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Configurações.jpg)

---

#### 🧪 Análises  
Gestão do fluxo das análises laboratoriais, com lançamento de resultados e acompanhamento por status (aguardando, em andamento, finalizadas).

![Análises](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Análises.jpg)

---

#### 👥 Gerenciamento de Contas  
Interface administrativa para autorização, alteração de perfil e exclusão de usuários da plataforma.

![Contas](https://raw.githubusercontent.com/rafael01gx/web-app-lbf/main/public/img/desc/Contas.jpg)

---

## ⚙️ Funcionalidades

- **🔐 Autenticação e recuperação de acesso**
  - Login e criação de conta
  - Recuperação e redefinição de senha
- **🏠 Página Inicial**
  - Informações úteis para envio de amostras
  - Tabela com instruções de procedimentos laboratoriais
- **📊 Dashboard**
  - Painel visual com gráficos e indicadores sobre o andamento das análises
  - Agendamento e controle de tarefas de forma interativa
- **👤 Gerenciamento de perfil**
  - Edição de dados pessoais e senha
- **📦 Ordem de Serviço (OS)**
  - Criação de nova ordem de serviço com emissão de etiquetas
  - Visualização por status: aguardando análise, concluídas, etc.
- **🧾 Gerenciar OS (Administrador)**
  - Aprovação ou reprovação de ordens
  - Emissão do laudo final
- **🧪 Amostras**
  - Listagem de todas as amostras do usuário
  - Acompanhamento detalhado de status e resultados
- **🧬 Análises (Operador/Admin)**
  - Gerenciamento do ciclo de análise: autorização, andamento e finalização
- **⚙️ Configurações do Sistema**
  - Parâmetros de análise, unidades de medida, matérias-primas, peneiras etc.
- **📄 Relatórios de Análises**
  - Visualização e exportação dos relatórios analíticos
- **👥 Gerenciar contas (Administrador)**
  - Controle de usuários: autorização, exclusão e definição de permissões

## 🧰 Tecnologias utilizadas

- **Frontend**: Angular 19, Angular Material, ApexCharts, jsPDF
- **Backend**: API RESTful com TypeScript e JWT para autenticação
- **Banco de Dados**: MongoDB (Não relacional, baseado em documentos)

## 🚀 Deploy

A aplicação está hospedada em:  
🔗 [https://rafael01gx.github.io/web-app-lbf/](https://rafael01gx.github.io/web-app-lbf/)

## 🔐 Autenticação e Autorização

A autenticação é baseada em tokens JWT.  
O acesso a funcionalidades é controlado por perfis de usuário (Cliente, Operador, Administrador), definidos e gerenciados pelo administrador do sistema.

## 🗃️ Banco de Dados

O sistema utiliza o **MongoDB**, banco não relacional baseado em documentos, adequado para estrutura flexível de dados e escalabilidade.

## 🧪 Como executar localmente

> Instruções para executar a **versão compilada (build) da aplicação Angular** — arquivos estáticos pós-deploy.

### 📦 Onde estão os arquivos da build

Os arquivos gerados pela build Angular estão disponíveis na branch:

🔗 [`gh-pages`](https://github.com/Rafael01Gx/web-app-lbf/tree/gh-pages)

Essa pasta contém todos os arquivos estáticos necessários (`index.html`, `main.*.js`, `styles.*.css`, etc).

---

### ▶️ Opção 1 — Servir localmente com `http-server` (simples e rápido)

---

### ⚠️ Pré-requisitos

- Node.js v18+ (para usar ferramentas Node, se necessário)
- Servidor HTTP para servir arquivos estáticos, como:
  - [`http-server`](https://www.npmjs.com/package/http-server)
  - NGINX
  - Apache
  - Microsoft IIS
  - Firebase Hosting
  - Vercel ou Netlify
  - Python HTTP Server (`python3 -m http.server`)
  - Docker com NGINX

---


1. Clone a branch de produção:

```bash
git clone --branch gh-pages https://github.com/Rafael01Gx/web-app-lbf.git
cd web-app-lbf

