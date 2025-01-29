This lab is vulnerable to request smuggling because the front-end server downgrades HTTP/2 requests even if they have an ambiguous length.

To solve the lab, delete the user `carlos` by using response queue poisoning to break into the admin panel at `/admin`. An admin user will log in approximately every 15 seconds.

The connection to the back-end is reset every 10 requests, so don't worry if you get it into a bad state - just send a few normal requests to get a fresh connection.

### Confirm vuln
Antes de confirmar esta vulnerabilidad, pondremos la opción de Burpsuite para que nos muestre los caracteres no imprimibles(crlf) y sacamos la opción de "update: content-length" .
Pnesemos que si la aplicación web sigue el RFC va a preferir el Transfer-Encoding antes que el content-length, así que una manera rápida de ver esto es:
```
POST / HTTP/2
Host: 0add008603fc55ff82f4070500f8005e.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked

0

GET /QWERTY HTTP/1.1
X-Ignore: x
```
Y enviamos también en una pestaña gemela "resend". De esta manera estamos concatenando la siguiente request a nuestra 404 not found. Tal vez se necesita algunos intentos porque hay más solicitudes enviadas.
Ahora como nosotros queremos capturar una cookie de sesión, simplemente con desviar la petición del usuario y que la tomemos nosotros, es suficiente para obtener su response.
```
POST /qwerty HTTP/2
Host: 0add008603fc55ff82f4070500f8005e.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked

0

GET /QWERTY HTTP/1.1
Host: 0add008603fc55ff82f4070500f8005e.web-security-academy.net


```
notece el esacio (crlf) del final
Para esto vamos a necesitar enviar indefinidas solicitudes hasta que alguna me de la respuesta de la victima, con su cooki de sesión incluída. Sin embargo enviar respuestas indefinidas manualmente desde el repeater no suena como una tarea muy divertida, así que vamos a utilizar el turbo intruder, primero lo configuramos:

click derecho send to intruder, configuramos que tenga null payloads y "continue indefinitely".  Vamos a resource pool y le damos a create new resource pool, También en la pestaña de resource pool, para setear el Maximun concurrent request en 1, y el delay de las solicitudes 800 milisegundos. Podemos filtrar las respuestas por las que sean válidas o 300, redirección, en "selected items". Y en settings, sacarle el update content-length

![[Pasted image 20240815171701.png]]Una vez que tenemos la solicitud, vemos su respuesta y tenemos acceso a la cookie session, la cual tenemos que configurar en el cookie storage. Una vez logueamos como admin, vamos a admin panel y borramos a carlos