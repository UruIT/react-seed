# React Seed Api

## Dependencies installation
When adding new packages to the server, specify the modules folder:
```bash
yarn add winston --modules-folder ../node_modules
```

## Migrations

### Create migration file
```
yarn run migrate:make -- <migration_name>
```
Example: `yarn run migrate:make -- create_person_table`

### Execute migration
```
yarn run migrate:latest
```

### Rollback migration
```
yarn run migrate:rollback
```
