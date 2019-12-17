# Projeto Final Reprograma
Projeto Final do Bootcamp de Backend da Reprograma, desenvolvido por Tatiani Meneghini.

### Passo a passo pra criar a API:
- README.md
- npm init
- npm install express mongoose
- npm install -D nodemon
- .gitignore com node_modules
- criar server.js rodando o app.js com a porta escolhida
- criar o app.js com o express, exportando o app.
- npm install dotenv-safe e verificar a versão ^6.1.0 no package.json.

## Objetivo
O projeto tem como nome "Literatura LGBT", com o objetivo de disponibilizar aos usuários um Banco de Dados de livros e autores LGBTs (Lésbicas, Gays, Bissexuais e Transexuais).
É a primeira iniciativa de criar um Banco de Dados colaborativo do tema, com acesso por API.

## Requisitos
- Cada livro deve possuir os seguintes campos: título, autoria, gênero literário, editora, ano de lançamento.
- Diferenciar os títulos dos livros, para não possuir diferentes livros com o mesmo nome.
- Links é opcional, para caso de livros que estejam disponíveis online.
- O estilo literário é dividido em obras de ficção e não-ficção (sem acentuação).
- Os gêneros literários são subdividos em: romance, contos, crônicas, poesia, ensaio, autobiografia.
- A rota GET /literaturaLGBT deve trazer os livros ordenados por ordem alfabética de título.
- A rota POST /criar deve receber no body um novo título do livro pra ser adicionado no Banco de Dados, seguido de autoria, gênero literário, editora, ano de lançamento.
- A rota PATCH /atualizar/:id deve salvar a lista completa.
- A rota DELETE /remover/:id deve remover o livro pelo ID.