### What it is
Mass Assignment attack is when a user is able to send a request that overwrites server-side variables, if an api accept user input without sanitazing it, an attacker might be able to change things that he's not supposed to access to. >
### Look for
One of the most common scenearios where exploit this is where the request process and accepts the user input. That's why is very common in the registration process: the end user would fill in standard fields with information such as their desired username, email address, phone number, and account password.
For example if i got this request when i create an account
```http
POST /api/v1/register
--snip--
{
"username":"hAPI_hacker",
"email":"hapi@hacker.com",
"password":"Password1!"
}
```
And i could upgrade it to an admin account as a Mass Assignment attack:
```http
POST /api/v1/register
--snip--
{
"username":"hAPI_hacker",
"email":"hapi@hacker.com",
"admin": true,
"password":"Password1!"
}
```
Another example is to gain unauthorized access to other organizations, in this example you got a "org" propertie that it could allow you to access company secrets
```HTTP
POST /api/v1/register
--snip--
{
"username":"hAPI_hacker",
"email":"hapi@hacker.com",
"org": "§CompanyA§",
"password":"Password1!"
}
```
##### Remember to
Do not only test for Mass Assignment on the registration panel. Test other endpoints used for resetting passwords; updating account, group, or company profiles; and any other plays where you may be able to assign yourself additional access.

------
### How to find it
So at this point we might say "*mass assignment atack it's all about api parameters*", but this parameters my be inconsistent, which it mean **variability in parameter usage may differ across different API endpoints**.
	For example, a user creation endpoint might use `isAdmin`, while a user update endpoint uses `adminStatus` for the same functionality.
#### Fuzzing parametes
As the parameters assuming certain endpoint may change, we'll need to intercept many different endpoints as we can, **for example** you find this 
```http
POST /create/user
--snip--
{
"username": "hapi_hacker"
"pass": "ff7ftw",
"uam": 1,
"mfa": true,
"account": 101
}
```
When you don’t understand the purpose of a certain parameter, it’s time to put on your lab coat and experiment. Try fuzzing by setting uam to zero, mfa to false, and account to every number between 0 and 101, and then watch how the provider responds.

##### Blind Mass Assignment Attack
If we're not able to find those parameter then we could check much differents parameter at once, any vulnerable target will discard the parameters that it doesn't use so we will check for that is causing an anomolous response
```http
POST /api/v1/register
--snip--
{
"username":"hAPI_hacker",
"email":"hapi@hacker.com",
"admin": true,
"admin":1,
"isadmin": true,
"role":"admin",
"role":"administrator",
"user_priv": "admin",
"password":"Password1!"
}
```
##### Scaning for parameters
Arjun is an automated tool that send a tons of request and based on deviations of response lengths and response codes will be discarding parameters until keep ones. As the request are too much requests remember that if you run into issues with all of that rate limiting thing, you can use the Arjun `—stable` option to slow down the scans
```sh
arjun --headers "Content-Type: application/json]" -u http://vulnhost.com/api/register -m JSON --include='{$arjun$}'
```
*-u* it's for de URL
*-m* specifies the format from the request
*--include* identified the exact attack spot that Arjun should test with `$arjun$`
If you got repsonses as the 400 range, such as 400 Bad Request, 401 Unauthorized, or 413 Payload
Too Large

------

#### BFLA and Mass Assignment Attack
Let's see the following **example**:
Ash finds this endpoint `/api/v1/account/update` which allows him to update users accounts, after exlpore harder he notices that other endpoints have parameters such as `email` and `mfa` (multifactor authentication). So:
- Ash crafts a request using the `PUT /api/v1/account/update` endpoint to:
	- Change Brock’s email address to his own (`ash@email.com`).
	- Disable MFA (`"mfa": false`), making the account easier to access without two-factor verification.
	- By changing the email from an account, the damned ash also could use the `/api/v1/account/reset` to reset the password by sending an mail to the email that he has changed

-----
### Summary
If thre's an unsanitized endpoint, which allows you to update sensitive data you have find a serious case