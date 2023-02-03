## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Steps to install Nestjs 

```bash
# install nestjs
```

## Installation

```bash
$ npm install
```

## Initial setup

Install necessary npm dependency packages

```bash
$ yarn install
```

Setup database

1. create db

```bash
$ yarn seq db:create
```

2. run migration

```bash
$ yarn seq db:migrate
```

3. run seed

```bash
$ yarn seq db:seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Raw Migration Commands

```bash
# create db
$ npx sequelize-cli db:create

#drop db
$ npx sequelize-cli db:drop

#generate model and migration file
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

#generate migration skeleton file
$ npx sequelize-cli migration:generate --name migration-skeleton

# run migrations
$ npx sequelize-cli db:migrate

#run specific migration file
$ npx sequelize-cli db:migrate --name <migration_file_name.js>

#undo specific migration file
npx sequelize-cli db:migrate:undo --name <migrate_file_name.js>

#undo migration
$ npx sequelize-cli db:migrate:undo

#undo migration till
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

#run seed
$ npx sequelize-cli db:seed:all

#undo specific seed file
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

#undo all seeds
npx sequelize-cli db:seed:undo:all

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
