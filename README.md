# 🌤️ Weather Dashboard - Frontend Interface

Uma interface moderna, minimalista e totalmente responsiva desenvolvida em **React** com **TypeScript** para exibição de dados climáticos. O aplicativo renderiza dinamicamente as informações trazidas do backend correspondente.

---

## 🛠️ Tecnologias e Padrões Utilizados

* **React** (utilizando o ecossistema super rápido do **Vite**)
* **TypeScript**: Tipagem estática para maior segurança do código.
* **CSS Modules**: Estilização isolada por componente, evitando conflitos de escopo global.
* **React Context API**: Gerenciamento global de estados (como o termo de busca e o sistema de mensagens de erro).
* **React Icons**: Pacote de ícones vetoriais modernos.

---

## 📦 Recursos Visuais e Engenharia de Software

* **Global Error Toast**
  Componente customizado acionado via Hook (`useErrorGlobal()`) que exibe mensagens temporizadas no estilo notificação mobile caso uma busca falhe.

* **Loading State**
  Feedback em tempo real através de um spinner animado puramente com CSS enquanto as requisições estão em trânsito.

* **Design Responsivo Avançado**
  CSS estruturado adaptando os cards de previsão para listas horizontais limpas em dispositivos móveis.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Instalação

Navegue até a pasta raiz do projeto frontend através do terminal e instale as dependências:

```bash
npm install
# ou
yarn install
```

### 2. Rodar o Projeto

```bash
npm run dev
# ou
yarn dev
```

### 3. Acessar no Navegador

Abra o navegador e acesse:

```
http://localhost:5173
```
---

## 📌 Observações

* Certifique-se de que o backend esteja rodando corretamente para consumir os dados climáticos.
---
