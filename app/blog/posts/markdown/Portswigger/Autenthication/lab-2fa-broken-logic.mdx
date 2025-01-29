https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic

Do the restoring account process with the given credentials, actually everything looks pretty different from a real website, but the deal is in the `/login2` endpoint, so look for the get login 2 and change the verify parameter to carlos, this will generate the security code
![[Pasted image 20241105234821.png]]
Then change the request this way: verify changed by carlos username and nfa-code will be FUZZ, then right clicked and copy to a file
![[Pasted image 20241105230709.png]]
By this ffuf:
```sh
ffuf -u https://0a660037044547959cb70ba40057002b.web-security-academy.net/login2 -request REQUEST.txt -w /usr/share/seclists/Fuzzing/4-digits-0000-9999.txt -replay-proxy http://127.0.0.1:8080 
```
Then filter in the HTTP history
![[Pasted image 20241105235806.png]]
And when it apper, right click `show response in browser` and paste that link on the browser