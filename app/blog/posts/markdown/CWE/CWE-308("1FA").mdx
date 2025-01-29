https://cwe.mitre.org/data/definitions/308.html
I abbreviate this flaw as "1fa" because this CWE means using only one factor of authentication as the only way of [[markdown/TCM/Authentication/Authentication|Authentication]] 

In both of these examples, a user is logged in if their given password matches a stored password:
```c
unsigned char *check_passwd(char *plaintext) {

ctext = simple_digest("sha1",plaintext,strlen(plaintext), ... );  
_//Login if hash matches stored hash_  
if (equal(ctext, secret_password())) {

login_user();

}

}
```
```java
String plainText = new String(plainTextIn);  
MessageDigest encer = MessageDigest.getInstance("SHA");  
encer.update(plainTextIn);  
byte[] digest = password.digest();  
_//Login if hash matches stored hash_  
if (equal(digest,secret_password())) {

login_user();

}
```
Both of this codes relies on the password mechanism, using a only one factor of authentification. If an attacker can steal or guess a user's password, they are given full access to their account. Note this code also uses SHA-1, which is a weak hash ([CWE-328](https://cwe.mitre.org/data/definitions/328.html)). It also does not use a salt ([CWE-759](https://cwe.mitre.org/data/definitions/759.html)).