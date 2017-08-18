# React Seed - Setup 

## Install dependencies

Restore all packages from root folder:

```bash
$ yarn  # or (yarn install)
```

## Database
You can install Postgres or run your server in a Docker container
### Postgres
* Install [postgres](https://www.postgresql.org/) and [pgAdmin](https://www.pgadmin.org/)
* Update the `postgres` password in the `server/datastore/create/knexfile.js`
* For more information about setting up the server see [official docs](https://wiki.postgresql.org/wiki/First_steps)
### Docker
* Install [Docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/)
* Run `yarn database:docker-server` to create the docker container for the SQL Server (volume to persist data will be mounted)

Once you have configured your SQL Server, run the following commands:
* Create the `reactseeddb` database, `pg` user and grant access to database:
    * `yarn database:create`
* Create tables running migrations: 
    * `yarn migrate:latest`
* Populate database running the seeds: 
    * `yarn seed:run`


## Start the app

### Execute the express server

#### Development (with nodemon)

```bash
$ yarn dev # or (yarn run dev)
```

#### Production

```bash
$ yarn prod # build and start
```

Open browser on [localhost:3000](http://localhost:3000/)


## NPM Scripts

```bash
$ yarn build  # build production assets

$ yarn start  # execute production server

$ yarn test  # execute all tests

$ yarn lint # execute linting
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


## Development 

### Git Hooks (using `husky`)

In develop we use [git hooks](https://git-scm.com/docs/githooks) for automate linting and testing.

Using [husky](https://github.com/typicode/husky) with `yarn`:

```bash
$ yarn add husky --dev --force  # ensures hooks will be installed
```

Install hooks manually (using `node`):

```bash
$ node node_modules/husky/bin/install
```
