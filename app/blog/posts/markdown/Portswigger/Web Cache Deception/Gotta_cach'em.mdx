
The CDN are very popular and widely used for most of the websites, this define a cache to store some data of the application, thereby they are bringing information from the cache and not the back-end,  avoiding to overload the server. To do this the application use cache keys, which are unique identifiers that the server or caching system generates to store and retrieve cached content.

To determine what path to be cached exist a "cache rules" defined by the origin server, based on factors like headers, HTTP methods, and the cache path, which is the endpoint, with no including cache buster or any parameter, like the delimiters. So the RFC define certain special character with an special meaning, this may widely vary. This is why the CDN caches could in many cases be different from the origin server cache rules.
###### Simple example
There's a simple example made it by the ai, supposing i got /home, which is a cacheable endpoint, but `/home/index` isn't, so by url-encoding the slash, like: `/home%2Findex` cause index to be cached, because the front-end may ignore the "`%2f`", so he sees jus `/home` but the cache normalize it and see `/home/index`, in that case i got the same response that `/home/index`  but with the cache headers from `/home`.  This example is a fool example, because in the wild you probaly get a 404 not found, which is a lack of ambiguity that means the application is treating `/home%2Findex` as absolute path, anyway this example helps to understand WCD.

##### Delimiters
###### Semicolon in Spring
- Many frameworks have special delimiters in **Spring** which is a Java framework, the semicolon is used as a delimiter for matrix variables, for example you got an endpoint filtering by products `/products;color=red/size=medium`   which is practly the same that this in express: `/products?color=red&size=medium`
	**more examples**:
  
	**URL:** `/MyAccount;var1=val` → **Path:** /MyAccount  
  
	**URL:** `/hello;var=a/world;var1=b;var2=c` → **Path:** /hello/world
###### Dot in ruby rails
- The dot in ruby rails is for file extension but also is a delimiter, by default it's an html extension.

	**URL:** `/MyAccount.html` → **Path:** /MyAccount (default HTML view)  
  
	**URL:** `/MyAccount.css` → **Path:** /MyAccount (CSS view or error if not present)  
  
	**URL:** `/MyAccount.aaaa` → **Path:** /MyAccount (default HTML view)
###### Null encoded byte in OPenLiteSpeed
- Null encoded byte in **OpenLiteSpeed**: This HTTP server uses the null encoded byte as a classic delimiter to truncate the path.  
      
    **URL:** /MyAccount%00aaa → **Path:** /MyAccount
###### Newline encoded byte, in nginx
- `%0a` can sometimes be interpreted by certain servers (like Nginx) as a **path delimiter** or may alter the way the URL is parsed or rewritten.
	 **URL:** /users/MyAccount%0aaaa → **Path:** /account/MyAccount
	 
	When Nginx parses this path, the newline character might cause it to interpret `MyAccount` and `aaa` as separate segments, potentially affecting URL rewriting or request handling.

##### Detecting ORIGIN delimiters
1. Look for methods that aren't idempotent, such as post or put, and that have a `Cache-Control: no-store` or `Cache-Control: private` header. The response (R0) will be used to compare the behavior of interesting characters in the URL.
2. Use the same request (R1) and apend a random value, if the endpoint it's `/home` try `/homeabc`. If the response (R1) is the same as R0, repeat step 1 and 2 with a different endpoint.
3. Now use a delimiter between the path and the random sufix, now R1 `/homeabcd` becomes `/home$abcd`, as R2. Compare this response (R2) with the base one (R0).  
If the messages are identical, the character or string is used as a delimiter.

##### Detecting CACHE delimiters
Cache servers often don't use delimiters aside from the question mark. It's possible to test this using a static request and response:
1. Identify cacheable requests, by looking for header like X-Cache with hit value or even the etag
2. Send the same request with a URL path suffix followed by the possible delimiter and a random value.  
  
	GET `/static-endpoint<DELIMITER><Random>`
3. Compare the response with R0. If the messages are identical, the character or string is used as a delimiter.
The origin server and the cache system, both, try to mapping the url. This process start by locating the delimiters to determine where the pathname start and where it ends. And after extracting it it’s normalized, which means decoding certain characters and also resolve the dot segment ((`/.`) for the parent directory and (`/..`) for the grandpa directory). So exist an issue here, because certain HTTP server and proxies do not follow this order and decoded the delimiters before interpreting, _This means that the same URL will have a different meaning in the most popular CDNs and origin servers even without any custom configuration._ these are:

Nginx, Node, CloudFlare, CloudFront and Google Cloud

Other proxys may decoded the value and send the decoded value to the backend, so a quiestion mark is url-encoded by the proxy

"/myAccount%3Fparam" → "/myAccount?param”

Also there are another decoding, but most of them are not used by default, CDNs like CloudFlare or CloudFront allow customize this.

## Detecting decoding behaviour

To test if a character is being decoded, compare a base request with its encoded version. For example:

/home/index → /%68%6f%6d%65%2f%69%6e%64%65%78

If the request are the same, and the x-cache didn’t change, it continues as HIT, it means that the origin server decodes the path before using it

## **Dot-segment normalization**

RFC defines the behaviour to dive in the path of the URL, by using the dots, if you positionate in whatever son directory and add an slash dot you could dive into the parent directory

## **Detecting dot-segment normalization**

This technique could be used to exploit detect dot-segment normalization, you could use path traversal payloads, and then replace the dots in its url-encoded versions

To detect normalization in the origin server first find non-cacheable request or use a cachebuster, and use the pathtrasversal payloads

GET /home/index?cacheBuster

GET **/aaa/**../home/index?cacheBuster or GET **/aaa\..\**home/index?cacheBuster

If the first response is identical to the second response, this means that the origin server is normalizating before mapping. To detect this behaviour in a cacheable response, just do the sameand compare the X-Cache and Cache-Control headers to verify if the resource was obtained from the cache memory.

## **Normalization discrepancies**

This table illustrate how different HTTP server and proxies normalize the path `/hello/..%2fworld.``some of them normalize to` /world`, while other do not normalize it at all

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/0072480d-e3fe-4294-82f9-c193b7a9838e/image.png)

So let’s combine the proxy and http server that have discord

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/f4db02e7-3fbc-409c-b71b-64699d0d39ab/image.png)

And also is possible by the oposite

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/bdd63905-8898-4c1a-a0e5-a9a7b4a8fcd7/image.png)

IIS is the only one normalizing the backslash

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/45fa9e4c-774a-461c-adbb-00d2587c591c/image.png)

## **Arbitrary Web Cache Deception**

Some limitations is that we should submit the link to the victim a the victim will use it through the browser, which normalize the url, so we need to use safer characters

Some proxies store the thing as static assuming its file extension, so consider the following list, that clourflare considare to be static:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/c63d7e89-99c8-48fe-8028-5536a763e5b8/image.png)

When a character is used as a delimiter by the origin server but not the cache, it's possible to include an arbitrary suffix to trigger a cache rule and store any sensitive response.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/75322ef4-c80a-4c77-929c-89fa4d16e77c/image.png)

You could also do the same with the decode character, which could works nice if the origin server it’s normalizing before parsing, or if the proxy is rewriting the url before forwardint it.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/9d3d0c64-9930-4fb5-92eb-8a7f1c84c3c2/image.png)

To avoid issues you could also decode the hashtag characters

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/428f6bf6-f28a-4c85-ab17-23b1756cddb1/image.png)

## **Static directories**

### **Exploiting static directories with delimiters**

A common behaviour in many cdns is to store all the directories which comin from static ones, common examples are

- /static
- /assets
- /wp-content
- /media
- /templates
- /public
- /shared

I understand "Exploiting static directories with delimiters" because as the origin server use a delimiter in a private endpoint, for example `/myAccount`, they just ignore the delimiter, but the cache doesn't and he normalize the path and then apply the cache rule, so `/myAccount$/../static/any` means /myAccount for the origin server, so that's the response i got, but the cache didn't ingore all after the delimiter so it becomes `/myAccount/../static` so it normalize to `/static` and after then he applies the cache rule and the response got cached, that i get it

If a character is used as delimiter by the origin server but not by the caching and the cache normalize the path before aplying the rule, you could find a path traversal

GET /<Dynamic_Resource><Delimiter><Encoded_Dot_Segment><Static_Directory>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/1316fd73-c216-4287-827d-d0dc7489c806/image.png)

In this example the dolar symbol is used by the origin server as a delimiter, and then the cache normalize it as dive into the parent directory and then static, and then it apply the cache rules.

It's important to encode the dot-segment. Otherwise the victim’s browser will resolve it and won't forward the original malicious path.

Amazon CloudFront, Microsoft Azure, and Imperva normalize the path before evaluating the cache rules by default.

### **Exploiting static directories with normalization**

When the origin server normalizes the path before mapping the endpoint and the cache doesn't normalize the path before evaluating the cache rules, you could add a directory path trasversal

GET /<Static_Directory><Encoded_Dot_Segment><Dynamic_Resource>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/a6c7883a-6167-487f-be0e-0d21c9b10d1b/image.png)

Here the origin server first normalize to my account, but the cache is not normalizing the the path, so applies the cache rules and make cacheable because it’s static directory this behaviour it’s in Nginx, Microsoft IIS and OpenLiteSpeed, it is possible to exploit any static directory rule.

Another interesting behaviour it’s whne you combine Microsoft IIS with a web cache that doesn’t convert backslashes

### static files

Some static files are expected to be static like /robots.txt, /favicon.ico, and /index.html

# Detect key normalization

To detect key normalization send a path in the request partially urlencoded, as the follows:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/20d2b3b2-4c9f-48a9-8dfd-aeeb8bbbc975/image.png)

This behaviour it’s by default in imperva, azure and partially in akamai, also it’s configurable in cloudlfare, google cloud, GPC and fastly. So by using something like an XSS reflected we could combine it with the delimiter

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/d1d2ca89-997e-4333-9c53-f6f4f281c17f/image.png)

FRAGMENT

Usually the fragment is just ignored by the browser, so if u send it to the victim it wouldn’t be possible, depending on the cdn it may vary

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/611b8153-dc32-4ff5-afa3-2ae8ebd55778/image.png)

There are many dissents about the hash as a dalimiter, the inresting thing is in imperva becuase they are normalizing the key

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/e518750f-41e8-46a8-be34-a575d91a6bec/image.png)

## CACHE-WHAT-WHERE

The open redirect critical, it’s a redirect control by whatever header, which is not by itself a vulnerabillity. But supposed we could use a delimiter

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/a34d1c36-a240-4f3c-8f82-d8b69864f7e3/image.png)

so we control the logout with that header, using a cacheable endpoint

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/b8bd52de-3b7d-48b1-8776-8ade69660a25/image.png)

which is normalized

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e9cf9b3c-cf07-4efc-aa5c-840fe610a999/2fb58df5-4b00-4226-a5be-e2cadcdeb32e/image.png)

so we poison the main js