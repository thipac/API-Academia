
# API Academia Resilientes

Uma API criada no curso da Resilia, para o final do módulo 4.

Esta API REST é referente a uma Academia de Musculação, e a parte de cadastro dos funcionários.
##  Stacks

 - `Node.js` 
 - `Express`
 - `SQLite3`
 

  
## Documentação

[Node.js] https://nodejs.org/pt-br/docs/

[Express] https://expressjs.com/pt-br/

[SQLite3] https://www.sqlite.org/docs.html
  
## Como rodar localmente

 Clone o projeto do github

```bash
  git clone https://github.com/thipac/API-Academia.git
```

Entre na pasta do projeto

```bash
  cd meu-projeto
```

Inicie o projeto

```bash
  npm init --y
```

Instale o Express

```bash
  npm i express --save
```

Instale o Cors

```bash
  npm i cors --save
```

Instale o Nodemon

```bash
  npm i nodemon --save-dev 
```
Instale o Jest

```bash
  npm i jest --save-dev
```
Instale o Supertest

```bash
  npm install supertest --save-dev
```

Instale o Sqlite3

```bash
  npm i sqlite3 || npm i sqlite3@5.0.0
```

Iniciando o Servidor 

```bash
  npm run dev 
```

## Acessando a API para Testes

#### Metodo GET - ALL
```http
  GET localhost:3050/academia/staff
```

#### Metodo GET - ID
```http
  GET localhost:3050/academia/staff/:ID
```

#### Metodo POST novo Staff
```http
  POST localhost:3050/academia/staff/newStaff
```
Crie um novo staff inseriondo como .json  

Ex: 

```bash
{
		"NOME": "Levi Rafael Mendes",
		"CPF": "15559176230",
    "IDADE": 27,
		"FUNCAO": "Faxineiro",
		"EMAIL": "levirafaelmendes-71@callan.com.br",
		"RUA": "Rua Mauro Cesar do Nascimento",
		"NUMERO": 382,
		"CIDADE": "Resende",
		"ESTADO": "Rio de Janeiro",
		"TELEFONE": "986178436",
}
```

#### Metodo DELETE Staff pelo ID
```http
  DELETE localhost:3050/academia/staff/delete/:ID
```
Escolha qual ID você deseja deletar do BD 

#### Metodo PUT(UPDATE) Staff pelo ID 
```http
  UPDATE localhost:3050/academia/staff/edit/:ID
```
Utilize o exemplo do POST para inserir as alterações que você deseja.







  
## Testando a API

Para Iniciar os testes, inicie o comando no terminal.

```bash
  npm run test
```

  
## Authors

- [@thipac](https://github.com/thipac)

  
## Feedback

Se você quiser me dar algum feedback, por favor me mande um e-mail thiagolmcpacheco@gmail.com

  
