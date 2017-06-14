# React Seed - Setup 

## Install dependencies

Restore all packages

```bash
yarn # root folder
```


## Database

* Install [postgres](https://www.postgresql.org/) and [pgAdmin](https://www.pgadmin.org/)
* Create new database called *ReactSeedDB*. Use following credentials: 
    * user: `postgres`
    * password: `Password.01`
* For more information about setting up the server see [official docs](https://wiki.postgresql.org/wiki/First_steps)
* Create tables running migrations: 
    * `yarn run migrate:latest`
* Populate database running the seeds: 
    * `yarn run seed:run`


## Start the app

### Execute the express server

#### Development (with nodemon)

```bash
yarn run dev
```

#### Production

```bash
yarn run prod # build and start
```

Open browser on [localhost:3000](http://localhost:3000/)


## NPM Scripts

```bash
yarn run build  # build production assets

yarn run start  # execute production server

yarn run test  # execute all tests

yarn run lint # execute linting
```

<details>

#### More scripts

* `test`: exec all test (client uses `jest`, server uses `tape`)
    * `test:client`: exec client test
    * `test:server`: exec server test
* `tdd`: exec test (on watch mode)
* `lint`: exec linting (`eslint`)
* `migrate:*`: knex migrations
    * `migrate:make`: create migration script
    * `migrate:latest`: exec migrations
    * `migrate:rollback`: rollback migration
* `seed:*`: data seeds
    * `seed:make`: create seed script
    * `seed:run`: exec seeds
* `stats`: run `npm` stats
* `build`: build production assets
* `start`: exec production server
* `dev`: exec development server
* `prod`: build production assets and exec production server

</details>
