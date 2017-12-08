# react-seed

[![Build Status](https://travis-ci.org/UruIT/react-seed.svg)](https://travis-ci.org/UruIT/react-seed?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/UruIT/react-seed/badge.svg)](https://coveralls.io/github/UruIT/react-seed)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2f466346b9804520bd466618053971d4)](https://www.codacy.com/app/matiasdelgado/react-seed?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=UruIT/react-seed&amp;utm_campaign=Badge_Grade)
[![DevDependencies](https://img.shields.io/david/dev/uruit/react-seed.svg)](https://david-dm.org/uruit/react-seed?type=dev)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/UruIT/react-seed/develop/LICENSE)
[![GitHub release](https://img.shields.io/github/release/uruit/react-seed.svg)](https://github.com/UruIT/react-seed/releases)
[![Twitter Follow](https://img.shields.io/twitter/follow/uruit.svg?style=social&label=Follow)](https://twitter.com/UruIT/followers)
[![Twitter URL](https://img.shields.io/twitter/url/http/uruit.react-seed.svg?style=social)](https://twitter.com/intent/tweet?text=react-seed%20by%20%40UruIT%20on&url=https%3A%2F%2Fgithub.com%2Furuit%2Freact-seed&hashtags=react,uruit,dev,seed)

UruIT seed project for ReactJS applications


## Stack

* Webpack
* ES6/7
* ESLint
* React 16
* Fetch
* React-Router
* Jest
* Sass
* Express
* Git hooks
* Plop


## Secondary features

* Redux
* Redux-Segment
* MongoDB
* MSSQL
* i18n
* PDF


## Seed Branches

```
master *
seed/
    ./redux
    ./mongo
    ./mssql
    ./redux-i18n
    ./i18n
    ./offline
```

### Coming up next

* server side rendering
* graphQL
* storybook
* bootstrap

## Structure

```
app
├── client
│   ├── components
│   │	└── home
│   ├── config
│   │	└── webpack
│   ├── routes
│   ├── styles
│   └── utils
├── docs
└── server
    ├── config
    ├── datastore 
    ├── exceptions
    ├── routes
    ├── services
    ├── tests
    └── utils
```

## Development

Restore all packages and start development server:

```bash
yarn
yarn dev
```

Open browser on [localhost:3000](http://localhost:3000/)


## Docs

* [Project setup info here](docs/setup.md)
* [Client Readme](client/README.md)
* [Server Readme](server/README.md)
* [VS Code](docs/vscode.md)

## Contributors

* [Arnold Gandarillas Castillo](https://github.com/arkgast)

## Authors

[<img alt="carloluis" src="https://avatars2.githubusercontent.com/u/6170808?v=4&s=117" width="117">](https://github.com/carloluis) |[<img alt="matiasdelgado" src="https://avatars0.githubusercontent.com/u/5489967?v=4&u=bf0d640f309481519a5052a116929917c2dba8a9&s=117" width="117">](https://github.com/matiasdelgado) |[<img alt="rrivem" src="https://avatars0.githubusercontent.com/u/3043009?v=4&s=117" width="117">](https://github.com/rrivem) |[<img alt="marina-acosta" src="https://avatars3.githubusercontent.com/u/19169042?v=4&s=117" width="117">](https://github.com/marina-acosta) |
:---: |:---: |:---: |:---: |
[carloluis](https://github.com/carloluis) |[matiasdelgado](https://github.com/matiasdelgado) |[rrivem](https://github.com/rrivem) |[marina-acosta](https://github.com/marina-acosta)

## License

Licensed under the MIT License, Copyright © 2017 [UruIT](https://twitter.com/UruIT).

See [LICENSE](./LICENSE) for more information.
