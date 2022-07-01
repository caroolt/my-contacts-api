

<h1 align="center">Nome do Projeto</h1>

<!-- Imagem que representa o que o projeto faz-->
![Imagem falando para as pessoas escreverem um readme](./img/readme.png)

## Index
  1. [Descrição do Projeto](#descrição)
  2. [Técnicas e Tecnologias](#tecnologias)
  3. [Abrir e executar o projeto](#executar_o_projeto)
  4. [Features do Projeto](#project_features)
  4. [Pessoas que ajudaram a desenvolver o projecto](#developers)
  5. [English Readme](./READMEEnglish.md)

### Descrição do Projeto
###### descrição
Esse projeto foi feito apenas para fins de estudo de SQL e express com node.js; Seu objetivo é criar uma API onde cadastra-se contatos e as categorias em que se conheceu esses contatos (linkedin, twitter e etc);

### Técnicas e Tecnologias
###### tecnologias
- Express
- Postgres
- Node.js

## 🛠️ Abrir e executar o projeto
###### executar_o_projeto
#### 1- Clone o Projeto
#### 2- Editar o file default.json dentro da pasta config
 - Neste passo a sua máquina deve ter e estar rodando o docker do postgres
 - O user e a senha devem ser os mesmos que os utilizados no postgres

#### 3- Instale todas as dependências
   `yarn install`

#### 4- entre no bash do postgres
   `docker exec -it 'nome do container' bash` e `psql -U 'nome do POSTGRES_USER que você setou'`

#### 5- execute as queries na pasta database `schema.sql`

#### 6- Execute o projeto
   `yarn dev`

#### 7- Etapa não obrigatória
   - Na pasta insomnia há um json com os métodos a serem testados. Para utilizá-los no insomnia basta importar o json e pronto.

   _Insomnia é uma ferramenta cliente REST API, como o Postman, mas tem algumas características adicionais, tais como suporte GraphQL, gRPC, e outras._

## Desenvolvedora do projeto
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) |
| :---: |
