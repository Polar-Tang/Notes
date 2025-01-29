https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-bypass-authentication
So we will go to the registration page and we know that the post restration with post will be the vulnerable thing. so after try to send payloads as a crazy we will **go with what you know**, if the lab give us credential it's for something, so let's test 
```
{"username":"peter","password":{"$ne":"in"}}
```
And then will be logged, but if we do the same with admin we get an error say something is invalid, but was goog to go with what we already known, because know we can deduce that the problem is the username field and not the password. 
So let's send with the `$regex` method.
```
{"username":{"$regex":"admin.*"},"password":{"$ne":"in"}}
```
This way we could log in, rigth click, show in the browsers, paste the thing and it's done

## Exploiting syntax injection to extract data

In many NoSQL databases, some query operators or functions can run limited JavaScript code, such as MongoDB's `$where` operator and `mapReduce()` function. This means that, if a vulnerable application uses these operators or functions, the database may evaluate the JavaScript as part of the query. You may therefore be able to use JavaScript functions to extract data from the database.

### Exfiltrating data in MongoDB

Consider a vulnerable application that allows users to look up other registered usernames and displays their role. This triggers a request to the URL:

`https://insecure-website.com/user/lookup?username=admin`

This results in the following NoSQL query of the `users` collection:

`{"$where":"this.username == 'admin'"}`

As the query uses the `$where` operator, you can attempt to inject JavaScript functions into this query so that it returns sensitive data. For example, you could send the following payload:

`admin' && this.password[0] == 'a' || 'a'=='b`

This returns the first character of the user's password string, enabling you to extract the password character by character.

You could also use the JavaScript `match()` function to extract information. For example, the following payload enables you to identify whether the password contains digits:

`admin' && this.password.match(/\d/) || 'a'=='b`