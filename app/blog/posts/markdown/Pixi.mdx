Anything out of the ordinary should encourage you to thoroughly test the database. When you send an API authentication request, one possible response for an incorrect password is something like the following, which comes from the Pixi API collection: 
HTTP/1.1 202 Accepted X-Powered-By: Express Content-Type: application/json; charset=utf-8 {"message":"sorry pal, invalid login"} 
Note that a failed response includes a status code of 202 Accepted and includes a failed login message. Fuzzing the /api/login endpoint with certain symbols results in verbose error messaging. For example, the payload '"\;{} sent as the password parameter might cause the following 400 Bad Request message. 
```
HTTP/1.1 400 Bad Request 
X-Powered-By: Express 
--snip-- 
SyntaxError: Unexpected token ; in JSON at position 54 at JSON.parse (<anonymous>)  
[...] 
```
Unfortunately, the error messaging does not indicate anything about the database in use. However, this unique response does indicate that this request has an issue with handling certain types of user input, which could be an indication that it is potentially vulnerable to an injection attack. This is exactly the sort of response that should incite you to focus your testing. Since we have our list of NoSQL payloads, we can set the attack position to the password with our NoSQL strings:
```
POST /login HTTP/1.1 Host: 192.168.195.132:8000 --snip-- user=hapi%40hacker.com&pass=§Password1%21§
```
 Since we already have this request saved in our Pixi collection, let’s attempt our injection attack with Postman. Sending various requests with the NoSQL fuzzing payloads results in 202 Accepted responses, as seen with other bad password attempts in Figure 12-2. As you can see, the payloads with nested NoSQL commands {"$gt":""} and {"$ne":""} result in successful injection and authentication bypass.
 