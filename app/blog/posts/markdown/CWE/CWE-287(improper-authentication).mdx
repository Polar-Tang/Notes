https://cwe.mitre.org/data/definitions/287.html
##### Def:
A weakness that can lead to an access of resources or functionality to unintended actors

##### example
In this code define a cookie for login as administrator:

```perl
my $q = new CGI;

if ($q->cookie('loggedin') ne "true") {
if (! AuthenticateUser($q->param('username'), $q->param('password'))) {
ExitError("Error: you need to log in first");
}
else {
# Set loggedin and user cookies.
$q->cookie(
-name => 'loggedin',
-value => 'true'
);

$q->cookie(
-name => 'user',
-value => $q->param('username')
);
}
}

if ($q->cookie('user') eq "Administrator") {
DoAdministratorTasks();
}
```
and this cod could by bypassed with the following request
```http
GET /cgi-bin/vulnerable.cgi HTTP/1.1
Cookie: user=Administrator
Cookie: loggedin=true

[body of request]
```

##### Example2:
In january of 2009 an atacker could bruteforce the lack of rate limits [[cwe-236]] with a wordlist of common password and login as these users and do a fool messages
https://www.wired.com/2009/01/professed-twitt/