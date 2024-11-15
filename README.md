# API-USERS

Este é um projeto simples de uma API para realizar operações CRUD (Criar, Ler, Atualizar e Excluir) de usuários. A API foi desenvolvida utilizando Node.js e Express.

## Funcionalidades
- **Criar Usuários**: Adicionar novos usuários ao sistema.
- **Listar Usuários**: Obter uma lista de todos os usuários cadastrados.
- **Atualizar Usuários**: Editar informações de um usuário existente.
- **Excluir Usuários**: Remover um usuário do sistema.

## Tecnologias Utilizadas
- Node.js
- Express.js

## Requisitos
- Node.js (v16 ou superior)
- npm (ou yarn)

## Instalação
1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2.Instale as dependências:

```
npm install
```

3. Inicie o servidor:

```
npm start
```

A aplicação estará disponível em: http://localhost:3000

## Rotas da API

| Método | Rota           | Descrição                |
|--------|----------------|--------------------------|
| GET    | `/usuarios`       | Listar todos os usuários |
| GET    | `/usuarios/:id`   | Obter um usuário por ID  |
| POST   | `/usuarios`       | Criar um novo usuário    |
| PUT    | `/usuarios/:id`   | Atualizar um usuário     |
| DELETE | `/usuarios/:id`   | Excluir um usuário       |
