##### What's BOLA?
Bola is when there's a brocken acces autorization that allows to the attacker or any user to access to a content which is private and shouldn't be accessible for others users.  Often, insecure APIs
will make the mistake of validating that the user is authenticated but fail to
check whether that user is authorized to access the requested resources
##### Finding endpoints
The bola use to be diferent id from the url, this are examples of the pattern:
![[Pasted image 20241024102400.png]]
![[Pasted image 20241024102458.png]]

**Formexample** if an api gives you the following URL `/api/v1/receipt/135`. Knowing this, you could then check for other numbers by using 135 as the payload position in Burp Suite or Wfuzz and changing 135 to numbers between 0 and 200
For BOLA **test this**
- If the apis follow certain pattern you could test that same pattern in other paths
- Check for all HTTP methods and not only GET

There are different approaches to this vulnerabilitty, one of them is **A-B testing**, **side-chanel BOLA**
 
 utilice el link, gracias por compartirme eso, pero le dice a mi amigo que no le reconoce el dispositivo, a pesar de que es el mismo celular que utilizo, con el mismo número, e incluso con las credenciales correctas, supongo que si ganaron control en la cuenta pudieron modificar los datos y acceder a todas sus contraseñas, hay algo que pueda hacer además de contactar con el servicio técnico de google?
 - - - - -
##### A-B testing
A-B testing consinst in having mutliple account with different privileges, (an account wihtout login, a user free, a vip user) a compared each other for detecting patterns.
You want to test for:
- How the resourses are identified and how these are requested (GUID, ID, etc.)
- Swap your user A account token to the user B acount token to see if this way you could access the resources of the user B
The scale of this testing is small, but if you can access one user’s resources,
you could likely access all user resources of the same privilege level.

------
##### Side channel BOLA
This technique is used by observing the timing and diferential response.
For example here, we see a small difference in this fuzzing, but we can leverage this to perform a bruteforcing on `test` endpoint and potentially discover a data leakage
![[Pasted image 20241024134850.png]]

-------
### BFLA
BFLA is similar to BOLA, but in this case means to perform actions rather than access some resources, in bola you could do actions as a delete, or a trace request that is only avaible for admin
Let's see the following aproaches:

----------
##### A-B-A Testing for BFLA 
Apis have several range, and diffrents privileges, such as basic user, merchant, partner, and admin. Try to do the accounts privileges you can do
- Create, read, update, or delete resources as UserA. and note how are requested and identified
- Send GET, PUT, POST, and DELETE requests for UserA’s resources using UserB’s token. If possible, alter resources by updating the properties of an object.
- Check UserA’s resources have been modified.
----------
##### BLFA in POSTMA

For example if i use an endpoint to access user photo's this isn't necesarilly a BOLA, but if i could use the DELETE method to dalata it so this is worriyng BFLA. One of the simplest way to test for BOLA is by simply triyng to perfom priveled actions as some user with no priveleges, for this is worth to have the api documentation and saving time.
What are the keys mention on this to perform an efficient BFLA testing to save time and identyfying that vulnerability:
- Set the authorization token as a variable across the Postman collection. This allows you to easily **swap between different user tokens** (UserA and UserB) across multiple requests in a batch, instead of manually changing the token in each request.
- Target high-risk request, with sensitive data and all of that
- Automate response checking by using **tests** (e.g., look for 200 status codes or any other success indicators for your API). This helps you identify where unauthorized access was successful.

