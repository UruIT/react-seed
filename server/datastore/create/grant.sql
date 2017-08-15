USE reactseeddb

CREATE USER [mssql] FOR LOGIN mssql
EXEC sp_addrolemember N'db_owner', N'mssql'
