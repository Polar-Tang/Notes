https://cwe.mitre.org/data/definitions/312.html
Storig sensitive information that can be accesible to another control sphere

##### Example1
The following code excerpt stores a plaintext user account ID in a browser cookie.
```java
response.addCookie( new Cookie("userAccountID", acctID);
```
##### Example2
The following code attempts to establish a connection, read in a password, then store it to a buffer.

```c
server.sin_family = AF_INET; hp = gethostbyname(argv[1]);  
if (hp==NULL) error("Unknown host");  
memcpy( (char *)&server.sin_addr,(char *)hp->h_addr,hp->h_length);  
if (argc < 3) port = 80;  
else port = (unsigned short)atoi(argv[3]);  
server.sin_port = htons(port);  
if (connect(sock, (struct sockaddr *)&server, sizeof server) < 0) error("Connecting");  
...  
while ((n=read(sock,buffer,BUFSIZE-1))!=-1) {

  
write(dfd,password_buffer,n);  
...
```

While successful, the program does not encrypt the data before writing it to a buffer, possibly exposing it to unauthorized actors.

##### Example3
The following examples show a portion of properties and configuration files for Java and ASP.NET applications. The files include username and password information but they are stored in cleartext.

This Java example shows a properties file with a cleartext username / password pair.
```Java
_# Java Web App ResourceBundle properties file_  
...  
webapp.ldap.username=secretUsername  
webapp.ldap.password=secretPassword  
...
```
  
The following example shows a portion of a configuration file for an ASP.Net application. This configuration file includes username and password information for a connection to a database but the pair is stored in cleartext.
```ASP.NET
  
...  
<connectionStrings>

<add name="ud_DEV" connectionString="connectDB=uDB; uid=db2admin; pwd=password; dbalias=uDB;" providerName="System.Data.Odbc" />

</connectionStrings>  
...
```
Username and password information should not be included in a configuration file or a properties file in cleartext as this will allow anyone who can read the file access to the resource. If possible, encrypt this information.