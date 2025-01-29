APIs have security controls to protect from attacks.
The web sites used to be securized against certain things such as:
- **Web Application Firewalls (WAFs)**: Scans for attack patterns in requests.
- **Input Validation**: Restricts certain inputs (e.g., only numbers or letters).
- **Rate Limits**: Prevents excessive requests from a single source.

The WAFs are a security liker that is present, and analyzing every single request, it look for common patterns from XSS and SQL to block it. If you are insanely sending request the waf will block you, as the restful apis arestatelis, it detects and indentify you based on things like 
- **IP address**.
- **Origin headers**.
- **Authorization tokens**.
- **Metadata** (patterns of requests, request rate, header combinations).
##### Detecting the WAF
So to avoid get blocked by the WAF, it's better to first use the API as it is intended to understand how the API works before getting in trouble, so read the documentation, make a collection of valir request in POSTMAN. 
Also you could use tool to detect and analyze the WAF, there are tools like **W3af, Wafw00f, Bypass WAF**, designed to probe for WAFs and can detect common WAF providers like Cloudflare, Imperva, and Akamai.
Also there's a script in nmap:
```
nmap -p 80 –script http-waf-detect http://hapihacker.com
```

##### Exploring the WAF

There are different ways to bypass the WAF
###### burned accounts
To avoid get you original account create multiple ones and test risky payloads on that ones. So Create disposable accounts with unique information and IP addresses (using proxies or VPNs). 
###### String terminators
Explore how the back-end interpret end-of-string characters to bypass input validation.
**For example** using null bytes (`%00` or `0x00`),  or any of the following character of the list:
```
%00
0x00
//
;
%
!
?
[]
%5B%5D
%09
%0a
%0b
%0c
%0e
```
This could be used in different part of the request to bypass de waff, for example the null bytes entered into the payload could bypass filtering rules that ban script tags:
```http
POST /api/v1/user/profile/update
--snip--
{
"uname": "<s%00cript>alert(1);</s%00cript>"
"email": "hapi@hacker.com"
}
```
###### Case switching
Bypass simple pattern-matching rules that only check for specific casing (e.g., lowercase or uppercase only). 
**For example**: `<ScRipT>alert('test')</ScRiPt>`
or SQL queries (`sElEcT * fRoM users`) to evade detection.

###### Encoding payloads
Encode certain payloads and the then the WAF normalizate it.
In general when encoding focus on the characters that may be blocked, such as
these:
`< > ( ) [ ] { } ; ' / \ |`
You could also encode the whole payload, `alert('test')` urlencoded `%61%6c%65%72%74(%27test%27)`
**HTML Encoding**: `<script>` as `&lt;script&gt;`
**Base64 Encoding**: Encodes the payload in a way that can be decoded server-side.

###### Burteforce in intruder
To bruteforce some invisible character is a littl bit tricky, we need to click the "Add" button under the "Payload Processing" heading. Select "Add suffix" and input an encoded value of “\n” (e.g. URL encoded: %0a). Add a second payload processing step to decode that value (e.g. in our case, URL-decode). It should behave as a new line character.

---------

To dive deeper into the topic of WAF bypassing, I recommend checking out
the incredible Awesome-WAF GitHub repo (https://github.com/0xInfection/
Awesome-WAF), where you’ll find a ton of great information.