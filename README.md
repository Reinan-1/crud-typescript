# CRUD Clients - Typescript

## 💻 Sobre o Projeto 
Um projeto simples de CRUD utilizando TypeScript.

## 🛠️ Pré-requisitos 
Antes de começar, certifique-se de ter os seguintes requisitos:

- [Node.js](https://nodejs.org/en/download) instalado em seu sistema.
- [PostgreSQL](https://www.postgresql.org/download/) instalado em seu sistema.

## ⚙ Funcionalidades 

<details>
   <summary><b>Cliente</b></summary>
   
   - Cadastrar Cliente
   - Atualizar Dados do Cliente
   - Detalhar Cliente
   - Listar Clientes
   - Deletar Cliente
      
</details>

## 🧰 Tecnologias Usadas 

- [Node.js](https://nodejs.org/en/download): Plataforma de execução de código JavaScript.
- [Express.js](https://expressjs.com/pt-br/): Framework web para Node.js.
- [Knex](http://knexjs.org/): Query builder.
- [Dotenv](https://www.npmjs.com/package/dotenv): Para gerenciar variáveis de ambiente.
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática ao código.

## 📖 Instruções de Uso 

Siga estas etapas para configurar e usar a API:

##### 1. Clone este repositório para o seu ambiente de desenvolvimento local:

```sh
git clone https://github.com/Reinan-1/crud-typescript.git
```

##### 2. Navegue até a pasta do projeto e instale as dependências:
   
```sh
cd projeto-crud-typescript
npm install
```
##### 3. Crie um banco de dados chamado `pdv` e execute o script contido no arquivo `dump.sql` localizado na pasta `sql` para inicializar as tabelas e configurações necessárias.

```sql
CREATE DATABASE sistema_crud;
```

##### 4. Crie um arquivo `.env` na raiz do projeto e adicione as sequintes variáveis de ambiente:

```
DB_HOST=HOST_BANCO_DE_DADOS
DB_PORT=PORTA_BANCO_DE_DADOS
DB_USER=USUARIO_BANCO_DE_DADOS
DB_PASS=SENHA_BANCO_DE_DADOS
DB_NAME=NOME_BANCO_DE_DADOS
```
##### 5. Inicie o servidor da API:

```
npm run start
```
##### 6. Acesse a API em http://localhost:"porta-da-sua-api".

## 🛢 Banco de Dados

Esta API utiliza um banco de dados chamado `sistema_crud` com as seguintes tabelas:

<details>
   <summary><b>clients</b></summary>
   
   - **id:** Identificador único do cliente.
   - **nome:** Nome do cliente.
   - **email:** Endereço de e-mail do cliente (campo único).
   
</details>

## 🛣 Endpoints:

<details>
   <summary><b>Cadastrar Cliente</b></summary>

#### `POST` `/clients`
   Descrição: Essa é a rota que permite cadastrar um novo cliente no sistema.

- **Requisição**  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome
  - email
  
#### **Exemplo de requisição**
```javascript
// POST /clients
// Corpo da requisição para cadastro de cliente (body)
{
    "nome": "José",
    "email": "jose@email.com"
}
```
#### **Exemplo de Resposta (201 Created)**:

```javascript
// HTTP Status 201 
{   
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}
```
</details>

<details>
   <summary><b>Atualizar Dados do Cliente</b></summary>

#### `PUT` `/clients/:id`
   Descrição: Essa é a rota que permite realizar atualização de um cliente cadastrado.

- **Requisição**  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome
  - email
  
#### **Exemplo de requisição**
```javascript
// PUT /clients/1
// Corpo da requisição para atualizar cliente (body)
{
    "nome": "José Santos",
    "email": "joseSantos@email.com",
}
```
#### **Exemplo de Resposta (204 No Content)**:

```javascript
// HTTP Status 204 
// Sem conteúdo no corpo (body) da resposta
```
</details>

<details>
   <summary><b>Listar Clientes</b></summary>

#### `GET` `/clients`
   Descrição: Essa é a rota que será chamada para listar todos os clientes cadastrados.
   
#### **Exemplo de requisição**

```javascript
// GET /clients
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplo de Resposta (200 OK)**:

```javascript
// HTTP Status 200 
[
   {   
       "id": 1,
       "nome": "José Santos",
       "email": "joseSantos@email.com"
   },
   {   
       "id": 2,
       "nome": "Maria",
       "email": "maria@email.com"
   }
]
```
</details>

<details>
   <summary><b>Detalhar Cliente</b></summary>

#### `GET` `/clients/:id`
   Descrição: Essa é a rota que será chamada para obter um dos clientes cadastrados.
   
#### **Exemplo de requisição**

```javascript
// GET /clients/2
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplo de Resposta (200 OK)**:

```javascript
// HTTP Status 200 
{   
   "id": 2,
   "nome": "Maria",
   "email": "maria@email.com"
}
```
</details>

<details>
   <summary><b>Excluir Cliente por ID</b></summary>

#### `DELETE` `/clients/:id`
   Descrição: Essa é a rota que será chamada para excluir um dos clientes cadastrados. 
   
#### **Exemplo de requisição**

```javascript
// DELETE /clients/1
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplo de Resposta (204 No Content)**:

```javascript
// HTTP Status 204 
// Sem conteúdo no corpo (body) da resposta
```
</details>







