### Fuzzing
The key ffrom fuzzing is to cause some anomalies on the api, **for example** using a string id as a parameter and getting this response:
```
HTTP/1.1 400 Bad Request
{
"error": "number required"
}
```
so you can deduce that the developers configured the API to properly handle requests like yours and prepared a tailored response.
When input is not handled properly and causes an error, the server will
often return that error in the response. For example, if you sent input like
~'!@#$%^&*()-_+ to an endpoint that improperly handles it, you could receive
an error like this:
```
HTTP/1.1 200 OK
--snip--

SQL Error: There is an error in your SQL syntax.
```
So this reveals that the backend is utilizing SQL DATABASE ON THE INPUT
##### Fuzzing millions
SO you will fuzzing through lotta request nad if every request have a pattern , then you could use a base line to identify what responses you wnat to disscard. if you issue 100 API requests and 98 of those result in an HTTP 200
response code with a similar response size, you can consider those requests to
be your baseline. And then you could isolate the anomalous responses and examine its response size
**Sending the wfuzz request to Burpsuite**
To send the request to Burpsuite you can use this prototype
```
wfuzz -z file,/home/hapihacker/big-list-of-naughty-strings.txt -H "Content-Type: application/
json" -H "x-access-token: [...]" -p 127.0.0.1:8080 --hc 400 -X PUT -d "{
\"user\": \"FUZZ\",
\"pass\": \"FUZZ\",
\"id\": \"FUZZ\",
\"name\": \"FUZZ\",
\"is_admin\": \"FUZZ\",
\"account_balance\": \"FUZZ\"
}" -u http://192.168.195.132:8090/api/user/edit_info
```

##### Fuzzing mails
It's always worth to **fuzz for an unexpected value**, when you were fuzzing an email an every request get an "invalid name" response try to fuzz the value after a valid email:
```
"user": "hapi@hacker.com§test§"
```
If you receive the same response (“not a valid email”), it is likely time to
try a different payload or move on to a different field.