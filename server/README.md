# React Seed Server

## Dependencies

Add new packages to the `server` sub-project:

```bash
yarn add <package>
```

## Migrations

### Create migration script
```bash
yarn run migrate:make -- <migration_name>
```
Example: 
`yarn run migrate:make -- create_person_table`

### Execute migration
```bash
yarn run migrate:latest
```

### Rollback migration
```bash
yarn run migrate:rollback
```

## Seeds

### Create seed script
```bash
yarn run seed:make
```

### Execute seed
```bash
yarn run seed:run
```

## Tools and Config.

* [PostgreSQL](https://www.postgresql.org/)
* [pgAdmin](https://www.pgadmin.org/)

### [Setup info here](../docs/setup.md)
