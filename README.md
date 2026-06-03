```markdown
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

* **Global Error Toast**: Um componente customizado acionado via Hook (`useErrorGlobal()`) que exibe mensagens temporizadas no estilo notificação mobile caso uma busca falhe.
* **Loading State**: Feedback em tempo real através de um spinner animado puramente com CSS enquanto as requisições estão em trânsito.
* **Design Responsivo Avançado**: CSS estruturado adaptando os cards de previsão para listas horizontais limpas em celulares.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Instalação
Navegue até a pasta raiz deste projeto frontend através do terminal e instale as dependências do ecossistema:

```bash
npm install
# ou se preferir utilizar o yarn:
yarn install