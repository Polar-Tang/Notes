I was doing the SQLI labs and i after certain point i don't understand anything, if you don't want to do a scripty kiddie who always use SQLmap let's explore the basic things of SQL. 

-----
### What is SQL
SQL (Structure Query Language), also abbreviated as sequel, it's a popular laguage for comunicating with **relational database management systems (RDBMS)** like **MySQL**, **PostgreSQL**, **Oracle**, and **Microsoft SQL Server**, and these apply variations in SQL syntax, functions, and features. 

A relational database is the most common type of database. It uses a schema, a template, to dictate the data structure stored in the database.

|**Feature**|**Description**|
|---|---|
|`Concurrency`|A real-world application might have multiple users interacting with it simultaneously. A DBMS makes sure that these concurrent interactions succeed without corrupting or losing any data.|
|`Consistency`|With so many concurrent interactions, the DBMS needs to ensure that the data remains consistent and valid throughout the database.|
|`Security`|DBMS provides fine-grained security controls through user authentication and permissions. This will prevent unauthorized viewing or editing of sensitive data.|
|`Reliability`|It is easy to backup databases and rolls them back to a previous state in case of data loss or a breach.|
|`Structured Query Language`|SQL simplifies user interaction with the database with an intuitive syntax supporting various operations.|
![[Pasted image 20241109100001.png]]
Tier I is the application web, the GUI interface. Second tier are the api calls, the requests, and finally the query is processed by the DMBS
### DBMS
It organizes data into tables, something like an Excel spreadsheet, so columns contains data, atributes  or types of data and each row represent and individual record or data point with a unique identifier for each row in a table. So we got a list of basketball players, and this is the *players* table:
![[Pasted image 20241107215546.png]]
#### Foreign keys
Now imagine we want one of the basketball players to be included in a table of teams. We can establish a relationship between data points in one table pointing to the primary key in another table, linking related data. So store the primary key 5 (Kevin duran) is storing in the team table as a foreign key.
![[Pasted image 20241107220012.png]]
By doing that, the players table have a unique key, but the teams player have many keys.

So we could to save the primary key as a foreign key, just as the following example
![[Pasted image 20241109102914.png]]
In spite of the relational data base, we have the NoSQL databases that don't use key, and aren't tables neither, they use JSON or XML as structure, because they are less structured are more flexible, and support lot of more data than SQL
Most of the foreign key explanation is a summary of https://www.youtube.com/watch?v=zsjvFFKOm3c

### Starting with SQL (MySQL as RDBMS)
##### Initialazing
To start with using MySQL/MariaDB database, we will utilize the `-u` flag, used to supply the username and the `-p` flag for the password.
```sh
mysql -u root -p

Enter password: <password>
...SNIP...
```
It's also possible to use the password in the command. Also we could specify the port (By default it will use the 80)
```sh
mysql -u root -h docker.hackthebox.eu -P 3306 -p<PASSWORD>
```
If you are on windows you should use XAMP, and PHPMyadmin
![[Pasted image 20241109110128.png]]
##### Doing things
Once we are in the interactive console we could creat a database with `CREATE DATABASE` following by the name we want to
```MySQL
CREATE DATABASE users;
```
Now list the DBS with `show tables`
```MySQL
mysql> SHOW DATABASES;

+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| users              |
+--------------------+

mysql> USE users;

Database changed
```
A table is composed of rows and columns, and the interception of that rows and columns are called `cell`. Now to specify the cells and the number of cells let's create within a parenthesis and specifying the [data type](https://dev.mysql.com/doc/refman/8.0/en/data-types.html) of each column
```sql
CREATE TABLE logins (
    id INT,
    username VARCHAR(100),
    password VARCHAR(100),
    date_of_joining DATETIME
    );
```
And if we want to see the table that we created we could use `DESCRIBE`
```MYSQL
mysql> DESCRIBE logins;

+-----------------+--------------+
| Field           | Type         |
+-----------------+--------------+
| id              | int          |
| username        | varchar(100) |
| password        | varchar(100) |
| date_of_joining | date         |
+-----------------+--------------+
4 rows in set (0.00 sec)
```
TO not set the id manually in every row we use the following query:
```sql
 id INT NOT NULL AUTO_INCREMENT,
```
Not null ensure us to this always have a value, also we can use UNIQUE to guarantee  it never repeats. 
```sql
username VARCHAR(100) UNIQUE NOT NULL,
```
Now for our date time we will use `DEFAULT` keyword to use an alternative
```sql
date_of_joining DATETIME DEFAULT NOW(),
```
And one of the most important thing is to make the primary key
```sql
PRIMARY KEY (id)
```
Now refine our creation of the table:
```sql
CREATE TABLE logins (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    date_of_joining DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
    );
```

#### Final exercise of the module
For the final part of the module you should to connect to a table as the user root with the password "password", a little but significance detail i didn't notice is that the password name shoul be without spacing to the flag

```sh
mysql -u root -h 94.237.60.154 -P 30453 -ppassword
```

#### INSERT statement
**insert** keyword is used to add some kind o f data to a table
```sql
INSERT INTO table_name VALUES (column1_value, column2_value, column3_value, ...);
```
for example, in MySQL:
```mysql
mysql> INSERT INTO logins VALUES(1, 'admin', 'p@ssw0rd', '2020-07-02');

Query OK, 1 row affected (0.00 sec)
```
And we could also use `INTO` to specify the colummn and `VALUES` for 
```sql
INSERT INTO table_name(column2, column3, ...) VALUES (column2_value, column3_value, ...);
```
Use the example a login table:
```mysql
mysql> INSERT INTO logins(username, password) VALUES('administrator', 'adm1n_p@ss');

Query OK, 1 row affected (0.00 sec)
```
Or insetr multiple records at the time:
```mysql
mysql> INSERT INTO logins(username, password) VALUES ('john', 'john123!'), ('tom', 'tom123!');

Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
```
#### SELECT Statement
No to read the data we could use the `SELECT` statement
```sql
SELECT * FROM table_name;
```
The asterisk symbol (*) acts as a wildcard and selects all the columns. The `FROM` keyword is used to denote the table to select from. It is possible to view data present in specific columns as well:

```sql
SELECT column1, column2 FROM table_name;
```
So to view all tables use  the following commands like this
```mysql
mysql> SELECT * FROM logins;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  3 | john          | john123!   | 2020-07-02 11:47:16 |
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
4 rows in set (0.00 sec)


mysql> SELECT username,password FROM logins;

+---------------+------------+
| username      | password   |
+---------------+------------+
| admin         | p@ssw0rd   |
| administrator | adm1n_p@ss |
| john          | john123!   |
| tom           | tom123!    |
+---------------+------------+
4 rows in set (0.00 sec)
```

#### DROP statement
To complete eliminate an entire table use the `DROP` keyword
```mysql
mysql> DROP TABLE logins;

Query OK, 0 rows affected (0.01 sec)


mysql> SHOW TABLES;

Empty set (0.00 sec)
```
#### ALTER statement
So to update a table we use the `ALTER`, complementing with the `ÀDD` keyword, and here we add a new column to the existing table
```mysql
mysql> ALTER TABLE logins ADD newColumn INT;

Query OK, 0 rows affected (0.01 sec)
```
the keword may vary assuming what we want to do, to change the name of the table here's a example
```mysql
mysql> ALTER TABLE logins RENAME COLUMN newColumn TO oldColumn;

Query OK, 0 rows affected (0.01 sec)
```
But to modify some of the values we must use the MODIFY keword
```mysql
mysql> ALTER TABLE logins RENAME COLUMN newColumn TO oldColumn;

Query OK, 0 rows affected (0.01 sec)
```
And to drop an specific column, we combine those statements
```mysql
mysql> ALTER TABLE logins DROP oldColumn;

Query OK, 0 rows affected (0.01 sec)
```
#### UPDATE statement
But to change properties of the columns is better `UPDATE` statements
```sql
UPDATE table_name SET column1=newvalue1, column2=newvalue2, ... WHERE <condition>;
```
`UPDATE` could better to update some values, names, in some cases where we need to do change more generally, for example change a value that satisfy ceratin condition, as the example below:
```mysql
mysql> UPDATE logins SET password = 'change_password' WHERE id > 1;

Query OK, 3 rows affected (0.00 sec)
Rows matched: 3  Changed: 3  Warnings: 0


mysql> SELECT * FROM logins;

+----+---------------+-----------------+---------------------+
| id | username      | password        | date_of_joining     |
+----+---------------+-----------------+---------------------+
|  1 | admin         | p@ssw0rd        | 2020-07-02 00:00:00 |
|  2 | administrator | change_password | 2020-07-02 11:30:50 |
|  3 | john          | change_password | 2020-07-02 11:47:16 |
|  4 | tom           | change_password | 2020-07-02 11:47:16 |
+----+---------------+-----------------+---------------------+
4 rows in set (0.00 sec)
```
 
 #### Module excercie
 First let's select the DB employees
 : In most database schemas, each department in a `departments` table is assigned a unique identifier—often named something like `dept_no`.
```mysql
MariaDB [(none)]> USE employees;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [employees]> show tables;
+----------------------+
| Tables_in_employees  |
+----------------------+
| current_dept_emp     |
| departments          |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employees            |
| salaries             |
| titles               |
+----------------------+
8 rows in set (0.086 sec)

MariaDB [employees]> SELECT dept_no
    -> FROM departments
    -> WHERE dept_name = 'Development';
+---------+
| dept_no |
+---------+
| d005    |
+---------+
```
#### ORDER BY
With `ORDER BY` we specify the columns to order by
```mysql
mysql> SELECT * FROM logins ORDER BY password;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  3 | john          | john123!   | 2020-07-02 11:47:16 |
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
4 rows in set (0.00 sec)
```
And we could specify the order to be descending instead of ascending
```mysql
mysql> SELECT * FROM logins ORDER BY password DESC;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  3 | john          | john123!   | 2020-07-02 11:47:16 |
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
+----+---------------+------------+---------------------+
4 rows in set (0.00 sec)
```
To specify 
```mysql
mysql> SELECT * FROM logins ORDER BY password DESC, id ASC;

+----+---------------+-----------------+---------------------+
| id | username      | password        | date_of_joining     |
+----+---------------+-----------------+---------------------+
|  1 | admin         | p@ssw0rd        | 2020-07-02 00:00:00 |
|  2 | administrator | change_password | 2020-07-02 11:30:50 |
|  3 | john          | change_password | 2020-07-02 11:47:16 |
|  4 | tom           | change_password | 2020-07-02 11:50:20 |
+----+---------------+-----------------+---------------------+
4 rows in set (0.00 sec)
```
We `LIMIT` to retrieve until certain part
```mysql
mysql> SELECT * FROM logins LIMIT 2;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
+----+---------------+------------+---------------------+
2 rows in set (0.00 sec)
```

```sql
mysql> SELECT * FROM logins LIMIT 1, 2;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  3 | john          | john123!   | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
2 rows in set (0.00 sec)
```

#### WHERE Clause

```sql
SELECT * FROM table_name WHERE <condition>;
```

And the query returns all the giving conditions:
```sql
mysql> SELECT * FROM logins WHERE id > 1;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  3 | john          | john123!   | 2020-07-02 11:47:16 |
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
3 rows in set (0.00 sec)
```
And now we know the username we could be more specif
```sql
mysql> SELECT * FROM logins where username = 'admin';

+----+----------+----------+---------------------+
| id | username | password | date_of_joining     |
+----+----------+----------+---------------------+
|  1 | admin    | p@ssw0rd | 2020-07-02 00:00:00 |
+----+----------+----------+---------------------+
1 row in set (0.00 sec)
```

#### LIKE Clause
But if we're not sure about the specific name we could use regex with the `LIKE` clause
```sql
mysql> SELECT * FROM logins WHERE username LIKE 'admin%';

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  4 | administrator | adm1n_p@ss | 2020-07-02 15:19:02 |
+----+---------------+------------+---------------------+
2 rows in set (0.00 sec)
```
The `%` symbol acts as a wildcard and matches all characters after `admin`. It is used to match zero or more characters. Similarly, the `_` symbol is used to match exactly one character. The below query matches all usernames with exactly three characters in them, which in this case was `tom`:
```mysql
mysql> SELECT * FROM logins WHERE username like '___';

+----+----------+----------+---------------------+
| id | username | password | date_of_joining     |
+----+----------+----------+---------------------+
|  3 | tom      | tom123!  | 2020-07-02 15:18:56 |
+----+----------+----------+---------------------+
1 row in set (0.01 sec)
```

#### module exercise
we select the COLUM FROM a TABLE, and in the from we specify the database
```sql
SELECT last_name
FROM employees
WHERE first_name LIKE 'Bar%'
AND hire_date = '1990-01-01';
```
### SQL operators

```sql
condition1 AND condition2
```

```sql
mysql> SELECT 1 = 1 AND 'test' = 'test';

+---------------------------+
| 1 = 1 AND 'test' = 'test' |
+---------------------------+
|                         1 |
+---------------------------+
1 row in set (0.00 sec)

mysql> SELECT 1 = 1 AND 'test' = 'abc';

+--------------------------+
| 1 = 1 AND 'test' = 'abc' |
+--------------------------+
|                        0 |
+--------------------------+
1 row in set (0.00 sec)
```

```mysql
mysql> SELECT 1 = 1 OR 'test' = 'abc';

+-------------------------+
| 1 = 1 OR 'test' = 'abc' |
+-------------------------+
|                       1 |
+-------------------------+
1 row in set (0.00 sec)

mysql> SELECT 1 = 2 OR 'test' = 'abc';

+-------------------------+
| 1 = 2 OR 'test' = 'abc' |
+-------------------------+
|                       0 |
+-------------------------+
1 row in set (0.00 sec)
```
The `NOT` operator simply toggles a `boolean` value 'i.e. `true` is converted to `false` and vice versa':

#### NOT

```mysql
mysql> SELECT NOT 1 = 1;

+-----------+
| NOT 1 = 1 |
+-----------+
|         0 |
+-----------+
1 row in set (0.00 sec)

mysql> SELECT NOT 1 = 2;

+-----------+
| NOT 1 = 2 |
+-----------+
|         1 |
+-----------+
1 row in set (0.00 sec)
```
The `AND`, `OR` and `NOT` operators can also be represented as `&&`, `||` and `!`, respectively. The below are the same previous examples, by using the symbol operators:

#### Symbol operators

- Division (`/`), Multiplication (`*`), and Modulus (`%`)
- Addition (`+`) and subtraction (`-`)
- Comparison (`=`, `>`, `<`, `<=`, `>=`, `!=`, `LIKE`)
- NOT (`!`)
- AND (`&&`)
- OR (`||`)

```mysql
mysql> SELECT 1 = 1 && 'test' = 'abc';

+-------------------------+
| 1 = 1 && 'test' = 'abc' |
+-------------------------+
|                       0 |
+-------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> SELECT 1 = 1 || 'test' = 'abc';

+-------------------------+
| 1 = 1 || 'test' = 'abc' |
+-------------------------+
|                       1 |
+-------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> SELECT 1 != 1;

+--------+
| 1 != 1 |
+--------+
|      0 |
+--------+
1 row in set (0.00 sec)
```

Now to select all the user which aren't john
```mysql
mysql> SELECT * FROM logins WHERE username != 'john';

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  1 | admin         | p@ssw0rd   | 2020-07-02 00:00:00 |
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
3 rows in set (0.00 sec)
```
use and to add some extra conditions
```mysql
mysql> SELECT * FROM logins WHERE username != 'john' AND id > 1;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  2 | administrator | adm1n_p@ss | 2020-07-02 11:30:50 |
|  4 | tom           | tom123!    | 2020-07-02 11:47:16 |
+----+---------------+------------+---------------------+
2 rows in set (0.00 sec)
```
#### Example 
Besides e could use another mathematics operations
```sql
SELECT * FROM logins WHERE username != 'tom' AND id > 3 - 2;
```
```sql
SELECT * FROM logins WHERE username != 'tom' AND id > 1;
```
And to return all records where username is not `tom`, and all records where the `id` is greater than 1, and then apply `AND` to return all records with both of these conditions:
```shell-session
mysql> select * from logins where username != 'tom' AND id > 3 - 2;

+----+---------------+------------+---------------------+
| id | username      | password   | date_of_joining     |
+----+---------------+------------+---------------------+
|  2 | administrator | adm1n_p@ss | 2020-07-03 12:03:53 |
|  3 | john          | john123!   | 2020-07-03 12:03:57 |
+----+---------------+------------+---------------------+
2 rows in set (0.00 sec)
```

#### Module exercise
see the propertings inside titles table
```sql
DESCRIBE titles;
```


```
mysql -u root -h 94.237.59.119 -P 45906 -ppassword
```
To solve that damn exercise just ignore the other thing of the or condition
```sql
SELECT emp_no
FROM employees
WHERE emp_no > 10000;
```
But anyway to apply both conditions is necessary to join employes table with the titles table, which is something that the module don't tell how to do it, and never mention either:
```sql
SELECT e.emp_no
FROM employees e
JOIN titles t ON e.emp_no = t.emp_no
WHERE e.emp_no > 10000
   OR t.title NOT LIKE '%engineer%';
```
