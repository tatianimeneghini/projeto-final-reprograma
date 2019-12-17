# Projeto Final Reprograma
Projeto Final do Bootcamp de Backend da Reprograma, em parceria com a Accenture e o Facebook, desenvolvido por Tatiani Meneghini.

## API Literatura LGBT :book: :rainbow:
O projeto tem como nome **Literatura LGBT**, com o objetivo de disponibilizar aos usuários um Banco de Dados de livros e autores LGBTs (Lésbicas, Gays, Bissexuais e Transexuais).
É a primeira iniciativa de criar um Banco de Dados colaborativo do tema, com acesso por API.

### Passo a passo pra criar a API:
- *README.md*
- `npm init`
- `npm install express`
- `npm install mongoose`
- `npm install -D nodemon`
- `npm install body-parser`
- *.gitignore* com *node_modules*
- criar *server.js* rodando o *app.js* com a porta escolhida (5005).
- criar o *app.js* com o *express*, exportando o app.
- `npm install dotenv-safe` e verificar a versão ^6.1.0 no *package.json*.

### Instalação
Para clonar o repositório, acessar o *Git Bash* (Windows) ou terminal (Linux, MAC):
`git clone https://github.com/tatianimeneghini/projeto-final-reprograma.git`

Iniciar, após o diretório ser clonado, o pacote:
`npm install`

### Objetivo
A **API Literatura LGBT** cria um Banco de Dados de livros e disponbiliza seu acesso por título, autoria, editora, gênero literário, estilo narrativo, ano e acesso a *link* de pdf (não obrigatório). 

### Requisitos
- A API deve possuir CRUD (Create, Read, Update e Delete).
- Cada livro deve possuir os seguintes campos: título, autoria, gênero literário, editora, ano de lançamento.
- Diferenciar os títulos dos livros, para não possuir diferentes livros com o mesmo nome.
- Links é opcional, para caso de livros que estejam disponíveis *online* em formato pdf.
- O estilo literário é dividido em obras de ficção e não-ficção (sem acentuação).
- Os gêneros literários são subdividos em: romance, contos, crônicas, poesia, ensaio, autobiografia.

### Endpoints
Os endpoints criados são:
- A rota GET /literatura-LGBT deve trazer a lista de todos livros.
- A rota GET /buscarPorTitulo/:titulo deve retornar os livros pelo título.
- A rota GET /buscaPorAutoria/:autoria deve retornar os livros pela autoria.
- A rota GET /buscaPorEstilo/:estiloNarrativo deve retornar os livros pelo estilo narrativo.
- A rota GET /buscaPorGenero/:generoLiterario deve retornar os livros pelo gênero literário.
- A rota POST /criar deve receber no body o *titulo* do livro a ser adicionado no Banco de Dados, seguido de *autoria* e *generoLiterário* (requeridos), *estiloNarrativo*, *editora*, *anoDeLancamento* e *acessoLink* (opcionais).
- A rota PATCH /atualizar/:id deve salvar as atualizações do livro através de seu id.
- A rota DELETE /remover/:id deve remover o livro através de seu id.
