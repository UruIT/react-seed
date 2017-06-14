# react-seed

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/UruIT/react-seed/develop/LICENSE)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/UruIT/react-seed.svg)](https://github.com/UruIT/react-seed/pulls)

UruIT seed project for ReactJS applications


## Frameworks/technologies

* Webpack
* ES6/7
* ESLint
* React
* Fetch
* React-Router
* Jest
* Sass
* Express

<details>

### Git Hooks (using `husky`)

Using [husky](https://github.com/typicode/husky) with `yarn`:

```bash
yarn add husky --dev --force  # ensures hooks will be installed
```

Install hooks manually (using `node`):
```bash
node node_modules/husky/bin/install
```

### Formatter (JS)

We encourage the use of [prettier](https://github.com/prettier/prettier) in your editor for consistent code style.

In Visual Studio Code, we use these user settings for `prettier`

```javascript
{
    "prettier.printWidth": 80,
    "prettier.jsxBracketSameLine": false,
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "prettier.useTabs": true,
    "prettier.tabWidth": 4
}
```

</details>


## Secondary features

* Bootstrap
* Redux
    * redux-router
    * redux-thunk
    * saga
    * redux-mock-store
* TravisCI integration
* Storybook
* SSR

## Seed Branches

```
master
seed/
    ./redux
    ./mongo
    ./server-side-rendering
    ./storybook
    ./bootstrap
```

## Development

Restore all packages and start development server:

```bash
yarn
yarn run dev
```

Open browser on [localhost:3000](http://localhost:3000/)


## Docs

* ### [Project setup info here](docs/setup.md)
* ### [Client Readme](client/README.md)
* ### [Server Readme](server/README.md)
