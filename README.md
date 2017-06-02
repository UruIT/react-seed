# react-seed

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/UruIT/react-seed/develop/LICENSE)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/UruIT/react-seed.svg)](https://github.com/UruIT/react-seed/pulls)

UruIT seed project for ReactJS applications

## Frameworks/technologies

* webpack 
* ES6/7
* ESLint
* React
* fetch
* React-Router
* Jest (with snapshots / enzyme)
* counter example (scss)
* git hooks (pre-commit)

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

</details>


## Formatter (JS)

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

## Secondary features (dev branches)

* Redux
    * redux-router
    * redux-thunk
    * saga
    * redux-mock-store
* Enzyme
* Server-side rendering
* Storybook
* TravisCI integration
* Bootstrap

## Seed Branch

```
master
seeds/
    ./redux
    ./server-side-rendering
    ./storybook
    ./travis
    ./bootstrap
```

## Development

Restore all packages (backend & frontend):

```bash
yarn install
```

Start development server:

```bash
yarn start
```

Open browser on [localhost:3000](http://localhost:3000/)


## Other Scripts

```bash
npm run build  # build assets for production

npm run prod  # start production server

npm run test  # run front-end tests

npm run lint # run linting
```
