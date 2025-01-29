https://github.com/OWASP/crAPI
--------
**Machine name**: reqres.in
**Difficulty**: sperm (extremly easy)
**Vulnerability**: BOLA

### Recon
- Identify the web
	![[Pasted image 20241029190455.png]]
	As i deployed using docker it is running on local host
- Finding the API docs
	We look for the script tags and then we find a file
	![[Pasted image 20241029191150.png]]
	which is the api documentation
	![[Pasted image 20241029191403.png]]
	And this files has all the endpoint, all the API documentation

### Account
- Create an account
- Once you logged you recive a bearer token
	![[Pasted image 20241029193254.png]]
	let's set it as a environment variable
	![[Pasted image 20241029193439.png]]
	- Save it
	![[Pasted image 20241029193546.png]]
	Set it
	![[Pasted image 20241029193708.png]]
##### Exploit the JWT
- See the token on https://jwt.io/ , here the version is rs 256, unlike other versions
- download the public key:
  ```
  wget http://localhost:8888/.well-known/jwks.json 
	```

```
from cryptography.hazmat.backends import default_backend

from cryptography.hazmat.primitives import serialization

from cryptography.hazmat.primitives.asymmetric import rsa

import base64

  

# Copy values from your JSON here

e = "AQAB"

n = "sZKrGYja9S7BkO-waOcupoGY6BQjixJkg1Uitt278NbiCSnBRw5_cmfuWFFFPgRxabBZBJwJAujnQrlgTLXnRRItM9SRO884cEXn-s4Uc8qwk6pev63qb8no6aCVY0dFpthEGtOP-3KIJ2kx2i5HNzm8d7fG3ZswZrttDVbSSTy8UjPTOr4xVw1Yyh_GzGK9i_RYBWHftDsVfKrHcgGn1F_T6W0cgcnh4KFmbyOQ7dUy8Uc6Gu8JHeHJVt2vGcn50EDtUy2YN-UnZPjCSC7vYOfd5teUR_Bf4jg8GN6UnLbr_Et8HUnz9RFBLkPIf0NiY6iRjp9ooSDkml2OGql3ww"

  

# Decode the exponent and modulus from base64

e_bytes = int.from_bytes(base64.urlsafe_b64decode(e + "=="), "big")

n_bytes = int.from_bytes(base64.urlsafe_b64decode(n + "=="), "big")

  

# Create the public key

public_key = rsa.RSAPublicNumbers(e_bytes, n_bytes).public_key(default_backend())

  

# Convert to PEM format

pem = public_key.public_bytes(

encoding=serialization.Encoding.PEM,

format=serialization.PublicFormat.SubjectPublicKeyInfo

)

  

# Save to a PEM file

with open("public_key.pem", "wb") as pem_file:

pem_file.write(pem)

  

print("Public key saved to public_key.pem")
```

	
```
	sudo python3 jwt_tool.py <token> -C -d /usr/share/seclists/Passwords/scraped-JWT-secrets.txt -V -pk public_key.pem    
```
### Coments section (excesive data exposure)
- Intercept a comment as ti's intended
	![[Pasted image 20241029194155.png]]
- After sending also another request get caught in the red, an exesive data exposure, [[Information-disclosure]]
	![[Pasted image 20241029194829.png]]
### improper assets management
https://medium.com/@bajajfinservhealth_/harnessing-the-power-of-fuzz-testing-with-postman-for-robust-api-testing-3498cb1b1b82

## More comprehensive scans. More vulnerabilities identified. More time saved. Enhance your API scanning with Burp Suite.

  

As web portfolios have diversified, APIs have become an increasingly critical function of modern web applications. According to ESG’s [Securing the API Attack Surface report](https://research.esg-global.com/reportaction/515201654/Marketing), the vast majority of organizations report they now have an average of **26 APIs per application**.

  

Despite this, scanning APIs for vulnerabilities is often challenging, with many organizations reliant on workarounds. At best this solution is fiddly and time-consuming, and, at worst, leaves your application open to attacks, and affects your ability to scale testing.

  

> APIs are the biggest gap in our testing at the moment. We’ve done a small amount of scanning, but having a Burp API scan would be amazing. _A [Burp Suite Enterprise Edition](https://portswigger.net/burp/enterprise) customer_

We’ve been working to remedy this challenge by enhancing our existing [API scanning](https://portswigger.net/burp/vulnerability-scanner/api-security-testing) capability with enhanced built-in functionality designed for easy, scalable API scanning.

  

Our improved API scanning functionality allows users to:

- [Test for vulnerabilities without having to host definition files](https://portswigger.net/blog/unlock-enhanced-api-scanning-with-burp-suite#host-definition)
- [Easily identify any hosted APIs that have been left accessible to attackers](https://portswigger.net/blog/unlock-enhanced-api-scanning-with-burp-suite#hosted-apis)
- [Test a wider range of OpenAPI Specification (OAS) endpoints](https://portswigger.net/blog/unlock-enhanced-api-scanning-with-burp-suite#open-api)
- [Scan APIs that require endpoint authentication](https://portswigger.net/blog/unlock-enhanced-api-scanning-with-burp-suite#endpoint)

These features are now available for both Burp Suite Enterprise Edition and [Burp Suite Professional](https://portswigger.net/burp/pro) users.

## How were APIs scanned in Burp previously?

  

Users of Burp Suite have been able to [scan APIs for some time](https://portswigger.net/burp/documentation/scanner/api-scanning-reqs). However, up to now, API endpoints have been scanned as part of a wider web application crawl & audit.

  

This approach, however, raises a few challenges.

  

Firstly, **for pentesters**, this approach means you can’t target APIs specifically in your scans. As your portfolio of APIs increases, this task has gone from a quality-of-life issue to a major obstacle for effective workflows.  

For **AppSec teams**, scanning APIs as part of your wider web apps means you have to run a more thorough and time-consuming scan, reducing the ability to scale operations.

  

> As we look at modernizing web applications and moving towards everything as an API, all of the data is accessible behind that API. We're trying to step up our game in terms of proactive discovery of API-level vulnerabilities. _A Burp Suite Enterprise Edition customer_

  

Scanning APIs exclusively in this way is no longer fit for purpose. We needed a built-in solution to API scanning.

## Meet our improved API scanning features

We’ve released 4 API scanning features, allowing Burp users to scan their APIs alongside their web apps, and as a standalone too. These can be accessed in both Burp Suite Professional and Burp Suite Enterprise Edition:

### 1. Test for vulnerabilities without having to host definition files

You can now upload OAS definition files directly to Burp Suite. This update enables users to choose whether they want to provide an existing URL, or upload a file directly to Burp. That means quicker, hassle-free scanning, which can be easily scaled.

  

Read more about testing for vulnerabilities in [Burp Suite Enterprise Edition](https://portswigger.net/burp/documentation/enterprise/user-guide/working-with-sites/add-new-sites/add-new-apis).

Read more about testing for vulnerabilities in [Burp Suite Professional](https://portswigger.net/burp/documentation/desktop/automated-scanning/api-scans).

### 2. Easily identify any hosted APIs that have been left accessible to attackers

Burp now checks whether you have left any hosted OAS definitions that may be accessed by attackers. This helps flag any potential security threats - particularly while you transition away from having to scan APIs via hosting them yourself.

### 3. Test a wider range of OpenAPI Specification (OAS) endpoints

When crawling your APIs, you can now include HTTP headers, allowing you to scan a much wider range of OAS endpoints. More comprehensive scans. More vulnerabilities identified.

  

Read more about testing [OAS endpoints](https://portswigger.net/burp/documentation/scanner/api-scanning-reqs#:~:text=as%20absolute%20URLs.-,API%20endpoint%20requirements,-Burp%20Scanner%20can).

### 4. Scan APIs that require endpoint authentication

Finally, for Burp Suite Enterprise Edition users, you can now scan APIs that require authentication. Previously, crawlers were denied entry to authenticated endpoints, but this update allows the scanner to bypass some authentication points without having to pause scans.

  

Read more about [endpoint authentication](https://portswigger.net/burp/documentation/enterprise/user-guide/working-with-sites/add-new-sites/add-new-apis#configuring-api-authentication).  
  

**See these features in action. [Watch a demo of API scanning in Burp Suite Enterprise Edition](https://www.youtube.com/watch?v=saj-WhBqMTA) .**

## What’s next for API scanning in Burp Suite?

Users of Burp Suite Professional and Burp Suite Enterprise Edition now have access to all four of the features above.

  

We’re also planning the following key updates which will form the next release of the API scanning functionality:

### Burp Suite Enterprise Edition

#### Endpoint configuration

When uploading an API definition, Burp Suite will soon be able to parse the file and display the endpoints for you. You’ll then be able to search endpoints, and uncheck the ones you don’t want to include in the scan.

  

This will help with excluding destructive endpoints, and provide the capability to bulk include and exclude specific methods - for example post or delete.

#### Bulk upload of API definition files

Following endpoint configuration, the next update will allow users to bulk import API targets via URL or definition file upload. This update will reduce the load of importing one API at a time, unlocking significant time savings - particularly when onboarding APIs.

  
**Want to learn about API scanning in Burp Suite Enterprise Edition? [Request your free, fully-featured trial here.](https://portswigger.net/burp/enterprise/trial?ps_medium=organic&ps_source=blog&ps_campaign=api_scanning_launch_blog)**

## Coming soon to Burp Suite Enterprise Edition and Professional

#### Scanning of SOAP APIs supported

This first release enables the scanning of open APIs only, however, we will be supporting SOAP in Burp Suite in one of our next releases. This will enable customers using SOAP to perform the API scanning capabilities above.

  

These aren’t the only updates planned - we’ll be extending the functionality of the API scanner with each future release. To stay up to date with the latest feature drops, follow [@burp_suite on X](https://x.com/burp_suite?lang=en).

### What do you want to see in the API scanner?

We want to hear from you about the features that work, the features that don’t, and any other features you'd like to see in the future.

  

Make yourself heard. Join our [API product research survey here](https://usabi.li/do/fadc3f14319b/d454), or [email us with your feedback and suggestions here](mailto:support@portswigger.net).

## Next steps

Ready to enhance your API security with Burp Suite Enterprise Edition? [Request your free, fully-featured trial here.](https://portswigger.net/burp/enterprise/trial?ps_medium=organic&ps_source=blog&ps_campaign=api_scanning_launch_blog)