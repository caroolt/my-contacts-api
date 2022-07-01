

<h1 align="center">Name of the project</h1>

<!-- Image that represents what the project does -->
![Image telling people to write a readme](./img/readme.png)

## Index
  1. [Project Description](#description)
  2. [Techniques and Technologies](#technologies)
  3. [Open and run the project](#run_project)
  4. [Project Features](#project_features)
  4. [People who helped develop the project](#developers)
  5. [Portuguese Readme](./README.md)

### Project Description
###### description
This project was made only for the purpose of studying SQL and express with node.js; Its goal is to create an API where you can register contacts and the categories in which you met these contacts (linkedin, twitter, etc);

### Techniques and Technologies
###### technologies
- Express
- Postgres
- Node.js

## 🛠️ Open and run the project
###### run_project
#### 1- Clone the Project
#### 2- Edit the default.json file inside the config folder
 - In this step your machine must have and be running the postgres docker
 - The user and password must be the same as the ones used in postgres

#### 3- Install all dependencies
   `yarn install`

#### 4- enter postgres bash
   `docker exec -it 'container name' bash` and `psql -U 'name of the POSTGRES_USER you set'`

#### 5- Run the queries in the `schema.sql` database folder

#### 6- Run the project
   `yarn dev`

#### 7- Step not required
   - In the insomnia folder there is a json with the methods to be tested. To use them in insomnia just import the json and you are done.

   _Insomnia is a REST API client tool, like Postman, but has some additional features, such as GraphQL support, gRPC, and others._

## Project Developer
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) |
| :---: |
