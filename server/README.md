# React Seed Server


## Dependencies installation

Adding new packages to the server:

Development dependencies must be installed in project `root` folder:

```bash
cd ..
yarn add --save <package>
```

Only install in `server` production dependencies: 

```bash
yarn add <package>
```

## Migrations

### Create migration file
```
yarn run migrate:make -- <migration_name>
```
Example: 
`yarn run migrate:make -- create_person_table`

### Execute migration
```
yarn run migrate:latest
```

### Rollback migration
```
yarn run migrate:rollback
```

## Tools and Config.

* [PostgreSQL](https://www.postgresql.org/download/)
* [pgAdmin](https://www.pgadmin.org/)

Create a `ReactSeedDB` database with user `postgres` and password `Password.01`.
