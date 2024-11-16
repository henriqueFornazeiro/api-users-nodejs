# API-USERS

Este é um projeto simples de uma API para realizar operações CRUD (Criar, Ler, Atualizar e Excluir) de usuários. A API foi desenvolvida utilizando **Node.js, Express e MongoDB** como banco de dados, com a conexão gerenciada pelo **Prisma**.

## Funcionalidades
- **Criar Usuários**: Adicionar novos usuários ao sistema.
- **Listar Usuários**: Obter uma lista de todos os usuários cadastrados.
- **Atualizar Usuários**: Editar informações de um usuário existente.
- **Excluir Usuários**: Remover um usuário do sistema.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Express.js](https://expressjs.com/en/starter/installing.html)
- [MongoDB](https://www.mongodb.com/docs/)
- [Prisma ORM](https://www.prisma.io/docs/getting-started)

## Requisitos
- Node.js (v16 ou superior)
- npm (ou yarn)
- MongoDB (instalado ou serviço na nuvem)

## Instalação
1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```
npm install
```

3. Configure a conexão com o MongoDB:

- Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
```
DATABASE_URL="mongodb+srv://seu-usuario:senha@cluster.mongodb.net/nome-do-banco?retryWrites=true&w=majority"
```
 - Substitua seu-usuario, senha e nome-do-banco pelos valores adequados da sua instância do MongoDB.

4. Execute as migrações do Prisma para configurar o banco de dados:

```
npx prisma migrate dev
```


5. Inicie o servidor:

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
