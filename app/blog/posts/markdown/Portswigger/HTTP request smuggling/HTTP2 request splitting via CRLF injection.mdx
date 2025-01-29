This lab is vulnerable to request smuggling because the front-end server downgrades HTTP/2 requests and fails to adequately sanitize incoming headers.

To solve the lab, delete the user `carlos` by using [response queue poisoning](https://portswigger.net/web-security/request-smuggling/advanced/response-queue-poisoning) to break into the admin panel at `/admin`. An admin user will log in approximately every 10 seconds.

The connection to the back-end is reset every 10 requests, so don't worry if you get it into a bad state - just send a few normal requests to get a fresh connection.
### Confirmar vulnerabilidad
**preparación del burpsuite**
Para este laboratorio interceptamos la raíz, la ruta "/", cambiamos el método a POST, hacemos click en settings, que tiene el logo de un engranaje, le sacamos el "update Content-Length" para que no nos este generando esta cabecera con el valor del boy automáticamente.
vamos a la columna derecha y le damos a agregar una nueva "Request headers" y esta vez la cabecera tendrá un crlf extra
Adiferencia del laboratorio antrior agregamos otro CRLF adicional para indicar el final de la request

| Name | value                                            |
| ---- | ------------------------------------------------ |
| foo  | ```Bar\r\n<br>\r\nGET /hopefully404 HTTP/1.1\r\n |
|      |                                                  |

Tal vez requiera un segundo intento, pero esto nos dará un 404. Lo que tenemos que hacer para obtener la cookie es enviar esta solicitud hasta que nos de un 302, es decir que el administrador recibió nuestra solicitud y nostotros tenemos la suya para hacer el hijacking
La colocamos en el cookie storage y a seguir pa' lante