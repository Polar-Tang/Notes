Sources:
- https://tryhackme.com/r/room/dnsindetail
- https://www.boot.dev/

----------

In the real world we use addresses to locate someplace and the IP address is just the same  


DNS is the "Domain Name System" in very simplified words, it turns an IP from an arbitrary string. 
DNS works with transport-layer protocols such as UDP (and sometimes TCP) on port 53.
DNS has different types of records:
##### A
resolve IPv4 addresses, for example 104.26.10.229

```sh
nslookup --type=A example.com
```
##### AAAA
resolve to IPv6 addresses, for example 2606:4700:20::681a:be5, 
##### CNAME
CNAME, which is a redirect but in the DNS layer

To see the CNAME:
```sh
nslookup --type=CNAME example.com
```

##### MX
MX handle the emails to send them to the correct email

To see the CNAME:
```sh
nslookup --type=CNAME example.com
```
##### TXT
txt, is a extra layer of security, which stores the email with the [SPF](https://www.cloudflare.com/es-es/learning/dns/dns-records/dns-spf-record/), which enumerate all the emails domains authorized to send emails, [DKIM](https://www.cloudflare.com/es-es/learning/dns/dns-records/dns-dkim-record/), that check each email to proceed from the domain it

To see the CNAME:
```sh
nslookup --type=TXT website.thm
```

## Domains
Let's talk about the segments from an url
![[Pasted image 20241031230541.png]]
### **Top-level domain**
TLD is the part that we can find in the righ-hand of the segment. It means "Top Level Domain" and that is call because it is in the higher hierarchy from the DNS protocol. There are two types of TLD, gTLD (Generic Top Level) and ccTLD (Country Code Top Level Domain). 
#### gTLD
to tell the user the domain name's purpose; for example, a .com would be for commercial purposes, .org for an organisation, .edu for education and .gov for government. 
Historically a gTLD was meant 
#### ccTLD
And a ccTLD was used for geographical purposes, for example, .ca for sites based in Canada, .co.uk for sites based in the United Kingdom and so on. Due to such demand, there is an influx of new gTLDs ranging from .online , .club , .website , .biz and so many more. For a full list of over 2000 TLDs [click here](https://data.iana.org/TLD/tlds-alpha-by-domain.txt).
### **Second-Level Domain**
the second-level domain is limited to 63 characters + the TLD and can only use a-z 0-9 and hyphens (cannot start or end with hyphens or have consecutive hyphens).

### Subdomain
 You can use multiple subdomains split with periods to create longer names, such as [jupiter.servers.tryhackme.com](http://jupiter.servers.tryhackme.com/). But the length must be kept to 253 characters or less. There is no limit to the number of subdomains you can create for your domain name.

### ISP
The ISP, **Internet Service Provider**, it's a DNS server used by our internet companies to communicate with other DNS servers, this has a cache, and **ISP** will be checking in his cache whether we have visited some domain on every DNS server available to him, this process it's called **Recursive DNS Server**. But there are different layer before, here are those layers in its respective order

### Root servers
There 13 sets of root server cluster on all the world, like Verisign, ICANN, and others.
**This works like this**: It check if you know the IP from a domain, if you have not visited, then the root server don't recognize it, but yes do with the TLD, (You haven't visited example.com as root server don't know it it redirects to  to the respective TLD server, which is `.com` in this case e.g)

### TLD Server
We know where to look for the TLD (the right hand part of the segment from a url, `.com`, `.org`, `.net` e.g) 
After the root server directs the request to a `.com` the TLD has records pointing to this domain

### Authoritative DNS Servers
The Authoritative DNS server holds all the records for a domain, they store the actual DNS record (e.g., `A` records, `MX` records, etc.), and provided with the final IP address or other information needed to resolve the domain

### Recursive DNS Server Caching
To optimize efficiency, the recursive DNS server caches the response based on its **Time To Live (TTL)** value. The cached record can then be quickly used to answer subsequent requests without querying the root and TLD servers again until the TTL expires.