En este laboratorio de Portswigger, te voy a explicar la manera de ejecutar un CL.0 en la prácticar. CL.0 es cuando el Front-end utiliza content-length pero el backend lo ignora.

Para confirmar esta vulnerabilidad: Primero abrimos burpsuite e interceptamos algunas peticiones, como por ejemplo una carpeta estatica que cachee, y como el front-end va a estar utilizando contet-length pero el backend lo ignora, tan solo hay que incluir la petición contrabandada con sus respectivos bytes:
```
POST /resources/images/blog.svg HTTP/1.1
Host: 0a7300a6043e677782d666d2005e00da.web-security-academy.net
Cookie: session=VIWtrgAZZ6kiN5jdYk77NjkySgJ2BDTa
Connection: keep-alive
Content-Length: 55

GET /hopefully404 HTTP/1.1
X-Ignore: X
```
Como el backend va a estar ignorando esta cabecera, vería algo así:
```Request1
POST /resources/images/blog.svg HTTP/1.1
Host: 0a7300a6043e677782d666d2005e00da.web-security-academy.net
Cookie: session=VIWtrgAZZ6kiN5jdYk77NjkySgJ2BDTa
Connection: keep-alive
```
```Request2
GET /hopefully404 HTTP/1.1
X-Ignore: X
```
Y la próxima petición se concatenara a la ruta, dando un 404.
Pero no tan rápido campeón, tenemos que asegurarnos de que esto se esté reusando en la misma conexion tcp asi que, dentro del repeater y en la parte de pestañas, le damos al ícono de más (+) y elijimos la última opción de "create a tab group" que nos da. Esto nos creara una carpeta con el grupo de pestañas que seleccionemos, y serán como un grupo en el que podemos sincronizar solicitudes HTTP en la misma conexión tcp.
![[Pasted image 20240817223740.png]]
Para eso también le damos a la pestaña de settings > "Enable HTTP/1.1 connection reuse", a continuación, en el dropdown del botón send (el cual envía las peticiones) y elegimos "Send gropu in sequence (in a single connection)". De esta manera, enviando la conección, se estará mandando sobre la misma solicitud, y podremos acceder a todas las rutas que querramos