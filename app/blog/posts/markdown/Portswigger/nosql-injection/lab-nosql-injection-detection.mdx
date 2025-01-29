https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-detection
The web application make queries to the database and retrieve all that data from there.
So `/filter?category=Gifts` in the mongo db looks like (this means we will use **Syntax injection**)
```js
db.products.find({ category: "Gifts" })
```
#### See if it's vulnerable
We confirm it's vulnerable to No-SQLI by sendind by causing an error
![[Pasted image 20241027183410.png]]
with the following payload being prossesed by the DB 
```url
'%22%60%7b%0d%0a%3b%24Foo%7d%0d%0a%24Foo%20%5cxYZ%00
```
This cause an error wich is a strong indication that it is vulnerable, so we should detect what character cause the issue and if we send a single `'` we notice that this is causes the javascript error, because MongoDB treats everything inside `category` as a single input, so you need to include the string delimiters (`'`) to make it syntactically correct. So this will be a **Syntax Injection**
#### Solving the lab
So for this lab we need to bypass any category filtering, and retrieve all the data avaible. 
To do this we 'd craft a query that will always return true, according to this case the payload is:
```
'||1||'
```
but url encoded well look like this
```url
https://0a160099035c95ee807021b300c400cf.web-security-academy.net/filter?category=Gifts%27%7c%7c%31%7c%7c%27
```

This will cause the database to return **all products, including unreleased ones** and solve the lab.