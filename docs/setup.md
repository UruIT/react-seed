# React Seed - Setup 

## Install dependencies

Restore all packages

```bash
yarn # root folder
```


## Database

* Install [mongodb](https://www.mongodb.com/), and [robomongo](https://robomongo.org/) for db client
* Create new database called *reactseeddb*. Use following credentials: 
    * user: `postgres`
    * password: `Password.01`


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
yarn add husky --dev --force  # ensures hooks will be installed
```

Install hooks manually (using `node`):
```bash
node node_modules/husky/bin/install
```
