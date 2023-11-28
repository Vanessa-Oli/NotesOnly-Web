<h1 align="center">
    <img src=".github/logo-noteonly.svg" title="NotesOnly" alt="" width="30px" />
    NotesOnly-WEB
</h1>

## 💻 About

O NotesOnly é uma aplicação web na qual os usuários podem se cadastrar e criar de forma organizada anotações sobre determinados assuntos, tendo disponível a adição de titulo, descrição, links e tags para cada nota, além de contar a edição de perfil do usuário, podendo alterar seu avatar, nome, email e senha.

---

## 🎨 Layout
#### SignUp
<p align="center">
  <img
    alt="NotesOnly Web Demonstration SignUp"
    title="NotesOnly Web Demonstration SignUp"
    src=".github/notesonlydemonstration_02.png" width="100%"
  />
</p>

#### SignIn
<p align="center">
  <img
    alt="NotesOnly Web Demonstration SignIn"
    title="NotesOnly Web Demonstration SignIn"
    src=".github/notesonlydemonstration_01.png" width="100%"
  />
</p>

#### Home
<p align="center">
  <img
    alt="NotesOnly Web Demonstration Home"
    title="NotesOnly Web Demonstration Home"
    src=".github/notesonlydemonstration_03.png" width="100%"
  />
</p>

#### Perfil
<p align="center">
  <img
    alt="NotesOnly Web Demonstration Perfil"
    title="NotesOnly Web Demonstration Perfil"
    src=".github/notesonlydemonstration_04.png" width="100%"
  />
</p>

#### Note Preview
<p align="center">
  <img
    alt="NotesOnly Web Demonstration Note Preview"
    title="NotesOnly Web Demonstration Note Preview"
    src=".github/notesonlydemonstration_05.png" width="100%"
  />
</p>

#### Note Create
<p align="center">
  <img
    alt="NotesOnly Web Demonstration Note Create"
    title="NotesOnly Web Demonstration Note Create"
    src=".github/notesonlydemonstration_06.png" width="100%"
  />
</p>


<!-- ### Mobile

<p align="center">
  <img alt="Layout Mobile Demonstration" title="#Mobile" src=".github/images/mobile-demonstration.png" width="100%">
</p> -->

---

## 🔗 Deploy

Para acessar o deploy do Website da aplicação basta clicar no link a seguir: [Link](https://notesonly.netlify.app/)

> Obs: a aplicação pode demorar um pouco para entrar na primeira execução depois de um tempo, devido ao back-end estar rodando através do plano gratuito na plataforma de hospedagem.

---

## 🚀 How it works

Este projeto contem parte Front-end(React) e Back-end(Node), no entanto, neste repositório só está a parte Front-end Web, para acessar o repositório do Back-end acesse o seguinte [link](https://github.com/Vanessa-Oli/NotesOnly-API)
Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar. -->

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
> Obs: e não se esqueça que também precisa rodar/executar o back-end da aplicação para buscar e checar os dados necessários

Precisará também fazer a seguinte configuração para rodar o projeto:
* Baixar e rodar na sua máquina o Back-end da aplicação (que está em outro repositório, como já dito)
* Colocar dentro do arquivo de configuração do `axios` que esta dentro de `src/services/index.ts`, a `baseURL` de onde está sendo executado o Back-end.
* Pode ser que o `baseURL` venha com um link de Back-end preenchido, mas este pode estar fora do ar, por isso baixe e rode o Back-end da aplicação de forma separada na sua máquina para não ter erro.

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone git@github.com:Vanessa-Oli/NotesOnly-Web.git

# Vá para a pasta da aplicação Front End
$ cd NotesOnly-Web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta em uma porta especificada no terminal de execução
```
---
#### 🧭 Rodando a aplicação web (Frontend) Utilzando docker

```bash
# Clone este repositório
$ git clone git@github.com:Vanessa-Oli/NotesOnly-Web.git

# Vá para a pasta da aplicação Front End
$ cd NotesOnly-Web

# Buildar o container
$ docker-compose up -- build

# Execute a aplicação em modo de desenvolvimento
$ docker-compose up

# A aplicação será aberta em uma porta especificada no terminal de execução
```
---
## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Vite](https://vitejs.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Styled-Components](https://styled-components.com/)**
-   **[React-Toastify](https://fkhadra.github.io/react-toastify/introduction)**
-   **[React-Query](https://react-query-v3.tanstack.com/)**
-   **[React-Icons](https://react-icons.github.io/react-icons/)**
-   **[React-Loader-Spinner](https://mhnpd.github.io/react-loader-spinner/docs/intro)**
-   **[React-Router-DOM](https://reactrouter.com/en/main/start/tutorial)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](https://github.com/Vanessa-Oli/NotesOnly-Web/blob/main/package.json)
---

## ✍ Author

<img alt="Vanessa" title="Vanessa" src="https://media.licdn.com/dms/image/D4D03AQFJRVv38geHMA/profile-displayphoto-shrink_200_200/0/1698956001114?e=1706745600&v=beta&t=8FIgRn8Dgw0GSbI0YJ0PvVP01s0nxmz96VyE-BZ_dyM" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Vanessa_Christiano-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vanessa-christiano-de-oliveira-036085184/)](https://www.linkedin.com/in/vanessa-christiano-de-oliveira-036085184/) 

[![Gmail Badge](https://img.shields.io/badge/-vanessachristiano10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vanessachristiano10@gmail.com)](mailto:vanessachristiano10@gmail.com)

---
